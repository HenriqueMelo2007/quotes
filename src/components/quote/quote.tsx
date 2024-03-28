import { useState } from "react";
import axios from "axios";

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
    <>
      <p>{phrase}</p>
      <p>{author}</p>
    </> 
  )
}