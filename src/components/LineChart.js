import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  for(let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price)
    coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
  }

  // console.log(coinTimeStamp)

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }

  const options = {
    scales: {
      y: 
        {
          ticks: {
            beginAtZero: true
          }
        }
      
    }
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-Typography">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: ${currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
