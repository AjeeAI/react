import { useEffect, useState } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);

  async function getQuotes() {
    try {
     const response = await fetch("https://api.quotable.io/random");
const json = await response.json();
const data = JSON.parse(json.contents);
setQuote(data[0]);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuotes(); // call the function
  }, []);

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Question: {quote.q}</div>
      <div>Answer: {quote.a}</div>
    </div>
  );
}
