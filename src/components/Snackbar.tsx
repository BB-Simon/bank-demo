import React, { FC } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { snackbarActions, State } from '../store';

const Snackbar:FC = () => {
    const dispatch = useDispatch()

    const {setSuccess, setError, closeSnackbar} = bindActionCreators(snackbarActions, dispatch)
    const {message, severity, isOpen} = useSelector((state:State) => state.snackbar)
    const success = {
        margin: "20px auto",
        maxWidth: "500px",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "2px solid green",
        color: 'green'
    }
    const error = {
        margin: "20px auto",
        maxWidth: "500px",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "2px solid red",
        color: 'red'
    }
    return (
        <div style={{padding: "30px 0"}}>
            { isOpen && (
                <div style={severity === "success" ? success : error}>
                    <h1 >{message}</h1>
                </div>
            )}
            <button onClick={()=> setSuccess("action success")}>Open Snack bar on success</button>
            <button onClick={()=> setError("Error occurred")}>Open Snack bar on error</button>
            <button onClick={closeSnackbar}>Close Snack bar</button>
        </div>
    );
};

export default Snackbar;