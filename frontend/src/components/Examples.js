import React, { useState } from 'react';
import Modal from './Modal';
import Layout from './Layout';

function Examples() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Examples
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6">
          <button onClick={openModal}>Open Modal</button>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal</p>
      </Modal>
    </Layout>
  );
}

export default Examples;
