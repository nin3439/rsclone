import TextField from '@material-ui/core/TextField';
import './styles/Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSelectedEvents } from '../../../redux/actions/contentAction';
import { changeActivePopup } from '../../../redux/actions/StateContolAction';

export const SearchBlock = () => {
  const dispatch = useDispatch();
  const selectedSlot = (e: any) => {
    dispatch(updateSelectedEvents(e));
    dispatch(changeActivePopup());
  };

  const [searchValue, setSearchValue] = useState('');
  const searchSpace = (event: any) => {
    let keyword = event.target.value;
    setSearchValue(keyword);
  };

  const arrEvents = useSelector((state: any) => state.content.events);
  const generateEventList = (array: any) => {
    const listTitleArray = array
      .filter((element: any) => {
        if (!searchValue) return (element = '');
        else if (
          element.title.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return element.title;
        } else return '';
      })
      .map((element: any) => {
        return (
          <ul className="search-path">
            <li
              className="search-point"
              onClick={() => {
                selectedSlot(element);
              }}
            >
              {element.title}
            </li>
          </ul>
        );
      });
    return listTitleArray;
  };
  return (
    <form className="search-block" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        className="text-field"
        label="Search"
        variant="outlined"
        autoFocus={true}
        onChange={(element) => searchSpace(element)}
      />
      <div className="events-wrapper">{generateEventList(arrEvents)}</div>
    </form>
  );
};
