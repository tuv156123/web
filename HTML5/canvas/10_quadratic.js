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
    
    // 四分之一線
    context.beginPath();
    
    context.moveTo(           0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    
    context.moveTo(canvas.width / 2,             0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle='rgba(0,0,0,0.8)'; 
    context.stroke();
    // ====================

    context.strokeStyle='red'; 
    context.lineWidth=5;  

    // 左上角
    
    context.beginPath();

    context.moveTo(150, 250); 
    // context.quadraticCurveTo(250, 100, 400, 300);
    context.quadraticCurveTo(50, 550, 400, 300);
    
    context.stroke();

        // 輔助線
        context.strokeStyle='blue'; 
        context.lineWidth=1; 
        context.beginPath();
        context.moveTo(150, 250); 

        //控制點
        // context.lineTo(250, 100);    
        context.lineTo(50, 550); 

        context.lineTo(400, 300); 
        context.stroke();

        context.fillText('(150, 250)', 130, 260);
        

    // 右上角
   
    // 左下角
    
    
}
window.addEventListener('load', doFirst)