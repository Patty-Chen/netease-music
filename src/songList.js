import './index.css'
import React, {Component} from 'react';

export default class SongList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<Songlist data={this.props.data} />)
    }
}
function Songlistitem(props){
    let songhtmlUrl = `./song.html?id=${props.item.id}`
    return <li>
        <a href={songhtmlUrl}>
            <div className="song-info">
                <h3>{props.item.name}</h3>
                <p>
                    <svg className="icon icon-sq" aria-hidden="true">
                        <use xlinkHref="#icon-SQ"></use>
                    </svg>
                    {props.item.singer}
                </p>
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
