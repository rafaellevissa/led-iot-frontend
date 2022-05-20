import { Container, Paper, Typography } from '@mui/material';
import { Formik, FormikConfig, FormikValues } from 'formik'
import Form from './Components/Form';
// import LampThemeToggle from '../../../components/LampTheme';
import { Login } from '../../../store/modules/auth/types';
import { loginSchema } from './validator';
import { login } from '../../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { useTranslation } from '../../../hooks/use-translation';

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { translate } = useTranslation()

  const handleSubmit = (payload: FormikValues) => {
    const form = payload as Login;

    dispatch(login(form));
  }

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      {/* <LampThemeToggle /> */}
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
        <Typography component="h1" variant="h5">
          {translate('LOGIN:TITLE')}
        </Typography>
        <Typography>
          {translate('LOGIN:SUBTITLE')} 
        </Typography>
        <Formik {...formikConfig}>
          <Form />
        </Formik>
      </Paper>
    </Container>
  )
}
