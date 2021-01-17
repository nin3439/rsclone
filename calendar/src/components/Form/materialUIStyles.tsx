import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
}));
