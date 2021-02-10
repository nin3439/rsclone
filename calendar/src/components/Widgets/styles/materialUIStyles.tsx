import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    width: 120,
    marginTop: 15,
    marginLeft: 15,
    height: 45,
    borderRadius: '16px',
    border: '2px solid #3f51b5',
    boxShadow:
      '0 1px 1px 0 rgb(60 64 67 / 30%), 0 2px 4px 2px rgb(60 64 67 / 15%)',
    '&:hover': {
      boxShadow:
        '0 2px 5px 0 rgb(60 64 67 / 30%), 0 5px 9px 4px rgb(60 64 67 / 15%)',
      border: '2px solid #3f51b5',
      backgroundColor: 'rgb(60 64 67 / 3%)',
    },
  },
}));
