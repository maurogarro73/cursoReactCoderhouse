import React, { useState } from 'react';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Juan',
    email: 'juan@juan.com',
  });

  function updateName(name) {
    setUser({ ...user, name });
  }

  function updateEmail(email) {
    setUser({ ...user, email });
  }

  return <UserContext.Provider value={{ user, updateName, updateEmail }}>{children}</UserContext.Provider>;
}
