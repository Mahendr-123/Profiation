import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row } from 'react-bootstrap';

const PartnerForm = () => {
  const [partnerCount, setPartnerCount] = useState(0);
  const [partners, setPartners] = useState([]);
  

  const handleAddRows = () => {
    const newPartners = Array.from({ length: partnerCount }, (_, i) => ({
      nameofpartner: "",
      fathername: "",
      mothername:"",
      spousename:"",
      dob:"",
      sex:"",
      Pannumber:"",
      aadharnumber:"",
      dinnumber:"",

      id: i + 1,
    }));
    setPartners(newPartners);
    
  };
  

  const handleChange = (index, field, value) => {
    const updated = [...partners];
    updated[index][field] = value;
    setPartners(updated);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Add Partner Details</h4>
      

      <div className="mb-3 row">
       <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number of partners"
            value={partnerCount}
            onChange={(e) => setPartnerCount(Number(e.target.value))}
          />
        </div>
       <div className="col-md-3">
          <button className="btn btn-primary" onClick={handleAddRows}>
            Add Rows
          </button>
        </div>
      </div>

      {partners.map((partner, index) => (
        <div className="row mb-2" key={partner.id}>
         <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder={`Partner ${index + 1} Name of partner`}
              value={partner.nameofpartner}
              onChange={(e) => handleChange(index, "nameofpartner", e.target.value)}
            />
          </div>
         <div className="col-md-3">
            <input
              type="fathername"
              className="form-control"
              placeholder={`Partner ${index + 1} Father Name`}
              value={partner.fathername}
              onChange={(e) => handleChange(index, "fathername", e.target.value)}
            />
          </div>
         <div className="col-md-3">
            <input
              type="mothername"
              className="form-control"
              placeholder={`Partner ${index + 1} mothername`}
              value={partner.mothername}
              onChange={(e) => handleChange(index, "mothername", e.target.value)}
            />
          </div>
         <div className="col-md-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className={`form-control && 'is-invalid'}`} name="dob"  onChange={handleChange} />
          </div>
          <div className="col-md-3">
              <label className="form-label d-block">Sex</label>
              {['male', 'female', 'other'].map((sex) => (
                <div className="form-check form-check-inline" key={sex}>
                  <input className="form-check-input" type="radio" name="sex" value={sex} checked={sex === sex} onChange={handleChange} />
                  <label className="form-check-label text-capitalize">{sex}</label>
                </div>
              ))}
             
            </div>
         <div className="col-md-3">
            <input
              type="Pannumber"
              className="form-control"
              placeholder={`Partner ${index + 1} Pan Number`}
              value={partner.Pannumber}
              onChange={(e) => handleChange(index, "Pannumber", e.target.value)}
            />
          </div>
         <div className="col-md-3">
            <input
              type="aadharnumber"
              className="form-control"
              placeholder={`Partner ${index + 1} Aadhar Numbeer`}
              value={partner.aadharnumber}
              onChange={(e) => handleChange(index, "aadharnumber", e.target.value)}
            />
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default PartnerForm;
