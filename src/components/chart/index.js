import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import "./styles.css";

const MyChart = ({ d = [] }) => {
  const ctx = useRef();

  useEffect(() => {
    if (!d) return;
    ctx.current.getContext("2d");
    var myChart = new Chart(ctx.current, {
      type: "line",
      data: {
        labels: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
        ],
        datasets: [
          {
            label: "Numero de conecciones",
            data: d.reverse(),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    myChart.update();
  }, [d]);

  return (
    <>{d && <canvas ref={ctx} className="my-chart" id="mychart"></canvas>}</>
  );
};

export default MyChart;
