import { useAppDispatch } from "../redux/hooks"
import { signOut } from "../redux/user/userSlice"

const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div>Dashboard</div>
            <button onClick={()=> dispatch(signOut())}>logout</button>
        </>
    )
}

export default Dashboard