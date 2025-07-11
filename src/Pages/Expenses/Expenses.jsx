import React, { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import usePost from '../../hooks/usePost';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Expenses = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { username } = useParams();

  const { postData } = usePost();

  const [form, setForm] = useState({
    expense: '',
    amount: '',
    category: '',
    date: ''
  });

  const [totalIncome, setTotalIncome] = useState('');
  const [remainingIncome, setRemainingIncome] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch income
  const fetchIncome = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/getIncome/${username}`);
      setTotalIncome(res.data.total_income);
      setRemainingIncome(res.data.remaining_income);
    } catch (err) {
      console.error('Failed to fetch income:', err);
    }
  };

  // Fetch expenses
  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/expenses/${username}`);
      setExpenses(res.data);
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
    }
  };

  useEffect(() => {
    fetchIncome();
    fetchExpenses();
  }, [username, apiUrl]);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add expense
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const result = await postData(`${apiUrl}/api/newExpense`, {
      ...form,
      username
    });

    if (result && result.expense) {
      await fetchExpenses(); // ✅ Refresh table
      await fetchIncome();   // ✅ Update remaining income
      setForm({ expense: '', amount: '', category: '', date: '' });
    } else {
      alert('Failed to add expense');
    }
    setIsSubmitting(false);
  };

  // Set income
  const handleIncomeSubmit = async (e) => {
    e.preventDefault();
    const result = await postData(`${apiUrl}/api/setIncome`, {
      username,
      totalIncome
    });

    if (result?.income) {
      setIsModalOpen(false);
      await fetchIncome(); // ✅ Refresh income values
      alert('Income set successfully!');
    } else {
      alert('Failed to set income');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Header */}
      <div className="mb-6 text-center">
        <Heading name="Expense Tracker" />
      </div>

      {/* Total Income */}
      <div className="border border-black flex justify-end items-center gap-3 mb-6">
        <label className="font-semibold">Total Income</label>
        <input
          type="number"
          className="min-w-[150px] border font-bold text-lg rounded-lg p-3"
          value={totalIncome}
          disabled
        />
        <label className="font-semibold ml-4">Remaining Income</label>
        <input
          type="number"
          className="min-w-[150px] border border-green-400 font-bold text-lg rounded-lg p-3"
          value={remainingIncome}
          disabled
        />
        <button
          onClick={() => setIsModalOpen(true)}
          disabled={isSubmitting}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Set Income
        </button>
      </div>

      {/* Add Expense Form */}
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-6 overflow-x-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between w-full"
        >
          <input
            type="text"
            name="expense"
            value={form.expense}
            onChange={handleChange}
            placeholder="Expense Name"
            className="flex-1 border rounded-lg p-3"
            required
          />
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="flex-1 border rounded-lg p-3"
            required
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="flex-1 border rounded-lg p-3"
            required
          >
            <option value="">-- Category --</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Bills">Bills</option>
            <option value="Groceries">Groceries</option>
            <option value="Rent">Rent</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="flex-1 border rounded-lg p-3"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {isSubmitting?'Adding...':'Add'}
          </button>
        </form>
      </div>

      {/* Expense Table */}
      {expenses.length > 0 ? (
        <table className="min-w-full border rounded-lg shadow-sm mt-6 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Amount</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{item.amount}</td>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">{item.description}</td>
                <td className="px-4 py-2 border-b">{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-6 text-center">No expenses to display.</p>
      )}

      {/* Modal for Income */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Set Your Total Income
            </h2>
            <form onSubmit={handleIncomeSubmit} className="flex flex-col gap-4">
              <input
                type="number"
                value={totalIncome}
                onChange={(e) => setTotalIncome(e.target.value)}
                placeholder="Enter your income"
                className="border p-3 rounded-lg"
                required
              />
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
