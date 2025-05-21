import react from 'react';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import { fakeUsers } from './data/fakeUsers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setUsers(fakeUsers);
      }, 1000); // simula delay de 1s
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        App com useState, useEffect e Props
      </h1>
      {users.length > 0 ? (
        <UserList users={users} />
      ) : (
        <p className="text-gray-500 text-lg">Carregando usuários...</p>
      )}
    </div>
  );
}

export default App;
