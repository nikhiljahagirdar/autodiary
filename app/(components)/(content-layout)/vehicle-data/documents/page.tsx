"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const VehicleDocuments= () => {
  const [search, setSearch] = useState("");

  const documentsData = [
    { id: 1, user: "John Doe", vehicle: "Toyota Camry", documentType: "Registration", issueDate: "2022-03-10", expiryDate: "2037-03-09", status: "Active" },
    { id: 2, user: "Jane Smith", vehicle: "Honda Civic", documentType: "Insurance", issueDate: "2023-08-20", expiryDate: "2024-08-19", status: "Active" },
    { id: 3, user: "Peter Jones", vehicle: "Ford F-150", documentType: "Pollution Certificate", issueDate: "2024-01-15", expiryDate: "2025-01-14", status: "Expired" },
  ];

  const breadcrumbs = [
    { name: "Vehicle Data", path: "#!" },
    { name: "Vehicle Documents" }
  ];

  return (
    <PageWrapper title="Vehicle Documents" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <Dropdown >
            <Dropdown.Toggle variant="primary-light" id="dropdown-basic" className="btn-sm px-4">
              <i className="ri-download-2-line align-middle me-1"></i> Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Export as CSV</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Export as Excel</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Export as PDF</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <SpkButton Customclass="btn-sm btn-icon"><i className="ri-add-line"></i></SpkButton>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive">
          <SpkTables
            tableClass="text-nowrap"
            header={[
              { title: "ID" },
              { title: "User" },
              { title: "Vehicle" },
              { title: "Document Type" },
              { title: "Issue Date" },
              { title: "Expiry Date" },
              { title: "Status" },
              { title: "Actions" },
            ]}
          >
            {documentsData.map((doc, index) => (
              <tr key={index}>
                <td>{doc.id}</td>
                <td>{doc.user}</td>
                <td>{doc.vehicle}</td>
                <td>{doc.documentType}</td>
                <td>{doc.issueDate}</td>
                <td>{doc.expiryDate}</td>
                <td>
                  <span
                    className={`badge ${doc.status === "Active"
                        ? "bg-success-transparent"
                        : "bg-danger-transparent"
                      }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex">
                    <SpkButton Buttonvariant="info-light" Customclass="btn-icon btn-sm me-1">
                      <i className="ti ti-eye"></i>
                    </SpkButton>
                    <SpkButton Buttonvariant="primary-light" Customclass="btn-icon btn-sm me-1">
                      <i className="ti ti-edit"></i>
                    </SpkButton>
                    <SpkButton Buttonvariant="danger-light" Customclass="btn-icon btn-sm">
                      <i className="ti ti-trash"></i>
                    </SpkButton>
                  </div>
                </td>
              </tr>
            ))}
          </SpkTables>
        </div>
      </Card.Body>
      <Card.Footer className="border-top-0">
        <div className="d-flex align-items-center">
          <div>
            Showing {"1"} to {"3"} of {"3"} results
            <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
          </div>
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

export default VehicleDocuments;
