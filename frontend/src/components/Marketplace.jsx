import React, { useState, useEffect } from 'react';

const telanganaDistricts = [
  "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon",
  "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar",
  "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar",
  "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool",
  "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli",
  "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet",
  "Vikarabad", "Wanaparthy", "Warangal (Urban)", "Warangal (Rural)", "Yadadri Bhuvanagiri"
];

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
  });

  // Mock data example with Telangana districts
  const allListings = [
    { id: 1, title: 'Fresh Tomatoes', category: 'Vegetables', location: 'Hyderabad' },
    { id: 2, title: 'Organic Rice', category: 'Grains', location: 'Karimnagar' },
    { id: 3, title: 'Sweet Mangoes', category: 'Fruits', location: 'Nalgonda' },
    { id: 4, title: 'Potatoes', category: 'Vegetables', location: 'Sangareddy' },
    { id: 5, title: 'Wheat', category: 'Grains', location: 'Warangal (Urban)' },
  ];

  useEffect(() => {
    let filtered = allListings;

    if (filters.category) {
      filtered = filtered.filter(
        (listing) => listing.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.location) {
      filtered = filtered.filter(
        (listing) => listing.location === filters.location
      );
    }

    setListings(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow-lg">
        Marketplace
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="w-full sm:w-48 px-4 py-3 border border-indigo-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="w-full sm:w-80 px-4 py-3 border border-indigo-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">All Telangana Districts</option>
          {telanganaDistricts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-indigo-600">{listing.title}</h2>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Category:</span> {listing.category}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> {listing.location}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg mt-10">
            No listings found for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
