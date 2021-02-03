import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
    zIndex: 1000,
  },
  active: {
    transform: 'scale(1)',
  },
  modal: {
    width: '400px',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#fff',
    padding: '0px 10px 10px',
  },
  close: {
    width: '100%',
    height: '36px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '4px',
  },
  eventColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#3f51b5',
    borderRadius: '50%',
  },
  taskColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#f50057',
    borderRadius: '50%',
  },
  reminderColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#ff9800',
    borderRadius: '50%',
  },
  holidaysBelerusColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#00bcd4',
    borderRadius: '50%',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
    justifyContent: 'center',
    width: '85%',
  },
  title: {
    fontSize: '22px',
  },
  box: {
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  informationEvent: {
    width: '85%',
  },
  icons: {
    padding: '5px',
    '&:hover': {
      background: '#dddddd40',
      borderRadius: '50%',
    },
  },
}));
