import useState from 'react';
import './App.scss';



interface Quote {
  text: string,
  authot: string
 }

const quote_list = ["Ludzie budują za dużo murów, a za mało mostów.", "To smutne, że głupcy są tacy pewni siebie, a ludzie rozsądni tacy pełni wątpliwości.", "Rób, co możesz, w miejscu, jakim jesteś i z tym, co masz."]

const Quote = () => {

  // const [currentQuote, setCurrentQuote] = useState (Quote[0]);
  
  const handleGenerateQuoteClick = Math.floor(Math.random() * quote_list.length);
  return (
    <div>{quote_list[handleGenerateQuoteClick]}</div>
  )

}

function App() {
  return (
    <main className="main">
      <Quote />
      </main>
  );
}

export default App;
