"use client"
import { useState } from 'react'
import { Card, Form, Pagination } from 'react-bootstrap'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import PageWrapper from '@/shared/layouts-components/page-wraper/PageWrapper'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'

const FuelTypes = () => {
    const [search, setSearch] = useState('')

    const fuelTypesData = [
        { id: 1, name: 'Petrol', createdDate: '2024-01-15', status: 'Active' },
        { id: 2, name: 'Diesel', createdDate: '2024-01-10', status: 'Active' },
        { id: 3, name: 'Electric', createdDate: '2024-01-08', status: 'Inactive' },
    ]

    const breadcrumbs = [
        { name: "Masters", path: "#!" },
        { name: "Fuel Types" }
    ];

    return (
        <PageWrapper title="Fuel Types" breadcrumbs={breadcrumbs}>
            <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <Form.Control
                    type="search"
                    placeholder="Search Fuel Type"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: '250px' }}
                />
                <SpkButton Buttonvariant="primary">
                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Fuel Type
                </SpkButton>
            </Card.Header>
            <Card.Body className="p-0">
                <div className="table-responsive">
                    <SpkTables tableClass="text-nowrap" header={[{ title: '#' }, { title: 'Name' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Actions' }]}>
                        {fuelTypesData.map((fuel, index) => (
                            <tr key={index}>
                                <td>{fuel.id}</td>
                                <td>{fuel.name}</td>
                                <td>{fuel.createdDate}</td>
                                <td>
                                    <span className={`badge ${fuel.status === 'Active' ? 'bg-success-transparent' : 'bg-danger-transparent'}`}>
                                        {fuel.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <SpkButton Buttonvariant="info-light" Customclass="btn-icon btn-sm me-1"><i className="ti ti-eye"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Customclass="btn-icon btn-sm me-1"><i className="ti ti-edit"></i></SpkButton>
                                        <SpkButton Buttonvariant="danger-light" Customclass="btn-icon btn-sm"><i className="ti ti-trash"></i></SpkButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </SpkTables>
                </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
                <div className="d-flex align-items-center">
                    <div>Showing 1 to 3 of 3 results</div>
                    <div className="ms-auto">
                        <nav aria-label="Page navigation">
                            <Pagination className="mb-0 flex-wrap">
                                <Pagination.Prev disabled>Prev</Pagination.Prev>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Next disabled>Next</Pagination.Next>
                            </Pagination>
                        </nav>
                    </div>
                </div>
            </Card.Footer>
        </PageWrapper>
    )
}

export default FuelTypes