import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4  text-yellow-400">
            About Us
          </h1>
          <p className="text-yellow-200 lg:w-2/3 mx-auto leading-relaxed text-base">
            At Dog Doctor Clinic, we are dedicated to providing exceptional veterinary care for your beloved pets. Our experienced team of veterinarians and staff ensures that every pet receives personalized attention and top-quality treatment.
          </p>
        </div>
        <div className="  flex flex-wrap -m-4">
          <div className=" p-4 md:w-1/3 w-full">
            <div className="h-full bg-yellow-200 p-8 rounded">
              <Image
                src={"/four.jpg"}
                alt="Our Mission"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="text-lg font-medium title-font mb-2 text-gray-900">
                Our Mission
              </h2>
              <p className="leading-relaxed text-base">
                To enhance the health and well-being of pets through compassionate care and advanced veterinary services.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="h-full bg-yellow-200 p-8 rounded">
              <Image
                src={"/one.jpg"} 
                alt="Our Team"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="text-lg font-medium title-font mb-2 text-gray-900">
                Our Team
              </h2>
              <p className="leading-relaxed text-base">
                A group of skilled and passionate professionals dedicated to providing exceptional care for your pets.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="h-full bg-yellow-200 p-8 rounded">
              <Image
                src={"/three.jpg"} 
                alt="Our Facility"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className=" text-yellow-900 font-bold hover:text-red-400 text-lg md:font-medium title-font mb-2 ">
                Our Facility
              </h2>
              <p className="leading-relaxed text-base">
                Equipped with modern technology and comfortable spaces to ensure the best care for your pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
