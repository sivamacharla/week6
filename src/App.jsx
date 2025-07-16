import { useEffect, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Summary from './components/Summary';
import BreedList from './components/BreedList';
import './App.css';

const API_KEY = 'live_4ZqR3i0yYLeR3dXoOU9bvDqBRgu9nPvGpD63Qu7khNUAPJcsm5SVo6FFMxuNamPq';
const API_URL = 'https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=20';

function App() {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState('');
  const [groupFilter, setGroupFilter] = useState('All');

  useEffect(() => {
    async function fetchDogs() {
      const res = await fetch(API_URL, {
        headers: { 'x-api-key': API_KEY }
      });
      const data = await res.json();
      const breedsOnly = data.filter((d) => d.breeds.length > 0);
      setDogs(breedsOnly);
    }
    fetchDogs();
  }, []);

  const breedGroups = Array.from(
    new Set(dogs.map((d) => d.breeds[0].breed_group).filter(Boolean))
  );

  const filteredDogs = dogs
    .filter((d) =>
      d.breeds[0].name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) =>
      groupFilter === 'All' ? true : d.breeds[0].breed_group === groupFilter
    );

  const avgWeight = (
    filteredDogs.reduce((sum, d) => {
      const w = d.breeds[0].weight.metric.split(' - ');
      const avg = (parseInt(w[0]) + parseInt(w[1])) / 2;
      return sum + avg;
    }, 0) / (filteredDogs.length || 1)
  ).toFixed(1);

  return (
    <div className="App">
      <Header />
      <NavBar
        search={search}
        setSearch={setSearch}
        groupFilter={groupFilter}
        setGroupFilter={setGroupFilter}
        breedGroups={breedGroups}
      />
      <Summary count={filteredDogs.length} avgWeight={avgWeight} totalGroups={breedGroups.length} />
      <BreedList dogs={filteredDogs} />
    </div>
  );
}

export default App;
