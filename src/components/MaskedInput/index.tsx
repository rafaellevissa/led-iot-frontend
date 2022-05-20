import React from 'react'
import InputMask from 'react-input-mask';
import { TextField } from "@mui/material";

const MaskedInput = (props: any) => (
  <InputMask {...props}>
    {(inputProps: any) => <TextField {...props} {...inputProps} />}
  </InputMask>
)

export default MaskedInput;