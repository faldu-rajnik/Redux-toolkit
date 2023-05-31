import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteUsers } from '../store/slices/UserSlice';
import { deleteUsers } from '../store/actions';

export const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const removeAllUsers = () => {
    console.log('');
    dispatch(deleteUsers());
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => removeAllUsers()}
    >
      Delete All Users
    </button>
  );
};
