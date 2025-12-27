const userManagement = create((set) => ({
    profileData: [],

    getData: async () => {
        try {
            const res = await fetch("http://127.0.0.1:2026/user/data", {
                method: "GET",
                headers: { token: userToken },
            })

            const data = await res.json()

            if (!data.ok) return

            set({ profileData: data })
        } catch (error) {
            console.log(error)
        }
    }
}))