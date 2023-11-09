import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseURL = "https://zustand-storage-62114-default-rtdb.firebaseio.com/zustand";

export const storageAPI:StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseURL}/${name}.json`).then(res => res.json());
            console.log(data);
            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${firebaseURL}/${name}.json`, {
            method: "PUT",
            body: value
        }).then(res => res.json());

        // console.log(data);

        return;
    },
    removeItem: function (name: string): void | Promise<void> {
        sessionStorage.removeItem(name);
    }
}

export const firebaseStorage =  createJSONStorage(() => storageAPI);