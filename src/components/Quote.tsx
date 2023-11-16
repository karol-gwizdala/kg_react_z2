import { useState } from "react"
import newton from "./img/newton.jpg"
import russel from "./img/Russell.jpg"
import roosevelt from "./img/Roosevelt.jpg"

export interface QuoteInterface {
    text: string;
    author: string;
    src: string;
    url: string;
    

}

interface QuoteProps {
    quote: QuoteInterface;
}

export const quote_list: QuoteInterface[] = [
    {
      text: "Ludzie budują za dużo murów, a za mało mostów.",
      author: "Isaac Newton",
      src: newton,
      url: "https://pl.wikipedia.org/wiki/Isaac_Newton"
      
    },
    {
      text: "To smutne, że głupcy są tacy pewni siebie, a ludzie rozsądni tacy pełni wątpliwości.",
      author: "Bertrand Russel",
      src: russel,
      url: "https://pl.wikipedia.org/wiki/Bertrand_Russell"
     
    },
    {
      text: "Rób, co możesz, w miejscu, jakim jesteś i z tym, co masz.",
      author: "Theodore Roosevelt",
      src: roosevelt,
      url: "https://pl.wikipedia.org/wiki/Theodore_Roosevelt"
      
    }
  ];

export const Quote = ({ quote }: QuoteProps) => {

    return (
        <div className="quote__container">
            <div className="quote__container__div">
              <a href={quote.url}>
              <img src={quote.src} alt={quote.author} />
              </a>          
              <p className="quote__image__p">Click image for more information!</p>
            </div>
            <div className="quote__container__div">
              <p className="quote.author">{quote.text}</p>
              <p className="quote.text">{quote.author}</p>
            </div>
        </div>

    )
}