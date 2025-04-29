import React, { useState } from "react";
import Nameofcompanydir from "./Nameofcompanydir";

const Publiccompanynotintrest = () => {
  const [moaDocs, setMoaDocs] = useState([]);
  const [banks, setBanks] = useState([
    { bankName: "", branchAddress: "", ifscCode: "", accountType: "", accountNo: "" },
  ]);

  const handleBankChange = (index, field, value) => {
    const updatedBanks = [...banks];
    updatedBanks[index][field] = value;
    setBanks(updatedBanks);
  };

  const addMoreBanks = () => {
    setBanks([
      ...banks,
      { bankName: "", branchAddress: "", ifscCode: "", accountType: "", accountNo: "" },
    ]);
  };

  const addMoaDoc = (e) => {
    setMoaDocs([...moaDocs, e.target.files[0]]);
  };

  return (
    <div className="container mt-4">
      <h3>Company Incorporation Form</h3>

      {/* Date of Incorporation */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label className="form-label">Date of Incorporation</label>
          <input type="date" className="form-control" />
        </div>
      </div>

      {/* Registration Numbers */}
      <h5>Registration Numbers</h5>
      {[1, 2, 4].map((num) => (
        <div className="row mb-4" key={num}>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder={`Registration Number ${num}`}
            />
          </div>
          <div className="col-md-4">
            <input
              type="file"
              className="form-control"
              accept=".pdf,.jpg,.png"
            />
          </div>
        </div>
      ))}

      {/* MOA / AOA / Other Legal Docs */}
      <h5>MOA / AOA / Legal Documents</h5>
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="file"
            className="form-control"
            accept=".pdf,.docx"
            onChange={addMoaDoc}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={() => document.getElementById('moaInput').click()}>
            Add More
          </button>
        </div>
      </div>

      {/* Bank Details */}
      <h5>Bank Details</h5>
      {banks.map((bank, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Bank Name"
              value={bank.bankName}
              onChange={(e) => handleBankChange(index, "bankName", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Branch Address"
              value={bank.branchAddress}
              onChange={(e) => handleBankChange(index, "branchAddress", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="IFSC Code"
              value={bank.ifscCode}
              onChange={(e) => handleBankChange(index, "ifscCode", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Account Type"
              value={bank.accountType}
              onChange={(e) => handleBankChange(index, "accountType", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Account No."
              value={bank.accountNo}
              onChange={(e) => handleBankChange(index, "accountNo", e.target.value)}
            />
          </div>
        </div>
      ))}

      {/* Add Bank Button */}
      <div className="row mb-4">
        <div className="col-md-2">
          <button className="btn btn-success" onClick={addMoreBanks}>
            + Add Bank
          </button>
        </div>
        <Nameofcompanydir/>
      </div>
    </div>
  );
};

export default Publiccompanynotintrest;
