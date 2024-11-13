export interface FarmReading {
  timestamp: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
  location: string;
}

export const historicalData: FarmReading[] = [
  {
    timestamp: "2024-03-10 08:00:00",
    soilMoisture: 35,
    temperature: 24,
    humidity: 65,
    location: "Field A"
  },
  {
    timestamp: "2024-03-10 12:00:00",
    soilMoisture: 28,
    temperature: 28,
    humidity: 55,
    location: "Field A"
  },
  {
    timestamp: "2024-03-10 16:00:00",
    soilMoisture: 22,
    temperature: 26,
    humidity: 60,
    location: "Field A"
  },
  {
    timestamp: "2024-03-11 08:00:00",
    soilMoisture: 40,
    temperature: 23,
    humidity: 70,
    location: "Field A"
  }
];