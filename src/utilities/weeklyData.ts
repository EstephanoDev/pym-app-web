import { WeeklyData } from "@/models/WeeklyData";

export const findWorkType = (weekly: WeeklyData[], workType: string) => {
    if (!weekly.length) return null;

    const lastWeek = weekly[weekly.length - 1].Semana;

    return weekly
        .filter((item) => item.Semana === lastWeek && item.TipoTrabajo === workType)
        .reduce((sum, item) => sum + item.SumaDelTrabajo, 0);
}

export const findPercentageChange = (weekly: WeeklyData[], workType: string) => {
    if (!weekly.length) return null;

    const lastWeek = weekly[weekly.length - 1].Semana;

    const lastWeekData = weekly.find((item) => item.Semana === lastWeek && item.TipoTrabajo === workType);

    return lastWeekData ? lastWeekData.PorcentajeCambio : null;
}
export const filterByWorkType = (weekly: WeeklyData[], workType: string) => {
    return weekly.filter((item) => item.TipoTrabajo === workType);
}