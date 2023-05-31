import React from 'react';
import { DeleteAllUsers } from './DeleteAllUsers';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import { DisplayUsers } from './DisplayUsers';

export const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of User Details</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => addNewUser(fakeUserData())}
      >
        Add New User
      </button>
      <ul className="mt-4">
        <DisplayUsers />
      </ul>
      <hr className="my-4" />
      <DeleteAllUsers />
    </div>
  );
};

