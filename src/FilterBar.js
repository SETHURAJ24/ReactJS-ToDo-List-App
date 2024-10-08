import React from 'react';

const FilterBar = ({ setFilter }) => {
  return (
    <div >
      <button style={{ margin: '10px',padding: '10px 20px'}} onClick={() => setFilter('All')} >All</button>
      <button  style={{ margin: '10px',padding: '10px 20px'}} onClick={() => setFilter('Completed')}>Completed</button>
      <button style={{ margin: '10px',padding: '10px 20px'}} onClick={() => setFilter('Incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterBar;
