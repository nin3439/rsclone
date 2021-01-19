import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputTitle: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    fontSize: theme.spacing(3),
    width: '83%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'flex-end',
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

  categoryBox: {
    width: '85%',
    alignSelf: 'flex-end',
  },
}));
