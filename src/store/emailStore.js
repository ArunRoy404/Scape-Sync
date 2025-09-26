const { create } = require("zustand");
import { persist } from "zustand/middleware";

const useEmailStore = create(
    persist(
        (set) => ({
            email: '',
            setEmail: email => set({ email }),
            clearEmail: () => set({ email: '' })
        }),
        {
            name: 'email-storage'
        }
    )
)
export default useEmailStore;