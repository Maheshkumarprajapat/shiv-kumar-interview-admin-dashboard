import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Bank Balances',
        },
    },
};
const labels = ['23', '23', '24', '25', '26', '27', '28'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: '#2FC083',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#2FC083',
        },
    ],
};

export default function BankChart() {
    return (
        <div><Bar options={options} data={data} /></div>
    )
}
