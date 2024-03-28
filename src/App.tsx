import { useState } from 'react'
import { Quote } from './components/quote/quote'
import Button from '@mui/material/Button'


export function App() {

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [randomNumber, setRandomNumber] = useState(getRandomInt(0, 15))

  return (
    <>
      <div className="box">
        <Quote randomNumber={randomNumber} ></Quote>
        <Button onClick={() => setRandomNumber(getRandomInt(0, 15))} variant='contained' sx={{backgroundColor: 'rgb(203, 168, 114)', color: 'rgb(255, 255, 255)', '&:hover': { backgroundColor: 'rgb(183, 148, 94)' } }} >New Quote</Button>
      </div>
    </>
  )
}