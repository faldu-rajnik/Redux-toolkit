import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice';

export const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <ul className="mt-4">
      {data.map((item, id) => (
        <li key={id} className="flex items-center justify-between py-2">
          <span>{item}</span>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => deleteUser(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
