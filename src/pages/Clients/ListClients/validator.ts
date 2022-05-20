import * as Yup from 'yup';

export const deviceSchema = Yup.object().shape({
  name: Yup.string().required('ERROR:VALIDATION:REQUIRED'),
  topic: Yup.string().required('ERROR:VALIDATION:REQUIRED')
});
