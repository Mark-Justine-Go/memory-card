import { useState } from 'react'
import { Heading } from './Heading'
import { Content } from './Content'
import { useEffect } from 'react'
import './styles/App.css'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [selectedGifsArr, addSelectedGif] = useState([]);
  const [bestScore, changeBestScore] = useState(0);
  const [gifsArr, setGifsArr] = useState([]);


  useEffect(() => {
    async function getGifs(){
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=vtuber&limit=20`);
      const data = await response.json();
      setGifsArr(data.data);
    }

    getGifs();
  }, []);

  function shuffleArray(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }


  function selectImage(id){
    setGifsArr(prev => shuffleArray(prev));
    addSelectedGif(prev => [...prev,id]);
  }

  function hasDupe(arr){
    return new Set(arr).size !== arr.length;
  }

  if(hasDupe(selectedGifsArr)){   
    console.log(selectedGifsArr);
    if(selectedGifsArr.length-1 > bestScore){
      changeBestScore(selectedGifsArr.length-1);
    }
    addSelectedGif([]);
  }

  return (
    <>
      <Heading currScore={selectedGifsArr.length} bestScore={bestScore}/>
      <Content selectedGifsArr={selectedGifsArr} addSelectedGif={addSelectedGif} selectImage={selectImage} gifsArr={gifsArr}/>
    </>
  )
}

export default App
