import React from 'react'
import { Bar } from "react-chartjs-2";

export default function CreditChart() {
    const data = {
        labels: ["22", "23", "24", "25", "26", "27", "28"],
        datasets: [
            {
                label: "First set",
                data: [1, 2, 4, 8, 20],
                backgroundColor: "#FFD361"
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
                        zeroLineColor: "#FFD361"
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
    return (<>

        <div className="credit-content">
            <div className="cards-balances">
                <h5>Credit Cards Balances</h5>
                <p>$ 5,410</p>
            </div>
            <div className="cards-month">
                <span>2%</span>
                <p>Since Last Month</p>
            </div>
        </div>

        {/* <Bar width="320" height="150" data={data} options={options} /> */}
    </>)

}
