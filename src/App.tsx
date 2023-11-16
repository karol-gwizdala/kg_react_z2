import { useState } from 'react';
import './App.scss';
import { Button, ButtonProps } from './components/Button';
import { Quote, QuoteInterface, quote_list } from './components/Quote';


function App() {

  const [currentQuote, setCurrentQuote] = useState<QuoteInterface>(quote_list[0]);

  const handleGenerateQuoteClick = () => {

    const randomIndex = Math.floor(Math.random() * quote_list.length);
    setCurrentQuote(quote_list[randomIndex]);
  }


  const handleShareQuoteClick = () => {
    console.log('Drawn quote is:', (currentQuote));

  };

  return (
    <main className="main">
      <Quote quote={currentQuote} />
      <div>
        <button onClick={handleGenerateQuoteClick} className='button button__generate' >Generate quote</button>
        <button onClick={handleShareQuoteClick} className='button button__share' >Share quote</button>
      </div>
    </main>
  );
}

export default App;
