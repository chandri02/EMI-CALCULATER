import React, { useState } from 'react';

const Challenge43 = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const principalFloat = parseFloat(principal);
    const interestRateFloat = parseFloat(interestRate);
    const tenureFloat = parseFloat(tenure);

    const rateOfInterest = interestRateFloat / 100 / 12;
    const numberOfPayments = tenureFloat;

    const emi =
      (principalFloat * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    setEmi(emi.toFixed(2));
  };

  return (
    <section className="timeline-landing">
      <div className="row container">
        <h1>EMI CALCULATOR</h1>
      </div>
      <div>
        <label className="heading-text">Loan Amount:</label>
        <input
          type="text" // Change type to "text"
          placeholder="enter your loan amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label className="heading-text">Interest Rate:</label>
        <input
          type="text" // Change type to "text"
          placeholder="enter your loan interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label className="heading-text">Loan Tenure:</label>
        <input
          type="number" // Change type to "text"
          placeholder="enter your loan tenure"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      {emi && <div>EMI: {emi}</div>}
    </section>
  );
};

export default Challenge43;
