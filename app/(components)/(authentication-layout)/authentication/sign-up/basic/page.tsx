"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {

    const [values, setValues] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false
    });

    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors:any = {};

        // First name validation
        if (!values.firstName) {
            newErrors.firstName = "First name is required.";
        }

        // Last name validation
        if (!values.lastName) {
            newErrors.lastName = "Last name is required.";
        }

        // Email validation
        if (!values.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!values.password) {
            newErrors.password = "Password is required.";
        } else if (values.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        // Confirm password validation
        if (!values.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required.";
        } else if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const router = useRouter()
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (validate()) {
            router.push('/dashboards/sales/');
            toast.success('Save Password successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            // Handle form submission logic here
        }
    };


    return (
        <Fragment>

            <Seo title="Signup-Basic" />

            <div className="authentication-basic-background">
                <Image fill src="../../../assets/images/media/backgrounds/9.png" alt="" />
            </div>

            <div className="container">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                        <Card className="custom-card border-0 my-4">
                            <Card.Body className="p-5">
                                <div className="mb-4">
                                    <Link scroll={false} href="/dashboards/sales">
                                        <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="mb-1 fw-semibold">Sign Up</h4>
                                    <p className="mb-4 text-muted fw-normal">Join us by creating a free account !</p>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="signup-firstname" className="text-default">First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="signup-firstname"
                                                placeholder="Enter First Name"
                                                value={values.firstName}
                                                onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                                                isInvalid={!!errors.firstName}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="signup-lastname" className="text-default">Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="signup-lastname"
                                                placeholder="Enter Last Name"
                                                value={values.lastName}
                                                onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                                                isInvalid={!!errors.lastName}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-email" className="text-default">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                className="form-control"
                                                id="signup-email"
                                                placeholder="Enter Email ID"
                                                value={values.email}
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-password" className="text-default d-block">Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={values.showPassword ? "text" : "password"}
                                                    className="form-control"
                                                    id="signup-password"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Link scroll={false} href="#!" className="show-password-button text-muted"
                                                    onClick={() => setValues((prev:any) => ({ ...prev, showPassword: !prev.showPassword }))}>
                                                    {values.showPassword ? (
                                                        <i className="ri-eye-line align-middle"></i>
                                                    ) : (
                                                        <i className="ri-eye-off-line align-middle"></i>
                                                    )}
                                                </Link>
                                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="signup-confirmpassword" className="text-default d-block">Confirm Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={values.showConfirmPassword ? "text" : "password"}
                                                    className="form-control"
                                                    id="signup-confirmpassword"
                                                    placeholder="Confirm Password"
                                                    value={values.confirmPassword}
                                                    onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                                                    isInvalid={!!errors.confirmPassword}
                                                />
                                                <Link scroll={false} href="#!" className="show-password-button text-muted"
                                                    onClick={() => setValues((prev:any) => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword }))}>
                                                    {values.showConfirmPassword ? (
                                                        <i className="ri-eye-line align-middle"></i>
                                                    ) : (
                                                        <i className="ri-eye-off-line align-middle"></i>
                                                    )}
                                                </Link>
                                                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        By creating a account you agree to our <Link scroll={false} href="#!" className="text-primary">Terms & Conditions</Link> and <Link scroll={false} href="#!" className="text-primary">Privacy Policy</Link>
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <SpkButton Buttontype="submit" Customclass="btn btn-primary">Create Account</SpkButton>
                                    </div>
                                </Form>
                                <div className="text-center my-3 authentication-barrier">
                                    <span className="op-4 fs-13">OR</span>
                                </div>
                                <div className="d-grid mb-3">
                                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                                        <span className="avatar avatar-xs">
                                            <Image fill src="../../../assets/images/media/apps/google.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                                    </SpkButton>
                                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <Image fill src="../../../assets/images/media/apps/facebook.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                                    </SpkButton>
                                </div>
                                <div className="text-center mt-3 fw-medium">
                                    Already have a account? <Link scroll={false} href="/authentication/sign-in/basic/" className="text-primary">Sign In</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
                <ToastContainer />
        </Fragment>
    )
};

export default Basic;