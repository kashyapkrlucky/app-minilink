/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "../Layout/Modal";

const DeleteItem = ({ deleteFeed, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="p-2 rounded-full transition-colors hover:bg-red-100"
      >
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>

      <Modal title="Confirm Deletion" isOpen={isOpen} onClose={toggleModal}>
        <div className="flex flex-col items-center text-center p-4">
          <TrashIcon className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-gray-600 text-lg">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="border border-gray-300 rounded-md px-5 py-2 text-gray-600 hover:bg-gray-100 transition"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 rounded-md text-white px-6 py-2 hover:bg-red-700 transition"
              onClick={() => {
                deleteFeed(id);
                toggleModal();
              }}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteItem;
