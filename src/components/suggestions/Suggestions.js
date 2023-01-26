import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

import './suggestions.css';
import { useRef } from "react";

export const Suggestions = ({toggle}) => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, process.env.YOUR_PUBLIC_KEY
        ).then((response) => {
            console.log('Successfully sent', response.state, response.text);
        }).catch((err) => {
            console.log('Failed', err.text, err)
        })
    }

    return (
        <section id='suggestions'>
            <div id='suggestion-top'>
                <h3>Suggestions</h3>
                <IconButton sx={{color:'white', 'multiline':true, 'minRows':3}} onClick={(toggle)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form ref={form} id='suggestion-bottom' onSubmit={onSubmit}>
                    <input className='input-val' type='text' placeholder='Name' name='from'/>
                    <input className='input-val' type='text' placeholder='Email' name='email'/>
                    <textarea id='text-val' type='text' placeholder='Suggestion' name='message'/>
                    <button id='input-submit' type='submit'>Submit</button>
                </form>
        </section>
    )
}