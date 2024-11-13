import React, { useState } from 'react';
import { Sprout, Droplets, Thermometer, Calendar, MapPin } from 'lucide-react';
import { IrrigationResult } from './components/IrrigationResult';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    place: '',
    soilMoisture: '',
    cropType: 'Wheat',
    sowingDate: '',
    temperature: '',
    humidity: ''
  });
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 fade-in">
          <div className="flex items-center gap-4">
            <Sprout className="h-10 w-10 text-green-600 animate-pulse" />
            <h1 className="text-4xl font-bold text-gray-800">Intelligent Farming</h1>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80"
            alt="Farm Field"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop&q=80"
              alt="Irrigation System"
              className="rounded-xl shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 fade-in-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter the data</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="input-group">
                <MapPin className="text-green-600" />
                <input
                  type="text"
                  name="place"
                  placeholder="Enter your place"
                  value={formData.place}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <Droplets className="text-blue-600" />
                <input
                  type="number"
                  name="soilMoisture"
                  placeholder="Soil moisture (%)"
                  value={formData.soilMoisture}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <Sprout className="text-green-600" />
                <select
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Rice">Rice</option>
                  <option value="Corn">Corn</option>
                  <option value="Cotton">Cotton</option>
                </select>
              </div>

              <div className="input-group">
                <Calendar className="text-gray-600" />
                <input
                  type="date"
                  name="sowingDate"
                  value={formData.sowingDate}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <Thermometer className="text-red-600" />
                <input
                  type="number"
                  name="temperature"
                  placeholder="Temperature (°C)"
                  value={formData.temperature}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <Droplets className="text-blue-400" />
                <input
                  type="number"
                  name="humidity"
                  placeholder="Humidity (%)"
                  value={formData.humidity}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Analyze
              </button>
            </form>
          </div>
        </div>

        {showResult && (
          <div className="mt-8 fade-in">
            <IrrigationResult formData={formData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;