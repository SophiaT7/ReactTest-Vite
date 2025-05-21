import react from "react";

const UserList = ({ users }) => {
  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-2 text-blue-600">Lista de Usuários</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded-lg">
            <span className="font-medium">{user.name}</span> — {user.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
