import React from 'react';
import { Form } from 'formik';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { AccessTime, SubjectOutlined } from '@material-ui/icons';
import { useStyles } from './materialUIStyles';

export const FormTask = () => {
  const classMaterial: any = useStyles();
  return (
    <Box>
      <Box className={classMaterial.box}>
        <AccessTime />
        <Box className={classMaterial.timeBox}>
          <TextInput
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
      <Box className={classMaterial.box}>
        <SubjectOutlined />
        <TextInput
          id="filled-basic"
          style={classMaterial.input}
          name="description"
          type="text"
          placeholder="add a description or attach a file"
        />
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
