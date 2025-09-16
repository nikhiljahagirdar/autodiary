"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const Vehicles = () => {
  const [search, setSearch] = useState("");

  const vehiclesData = [
    { id: 1, regNo: "KL-01-A-1234", manufacturer: "Toyota", model: "Camry", vehicleType: "Sedan", fuelType: "Petrol", owner: "John Doe", purchaseDate: "2022-03-10", status: "Active" },
    { id: 2, regNo: "MH-12-B-5678", manufacturer: "Honda", model: "Civic", vehicleType: "Sedan", fuelType: "Petrol", owner: "Jane Smith", purchaseDate: "2021-08-20", status: "Active" },
    { id: 3, regNo: "DL-03-C-9101", manufacturer: "Ford", model: "F-150", vehicleType: "Truck", fuelType: "Diesel", owner: "Peter Jones", purchaseDate: "2023-01-15", status: "Inactive" },
  ];

  const breadcrumbs = [
    { name: "Vehicle Data", path: "#!" },
    { name: "Vehicles" }
  ];

  return (
    <PageWrapper title="Vehicles" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Registration No."
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
              { title: "Reg. No" },
              { title: "Manufacturer" },
              { title: "Model" },
              { title: "Vehicle Type" },
              { title: "Fuel Type" },
              { title: "Owner" },
              { title: "Purchase Date" },
              { title: "Status" },
              { title: "Actions" },
            ]}
          >
            {vehiclesData.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.regNo}</td>
                <td>{vehicle.manufacturer}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.vehicleType}</td>
                <td>{vehicle.fuelType}</td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.purchaseDate}</td>
                <td>
                  <span
                    className={`badge ${vehicle.status === "Active"
                        ? "bg-success-transparent"
                        : "bg-danger-transparent"
                      }`}
                  >
                    {vehicle.status}
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

export default Vehicles;
