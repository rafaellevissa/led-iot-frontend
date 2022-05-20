import * as React from 'react';

import { Button, Container, IconButton, Modal, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { remove } from '../../../../store/modules/device/actions';
import { useTranslation } from '../../../../hooks/use-translation';

const DeleteModal = ({ id }: any) => {
  const dispatch = useDispatch()
  const { translate } = useTranslation()
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    dispatch(remove(id));
  }

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <DeleteIcon />
			</IconButton>
      <Modal open={open} onClose={handleClose}>
        <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                {translate('DEVICE:DELETE_TITLE')}
              </Typography>
              <Typography>
                {translate('DEVICE:DELETE_CONFIRMATION')}
              </Typography>
              <Button
                type='submit'
                variant="contained"
                color="error"
                fullWidth
                startIcon={<DeleteIcon />}
                sx={{ mt: 2 }}
                onClick={handleDelete}
              >
                {translate('DEVICE:DELETE_SUBMIT')}
              </Button>
          </Paper>
        </Container>
      </Modal>
    </>
  )
}

export default DeleteModal;