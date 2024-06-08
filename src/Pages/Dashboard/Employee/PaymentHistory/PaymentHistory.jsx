import  { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  console.log(payments);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPayments(currentPage);
  }, [currentPage]);

  const fetchPayments = async (page) => {
    try {
      const response = await axios.get('http://localhost:5000/employee-list', {
        params: { page }
      });
      console.log(response);
      setPayments(response.data.payments);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Payments</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Month/Year</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.transactionId}>
              <td className="py-2 px-4 border-b text-center">{payment.name}</td>
              <td className="py-2 px-4 border-b text-center">{payment.payMonth}/{payment.payYear}</td>
              <td className="py-2 px-4 border-b text-center">{payment.salary}</td>
              <td className="py-2 px-4 border-b text-center">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
            className={`px-4 py-2 rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;