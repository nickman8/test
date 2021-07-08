import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchContacts = () => {
  const a = 1;
  console.log(a);

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl placeholder="search" aria-label="search" />
      </InputGroup>
    </div>
  );
};

export default SearchContacts;
