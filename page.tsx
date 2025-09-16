"use client";
import { useState } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker';

const Vehicles = () => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;

    const tableData = [
        { id: 1, name: 'MH 12 AB 1234', createdDate: '2024-01-15', status: 'Active' },
        { id: 2, name: 'MH 14 CD 5678', createdDate: '2024-01-10', status: 'Active' },
        { id: 3, name: 'MH 01 EF 9012', createdDate: '2024-01-08', status: 'Inactive' },
    ];

    const breadcrumbs = [
        { name: "Vehicle Data", path: "#!" },
        { name: "Vehicles" }
    ];

    return (
        <PageWrapper title="Vehicles" breadcrumbs={breadcrumbs}>
            <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <h5 className="card-title mb-0">Vehicles</h5>
                <SpkButton Buttonvariant="primary">
                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Vehicle
                </SpkButton>
            </Card.Header>
            <Card.Body>
                <div className="p-3 mb-3 border rounded">
                    <h6 className="mb-3">Filters</h6>
                    <Row className="g-3">
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Registration No</Form.Label>
                            <Form.Control type="search" placeholder="Search Registration No" />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Manufacturer</Form.Label>
                            <Form.Select><option value="">All Manufacturers</option></Form.Select>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Model</Form.Label>
                            <Form.Select><option value="">All Models</option></Form.Select>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Vehicle Type</Form.Label>
                            <Form.Select><option value="">All Vehicle Types</option></Form.Select>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Fuel Type</Form.Label>
                            <Form.Select><option value="">All Fuel Types</option></Form.Select>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Owner/User</Form.Label>
                            <Form.Select><option value="">All Users</option></Form.Select>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Form.Label>Purchase Date</Form.Label>
                            <SpkDatepickr className="form-control" placeholderText="Select date range" startDate={startDate} endDate={endDate} selectsRange={true} onChange={(update: any) => setDateRange(update)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-end mt-3">
                            <SpkButton Buttonvariant="primary" className="me-2">Search</SpkButton>
                            <SpkButton Buttonvariant="outline-secondary">Clear</SpkButton>
                        </Col>
                    </Row>
                </div>
                
                <div className="table-responsive">
                    <SpkTables
                        tableClass="text-nowrap"
                        header={[{ title: '#' }, { title: 'Registration No' }, { title: 'Date' }, { title: 'Status' }, { title: 'Actions' }]}
                    >
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.createdDate}</td>
                                <td>
                                    <span className={`badge ${item.status === 'Active' ? 'bg-success-transparent' : 'bg-danger-transparent'}`}>
                                        {item.status}
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
    );
};

export default Vehicles;
