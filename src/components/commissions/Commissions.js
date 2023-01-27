import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import '../suggestions/contact.css';

export const Commissions = ({toggleC}) => {
    return (
        <section id='contact'>
            <div id='contact-top'>
                <h3>Commissions</h3>
                <IconButton sx={{color:'white'}} onClick={(toggleC)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <form id='contact-bottom'>
                <TextField sx={{width: '50%', padding: '5px', label:{color: 'white'}, input:{color: 'white'}}} variant='filled' label='Name' type='text' name='from_name'/>
                <TextField sx={{width: '50%', padding: '5px', label:{color: 'white'}, input:{color: 'white'}}} variant='filled' label='Email' type='text'  name='reply_to'/>
                <TextField sx={{width: '70%', padding: '5px', label:{color: 'white'}}} inputProps={{style:{color:'white'}}} rows={2} variant='filled' label='Comments' multiline={true} type='text' name='message'/>
                <button id='input-submit' type='submit'>Submit</button>
            </form>
        </section>
    )
}