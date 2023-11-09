import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { PersonSlice, createPersonSlice } from './person.slice';
import { GuestSlice, createGuestSlice } from './guest.slice';
import { DateSlice, createDataSlice } from './date.slice';
import { confirmationSlice, createConfirmationSlice } from './confirmation.slice';

// Crear el store
type SharedState = PersonSlice & GuestSlice & DateSlice & confirmationSlice;

export const useWeddingBoundStore = create<SharedState>()(
    devtools(
        persist(
            (...a) => ({
                ...createPersonSlice(...a),
                ...createGuestSlice(...a),
                ...createDataSlice(...a),
                ...createConfirmationSlice(...a),
            }), {
                name: "wedding-store"
            }
        )
    )
);