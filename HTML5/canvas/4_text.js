function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能    
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.font='bold 50px Tahoma';    

    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline='alphabetic';
    
    context.fillText('google', 100, 100);
    
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle='red';    
    context.stroke();
    
    
    
}
window.addEventListener('load', doFirst)