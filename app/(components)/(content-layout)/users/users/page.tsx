"use client"

import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'
import React, { Fragment, useState } from 'react'

const Users: React.FC = () => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
  const [startDate, endDate] = dateRange;

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Users</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="form-group">
            <SpkDatepickr className="form-control datepicker-input" placeholderText="Select date range" startDate={startDate} endDate={endDate} selectsRange={true} onChange={(update: any) => setDateRange(update)} />
          </div>
          <div className="btn-list">
            <SpkButton Buttonvariant='primary' Customclass="btn btn-icon btn-wave"><i className="ri-refresh-line"></i></SpkButton>
            <SpkButton Buttonvariant='primary' Customclass="btn btn-icon btn-wave me-0"><i className="ri-filter-3-line"></i></SpkButton>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p>Manage users content here</p>
      </div>
    </Fragment>
  );
}

export default Users;