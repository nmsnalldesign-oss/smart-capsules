"use client";

import dynamic from "next/dynamic";

// Hero is always visible — give it a proper skeleton matching its height
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[100svh] bg-white flex items-center justify-center" />
  ),
});

// Products is lightweight — keep as normal import
import Products from "./components/Products";

const Technology = dynamic(() => import("./components/Technology"), {
  ssr: false,
  loading: () => <div className="py-20 bg-white" />,
});

const About = dynamic(() => import("./components/About"), {
  ssr: false,
  loading: () => <div className="py-20 bg-white" />,
});

const Timeline = dynamic(() => import("./components/Timeline"), {
  ssr: false,
  loading: () => <div className="py-12 bg-gray-50" />,
});

const Team = dynamic(() => import("./components/Team"), {
  ssr: false,
  loading: () => <div className="py-20 bg-gray-50" />,
});

const Certificates = dynamic(() => import("./components/Certificates"), {
  ssr: false,
  loading: () => <div className="py-20 bg-white" />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  loading: () => <div className="py-20 bg-white" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Technology />
      <About />
      <Timeline />
      <Team />
      <Certificates />
      <Footer />
    </>
  );
}
