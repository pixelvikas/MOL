import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import HeroComponent from "../../components/HeroComponent";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone, MdOutlineFileDownload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import PDF from "../../assets/MY OCEAN LOGISTICS.pdf";
const SingleService = () => {
  const { serviceid } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setAllServices(data.services || []);
        const selectedService = data.services.find(
          (service) => service.serviceid === serviceid
        );
        setServiceData(selectedService || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [serviceid]);

  if (!serviceData) {
    return <p>Loading...</p>;
  }

  const faqData = [
    {
      question: "What transportation and logistics services do you provide?",
      answer:
        "We offer comprehensive transportation and logistics services including air freight, ocean freight, rail freight, road freight, warehousing, and end-to-end supply chain solutions. Our services are designed to cater to both domestic and international shipping needs with reliability and efficiency.",
    },

    {
      question: "How are shipping rates calculated for freight services?",
      answer:
        "Shipping rates are determined based on several factors including the type of freight (air, ocean, rail, road), cargo weight, dimensions, shipping destination, and delivery speed. For accurate and competitive pricing, please contact our logistics team for a custom shipping quote.",
    },
    {
      question:
        "Do you offer customs clearance assistance for international shipments?",
      answer:
        "Yes, we provide complete customs clearance services for both imports and exports. Our experienced team handles all required documentation, regulatory compliance, and duties to ensure hassle-free customs processing for international shipments.",
    },
    {
      question:
        "Can you provide warehousing and inventory management solutions?",
      answer:
        "Absolutely! We offer secure warehousing facilities with climate control, and professional handling. Whether you need short-term storage or long-term warehousing as part of your supply chain, our solutions are fully customizable to fit your business needs.",
    },
    {
      question: "What industries do you specialize in serving?",
      answer:
        "We proudly serve a wide range of industries including e-commerce, retail, automotive, pharmaceuticals, manufacturing, and heavy equipment. Our logistics solutions are tailored to meet the unique shipping and handling requirements of each industry.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <Helmet>
        <title>{`${serviceData.title} | My Ocean Logistics - Trusted Freight & Logistics Partner`}</title>
        <meta
          name="description"
          content={`Discover top-tier ${serviceData.title} services with My Ocean Logistics. We deliver reliable, fast, and cost-effective shipping and logistics solutions tailored to your global business needs.`}
        />
        <meta
          name="keywords"
          content={`${serviceData.title}, freight services, global logistics, air freight, ocean freight, warehousing, road freight, rail freight, supply chain solutions, My Ocean Logistics`}
        />
        <meta
          property="og:title"
          content={`${serviceData.title} | My Ocean Logistics - Trusted Freight & Logistics Partner`}
        />
        <meta
          property="og:description"
          content={`Learn more about our ${serviceData.title} services. We offer expert, flexible, and efficient logistics solutions for smooth global shipping and transport.`}
        />
        <meta property="og:image" content="/src/assets/mol.png" />
        <meta
          property="og:url"
          content={`https://mol-one.vercel.app/services/${serviceData.serviceid}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${serviceData.title} | My Ocean Logistics`}
        />
        <meta
          name="twitter:description"
          content={`Explore ${serviceData.title} services with My Ocean Logistics — offering reliable and cost-effective global shipping solutions tailored for your business.`}
        />
        <meta name="twitter:image" content="/src/assets/mol.png" />
      </Helmet>

      <HeroComponent
        title={serviceData.title}
        link="/"
        linkText="HOME"
        current={serviceData.title.toUpperCase()}
      />
      <div className="singleservice-container">
        <aside className="singleservice-sidebar">
          <div className="singleservice-box">
            <h3>OUR SERVICES</h3>
            <ul>
              {allServices.map((service) => (
                <li
                  key={service.serviceid}
                  className={service.serviceid === serviceid ? "active" : ""}
                >
                  <Link
                    to={`/services/${service.serviceid}`}
                    className="service-link"
                  >
                    {service.title}{" "}
                    <IoIosArrowRoundForward className="service-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="singleservice-box">
            <h3>CONTACT INFO</h3>
            <ul>
              <li>
                <CiMail /> Support@myoceanlogistics.com
              </li>
              <li>
                <MdOutlinePhone /> +91 9152599995
              </li>
              <li>
                <CiLocationOn />
                Andheri East
              </li>
            </ul>
          </div>

          <div className="singleservice-box">
            <h3>BROCHURES</h3>
            <ul>
              <li>
                <a
                  href={PDF}
                  download
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaRegFilePdf />
                  DOWNLOAD.PDF
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="singleservice-content">
          <article>
            <img
              src={serviceData.image}
              alt={`Detailed overview of ${serviceData.title}`}
              className="singleservice-image"
            />
            <h1>{serviceData.title} — Professional & Reliable</h1>
            {serviceData.description?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <div className="singleservice-faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`singleservice-faq-item ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div
                  className="singleservice-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <p>{item.question}</p>
                  <IoIosArrowDown
                    className={`singleservice-faq-icon ${
                      openIndex === index ? "open" : ""
                    }`}
                  />
                </div>
                <div className="singleservice-faq-answer">
                  {openIndex === index && <p>{item.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default SingleService;
