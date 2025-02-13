import { useNavigation } from "../../../hooks/useNavigation"

export function useLogout() {
    const { navigateTo } = useNavigation()

    return () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        navigateTo('/auth/login')
    }
}