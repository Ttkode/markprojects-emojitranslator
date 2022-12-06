import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏏": "Cricket Bat",
  "🏒": "Icehockey stick",
  "🥌": "Curling",
  "🎳": "Bowling",
  "🎱": "8ball",
  "🏈": "American Football",
  "🐜": "Ant",
  "🎈": "Balloon",
  "🎃": "Halloween Pumpkin",
  "⚾": "Baseball"
};

var emojisDeclared = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We havent declared this emoji in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>

      <input
        placeholder="Type your emoji here"
        onChange={emojiInputHandler}
      ></input>

      <h2>{meaning}</h2>

      <h3> These emojis are in our database</h3>

      {emojisDeclared.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
