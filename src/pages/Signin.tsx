import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUser, signIn } from "../redux/user/userSlice";
import { useEffect } from "react";

const SignInPage = () => {
    const is_login = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (is_login) {
            navigate("/dashboard")
          }
    }, [is_login])

  return (
    <div>SignInPage
        <button onClick={() => dispatch(signIn())}>Sign in</button>
    </div>
  )
}

export default SignInPage