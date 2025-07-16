function Summary({ count, avgWeight, totalGroups }) {
  return (
    <div className="summary">
      <p>🐶 Breeds shown: {count}</p>
      <p>⚖️ Avg weight: {avgWeight} kg</p>
      <p>📊 Groups: {totalGroups}</p>
    </div>
  );
}

export default Summary;
