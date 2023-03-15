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

//////////////////////
// fetch("https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos", {
//     headers: {
//         Authorization: "Bearer keykY5YjFxN23izT6"
//     }
// })
// .then(response => response.json())
// .then(data => {
//     const selectElement = document.getElementById("Opciones");
//     data.records.forEach(record => {
//         const optionElement = document.createElement("option");
//         optionElement.value = record.fields.Opciones;
//         optionElement.textContent = record.fields.Opciones;
//         selectElement.appendChild(optionElement);
//     });
// })
// .catch(error => {
//     console.error(error);
// });


///////////////////////////////////////////////////////////////////////////
/////////////////////OBTENER LAS OPCIONES//////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

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

///////////////////////////////////////////////////////////////////////////
////////////////////////MOSTRAR TODAS LAS OPCIONES///////////////////////// 
///////////////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////////////
/////////////////////////////OBTENER LOS STATUS//////////////////////////// 
///////////////////////////////////////////////////////////////////////////

// fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO//table_2/${table2ID}`, {
// headers: {
//         Authorization: "Bearer keykY5YjFxN23izT6"
//     }
// })
// .then(response => response.json())
// .then(data => {
//     const selectElement = document.getElementById("Status");
//     const currentStatus = data.fields.Status;
//     const statusElement = document.createElement("status");
//     statusElement.value = currentStatus;
//     statusElement.textContent = currentStatus;
//     if (currentStatus === data.fields.Status) {
//         statusElement.selected = true;
//     }
//     selectElement.appendChild(optionElement);
// })
// .catch(error => {
//     console.error(error);
// });



///////////////////////////////////////////////////////////////////////////
//////////////////////MOSTRAR TODOS LOS STATUS/////////////////////////////
///////////////////////////////////////////////////////////////////////////

// fetch("https://api.airtable.com/v0/appU7lYsFSoNH4hGO/table_2", {
//     headers: {
//         Authorization: "Bearer keykY5YjFxN23izT6"
//     }
// })
// .then(response => response.json())
// .then(data => {
//     const selectElement = document.getElementById("Status");
//     data.records.forEach(record => {
//         const statusElement = document.createElement("status");
//         statusElement.value = record.fields.Status;
//         statusElement.textContent = record.fields.Status;
//         selectElement.appendChild(statusElement);
//     });
// })
// .catch(error => {
//     console.error(error);
// });



// Obtener todos los registros de la tabla table_2
fetch("https://api.airtable.com/v0/appU7lYsFSoNH4hGO/table_2", {
    headers: {
        Authorization: "Bearer keykY5YjFxN23izT6"
    }
})
.then(response => response.json())
.then(data => {
    const selectElement = document.getElementById("Status");
    // Crear una lista para almacenar los valores de Status
    const statusList = [];
    // Recorrer todos los registros de la tabla table_2
    data.records.forEach(record => {
        // Obtener el valor del campo Status y agregarlo a la lista
        const status = record.fields.Status;
        if (!statusList.includes(status)) {
            statusList.push(status);
        }
    });
    // Crear opciones para cada valor de la lista de Status
    statusList.forEach(status => {
        const optionElement = document.createElement("option");
        optionElement.value = status;
        optionElement.textContent = status;
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
// const assignee = formData.get("assignee");
const status = formData.get("status");

// Actualizar los datos de la fila en la tabla "Productos"
fetch(`https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos/${ID}`, {
method: "PATCH",
headers: {
    Authorization: "Bearer keykY5YjFxN23izT6",
    "Content-Type": "application/json"
},
body: JSON.stringify({
    fields: {
        Nombre: nombre,
        Descripcion: descripcion,
        Opciones: opciones,
        Precio: parseFloat(precio),
        Table2: [table2]
    }
})
})
.then(response => response.json())
.then(data => {
console.log(data);
alert("¡Datos actualizados en la tabla 'Productos'!");
})
.catch(error => console.log(error));

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
        // Assignee: assignee.name,
        Status: status
    }
})
})
.then(response => response.json())
.then(data => {
console.log(data);
alert("¡Datos actualizados en la tabla 'table_2'!");
})
.catch(error => console.log(error));
});