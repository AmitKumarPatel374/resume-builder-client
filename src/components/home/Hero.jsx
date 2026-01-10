import React, { useState } from "react"
import { useSelector } from "react-redux"
import apiInstance from "../../configs/api"
import { useEffect } from "react"

const Hero = () => {
  const user = useSelector((state) => state.auth.user)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userCount, setUserCount] = useState(0)

  const countUser = async () => {
    try {
      const { data } = await apiInstance.get("/auth/user/count")
      setUserCount(data.userCount)
    } catch (error) {
      console.log(error)
    }
  }

  const formatUserCount = (count) => {
    if (!count || count < 10) return "10+"
    return `${Math.floor(count / 10) * 10}+`
  }

  useEffect(() => {
    countUser()
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
          {/* Logo */}
          <a href="/">
            <h2 className="text-xl font-semibold tracking-tight">
              <span className="text-slate-800">resu</span>
              <span className="text-indigo-600 font-bold">Instant</span>
            </h2>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a
              href="#features"
              className="hover:text-green-600 transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-green-600 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-green-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!user && (
              <>
                <a
                  href="/app?state=login"
                  className="px-5 py-2 border border-slate-300 rounded-full hover:bg-slate-50 transition"
                >
                  Login
                </a>
                <a
                  href="/app?state=register"
                  className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                  Get started
                </a>
              </>
            )}

            {user && (
              <a
                href="/app"
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Dashboard
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h18M4 13h18M4 20h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          href="#features"
          onClick={() => setMenuOpen(false)}
          className="text-white"
        >
          Features
        </a>
        <a
          href="#testimonials"
          onClick={() => setMenuOpen(false)}
          className="text-white"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-white"
        >
          Contact
        </a>

        <button
          onClick={() => setMenuOpen(false)}
          className="px-6 py-2 bg-green-600 text-white rounded-md"
        >
          Close
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block mb-4 text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full">
            Early access
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Build a clean, professional resume
            <span className="text-green-600"> in minutes</span>
          </h1>

          <p className="mt-5 text-slate-600 text-base max-w-xl mx-auto">
            Create, edit, and manage resumes easily. Use AI only where it actually helps.
          </p>

          <div
            className="mt-5 inline-flex items-center gap-2 px-4 py-1.5
  bg-green-50 border border-green-200
  rounded-full text-sm"
          >
            {/* Stars */}
            <div className="flex items-center gap-0.5 text-yellow-400 text-xs">★★★★★</div>

            {/* Text */}
            <span className="text-slate-600">
              Trusted by{" "}
              <span className="font-semibold text-green-700">{formatUserCount(userCount)}</span>{" "}
              users
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/app"
              className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Create resume
            </a>

            <a
              href="#features"
              className="px-8 py-3 border border-slate-300 rounded-full hover:bg-slate-50 transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
