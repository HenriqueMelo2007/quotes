import { useState } from 'react'
import { Quote } from './components/quote/quote'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';



export function App() {

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [randomNumber, setRandomNumber] = useState(getRandomInt(0, 15))

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <Quote randomNumber={randomNumber} ></Quote>
      <Button onClick={() => setRandomNumber(getRandomInt(0, 15))} variant='contained' sx={{backgroundColor: 'rgb(203, 168, 114)', color: 'rgb(0, 0, 0)', '&:hover': { backgroundColor: 'rgb(183, 148, 94)' } }} >New Quote</Button>
    </Box>
  )
}