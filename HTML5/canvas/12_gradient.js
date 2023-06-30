function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能    
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    if(canvas.width > canvas.height){
        range = canvas.width / 50;
    }else{
        range = canvas.height / 50;
    }

    for(let i = 0; i < range; i++){
        let interval = i * 50;
        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);        

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 8);        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // ====================
    // 線性漸層   
    // let linear = context.createLinearGradient(50, 50, 550, 350);  // 對角線
    let linear = context.createLinearGradient(50, 200, 550, 200);  // 水平漸層
    linear.addColorStop(0, 'red');
    linear.addColorStop(1, 'blue');
    linear.addColorStop(0.5, 'yellow');    
    
    context.fillStyle=linear;    
    context.fillRect(50,50,500,300);
    // ====================

    // 放射漸層
    let radial = context.createRadialGradient(300, 600, 70, 230, 600, 150);
    radial.addColorStop(0, 'red');
    radial.addColorStop(1, 'blue');

    context.fillStyle=radial;    
    context.fillRect(50,450,500,300);
    // ====================

    context.translate(800, 400);

    let radius = 150
    context.lineWidth = 15;

    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(0, '#666');
    circle.addColorStop(0.5, 'white');
    circle.addColorStop(1, '#666');

    context.beginPath();    
    context.arc(0, 0, radius, 0, 2 * Math.PI);

    context.strokeStyle = circle;
    context.stroke();
    
    
    context.translate(-800, -400);
    
}
window.addEventListener('load', doFirst)