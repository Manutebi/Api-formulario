const apiKey = 'keykY5YjFxN23izT6';
const baseId = 'appU7lYsFSoNH4hGO';
const tableName = 'Productos';

const form = document.getElementById('product-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const opciones = document.getElementById('Opciones').value;
    const name2 = document.getElementById('name2').value;
    const notes = document.getElementById('notes').value;

    // Obtener el archivo del input
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    // Crear una referencia al archivo en Firebase
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);

    // Subir el archivo a Firebase
    fileRef.put(file).then((snapshot) => {
        // Obtener la URL pública del archivo subido
        fileRef.getDownloadURL().then((url) => {
            // Crear un nuevo registro en la tabla table_2
            fetch(`https://api.airtable.com/v0/${baseId}/table_2`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: {
                        Name2: name2,
                        Notes: notes,
                    },
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Obtener el ID del registro creado
                    const idCreado = data.id;

                    // Usar el ID del registro creado para crear un nuevo registro en la tabla Productos y vincularlo al registro creado en la tabla table_2
                    fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fields: {
                                Nombre: nombre,
                                Descripcion: descripcion,
                                Precio: parseFloat(precio),
                                Opciones: opciones,
                                Table2: [idCreado],
                                Attachment: [{ url }],
                            },
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                        });
                });
        });
    });
});