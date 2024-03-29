import { useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

interface propsQuote {
  randomNumber: number,
}

export function Quote ({randomNumber}:propsQuote) {

  const [phrase, setPhrase] = useState('')
  const [author, setAuthor] = useState('')

  async function gettingQuote () {
    const urlAPI = "https://type.fit/api/quotes"
    const aPIData = await axios.get(urlAPI).then(Response => Response.data)
    setPhrase(aPIData[randomNumber].text)
    setAuthor(aPIData[randomNumber].author)
  }
  gettingQuote();


  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: 'Caveat' }}>{phrase} </Typography>
      <Typography sx={{ borderBottom: '1px solid rgb(255, 255, 255)' }} >- {author}</Typography>
    </Box>
  )
}