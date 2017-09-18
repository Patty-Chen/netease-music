import $ from 'jquery'
import './index.css'
import {data,hotkey} from './testdata.js'
import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './songList'
import TabChange from "./tabChange";
import TabContent from './tabContent';

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
let inputTimer = undefined
let result
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
        result = search(value)
        if (result.length !== 0){
        }
        else{
            $('.result').text('未找到对应结果')
        }
    },500);

})

$('.search-input .close-wrapper').on('click',()=>{
    $('.search-input input').val('')
})
ReactDOM.render(
    <TabChange />,
    document.getElementsByTagName('nav')[0]
)
ReactDOM.render(
    <TabContent index='0'/>,
    document.getElementsByClassName('tab-content')[0]
)








