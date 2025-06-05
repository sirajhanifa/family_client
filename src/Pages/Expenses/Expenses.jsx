import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Button from '../../components/Button1';
import usePost from '../../hooks/usePost';
import useFetch from '../../hooks/useFetch';

const Expenses = () => {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    category: '',
    date: '',
  });

  const { data: postRes, loading, error, postData } = usePost('http://localhost:5000/api/expenses');
  const {
    data: expenses,
    loading: fetchLoading,
    error: fetchError,
    refetch,
  } = useFetch('http://localhost:5000/api/fetchexpenses');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.amount || !form.category || !form.date) {
      alert('Please fill all fields');
      return;
    }

    const result = await postData(form);
    if (result) {
      alert('Expense added!');
      setForm({ name: '', amount: '', category: '', date: '' });
      refetch();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl mb-6 text-center">
        <Heading name="Expense Tracker" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white p-4 rounded-lg shadow border flex flex-wrap gap-4 items-center justify-between"
      >
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Expense Name"
          className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2"
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="flex-1 min-w-[100px] border border-gray-300 rounded px-4 py-2"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="flex-1 min-w-[120px] border border-gray-300 rounded px-4 py-2"
        >
          <option value="" disabled>-- Select --</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Ohters">Ohters</option>
        </select>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2"
        />
        <Button label={loading ? 'Adding...' : 'Add Expense'} type="submit" disabled={loading} />
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {postRes && <p className="text-green-600 mt-4">Expense added successfully!</p>}

      <div className="w-full max-w-5xl mt-6">
        <h2 className="text-xl font-semibold mb-2">Expense List</h2>
        {fetchLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {(!expenses || expenses.length === 0) ? (
                  <tr>
                    <td colSpan={4} className="text-center py-4">No expenses available</td>
                  </tr>
                ) : (
                  expenses.map((expense, index) => {
                    const date = new Date(expense.date);
                    const formattedDate = date.toLocaleDateString();

                    return (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="px-4 py-2 border">{expense.name}</td>
                        <td className="px-4 py-2 border">{expense.amount}</td>
                        <td className="px-4 py-2 border">{expense.category}</td>
                        <td className="px-4 py-2 border">{formattedDate}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
        {fetchError && <p className="text-red-600">{fetchError}</p>}
      </div>
    </div>
  );
};

export default Expenses;
