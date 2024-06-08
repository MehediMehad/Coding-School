// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PaymentHistory = () => {
//   const [payments, setPayments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchPayments(currentPage);
//   }, [currentPage]);

//   const fetchPayments = async (page) => {
//     try {
//       const response = await axios.get('/employee-list', {
//         params: { page }
//       });
//       setPayments(response.data.payments);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <h1>Employee Payments</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Month</th>
//             <th>Amount</th>
//             <th>Transaction Id</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map(payment => (
//             <tr key={payment.transactionId}>
//               <td>{payment.payMonth}/{payment.payYear}</td>
//               <td>{payment.salary}</td>
//               <td>{payment.transactionId}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             disabled={index + 1 === currentPage}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PaymentHistory;