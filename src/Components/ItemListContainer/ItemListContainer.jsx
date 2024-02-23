import React from 'react';
import ComponenteA1 from '../ComponentesPrueba/ComponenteA1.jsx';
import { UserProvider } from '../../Context/Context.jsx';

function ItemListContainer() {
  return (
    <UserProvider>
      <ComponenteA1 />
    </UserProvider>
  );
}

export default ItemListContainer;
