import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnSubmit: {
    width: theme.spacing(20),
    marginRight: theme.spacing(1),
  },

  overlay: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0,0.4)',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(0)',
    zIndex: 4,
  },

  active: {
    transform: 'scale(1)',
  },

  inputTitle: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    fontSize: theme.spacing(3),
    width: '83%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'flex-end',
  },

  modal: {
    width: '552px',
    height: ' 552px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 'borderRadius',
  },
  close: {
    width: '100%',
    height: '36px',
    backgroundColor: ' #f1f3f4',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  form: {
    width: '552px',
    height: ' 514px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    cursor: 'pointer',
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

  categoryBox: {
    width: '85%',
    alignSelf: 'flex-end',
  },
  buttonsForm: {
  width: '100%',
  display:"flex",
  justifyContent:' flex-end',
  alignItems: 'center',
  paddingBottom:'1%'
}
}));
