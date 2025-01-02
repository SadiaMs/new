import React from 'react';
import Image from 'next/image'; //  Image component

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src="/doctors.jpg" //  image path
                alt="Dog Doctor"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
               
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="md:font-medium title-font mt-4 text-yellow-500 font-bold text-lg hover:text-red-400">
                    Dr. Sarah Connor
                  </h2>
                  <div className="w-12 h-1 bg-yellow-200 rounded mt-2 mb-4" />
                  <p className="text-yellow-200 text-base">
                    Compassionate care for your furry friends. Specialized in surgery, checkups, and preventive care.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="text-yellow-200 leading-relaxed text-lg mb-4">
                  Our clinic provides state-of-the-art facilities and experienced staff to ensure the best care for your pets. From routine checkups to advanced treatments, we are dedicated to their health and happiness.
                </p>
                <a href="/services" className="text-yellow-500 hover:text-red-400 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
