let songListTemplate =
data.forEach((item)=>{
    let li = $(`
        <li>
            <a href="./song.html?id=${item.id}">
                <div class="song-info">
                    <h3>${item.name}</h3>
                    <p>
                        <svg class="icon icon-sq" aria-hidden="true">
                            <use xlink:href="#icon-SQ"></use>
                        </svg>演唱者-专辑
                    </p>
                </div>
                <div class="play">
                    <svg class="icon icon-play" aria-hidden="true">
                        <use xlink:href="#icon-play"></use>
                    </svg>
                </div>
            </a>
        </li>
    `)
    $('.fashion-musics ol').append(li)

})

$('nav').on('click','ol>li',(e)=>{
    let li = $(e.currentTarget).addClass('active')
    li.siblings().removeClass('active')
    let index = li.index()
    li.trigger('tabChange',index)
    console.log(index)
    $('.tab-content>ol>li').eq(index).addClass('active')
        .siblings().removeClass('active')
})
$('nav').on('tabChange',(e, index)=>{
    console.log('change')
})

window.search = function(keyword){
    let result = data.filter((item)=>{
        return (item.name.indexOf(keyword) !== -1)
    })
    return result
}

let inputTimer = undefined
$('.search-input input').on('input',(e)=>{
    let input = $(e.currentTarget)
    let value = input.val().trim()
    if (!value || value === ''){
        return
    }

    if (inputTimer){
        clearTimeout(inputTimer)
    }
    inputTimer = setTimeout(()=>{
        clearTimeout(inputTimer)
        console.log(value)
        let result = search(value)
        if (result.length !== 0){
            let ol = $('<ol></ol>')
            result.forEach((item)=>{
                let li = $(`
                        <li>
                            <a href="./song.html?id=${item.id}">
                                <div class="song-info">
                                    <h3>${item.name}</h3>
                                    <p>
                                        <svg class="icon icon-sq" aria-hidden="true">
                                            <use xlink:href="#icon-SQ"></use>
                                        </svg>演唱者-专辑
                                    </p>
                                </div>
                                <div class="play">
                                    <svg class="icon icon-play" aria-hidden="true">
                                        <use xlink:href="#icon-play"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    `)
                ol.append(li)
            })
            $('.result').empty().append(ol)
        }
        else{
            $('.result').text('未找到对应结果')
        }
    },500);

})

$('.search-input .close-wrapper').on('click',()=>{
    $('.search-input input').val('')
})

let hotSearchList = $('<ol></ol>')
hotkey.forEach((item)=>{
    let li = $(`<li>${item}</li>`)
    hotSearchList.append(li)
})
$('.hot-search').append(hotSearchList)

$('.hot-search').on('click','ol>li',(e)=>{
    let li = $(e.currentTarget)
    let value = li.text().trim()
    let input = $('.search-input input')
    input.val(value).trigger('input')
})


let hotMusicList = $('<ol></ol>')
data.forEach((item)=>{
    let li = $(`
        <li>
            <a href="./song.html?id=${item.id}">
                <div class="song-info">
                    <h3>${item.name}</h3>
                    <p>
                        <svg class="icon icon-sq" aria-hidden="true">
                            <use xlink:href="#icon-SQ"></use>
                        </svg>演唱者-专辑
                    </p>
                </div>
                <div class="play">
                    <svg class="icon icon-play" aria-hidden="true">
                        <use xlink:href="#icon-play"></use>
                    </svg>
                </div>
            </a>
        </li>
    `)
    hotMusicList.append(li)
})
$('.hot-music-container').append(hotMusicList)