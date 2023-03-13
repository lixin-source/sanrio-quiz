import { useState } from 'react';
import './App.css';

const App = () => {

  // Initialize questions for flashcards
  const deck = [
    // State for beginning with "start" and "press arrow to begin!"
    { front: "Start", back: "Press → Arrow to Begin"},
    //Rest of questions
    { front: "What animal is Cinnamoroll?", back: "Dog", },
    { front: "When are Kiki & Lala's birthday?", back: "December 31st" },
    { front: "What dessert is PomPomPurin inspired after?", back: "Caramel Pudding" },
    { front: "When was the Sanrio company established?" , back: "1973"},
    { front: "What is the name of the Hello Kitty tv series?" , back: "The Adventures of Hello Kitty & Friends"},
    { front: "What holiday does Kuromi's birthday align with?" , back: "Halloween"},
    { front: "Who is Hello Kitty's boyfriend?" , back: "Dear Daniel"},
    { front: "Where does KeroKeroKeropi live?" , back: "Donut Pond"},
    { front: "What animal is Badtz-Maru based off of?" , back: "Penguins"},
    { front: "What fairy tale character is My Melody based off of?" , back: "Little Red Riding Hood"}
  ];

  // const [inputs, setInputs] = useState({
  //   'What animal is Cinnamoroll?': '',
  //   'When are Kiki & Lala\'s birthday?': '',
  //   'What dessert is PomPomPurin inspired after?': '',
  //   'blended': '' });

  // State for index for changing between cards
  const [index, setIndex] = useState(0);

  // State for determining if card is flipped or not. False = front, True = back
  // Change isFlipped with setIsFlipped
  const [isFlipped, setIsFlipped] = useState(false);

  //Function that switches isFlipped to opposite
  const flip = () => {
    setIsFlipped(!isFlipped);
    // if(!ingredients['temperature'].includes(inputs['temperature']) ){
    //   alert("For temperature, that isn't even an option!")
}

  //Function that goes to next question/card
  const next = () => {
    if (index <= deck.length-1) {
      setIndex(index + 1);
      setIsFlipped(false);
    }
  }

  //Function that goes to next question/card
  const back = () => {
    if (index >= 0 && index <= deck.length-1) {
      setIndex(index - 1);
      setIsFlipped(false);
    }
}

  // Initialize first card
  const currentCard = deck[index];

  const [inputValue, setInputValue] = useState('');
  const [correct_input, setCorrectInput] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the input value, for example:
    if (inputValue !== currentCard.back) {
      setBackgroundColor('#CE1F54');
      setColor('#47363B');
    }
    else {
      setBackgroundColor('#99C6AB');
      setColor('#47363B');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className='header'>
        <h1 id="title">Sanrio Friends Quiz Review</h1>
        <h3 className = "description">🎀 Test your Sanrio knowledge! 🎀</h3>
        <h4 className = "numCards">Number of Cards: 10</h4>
      </div>
      <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={flip}>
        <div className="front">
          <h4>{currentCard.front}</h4>
        </div>
        <div className="back">
          <h4>{currentCard.back}</h4>
        </div>
      </div>
      <form className='form'>
        <label>
          <input type="text" value={inputValue} onChange={handleChange} placeholder="Guess the Answer" style={{ color: color, backgroundColor: backgroundColor }} className = "answer"/>
        </label>
        <button type="submit" onClick={handleSubmit} className="submitAnswer">Submit</button>
        </form>
        <button className='arrow' onClick={back}>←</button>
        <button className='arrow' onClick={next}>→</button>
    </div>
  )
}

export default App;

// https://coolors.co/ffe5ec-ffc2d1-ffb3c6-ff8fab-fb6f92-d05886-d46884-dc4a89