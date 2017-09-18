import './index.css'
import React, {Component} from 'react';

export default class TabChange extends Component{
    constructor(props) {
        super(props);
        this.state = {activeIndex:0};
    }
    tabSwitch(index){
        console.log('react',index)
    }
    render(){
        return (
            <ol>
                <li onClick={this.tabSwitch.bind(this,0)} className="active"><div className="text-container"><span>推荐音乐</span></div></li>
                <li onClick={this.tabSwitch.bind(this,1)}><div className="text-container"><span>热歌榜</span></div></li>
                <li onClick={this.tabSwitch.bind(this,2)}><div className="text-container"><span>搜索</span></div></li>
            </ol>
        )
    }
}