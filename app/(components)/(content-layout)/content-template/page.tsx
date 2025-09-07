"use client"

import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";

interface ContentTemplateProps { }

const ContentTemplate: React.FC<ContentTemplateProps> = () => {

    const sampleData = [
        {
            id: "001",
            name: "Sample Item 1",
            status: "Active",
            date: "2024-01-15",
            amount: "$1,250.00"
        },
        {
            id: "002", 
            name: "Sample Item 2",
            status: "Pending",
            date: "2024-01-14",
            amount: "$850.00"
        },
        {
            id: "003",
            name: "Sample Item 3", 
            status: "Completed",
            date: "2024-01-13",
            amount: "$2,100.00"
        }
    ];

    const statusBadgeClass: any = {
        "Active": "bg-success-transparent",
        "Pending": "bg-warning-transparent", 
        "Completed": "bg-info-transparent",
        "Inactive": "bg-light text-default"
    };

    return (
        <Fragment>
            <Seo title="Content Template" />
            
            <Pageheader title="Content" subtitle="Template" currentpage="Content Template" activepage="Content Template" />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-2">
                                    <SpkButton Buttonvariant="primary" Customclass="btn me-2">
                                        <i className="ri-add-line me-1 fw-medium align-middle"></i>Add New
                                    </SpkButton>
                                    <SpkButton Buttonvariant="outline-secondary" Customclass="btn">
                                        <i className="ri-download-line me-1 align-middle"></i>Export
                                    </SpkButton>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control className="me-2" type="search" placeholder="Search..." aria-label="Search" />
                                    <SpkButton Buttonvariant="light" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Content List
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkDropdown 
                                    Id="dropdownMenuButton1" 
                                    Togglevariant="" 
                                    Toggletext="Actions" 
                                    Arrowicon={true} 
                                    IconClass='ri-arrow-down-s-line align-middle ms-1 d-inline-block' 
                                    Customtoggleclass="btn btn-outline-light btn-wave waves-effect waves-light no-caret"
                                >
                                    <li><Dropdown.Item>Edit</Dropdown.Item></li>
                                    <li><Dropdown.Item>Delete</Dropdown.Item></li>
                                    <li><Dropdown.Item>Archive</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables 
                                    tableClass="text-nowrap table-hover" 
                                    showCheckbox={true} 
                                    header={[
                                        { title: 'ID' }, 
                                        { title: 'Name' }, 
                                        { title: 'Status' }, 
                                        { title: 'Date' }, 
                                        { title: 'Amount' }, 
                                        { title: 'Actions' }
                                    ]}
                                >
                                    {sampleData.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input className="form-check-input" type="checkbox" aria-label="..." />
                                            </td>
                                            <td>{item.id}</td>
                                            <td>
                                                <div className="fw-semibold">{item.name}</div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="" Customclass={`${statusBadgeClass[item.status]}`}>
                                                    {item.status}
                                                </SpkBadge>
                                            </td>
                                            <td>{item.date}</td>
                                            <td>{item.amount}</td>
                                            <td>
                                                <SpkDropdown 
                                                    Togglevariant="" 
                                                    Icon={true} 
                                                    Customtoggleclass="btn btn-icon btn-sm btn-light border no-caret" 
                                                    IconClass="fe fe-more-vertical"
                                                >
                                                    <Dropdown.Item as="li" href="#!">
                                                        <i className="ri-eye-line me-2"></i>View
                                                    </Dropdown.Item>
                                                    <Dropdown.Item as="li" href="#!">
                                                        <i className="ri-pencil-line me-2"></i>Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item as="li" href="#!">
                                                        <i className="ri-delete-bin-line me-2"></i>Delete
                                                    </Dropdown.Item>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap">
                                <div>Showing {sampleData.length} Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i></div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-2">
                                        <Pagination className="mb-0 flex-wrap">
                                            <Pagination.Prev disabled>Prev</Pagination.Prev>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Ellipsis />
                                            <Pagination.Item>5</Pagination.Item>
                                            <Pagination.Next className="text-primary">Next</Pagination.Next>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ContentTemplate;