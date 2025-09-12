import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
export default function PageCaseStudy() {
  return (
    <>
      <Layout>
        {/*Case Studies*/}
        <section className="section-case-studies pt-120 mt-10">
          <div className="container position-relative z-2">
            <div className="text-center">
              {/* <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div> */}
              <h3 className="ds-3 my-3">All Case Studies</h3>
              {/* <p className="fs-5">We help you to bringsuccessfast</p> */}
            </div>
            {/* <div className="text-center mt-6">
							<div className="p filter-menu-active">
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2 active">All Projects</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">SEO Services</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Web Design</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Social</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Marketing</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">APP</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Data Analysis</Link>
							</div>
						</div> */}
          </div>
          <div className="container mt-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="zoom-img position-relative mb-4 d-inline-block z-1">
                  <div className="rounded-3 fix">
                    <img
                      className=" img-fluid w-100"
                      src="/lafitness.jpg"
                      alt="limpiar"
                    />
                    {/* <Image className=" img-fluid w-" src="/lafitness.jpg" alt="limpiar"   width = {600} height={200}/> */}
                  </div>
                  <Link
                    href="https://drive.google.com/file/u/1/d/1n24rmMnQbukYoovWFeCR_M7jMxHBSpL6/view?usp=drive_open"
                    className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                  >
                    <p className="fs-7 text-primary mb-1">LA | Fitness.</p>
                    <h6>
                      LA Fitness Relies on Limpiar for Emergency Facility
                      Response & Quarterly Maintenance..
                    </h6>
                    {/* <p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p> */}
                  </Link>
                  <Link
                    href="https://drive.google.com/file/u/1/d/1n24rmMnQbukYoovWFeCR_M7jMxHBSpL6/view?usp=drive_open"
                    className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                  >
                    case study
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="zoom-img position-relative mb-4 d-inline-block z-1">
                  <div className="rounded-3 fix">
                    <img
                      className="img-fluid w-100"
                      src="/gsa.jpg"
                      alt="limpiar"
                    />
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1Nk0Co0r3w4S130x9OI3kDJSJkd-3WZcb/view"
                    className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                  >
                    <p className="fs-7 text-primary mb-1">
                      U.S. General Services Administration (via Prime Partner)
                    </p>
                    <h6>
                      Federal Building Maintenance – Multiple Agencies, Oklahoma
                      GSA...
                    </h6>
                    {/* <p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p> */}
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1Nk0Co0r3w4S130x9OI3kDJSJkd-3WZcb/view"
                    className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                  >
                    case study
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="zoom-img position-relative mb-4 d-inline-block z-1">
                  <div className="rounded-3 fix">
                    <img
                      className=" img-fluid w-80"
                      src="/pride.jpg"
                      alt="limpiar"
                    />
                    {/* <Image className=" img-fluid w-" src="/lafitness.jpg" alt="limpiar"   width = {600} height={200}/> */}
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1Ji8PzjSe3J480tNUAB_kQa18ZbsEHWEX/view"
                    className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                  >
                    <p className="fs-7 text-primary mb-1">PRIDE Industries.</p>
                    <h6>
                      Supporting PRIDE Industries – Federal Courthouses in
                      Dallas & Tulsa .....
                    </h6>
                    {/* <p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p> */}
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1Ji8PzjSe3J480tNUAB_kQa18ZbsEHWEX/view"
                    className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                  >
                    case study
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="zoom-img position-relative mb-4 d-inline-block z-1">
                  <div className="rounded-3 fix">
                    <img
                      className="img-fluid w-100"
                      src="/traffic.jpg"
                      alt="limpiar"
                    />
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1EX3Fs3aCtYAFoBNjtYfZTCcVp27tSSa1/view"
                    className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                  >
                    <p className="fs-7 text-primary mb-1">
                      Regional Property Management Group
                    </p>
                    <h6>
                      High-Traffic Property Portfolio – Retail & Mixed-Use
                      Facilities.....
                    </h6>
                    {/* <p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p> */}
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1EX3Fs3aCtYAFoBNjtYfZTCcVp27tSSa1/view"
                    className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                  >
                    case study
                  </Link>
                </div>
              </div>
            </div>
          </div>
    
        </section>
      </Layout>
    </>
  );
}
