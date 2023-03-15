const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector('img');
const input = dropArea.querySelector("#input-file");
let files;


button.addEventListener('click', (e) => {
    input.click();
});

input.addEventListener('change', (e) => {
    input = this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});

function showFiles(files){
    if(files.length = undefined  ))
    processFile(files);
    }else{
        for(const file of files){
            processFile(file);
        }
    }
}
