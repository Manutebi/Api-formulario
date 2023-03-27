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
    // const table2 = document.getElementById('table2').value;
    // const name = document.getElementById('name').value;
    // const name2 = document.getElementById('name2').value;
    // const assignee = document.getElementById('assignee').value;
    // const notes = document.getElementById('notes').value;
    // const attachment= document.getElementById(attachment).value;

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
                // Table2: [table2],
                // Name: name,
                // Name2: name2,
                // Assignee: assignee,
                // Notes: notes,
                // Attachment: attachment
            },
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
});