import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/user/userSlice";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const is_login = useAppSelector(selectUser);
	const location = useLocation();

	if (!is_login) {
		return <Navigate to="/auth/login" state={{ from: location }} replace />
	}

	return children;
};

export default ProtectedRoute;