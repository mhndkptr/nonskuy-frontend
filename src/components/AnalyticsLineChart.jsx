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

  // Function to calculate median
  const calculateMedian = (data) => {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  // Function to replace outliers with median
  const replaceOutliersWithMedian = (data) => {
    const median = calculateMedian(data);
    const q1 = calculateMedian(data.slice(0, Math.floor(data.length / 2)));
    const q3 = calculateMedian(data.slice(Math.ceil(data.length / 2)));
    const iqr = q3 - q1;
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    return data.map((value) => (value < lowerBound || value > upperBound ? median : value));
  };

  // Process data to replace outliers
  const datasets = [
    {
      label: "Linear Iterative Execution Time",
      data: replaceOutliersWithMedian(analytics.result.linearIterativeExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Linear Recursive Execution Time",
      data: replaceOutliersWithMedian(analytics.result.linearRecursiveExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Binary Iterative Execution Time",
      data: replaceOutliersWithMedian(analytics.result.binaryIterativeExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Binary Recursive Execution Time",
      data: replaceOutliersWithMedian(analytics.result.binaryRecursiveExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Jump Iterative Execution Time",
      data: replaceOutliersWithMedian(analytics.result.jumpIterativeExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Jump Recursive Execution Time",
      data: replaceOutliersWithMedian(analytics.result.jumpRecursiveExecutionTime).map((time) => time * 1000), // Convert to ms
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      fill: true,
      tension: 0.1,
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
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

  return <Line data={data} options={options} />;
};

export default AnalyticsLineChart;
