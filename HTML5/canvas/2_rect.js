function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能    
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.fillStyle='red';    
    context.strokeStyle='green';    

    context.fillRect(100,100,300,200)
    context.clearRect(150, 150, 50, 50);

    context.strokeRect(100, 500, 100, 100);

    context.rect(700, 500, 300, 300);
    context.fill();
    // context.stroke(); 
    
    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener('load', doFirst)