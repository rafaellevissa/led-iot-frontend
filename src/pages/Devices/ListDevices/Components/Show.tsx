import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { find } from '../../../../store/modules/device/actions';
import { useTranslation } from '../../../../hooks/use-translation';

const ShowModal = (props: any) => {
  const dispatch = useDispatch()
  const { itemEdit } = useSelector<any, any>(item => item.device)
  const [open, setOpen] = React.useState(false);
  const { translate } = useTranslation()

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id))
    }
  }, [open])

  const formikConfig: FormikConfig<FormikValues> = {
    enableReinitialize: true,
    initialValues: {
      topic: itemEdit?.topic,
      name: itemEdit?.name,
    },
    onSubmit: () => { },
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <VisibilityIcon />
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
            {translate('DEVICE:SHOW_TITLE')}
          </Typography>
          <Typography>
            {translate('DEVICE:SHOW_SUBTITLE')}
          </Typography>
          <Formik {...formikConfig}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  margin="normal"
                  fullWidth
                  value={values?.name}
                  component={TextField}
                  disabled
                />
                <Field
                  name="topic"
                  margin="normal"
                  fullWidth
                  value={values?.topic}
                  component={TextField}
                  disabled
                />
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </>
  )
}

export default ShowModal;