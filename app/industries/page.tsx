
"use client";
import Layout from '@/components/layout/Layout';
import Hero5 from '@/components/sections/Hero5';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CoreValuesSection: React.FC = () => {
  const values = [
    {
      title: "Restaurants",
      description: "Front to back of house, simplified.",
      label : "manage vendors, tracks repairs, and keeps kitchens compliant, all in one place."
    },
    {
      title: "Healthcare",
      description: "Stay compliant, stay operational.",
      label : "ensure facilities meet strict regulations while automating work orders for critical systems."
    },
    {
      title: "Gym & Fitness",
      description: "Always clean, always ready.",
      label : "sync with class schedules and automate cleaning/maintenance so members never see downtime."
    },
    {
      title: "Grocery & Convenience",
      description: "Seamless daily upkeep",
      label : "track refrigeration, vendor deliveries, and daily upkeep to prevent disruptions."
    },
    {
      title: "Hospitality & Medspace",
      description: "Deliver flawless guest experience.",
      label : "centralize cleaning, repairs, and vendor tasks to ensure guests always experience excellence."
    },
    {
      title: "Education",
      description: "Safe, efficient campuses",
      label : "keep campuses running with scheduled maintenance, vendor oversight, and safety compliance."
    },


      {
      title: "Corporate Offices",
      description: " Streamlined workplace ops",
      label : "waiting on demi"

    },



      {
      title: "Industrial & Warehousing",
      description: " Reduce downtime, boost output",
      label : "waiting on demi"
    }
  ];

  const CheckIcon = () => (
    <div 
      className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '40px',
        height: '40px',
        border: '2px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 6L9 17L4 12" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const StarIcon = () => (
    <div 
      className="d-flex align-items-center justify-content-center mb-4"
      style={{
        width: '80px',
        height: '80px'
      }}
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="rgba(255, 255, 255, 0.1)"
        />
      </svg>
    </div>
  );

  return (
     <Layout>
        <div>

            <Hero5/>
        </div>
    <div 
        className="py-5"
        style={{
            background: 'linear-gradient(135deg, #e0eafd 0%, #0b56a5ff 50%, #2366c7 100%)',
            minHeight: '100vh'
        }}
    >
        <div className="container section-padding">
            <div className="row">
                {/* Left Column - Title and Stats */}
                <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
                    <div className="d-flex flex-column h-100">
                        <StarIcon />
                        <h1 
                            className="display-4 fw-bold text-white mb-4"
                            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                        >
                            Automation for Every Industry
                        </h1>
                        <p className="text-white fs-5 mb-5" style={{ opacity: 0.9 }}>
                            Limpiar’s Automated Maintenance System simplifies operations for gyms, restaurants, retail, and more
                        </p>
                    </div>
                </div>

                {/* Right Column - Values Grid */}
                <div className="col-lg-8 col-md-12">
                    <div className="row g-4">
                        {values.map((value, index) => (
                            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                                <div 
                                    className="p-4 h-100"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0px)';
                                    }}
                                >
                                    <div className="d-flex align-items-flex-start mb-3">
                                        <CheckIcon />
                                        <h3 
                                            className="text-white fw-bold mb-0"
                                            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                                        >
                                            {value.title}
                                        </h3>
                                    </div>
                                    <p 
                                        className="text-white mb-0"
                                        style={{ 
                                            opacity: 0.85,
                                            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                    <p className="text-white mb-0 small">{value.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div> </Layout>
  );
};

export default CoreValuesSection;