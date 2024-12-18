import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsLineChart = ({ analytics }) => {
  // Data preparation
  const totalExecutionTimeData = analytics.option.totalExecutionTimeData;
  const totalRecordUse = analytics.option.totalRecordUse;

  // Create labels based on totalRecordUse and totalExecutionTimeData
  const labels = Array.from({ length: totalExecutionTimeData }, (_, i) => (i + 1) * 10).filter((label) => label <= totalRecordUse);
  if (totalRecordUse % analytics.option.interval !== 0) {
    labels.push(totalRecordUse);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Linear Iterative Execution Time",
        data: analytics.result.linearIterativeExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Linear Recursive Execution Time",
        data: analytics.result.linearRecursiveExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Binary Iterative Execution Time",
        data: analytics.result.binaryIterativeExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Binary Recursive Execution Time",
        data: analytics.result.binaryRecursiveExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Jump Iterative Execution Time",
        data: analytics.result.jumpIterativeExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Jump Recursive Execution Time",
        data: analytics.result.jumpRecursiveExecutionTime.map((time) => time * 1000), // Convert to ms
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Execution Time Analysis",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsLineChart;
