import React from 'react'
import { Bar } from "react-chartjs-2";

export default function BankChart() {
    const data = {
        labels: ["22", "23", "24", "25", "26", "27", "28"],
        datasets: [
            {
                label: "First set",
                data: [1, 2, 4, 8, 20],
                backgroundColor: "#2FC083"
            }
        ]
    };

    const options = {
        responsive: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        borderDash: [3, 3],
                        zeroLineColor: "#2FC083"
                    },
                    categoryPercentage: 0.7,
                    barPercentage: 0.9,
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false,
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };
    return (
        <>
            <div className="content">
                <div className="balances">
                    <h5>Bank Balances</h5>
                    <p>$ 201,142</p>
                </div>
                <div className="month">
                    <span>10%</span>
                    <p>Since Last Month</p>
                </div>
            </div>
            {/* <Bar width="320" height="150" data={data} options={options} /> */}
        </>
    )

}
