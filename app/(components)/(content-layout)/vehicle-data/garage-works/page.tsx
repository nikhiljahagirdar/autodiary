"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const GarageWorks = () => {
  const [search, setSearch] = useState("");

  const garageWorksData = [
    { id: 1, user: "John Doe", vehicle: "Toyota Camry", garageName: "City Auto Repair", serviceCategory: "General Maintenance", date: "2024-01-15", amount: "150.00", status: "Completed" },
    { id: 2, user: "Jane Smith", vehicle: "Honda Civic", garageName: "Speedy Lube", serviceCategory: "Oil Change", date: "2024-01-10", amount: "75.50", status: "Completed" },
    { id: 3, user: "Peter Jones", vehicle: "Ford F-150", garageName: "Downtown Garage", serviceCategory: "Brake Repair", date: "2024-01-08", amount: "320.00", status: "Pending" },
  ];

  const breadcrumbs = [
    { name: "Vehicle Data", path: "#!" },
    { name: "Garage Works" }
  ];

  return (
    <PageWrapper title="Garage Works" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Garage Name"
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
              { title: "Garage Name" },
              { title: "Service Category" },
              { title: "Date" },
              { title: "Amount" },
              { title: "Status" },
              { title: "Actions" },
            ]}
          >
            {garageWorksData.map((work, index) => (
              <tr key={index}>
                <td>{work.id}</td>
                <td>{work.user}</td>
                <td>{work.vehicle}</td>
                <td>{work.garageName}</td>
                <td>{work.serviceCategory}</td>
                <td>{work.date}</td>
                <td>${work.amount}</td>
                <td>
                  <span
                    className={`badge ${work.status === "Completed"
                        ? "bg-success-transparent"
                        : "bg-warning-transparent"
                      }`}
                  >
                    {work.status}
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

export default GarageWorks;
