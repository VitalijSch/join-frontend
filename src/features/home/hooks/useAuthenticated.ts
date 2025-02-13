import { useState, useEffect } from "react"

export function useAuthenticated() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        const ACCESS = localStorage.getItem("access")
        const REFRESH = localStorage.getItem("refresh")

        setIsLoggedIn(!!(ACCESS && REFRESH))
    }, [])

    return isLoggedIn
}