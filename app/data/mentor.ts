import path from 'path';
import fs from 'fs';
import Papa from 'papaparse';

export interface Mentor {
  name: string;
  expertise: string;
  experience: number;
  specialties: string;
  communication_style: string;
  hourly_rate: number;
  availability: string;
}

export function loadMentorsData(): Mentor[] {
  try {
    const csvFilePath = path.join(process.cwd(), 'lib', 'data', 'mentors.csv');
    const csvFile = fs.readFileSync(csvFilePath, 'utf8');
    
    const parsedData = Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true // This helps convert numbers automatically
    });

    return parsedData.data as Mentor[];
  } catch (error) {
    console.error('Error loading mentors data:', error);
    return [];
  }
}