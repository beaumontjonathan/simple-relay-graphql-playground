import { useState } from 'react';
import ShipsList from './ShipsList';

export default function Ships({ faction }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <h1>Ships</h1>
      <input
        type="search"
        value={searchTerm}
        placeholder="Filter"
        onChange={({ target }) => {
          setSearchTerm(target.value);
        }}
      />
      <ShipsList faction={faction} searchTerm={searchTerm} />
    </>
  );
}
