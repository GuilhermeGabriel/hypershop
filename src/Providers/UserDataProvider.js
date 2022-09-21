import React, { useEffect, useState } from 'react';

export const UserDataContext = React.createContext({});

export const UserDataProvider = (props) => {
  const [user, setUser] = useState({
    uid: '',
    name: '',
    email: '',
    type: '',
    photoUrl: '',
    role: ''
  });

  useEffect(()=>{
    const userStorage = localStorage.getItem('user');
    if(userStorage){
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  },[]);

  return (
    <UserDataContext.Provider value={{user,setUser}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserDataContext); 