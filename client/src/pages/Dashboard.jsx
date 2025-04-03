import React, { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import { Mic, Calendar, TrendingUp, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";
import { AuthContext } from "../context/AuthContext";

// Modern card component with hover effect
const Card = ({ children, className = "", isInteractive = false }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 
    ${isInteractive ? "hover:shadow-md hover:border-pink-100" : ""} ${className}`}>
    {children}
  </div>
);

// Button with better visual feedback
const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center ${className}`} 
    {...props}
  >
    {children}
  </button>
);

// Redesigned progress component
const Progress = ({ value, className = "", color = "bg-pink-500" }) => {
  const safeValue = Math.min(100, Math.max(0, value || 0));
  return (
    <div className={`w-full h-2 bg-gray-100 rounded-full overflow-hidden ${className}`}>
      <div 
        className={`h-full ${color} rounded-full transition-all duration-300`} 
        style={{ width: `${safeValue}%` }} 
      />
    </div>
  );
};

const COLORS = ['#ec4899', '#f472b6', '#fbcfe8', '#f9a8d4'];

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/reports/dashboard-stats', {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
      });
      setDashboardData(response.data.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clean findings function
  const cleanFindings = (text) => {
    if (!text || typeof text !== "string") return "";
    let cleanedText = text.replace(/<think>[\s\S]*?<\/think>/, "").trim();
    const signatureIndex = cleanedText.indexOf("**Signature:**");
    if (signatureIndex !== -1) {
      cleanedText = cleanedText.substring(0, signatureIndex).trim();
    }
    return cleanedText;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-pink-200 mb-4"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-red-500">
        <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-medium">Failed to load data</p>
      </div>
    );
  }

  const latestReport = dashboardData.recentReports?.[dashboardData.recentReports.length - 1] || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-1">Welcome back</p>
            <h1 className="text-2xl font-bold text-gray-800">{user.fullName}</h1>
          </div>

          <Link to="/health">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white shadow-sm">
              Record Voice <Mic className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Latest Analysis Card */}
            {latestReport && (
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h2 className="text-lg font-medium text-gray-800">Latest Voice Analysis</h2>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {latestReport.analysisDate ? moment(latestReport.analysisDate).format('MMMM D, YYYY') : "N/A"}
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium">
                      {latestReport.prediction || "N/A"}
                    </div>
                  </div>

                  {latestReport.findings && (
                    <div className="bg-pink-100 rounded-lg p-4 text-sm">
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          components={{
                            h1: ({node, ...props}) => <h3 className="text-base font-semibold mb-2" {...props} />,
                            h2: ({node, ...props}) => <h4 className="text-base font-semibold mb-2" {...props} />,
                            h3: ({node, ...props}) => <h5 className="text-sm font-semibold mb-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 text-gray-600" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-2" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                            li: ({node, ...props}) => <li className="mb-1" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold" {...props} />
                          }}
                        >
                          {cleanFindings(latestReport.findings)}
                        </ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Weekly Trends Chart */}
            <Card>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-800">Weekly Voice Metrics</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-pink-500 mr-1"></div>
                      <span className="text-xs text-gray-500">Jitter</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-pink-300 mr-1"></div>
                      <span className="text-xs text-gray-500">Shimmer</span>
                    </div>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dashboardData.weeklyData || []}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(date) => moment(date).format('DD MMM')} 
                        stroke="#9ca3af"
                        fontSize={12}
                        tickMargin={10}
                      />
                      <YAxis stroke="#9ca3af" fontSize={12} tickMargin={10} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
                      <Line 
                        type="monotone" 
                        dataKey="jitter" 
                        stroke="#ec4899" 
                        strokeWidth={2}
                        name="Jitter (%)" 
                        dot={{ stroke: '#ec4899', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="shimmer" 
                        stroke="#f9a8d4" 
                        strokeWidth={2}
                        name="Shimmer (%)" 
                        dot={{ stroke: '#f9a8d4', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>

          {/* Right column - 1/3 width */}
          <div className="space-y-6">
            {/* Voice Stability Card */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Voice Stability</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Activity size={16} className="text-pink-500 mr-2" />
                        <span className="text-sm text-gray-700">Jitter</span>
                      </div>
                      <span className="text-sm font-medium">
                        {dashboardData.averages?.avgJitter !== undefined
                          ? dashboardData.averages?.avgJitter.toFixed(2)
                          : "0"}%
                      </span>
                    </div>
                    <Progress 
                      value={dashboardData.averages?.avgJitter 
                        ? Math.min(100, (dashboardData.averages.avgJitter / 3) * 100) 
                        : 0} 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <TrendingUp size={16} className="text-pink-500 mr-2" />
                        <span className="text-sm text-gray-700">Shimmer</span>
                      </div>
                      <span className="text-sm font-medium">
                        {dashboardData.averages?.avgShimmer !== undefined
                          ? dashboardData.averages?.avgShimmer.toFixed(2)
                          : "0"}%
                      </span>
                    </div>
                    <Progress 
                      value={dashboardData.averages?.avgShimmer 
                        ? Math.min(100, (dashboardData.averages.avgShimmer / 100) * 100) 
                        : 0} 
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Exercise Progress */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Exercise Progress</h3>
                <div className="flex items-end justify-between mb-2">
                  <div className="text-3xl font-bold text-pink-500">
                    {dashboardData.exerciseProgress?.completed || 0}
                    <span className="text-gray-400 text-lg font-normal">/{dashboardData.exerciseProgress?.total || 9}</span>
                  </div>
                  <Link to="/exercises" className="text-sm text-pink-500 hover:text-pink-600 flex items-center">
                    All exercises <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mb-3">Exercises completed today</p>
                <Progress 
                  value={(dashboardData.exerciseProgress?.completed / dashboardData.exerciseProgress?.total) * 100} 
                  className="mb-3"
                />
              </div>
            </Card>

            {/* Prediction Distribution */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Prediction Distribution</h3>
                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(dashboardData.predictionDistribution || {}).map(([name, value]) => ({ name, value }))}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {Object.entries(dashboardData.predictionDistribution || {}).map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                            stroke="none"
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value, name) => [value, name]}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                      />
                      <Legend 
                        verticalAlign="bottom" 
                        height={36}
                        iconType="circle"
                        iconSize={8}
                        formatter={(value) => <span className="text-xs text-gray-700">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
