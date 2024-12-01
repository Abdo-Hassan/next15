import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        defaultValue={query}
        // name here indicate this : http://localhost:3000/?query=test
        name="query"
        placeholder="Search Startups"
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
