import React from "react";
import { FiScissors, FiUser, FiHeart, FiAward } from "react-icons/fi";
import { GiLipstick } from "react-icons/gi";
import imgabout from "../assets/imgabout.avif";

const About = () => {
  const features = [
    {
      icon: <FiScissors className="w-8 h-8" />,
      title: "Expert Stylists",
      desc: "Certified professionals with artistic vision",
    },
    {
      icon: <GiLipstick className="w-8 h-8" />,
      title: "Premium Products",
      desc: "Luxury brands for ultimate beauty experience",
    },
    {
      icon: <FiUser className="w-8 h-8" />,
      title: "Custom Care",
      desc: "Personalized beauty solutions for you",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Passionate Team",
      desc: "Dedicated to enhancing your natural beauty",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-rose-200 to-pink-100"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-900 mb-4">
            Award Winning Salon
          </h2>
          <h1 className="text-6xl font-bold text-pink-900 mb-8">
            Redefining Beauty Standards
          </h1>
          <p className="text-lg text-pink-800 max-w-2xl mx-auto">
            At Beauty Salon, we craft experiences that celebrate individuality.
            Our master stylists combine technical expertise with artistic vision
            to reveal your most radiant self.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section (Left Side) */}
          <div className="relative group">
            <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-8">
              <div className="bg-pink-100 rounded-3xl p-4 md:p-8 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={imgabout}
                    alt="About img"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section (Right Side) */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-pink-700">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-900">
                      {feature.title}
                    </h3>
                    <p className="text-pink-800">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
