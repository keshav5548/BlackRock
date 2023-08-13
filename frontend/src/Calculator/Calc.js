// import React, { useState } from "react";

// const StudentLoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState("");
//   const [interestRate, setInterestRate] = useState("");
//   const [loanTerm, setLoanTerm] = useState("");
//   const [monthlyPayment, setMonthlyPayment] = useState(0);

//   const calculatePayment = () => {
//     // Basic calculation using the formula for monthly loan payment
//     const monthlyInterestRate = interestRate / 100 / 12;
//     const numberOfPayments = loanTerm * 12;
//     const denominator =
//       (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) /
//       monthlyInterestRate;

//     const payment = (loanAmount * monthlyInterestRate) / denominator;
//     setMonthlyPayment(payment.toFixed(2));
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-lg font-semibold mb-4">Student Loan Calculator</h2>
//       <div className="mb-4">
//         <label htmlFor="loanAmount" className="block font-medium mb-1">
//           Loan Amount ($)
//         </label>
//         <input
//           type="number"
//           id="loanAmount"
//           className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//           value={loanAmount}
//           onChange={(e) => setLoanAmount(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="interestRate" className="block font-medium mb-1">
//           Interest Rate (%)
//         </label>
//         <input
//           type="number"
//           id="interestRate"
//           className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//           value={interestRate}
//           onChange={(e) => setInterestRate(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="loanTerm" className="block font-medium mb-1">
//           Loan Term (years)
//         </label>
//         <input
//           type="number"
//           id="loanTerm"
//           className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//           value={loanTerm}
//           onChange={(e) => setLoanTerm(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={calculatePayment}
//       >
//         Calculate
//       </button>
//       <p className="mt-4">Monthly Payment: ${monthlyPayment}</p>
//     </div>
//   );
// };

// export default StudentLoanCalculator;

import React, { useState } from "react";

const StudentTaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState(0);

  const calculateTax = () => {
    const taxableIncome = Math.max(income - deductions, 0);
    const calculatedTax = (taxableIncome * (taxRate / 100)).toFixed(2);
    setTaxAmount(calculatedTax);
  };

  return (
    <div className="max-w-md mt-5 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Basic Tax Calculator</h2>
      <div className="mb-4">
        <label htmlFor="income" className="block text-sm font-medium mb-1">
          Income ($)
        </label>
        <input
          type="number"
          id="income"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deductions" className="block text-sm font-medium mb-1">
          Deductions ($)
        </label>
        <input
          type="number"
          id="deductions"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="taxRate" className="block text-sm font-medium mb-1">
          Tax Rate (%)
        </label>
        <input
          type="number"
          id="taxRate"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={calculateTax}
      >
        Calculate Tax
      </button>
      <p className="mt-4 text-lg font-semibold">Tax Amount: ${taxAmount}</p>
    </div>
  );
};

export default StudentTaxCalculator;
