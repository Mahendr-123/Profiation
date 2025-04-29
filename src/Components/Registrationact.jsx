import React, { useState } from "react";
import { Col, Form, Row } from 'react-bootstrap';

const Registrationact = () => {
  const [isRegistered, setIsRegistered] = useState("");
  const [formData, setFormData] = useState({
    regNo: "",
    dateOfReg: "",
    validFrom: "",
    validTo: "",
    document: null,
  });

  const handleRegistrationChange = (e) => {
    setIsRegistered(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <Row  className='mb-2'>
    <div style={{ marginTop: "20px", padding: "20px", maxWidth: "600px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "10px" }}>
          Registration u/s 12AA of Income Tax Act
        </label>
        <label style={{ marginRight: "15px" }}>
          <input
            type="radio"
            name="registration12AA"
            value="Yes"
            checked={isRegistered === "Yes"}
            onChange={handleRegistrationChange}
            style={{ marginRight: "5px" }}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="registration12AA"
            value="No"
            checked={isRegistered === "No"}
            onChange={handleRegistrationChange}
            style={{ marginRight: "5px" }}
          />
          No
        </label>
      </div>

      {isRegistered === "Yes" && (
        <div style={{ marginTop: "20px" }}>
          {/* REG NO. and DATE OF REG */}
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label style={{ fontWeight: "bold", display: "block" }}>REG NO.</label>
              <input
                type="text"
                name="regNo"
                value={formData.regNo}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: "bold", display: "block" }}>DATE OF REG</label>
              <input
                type="date"
                name="dateOfReg"
                value={formData.dateOfReg}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px" }}
              />
            </div>
          </div>

          {/* VALID FROM / TO */}
          <div style={{ display: "flex", marginBottom: "15px", alignItems: "center" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label style={{ fontWeight: "bold", display: "block" }}>VALID FROM (Tax Year)</label>
              <input
                type="text"
                name="validFrom"
                placeholder="e.g., 2022-2023"
                value={formData.validFrom}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: "bold", display: "block" }}>VALID TO (Tax Year)</label>
              <input
                type="text"
                name="validTo"
                placeholder="e.g., 2026-2027"
                value={formData.validTo}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "5px" }}
              />
            </div>
          </div>

          {/* UPLOAD DOCUMENT */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block" }}>UPLOAD REGISTRATION DOCUMENTS</label>
            <input
              type="file"
              name="document"
              onChange={handleInputChange}
              style={{ display: "block", marginTop: "5px" }}
            />
          </div>
        </div>
      )}
    </div>
    </Row>
  );
};

export default Registrationact;
