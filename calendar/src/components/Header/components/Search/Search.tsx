import TextField from '@material-ui/core/TextField';
import classes from './Search.module.scss';
import './styles/Search.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const SearchBlock = () => {
  const [searchValue, setSearch] = useState<null | string>(null);
  const searchSpace = (event: any) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  const arrEvents = useSelector((state: any) => state.content.events);
  const searchEvent = (array: any) => {
    return array.map((element: any) => {
      return element.title;
    });
  };

  const generateEventList = (array: any) => {
    const listTitleArray = array
      .filter((element: any) => {
        if (searchValue == null || searchValue === '') return (element = '');
        else if (element.toLowerCase().includes(searchValue.toLowerCase())) {
          return element;
        } else return null;
      })
      .map((element: any) => {
        return (
          <ul className="searchPath">
            <li className="searchPoint">
              <a className="searchLink" href={element}>
                {element}
              </a>
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
