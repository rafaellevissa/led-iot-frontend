import * as React from 'react';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'

const DatePicker = (props: any) => {
  return (
    <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
      <DatePickerMui
        {...props}
        renderInput={(params: any) => <TextField {...params} {...props} />}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;