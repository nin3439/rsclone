import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputTitle: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    fontSize: '24px',
    width: '87%',
    marginTop: '8px',
    alignSelf: 'center',
  },
  form: {
    width: '552px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  categoryBox: {
    width: '84%',
    alignSelf: 'center',
    display: 'flex',
    columnGap: '15px',
  },
}));
