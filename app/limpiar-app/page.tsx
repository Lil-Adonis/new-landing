"use client";

import React from 'react'
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import CountUp from "react-countup"

import { useState } from 'react';
import ModalVideo from 'react-modal-video'

const page = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout>



      	{/* <section className="section-cta-1 position-relative mt- section-padding-app fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
									</div>
									<h3 className="ds-3 my-3">
										Smarter Tools <br />
										for In-House Teams
									</h3>
									<p className="fs-5 mb-0">⚡Give your staff everything they need to manage work orders, log hours and keep facilities running , all in one mobile-first app.</p>
									<ul className="list-unstyled my-6">
										<li className="d-flex align-items-center mb-2">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="limpiar" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Automated Time Logging</span>
										</li>
										<li className="d-flex align-items-center mb-2" >
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="limpiar" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Mobile Work Orders.</span>
										</li>
										<li className="d-flex align-items-center mb-2" >
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="limpiar" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Team Synchronization</span>
										</li>
									</ul>
									<div className="d-flex align-items-center mb-8 gap-2">
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-1.png" alt="limpiar" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-2.png" alt="limpiar" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-3.png" alt="limpiar" />
										</Link>
									</div>
									<div className="d-flex align-items-center">
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="limpiar" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="limpiar" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="limpiar" />
										</div>
										<div>
											<p className="text-900 mb-0 fs-8 fw-bold">Trusted by 1M+ customers</p>
											<span className="fs-6 fw-bold">4.8/5 <span className="text-secondary fw-medium">(<span className="odometer" /><CountUp end={26} enableScrollSpy={true} />k Reviews)</span></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 text-lg-end text-center">
								<img src="/assets/imgs/cta-1/img-1.png" alt="limpiar" />
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--blue" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div>
				</section> */}




        		<section className="section-feature-5 section-padding">
					<div className="container-fluid position-relative section-padding bg-1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="photo-description position-relative  rounded-4">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/PHONE.gif" alt="limpiar" />
										<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
									<h4 className="ds-4 fw-regular">Smarter Tools for  <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}> <br className="d-none d-lg-inline" /> In-House Teams.</span></h4>
									<p className="fs-5">⚡Give your staff everything they need to manage work orders, log hours and keep facilities running , all in one mobile-first app.</p>
									<Link href="https://api.leadconnectorhq.com/widget/form/c3PUsJgtYjyol6QQfUdM" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
										Request Demo
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
							<div className="row py-90">
								<div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={0}>Automated Time Logging</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Mobile Work Orders</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={200}>Team Synchronization</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={300}>Unified Communications</Link>
									{/* <Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={400}>Advanced Meeting</Link> */}
								</div>
							</div>
							{/* <div className="row align-items-start pb-5 pt-lg-5 pt-0">
								<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
									<h4 className="ds-4 fw-regular">Experience the <br /> <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>cutting-edge <br /></span>capabilities</h4>
									<p className="fs-5">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
									<div className="photo-description position-relative rounded-4 d-inline-block">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-2.png" alt="limpiar" />
										<div className="position-absolute top-50 start-50 translate-middle z-0">
											<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
											</div>
										</div>
										<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="limpiar" data-aos="zoom-in" data-aos-delay={100} />
									</div>
								</div>
							</div> */}
							<div className="row pt- pt-8 text-center d-none d-md-block">
								<div className="col-lg-10 col mx-lg-auto">
									<p className="text-500">Compatible with all operating systems and browsers in the world</p>
									<div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-1.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">MacOs</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-2.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Windows</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-3.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Linux</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-4.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Android</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-5.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">iOS</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-6.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Firefox</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-7.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Chrome</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-8.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Safari</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-9.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-10.png" alt="limpiar" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


        		<section className="features-1 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">How It Helps</span>
								</div>
                <ul className="mt-4 fs-4 fw-bold">
                  <li className="mb-3">Less Downtime, more uptime</li>
                  <li className="mb-3">Fewer missed tasks</li>
                  <li className="mb-3">Easy Compliance & accountability </li>
                  <li className="mb-3">Streamlined Communication</li>
                </ul>
							</div>
							<div className="col-lg-8">
								<div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={100}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-1.png" alt="limpiar" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={200}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-2.png" alt="limpiar" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={300}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-3.png" alt="limpiar" />
										<a href="#" onClick={() => setOpen(true)} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up position-absolute bottom-0 mb-4 start-50 translate-middle-x">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												How It Work ?
											</span>
										</a>
										<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />

									</div>
									<img className="position-absolute top-50 start-0 translate-middle-y z-0" src="/assets/imgs/features-1/bg-ellipse.png" alt="limpiar" />
									<img className="position-absolute z-2 star-lg" src="/assets/imgs/features-1/star-lg.png" alt="limpiar" />
									<img className="position-absolute z-2 star-md" src="/assets/imgs/features-1/star-md.png" alt="limpiar" />
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row mt-10">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-1.svg" alt="limpiar" />
										</div>
									</div>
									<h6>Facility Teams</h6>
									<p>Daily Maintenence & cleaning workflows.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-2.svg" alt="limpiar" />
										</div>
									</div>
									<h6>Field Technicians</h6>
									<p>Real-time dispatch & checklist completion</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-3.svg" alt="limpiar" />
										</div>
									</div>
									<h6>Operations Managers</h6>
									<p>Track labour hour & Performance </p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-4.svg" alt="limpiar" />
										</div>
									</div>
                  <h6>Executives</h6>
                  <p>Gain insights and ensure compliance with real-time reporting.</p>
								</div>
							</div>
						</div>
					</div>
				</section>


    </Layout>
  )
}

export default page