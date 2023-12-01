import "./SignUp.css"
import React, { useState } from 'react';
import Sso from "./SSO";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    nationality: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-box">
    <h2>Sign Up</h2>
    <hr className="horizontal-line" />

      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label>
        Date of Birth:
        <input  type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>

      <label>
        Nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </label>

      <label >
        Gender:
        <select className="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      
      <div class="icon-container">
        
        <button className="kkk">
          <Sso  className="dany"/> 
         </button>
        
        
        <button class="submit-button">SignUp</button>
      </div>

    
    </form>

     
        <span></span>
        <span></span>
        <span></span>
        <span></span>
                     
    </div>
        
      
    
  );
};

export default SignUp;
