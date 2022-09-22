import React, { useEffect, useState } from 'react';

export const UserDataContext = React.createContext({});

export const UserDataProvider = (props) => {
  const [data, setData] = useState({
    produtos: {},
  });

  useEffect(() => {
    const userStorage = localStorage.getItem('data');
    if(userStorage){
      setData(JSON.parse(userStorage));
    }
  },[]);

  return (
    <UserDataContext.Provider value={{data, setData}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useData = () => React.useContext(UserDataContext); 