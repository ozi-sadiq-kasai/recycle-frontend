import './Collection.css';
import { useState } from 'react';
import axios from '../../api.js'

const Collection = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    bottleCount: '',
    pickupDate: '',
    pickupTime: '',
  });

  const [collectionData, setCollectionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

      // Filter out empty/null fields
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== '' && value !== null)
    );


    try {
      const res = await axios.post('/collections', filteredData);
      setSuccessMsg('Pickup scheduled successfully!');
      setFormData({
        userType: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        bottleCount: '',
        pickupDate: '',
        pickupTime: '',
      });
      setCollectionData([...collectionData, res.data]);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='collection'>
      <div className='collection-form-card'>
        <h1>Bottle collection form</h1>
        <form className='collection-form' onSubmit={handleSubmit}>
          <label>
            I'm a:
            <select name="userType" value={formData.userType} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="household">Household</option>
              <option value="company">Company</option>
            </select>
          </label>

          <label htmlFor="name">Name:
            <input
              name='name'
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Fkay"
              required
            />
          </label>

          <label>
            Phone Number:
            <input type="tel" placeholder='0800000' name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="hello@gmail.com" value={formData.email} onChange={handleChange} />
          </label>

          <label>
            Pickup Address:
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </label>

          <label>
            Approximate Number of Plastic Bottles:
            <input type="number" name="bottleCount" value={formData.bottleCount} onChange={handleChange} />
          </label>

          <label>
            Preferred Pickup Date:
            <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
          </label>
          <label>
            Preferred Pickup Time:
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
            />
          </label>

          <div className='collection-form-btn'>
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Schedule Pickup'}
            </button>
          </div>

          {successMsg && <p className="success-msg">{successMsg}</p>}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Collection;
