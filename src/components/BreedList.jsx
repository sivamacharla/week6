
import BreedCard from './BreedCard';

function BreedList({ dogs }) {
  return (
    <div className="grid">
      {dogs.map((dog) => (
        <BreedCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default BreedList;