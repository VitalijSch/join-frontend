import { useNavigate, NavigateFunction } from "react-router-dom";

export function useNavigation(): { navigateTo: (route: string) => void } {
    const navigate: NavigateFunction = useNavigate();

    return {
        navigateTo: (route: string) => navigate(route),
    };
}