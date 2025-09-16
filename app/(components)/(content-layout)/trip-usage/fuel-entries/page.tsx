"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const FuelEntries = () => {
  const [search, setSearch] = useState("");

  const fuelEntriesData = [
    { id: 1, user: "John Doe", vehicle: "Toyota Camry", fuelType: "Petrol", fuelStation: "Shell", date: "2024-01-15", amount: "50.00", city: "New York" },
    { id: 2, user: "Jane Smith", vehicle: "Honda Civic", fuelType: "Petrol", fuelStation: "BP", date: "2024-01-10", amount: "45.00", city: "Los Angeles" },
    { id: 3, user: "Peter Jones", vehicle: "Ford F-150", fuelType: "Diesel", fuelStation: "Exxon", date: "2024-01-08", amount: "120.00", city: "Chicago" },
  ];

  const breadcrumbs = [
    { name: "Trip & Usage Data", path: "#!" },
    { name: "Fuel Entries" }
  ];

  return (
    <PageWrapper title="Fuel Entries" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Fuel Station"
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
              { title: "Fuel Type" },
              { title: "Fuel Station" },
              { title: "Date" },
              { title: "Amount" },
              { title: "City" },
              { title: "Actions" },
            ]}
          >
            {fuelEntriesData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.id}</td>
                <td>{entry.user}</td>
                <td>{entry.vehicle}</td>
                <td>{entry.fuelType}</td>
                <td>{entry.fuelStation}</td>
                <td>{entry.date}</td>
                <td>${entry.amount}</td>
                <td>{entry.city}</td>
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

export default FuelEntries;
