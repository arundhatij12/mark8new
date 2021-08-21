import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😏": "Smirking",
  "😉": " Winking ",
  "😢": "  Crying",
  "😞": " Sad ",
  "😃": "Happy",
  "😠": "Angry",
  "😪": "Sleepy ",
  "🤫": " Shushing",
  "🤔": " Thinking",
  "🤗": " Hugging "
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
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

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
