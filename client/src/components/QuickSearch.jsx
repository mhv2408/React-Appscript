import { useState } from 'react';
import { Search } from 'lucide-react';

// Component 1: Quick Search
export default function QuickSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center mb-2">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <h3 className="text-sm font-medium text-gray-700">Quick Search</h3>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>
      <button className="w-full mt-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
        Search
      </button>
    </div>
  );
}