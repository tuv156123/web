function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能    
   document.getElementById('dropzone').ondragover = dragOver;
   document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
    e.preventDefault();
}
function dropped(e){
    e.preventDefault();

    let files = e.dataTransfer.files

    // 讀取檔案內容
    let readFile = new FileReader()

    for(let i = 0; i < files.length; i++){
        readFile.readAsDataURL(files[i])
        readFile.addEventListener('load', function(){
            // 動態新增 <img>
            // 1. 先建標籤
            let image = document.createElement('img')

            // 2. 將該標籤的屬性和方法先寫好
            image.src = readFile.result

            // 3. 找到爸爸，加進去
            let dropzone = document.getElementById('dropzone')
            // dropzone.appendChild(image)
            dropzone.insertBefore(image, dropzone.firstChild)
        })

    }
}

window.addEventListener('load', doFirst)