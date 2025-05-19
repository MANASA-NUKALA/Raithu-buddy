import React, { useState } from 'react';

const govtSchemes = [
  {
    name: 'Rythu Bandhu',
    description: 'Financial support to farmers for agriculture inputs.',
    eligibility: 'Landowning farmers in Telangana.',
    benefits: '₹5,000 per acre per season.',
    howToApply: 'Contact local agricultural office or visit the official website.',
    state: 'Telangana',
    tags: ['Financial Assistance', 'Input Subsidy'],
  },
  {
    name: 'PM-KISAN',
    description: 'Income support to all landholding farmer families across the country.',
    eligibility: 'Landholding farmer families.',
    benefits: '₹6,000 per year in three equal installments.',
    howToApply: 'Self-register on the PM-KISAN portal or through Common Service Centers.',
    state: 'Central',
    tags: ['Financial Assistance', 'Income Support'],
  },
  {
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'Crop insurance scheme to provide financial support to farmers suffering crop loss.',
    eligibility: 'Farmers growing notified crops in notified areas.',
    benefits: 'Insurance coverage against yield loss due to natural calamities.',
    howToApply: 'Contact local insurance company or agricultural department.',
    state: 'Central',
    tags: ['Crop Insurance', 'Risk Management'],
  },
  {
    name: 'Mission Kakatiya',
    description: 'Restoration of tanks and water bodies to enhance irrigation.',
    eligibility: 'Farmers in Telangana with land in the command area of the restored tanks.',
    benefits: 'Improved irrigation facilities and increased crop yields.',
    howToApply: 'Benefits are realized through government implementation of the project.',
    state: 'Telangana',
    tags: ['Irrigation', 'Water Management'],
  },
  {
        name: "Rythu Bima",
        description: "Life insurance scheme for farmers.",
        eligibility: "All landowning farmers in the age group of 18 to 59 years in Telangana.",
        benefits: "₹5 lakh insurance amount to the nominee in case of the farmer's death.",
        howToApply: "Enrollment is done by the state government through the concerned departments.",
        state: "Telangana",
        tags: ["Insurance", "Life Insurance", "Farmer Welfare"]
  },
  {
        name: "Soil Health Card Scheme",
        description: "Provides soil health card to farmers with information on nutrient status of their soil and recommended doses of fertilizers.",
        eligibility: "All farmers in India.",
        benefits: "Informed decision making regarding fertilizer use, leading to cost reduction and increased productivity.",
        howToApply: "Collect soil samples and get them tested at designated laboratories.",
        state: "Central",
        tags: ["Soil Health", "Fertilizers", "Information"]
  },
    {
    name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    description: "Aims to improve water access for irrigation.",
    eligibility: "All farmers with cultivable land.",
    benefits: "Increased access to irrigation, improved water use efficiency.",
    howToApply: "Contact the State Agriculture Department or visit the official website.",
    state: "Central",
    tags: ["Irrigation", "Water Management"],
  },
  {
    name: "National Mission for Sustainable Agriculture (NMSA)",
    description: "Promotes sustainable agricultural practices.",
    eligibility: "Farmers adopting sustainable practices.",
    benefits: "Support for organic farming, soil health management, and efficient water use.",
    howToApply: "Contact the State Agriculture Department.",
    state: "Central",
    tags: ["Sustainable Agriculture", "Organic Farming", "Soil Health"],
  },
];

function GovtSchemes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSchemes, setFilteredSchemes] = useState(govtSchemes);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = govtSchemes.filter((scheme) =>
      scheme.name.toLowerCase().includes(query.toLowerCase()) ||
      scheme.description.toLowerCase().includes(query.toLowerCase()) ||
      scheme.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredSchemes(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Government Schemes</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search schemes..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {filteredSchemes.length === 0 && (
        <p className="text-gray-600">No schemes found matching your search.</p>
      )}

      {filteredSchemes.map((scheme) => (
        <div key={scheme.name} className="mb-4 border rounded-md shadow-sm">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-700">{scheme.name}</h3>
             <div className="flex flex-wrap gap-2 mt-2">
              {scheme.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-800 border-green-300 rounded-full px-2 py-1 text-xs font-semibold mr-2">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm"><span className="font-semibold">State:</span> {scheme.state}</p>
          </div>
          <div  className="p-4">
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Description:</span> {scheme.description}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Eligibility:</span> {scheme.eligibility}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Benefits:</span> {scheme.benefits}
            </p>
            <p>
              <span className="font-semibold text-gray-700">How to Apply:</span> {scheme.howToApply}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GovtSchemes;
