import { create } from "zustand";

const authentificationManagement = create((set) => ({
    errors: [],
    userData: undefined,

    getUserData: async () => {
        const userToken = localStorage.getItem("userToken")
        if (!userToken) {
            set({ userData: null })
            return
        }
        try {
            const res = await fetch("http://127.0.0.1:2026/auth/data", {
                method: "GET",
                headers: { token: userToken },
            })

            const data = await res.json()

            if (!res.ok) {
                set({ errors: Array.isArray(data) ? data : [data] })
                return false
            }

            set({ userData: data })
        } catch (error) {
            console.log(error)
        }
    },

    validateSignup: async (values) => {
        try {
            const res = await fetch("http://127.0.0.1:2026/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(values),
            })

            const data = await res.json()

            if (!res.ok) {
                set({ errors: Array.isArray(data) ? data : [data] })
                return false
            }

            localStorage.setItem("userToken", data.token)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    },

    validateLogin: async (values) => {
        try {
            const res = await fetch("http://127.0.0.1:2026/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(values),
            })

            const data = await res.json()

            if (!res.ok) {
                set({ errors: Array.isArray(data) ? data : [data] })
                return false
            }

            localStorage.setItem("userToken", data.token)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    },
}))

export default authentificationManagement