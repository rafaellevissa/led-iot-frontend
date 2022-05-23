import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'

import { Button, Container, Modal, Paper, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { deviceSchema } from '../validator';
import { add } from '../../../../store/modules/device/actions';
import { useTranslation } from '../../../../hooks/use-translation';

const AddModal = () => {
  const dispatch = useDispatch()
  const { translate } = useTranslation()

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (payload: FormikValues) => {
    dispatch(add(payload))
  }

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      topic: '',
      name: ''
    },
    validationSchema: deviceSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size='medium' startIcon={<AddIcon />} color='primary' variant='contained' sx={{ mt: 3, mb: 3 }} onClick={handleOpen} >
        {translate('DEVICE:TITLE')}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper
          elevation={1}
          variant="outlined"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: 300,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography component="h1" variant="h5">
            {translate('DEVICE:TITLE')}
          </Typography>
          <Typography>
            {translate('DEVICE:ADD_SUBTITLE')}
          </Typography>
          <Formik {...formikConfig}>
            {({ handleSubmit, errors, setFieldValue, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  label={translate('DEVICE:RESOURCES:NAME')}
                  margin="normal"
                  required
                  fullWidth
                  component={TextField}
                  helperText={translate(errors.name as string)}
                  error={errors?.name}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue('name', target.value)
                  }
                />
                <Field
                  name="topic"
                  label={translate('DEVICE:RESOURCES:TOPIC')}
                  margin="normal"
                  required
                  fullWidth
                  component={TextField}
                  placeholder="MQTTEnvia1:MQTTRecebe1"
                  helperText={translate(errors.topic as string)}
                  error={errors?.topic}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue('topic', target.value)
                  }
                />
                <Button
                  type='submit'
                  variant="contained"
                  color="success"
                  fullWidth
                  startIcon={<AddIcon />}
                  sx={{ mt: 2 }}
                >
                  {translate('DEVICE:SUBMIT')}
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </div>
  )
}

export default AddModal;