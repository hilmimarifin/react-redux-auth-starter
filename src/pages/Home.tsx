import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
  
  return (
    <div>HomePage
        <button onClick={()=> navigate('/auth/login')}>log in</button>
    </div>
  )
}

export default HomePage