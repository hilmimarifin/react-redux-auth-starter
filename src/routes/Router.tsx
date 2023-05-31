import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { HomePage, NotFoundPage, SigninPage } from "../pages";
import Dashboard from "../pages/Dashboard";


const Router = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage/> } />
			<Route path="/auth/login" element={<SigninPage />} />
			<Route path="/dashboard" element={
				<ProtectedRoute>
					<Dashboard />
				</ProtectedRoute>
			} />			
			<Route path="/*" element={ <NotFoundPage/> } />
		</Routes>
	)
};

export default Router;