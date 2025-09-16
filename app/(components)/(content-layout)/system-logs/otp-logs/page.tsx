"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const OtpLogs = () => {
  const [search, setSearch] = useState("");

  const otpLogsData = [
    { id: 1, phone: "+1-123-456-7890", purpose: "registration", timestamp: "2024-01-15 11:00:00", status: "used" },
    { id: 2, phone: "+1-987-654-3210", purpose: "login", timestamp: "2024-01-15 11:05:00", status: "unused" },
    { id: 3, phone: "+1-555-555-5555", purpose: "reset", timestamp: "2024-01-15 11:10:00", status: "used" },
  ];

  const breadcrumbs = [
    { name: "System & Logs", path: "#!" },
    { name: "OTP Logs" }
  ];

  return (
    <PageWrapper title="OTP Logs" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Phone"
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
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive">
          <SpkTables
            tableClass="text-nowrap"
            header={[
              { title: "ID" },
              { title: "Phone" },
              { title: "Purpose" },
              { title: "Timestamp" },
              { title: "Status" },
              { title: "Actions" },
            ]}
          >
            {otpLogsData.map((log, index) => (
              <tr key={index}>
                <td>{log.id}</td>
                <td>{log.phone}</td>
                <td>{log.purpose}</td>
                <td>{log.timestamp}</td>
                <td>
                  <span
                    className={`badge ${log.status === "used"
                        ? "bg-success-transparent"
                        : "bg-danger-transparent"
                      }`}
                  >
                    {log.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex">
                    <SpkButton Buttonvariant="info-light" Customclass="btn-icon btn-sm me-1">
                      <i className="ti ti-eye"></i>
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

export default OtpLogs;
