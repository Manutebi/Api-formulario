function enviarDatos() {
    const apiKey = 'keykY5YjFxN23izT6'; 
    const baseId = 'appU7lYsFSoNH4hGO'; 
    const tableName = 'Productos'; 
    
    // Agrega los valores del formulario a un objeto
    const formData = {
    'Nombre': document.getElementById('nombre').value,
    'Descripcion': document.getElementById('descripcion').value,
    'Precio': parseFloat(document.getElementById('precio').value)
    };
    
    // Realiza una solicitud POST a la API de Airtable con los datos del formulario
    fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'fields': formData
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
      // Agrega aquí el código que deseas ejecutar después de enviar los datos
    alert('¡Datos enviados correctamente!');
    })
    .catch(error => {
    console.error(error);
      // Agrega aquí el código que deseas ejecutar si se produce un error
    alert('¡Hubo un error al enviar los datos!');
    });
}



function actualizarDatos() {
    const apiKey = 'keykY5YjFxN23izT6'; 
    const baseId = 'appU7lYsFSoNH4hGO'; 
    const tableName = 'Productos'; 
    const recordId = 'Nombre'; // Reemplazar con el ID del registro que se va a actualizar
  
    // Agrega los valores del formulario a un objeto
    const formData = {
      'Nombre': document.getElementById('nombre').value,
      'Descripcion': document.getElementById('descripcion').value,
      'Precio': document.getElementById('precio').value
    };
  
    // Realiza una solicitud PUT a la API de Airtable con los datos del formulario y el ID del registro que se va a actualizar
    fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'fields': formData
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Agrega aquí el código que deseas ejecutar después de actualizar los datos
      alert('¡Datos actualizados correctamente!');
    })
    .catch(error => {
      console.error(error);
      // Agrega aquí el código que deseas ejecutar si se produce un error
      alert('¡Hubo un error al actualizar los datos!');
    });
  }


  function obtenerRegistro(nombre) {
    const apiKey = 'keykY5YjFxN23izT6'; 
    const baseId = 'appU7lYsFSoNH4hGO'; 
    const tableName = 'Productos'; 
  
    // Realiza una solicitud GET a la API de Airtable para buscar el registro por el campo "Nombre"
    fetch(`https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula={Nombre}='${nombre}'`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Obtiene el ID del primer registro que se encuentra
      const recordId = Nombre
     } 
    )
    }
    
