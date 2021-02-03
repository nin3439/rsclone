import React from 'react';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';

import { useStyles } from './materialUIStyles';
import { useTranslation } from 'react-i18next';

export const FormReminders = () => {
  const { t } = useTranslation();
  const classMaterial: any = useStyles();
  return (
    <Box>
      <Box className={classMaterial.box}>
        <AccessTime />
        <Box className={classMaterial.timeBox}>
          <TextInput
            name="start"
            type="datetime-local"
            label={t('Start_Date')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
      <Box>{t('Select_Interval')}</Box>
      <Box className={classMaterial.formButtons}>
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
    </Box>
  );
};
