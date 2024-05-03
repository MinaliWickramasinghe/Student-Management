import TextField from '@mui/material/TextField';
import React, { forwardRef } from "react";

const TextInput = forwardRef (({labelName, onChange, helper}, ref) => {

    return(
        <TextField id="outlined-basic" 
            label={labelName} 
            onChange={onChange} 
            inputRef={ref} 
            helperText={helper}
            variant="outlined" 
            sx={{width: 250}}
        />
    )
})

export default TextInput;