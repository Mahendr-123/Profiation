import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerForm from './PartnerForm';

import { Col, Form, Row } from 'react-bootstrap';


const Llp = () => {
  const [formData, setFormData] = useState({
    dateofcreation: '',
    registrationnumber: '',
    numberofparteners: '',
    confirmPassword: '',
    dob: '',
    sex: '',
    aadhar: '',
    fatherName: '',
    motherName: '',
    spouseName: '',
    msmeregistration: '',
    msme_reg_no:'',
    msme_reg_since:'',
    msme_type:'',
    msem:'',
    msemDoc: null
    
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Min 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    if (!formData.dob) newErrors.dob = 'Required';
    if (!formData.sex) newErrors.sex = 'Required';
    if (!formData.aadhar || formData.aadhar.length !== 12) newErrors.aadhar = '12-digit Aadhaar required';
    if (!formData.fatherName) newErrors.fatherName = 'Required';
    if (!formData.motherName) newErrors.motherName = 'Required';
    if (formData.msem === 'yes' && !formData.msemDoc) newErrors.msemDoc = 'Upload required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      console.log('Form Submitted:', formData);
      // TODO: send to backend or API
    }
  };

  return (
  
    <div className="container mt-5">
      <div className="card p-4 shadow">
        {submitted ? (
          <div className="alert alert-success text-center">Registration Successful!</div>
        ) : (
          <form onSubmit={handleSubmit}>
              <Row  className='mb-2'>
  
            {/* Full Name */}
          
              <div className="col-md-3">
              <label className="form-label">Full Name</label>
              <input type="text" className={`form-control ${errors.fullName && 'is-invalid'}`} name="fullName" value={formData.fullName} onChange={handleChange} />
              <div className="invalid-feedback">{errors.fullName}</div>
            </div>

            

            {/* DOB */}
            <div className="col-md-3">
              
              <label className="form-label">Date of Birth</label>
              <input type="date" className={`form-control ${errors.dob && 'is-invalid'}`} name="dob" value={formData.dob} onChange={handleChange} />
              <div className="invalid-feedback">{errors.dob}</div>
            </div>

            {/* Sex */}
              <div className="col-md-3">
              <label className="form-label d-block">Sex</label>
              {['male', 'female', 'other'].map((sex) => (
                <div className="form-check form-check-inline" key={sex}>
                  <input className="form-check-input" type="radio" name="sex" value={sex} checked={formData.sex === sex} onChange={handleChange} />
                  <label className="form-check-label text-capitalize">{sex}</label>
                </div>
              ))}
              {errors.sex && <div className="text-danger mt-1">{errors.sex}</div>}
            </div>

            {/* Aadhaar */}
              <div className="col-md-3">
              <label className="form-label">Aadhaar Number</label>
              <input type="text" className={`form-control ${errors.aadhar && 'is-invalid'}`} name="aadhar" value={formData.aadhar} onChange={handleChange} />
              <div className="invalid-feedback">{errors.aadhar}</div>
            </div>
</Row>
<Row  className='mb-2'>
            {/* Father's Name */}
              <div className="col-md-3">
              <label className="form-label">Father's Name</label>
              <input type="text" className={`form-control ${errors.fatherName && 'is-invalid'}`} name="fatherName" value={formData.fatherName} onChange={handleChange} />
              <div className="invalid-feedback">{errors.fatherName}</div>
            </div>

            {/* Mother's Name */}
              <div className="col-md-3">
              <label className="form-label">Mother's Name</label>
              <input type="text" className={`form-control ${errors.motherName && 'is-invalid'}`} name="motherName" value={formData.motherName} onChange={handleChange} />
              <div className="invalid-feedback">{errors.motherName}</div>
            </div>

            {/* Spouse Name */}
           <div className="col-md-3">
              <label className="form-label">Name of Spouse</label>
              <input type="text" className="form-control" name="spouseName" value={formData.spouseName} onChange={handleChange} />
            </div>
            <PartnerForm/>
            {/* MSEM Registration */}
            <div className="mb-3">
              <label className="form-label">MSEM Registration</label>
              <select className="form-select" name="msem" value={formData.msem} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            </Row>
            <Row  className='mb-2'>
            {formData.msem === 'yes' && (
             <div className="col-md-3">
                <label className="form-label">MSEM Registration No.</label>
                <input
                type=" msme_reg_no"
                className="form-control"
                id=" msme_reg_no"
                name=" msme_reg_no"
                value={formData. msme_reg_no}
                onChange={handleChange}
                required
              />
              </div>
               )}
                {formData.msem === 'yes' && (
              <div className="col-md-3">
                 <label className="form-label">MSEM Registration Since.</label>
                 <input
                 type=" msme_reg_since"
                 className="form-control"
                 id=" msme_reg_since"
                 name=" msme_reg_since"
                 value={formData. msme_reg_since}
                 onChange={handleChange}
                 required
               />
               </div>
              
             )}
              {formData.msem === 'yes' && (
             <div className="col-md-3">
                <label className="form-label">MSEM Registration Type.</label>
                <input
                type=" msme_type"
                className="form-control"
                id=" msme_type"
                name=" msme_type"
                value={formData. msme_type}
                onChange={handleChange}
                required
              />
              </div>
             
            )}
            {/* MSEM Upload */}
            {formData.msem === 'yes' && (
             <div className="col-md-3">
                <label className="form-label">Upload MSEM Document</label>
                <input type="file" className={`form-control ${errors.msemDoc && 'is-invalid'}`} name="msemDoc" onChange={handleChange} />
                <div className="invalid-feedback">{errors.msemDoc}</div>
              </div>
             
            )}
          
         
            </Row>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          
        )}
      </div>
     
    </div>
   
  );
};

export default Llp;
