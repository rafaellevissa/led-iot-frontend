import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('ERROR:VALIDATION:EMAIL')
    .required('ERROR:VALIDATION:REQUIRED'),
  password: Yup.string()
    .max(200, 'ERROR:VALIDATION:MAX')
    .required('ERROR:VALIDATION:REQUIRED')
});
