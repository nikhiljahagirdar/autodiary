import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Breadcrumb {
  name: string;
  path?: string;
}

interface PageWrapperProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  children: ReactNode;
}

const PageWrapper = ({ title, breadcrumbs, children }: PageWrapperProps) => {
  return (
    <>
      {/* Start::page-header */}
      <div className="d-md-flex d-block align-items-center justify-content-between gap-2 page-header-breadcrumb gap-2 py-3">
        <div>
          <h1 className="page-title fw-semibold fs-18 mb-0">{title}</h1>
        </div>
       <div>
          <nav className='gap-2'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/dashboards/sales">Home</Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className={`breadcrumb-item ${!crumb.path ? 'active' : ''}`} aria-current={!crumb.path ? 'page' : undefined}>
                {crumb.path ? <Link href={crumb.path}>{crumb.name}</Link> : crumb.name}
              </li>
            ))}
          </ol>
        </nav>
       </div>
      </div>
      {/* End::page-header */}

      <div className="card custom-card">
        {children}
      </div>
    </>
  );
};

export default PageWrapper;