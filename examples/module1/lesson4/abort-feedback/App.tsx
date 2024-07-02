import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';
const TIMEOUT_ERROR_CODE = 'ECONNABORTED';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [connectingError, setConnectingError] = useState(false);

  const fetchUsers = () => {
    setConnectingError(false);
    axios
      .get<User[]>(API_URL, { timeout: 5000 })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === TIMEOUT_ERROR_CODE) {
          setConnectingError(true);
        }
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {
          connectingError && <div className="flex flex-row items-center">
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
            <button onClick={() => fetchUsers()}
                    className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4">
              Try again
            </button>
          </div>
        }
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
