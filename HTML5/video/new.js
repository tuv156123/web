function doFirst(){
    // 先跟畫面產生關聯
    myMovie = document.getElementById('myMovie')
    playButton = document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')
    progress = document.getElementById('progress')

    barsize = parseInt(getComputedStyle(defaultBar).width)
    // alert(barsize)

    // 再建事件聆聽功能
    playButton.addEventListener('click',playOrPause)
    defaultBar.addEventListener('click',clickedBar)

    // 全螢幕
    // document.getElementById('fullButton').addEventListener('click',function(){
    //     myMovie.webkitEnterFullScreen()
    // })
} 
function playOrPause(){
    
    if(!myMovie.paused && !myMovie.ended){   // 如果影片正在執行
        myMovie.pause()
        playButton.innerText = 'Play'
    }else{
        myMovie.play()
        playButton.innerText = 'Pause'
        setInterval(update, 300)
    }
}
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    }else{
        myMovie.currentTime = 0
        progress.style.width = `0px`
        playButton.innerText = 'Play'
    }
}
function clickedBar(e){
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`

    let newTime = mouseX / (barsize / myMovie.duration)
    myMovie.currentTime = newTime
}
window.addEventListener('load',doFirst)