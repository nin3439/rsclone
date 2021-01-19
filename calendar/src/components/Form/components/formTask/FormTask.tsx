import React from 'react';
import { Form } from 'formik';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { AccessTime, SubjectOutlined } from '@material-ui/icons';
import { useStyles } from './materialUIStyles';

export const FormTask = ({ t }: any) => {
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
