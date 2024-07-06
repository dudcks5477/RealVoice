import React, {createContext, useContext, useState} from 'react';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({
    userUuid: '',
    phoneNumber: '',
    callingCode: '+82',
    nickName: '',
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
};
