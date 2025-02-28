
import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';

const Loading = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="loading w-full h-full fixed top-2/4 left-2/4 flex justify-center items-center">
      <div className="spinner rounded-full w-12 h-12 border-4 border-t-purple-600"></div>
    </div>
  );
};

export default Loading;
