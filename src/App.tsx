import { useState } from "react";
import quotes from "./assets/quotes.json";
import "./App.css";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Quote {
  text: string;
  from: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <div className="background">
      <div id="quote-box">
        <div className="quote-content">
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.text}</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          <h4 id="author"> - {quote.from}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text}`}
            id="tweet-quote"
            style={{ backgroundColor: "#1DA1F2" }}
          >
            <FaTwitter color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
