"use client"

import Link from 'next/link';
import React, { Fragment } from 'react'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

  return (
    <Fragment>

      {/* <!-- Footer Start --> */}

      <footer className="footer mt-auto py-3 text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> 2025 </span> <Link scroll={false}
            href="#!;" className="text-dark fw-medium">Autodiary</Link>.
            <span className="fw-medium text-primary"></span>
            Designed with <span className="bi bi-heart-fill text-danger"></span>  All
            rights
            reserved
          </span>
        </div>
      </footer>

      {/* <!-- Footer End --> */}

    </Fragment>
  )
}

export default Footer;