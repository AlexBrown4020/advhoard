import { IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

import './contact.css';
import { useRef } from "react";

export const Suggestions = ({toggleS}) => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY
        ).then((response) => {
            console.log('Successfully sent', response.state, response.text);
        }).catch((err) => {
            console.log('Failed', err.text, err)
        });
        toggleS();
        alert("Email sent successfully");
    }

    return (
        <section id='contact'>
            <div id='contact-top'>
                <h3>Suggestions</h3>
                <IconButton sx={{color:'white'}} onClick={(toggleS)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form ref={form} id='contact-bottom' onSubmit={onSubmit}>
                    <TextField sx={{width: '50%', padding: '5px', label:{color: 'white'}, input:{color: 'white'}}} variant='filled' label='Name' type='text' name='from_name'/>
                    <TextField sx={{width: '50%', padding: '5px', label:{color: 'white'}, input:{color: 'white'}}} variant='filled' label='Email' type='text'  name='reply_to'/>
                    <TextField sx={{width: '70%', padding: '5px', label:{color: 'white'}}} inputProps={{style:{color:'white'}}} rows={2} variant='filled' label='Message' multiline={true} type='text' name='message'/>
                    <button id='input-submit' type='submit'>Submit</button>
                </form>
        </section>
    )
}