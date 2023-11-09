import { StateStorage, createJSONStorage } from "zustand/middleware";

export const storageAPI:StateStorage = {
    getItem: function (name: string): string | Promise<string | null> | null {
        const data = sessionStorage.getItem(name);
        return data;
    },
    setItem: function (name: string, value: string): void {
        sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): void | Promise<void> {
        sessionStorage.removeItem(name);
    }
}

export const customSessionStorage =  createJSONStorage(() => storageAPI);