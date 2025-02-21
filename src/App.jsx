import { useState } from "react"

import "./App.css"
import Card from "./components/Card"

function App() {
  const serverUrl = "https://picsum.photos/id/"
  const widthHeightEndPart = "/300/400"
  const dataImageID = [13, 16, 17, 31, 35, 40, 45, 49, 75, 80, 96, 120]
  const imagesList = []
  for (let i = 0; i < dataImageID.length; i++) {
    imagesList.push({
      imgUrl: serverUrl + dataImageID[i] + widthHeightEndPart,
      id: dataImageID[i],
      hasBeenClicked: false,
    })
  }

  //Fisher-Yates Shuffle
  function shuffleArray(originalArray) {
    const array = [...originalArray]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Pick a random index
      ;[array[i], array[j]] = [array[j], array[i]] // Swap elements
    }
    return array
  }
  let shuffledDataImageIDs = shuffleArray(imagesList)
  // let cardsList = []
  // for (let i = 0; i < shuffledDataImageIDs.length; i++) {
  //   cardsList.push(
  //     <Card
  //       imgUrl={shuffledDataImageIDs[i].imgUrl}
  //       key={shuffledDataImageIDs[i].id}
  //     />
  //   )
  // }
  return (
    <>
      <h1>Memory Card Game</h1>
      <div className="container">
        {shuffledDataImageIDs.map((image) => (
          <Card imgUrl={image.imgUrl} key={image.id} />
        ))}
      </div>
    </>
  )
}

export default App
