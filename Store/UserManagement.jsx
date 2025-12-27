import { create } from "zustand"

const userManagement = create((set) => ({
    profileData: null,

    getData: async () => {
        const userToken = localStorage.getItem("userToken")

        try {
            const res = await fetch("http://127.0.0.1:2026/user/data", {
                method: "GET",
                headers: { token: userToken },
            })

            const data = await res.json()
            
            if (!data) return

            set({ profileData: data })
        } catch (error) {
            console.log(error)
        }
    }
}))

export default userManagement