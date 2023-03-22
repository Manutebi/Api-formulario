function enviarDatos() {
  const apiKey = 'keykY5YjFxN23izT6'; 
  const baseId = 'appU7lYsFSoNH4hGO'; 
  const tableName = 'Productos'; 
  
  // Se agregan los valores del formulario a un objeto
  const formData = {
    'Nombre': document.getElementById('nombre').value,
    'Descripcion': document.getElementById('descripcion').value,
    'Precio': parseFloat(document.getElementById('precio').value)
  };
  
  // Se realiza una solicitud POST a la API de Airtable con los datos del formulario
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
    
    alert('Datos enviados correctamente!');
  })
  .catch(error => {
    console.error(error);
    alert('error al enviar los datos!');
  });
}

function cargarProductos() {
  const apiKey = 'keykY5YjFxN23izT6'; 
  const baseId = 'appU7lYsFSoNH4hGO'; 
  const tableName = 'Productos'; 
  
  // Se realiza una solicitud GET a la API de Airtable para obtener los IDs de los productos
  fetch(`https://api.airtable.com/v0/${baseId}/${tableName}?fields%5B%5D=ID`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Se agregan los IDs de los productos al combobox
    const selectElement = document.getElementById('productoId');
    data.records.forEach(record => {
      const optionElement = document.createElement('option');
      optionElement.value = record.id;
      optionElement.textContent = record.fields.ID;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error(error);
    // Mensaje de error
    alert('Error al cargar los datos de los productos!');
  });
}

function obtenerProducto() {
  const apiKey = 'keykY5YjFxN23izT6'; 
  const baseId = 'appU7lYsFSoNH4hGO'; 
  const tableName = 'Productos'; 
  
  // Se obtiene el ID del producto seleccionado en el combobox
  const productoId = document.getElementById('productoId').value;
  
  // Se realiza una solicitud GET a la API de Airtable para obtener los datos del producto
  fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${productoId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Se muestran los datos del producto en un formulario
    const nombreInput = document.querySelector('#nombre');
    const descripcionInput = document.querySelector('#descripcion');
    const precioInput = document.querySelector('#precio');
    const selectInput = document.querySelector('#select');
    
    nombreInput.value = data.fields.Nombre;
    descripcionInput.value = data.fields.Descripcion;
    precioInput.value = data.fields.Precio;
    selectInput.value = data.fields.Select;
    
  })
  .catch(error => {
    console.error(error);
    alert('Error al obtener los datos!');
  });
}



