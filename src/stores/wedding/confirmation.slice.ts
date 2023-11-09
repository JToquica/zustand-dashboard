import { StateCreator } from 'zustand';


export interface confirmationSlice {
    isConfirmed: boolean;

    setIsConfirmed: (value:boolean) => void;
}

export const createConfirmationSlice: StateCreator<confirmationSlice> = (set) => ({
    isConfirmed: false,
    setIsConfirmed: (value:boolean) => set({isConfirmed: value}),
})