import React from 'react';
import { Line } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      date: '26/09',
      value: 3,
    },
    {
      date: '27/09',
      value: 4,
    },
    {
      date: '28/09',
      value: 3,
    },
    {
      date: '29/09',
      value: 5,
    },
    {
      date: '30/09',
      value: 5,
    },
    {
      date: '01/10',
      value: 6,
    },
    {
      date: '02/10',
      value: 7,
    },
    {
      date: '03/10',
      value: 9,
    },
    {
      date: '04/10',
      value: 13,
    },
  ];
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

export default Chart
