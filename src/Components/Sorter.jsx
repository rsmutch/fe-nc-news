import { useState } from 'react';

const Sorter = ({ setSortBy, setSortOrder }) => {
  const [sortOptions] = useState({
    created_at: 'Date',
    comment_count: 'Comments',
    votes: 'Votes'
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'sort-options') {
      setSortBy(value);
    } else {
      setSortOrder(value);
    }
  };

  return (
    <form className="sorter">
      <label htmlFor="sort-options">Sort</label>
      <select name="sort-options" id="sort-options" onChange={handleChange}>
        {Object.entries(sortOptions).map(([optionKey, optionValue]) => {
          return (
            <option key={optionKey} value={optionKey}>
              {optionValue}
            </option>
          );
        })}
      </select>
      <label htmlFor="sort-options-dir">
        Order
        <select
          name="sort-options-dir"
          id="sort-options-dir"
          onChange={handleChange}
        >
          <option value="">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </form>
  );
};

export default Sorter;
