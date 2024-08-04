import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
// Sample transaction history data
const transactionHistory = [
  {
    date: '2024-01-10',
    amount: '5000',
    method: 'Credit Card',
    status: 'Completed',
    feeType: 'Tuition Fee',
    academicYear: '2023-2024',
  },
  {
    date: '2024-02-15',
    amount: '3000',
    method: 'Debit Card',
    status: 'Pending',
    feeType: 'Residential Charges',
    academicYear: '2023-2024',
  },
  {
    date: '2024-02-15',
    amount: '3000',
    method: 'Debit Card',
    status: 'Pending',
    feeType: 'Residential Charges',
    academicYear: '2023-2024',
  },
  {
    date: '2024-02-15',
    amount: '4310',
    method: 'Debit Card',
    status: 'Completed',
    feeType: 'Residential Services',
    academicYear: '2023-2024',
  },
  // Add more transactions as needed
];

const StudentFmsComponent = () => {
  const [amount, setAmount] = useState('');
  const [currentFee, setCurrentFee] = useState(10000); // Placeholder current fee to pay
  const [transactions, setTransactions] = useState(transactionHistory);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handlePayFee = () => {
    // Handle fee payment logic here
    alert(`Paying fee of ${amount}`);
    // Update transaction history (example)
    setTransactions([
      ...transactions,
      {
        date: new Date().toISOString().split('T')[0],
        amount,
        method: 'Online',
        status: 'Completed',
        feeType: 'Exam Fee',
        academicYear: '2023-2024',
      },
    ]);
    setAmount('');
  };

  const handlePrintReceipt = (transaction) => {
    setSelectedTransaction(transaction);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
     <Breadcrumb className="hidden md:flex px-2 pb-2">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={-1}>Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                Finace
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
    <div className="p-6 space-y-6 relative">
      <h1 className="text-2xl font-bold">Finance Management System</h1>

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold mb-4">Pay Fee Online</h2>
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          <h3 className="text-lg font-medium mb-2">Pending Fee: ₹ {currentFee}</h3>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded-lg bg-white mb-4"
          />
          <Button onClick={handlePayFee} className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Pay Fee Online
          </Button>
        </div>
      </div>

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Method</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Fee Type</th>
              <th className="border px-4 py-2">Academic Year</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">₹ {transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.method}</td>
                <td className="border px-4 py-2">{transaction.status}</td>
                <td className="border px-4 py-2">{transaction.feeType}</td>
                <td className="border px-4 py-2">{transaction.academicYear}</td>
                <td className="border px-4 py-2">
                  <Button onClick={() => handlePrintReceipt(transaction)} className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Print Receipt
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Transaction Receipt"
        className="modal absolute top-56 right-[46rem]"
        overlayClassName="overlay"
      >
        {selectedTransaction && (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Receipt</h2>
            <p><strong>Date:</strong> {selectedTransaction.date}</p>
            <p><strong>Amount:</strong> ₹ {selectedTransaction.amount}</p>
            <p><strong>Method:</strong> {selectedTransaction.method}</p>
            <p><strong>Status:</strong> {selectedTransaction.status}</p>
            <p><strong>Fee Type:</strong> {selectedTransaction.feeType}</p>
            <p><strong>Academic Year:</strong> {selectedTransaction.academicYear}</p>
            <Button onClick={closeModal} className="mt-4">Close</Button>
          </div>
        )}
      </Modal>
    </div>
    </>
  );
};

export default StudentFmsComponent;
