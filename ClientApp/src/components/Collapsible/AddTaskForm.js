import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log("added");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AddIcon className="add-task" variant="outlined" color="primary" onClick={handleClickOpen} />
      <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title">
        <DialogTitle id="max-width-dialog-title">Add Task</DialogTitle>
        <DialogContent>
            <DialogContentText >Title</DialogContentText>
            <TextField multiline={true} id="outlined-basic" label="Add Title Here" placeholder="Add Title Here" variant="outlined" fullWidth={true}/>
            <DialogContentText></DialogContentText>
            <DialogContentText>Description</DialogContentText>
            <TextField rows='3' multiline={true} id="outlined-basic" label="Add Decription Here" placeholder="Add Decription Here" variant="outlined" fullWidth={true}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} color="primary">Add</Button>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}