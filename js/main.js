function handleClick(url) {
    window.location.href = url;
}

// 获取 div 元素
const aspectRatioDiv = document.getElementById('my-aspect-ratio');
let loadW = 3840;
let laodH = 2160;
var scaleOne = 1;
function resizeImage() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width / height > loadW / laodH) {
        width = height * loadW / laodH;//scale(${s}) translate(0,${t / s}px)
        let t = (window.innerWidth - width) * (laodH / height) / 2;
        scaleOne = height / laodH;
        aspectRatioDiv.style.transform = `scale(${height / laodH}) translate(${t}px,0)`;
    } else {
        height = width * laodH / loadW;
        let t = (window.innerHeight - height) * (loadW / width) / 2;
        scaleOne = height / laodH;
        aspectRatioDiv.style.transform = `scale(${width / loadW}) translate(0,${t}px)`;
    }
}
window.addEventListener('resize', () => {
    resizeImage()
});
resizeImage();

audioPlayer = document.getElementById('audioElement');
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

if (audioPlayer !== 'undefined') {
    audioButton = document.getElementById('audioButton');
    // 监听播放事件
    audioPlayer.addEventListener('play', function () {
        audioButton.src = audioButton.src.replace('play', 'stop');
        console.log('音频开始播放');
    });

    // 监听暂停事件
    audioPlayer.addEventListener('pause', function () {
        audioButton.src = audioButton.src.replace('stop', 'play');
        console.log('音频已暂停');
    });

    // 监听结束事件
    audioPlayer.addEventListener('ended', function () {
        audioButton.src = audioButton.src.replace('stop', 'play');
        console.log('音频播放结束');
    });
}