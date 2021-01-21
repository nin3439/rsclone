export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda';
