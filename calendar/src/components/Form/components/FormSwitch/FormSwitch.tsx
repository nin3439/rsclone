import React, { useState } from 'react';
import { Form } from 'formik';
import { FormEvents } from '../FormEvents/FormEvents';
import { FormTask } from '../formTask/FormTask';
import { FormReminders } from '../FormReminder/FormReminder';
import { TextInput } from '../textInput/TextInput';
import { eventType } from './constants';
import { Button, Box } from '@material-ui/core';
import { useStyles } from './materialUIStyles';

export const FormSwitch = ({ t }: any) => {
  const classMaterial: any = useStyles();
  const [switchParameter, setSwitch] = useState('events');
  const changeswitchParameter = (param: string) => {
    if (param !== switchParameter) setSwitch(param);
  };
  const changeForm = (switchParam: string) => {
    switch (switchParameter) {
      case eventType.EVENTS:
        return <FormEvents t={t} />;
      case eventType.TASKS:
        return <FormTask t={t} />;
      case eventType.REMINDERS:
        return <FormReminders t={t} />;
      default:
        return <FormEvents t={t} />;
    }
  };
  return (
    <Form>
      <Box className={classMaterial.form} onClick={(e) => e.stopPropagation}>
        <TextInput
          id="standard-basic"
          style={classMaterial.inputTitle}
          name="title"
          type="text"
          placeholder={t('Add_title')}
        />
        <Box className={classMaterial.categoryBox}>
          <Button
            onClick={() => {
              changeswitchParameter('events');
            }}
            color="primary"
          >
            {t('event')}
          </Button>
          <Button
            onClick={() => {
              changeswitchParameter('tasks');
            }}
            color="primary"
          >
            {t('task')}
          </Button>
          <Button
            onClick={() => {
              changeswitchParameter('reminders');
            }}
            color="primary"
          >
            {t('reminder')}
          </Button>
        </Box>
        {changeForm(switchParameter)}
      </Box>
    </Form>
  );
};
