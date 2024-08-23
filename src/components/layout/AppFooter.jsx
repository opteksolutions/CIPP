import React from 'react'
import { CFooter, CImage, CLink } from '@coreui/react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMediaPredicate } from 'react-media-hook'

const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-between align-items-center stickyfooter">
      <nav className="footer-nav">
        <Link to="/license">License</Link>
      </nav>
    </CFooter>
  )
}

export default React.memo(AppFooter)
