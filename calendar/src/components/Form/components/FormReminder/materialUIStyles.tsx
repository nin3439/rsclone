import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  btnSubmit: {
    width: '140px',
    marginRight: theme.spacing(1),
    margin: '10px',
    '&:hover': {
      background: '#3f51b5eb',
    },
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  timeBox: {
    width: '85%',
    display: 'flex',
    alignSelf: 'center',
  },
  formButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: ' flex-end',
    alignItems: 'center',
    paddingBottom: '1%',
  },
  icons: {
    padding: '0 10px',
    '&:hover': {
      cursor: 'default',
    },
  },
}));
