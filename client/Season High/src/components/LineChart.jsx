import { Line } from 'react-chartjs-2';

export const LineChart = ({ chartData, options }) => {
    return (
      <div className="chart-container" style={{position: "relative", height: "40vh", width: "90vw" }}>
        <Line
          data={chartData}
          options={options}
        />
      </div>
    );
  };