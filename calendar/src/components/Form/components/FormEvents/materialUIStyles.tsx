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

  input: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    fontSize: theme.spacing(2),
    width: '83%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'flex-end',
  },

  timeBox: {
    width: '85%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  buttonsForm: {
  width: '100%',
  display:"flex",
  justifyContent:' flex-end',
  alignItems: 'center',
  paddingBottom:'1%'
}
}));
