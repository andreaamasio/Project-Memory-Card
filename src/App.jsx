import { useState, useEffect } from "react"
import "./App.css"
import Card from "./components/Card"

// Fisher-Yates Shuffle
function shuffleArray(originalArray) {
  const array = [...originalArray]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function App() {
  const [clickedCards, setClickedCards] = useState([])
  const [shuffledImages, setShuffledImages] = useState([])
  const [bestScore, setBestScore] = useState(0) // Track best score

  const serverUrl = "https://picsum.photos/id/"
  const widthHeightEndPart = "/300/400"
  const dataImageID = [13, 16, 17, 31, 35, 40, 45, 49, 75, 80, 96, 120]

  useEffect(() => {
    const imagesList = dataImageID.map((id) => ({
      imgUrl: `${serverUrl}${id}${widthHeightEndPart}`,
      id,
    }))
    setShuffledImages(shuffleArray(imagesList))
  }, [])

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      alert(`Game Over! Your score: ${clickedCards.length}`)

      // Update best score if current score is higher
      setBestScore((prevBest) => Math.max(prevBest, clickedCards.length))

      setClickedCards([]) // Reset clicked cards
      return // Stop further execution
    }

    setClickedCards((prev) => [...prev, id]) // Add new clicked card
    setShuffledImages((prev) => shuffleArray([...prev])) // Shuffle images
  }

  return (
    <>
      <div className="header">
        <h1>Memory Card Game</h1>
        <h2>Score: {clickedCards.length}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
      <div className="container">
        {shuffledImages.map((image) => (
          <Card
            key={image.id}
            imgUrl={image.imgUrl}
            id={image.id}
            onClick={() => handleClick(image.id)}
          />
        ))}
      </div>
    </>
  )
}

export default App
