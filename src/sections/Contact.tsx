"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

interface IContactUsFormData {
  name: string;
  email: string;
  organizationName: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactUsFormData>();

  const onSubmit: SubmitHandler<IContactUsFormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organizationName: data.organizationName,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        const errorData = await response.json();
        console.error("Error submitting message:", errorData.message);
      }
    } catch (error: any) {
      console.error("Error submitting message:", error.message);
    }
  };

  return (
    <section id="contact-us" className="container mx-auto px-4 pt-16">
      <div className="flex flex-wrap md:space-x-8">
        <div className="w-full md:w-[45%] mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="contact-icon" />
              <p className="text-gray-700">DRS Bhawan, Paknajol, Kathmandu</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="contact-icon" />
              <p className="text-gray-700">+977-9707500600</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="contact-icon" />
              <p className="text-gray-700">info@symbiosis.solutions</p>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name" className="contact-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className={`contact-form-inputs ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-[#9CA3AF]"
                }`}
                {...register("name", {
                  required: "Please enter your full name",
                  pattern: {
                    value: /^(?!\s*$)[a-zA-Z\s'-]+$/,
                    message: "Please enter your valid name",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-base">
                  {`${errors.name.message}`}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="organizationName" className="contact-label">
                Organization:
              </label>
              <input
                type="text"
                id="organizationName"
                placeholder="Enter your organization"
                className={`contact-form-inputs ${
                  errors.organizationName
                    ? "focus:ring-red-500"
                    : "focus:ring-[#9CA3AF]"
                }`}
                {...register("organizationName", {
                  required: "Please enter your organization name",
                  pattern: {
                    value: /^(?!\s*$)[\w\s.,'&-]+$/,
                    message: "Please enter a valid name.",
                  },
                })}
              />
              {errors.organizationName && (
                <p className="text-red-500 text-base">
                  {`${errors.organizationName.message}`}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="contact-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`contact-form-inputs  ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-[#9CA3AF]"
                }`}
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^(?!\s*$)[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-base">
                  {`${errors.email.message}`}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message" className="contact-label">
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                className={`contact-form-inputs  ${
                  errors.message ? "focus:ring-red-500" : "focus:ring-[#9CA3AF]"
                }`}
                {...register("message", {
                  required: "Please enter your message",
                  pattern: {
                    value: /^(?!\s*$).{10,}$/,
                    message:
                      "Please enter a message that is at least 10 characters long",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-base">
                  {`${errors.message.message}`}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#009C9C] hover:bg-[#008888]"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="text-green-600 mt-4">
              Thank you! Your message has been submitted successfully.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Our Location
          </h2>

          <div className="map-container rounded-lg overflow-hidden shadow-md">
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=DRS%20Bhawan,%20Paknajol,%20Kathmandu+(Symbiosis%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
