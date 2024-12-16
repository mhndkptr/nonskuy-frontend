import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsChart = ({ analytics }) => {
  // Data preparation
  const labels = ["Linear Iterative", "Linear Recursive", "Binary Iterative", "Binary Recursive", "Jump Iterative", "Jump Recursive"];
  //   const executionTimes = [
  //     analytics.results.linear.iterative.executionTime,
  //     analytics.results.linear.recursive.executionTime,
  //     analytics.results.binary.iterative.executionTime,
  //     analytics.results.binary.recursive.executionTime,
  //     analytics.results.jump.iterative.executionTime,
  //     analytics.results.jump.recursive.executionTime,
  //   ];
  const executionTimes = [
    analytics.results[0].iterative.executionTime * 1000, // Convert to ms
    analytics.results[0].recursive.executionTime * 1000, // Convert to ms
    analytics.results[1].iterative.executionTime * 1000, // Convert to ms
    analytics.results[1].recursive.executionTime * 1000, // Convert to ms
    analytics.results[2].iterative.executionTime * 1000, // Convert to ms
    analytics.results[2].recursive.executionTime * 1000, // Convert to ms
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Execution Time",
        data: executionTimes,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
