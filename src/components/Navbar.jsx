import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import apiInstance from "../configs/api"
import toast from "react-hot-toast"
import { logout } from "../app/features/authSlice"

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = async () => {
    try {
      await apiInstance.delete("/auth/logout")
      dispatch(logout())
      toast.success("Logged out successfully")
      navigate("/")
    } catch (error) {
      toast.error("Logout failed")
      console.log(error.response?.data || error.message)
    }
  }
  return (
    <div className="shadow bg-white print:hidden">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all ">
        <Link to="/">
          <h2 className="text-xl font-semibold tracking-tight">
            <span className="text-slate-800">resu</span>
            <span className="text-indigo-600 font-bold">Instant</span>
          </h2>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
