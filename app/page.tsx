"use client"

import SearchBox from "@/components/SearchBox";
import { useState } from 'react';

export default function Home() {

  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    if (query) {
      // Simulate an API request (you can replace this with your real API call)
      const mockResults = [
        `Results  for "${query}"`,
        
      ];
      setResults(mockResults);
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="flex item-center justify-center">Find your deal here</h1>
      <SearchBox onSearch={handleSearch} />
      <div style={{ marginTop: '20px' }}>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          // <p>No results found</p>
          <p></p>
        )}
      </div>
    </div>
    
  );
}
