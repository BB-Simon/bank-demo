import React, { FC } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { snackbarActions, State } from '../store';
import './snackbar.css'

const Snackbar:FC = () => {
    const dispatch = useDispatch()

    const {setSuccess, setError, closeSnackbar} = bindActionCreators(snackbarActions, dispatch)
    const {message, severity, isOpen} = useSelector((state:State) => state.snackbar)

    return (
        <div data-testid="row" style={{padding: "30px 0"}}>
            { isOpen && (
                <div data-testid="msg" className={`box ${severity === "success" ? 'success' : 'error'}`}>
                    <h1>{message}</h1>
                </div>
            )}
            <button onClick={()=> setSuccess("action success")}>Open Snack bar on success</button>
            <button onClick={()=> setError("Error occurred")}>Open Snack bar on error</button>
            <button onClick={closeSnackbar}>Close Snack bar</button>
        </div>
    );
};

export default Snackbar;