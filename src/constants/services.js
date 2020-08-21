import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend Web Development",
    stack: [`REACT`, `CSS`, `HTML`],
    text: ` Creating Highly responsive mobile-first websites with attractive layouts and fast loading times.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend design",
    stack: [`Node js`, `Springboot`],
    text: `Services and API's designs that are scalabl and resilient. Along with support for deployment and maintanance`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    stack: [`React Native`],
    text: `Fluid Designs with great user experiences. (Coming Soon)`,
  },
]
