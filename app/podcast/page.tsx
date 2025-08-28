"use client";
import Layout from '@/components/layout/Layout';


import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => AOS.init({ once: true }));
    }
  }, []);

  return (
    <Layout>

          <div
      className="d-flex mt-8 flex-column justify-content-center align-items-center min-vh-100 bg-light"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        fontFamily: 'Satoshi, Arial, sans-serif',
        padding: '0',
      }}
    >
      <div
        data-aos="fade-down"
        className="text-center"
        style={{ maxWidth: 400 }}
      >
        <img
          src="/assets/imgs/hero-4/star-1.svg"
          alt="Coming Soon"
          width={64}
          height={64}
          className="mb-4"
          data-aos="zoom-in"
        />
        <h1
          className="display-4 fw-bold mb-3 text-dark"
          style={{ letterSpacing: '2px' }}
          data-aos="fade-up"
        >
          Coming Soon
        </h1>
        <p
          className="fs-5 text-secondary mb-4"
          style={{ lineHeight: 1.6 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our podcast page is getting ready for launch.<br />Stay tuned for something amazing!
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="/"
            className="btn btn-dark btn-lg px-4 py-2 rounded-pill shadow-sm"
            style={{ fontWeight: 600, fontSize: '1.1rem' }}
          >
            Go Home
          </a>
        </div>
      </div>
    </div>

    </Layout>

  );
}
