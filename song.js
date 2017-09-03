var lyric = "[00:00.00] 作曲 : 薛之谦\n[00:00.396] 作词 : 薛之谦\n[00:01.190] （雪下得那么深下得那么认真）\n[00:06.430] （倒映出我躺在雪中的伤痕）\n[00:15.800]\n[00:25.080]夜深人静 那是爱情\n[00:32.440]偷偷地控制着我的心\n[00:36.470]提醒我 爱你要随时待命\n[00:40.900]\n[00:41.900]音乐安静 还是爱情啊\n[00:51.550]一步一步吞噬着我的心\n[00:55.700]爱上你 我失去了我自己\n[00:59.900]\n[01:01.020]爱得那么认真 爱得那么认真\n[01:06.050]可还是听见了你说不可能\n[01:10.550]已经十几年没下雪的上海 突然飘雪\n[01:15.980]就在你说了分手的瞬间\n[01:19.720]雪下得那么深 下得那么认真\n[01:24.310]倒映出我躺在雪中的伤痕\n[01:29.350]我并不在乎自己究竟多伤痕累累\n[01:34.230]可我在乎今后你有谁陪\n[01:39.290]\n[02:05.100]音乐安静 还是爱情啊\n[02:14.140]一步一步吞噬着我的心\n[02:17.500]爱上你 我失去了我自己\n[02:21.500]\n[02:23.940]爱得那么认真 爱得那么认真\n[02:29.630]可还是听见了你说不可能\n[02:34.200]已经十几年没下雪的上海 突然飘雪\n[02:39.630]就在你说了分手的瞬间\n[02:43.300]雪下得那么深 下得那么认真\n[02:47.890]倒映出我躺在雪中的伤痕\n[02:53.010]我并不在乎自己究竟多伤痕累累\n[02:57.930]可我在乎今后你有谁陪\n[03:02.930]\n[03:03.840]爱得那么深 爱得那么认真\n[03:08.480]可还是听见了你说不可能\n[03:12.980]已经十几年没下雪的上海 突然飘雪\n[03:18.080]就在你说了分手的瞬间\n[03:22.020]雪下得那么深 下得那么认真\n[03:27.430]倒映出我躺在雪中的伤痕\n[03:31.600]我并不在乎自己究竟多伤痕累累\n[03:36.710]可我在乎今后你有谁陪\n[03:40.980]\n[03:41.980]爱得那么深 比谁都认真\n[03:47.330]可最后还是只剩我一个人\n[03:51.750]漫天风雪请别再把我的眼泪擦去\n[03:57.190]毕竟那是我最爱的女人\n[04:02.230]毕竟我曾是她深爱的人\n[04:12.400]\n"
var lyricArray = lyric.split('\n')
lyricArray = lyricArray.map((string)=>{
    let regex = /^\[(\d+:\d{2}\.\d+)\](.*)$/
    let matches = string.match(regex)
    if (matches){
        return {time: matches[1], content: matches[2]}
    }
})
let $lyric = $('.lyric')
lyricArray.map((lyricObject)=>{
    if(lyricObject){
        let $p = $('<p/>')
        $p.attr('display-time',lyricObject.time).text(lyricObject.content)
        $p.appendTo($lyric)
    }
})

let audio = document.createElement('audio')
audio.src = 'http://ovpjydvyl.bkt.clouddn.com/%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA.m4a'
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