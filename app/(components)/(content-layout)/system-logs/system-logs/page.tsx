"use client";
import { useState } from "react";
import { Card, Dropdown, Form, Pagination } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import PageWrapper from "@/shared/layouts-components/page-wraper/PageWrapper";

const SystemLogs = () => {
  const [search, setSearch] = useState("");

  const systemLogsData = [
    { id: 1, level: "INFO", timestamp: "2024-01-15 10:30:00", message: "User JohnDoe logged in successfully." },
    { id: 2, level: "WARNING", timestamp: "2024-01-15 10:35:00", message: "API response time is slow." },
    { id: 3, level: "ERROR", timestamp: "2024-01-15 10:40:00", message: "Database connection failed." },
  ];

  const breadcrumbs = [
    { name: "System & Logs", path: "#!" },
    { name: "System Logs" }
  ];

  return (
    <PageWrapper title="System Logs" breadcrumbs={breadcrumbs}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Message"
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
              { title: "Level" },
              { title: "Timestamp" },
              { title: "Message" },
              { title: "Actions" },
            ]}
          >
            {systemLogsData.map((log, index) => (
              <tr key={index}>
                <td>{log.id}</td>
                <td>
                  <span
                    className={`badge bg-${log.level === "ERROR" ? "danger" : log.level === "WARNING" ? "warning" : log.level === "INFO" ? "info" : "secondary"}-transparent`}
                  >
                    {log.level}
                  </span>
                </td>
                <td>{log.timestamp}</td>
                <td>{log.message}</td>
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

export default SystemLogs;
                  