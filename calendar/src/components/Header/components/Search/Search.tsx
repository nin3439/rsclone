import TextField from '@material-ui/core/TextField';
import classes from './Search.module.scss';
import './styles/Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSelectedEvents } from '../../../../redux/actions/contentAction';
import { changeActivePopup } from '../../../../redux/actions/StateContolAction';

export const SearchBlock = () => {
  const dispatch = useDispatch();
  const selectedSlot = (e: any) => {
    dispatch(updateSelectedEvents(e));
    dispatch(changeActivePopup());
  };

  const [searchValue, setSearchValue] = useState('');
  const searchSpace = (event: any) => {
    debugger;
    let keyword = event.target.value;
    setSearchValue(keyword);
  };

  const arrEvents = useSelector((state: any) => state.content.events);
  const searchEvent = (array: any) => {
    return array.map((element: any) => {
      return element.title;
    });
  };

  const generateEventList = (array: any) => {
    debugger;
    const listTitleArray = array
      .filter((element: any) => {
        if (searchValue === '' || searchValue === 'undefined')
          return (element = '');
        else if (element.toLowerCase().includes(searchValue.toLowerCase())) {
          return element;
        } else return '';
      })
      .map((element: any) => {
        return (
          <ul className="searchPath">
            <li className="searchPoint" onClick={selectedSlot}>
              {element}
            </li>
          </ul>
        );
      });
    return listTitleArray;
  };
  return (
    <form className={classes.searchBlock} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        className="textField"
        label="Search"
        variant="outlined"
        autoFocus={true}
        onChange={(element) => searchSpace(element)}
      />
      <div>{generateEventList(searchEvent(arrEvents))}</div>
    </form>
  );
};
