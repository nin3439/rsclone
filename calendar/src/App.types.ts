import {Formats} from "./formats";

export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type TimeFormats = typeof Formats[keyof typeof Formats];
