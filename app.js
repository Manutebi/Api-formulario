// Obtener el valor del parámetro "ID" de la URL de la página actual
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ID = urlParams.get("ID");

fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos/${ID}`, {
    headers: {
        Authorization: "Bearer keykY5YjFxN23izT6"
    }
})
.then(response => response.json())
.then(data => {
    // Establecer los valores de los campos del formulario
    document.getElementById("nombre").value = data.fields.Nombre;
    document.getElementById("descripcion").value = data.fields.Descripcion;
    document.getElementById("precio").value = parseFloat(data.fields.Precio);
    // document.getElementById("opciones").value = data.fields.Opciones;
    document.getElementById("name").value = data.fields.Name;
    document.getElementById("table2").value = data.fields.Table2;
    document.getElementById("attachment").value = data.fields.Attachment[0].url;
    
    // const inputImagenes = document.getElementById('imagenes');
    // inputImagenes.addEventListener('change', () => {
    // const imagenesSeleccionadas = inputImagenes.files;
    // for (let i = 0; i < imagenesSeleccionadas.length; i++) {
    //     const imagen = new Image();
    //     imagen.src = URL.createObjectURL(imagenesSeleccionadas[i]);
    //     imagenes.push(imagen.src);
    // }
    // });

    
   // Mostrar miniaturas de las imágenes
const attachmentContainer = document.getElementById("imagen-preview-container");
const attachments = data.fields.Attachment;

attachments.forEach(attachment => {
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("image-container");

  const image = document.createElement("img");
  image.classList.add("thumbnail");
  image.src = attachment.url;
  image.alt = attachment.filename;
  image.addEventListener("click", () => {
    window.open(image.src);
  });

  // Agregar botón de eliminación
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Eliminar";
  deleteButton.addEventListener("click", () => {
    // Eliminar imagen del contenedor
    attachmentContainer.removeChild(thumbnail);

    // Eliminar imagen del arreglo attachments
    const index = attachments.indexOf(attachment);
    if (index > -1) {
      attachments.splice(index, 1);
    }

    // Eliminar imagen de Firebase Storage
    // Crear una referencia al archivo que deseas eliminar
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('gs://acquired-device-381212.appspot.com/');

    // Eliminar el archivo
    imageRef.delete().then(() => {
      console.log('Archivo eliminado con éxito');
    }).catch((error) => {
      console.error('Error al eliminar el archivo:', error);
    });

    // Eliminar registro de Airtable
    const base = new Airtable({apiKey: 'keykY5YjFxN23izT6'}).base('appU7lYsFSoNH4hGO');

    base('Productos').destroy('ID_DEL_REGISTRO', (err, deletedRecord) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Registro eliminado con éxito:', deletedRecord.id);
    });
  });

  thumbnail.appendChild(image);
  thumbnail.appendChild(deleteButton); // Agregar botón de eliminación al contenedor de la imagen
  attachmentContainer.appendChild(thumbnail);
});



    // Obtener el ID de la fila de la tabla table_2
    const table2ID = data.fields.Table2[0];

    // Hacer una solicitud a Airtable para obtener los datos de la fila de la tabla table_2
    fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/table_2/${table2ID}`, {
        headers: {
            Authorization: "Bearer keykY5YjFxN23izT6"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Establecer los valores de los campos del formulario
        document.getElementById("name2").value = data.fields.Name2;
        document.getElementById("notes").value = data.fields.Notes;
        // document.getElementById("assignee").value = data.fields.Assignee.name;
        document.getElementById("status").value = data.fields.Status;
    })
    .catch(error => {
        console.error(error);
    });

})
.catch(error => {
    console.error(error);
});



    fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos/${ID}`, {
    headers: {
            Authorization: "Bearer keykY5YjFxN23izT6"
        }
    })
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById("Opciones");
        const currentOption = data.fields.Opciones;
        const optionElement = document.createElement("option");
        optionElement.value = currentOption;
        optionElement.textContent = currentOption;
        if (currentOption === data.fields.Opciones) {
            optionElement.selected = true;
        }
        selectElement.appendChild(optionElement);
    })
    .catch(error => {
        console.error(error);
    });



    fetch("https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos", {
        headers: {
            Authorization: "Bearer keykY5YjFxN23izT6"
        }
    })
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById("Opciones");
        data.records.forEach(record => {
            const optionElement = document.createElement("option");
            optionElement.value = record.fields.Opciones;
            optionElement.textContent = record.fields.Opciones;
            selectElement.appendChild(optionElement);
        });
    })
    .catch(error => {
        console.error(error);
    });


    // Obtener el formulario
    const form = document.getElementById("product-form");

    // Agregar un listener al evento "submit" del formulario
    form.addEventListener("submit", event => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const formData = new FormData(document.getElementById("product-form"));
    const nombre = formData.get("Nombre");
    const descripcion = formData.get("Descripcion");
    const opciones = formData.get("Opciones");
    const precio = formData.get("Precio");
    // const name = formData.get("name");
    const table2 = formData.get("table2");
    const name2 = formData.get("name2");
    const notes = formData.get("notes");
    // const attachment = formData.get("attachment");
    // const imaganes = formData.get("imagenes");


    //Firebase credenciales de usuario
    var firebaseConfig = {
      apiKey: "AIzaSyClpSYoi3RbW5J4yRwwPTJEB8P6-yqOwu0",
      authDomain: "acquired-device-381212.firebaseapp.com",
      projectId: "acquired-device-381212",
      storageBucket: "acquired-device-381212.appspot.com",
      messagingSenderId: "86316770576",
      appId: "1:86316770576:web:83e810c1dc625221967195",
      measurementId: "G-3PPTLWVK8Q"
    };
    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);


    const ref = firebase.storage().ref();
    const files = document.querySelector("#imageFiles").files;
    
    let uploadedCount = 0;
    let imageUrls = [];
    
    // Subir imágenes a Firebase storage
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const name = new Date() + "-" + file.name;
      const metadata = { contentType: file.type };
    
      ref.child(name).put(file, metadata)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(imageUrl => {
          console.log(imageUrl);
          imageUrls.push({ url: imageUrl });
    
          uploadedCount++;
    
          if (uploadedCount === files.length) {
            updateAirtableRow(imageUrls);
          }
        })
        .catch(error => console.error(error));
    }
    
    // Si no se seleccionaron imágenes, actualizar Airtable sin ellas
    if (files.length === 0) {
      updateAirtableRow([]);
    }
    
    function updateAirtableRow(imageUrls) {
        // Obtener las imágenes seleccionadas para eliminar
        const selectedImages = document.querySelectorAll("#deleteImages input:checked");
        const imagesToDelete = Array.from(selectedImages).map(input => input.value);
      
        // Obtener la fila de Airtable para obtener las imágenes existentes
        fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos/${ID}`, {
          headers: {
            Authorization: `Bearer keykY5YjFxN23izT6`
          }
        })
        .then(response => response.json())
        .then(data => {
          // Obtener las imágenes existentes en la fila
          let existingImages = data.fields.Attachment || [];
      
          // Eliminar las imágenes seleccionadas
          existingImages = existingImages.filter(image => !imagesToDelete.includes(image.url));
      
          // Agregar las nuevas imágenes al final del array
          const allImages = existingImages.concat(imageUrls);
      
          // Actualizar la fila con todas las imágenes
          fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos/${ID}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer keykY5YjFxN23izT6`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              fields: {
                Nombre: nombre,
                Descripcion: descripcion,
                Opciones: opciones,
                Precio: parseFloat(precio),
                Attachment: allImages,
                Table2:[table2],
              }
            })
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
      
            if (imageUrls.length > 0) {
              alert(`${imageUrls.length} imágenes subidas y agregadas correctamente`);
            } else if (imagesToDelete.length > 0) {
              alert(`${imagesToDelete.length} imágenes eliminadas correctamente`);
            } else {
              alert(`Campos actualizados correctamente`);
            }
          })
          .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
      }


    // Actualizar los datos de la fila en la tabla "table_2"
    fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/table_2/${table2}`, {
    method: "PATCH",
    headers: {
        Authorization: "Bearer keykY5YjFxN23izT6",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        fields: {
            Name2: name2,
            Notes: notes,

        }
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    alert("¡Datos actualizados en la tabla 'table_2'!");
    })
    .catch(error => console.log(error));




//     document.getElementById("image").addEventListener("change", handleImageUpload);

//     function handleImageUpload() {
//     const fileInput = document.getElementById("image");
//     const file = fileInput.files[0];
    
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
    
//     reader.onload = function(e) {
//         const imgData = e.target.result;
//         const newImg = document.createElement("img");
//         newImg.src = imgData;
        
//         const gallery = document.getElementById("gallery");
//         gallery.appendChild(newImg);
//     }
// }

    
});
