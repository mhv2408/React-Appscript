import React, { useState } from 'react';
import { Activity, Users, TrendingUp, Bell } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('stats');

  const stats = [
    { label: 'Active Users', value: '1,234', change: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Sales', value: '$5,678', change: '+8%', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Conversion', value: '3.2%', change: '+15%', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  const activities = [
    { text: 'New user signed up', time: '2m ago', type: 'user' },
    { text: 'Sale completed', time: '5m ago', type: 'sale' },
    { text: 'Report generated', time: '12m ago', type: 'report' }
  ];

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500">Live analytics overview</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-100">
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === 'stats'
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Activity className="w-4 h-4 inline mr-1" />
          Stats
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === 'activity'
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Bell className="w-4 h-4 inline mr-1" />
          Activity
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'stats' && (
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className={`p-3 rounded-lg ${stat.bg} border border-gray-100`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-medium">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-semibold ${stat.color}`}>
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      {stat.change}
                    </span>
                    <p className="text-xs text-gray-500">vs last week</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Quick Actions */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'sale' ? 'bg-green-500' : 'bg-purple-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            ))}
            
            <div className="mt-4 pt-3 border-t border-gray-100">
              <button className="w-full text-blue-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors border border-blue-200">
                View All Activity
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Last updated: 2m ago</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}