import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/dashboard-style.css'
import StatisticsSummary from '../../components/StatisticsSummary';
import StatisticsCharts from '../../components/StatisticsCharts';
import QuickAdd from '../../components/QuickAdd';
import NavbarDashboard from '../../components/NavbarDashboard';

function Dashboard() {
    return (
        <div className=''>
            <NavbarDashboard />
            <StatisticsSummary />
            <StatisticsCharts />
            <QuickAdd />
        </div>
    );
}

export default Dashboard;
