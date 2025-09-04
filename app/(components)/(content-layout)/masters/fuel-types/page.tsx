"use client"

import React, { Fragment } from 'react'

const FuelTypes: React.FC = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Fuel Types</h1>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p>Manage fuel types content here</p>
      </div>
    </Fragment>
  );
}

export default FuelTypes;