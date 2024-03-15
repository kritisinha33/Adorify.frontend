import React from 'react'

const About = () => {
  return (
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Our Shop</h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to our online store! At Adorify, we're passionate about providing the best shopping experience for our customers.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our mission is to offer high-quality products at competitive prices, ensuring customer satisfaction with every purchase. We strive to create a seamless online shopping experience, making it convenient and enjoyable for our customers.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
          <p className="mt-2 text-sm text-gray-600">
            We envision becoming a leading online destination for shoppers, offering a wide range of products across various categories. Our vision is to continuously innovate and improve, staying ahead of the curve to meet the evolving needs and preferences of our customers.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Our Values</h3>
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            <li><strong>Quality:</strong> We are committed to sourcing and delivering only the highest quality products to our customers.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical standards.</li>
            <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do. We prioritize their needs and strive to exceed their expectations.</li>
            <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to enhance our products, services, and processes.</li>
            <li><strong>Community:</strong> We believe in giving back to the community and actively participate in initiatives that make a positive impact.</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default About
