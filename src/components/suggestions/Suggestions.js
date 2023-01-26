import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

import './suggestions.css';
import { useRef } from "react";

export const Suggestions = ({toggle}) => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY
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
                <IconButton sx={{color:'white'}} onClick={(toggle)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form ref={form} id='suggestion-bottom' onSubmit={onSubmit}>
                    <input className='input-val' type='text' placeholder='Name' name='from_name'/>
                    <input className='input-val' type='text' placeholder='Email' name='reply_to'/>
                    <textarea id='text-val' type='text' placeholder='Suggestion' name='message'/>
                    <button id='input-submit' type='submit'>Submit</button>
                </form>
        </section>
    )
}