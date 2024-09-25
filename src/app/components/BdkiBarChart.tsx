"use client"

import { BarChart, Bar, Rectangle, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const soda = {
    brandName: '',
    CRP: 0,
}

interface BdkiBarChartProps {
    data: any[]
}

const BdkiBarChart: React.FC<BdkiBarChartProps> = ({ data }) => {
  // Create a fresh chartData array for each render
  // using map solves the issue of undefined array. map creates a new array instead of mutating an existing one as forEach does
  const chartData = data?.map((drink) => {
    const newSoda = Object.create(soda);
    newSoda.brandName = drink?.brand || "";
    newSoda.CRP = drink?.crp || 0;

    if (newSoda.brandName !== "" && newSoda.CRP >= 0) {
      return newSoda
    }
    return null
  }).filter(Boolean) // Remove any null values
  // I'll have to do something similar for the chartconfig.
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} style={{ width: '100%', height: '100%' }} >
          <XAxis dataKey="brandName" />
          <Tooltip />
          <Legend />
          <Bar dataKey="CRP" fill="#8884d8" label={{ position: 'top' }} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BdkiBarChart
