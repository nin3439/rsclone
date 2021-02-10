import React from 'react';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { AccessTime, SubjectOutlined } from '@material-ui/icons';
import { useStyles } from './materialUIStyles';
import { useTranslation } from 'react-i18next';

export const FormTask = () => {
  const { t } = useTranslation();
  const classMaterial: any = useStyles();
  return (
    <div className={classMaterial.wrapper}>
      <Box className={classMaterial.box}>
        <AccessTime className={classMaterial.icons} color="action" />
        <Box className={classMaterial.timeBox}>
          <TextInput
            id="start"
            name="start"
            type="datetime-local"
            label={t('Start_Date')}
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
      <Box className={classMaterial.box}>
        <SubjectOutlined className={classMaterial.icons} color="action" />
        <TextInput
          style={classMaterial.input}
          name="description"
          type="text"
          placeholder={t('add_description')}
        />
      </Box>
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
    </div>
  );
};
