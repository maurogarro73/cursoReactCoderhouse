import { useContext, useState } from 'react';
import { UserContext } from '../../Context/Context';

const ComponenteA2 = () => {
  const { user, updateName, updateEmail } = useContext(UserContext);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  return (
    <div>
      <h1>Nombre: {user.name}</h1>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nombre" />
      <button className="btn" onClick={() => updateName(newName)}>
        Cambiar Nombre
      </button>
      <br />
      <h1>Email: {user.email}</h1>
      <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Email" />
      <button className="btn" onClick={() => updateEmail(newEmail)}>
        Cambiar Email
      </button>
    </div>
  );
};

export default ComponenteA2;
