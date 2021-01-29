import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 120,
    marginTop: 15,
    marginLeft: 15,
    height: 45,
    borderRadius: '16px',
    border: '2px solid #3f51b5',
    '&hover': {
      boxShadow:
        '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
    },
  },
}));
