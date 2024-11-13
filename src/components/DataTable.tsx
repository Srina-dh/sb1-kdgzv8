import React from 'react';
import { Table } from 'lucide-react';
import type { FarmReading } from '../data/farmData';

interface DataTableProps {
  data: FarmReading[];
}

export function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soil Moisture</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humidity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((reading, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reading.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reading.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reading.soilMoisture}%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reading.temperature}°C</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reading.humidity}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}