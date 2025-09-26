const { create } = require("zustand");
import { persist } from "zustand/middleware";

const useEmailStore = create(
    persist(
        (set) => ({
            email: '',
            redirect: '',
            setEmail: email => set({ email }),
            setRedirect: redirect=> set({ redirect }),
            clearEmail: () => set({ email: '' }),
            clearRedirect: () => set({ redirect: '' }),
        }),
        {
            name: 'email-storage'
        }
    )
)
export default useEmailStore;