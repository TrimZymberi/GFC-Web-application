import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/dashboard-style.css'
import StatisticsSummary from '../../components/StatisticsSummary';
import StatisticsCharts from '../../components/StatisticsCharts';
import QuickAdd from '../../components/QuickAdd';

function Dashboard() {
    return (
        <div className='container'>
            <StatisticsSummary />
            <StatisticsCharts />
            <QuickAdd />
        </div>
    );
}

export default Dashboard;
