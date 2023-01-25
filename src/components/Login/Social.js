import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase/firebase.config';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="m-10 progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return navigate('/');
  }
  return (
    <div className="flex justify-center px-8 pb-5">
      {error && toast(error?.message)}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full">
        <img
          className="w-12 h-12 rounded-xl p-2"
          src="https://i.ibb.co/dWm0n5h/google.png"
          alt="social login"
        />
      </button>
    </div>
  );
};

export default Social;
