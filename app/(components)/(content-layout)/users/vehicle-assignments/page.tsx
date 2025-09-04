"use client"

import React, { Fragment } from 'react'

const VehicleAssignments: React.FC = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Vehicle Assignments</h1>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p>Manage vehicle assignments content here</p>
      </div>
    </Fragment>
  );
}

export default VehicleAssignments;