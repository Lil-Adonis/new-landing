// 'use client'
// import CountUp from 'react-countup'

// export default function Cta8() {
// 	return (
// 		<>
// 			<section className="section-cta-8 bg-4">
// 				<div className="container-fluid position-relative section-padding">
// 					<div className="container">
// 						<div className="row align-items-center">
// 							<div className="col-lg-5">
// 								{/* <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
// 									<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
// 									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What We offer</span>
// 								</div> */}
// 								<h5 className="ds-5 mt-2">The Future of Property Operations is Autonomous</h5>
// 								<p>Limpiar’s AI-powered platform turns buildings into self-operating ecosystems, reducing costs, increasing uptime, and creating the future of facility management.</p>


// 								<div className="d-flex pt-3 align-items-center">
// 									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
// 										<div className="icon">
// 											{/* <img src="/assets/imgs/service-4/icon-1.svg" alt="limpiar" /> */}
//                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//   <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
//   <path d="M12 20h16M20 12v16" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
// </svg>
// 										</div>
// 									</div>
// 									<div className="ps-5">
// 										<h6>AI-Driven Workflows</h6>
// 										<p>From request to resolution without manual steps.</p>
// 									</div>
// 								</div>

// 								<div className="d-flex pt-3 align-items-center">
// 									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
// 										<div className="icon">
// 											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="limpiar" /> */}
//                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//   <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
//   <path d="M20 12l8 4v6c0 5-4 8-8 8s-8-3-8-8v-6l8-4z" stroke="#0d6efd" strokeWidth="2" fill="none"/>
//   <path d="M17 23l3 3 5-5" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// 										</div>
// 									</div>
// 									<div className="ps-5">
// 										<h6>Predictive Maintenance</h6>
// 										<p>Prevent downtime before it happens.</p>
// 									</div>
// 								</div>

//                                 	<div className="d-flex pt-3 align-items-center">
// 									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
// 										<div className="icon">
// 											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="limpiar" /> */}
//                                             {/* <img src="/assets/imgs/features-1/icon-4.svg" alt="limpiar" /> */}
//                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//   <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
//   <circle cx="20" cy="20" r="5" stroke="#0d6efd" strokeWidth="2" fill="none"/>
//   <circle cx="10" cy="20" r="2" fill="#0d6efd"/>
//   <circle cx="30" cy="20" r="2" fill="#0d6efd"/>
//   <circle cx="20" cy="10" r="2" fill="#0d6efd"/>
//   <circle cx="20" cy="30" r="2" fill="#0d6efd"/>
//   <path d="M20 15v-3M20 25v3M25 20h3M15 20h-3" stroke="#0d6efd" strokeWidth="2"/>
// </svg>
// 										</div>
// 									</div>
// 									<div className="ps-5">
// 										<h6>Vendor Intelligence</h6>
// 										<p>Match and dispatch the right vendor instantly.</p>
// 									</div>
// 								</div>


//                                 	<div className="d-flex pt-3 align-items-center">
// 									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
// 										<div className="icon">
// 											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="limpiar" /> */}
//                                             {/* <img src="/assets/imgs/features-1/icon-3.svg" alt="limpiar" /> */}

//                                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//   <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
//   <rect x="13" y="22" width="3" height="6" fill="#0d6efd"/>
//   <rect x="18.5" y="18" width="3" height="10" fill="#0d6efd"/>
//   <rect x="24" y="25" width="3" height="3" fill="#0d6efd"/>
//   <path d="M20 18c2-4 6-4 8 0" stroke="#0d6efd" strokeWidth="2" fill="none"/>
// </svg>
// 										</div>
// 									</div>
// 									<div className="ps-5">
// 										<h6>Sustainability Metrics</h6>
// 										<p>Track and achieve your ESG & operational goals.</p>
// 									</div>
// 								</div>


// 							</div>
// 							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
// 								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
// 									<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="limpiar" />
// 									<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
// 										<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} />+</span>
// 										<p className="text-white text-nowrap mb-0">Years of Experience</p>
// 									</div>
// 									<div className="position-absolute tag-dots z-0 pt-5">
// 										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="limpiar" />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }



// app/components/ChaosToClarity.tsx
// app/components/ChaosToClarity.tsx
"use client";
import React from "react";
import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";

const ChaosToClarity: React.FC = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(180deg, #ffffff, #f8f9ff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title Section */}
      <div className="text-center mb-5 px-3">
        <h1 style={{ fontWeight: 700, fontSize: "2.2rem" }}>
          From Chaos to Clarity
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#444" }}>
          Replace manual spreadsheets and constant calls with automated,
          AI-powered operations.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="row align-items-center justify-content-center g-4">
        {/* Left Side - Image */}
        <div className="col-lg-6 col-md-10 text-center">
          <Image
            src="/assets/imgs/cta-5/img-1.png" // put the image in /public
            alt="Stack of files"
            width={550}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Side - Dashboard */}
        <div className="col-lg-6 col-md-10">
          <div
            className="p-4"
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Overview Section */}
            <h6 className="fw-bold mb-3">Overview</h6>
            <div className="d-flex flex-wrap mb-4">
              {[
                { label: "Work Orders", value: 56 },
                { label: "Sites Online", value: 16 },
                { label: "Open Issues", value: 5 },
                { label: "Vendors Active", value: 24 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 text-center flex-fill"
                  style={{
                    minWidth: "120px",
                    borderRight:
                      idx !== 3 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <h4 className="fw-bold mb-1">{item.value}</h4>
                  <small className="text-muted">{item.label}</small>
                </div>
              ))}
            </div>

            {/* Uptime Section */}
            <div className="mb-4">
              <h6 className="fw-bold">Uptime</h6>
              <div
                style={{
                  height: "140px",
                  background:
                    "linear-gradient(180deg, rgba(0,123,255,0.15), transparent)",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Fake chart line */}
                <svg
                  viewBox="0 0 500 140"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <polyline
                    fill="none"
                    stroke="#007bff"
                    strokeWidth="3"
                    points="0,90 100,110 200,70 300,100 400,50 500,80"
                  />
                  <polyline
                    fill="rgba(0,123,255,0.2)"
                    stroke="none"
                    points="0,140 0,90 100,110 200,70 300,100 400,50 500,80 500,140"
                  />
                </svg>
              </div>
            </div>

            {/* Open Issues Section */}
            <div>
              <h6 className="fw-bold">Open Issues</h6>
              <ul
                style={{
                  paddingLeft: "18px",
                  marginBottom: 0,
                  lineHeight: "1.6",
                }}
              >
                <li>Schedule HVAC inspection</li>
                <li>Fix aptor task in Building 2</li>
                <li>Vendor broken door</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Section */}
      <div
        className="row mt-5 g-4 justify-content-center text-center"
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          padding: "25px",
        }}
      >
        <div className="col-md-6 col-lg-4 col-sm-12">
          <span style={{ fontWeight: 500, color: "#333" }}>
            Manual work orders
          </span>
          <span style={{ margin: "0 8px", color: "#007bff" }}>→</span>
          <span style={{ fontWeight: 700 }}>AI-Driven Workflows</span>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <span style={{ fontWeight: 500, color: "#333" }}>Vendor delays</span>
          <span style={{ margin: "0 8px", color: "#007bff" }}>→</span>
          <span style={{ fontWeight: 700 }}>Instant Dispatch</span>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <span style={{ fontWeight: 500, color: "#333" }}>
            Predictive Maintenance
          </span>
          <span style={{ margin: "0 8px", color: "#007bff" }}>→</span>
          <span style={{ fontWeight: 700 }}>Clean dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default ChaosToClarity;
