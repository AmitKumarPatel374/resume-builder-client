import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Toaster } from "react-hot-toast"

import apiInstance from "./configs/api"
import { login, setLoading } from "./app/features/authSlice"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  const dispatch = useDispatch()

  const getUserData = async () => {
    try {
      const { data } = await apiInstance.get("/auth/data")

      if (data.user) {
        dispatch(login({ user: data.user }))
      }
    } catch (error) {
      console.log(error.response?.data || error.message)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App
