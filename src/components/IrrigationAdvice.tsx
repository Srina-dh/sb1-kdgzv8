import React from 'react';
import { Droplets } from 'lucide-react';
import type { FarmReading } from '../data/farmData';

interface IrrigationAdviceProps {
  currentReading: FarmReading;
}

export function IrrigationAdvice({ currentReading }: IrrigationAdviceProps) {
  const needsIrrigation = currentReading.soilMoisture < 30;
  
  return (
    <div className={`p-6 rounded-lg shadow-lg ${needsIrrigation ? 'bg-red-50' : 'bg-green-50'}`}>
      <div className="flex items-center gap-3">
        <Droplets className={needsIrrigation ? 'text-red-500' : 'text-green-500'} size={24} />
        <h3 className="text-lg font-semibold">Irrigation Status</h3>
      </div>
      <div className="mt-4">
        <p className={`text-xl font-bold ${needsIrrigation ? 'text-red-600' : 'text-green-600'}`}>
          {needsIrrigation ? 'Irrigation Needed' : 'No Irrigation Required'}
        </p>
        <p className="mt-2 text-gray-600">
          Current Soil Moisture: {currentReading.soilMoisture}%
          {needsIrrigation 
            ? ' - Moisture levels are below optimal threshold (30%)'
            : ' - Moisture levels are within optimal range'}
        </p>
      </div>
    </div>
  );
}