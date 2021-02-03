import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  dialog: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    width: '100px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    borderRadius: '4px',
  },
  label: {
    marginLeft: '0px',
    marginRight: '12px',
  },
  select: {
    '& input': {
      padding: '9.5px 14px',
    },
  },
}));
