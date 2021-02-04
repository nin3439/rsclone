import React from 'react';
import { Form } from 'formik';
import { FormEvents } from '../FormEvents/FormEvents';
import { FormTask } from '../formTask/FormTask';
import { FormReminders } from '../FormReminder/FormReminder';
import { TextInput } from '../textInput/TextInput';
import { eventType } from '../../../../constants/Language';
import { Button, Box } from '@material-ui/core';
import { useStyles } from './materialUIStyles';
import { useTranslation } from 'react-i18next';

export const FormSwitch = ({ id, setSwitch, switchParameter }: any) => {
  const classMaterial: any = useStyles();
  const { t } = useTranslation();
  const changeswitchParameter = (param: string) => {
    if (param !== switchParameter) setSwitch(param);
  };
  const changeForm = (switchParam: string) => {
    switch (switchParameter) {
      case eventType.EVENTS:
        return <FormEvents />;
      case eventType.TASKS:
        return <FormTask />;
      case eventType.REMINDERS:
        return <FormReminders />;
      default:
        return <FormEvents />;
    }
  };
  return (
    <Form>
      <Box
        className={classMaterial.form}
        style={{
          height: `${switchParameter === eventType.EVENTS ? '400px' : '230px'}`,
        }}
        onClick={(e) => e.stopPropagation}
      >
        <TextInput
          id="title"
          style={classMaterial.inputTitle}
          name="title"
          type="text"
          placeholder={t('Add_title')}
        />
        {!id && (
          <>
            {' '}
            <Box className={classMaterial.categoryBox}>
              <Button
                variant={
                  switchParameter === eventType.EVENTS ? 'outlined' : 'text'
                }
                onClick={() => {
                  changeswitchParameter('events');
                }}
                color="primary"
              >
                {t('event')}
              </Button>
              <Button
                variant={
                  switchParameter === eventType.TASKS ? 'outlined' : 'text'
                }
                onClick={() => {
                  changeswitchParameter('tasks');
                }}
                color="primary"
              >
                {t('task')}
              </Button>
              <Button
                variant={
                  switchParameter === eventType.REMINDERS ? 'outlined' : 'text'
                }
                onClick={() => {
                  changeswitchParameter('reminders');
                }}
                color="primary"
              >
                {t('reminder')}
              </Button>
            </Box>
          </>
        )}
        {changeForm(switchParameter)}
      </Box>
    </Form>
  );
};
