import "./styles/Heading.css"

function Heading({
    currScore,
    bestScore
}){
    return(
        <div id="heading">
            <div>
                <h1>Amphibia Memory Game <sup>Vtubers Edition</sup></h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div>
                <p>Score: {currScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>
    )
}

export { Heading }