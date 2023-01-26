import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { send } from 'emailjs-com';

import './suggestions.css';
import { useState } from "react";

export const Suggestions = ({toggle}) => {
    let EMAIL = process.env.EMAIL;
    const [toSend, setToSend] = useState({
        from: '',
        to: EMAIL,
        email: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            `${EMAIL}`,
            'TEMPLE ID',
            toSend,
            'Public Key'
        ).then((response) => {
            console.log('Successfully sent', response.state, response.text);
        }).catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    return (
        <section id='suggestions'>
            <div id='suggestion-top'>
                <h3>Suggestions</h3>
                <IconButton sx={{color:'white', 'multiline':true, 'minRows':3}} onClick={(toggle)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form id='suggestion-bottom' onSubmit={onSubmit}>
                    <input className='input-val' type='text' placeholder='Name' name='from' value={toSend.from} onChange={handleChange}/>
                    <input className='input-val' type='text' placeholder='Email' name='email' value={toSend.email} onChange={handleChange}/>
                    <textarea id='text-val' type='text' placeholder='Suggestion' name='message' value={toSend.message} onChange={handleChange}/>
                    <button id='input-submit' type='submit'>Submit</button>
                </form>
        </section>
    )
}