"use client"
"use client"
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Pagination, Dropdown } from 'react-bootstrap'
import Seo from '@/shared/layouts-components/seo/seo'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'

const Vehicles = () => {
    const [search, setSearch] = useState('')

    const vehiclesData = [
        { id: 1, name: 'Vehicle #001', createdDate: '2024-01-15', status: 'Active' },
        { id: 2, name: 'Vehicle #002', createdDate: '2024-01-10', status: 'Active' },
        { id: 3, name: 'Vehicle #003', createdDate: '2024-01-08', status: 'Inactive' },
    ]

    return (
        <Fragment>
            <Seo title="Vehicles" />
            <Pageheader title="Admin" subtitle="Masters" currentpage="Vehicles" activepage="Vehicles" />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1">
                                    <SpkButton Buttonvariant="primary" Customclass="btn me-2">
                                        <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Vehicle
                                    </SpkButton>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control 
                                        className="me-2" 
                                        type="search" 
                                        placeholder="Search Vehicle" 
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <SpkButton Buttonvariant="light" Customclass="btn">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'ID' }, { title: 'Name' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Actions' }]}>
                                    {vehiclesData.map((vehicle, index) => (
                                        <tr key={index}>
                                            <td>{vehicle.id}</td>
                                            <td>{vehicle.name}</td>
                                            <td>{vehicle.createdDate}</td>
                                            <td>
                                                <span className={`badge ${vehicle.status === 'Active' ? 'bg-success-transparent' : 'bg-danger-transparent'}`}>
                                                    {vehicle.status}
                                                </span>
                                            </td>
                                            <td>
                                                <SpkDropdown toggleas="a" Icon={true} Navigate="#!" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" IconClass="fe fe-more-vertical">
                                                    <Dropdown.Item href="#!"><i className="ti ti-eye me-1 d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ti ti-edit me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ti ti-trash me-1 d-inline-block"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>Showing 3 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i></div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-2">
                                        <Pagination className="mb-0 flex-wrap">
                                            <Pagination.Prev disabled>Prev</Pagination.Prev>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Next disabled>Next</Pagination.Next>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Vehicles