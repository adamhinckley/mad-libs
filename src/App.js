import React from "react";
import "./App.css";
import { madlib } from "./madLibsText/madlibs";
import styled from "@emotion/styled";

const { blanks, value, title } = madlib;
const solution = [];

function App() {
    const [words] = React.useState([]);
    const [input, setInput] = React.useState("");
    let [count, setCount] = React.useState(0);
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
    };

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
                <label htmlFor="">{madlib.blanks[count]}</label>
                <input
                    type="text"
                    placeholder="Add a word"
                    name="input"
                    onChange={changeHandler}
                    value={input}
                />
                <button>add</button>
                {complete === true
                    ? solution.map((solution, index) => {
                          return <p key={index}>{solution}</p>;
                      })
                    : null}
            </Form>
        </AppContainer>
    );
}

export default App;

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
