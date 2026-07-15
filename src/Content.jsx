import { useEffect, useState } from "react";
import "./styles/Content.css";


function Content({
    selectedGifsArr,
    addSelectedGif,
    selectImage,
    gifsArr,
}){
    return(
        <div id="content">
            {
                gifsArr.slice(0,12).map(gif => {
                    return <div key={gif.id} className="card" onClick={()=>{selectImage(gif.id)}}>
                        <img src={gif.images.fixed_height.url}/>
                    </div>
                })
            }
        </div>
    )
}

export { Content }