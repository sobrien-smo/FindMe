import React from "react";
import useStyles from "./styles";


const Form =() => {
    const classes = useStyles();
    const handleSubmit =()=>{

    }
    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h6>Add Post</h6>
        </form>
    );
}
export default Form;