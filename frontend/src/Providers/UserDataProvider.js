import React, { createContext, useContext, useEffect, useState } from 'react';
export const UserDataContext = createContext({});

export const UserDataProvider = (props) => {
  const [data, setData] = useState({
    email: '',
    name: '',
    telefone: '',
    endereco: '',
    cidade: '',
    pais: '',
    estado: '',
    cep: '',
    metodoEnvio: '',
    cartao: '',
    envio: 0,
    produtos: {},
  });

  useEffect(() => {
    const userStorage = localStorage.getItem('data');
    if (userStorage) {
      setData(JSON.parse(userStorage));
    } else {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, []);

  return (
    <UserDataContext.Provider value={{ data, setData }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useData = () => useContext(UserDataContext); 