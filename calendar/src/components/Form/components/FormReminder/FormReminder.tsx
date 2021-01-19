import React from 'react';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { AccessTime, SubjectOutlined } from '@material-ui/icons';

import { useStyles } from './materialUIStyles';

export const FormReminders = ({ t }: any) => {
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
            label={t('Start_Date')}
            defaultValue={new Date()}
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
