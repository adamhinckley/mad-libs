import React from "react";
import "./App.css";
import { madlib } from "./madLibsText/madlibs";

const { blanks, value, title } = madlib;
const solution = [];

function App() {
    const [words] = React.useState([]);
    const [input, setInput] = React.useState("");
    let [count, setCount] = React.useState(13);
    // const [message, setMessage] = React.useState("");
    const [complete, setComplete] = React.useState(false);

    const changeHandler = e => {
        setInput(e.target.value);
    };

    const addWords = (e, word, blanks) => {
        e.preventDefault();
        if (word.length > 0) {
            words.push(word);
            incrementBlanks(blanks, words, value);
        }
        setInput("");
    };

    const incrementBlanks = (blanks, words, value) => {
        let max = blanks.length;

        if (count < max) {
            count++;
            setCount(count);
        } else {
            setComplete(true);
            combineBlanksAndValues(value, words);
        }
        console.log(solution);
    };

    const combineBlanksAndValues = (value, words) => {
        for (let i = 0; i < value.length; i++) {
            solution.push(value[i]);
            if (words) {
                solution.push(words[i]);
            }
        }
        return solution;
    };

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={e => addWords(e, input, blanks)}>
                <label htmlFor="">{blanks[count]}</label>
                <input
                    type="text"
                    placeholder="Add a word"
                    name="input"
                    onChange={changeHandler}
                    value={input}
                />
                <button>add</button>
                {complete === true
                    ? (console.log("Solution in return", solution),
                      solution.map(solution => {
                          return <p>{solution}</p>;
                      }))
                    : null}
            </form>
        </div>
    );
}

export default App;
