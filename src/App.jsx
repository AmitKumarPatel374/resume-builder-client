import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from "./pages/ResumeBuilder"
import Preview from "./pages/Preview"
import Login from "./pages/Login"
import { useDispatch } from "react-redux"
import apiInstance from "./configs/api"
import { login, setLoading } from "./app/features/authSlice"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"

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
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/view/:resumeId"
          element={<Preview />}
        />

        {/* App layout routes */}
        <Route
          path="/app"
          element={<Layout />}
        >
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path="builder/:resumeId"
            element={<ResumeBuilder />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
