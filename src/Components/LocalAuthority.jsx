import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import PartnerForm from './PartnerForm';
import Registrationact from './Registrationact';

const LocalAuthority = () => {
  const [formData, setFormData] = useState({
    dateofcreation: '',
    numberofregistration1: '',
    numberofregistration2: '',
    numberofregistration3: '',
    numberofregistration4: '',
    bankname: '',
    membersofkarta: '',
    member1 : '',
    msmeregistration: '',
    msme_reg_no:'',
    msme_reg_since:'',
    msme_type:'',
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

    
    if (!formData.dateofcreation) newErrors.dateofcreation = 'Required';
    if (!formData.deedofhufcreation || !emailRegex.test(formData.deedofhufcreation)) newErrors.deedofhufcreation = 'Valid deed required';
    if (!formData.nameofkarta || formData.nameofkarta.length < 6) newErrors.nameofkarta = 'Valid deed required'
    if (!formData.aadharofkarta || formData.aadhar.length !== 12) newErrors.aadhar = '12-digit Aadhaar required';
    if (!formData.bankdetails) newErrors.bankdetails = 'Required';
    if (!formData.bankname) newErrors.bankname = 'Required';
    if (!formData.membersofkarta) newErrors.membersofkarta = 'Required';
    if (!formData.member1) newErrors.member1 = 'Required';
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
    
    <>  
              <Row  className='mb-2'>
              <div className="col-md-3">
              <label className="form-label">Date of creation</label>
              <input type="date" className={`form-control ${errors.dob && 'is-invalid'}`} name="dob" value={formData.dob} onChange={handleChange} />
              <div className="invalid-feedback">{errors.dob}</div>
            </div>
                <div className="col-md-3">
                  <label htmlFor="email" className="form-label">Deed of huf creation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="deedofhufcreation"
                    name="deedofhufcreation"
                    value={formData.deedofhufcreation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="numberofregistration1" className="form-label">Number of Registration1</label>
                  <input
                    type="numberofregistration1"
                    className="form-control"
                    id="numberofregistration1"
                    name="numberofregistration1"
                    value={formData.numberofregistration1}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="numberofregistration2" className="form-label">Number of Registation2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numberofregistration2"
                    name="numberofregistration2"
                    value={formData.numberofregistration2}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Row>
              <PartnerForm/>
              <Row  className='mb-2'>
                <div className="col-md-3">
                  <label htmlFor="bankdetails" className="form-label">Bank Details</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankdetails"
                    name="bankdetails"
                    value={formData.bankdetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor=" bankname" className="form-label">Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id=" bankname"
                    name=" bankname"
                    value={formData.bankname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor=" membersofkarta" className="form-label">Member of karta</label>
                  <input
                    type="text"
                    className="form-control"
                    id=" membersofkarta"
                    name=" membersofkarta"
                    value={formData.membersofkarta}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor=" member1" className="form-label">Member1</label>
                  <input
                    type="text"
                    className="form-control"
                    id=" member1"
                    name=" member1"
                    value={formData.member1}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Row>
              <Row  className='mb-2'>
              <div className="mb-3">
              <label className="form-label">MSEM Registration</label>
              <select className="form-select" name="msem" value={formData.msem} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
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
            {formData.msem === 'yes' && (
              <div className="mb-3">
                <label className="form-label">Upload MSEM Document</label>
                <input type="file" className={`form-control ${errors.msemDoc && 'is-invalid'}`} name="msemDoc" onChange={handleChange} />
                <div className="invalid-feedback">{errors.msemDoc}</div>
              </div>
            )}
            </Row>
           
            <Registrationact/>
          
           
              
          </>
        )}
        
      
    



export default LocalAuthority;
