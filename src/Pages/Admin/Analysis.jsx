import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "react-chatbot-kit/build/main.css";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [formData, setFormData] = useState(null);
  const [selectedChart, setSelectedChart] = useState("bar");

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("completeFormData"));
    setFormData(storedFormData);
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  const chartTypes = ["bar", "line", "pie", "doughnut"];

  const chartComponents = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
  };

  const ChartComponent = chartComponents[selectedChart];

  const getChartData = (data, labels, title) => ({
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const charts = [
    {
      title: "Constitution",
      data: getChartData(
        Object.values(formData.constitution || {}).map((v) => (v ? 1 : 0)),
        Object.keys(formData.constitution),
        "Constitution"
      ),
    },
    {
      title: "Industry Classification",
      data: getChartData(
        Object.values(formData.industryClassification || {}).map((v) =>
          v ? 1 : 0
        ),
        Object.keys(formData.industryClassification),
        "Industry Classification"
      ),
    },
    {
      title: "Annual Turnover",
      data: getChartData(
        Object.values(formData.annualTurnover || {}).map(
          (v) => parseFloat(v) || 0
        ),
        Object.keys(formData.annualTurnover),
        "Annual Turnover"
      ),
    },
    {
      title: "Employment Details",
      data: getChartData(
        Object.values(formData.employmentDetails || {}).map(
          (v) => parseInt(v) || 0
        ),
        Object.keys(formData.employmentDetails),
        "Employment Details"
      ),
    },
    {
      title: "Market Catering",
      data: getChartData(
        [
          formData.marketCatering.domestic ? 1 : 0,
          formData.marketCatering.global ? 1 : 0,
          formData.marketCatering.both ? 1 : 0,
          parseFloat(formData.marketCatering.percentExports) || 0,
          parseFloat(formData.marketCatering.percentImports) || 0,
        ],
        ["Domestic", "Global", "Both", "% Exports", "% Imports"],
        "Market Catering"
      ),
    },
    {
      title: "Welfare Obligations",
      data: getChartData(
        Object.values(formData.welfareObligations || {}).map(
          (v) => parseFloat(v) || 0
        ),
        Object.keys(formData.welfareObligations || {}),
        "Welfare Obligations"
      ),
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="flex items-center justify-center font-bold text-4xl mb-10">
        Dashboard
      </h1>
      <div className="mb-4">
        <label htmlFor="chartType" className="mr-2">
          Select Chart Type:
        </label>
        <select
          id="chartType"
          value={selectedChart}
          onChange={(e) => setSelectedChart(e.target.value)}
          className="p-2 border rounded"
        >
          {chartTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {charts.map((chart, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">{chart.title}</h3>
            <div className="h-64">
              <ChartComponent data={chart.data} options={chartOptions} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
