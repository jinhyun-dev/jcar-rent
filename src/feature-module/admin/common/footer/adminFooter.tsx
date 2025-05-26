import React from 'react'
import { Link } from 'react-router-dom'

const AdminFooter = () => {
  return (
    <div className="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
  <p className="mb-0">
    <Link to="#">Privacy Policy</Link>
    <Link to="#" className="ms-4">
      Terms of Use
    </Link>
  </p>
  <p>
    © 2025 Dreamsrent, Made with <span className="text-danger">❤</span> by{" "}
    <Link to="#" className="text-secondary">
      Dreams
    </Link>
  </p>
</div>

  )
}

export default AdminFooter