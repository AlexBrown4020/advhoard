import { IconButton, Button, Input } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import './suggestions.css';

export const Suggestions = ({toggle}) => {
    return (
        <section id='suggestions'>
            <div id='suggestion-top'>
                <h3 id='suggestion-title'>Suggestions:</h3>
                <IconButton sx={{color:'white'}} onClick={(toggle)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <Input></Input>
            <Button>Send</Button>
        </section>
    )
}