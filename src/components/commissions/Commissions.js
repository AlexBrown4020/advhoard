import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './commissions.css';

export const Commissions = (toggle) => {
    return (
        <section id='commissions'>
            <div id='commission-top'>
                <h3>Commissions</h3>
                <IconButton sx={{color:'white'}} onClick={(toggle)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <form>

            </form>
        </section>
    )
}