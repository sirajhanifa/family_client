import React, { useState } from 'react';
import './ExpenseList'

const Expenses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expense, setExpense] = useState();
  // const [newExpense, setNewExpense] = useState([]);

  // const handleChange = (e) => {
  //   const [name, value] = e.target;
  //   setNewExpense({
  //   })

  // }

  return (
    <div className="p-4">

      <button
        onClick={() => setIsOpen(true)}
        className="border border-customTeal bg-customTeal text-white font-semibold p-2 rounded-md shadow-lg"
      >
        Add Expense
      </button>

      <Expenses />

      {/* Modal */}
      {/* {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

            <label className="block mb-2">Name</label>
            <input
              type="text"
              name='name'
              className="border p-2 w-full mb-3 rounded"
              />

            <label className="block mb-2">Rupees</label>
            <input type="number" className="border p-2 w-full mb-3 rounded" />

            <label className="block mb-2">Description</label>
            <textarea className="border p-2 w-full mb-3 rounded"></textarea>

            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white p-2 rounded-md w-full"
            >
              Close
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-green-500 text-white p-2 rounded-md w-full"
            >
              Save
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Expenses;
