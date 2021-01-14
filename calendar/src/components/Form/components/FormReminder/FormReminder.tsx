import React from 'react';
import { MyTextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { useStyles } from './materialUIStyles';
import {
  AccessTime,
  SubjectOutlined,
} from '@material-ui/icons';

export const FormReminders = () => {
  const classMaterial: any = useStyles();
  return (
    <Box>
      <Box className={classMaterial.box}>
        <AccessTime />
        <Box className={classMaterial.timeBox}>
          <MyTextInput
            name="dateTimeStart"
            id="datetime-local"
            type="datetime-local"
            label="Start Date"
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
      <Box>
        Select Interval
      </Box>
      <Box className={classMaterial.buttonsForm}>
        <Button
          className={classMaterial.btnSubmit}
          size="large"
          color="primary"
          variant="contained"
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
