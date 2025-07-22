
import { Link } from 'react-router-dom';

function BreedCard({ dog }) {
  const breed = dog.breeds[0];
  return (
    <Link to={`/breed/${dog.id}`} className="card">
      <img src={dog.url} alt={breed.name} />
      <h3>{breed.name}</h3>
      <p>Group: {breed.breed_group || 'Unknown'}</p>
      <p>Weight: {breed.weight.metric} kg</p>
      <p>Life Span: {breed.life_span}</p>
    </Link>
  );
}

export default BreedCard;