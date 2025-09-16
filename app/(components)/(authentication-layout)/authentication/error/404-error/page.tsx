"use client";
import Seo from '@/shared/layouts-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react';

const Error404 = () => {

    return (
        <Fragment>
            <Seo title={"404 Error"} />
            <div className="page error-bg" id="particles-js">
                <div className="error-page">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="error-title">404</h1>
                            <p className="fs-18 fw-semibold mb-4">Oops! The page you are looking for does not exist.</p>
                            <div className="d-flex justify-content-center">
                                <Link href="/components/dashboards/crm/" className="btn btn-primary"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO HOME</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Error404.layout = "Authenticationlayout";

export default Error404;