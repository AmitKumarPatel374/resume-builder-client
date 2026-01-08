import React from "react"

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="size-12 rounded-full border-4 border-slate-300 border-t-green-600 animate-spin"></div>
      <p className="text-sm text-slate-500">Loading...</p>
    </div>
  )
}

export default Loader
