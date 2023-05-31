import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"
import { selectUser } from "../redux/user/userSlice"

const Root = () => {
    const is_login = useAppSelector(selectUser)
    const navigate = useNavigate()
    useEffect(() => {
        if (!is_login) {
            navigate("/signin")
          } else {
            navigate("/home")
          }
    }, [is_login])
    
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Root