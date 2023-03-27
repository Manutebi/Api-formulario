if (data.fields.Attachment && data.fields.Attachment.length > 0) {
    document.getElementById("attachment").value = data.fields.Attachment[0].url;
  
    // Mostrar miniaturas de las imágenes
    const attachmentContainer = document.getElementById("imagen-preview-container");
    const attachments = data.fields.Attachment;
    const deletedAttachments = []; // Arreglo para almacenar las imágenes eliminadas temporalmente
  
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
        // Eliminar imagen del arreglo attachments y agregarla al arreglo deletedAttachments
        const index = attachments.indexOf(attachment);
        if (index > -1) {
          attachments.splice(index, 1);
          deletedAttachments.push(attachment);
        }
      });
  
      thumbnail.appendChild(image);
      thumbnail.appendChild(deleteButton); // Agregar botón de eliminación al contenedor de la imagen
      attachmentContainer.appendChild(thumbnail);
    });
  
    // Agregar botón de deshacer cambios
    const undoButton = document.createElement("button");
    undoButton.innerText = "Deshacer cambios";
    undoButton.addEventListener("click", () => {
      // Restaurar imágenes eliminadas
      deletedAttachments.forEach(attachment => {
        attachments.push(attachment);
  
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
          // Eliminar imagen del arreglo attachments y agregarla al arreglo deletedAttachments
          const index = attachments.indexOf(attachment);
          if (index > -1) {
            attachments.splice(index, 1);
            deletedAttachments.push(attachment);
          }
        });
  
        thumbnail.appendChild(image);
        thumbnail.appendChild(deleteButton); // Agregar botón de eliminación al contenedor de la imagen
        attachmentContainer.appendChild(thumbnail);
      });
  
      // Vaciar el arreglo deletedAttachments
      deletedAttachments.length = 0;
    });
    attachmentContainer.appendChild(undoButton);
  } else {
    // si no hay imagenes, asignar una imagen predeterminada
    document.getElementById("attachment").value = "/images/photo.png";
    
    // Crear un contenedor para la imagen
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("image-container");
    
    // Crear un elemento img y asignarle la ruta de la imagen como su atributo src
    const image = document.createElement("img");
    image.classList.add("thumbnail");
    image.src = "/images/photo.png";
    
    // Agregar el elemento img al contenedor de la imagen
    thumbnail.appendChild(image);
    
    // Agregar el contenedor de la imagen al contenedor principal
    const attachmentContainer = document.getElementById("imagen-preview-container");
    attachmentContainer.appendChild(thumbnail);
  }



  

//   Segunda funcion
  if (data.fields.Attachment && data.fields.Attachment.length > 0) {
    document.getElementById("attachment").value = data.fields.Attachment[0].url;
  
    // Mostrar miniaturas de las imágenes
    const attachmentContainer = document.getElementById("imagen-preview-container");
    const attachments = data.fields.Attachment;
    const deletedAttachments = []; // Arreglo para almacenar las imágenes eliminadas temporalmente
  
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
        // Eliminar imagen del arreglo attachments y agregarla al arreglo deletedAttachments
        const index = attachments.indexOf(attachment);
        if (index > -1) {
          attachments.splice(index, 1);
          deletedAttachments.push(attachment);
        }
      });
  
      thumbnail.appendChild(image);
      thumbnail.appendChild(deleteButton); // Agregar botón de eliminación al contenedor de la imagen
      attachmentContainer.appendChild(thumbnail);
    });
  
    // Agregar botón de deshacer cambios
    const undoButton = document.createElement("button");
    undoButton.innerText = "Deshacer cambios";
    undoButton.addEventListener("click", () => {
      // Restaurar imágenes eliminadas
      deletedAttachments.forEach(attachment => {
        attachments.push(attachment);
  
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
          // Eliminar imagen del arreglo attachments y agregarla al arreglo deletedAttachments
          const index = attachments.indexOf(attachment);
          if (index > -1) {
            attachments.splice(index, 1);
            deletedAttachments.push(attachment);
          }
        });
  
        thumbnail.appendChild(image);
        thumbnail.appendChild(deleteButton); // Agregar botón de eliminación al contenedor de la imagen
        attachmentContainer.appendChild(thumbnail);
      });
  
      // Vaciar el arreglo deletedAttachments
      deletedAttachments.length = 0;
    });
    attachmentContainer.appendChild(undoButton);
  }
  else {
    // si no hay imagenes, asignar una imagen predeterminada
    document.getElementById("attachment").value = "/images/5437842.jpg";
  }
  