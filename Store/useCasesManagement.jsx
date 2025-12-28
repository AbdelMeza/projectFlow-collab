import { create } from "zustand";

const useCasesManagement = create((set) => ({
    addClientIsOpen: false,
    createProjectIsOpen: false,
    clientSearched: null,

    openAddClient: () => set((state) => ({ addClientIsOpen: !state.addClientIsOpen })),
    openCreateProject: () => set((state) => ({ createProjectIsOpen: !state.createProjectIsOpen })),

    createProject: async (title) => {
        const userToken = localStorage.getItem("userToken")

        try {
            const res = await fetch("http://127.0.0.1:2026/project/create", {
                method: "POST",
                headers: { token: userToken },
                body: JSON.parse(title),
            })
        } catch (error) {
            console.log(error)
        }
    },

    searchClient: async (search) => {
        const userToken = localStorage.getItem("userToken")

        try {
            const res = await fetch(`http://127.0.0.1:2026/user/search?s=${search}`, {
                method: "GET",
                headers: { token: userToken },
            })

            const data = await res.json()

            if (search === "") {
                set({ clientSearched: null })
                return
            }

            set({ clientSearched: data })
        } catch (error) {
            console.log(error)
        }
    },

    addClient: async (values) => {
        const userToken = localStorage.getItem("userToken")

        try {
            const res = await fetch("http://127.0.0.1:2026/project/add_client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: userToken
                },
                body: JSON.stringify(values),
            })
        } catch (error) {
            console.log(error)
        }
    },
}))

export default useCasesManagement