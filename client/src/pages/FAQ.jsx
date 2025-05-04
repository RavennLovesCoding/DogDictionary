import React, { useState } from 'react'

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <p>This text is toggled!</p>}
      </div>
    );
  }

export default FAQ