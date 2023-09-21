import React, { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';

// Functional component for TotalMeeting
const TotalMeeting = () => {
  const [data] = useState([
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };
  console.log("47");
  return (
    <div style={{ width: '70%', marginLeft: "50px", marginTop: "25px" }}>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart width={100} height={80} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#5fb5ee' : '#bbe6ffce'} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* <p className="content">{`Uv of "${data[activeIndex].name}": ${data[activeIndex].uv}`}</p> */}
    </div>
  );
};

export default TotalMeeting;
