import React from 'react';
import { Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

interface IrrigationResultProps {
  formData: {
    soilMoisture: string;
    temperature: string;
    humidity: string;
  };
}

export function IrrigationResult({ formData }: IrrigationResultProps) {
  const soilMoisture = parseFloat(formData.soilMoisture);
  const needsIrrigation = soilMoisture < 30;

  return (
    <div className={`p-8 rounded-xl shadow-lg ${needsIrrigation ? 'bg-red-50' : 'bg-green-50'} transform transition-all duration-500 hover:scale-[1.02]`}>
      <div className="flex items-center gap-4 mb-4">
        {needsIrrigation ? (
          <AlertTriangle className="h-8 w-8 text-red-500 animate-bounce" />
        ) : (
          <CheckCircle className="h-8 w-8 text-green-500 animate-pulse" />
        )}
        <h2 className="text-2xl font-bold">Irrigation Analysis</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Droplets className="text-blue-500" />
            <span className="text-gray-700">Soil Moisture: {formData.soilMoisture}%</span>
          </div>
          <div className="flex items-center gap-3">
            <Droplets className="text-blue-400" />
            <span className="text-gray-700">Humidity: {formData.humidity}%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className={`text-xl font-bold ${needsIrrigation ? 'text-red-600' : 'text-green-600'} mb-2`}>
            {needsIrrigation ? 'Start Irrigation' : 'Irrigation Not Needed'}
          </h3>
          <p className="text-gray-600">
            {needsIrrigation
              ? 'Soil moisture levels are below optimal threshold. Immediate irrigation is recommended.'
              : 'Soil moisture levels are within the optimal range. Continue monitoring.'}
          </p>
        </div>
      </div>
    </div>
  );
}