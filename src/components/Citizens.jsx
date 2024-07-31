import React, { useState, useEffect } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";
import "./Citizens.css";

export default function Citizens() {
  const initialCitizens = [
    {
      name: "John",
      age: 25,
      address: "Tunghaan, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "Jane",
      age: 30,
      address: "Tungkop, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "Mike",
      age: 45,
      address: "Upper Tunghaan, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "Lisa",
      age: 60,
      address: "Ingga Uyok, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "John",
      age: 35,
      address: "Abuno Hills, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "Jane",
      age: 40,
      address: "Tungkop, Minglanilla, Cebu",
      status: "Active",
    },
    {
      name: "Mike",
      age: 50,
      address: "Tungkop, Minglanilla, Cebu",
      status: "Inactive",
    },
    {
      name: "Lisa",
      age: 55,
      address: "Upper Tunghaan, Minglanilla, Cebu",
      status: "Inactive",
    },
    {
      name: "John",
      age: 70,
      address: "Abuno Hills, Minglanilla, Cebu",
      status: "Inactive",
    },
    {
      name: "Jane",
      age: 20,
      address: "Ingga Uyok, Minglanilla, Cebu",
      status: "Inactive",
    },
  ];

  const [citizens, setCitizens] = useState(initialCitizens);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

  const toggleStatus = (index) => {
    const newCitizens = citizens.map((citizen, i) =>
      i === index
        ? {
            ...citizen,
            status: citizen.status === "Active" ? "Inactive" : "Active",
          }
        : citizen
    );
    setCitizens(newCitizens);
  };

  useEffect(() => {
    const results = citizens.filter((citizen) =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCitizens(results);
  }, [searchQuery, citizens]);

  return (
    <div className="citizens-container">
      <h2>List of Citizens</h2>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </div>
    </div>
  );
}
