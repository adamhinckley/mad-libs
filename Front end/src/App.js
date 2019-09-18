import React from "react";
import "./App.css";
import { madlib } from "./madLibsText/madlibs";
import styled from "@emotion/styled";
import { Button, Typography, Input } from "antd";

const { Title, Text } = Typography;

console.log(Button);

const { blanks, value, title } = madlib;

function App() {
  const [solution, setSolution] = React.useState([]);
  const [words, setWords] = React.useState([]);
  const [input, setInput] = React.useState("");
  let [count, setCount] = React.useState(0);
  const [complete, setComplete] = React.useState(false);
  const [showLib, setShowLib] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);

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
    console.log("fired");
    setInput("");
  };

  //incremetns the count so the right
  const incrementBlanks = (blanks, words, value) => {
    let max = blanks.length;
    if (count < max - 1) {
      count++;
      setCount(count);
    } else {
      setComplete(true);
      combineBlanksAndValues(value, words);
    }
  };

  // render converts the solution array to a string so I can display it as a paragraph
  const render = solution.join("");

  //combines both the words array and the values array into a single array
  const combineBlanksAndValues = (value, words) => {
    for (let i = 0; i < value.length; i++) {
      solution.push(value[i]);
      if (words) {
        solution.push(words[i]);
      }
    }
  };

  const showMeLib = () => {
    setShowInput(false);
    setComplete(true);
    setShowLib(true);

    console.log("showlib", showLib);
  };

  const reset = () => {
    setShowInput(true);
    setComplete(false);
    setShowLib(false);
    setCount(0);
    setWords([]);
    setSolution([]);
  };

  console.log();

  return (
    <AppContainer>
      {complete === true && showLib === false ? (
        <>
          <Title level={2}>{title}</Title>
          <h3>All Done</h3>
          <Button onClick={() => showMeLib()}>Show me the Mad Lib!</Button>
        </>
      ) : null}
      {showInput === true && complete === false ? (
        <>
          <Title>{title}</Title>
          <Form onSubmit={e => addWords(e, input, blanks)}>
            <Text htmlFor="">{blanks[count]}</Text>
            <Input
              type="text"
              placeholder="Add a word"
              name="input"
              onChange={changeHandler}
              value={input}
            />
            <br />
            <Button type="primary" onClick={e => addWords(e, input, blanks)}>
              add
            </Button>
          </Form>
        </>
      ) : null}

      {showLib === true ? (
        <>
          <TitleTop>{title}</TitleTop>
          <p>{render}</p>
          <Button onClick={() => reset()}>Reset</Button>
        </>
      ) : null}
    </AppContainer>
  );
}

export default App;

// Styled with emotion

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
