import { Moment } from 'moment';
import {TimeFormats} from "../../App.types";

export type HeaderProps = {
  showBlock: boolean;
  setShowBlock: (showBlock: boolean) => void;
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  setViewFormat: (view: TimeFormats) => void;
};
