import { Button, Input } from "@mui/material";

import './suggestions.css';

export const Suggestions = () => {
    return (
        <section id='suggestions'>
            <h3 id='suggestion-title'>Suggestions:</h3>
            <Input></Input>
            <Button>Send</Button>
        </section>
    )
}