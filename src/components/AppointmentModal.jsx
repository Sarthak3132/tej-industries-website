import React, { useState } from 'react';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    time: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const isTimeDisabled = (timeValue) => {
    const today = new Date().toISOString().split('T')[0];
    if (formData.date === today) {
      const currentHour = new Date().getHours();
      const [timeHour] = timeValue.split(':');
      const hour24 = timeValue.includes('PM') && timeHour !== '12' ? 
        parseInt(timeHour) + 12 : 
        (timeValue.includes('AM') && timeHour === '12' ? 0 : parseInt(timeHour));
      return hour24 <= currentHour;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert 12-hour time to 24-hour format
    const convertTo24Hour = (time12h) => {
      const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
      if (hours === '12') {
        hours = '00';
      }
      if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    };
    
    const appointmentData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      date: formData.date,
      time: convertTo24Hour(formData.time)
    };
    
    setIsLoading(true);
    try {
      const response = await fetch('https://tejindustries-backend.onrender.com/api/appointment/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });
      
      if (response.ok) {
        alert(language === 'mr' ? 'अपॉइंटमेंट शेड्यूल झाले आहे आम्ही लवकरच संपर्क करू' : 'Appointment has been scheduled at your requested time we will contact you shortly');
        onClose();
      } else {
        alert(language === 'mr' ? 'अपॉइंटमेंट शेड्यूल करण्यात अयशस्वी. पुन्हा प्रयत्न करा.' : 'Failed to schedule appointment. Please try again.');
      }
    } catch (error) {
      alert(language === 'mr' ? 'अपॉइंटमेंट शेड्यूल करण्यात अयशस्वी. पुन्हा प्रयत्न करा.' : 'Failed to schedule appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{language === 'mr' ? 'कॉल शेड्यूल करा' : 'Schedule a Call'}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            placeholder={language === 'mr' ? 'तुमचे नाव' : 'Your Name'}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={language === 'mr' ? 'तुमचा ईमेल' : 'Your Email'}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder={language === 'mr' ? 'मोबाइल नंबर' : 'Mobile Number'}
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="time-select"
          >
            <option value="">{language === 'mr' ? 'वेळ निवडा' : 'Select Time'}</option>
            <option value="9:00 AM" disabled={isTimeDisabled('9:00 AM')}>9:00 AM</option>
            <option value="9:30 AM" disabled={isTimeDisabled('9:30 AM')}>9:30 AM</option>
            <option value="10:00 AM" disabled={isTimeDisabled('10:00 AM')}>10:00 AM</option>
            <option value="10:30 AM" disabled={isTimeDisabled('10:30 AM')}>10:30 AM</option>
            <option value="11:00 AM" disabled={isTimeDisabled('11:00 AM')}>11:00 AM</option>
            <option value="11:30 AM" disabled={isTimeDisabled('11:30 AM')}>11:30 AM</option>
            <option value="12:00 PM" disabled={isTimeDisabled('12:00 PM')}>12:00 PM</option>
            <option value="12:30 PM" disabled={isTimeDisabled('12:30 PM')}>12:30 PM</option>
            <option value="1:00 PM" disabled={isTimeDisabled('1:00 PM')}>1:00 PM</option>
            <option value="1:30 PM" disabled={isTimeDisabled('1:30 PM')}>1:30 PM</option>
            <option value="2:00 PM" disabled={isTimeDisabled('2:00 PM')}>2:00 PM</option>
            <option value="2:30 PM" disabled={isTimeDisabled('2:30 PM')}>2:30 PM</option>
            <option value="3:00 PM" disabled={isTimeDisabled('3:00 PM')}>3:00 PM</option>
            <option value="3:30 PM" disabled={isTimeDisabled('3:30 PM')}>3:30 PM</option>
            <option value="4:00 PM" disabled={isTimeDisabled('4:00 PM')}>4:00 PM</option>
            <option value="4:30 PM" disabled={isTimeDisabled('4:30 PM')}>4:30 PM</option>
            <option value="5:00 PM" disabled={isTimeDisabled('5:00 PM')}>5:00 PM</option>
            <option value="5:30 PM" disabled={isTimeDisabled('5:30 PM')}>5:30 PM</option>
            <option value="6:00 PM" disabled={isTimeDisabled('6:00 PM')}>6:00 PM</option>
          </select>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? (language === 'mr' ? 'शेड्यूल करतोय...' : 'Scheduling...') : (language === 'mr' ? 'कॉल शेड्यूल करा' : 'Schedule Call')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;