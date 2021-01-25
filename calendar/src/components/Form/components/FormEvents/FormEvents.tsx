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
export const FormEvents = ({ t }: any) => {
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
            label={t('Start_Date')}
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextInput
            name="dateTimeEnd"
            id="datetime-local"
            type="datetime-local"
            label={t('End_Date')}
            defaultValue="2017-05-24"
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
          placeholder={t('Add_guests')}
        />
      </Box>
      <Box className={classMaterial.box}>
        <LocationOnOutlined />
        <TextInput
          id="filled-basic"
          style={classMaterial.input}
          name="location"
          type="text"
          placeholder={t('indicate_location')}
        />
      </Box>

      <Box className={classMaterial.box}>
        <SubjectOutlined />
        <TextInput
          id="filled-basic"
          style={classMaterial.input}
          name="description"
          type="text"
          placeholder={t('add_description')}
        />
      </Box>
      <Box className={classMaterial.formButtons}>
        <Button>{t('Other_parameters')}</Button>
        <Button
          className={classMaterial.btnSubmit}
          size="large"
          color="primary"
          variant="contained"
          type="submit"
        >
          {t('save')}
        </Button>
      </Box>
    </>
  );
};
