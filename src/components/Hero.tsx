import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <span className="text-teal mb-2 inline-block animate-fade-in-up">
              Hi, my name is
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up animate-delay-100">
              Suraj Soni
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate mb-6 animate-fade-in-up animate-delay-200">
              I build things for the web
            </h2>
            <p className="text-slate mb-8 max-w-lg animate-fade-in-up animate-delay-300">
              I'm a NodeJS Developer specialized in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products using the MERN
              stack.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
              <a href="#projects">
                <Button variant="outline" className="btn-primary">
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="btn-primary">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal/30">
                <img
                  src="/uploads/pic.jpg"
                  alt="Suraj Soni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-teal/20 -z-10"></div>
              <div className="absolute -inset-4 rounded-full border border-teal/10 -z-20"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-teal">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
