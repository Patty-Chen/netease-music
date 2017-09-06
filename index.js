
data.forEach((item)=>{
    let $li = $(`
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
    $('.fashion-musics ol').append($li);

})
