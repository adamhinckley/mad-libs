import React from "react";
import "./App.css";
import { madlib } from "./madLibsText/madlibs";
import styled from "@emotion/styled";

const { blanks, value, title } = madlib;
const solution = [];
// render converts the solution array to a string so I can display it as a paragraph
const render = solution.join("");

function App() {
    const [words] = React.useState([]);
    const [input, setInput] = React.useState("");
    let [count, setCount] = React.useState(0);
    // const [message, setMessage] = React.useState("");
    const [complete, setComplete] = React.useState(false);

    const changeHandler = e => {
        setInput(e.target.value);
    };

    //Takes user input and adds words to the words array
    const addWords = (e, word, blanks) => {
        e.preventDefault();
        if (word.length > 0) {
            words.push(word);
            incrementBlanks(blanks, words, value);
        }
        setInput("");
    };

    //incremetns the count so the right
    const incrementBlanks = (blanks, words, value) => {
        let max = blanks.length;
        if (count < max) {
            count++;
            setCount(count);
        } else {
            setComplete(true);
            combineBlanksAndValues(value, words);
        }
    };

    //combines both the words array and the values array into a single array
    const combineBlanksAndValues = (value, words) => {
        for (let i = 0; i < value.length; i++) {
            solution.push(value[i]);
            if (words) {
                solution.push(words[i]);
            }
        }
    };

    return (
        <AppContainer>
            <TitleTop>{title}</TitleTop>
            <Form onSubmit={e => addWords(e, input, blanks)}>
                {/* count shows the right label for the blanks            */}
                <label htmlFor="">{madlib.blanks[count]}</label>
                <input
                    type="text"
                    placeholder="Add a word"
                    name="input"
                    onChange={changeHandler}
                    value={input}
                />
                <button>add</button>
                {complete === true ? <p>{render}</p> : null}
            </Form>
        </AppContainer>
    );
}

export default App;

// 💥💥💥💥💥💥💥💥Styled with emotion💥💥💥💥💥💥💥💥💥💥

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 800px;
`;

const TitleTop = styled.h1`
    color: teal;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
