/* eslint-disable react/prop-types */
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

const AppFormValidation = ({ errorMessage, successMessage }) => {
    return (
      <div className="mt-2">
        {errorMessage && (
          <p className="text-red-600 text-sm flex items-center gap-2">
            <XCircleIcon className="w-5 h-5" /> {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-green-600 text-sm flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" /> {successMessage}
          </p>
        )}
      </div>
    );
  };

export default AppFormValidation