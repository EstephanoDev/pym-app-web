import { WeeklyData } from '@/models/WeeklyData';
import { MonthlyData } from '@/models/monthlyData';
import { create } from 'zustand';

interface DataState {
  weekly: WeeklyData[];
  monthly: MonthlyData[];
  setWeekly: (weekly: WeeklyData[]) => void; // Definimos la función setUsers
  setMonthly: (monthly: MonthlyData[]) => void; // Definimos la función setUsers
}

// Definir el almacenamiento global de estado
const useDataStore = create<DataState>((set) => ({
  weekly: [],
  monthly: [],
  setWeekly: (weekly) => {
    const simplifiedUsers = weekly
    set({ weekly: simplifiedUsers });
  },
  setMonthly: (data) => {
    const simplyfiedData = data
    set({ monthly: simplyfiedData })
  }
}));

export default useDataStore;