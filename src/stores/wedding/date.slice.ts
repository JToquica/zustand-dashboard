import { StateCreator } from 'zustand';

export interface DateSlice {
    eventDate: number; //string, number o primitivo

    eventYYYYMMDD: () => string;
    eventHHMM: () => string;

    setEventDate: (partialDate:string) => void;
    setEventTime: (partialTime:string) => void;
}

export const createDataSlice: StateCreator<DateSlice> = (set, get) => ({
    eventDate: new Date().getTime(),

    eventYYYYMMDD: () => {
        const date = new Date(get().eventDate);

        return date.toISOString().split("T")[0];
    },
    eventHHMM: () => {
        const date = new Date(get().eventDate);

        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");

        return `${hours}:${minutes}`;
    },
    setEventDate: (partialDate:string) => set((state) => {
        const date = new Date(partialDate);

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate() + 1;

        const newDate = new Date(state.eventDate);
        newDate.setFullYear(year, month, day);

        return {eventDate: newDate.getTime()}
    }),
    setEventTime: (partialTime:string) => set((state) => {
        const hours = parseInt(partialTime.split(":")[0]);
        const minutes = parseInt(partialTime.split(":")[1]);

        const newDate = new Date(state.eventDate);
        newDate.setHours(hours, minutes);

        return {eventDate: newDate.getTime()}
    }),
});