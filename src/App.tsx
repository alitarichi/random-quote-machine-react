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

const getRandomColor = (): string => {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
    "#000000",
    "#353B48",
    "#524949",
    "#FF8C00",
    "#FF0080",
    "#E67E22",
    "#E74C3C",
    "#95A5A6",
    "#F1C40F",
    "#D35400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft size="20" style={{ marginRight: "10px" }} />
            {quote.text}
            <FaQuoteRight size="20" style={{ marginLeft: "10px" }} />
          </h2>

          <h4 id="author"> - {quote.from}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
