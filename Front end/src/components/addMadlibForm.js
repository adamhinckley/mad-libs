import React from "react";
import useForm from "./useForm";
import { Button } from "antd";

const AddMadlibForm = () => {
  let [formCount, setFormCount] = React.useState(0);
  const { values, handleChange, handleSubmit } = useForm();
  console.log(values);

  const submit = event => {
    event.preventDefault();
    formCount++;
    setFormCount(formCount);
    console.log("fired");
  };

  return (
    <>
      <form onSubmit={() => handleSubmit(submit)}>
        <input type="text" name="line" onChange={handleChange} value={values.line} />
        <input type="text" name="blank" onChange={handleChange} value={values.blank} />
        <div>
          <Button type="primary">Add</Button>
        </div>
        <div>
          <Button type="primary">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default AddMadlibForm;
