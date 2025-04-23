import React, { useState, useEffect } from 'react';
import './Search.css'


const Search = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:4000${endpoint}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedOption) {
      fetchData(selectedOption);
    }
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="fullcontainer">
    <div className="menu-container">
      <label className="menu-label" htmlFor="dropdown"> <h3>Choose an area to focus on:</h3> </label>
      <select className="menu" id="dropdown" onChange={handleSelectChange}>
        <option className="menu-item" value="">Select...</option>
        <option className="menu-item"value="/api/languages">All</option>
        <option className="menu-item" value="/api/languages/nose">Nose</option>
        <option className="menu-item" value="/api/languages/eye">Eye</option>
        <option className="menu-item" value="/api/languages/mouth">Mouth</option>
        <option className="menu-item" value="/api/languages/tail">Tail</option>
        <option className="menu-item" value="/api/languages/fullbody">Full Body</option>
        <option className="menu-item" value="/api/languages/head">Head</option>
        <option className="menu-item" value="/api/languages/ear">Ear</option>
      </select>

      <div>
        {data.length > 0 ? (
          <div className="fullcard">
            {data.map((item, index) => (
              <div key={index}>
                <div className="card-container">
                  <article className="card">
                    <header>
                      <h2>{item.name}</h2>
                      <h5>{item.body_part}</h5>
                    </header>
                  </article>
                <img className="card-img" src={item.URL} alt={item.alt} />
                <div className="card-content">
                 <p className="card-main-content">{item.meaning}</p>
                 <footer><cite>Image by: {item.credit}</cite></footer>
                </div>
                </div>
                </div>
            ))}
          
          </div>
        ) : (
          <p className="dataAvailable">No data available</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Search;
