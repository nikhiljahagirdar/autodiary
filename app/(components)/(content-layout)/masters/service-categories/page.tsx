"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const ServiceCategories = () => {
  const [search, setSearch] = useState("");

  const serviceCategoriesData = [
    {
      id: 1,
      name: "General Service",
      createdDate: "2024-01-15",
      status: "Active",
    },
    { id: 2, name: "Body Work", createdDate: "2024-01-10", status: "Active" },
    {
      id: 3,
      name: "Engine Repair",
      createdDate: "2024-01-08",
      status: "Inactive",
    },
  ];

  const breadcrumbs = [
    { name: "Masters", path: "#!" },
    { name: "Service Categories" },
  ];

  return (
    <PageWrapper title="Service Categories" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Service Category"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle
              variant="primary-light"
              id="dropdown-basic"
              className="btn-sm px-4"
            >
              <i className="ri-download-2-line align-middle me-1"></i> Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Export as CSV</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Export as Excel</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Export as PDF</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <SpkButton Customclass="btn-sm btn-icon">
            <i className="ri-add-line"></i>
          </SpkButton>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive">
          <SpkTables
            tableClass="text-nowrap"
            header={[
              { title: "#" },
              { title: "Name" },
              { title: "Created Date" },
              { title: "Status" },
              { title: "Actions" },
            ]}
          >
            {serviceCategoriesData.map((category, index) => (
              <tr key={index}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.createdDate}</td>
                <td>
                  <span
                    className={`badge ${
                      category.status === "Active"
                        ? "bg-success-transparent"
                        : "bg-danger-transparent"
                    }`}
                  >
                    {category.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex">
                    <SpkButton
                      Buttonvariant="info-light"
                      Customclass="btn-icon btn-sm me-1"
                    >
                      <i className="ti ti-eye"></i>
                    </SpkButton>
                    <SpkButton
                      Buttonvariant="primary-light"
                      Customclass="btn-icon btn-sm me-1"
                    >
                      <i className="ti ti-edit"></i>
                    </SpkButton>
                    <SpkButton
                      Buttonvariant="danger-light"
                      Customclass="btn-icon btn-sm"
                    >
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

export default ServiceCategories;
