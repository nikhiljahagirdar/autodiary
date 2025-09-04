"use client"

import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkBreadcrumb from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-breadcrumb'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import React, { Fragment, useState } from 'react'
import { Breadcrumb, Form, Pagination } from 'react-bootstrap'

const VehicleManufacturers: React.FC = () => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
  const [startDate, endDate] = dateRange;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 10;

  const manufacturersData = [
    { id: 1, name: 'Toyota', country: 'Japan', founded: 1937, status: 'Active' },
    { id: 2, name: 'Ford', country: 'USA', founded: 1903, status: 'Active' },
    { id: 3, name: 'BMW', country: 'Germany', founded: 1916, status: 'Active' },
    { id: 4, name: 'Honda', country: 'Japan', founded: 1948, status: 'Active' },
    { id: 5, name: 'Mercedes-Benz', country: 'Germany', founded: 1926, status: 'Active' },
  ];

  const filteredData = manufacturersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField as keyof typeof a];
    const bVal = b[sortField as keyof typeof b];
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedItems(paginatedData.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
      setSelectAll(false);
    }
  };

  return (
    <div className="w-100">

      
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap  w-100 "  >
        <div className='pt-4'>
          <h1 className="page-title fw-medium fs-20 mb-0">Vehicle Manufacturers</h1>
        </div>
        <div className="d-flex align-items-center gap-2  page-title">
          <SpkBreadcrumb Customclass='page-title'>
            <Breadcrumb.Item href="/"><span className="d-flex align-items-center gap-2 flex-wrap page-title">Home</span></Breadcrumb.Item>
            <Breadcrumb.Item href="/masters"><span className="d-flex align-items-center gap-2 flex-wrap page-title">Masters</span></Breadcrumb.Item>
            <Breadcrumb.Item active><span className='d-flex align-items-center gap-2 flex-wrap page-title'>Vehicle Manufacturers</span></Breadcrumb.Item>
          </SpkBreadcrumb>
        </div>
      </div>
     
      <div className="card p-0" style={{backgroundColor: '#f2f6f9'}}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <input
              type="text"
              className='form-control bg-white'
              placeholder="Search manufacturers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
          <div className="d-flex gap-2">
            <select className="form-select" style={{backgroundColor: '#c9c9c9ff', color: 'white', border: '1px solid #4b5563', width: 'auto'}}>
              <option value="">📥 Export</option>
              <option value="csv">📄 Export to CSV</option>
              <option value="excel">📊 Export to Excel</option>
            </select>
            <button className="btn" style={{backgroundColor: '#000000', color: 'white', border: '1px solid #000000'}}>
              <i className="fas fa-plus me-1"></i>Add Manufacturers
            </button>
          </div>
        </div>
          
          <div style={{fontSize: '16px'}}>
          <SpkTables 
            tableClass="table table-hover"
            showCheckbox={false}
            header={[
              { title: '#' },
              { title: <span onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}</span> },
              { title: <span onClick={() => handleSort('country')} style={{cursor: 'pointer'}}>Country {sortField === 'country' && (sortDirection === 'asc' ? '↑' : '↓')}</span> },
              { title: <span onClick={() => handleSort('founded')} style={{cursor: 'pointer'}}>Founded {sortField === 'founded' && (sortDirection === 'asc' ? '↑' : '↓')}</span> },
              { title: 'Status' },
              { title: 'Actions' }
            ]}
          >
            {paginatedData.map((manufacturer) => (
              <tr key={manufacturer.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(manufacturer.id)}
                    onChange={(e) => handleSelectItem(manufacturer.id, e.target.checked)}
                  />
                </td>
                <td>{manufacturer.name}</td>
                <td>{manufacturer.country}</td>
                <td>{manufacturer.founded}</td>
                <td><span className="badge bg-success">{manufacturer.status}</span></td>
                <td>
                  <button 
                    className="btn btn-sm me-1" 
                    style={{backgroundColor: '#9ca3af', border: '1px solid #4b5563', color: 'white', padding: '4px 8px'}}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="btn btn-sm" 
                    style={{backgroundColor: '#fecaca', border: '1px solid #dc2626', color: '#dc2626', padding: '4px 8px'}}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </SpkTables>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} entries</div>
            <Pagination>
              <Pagination.Prev 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item 
                  key={i + 1} 
                  active={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </Pagination>
          </div>
        </div>
      </div>
    
  );
}

export default VehicleManufacturers;