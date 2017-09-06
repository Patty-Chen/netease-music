
data.forEach((item)=>{
    let li = $(`
        <li>
            <a href="./index.html?id=${item.id}">
                <div class="song-info">
                    <h3>${item.name}</h3>
                    <p>
                        <svg class="icon icon-sq" aria-hidden="true">
                            <use xlink:href="#icon-SQ"></use>
                        </svg>演唱者-专辑
                    </p>
                </div>
            </a>
            <div class="play">
                <svg class="icon icon-play" aria-hidden="true">
                    <use xlink:href="#icon-play"></use>
                </svg>
            </div>
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
$('.search-input>input').on('input',(e)=>{
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
                let li = $(`<li>${item.name}</li>`)
                ol.append(li)
            })
            $('.result').append(ol)
        }
    },500);

})

let hotSearchList = $('<ol></ol>')
hotkey.forEach((item)=>{
    let li = $(`<li>${item}</li>`)
    hotSearchList.append(li)
})
$('.hot-search').append(hotSearchList)

let hotMusicList = $('<ol></ol>')
data.forEach((item)=>{
    let li = $(`<li>${item.name}</li>`)
    hotMusicList.append(li)
})
$('.hot-music-container').append(hotMusicList)