
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
