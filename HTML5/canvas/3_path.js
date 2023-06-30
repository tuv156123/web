function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能    
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.strokeStyle='blue';
    context.lineWidth=5;

    context.fillStyle='red';  
    
    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400,  50);
    context.lineTo( 50, 200);
    context.closePath();
    
    context.fill();
    context.stroke();
}
window.addEventListener('load', doFirst)