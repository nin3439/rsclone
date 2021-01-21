import React from 'react';
import i18n from '../../i18ns';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  const changeLanguage = (ln: string) => {
    return () => {
      debugger;
      console.log(ln);

      i18n.changeLanguage(ln);
      console.log(i18n.language);
    };
  };
  return (
    <div className={classes.header}>
      Header
      <div>
        <button onClick={changeLanguage('en')}>EN</button>
        <button onClick={changeLanguage('ru')}>RU</button>
      </div>
    </div>
  );
};
