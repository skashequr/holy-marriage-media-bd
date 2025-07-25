
'use client';

import { useEffect, useState } from 'react';

export default function AdminUserPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/userBiodata/user-list/verifyuser?page=${page}&limit=${limit}&search=${search}`);
      const json = await res.json();
      setUsers(json.data || []);
      setTotal(json.meta?.total || 0);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  const handleUpdate = async (id, field, value) => {
    try {
      await fetch(`http://localhost:5000/api/v1/userBiodata/${id}/updateRole`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value })
      });
      fetchUsers();
    } catch (err) {
      console.error('Failed to update user');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <input
        type="text"
        placeholder="Search by email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <select
                  value={user.role}
                  onChange={(e) => handleUpdate(user._id, 'role', e.target.value)}
                >
                  <option value="admin">admin</option>
                  <option value="moderator">moderator</option>
                  <option value="user">user</option>
                </select>
              </td>
              <td className="border p-2">
                <select
                  value={user.status}
                  onChange={(e) => handleUpdate(user._id, 'status', e.target.value)}
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="in-progress">in-progress</option>
                </select>
              </td>
              <td className="border p-2">✔️</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="border px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * limit >= total}
          className="border px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

