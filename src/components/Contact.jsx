import React from 'react';

const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <input
        type="text"
        className="p-2 border rounded border-black"
        placeholder="name"
      />
      <input
        type="text"
        className="p-2 mx-3 border rounded border-black"
        placeholder="message"
      />
      <button className="bg-green-300 p-2.5 px-4 rounded cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default Contact;
