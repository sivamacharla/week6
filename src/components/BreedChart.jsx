
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57', '#a4de6c', '#d88884'];

function BreedChart({ dogs }) {
  const groupCount = {};
  const weightData = {};

  dogs.forEach((d) => {
    const group = d.breeds[0].breed_group || 'Unknown';
    const weightStr = d.breeds[0].weight.metric;
    const [minW, maxW] = weightStr.split(' - ').map(Number);
    const avgW = (minW + maxW) / 2;

    groupCount[group] = (groupCount[group] || 0) + 1;

    if (!weightData[group]) {
      weightData[group] = { totalWeight: 0, count: 0 };
    }

    if (!isNaN(avgW)) {
      weightData[group].totalWeight += avgW;
      weightData[group].count += 1;
    }
  });

  const countData = Object.keys(groupCount).map((group) => ({
    name: group,
    count: groupCount[group],
  }));

  const avgWeightData = Object.keys(weightData).map((group) => ({
    name: group,
    avgWeight: parseFloat((weightData[group].totalWeight / weightData[group].count).toFixed(1)),
  }));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '2rem' }}>
      {/* First Chart: Count per Breed Group */}
      <div className="chart">
        <h3 style={{ textAlign: 'center' }}>Breeds per Group</h3>
        <BarChart width={500} height={300} data={countData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* Second Chart: Avg Weight per Breed Group */}
      <div className="chart">
        <h3 style={{ textAlign: 'center' }}>Avg Weight per Group (kg)</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={avgWeightData}
            dataKey="avgWeight"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {avgWeightData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default BreedChart;
