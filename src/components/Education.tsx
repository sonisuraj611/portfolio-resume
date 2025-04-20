
import { BookOpen, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="bg-navy">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="subheading">My Education</h3>
          <h2 className="heading text-2xl md:text-4xl">Academic Background</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-light rounded-lg p-6 border border-navy-lightest">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-medium text-white mb-2 md:mb-0">
                Bachelor's in Computer Application (BCA)
              </h3>
              <div className="flex items-center text-teal text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                2019 - 2022
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-teal mr-2" />
              <span className="text-slate-light">
                DPG Institute Of Technology And Management
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 text-teal mr-2" />
              <span className="text-slate-light">Gurugram</span>
            </div>
            
            <p className="text-slate-light">
              Studied core computer science concepts including data structures, algorithms, database management systems, and web development principles. Developed a strong foundation in programming languages and software development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
