import { useNavigation } from "../../../hooks/useNavigate"

export function useLogout() {
    const { navigateTo } = useNavigation()

    return () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        navigateTo('/auth/login')
    }
}