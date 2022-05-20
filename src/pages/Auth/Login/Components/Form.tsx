import * as React from 'react';
import { Field, useFormikContext } from 'formik'
import { useSelector } from 'react-redux';
import {
  Alert,
  Box,
  Snackbar,
  TextField,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  FormControl,
  InputLabel
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import SubmitButton from './SubmitButton';
import { useTranslation } from '../../../../hooks/use-translation';

const Form = () => {
  const { translate } = useTranslation()
  const { handleSubmit, errors, setFieldValue } = useFormikContext<any>();
  const { error } = useSelector<any, any>(item => item.auth);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <Box sx={{ mt: 1 }}>
        <Field
          name="email"
          label={translate('LOGIN:EMAIL')}
          margin="normal"
          required
          fullWidth
          autoComplete="email"
          autoFocus
          component={TextField}
          helperText={translate(errors.email as string)}
          error={errors?.email}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
            setFieldValue('email', target.value)
          }
        />
        <FormControl fullWidth>
          <InputLabel error={Boolean(errors?.password)} htmlFor="component-outlined">{translate('LOGIN:PASSWORD')}</InputLabel>
          <Field
            id="component-outlined"
            name="password"
            margin="normal"
            required
            fullWidth
            type={showPassword ? 'text': 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            autoComplete="current-password"
            error={errors?.password}
            component={OutlinedInput}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
              setFieldValue('password', target.value)
            }
          />
          {errors.password && (
            <FormHelperText error>{translate(errors.password as string)}</FormHelperText>
          )}
        </FormControl>

        <SubmitButton 
          type="submit"
          variant='contained'
          form='login-form'
          fullWidth
        >
          {translate('LOGIN:SUBMIT')}
        </SubmitButton>
      </Box>

      <Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {translate('LOGIN:ERROR')}
        </Alert>
      </Snackbar>
    </form>
  );
}

export default Form;