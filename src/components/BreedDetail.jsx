
import { useParams, Link } from 'react-router-dom';
import './BreedDetail.css';

function BreedDetail({ dogs }) {
  const { id } = useParams();
  const dog = dogs.find(d => d.id === id);

  if (!dog) return <div className="detail-container">Breed not found.</div>;

  const breed = dog.breeds[0];

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">← Back to Dashboard</Link>
      <div className="detail-card">
        <img src={dog.url} alt={breed.name} className="detail-image" />
        <div className="detail-info">
          <h2>{breed.name}</h2>
          <p><strong>Breed Group:</strong> {breed.breed_group || 'N/A'}</p>
          <p><strong>Life Span:</strong> {breed.life_span}</p>
          <p><strong>Temperament:</strong> {breed.temperament}</p>
          <p><strong>Height:</strong> {breed.height.metric} cm</p>
          <p><strong>Weight:</strong> {breed.weight.metric} kg</p>
        </div>
      </div>
    </div>
  );
}

export default BreedDetail;
