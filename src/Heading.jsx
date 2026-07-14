import "./styles/Heading.css"

function Heading(){
    return(
        <div id="heading">
            <div>
                <h1>Amphibia Memory Game <sup>Vtubers Edition</sup></h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div>
                <p>Score: 0</p>
                <p>Best Score: 0</p>
            </div>
        </div>
    )
}

export { Heading }