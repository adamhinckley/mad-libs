import React from "react";
import useForm from "./useForm";

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
            <form onSubmit={event => handleSubmit(submit)}>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={handleChange}
                    value={values.line}
                />
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={handleChange}
                    value={values.blank}
                />
                <div>
                    <button>Add</button>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default AddMadlibForm;
