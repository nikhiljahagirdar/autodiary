"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const SignUp: React.FC = () => {
    const bodyRef: any = useRef(null);

    useEffect(() => {
        bodyRef.current = document.body
        bodyRef.current.classList.add('bg-white');
        return () => {
            bodyRef.current.classList.remove('bg-white');
        };
    }, []);

    const [values, setValues] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
        agreeTerms: false
    });

    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors:any = {};

        // First Name validation
        if (!values.firstName) {
            newErrors.firstName = "First name is required.";
        }

        // Last Name validation
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

        // Confirm Password validation
        if (!values.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required.";
        } else if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        // Terms validation
        if (!values.agreeTerms) {
            newErrors.agreeTerms = "You must agree to the terms and conditions.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const router = useRouter()
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (validate()) {
            router.push('/dashboards/sales/');
            toast.success('Account created successfully!', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <Fragment>
            <Seo title="Sign Up" />

            <div className="container-fluid">
                <Row className="authentication authentication-cover-main mx-0">
                    <Col xxl={6} xl={7} lg={12}>
                        <Row className="justify-content-center align-items-center h-100">
                            <Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
                                <Card className="custom-card rectangle2">
                                    <Card.Body className="p-5">
                                <div>
                                    <h4 className="mb-1 fw-semibold">Sign Up</h4>
                                    <p className="mb-4 text-muted fw-normal">Join us by creating a free account !</p>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Row className=" gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="signup-firstname" className="text-default">First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="signup-firstname"
                                                placeholder="First Name"
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
                                                placeholder="Last Name"
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
                                        </Col>
                                        <Col xl={12}>
                                            <div className="form-check mt-3">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    id="defaultCheck1" 
                                                    checked={values.agreeTerms}
                                                    onChange={(e) => setValues({ ...values, agreeTerms: e.target.checked })}
                                                />
                                                <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                    By creating a account you agree to our <Link scroll={false} href="#!" className="text-success"><u>Terms & Conditions</u></Link> and <Link scroll={false} href="#!" className="text-success"><u>Privacy Policy</u></Link>
                                                </label>
                                                {errors.agreeTerms && <div className="text-danger fs-12 mt-1">{errors.agreeTerms}</div>}
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
                                            <Image fill src="../assets/images/media/apps/google.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                                    </SpkButton>
                                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <Image fill src="../assets/images/media/apps/facebook.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                                    </SpkButton>
                                </div>
                                <div className="text-center mt-3 fw-medium">
                                    Already have a account? <Link scroll={false} href="/signin" className="text-primary">Sign In</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={5} lg={12} className="d-xl-block d-none px-0">
                        <div className="authentication-cover overflow-hidden">
                            <div className="authentication-cover-logo">
                                <Link scroll={false} href="/dashboards/sales">
                                    <Image fill src="../assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                                </Link>
                            </div>
                            <div className="authentication-cover-background">
                                <Image fill src="../assets/images/media/backgrounds/9.png" alt="" />
                            </div>
                            <div className="authentication-cover-content">
                                <div className="p-5">
                                    <h3 className="fw-semibold lh-base">Join Our Community</h3>
                                    <p className="mb-0 text-muted fw-medium">Create your account and start your journey with us today.</p>
                                </div>
                                <div>
                                    <Image fill src="../assets/images/media/media-72.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
                <ToastContainer />
        </Fragment>
    )
};

export default SignUp;