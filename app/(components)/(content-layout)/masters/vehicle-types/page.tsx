"use client"

import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'
import React, { Fragment, useState } from 'react'


const VehicleTypes: React.FC = () => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);


  return (
   <div className=''>
     <Fragment  >
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2 bg-light-gray">
        <div>
          <h1 className="fw-medium fs-20 mb-0">Vehicle Types</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="form-group">
           
          </div>
          <div className="btn-list">
            
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="card bg-light-gray">
          <div className="card-body">
            <p>Manage vehicle types content here</p>
          </div>
        </div>
      </div>
    </Fragment>
   </div>
  );
}

export default VehicleTypes;