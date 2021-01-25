export type FormProps = {
  changeModalActive: () => void;
  updateDateForm?: any;
};

export type FormValuesProps = {
  title: string;
  listGuest: string;
  location: string;
  description: string;
  dateTimeStart: string;
  dateTimeEnd: string;
};
