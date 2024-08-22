import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section id="contact-us" className="container mx-auto px-4 pt-16">
      <div className="flex flex-wrap md:space-x-8">
        <div className="w-full md:w-[45%] mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-indigo-600 mr-3" />
              <p className="text-gray-700">DRS Bhawan, Paknajol, Kathmandu</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-indigo-600 mr-3" />
              <p className="text-gray-700">+977-9707500600</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-600 mr-3" />
              <p className="text-gray-700">info@symbiosis.solutions</p>
            </div>
          </div>
          <form className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700"
              >
                Organization:
              </label>
              <input
                type="text"
                id="organization"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your organization"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
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
