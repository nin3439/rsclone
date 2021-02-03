import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  btnSubmit: {
    width: '140px',
    marginRight: theme.spacing(1),
    margin: '5px 10px 5px',
    '&:hover': {
      background: '#3f51b5eb',
    },
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    fontSize: theme.spacing(2),
    width: '86%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'flex-end',
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
