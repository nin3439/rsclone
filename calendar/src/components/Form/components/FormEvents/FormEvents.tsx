import React from 'react';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import {
  AccessTime,
  LocationOnOutlined,
  PeopleOutlineRounded,
  SubjectOutlined,
} from '@material-ui/icons';

import { useStyles } from './materialUIStyles';

export const FormEvents = () => {
  const classMaterial: Record<
    'btnSubmit' | 'box' | 'input' | 'timeBox' | 'formButtons',
    string
  > = useStyles();
  return (
    <>
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
          <TextInput
            name="dateTimeEnd"
            id="datetime-local"
            type="datetime-local"
            label="End Date"
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
      <Box className={classMaterial.box}>
        <PeopleOutlineRounded />
        <TextInput
          id="filled-basic"
          name="listGuest"
          type="text"
          style={classMaterial.input}
          placeholder="add guests"
        />
      </Box>
      <Box className={classMaterial.box}>
        <LocationOnOutlined />
        <TextInput
          id="filled-basic"
          style={classMaterial.input}
          name="location"
          type="text"
          placeholder="indicate the location"
        />
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
      <Box className={classMaterial.formButtons}>
        <Button>Other parameters</Button>
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
    </>
  );
};
