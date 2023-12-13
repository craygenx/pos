import { useState } from 'react';
import './SelectedCard.css'

export default function SelectedCard() {
  const [expanded, setExpanded] = useState(false);
  const [visiblity, setVisibility] = useState(false);
  const [formData, setFormData] = useState({
    startTime: '',
    endTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access form data from the 'formData' state
    fetch(`https://physio-backend-wgpa.onrender.com/appointments/1`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.status === 200) {
              setFormData({
                startTime: '',
                endTime: '',
              })
              setVisibility(false)
              setExpanded(false)
            } else {
              console.log('error')
              console.log(formData);
            }
          })
          .catch((error) => {
              console.log(error)
              console.log(formData);
          });
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const toggleCard = () => {
    setExpanded(!expanded);
  };
  const toggleVisibility = (e)=>{
    e.stopPropagation();
    setVisibility(!visiblity)
  }
  // const handleInputChange = (e)=>{
  //   e.stopPropagation();
  // }
  // const stopPropagatn = (e)=>{
  //   e.stopPropagation();
  // }

  function formatDate(inputDateStr) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const inputDate = new Date(inputDateStr);
    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
  
    return `${day} ${month} ${year}`;
  }

  function formatTime(inputTimeStr) {
    const [hours, minutes] = inputTimeStr.split(':');
    const inputDate = new Date(0, 0, 0, hours, minutes);
  
    // Use the options for formatting
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = inputDate.toLocaleTimeString(undefined, options);
  
    return formattedTime;
  }

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleCard}>
      <div className="collapsed-content">
      <div className="titleNumber">
        <span className="person-icon">1</span>
        <div className="description">
          item title card
        </div>
      </div>
      <div className="date-time">ksh: 300</div>
      </div>
      <div className="expanded-content">
        <div className="topp">
          <div className="numtitle">
              <div className="number">1</div>
              <div className="title">Item Card title</div>
          </div>
          <div className="pricing">ksh: 300</div>
      </div>
      <div className="bottm">
          <div className="quantityCont">
              <div className="qttyTitle">Quantity</div>
              <input type="text" name="qty" id="qty"/>
          </div>
      </div>
    </div>
    </div>
  );
}