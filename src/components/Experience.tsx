
import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'NodeJS Developer L1',
    company: 'Lattice Innovations',
    location: 'Delhi',
    period: 'April 2023 - August 2023',
    description: [
      'Worked with github APIs and integrated github data into the project where employees can see bug, gap and defect issues based on their roles directly in the web app which resulted in 80% faster issue tracking and handling by saving 8-12 minutes per day.',
      'Worked with google APIs and automated the process of creating spreadsheets with a feature that replicated the Gantt chart feature to see the employees workload directly in the web app.',
      'Created APIs working with SQL and GraphQL.'
    ]
  },
  {
    title: 'NodeJS Developer Intern',
    company: 'Lattice Innovations',
    location: 'Delhi',
    period: 'Jan 2023 - March 2023',
    description: [
      'Designed MySQL database and implemented REST APIs for given applications using Nodejs and Express framework.',
      'R&D of API monitoring tools and implementing in projects.',
      'Documented APIs with swagger documentation.'
    ]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="bg-navy">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="subheading">My Experience</h3>
          <h2 className="heading text-2xl md:text-4xl">Where I've Worked</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Tab buttons for mobile and desktop */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 ${
                    activeExp === index
                      ? 'border-teal text-teal bg-navy-light md:bg-navy-light'
                      : 'border-navy-lightest text-slate hover:text-slate-lightest hover:bg-navy-light'
                  } transition-all`}
                  onClick={() => setActiveExp(index)}
                >
                  {exp.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="md:w-3/4 bg-navy-light p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white">
              {experiences[activeExp].title} <span className="text-teal">@ {experiences[activeExp].company}</span>
            </h3>
            
            <div className="flex items-center text-slate-light mt-2 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {experiences[activeExp].period}
            </div>
            
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-2 mt-1">
                <Briefcase className="w-4 h-4 text-teal" />
              </div>
              <p className="text-slate-light">
                {experiences[activeExp].location}
              </p>
            </div>
            
            <ul className="space-y-3">
              {experiences[activeExp].description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span className="text-slate-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
