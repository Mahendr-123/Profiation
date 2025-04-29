import React, { useState } from 'react';
// import FormikFromField from '../../Form/FormikFromField';
import { Col, Form, Row } from 'react-bootstrap';

const Individual = ({ onChange }) => {
  const [formData, setFormData] = useState({
    dob: '',
    sex: '',
    aadhar: '',
    fathers_name: '',
    mothers_name: '',
    spouse_name: '',
    msem: '',
    msme_reg_no:'',
    msme_reg_since:'',
    msme_type:'',
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
    onChange({...formData, [e.target.name]: e.target.value  });
   
  };

  return (
      <>  
          <Row  className='mb-2'>
            <div className="col-md-3">
              <label  className="form-label">DOB</label>
              <input
                type="text"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="email" className="form-label">SEX</label>
              <input
                type="sex"
                className="form-control"
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="aadhar" className="form-label">Aadhar</label>
              <input
                type="aadhar"
                className="form-control"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="fathers_name" className="form-label">Father Name</label>
              <input
                type="text"
                className="form-control"
                id="fathers_name"
                name="fathers_name"
                value={formData.fathers_name}
                onChange={handleChange}
                required
              />
            </div>
          </Row>
          <Row  className='mb-2'>
            <div className="col-md-3">
              <label htmlFor="mothers_name" className="form-label">Mother Name</label>
              <input
                type="text"
                className="form-control"
                id="mothers_name"
                name="mothers_name"
                value={formData.mothers_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="nameofspouse" className="form-label">Name of Spouse</label>
              <input
                type="text"
                className="form-control"
                id="nameofspouse"
                name="nameofspouse"
                value={formData.spouse_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">MSEM Registration</label>
              <select className="form-select" name="msem" value={formData.msem} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col-md-3">
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
            </div>
            </Row>
            <Row  className='mb-2'>
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
             <div className="col-md-3">
                <label className="form-label">Upload MSEM Document</label>
                <input type="file" className={`form-control $ 'is-invalid'}`} name="msemDoc" onChange={handleChange} />
              </div>
             
            )}
        </Row>
      </>
  );
};

export default Individual;
