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
    width: '448px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 'borderRadius',
    backgroundColor: '#fff',
  },
  close: {
    width: '100%',
    height: '36px',
    backgroundColor: ' #f1f3f4',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  eventColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#eb1c1c',
  },

  taskColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#3f51b5',
  },

  reminderColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#520202',
  },

  holidaysBelerusColor: {
    width: '24px',
    height: '24px',
    backgroundColor: '#f50057',
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
}));
