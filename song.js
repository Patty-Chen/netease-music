var id = location.search.match(/\bid=([^&]*)/)[1]
let lyric = data[id].lyric
let songUrl = data[id].url

var lyricArray = lyric.split('\n')
lyricArray = lyricArray.map((string)=>{
    let regex = /^\[(\d+:\d{2}\.\d+)\](.+)$/
    let matches = string.match(regex)
    if (matches){
        return {time: matches[1], content: matches[2]}
    }
})
let $lyric = $('.lyric')
lyricArray.map((lyricObject)=>{
    if(lyricObject){
        let $p = $('<p/>')
        if (lyricObject.content){
            $p.text(lyricObject.content)
            $p.appendTo($lyric)
        }
    }
})

let audio = document.createElement('audio')
audio.src = songUrl;
let element = document.querySelector('.disc')
audio.oncanplay = ()=>{
    audio.play()
    let oldClass = element.getAttribute('class')
    element.setAttribute('class',`${oldClass} playing`)
}
let iconPause = document.querySelector('.icon-pause')
iconPause.onclick = ()=>{
    let oldClass = element.getAttribute('class')
    let newClass = oldClass.replace(' playing','')
    element.setAttribute('class', newClass);
    audio.pause();
}

let iconPlay = document.querySelector('.icon-play')
iconPlay.onclick = ()=>{
    let oldClass = element.getAttribute('class')
    element.setAttribute('class',`${oldClass} playing`)
    audio.play();
}
let currentLine = 0
let errorLines = 0
let height = 32
setInterval(()=>{
    let currentSeconds = audio.currentTime;
    let secondsNextLine = getLineTime(currentLine + 1)
    if (secondsNextLine && currentSeconds > secondsNextLine){
        currentLine++;
        $lyric.css('transform',`translateY(-${(currentLine - errorLines - 1) * height}px`)
        console.log(currentLine, currentSeconds);
    }
    else if (!secondsNextLine){
        currentLine++; //避免lyric文件异常造成程序死循环
        errorLines++;
    }
},500)

var getLineTime = (line)=>{
    if (lyricArray[line] && lyricArray[line].time){
        let rawTime = (lyricArray[line].time).match(/(\d+):(\d+\.\d+)/)
        let seconds = parseInt(rawTime[1]*60)+parseFloat(rawTime[2])
        console.log(seconds)
        return seconds
    }
}
