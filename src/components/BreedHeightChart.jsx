import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const parseHeight = (heightStr) => {
  if (!heightStr) return null;
  const match = heightStr.match(/(\d+)\s*-\s*(\d+)/);
  if (match) {
    const min = parseInt(match[1], 10);
    const max = parseInt(match[2], 10);
    return (min + max) / 2;
  } else {
    const single = parseInt(heightStr, 10);
    return isNaN(single) ? null : single;
  }
};

const BreedHeightChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const groupHeights = {};

    data.forEach((breed) => {
      const group = breed.breed_group || "Unknown";
      const height = parseHeight(breed.height?.metric);

      if (height && !isNaN(height)) {
        if (!groupHeights[group]) {
          groupHeights[group] = [];
        }
        groupHeights[group].push(height);
      }
    });

    const heightByGroup = Object.entries(groupHeights).map(([group, heights]) => ({
      group,
      avgHeight: heights.reduce((a, b) => a + b, 0) / heights.length,
    }));

    setChartData(heightByGroup);
  }, [data]);

  return (
    <div>
      <h3>Average Height by Breed Group (in cm)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="group" />
          <YAxis label={{ value: 'cm', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="avgHeight" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreedHeightChart;
