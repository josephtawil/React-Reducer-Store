import React, {useRef} from 'react';
import {useTodoContext} from '../utils/GlobalState';

const Form = () => {
    const inputRef = useRef();
    // eslint-disable-next-line
    const [_,dispatch] = useTodoContext();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputRef.current.value);

        dispatch({type: "add", name: inputRef.current.value});
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1> Enter a todo </h1>
            <form className="form-group mt-5" onSubmit={handleSubmit}>
                <input ref={inputRef} className="form-control" placeholder="Enter todo text"/>
                <button type="submit" className="btn btn-success mt-5">
                    Add a todo
                </button>
            </form>
        </div>
    )
};

export default Form;