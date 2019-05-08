import React from "react";
import "./App.css";

function App() {
    const [words, setWords] = React.useState([]);
    const [input, setInput] = React.useState("");

    console.log(input);
    console.log(words);

    const changeHandler = e => {
        setInput(e.target.value);
    };

    const addWords = (e, word) => {
        e.preventDefault();
        if (word.length > 0) {
            words.push(word);
        }
        setInput("");
        console.log("word array", words);
    };

    return (
        <form onSubmit={e => addWords(e, input)}>
            <label htmlFor="">Label</label>
            <input type="text" placeholder="Add a word" name="input" onChange={changeHandler} value={input} />
            <button onClick={e => addWords(e, input)}>add</button>
        </form>
    );
}

export default App;
