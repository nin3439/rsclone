import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnSubmit: {
    width: theme.spacing(20),
    marginRight: theme.spacing(1),
  },

  box: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },

  timeBox: {
    width: '85%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  formButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: ' flex-end',
    alignItems: 'center',
    paddingBottom: '1%',
  },
}));
