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
import { useTranslation } from 'react-i18next';
export const FormEvents = () => {
  const { t } = useTranslation();
  const classMaterial: Record<
    | 'btnSubmit'
    | 'box'
    | 'input'
    | 'timeBox'
    | 'formButtons'
    | 'icons'
    | 'footer',
    string
  > = useStyles();
  return (
    <>
      <Box className={classMaterial.box}>
        <AccessTime className={classMaterial.icons} color="action" />
        <Box className={classMaterial.timeBox}>
          <TextInput
            id="start"
            name="start"
            type="datetime-local"
            label={t('Start_Date')}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextInput
            id="end"
            name="end"
            type="datetime-local"
            label={t('End_Date')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
      <Box className={classMaterial.box}>
        <PeopleOutlineRounded className={classMaterial.icons} color="action" />
        <TextInput
          id="listGuest"
          name="listGuest"
          type="text"
          style={classMaterial.input}
          placeholder={t('Add_guests')}
        />
      </Box>
      <Box className={classMaterial.box}>
        <LocationOnOutlined className={classMaterial.icons} color="action" />
        <TextInput
          id="location"
          style={classMaterial.input}
          name="location"
          type="text"
          placeholder={t('indicate_location')}
        />
      </Box>

      <Box className={classMaterial.box}>
        <SubjectOutlined className={classMaterial.icons} color="action" />
        <TextInput
          id="description"
          style={classMaterial.input}
          name="description"
          type="text"
          placeholder={t('add_description')}
        />
      </Box>
      <Box className={classMaterial.box}>
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
