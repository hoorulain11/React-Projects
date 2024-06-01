import React, { useState } from 'react';

const quotes = [
  { quote: "The only way to do great work is to love what you do." , author: "~Steve Jobs~" },
  { quote: "In the end, we only regret the chances we didn't take." , author: "~Lewis Carroll~" },
  { quote: "The best way to predict the future is to create it." , author: "~Peter Drucker~" },
  { quote: "Happiness is not by chance, but by choice."  , author: "~Jim Rohn~" },
  { quote: "You miss 100% of the shots you don't take." , author: "~Wayne Gretzky~"  },
  { quote: "Do what you can, with what you have, where you are." , author: "~Theodore Roosevelt~" },
  { quote:"Believe you can and you're halfway there." , author: "~Theodore Roosevelt~" },
  { quote:"Do not watch the clock. Do what it does. Keep going." , author: "~Sam Levenson~" },
  { quote:"Turn your wounds into wisdom."  , author: "~Oprah Winfrey~" },
  { quote:"Every moment is a fresh beginning." , author: "~T.S. Eliot~" },
  { quote:"Change the world by being yourself." , author: "~Amy Poehler~" },
  // Add more quotes as needed
];

const App = () => {
  const [quote, setQuote] = useState("---");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="text-center mt-40 ">
        <h1 className=" underline decoration-dashed text-4xl font-bold uppercase text-pink-900">Quote Generator</h1>
      </header>
      <div className="text-center w-screen h-auto mt-20">
        <p className="text-2xl font-serif text-gray-800" id="text">{quote.quote}</p>
        <p className="text-xl font-mono text-pink-900 mt-2" id="author"> {quote.author}</p>
      </div>
      <button onClick={generateRandomQuote} className="mt-10 px-6 py-3 bg-blue-600 text-white rounded shadow uppercase hover:bg-blue-500">Get Quote</button>
    </div>
  );
};

export default App;