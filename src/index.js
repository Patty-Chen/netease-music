import $ from 'jquery'
import './index.css'
import {data,hotkey} from './testdata.js'
import React from 'react';
import ReactDOM from 'react-dom';



function Songlistitem(props){
    let songhtmlUrl = `./song.html?id=${props.item.id}`
    return <li>
                <a href={songhtmlUrl}>
                    <div className="song-info">
                        <h3>{props.item.name}</h3>
                        <p><svg className="icon icon-sq" aria-hidden="true">
                            <use xlinkHref="#icon-SQ"></use>
                        </svg>{props.item.singer}</p>
                    </div>
                    <div className="play">
                        <svg className="icon icon-play" aria-hidden="true">
                            <use xlinkHref="#icon-play"></use>
                        </svg>
                    </div>
                </a>
            </li>;
}

function Songlist(props){
    const songList = props.data.map((item)=>{
        return <Songlistitem key={item.id} item={item}/>;
    })
    return <ol>{songList}</ol>;
};

ReactDOM.render(
    <Songlist data={data} />,
    document.getElementsByClassName('fashion-musics-container')[0]
)
/*let createSongListItem = function(item){
    return $(`
        <li>
            <a href="./song.html?id=${item.id}">
                <div class="song-info">
                    <h3>${item.name}</h3>
                    <p>
                        <svg class="icon icon-sq" aria-hidden="true">
                            <use xlink:href="#icon-SQ"></use>
                        </svg>${item.singer}
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
}


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
            let ol = createSongList(result)
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


let hotMusicList = createSongList(data)
$('.hot-music-container').append(hotMusicList)*/