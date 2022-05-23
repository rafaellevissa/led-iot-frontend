import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deviceSchema } from '../validator';
import { find, update } from '../../../../store/modules/device/actions';
import { useTranslation } from '../../../../hooks/use-translation';

const EditModal = (props: any) => {
  const dispatch = useDispatch()
  const { itemEdit } = useSelector<any, any>(item => item.device)
  const [open, setOpen] = React.useState(false);
  const { translate } = useTranslation()

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id))
    }
  }, [open])

  const handleSubmit = (payload: FormikValues) => {
    const data = {
      ...payload,
      id: props.id
    }

    dispatch(update(data))
  }

  const formikConfig: FormikConfig<FormikValues> = {
    enableReinitialize: true,
    initialValues: {
      topic: itemEdit?.topic,
      name: itemEdit?.name
    },
    validationSchema: deviceSchema,
    onSubmit: handleSubmit,
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
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
            {translate('DEVICE:EDIT_TITLE')}
          </Typography>
          <Typography>
            {translate('DEVICE:EDIT_SUBTITLE')}
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
                  value={values?.name}
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
                  value={values?.topic}
                />
                <Button
                  type='submit'
                  variant="contained"
                  color="success"
                  fullWidth
                  startIcon={<EditIcon />}
                  sx={{ mt: 2 }}
                >
                  {translate('DEVICE:SUBMIT')}
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </>
  )
}

export default EditModal;