import React from 'react';

const Search = ({search, setSearch}: any) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // İlk kelimenin yalnızca ilk harfini büyük yapma
        value = value
            .split(' ') // Boşluklara göre ayır
            .map((word, index) =>
                index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
            )
            .join(' ');
        setSearch(value);
    };

    return (
        <input
            type="text"
            placeholder="Bir tool bul'un..."
            value={search}
            onChange={handleInputChange}
            className="w-[60vw] p-[15px]
             text-white text-[22px]
             bg-gray-700 rounded-[25px]
              focus:outline-none focus:ring-2
              focus:ring-blue-500
              "
        />
    );
};

export default Search;