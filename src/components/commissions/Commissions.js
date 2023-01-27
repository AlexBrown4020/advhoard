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
            <div>
                <p className='contact-info'>When requesting a commission, please note:</p>
                <ul>
                    <li className='contact-info'>Depending on current work load, commissions may take time.</li>
                    <li className='contact-info'>Designing custom 3D files will be charged by hour.</li>
                    <li className='contact-info'>If you require a manufactured model, there is a charge for materials and time spent. Designing new 3D files is also included in this fee.</li>
                </ul>
                <p className='contact-info'>
                    Within your email; please include any information to help with the design process 
                    (images, videos, schematics, etc) to get the closest approximation of your product.  
                </p>
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