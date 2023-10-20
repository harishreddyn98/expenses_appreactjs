import React, { useState } from "react";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [createExpenseModalOpen, setCreateExpenseModalOpen] = useState(false);
  const [deleteExpenseModalOpen, setDeleteExpenseModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [viewExpenses, setViewExpenses] = useState(false);

  // State for the new expense form
  const [newExpense, setNewExpense] = useState({
    name: "",
    date: "",
    category: "Health",
    description: "",
    amount: 0,
  });

  // Function to add a new expense
  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      name: "",
      date: "",
      category: "Health",
      description: "",
      amount: 0,
    });
    setCreateExpenseModalOpen(false);
  };

  // Function to delete an expense
  const deleteExpense = () => {
    const updatedExpenses = expenses.filter(
      (expense) => expense !== selectedExpense
    );
    setExpenses(updatedExpenses);
    setDeleteExpenseModalOpen(false);
  };

  return (
    <div className="App">
      {/* Create Expense Button */}
      <button
        className="createexp"
        onClick={() => setCreateExpenseModalOpen(true)}
      >
        Create Expense
      </button>

      {/* View Expenses Button */}
      <button onClick={() => setViewExpenses(!viewExpenses)}>
        {viewExpenses ? "Hide Expenses" : "View Expenses"}
      </button>

      {/* Create Expense Modal */}
      {createExpenseModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setCreateExpenseModalOpen(false)}
            >
              &times;
            </span>
            <h2>Create Expense</h2>
            <form>
              <label htmlFor="expenseName">Name:</label>
              <input
                type="text"
                id="expenseName"
                maxLength="140"
                value={newExpense.name}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, name: e.target.value })
                }
              />
              <label htmlFor="expenseDate">Date of Expense:</label>
              <input
                type="date"
                id="expenseDate"
                value={newExpense.date}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, date: e.target.value })
                }
              />
              <label htmlFor="expenseCategory">Category:</label>
              <select
                id="expenseCategory"
                value={newExpense.category}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, category: e.target.value })
                }
              >
                <option value="Health">Health</option>
                <option value="Electronics">Electronics</option>
                <option value="Travel">Travel</option>
                <option value="Education">Education</option>
                <option value="Books">Books</option>
                <option value="Others">Others</option>
              </select>
              <label htmlFor="expenseDescription">Description:</label>
              <textarea
                id="expenseDescription"
                value={newExpense.description}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, description: e.target.value })
                }
              ></textarea>
              <label htmlFor="expenseAmount">Amount:</label>
              <input
                type="number"
                id="expenseAmount"
                min="0"
                value={newExpense.amount}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, amount: e.target.value })
                }
              />
              <button type="button" onClick={addExpense}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {
        /* Delete Expense Confirmation Modal */
        deleteExpenseModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Confirm Deletion</h2>
              <p>Are you sure you want to delete this expense?</p>
              <button onClick={deleteExpense}>Delete</button>
              <button onClick={() => setDeleteExpenseModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        )
      }

      {
        /* View Expenses Section */
        viewExpenses && (
          <div>
            <h2>View Expenses</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.date}</td>
                    <td>{expense.category}</td>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>
                      <button>Edit</button>
                      <button
                        onClick={() => {
                          setSelectedExpense(expense);
                          setDeleteExpenseModalOpen(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  );
}
