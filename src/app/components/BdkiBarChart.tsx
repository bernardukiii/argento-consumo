"use client"

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const soda = {
    brandName: '',
    CRP: 0,
    brandColor: ''
}

interface BdkiBarChartProps {
  data: any[]
}

const colors = ['#ff2800', '#00a65f', '#004B93', 'black']

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

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} style={{ width: '100%', height: '100%' }} >
          <XAxis dataKey="brandName" fontSize={20} fontWeight={800} />
          <Tooltip labelStyle={{ fontSize: '16px', fontWeight: '800' }} wrapperStyle={{ opacity: '60%' }} />
          <Bar dataKey="CRP" fill={`${chartData[0]?.brandColor}`} label={{ position: 'top'}} >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BdkiBarChart
