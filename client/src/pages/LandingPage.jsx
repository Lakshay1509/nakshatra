import React from "react";
import { ArrowRight, Check, Menu, Mic, Heart, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/dashboard.png";
import logo from "../assets/logo.png";
import bot_qr from "../assets/bot_qr.jpg";
import wqr from "../assets/wqr.png";
import { ContainerScroll } from "../components/ScrollAnimation";
import AnimatedTestimonialsDemo from "../components/SampleTestimonial";
// import Image from "react"

const LandingPage = () => {
  return (
    <div
      className="font-inter bg-white min-h-screen relative"
      style={{
        backgroundImage: `
            linear-gradient(to right, #FFE5EC 1px, transparent 1px),
            linear-gradient(to bottom, #FFE5EC 1px, transparent 1px)
          `,
        backgroundSize: "40px 40px",
        zIndex: 0,
      }}
    >
      <div className="relative z-10">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 animate-fadeInUp">
              <div className="inline-flex items-center bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                AI-Powered Voice Analysis
                <span className="ml-2 px-2 py-0.5 bg-pink-500 text-white rounded-full text-xs">
                  New
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold">
                Your Voice Matters ,
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
                  Nurture It
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-600">
                Comprehensive{" "}
                <span className="text-pink-500 font-semibold">
                  Vocal Health
                </span>{" "}
                Assessment & Training
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Receive precise voice evaluations and tailored exercises to
                enhance your vocal strength and longevity.
              </p>

              <Link to={"/health"} className="flex justify-center gap-4 mt-8">
                <button className="rounded-full px-6 py-4 text-lg gap-2 bg-pink-500 hover:bg-pink-600 text-white inline-flex items-center">
                  Explore Vocal Wellness{" "}
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </Link>
            </div>

            {/* New Laptop Mockup Section */}
            <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2">
                    <AlertCircle className="text-pink-500 w-6 h-6" />
                    <h2 className="text-3xl font-bold">
                      Why Voice Health Matters
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        number: "1",
                        title: "Early Detection",
                        description:
                          "Identify potential voice issues before they turn into major concerns.",
                      },
                      {
                        number: "2",
                        title: "Peak Performance",
                        description:
                          "Ideal for speakers, singers, and professionals who depend on their voice.",
                      },
                      {
                        number: "3",
                        title: "Holistic Well-being",
                        description:
                          "Your vocal health directly impacts your physical and emotional wellness.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                          <span className="text-pink-500 font-semibold">
                            {item.number}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  {/* Laptop Mockup */}
                  <div className="relative mx-auto max-w-[600px]">
                    <div className="relative">
                      {/* Laptop Frame */}
                      <div className="bg-gray-800 rounded-t-xl p-2 aspect-[16/10]">
                        {/* Screen Content */}
                        <div className="bg-white rounded-lg h-full p-4 overflow-hidden">
                          <img
                            src={dashboardImg}
                            alt="Voice Analysis Dashboard"
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                      {/* Laptop Base */}
                      <div className="bg-gray-800 h-4 rounded-b-lg transform perspective-1000 rotateX-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
            <AnimatedTestimonialsDemo/>
          </section>

            {/* WhatsApp Integration Section */}
            <section className="mt-24 bg-pink-100 p-8 rounded-2xl border border-pink-500 shadow-lg z-50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <Share2 className="text-black-600 w-8 h-8" /> */}
                    <h2 className="text-3xl font-semibold">
                      Get Reports Instantly
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Generate comprehensive reports and act immediately on your
                    voice health.
                  </p>
                  
                </div>
                <div className="flex justify-center">
  <div className="rounded-xl border-2 border-purple-600 p-4 bg-white w-[300px] h-[300px] overflow-hidden">
    {/* Placeholder for QR Code */}
    <img src={bot_qr} className="w-full h-full object-contain" />
  </div>
</div>

              </div>
            </section>

            <section className="mt-24 grid md:grid-cols-3 gap-8 animate-fadeInUp">
  {[
    {
      title: "Voice Analysis",
      description:
        "AI-powered insights to detect vocal issues and monitor improvements.",
    },
    {
      title: "Personalized Training",
      description:
        "Custom exercises designed to enhance your vocal strength and clarity.",
    },
    {
      title: "Progress Insights",
      description:
        "Track your vocal wellness with detailed reports and analytics.",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="bg-white p-8 rounded-xl border border-pink-100 hover:shadow-xl transition-shadow"
    >
      <Check className="text-pink-500 mb-4" size={24} />
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</section>



          </section>

          <section>
          <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Resonanze</span>
            </h1>
          </>
        }

        
      >

          <img
          src={dashboardImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
       
      </ContainerScroll>
    </div>
          </section>

          

          

          <section className="bg-pink-500 text-white mt-24 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fadeInUp">
                <h2 className="text-3xl font-bold mb-4">
                  Share Your Voice Journey
                </h2>
                <p className="text-xl mb-8">
                  Help us improve by sharing your experience with Resonanze
                </p>
                <button className="px-6 py-3 bg-white text-pink-500 rounded-full hover:bg-pink-50 transition-all duration-300 ease-in-out hover:scale-105">
                  Give Feedback
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
               <Link to="/" className="flex items-center space-x-2 animate-fadeIn mb-4">
                                       <img src={logo} className="w-18 h-12" />
                                     
                </Link>
                <p className="text-gray-600">
                  Empowering voices through technology
                  <br />
                  Your trusted voice health companion
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    Instagram
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    Twitter
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      
    </div>
  );
};

export default LandingPage;
