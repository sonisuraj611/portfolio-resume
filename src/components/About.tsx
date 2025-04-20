
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-navy-light">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="subheading">About Me</h3>
            <h2 className="heading text-2xl md:text-3xl">Get to know me</h2>
            <div className="space-y-4 text-slate-light">
              <p>
                I'm an Ex NodeJS Developer with experience in creating robust web applications
                using the MERN stack (MongoDB, Express, React, Node.js).
              </p>
              <p>
                I have a strong foundation in developing RESTful APIs, working with databases,
                and implementing various features to enhance user experience. My experience at
                Lattice Innovations has equipped me with skills to build efficient solutions and
                tackle complex problems.
              </p>
              <p>
                I'm passionate about creating clean, optimized code and continuously learning new
                technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="subheading">Contact Information</h3>
            <h2 className="heading text-2xl md:text-3xl">Reach Out</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-navy-lightest flex items-center justify-center flex-shrink-0">
                  <Phone className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-light">9992403913</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-navy-lightest flex items-center justify-center flex-shrink-0">
                  <Mail className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-light">sonisuraj611@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-navy-lightest flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-light">Rewari, Haryana</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-5 pt-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-lightest flex items-center justify-center hover:bg-teal/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-teal"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-lightest flex items-center justify-center hover:bg-teal/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-teal"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
