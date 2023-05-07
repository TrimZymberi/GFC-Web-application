import React from 'react'
import ChartData from '../data/ChartData';
import { Pie, Line } from 'react-chartjs-2';

export default function StatisticsCharts() {
    return (
        <div className='row g-5'>
            <div className='col-md-6 p-4'>
                <div className='p-2 bg-light shadow-sm d-flex justify-content-around align-items-center rounded' style={{ height: '400px' }}>
                    <div className='col-md-12 p-4'>
                        <Pie data={ChartData.pieData} options={ChartData.pieOptions} />
                    </div>
                </div>
            </div>
            <div className='col-md-5 p-4'>
                <div className='p-2 bg-light shadow-sm d-flex justify-content-around align-items-center rounded' style={{ height: '400px' }}>
                    <div className='col-md-22 p-5'>
                        <Line data={ChartData.lineData} options={ChartData.lineOptions} style={{ width: '100%', height: '300px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
