import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import HeroComponent from "../../components/HeroComponent";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone, MdOutlineFileDownload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";

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
      question: "What types of transportation services do you offer?",
      answer:
        "We provide air freight, ocean freight, rail freight, and logistics solutions tailored to your needs.",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "You can track your shipment using our tracking system by entering your tracking number on our website.",
    },
    {
      question: "What are the shipping rates?",
      answer:
        "Our shipping rates depend on the weight, dimensions, and distance of the shipment. Contact us for a custom quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
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
                <CiMail /> contact@company.com
              </li>
              <li>
                <MdOutlinePhone /> 123456789
              </li>
              <li>
                <CiLocationOn />
                123 Business Street, NY
              </li>
            </ul>
          </div>

          <div className="singleservice-box">
            <h3>BROCHURES</h3>
            <ul>
              <li>
                <FaRegFilePdf /> DOWNLOAD.PDF
              </li>
              <li>
                <MdOutlineFileDownload /> DOWNLOAD.TXT
              </li>
            </ul>
          </div>
        </aside>

        <main className="singleservice-content">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="singleservice-image"
          />
          <h1>{serviceData.title}</h1>
          {serviceData.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

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
