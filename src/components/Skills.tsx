import { Code, Database } from "lucide-react";

interface SkillItemProps {
  name: string;
  // proficiency: number; // 0-100
}

const SkillItem = ({ name }: SkillItemProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-slate-lightest">{name}</span>
      {/* <span className="text-slate">{proficiency}%</span> */}
    </div>
    <div className="skill-bar">
      {/* <div
        className="skill-progress"
        style={{ width: `${proficiency}%` }}
      ></div> */}
    </div>
  </div>
);

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-6 h-6 text-teal" />,
    skills: [
      { name: "HTML, CSS, JavaScript", proficiency: 90 },
      { name: "ReactJS", proficiency: 85 },
      { name: "C, C++", proficiency: 75 },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="w-6 h-6 text-teal" />,
    skills: [
      { name: "NodeJS, Express", proficiency: 90 },
      { name: "SQL, GraphQL", proficiency: 80 },
      { name: "MySQL, MongoDB", proficiency: 85 },
    ],
  },
  {
    name: "Development Tools",
    icon: <Code className="w-6 h-6 text-teal" />,
    skills: [
      { name: "Git, VS Code", proficiency: 90 },
      { name: "Postman, Altair Client", proficiency: 85 },
      { name: "RESTful API Development", proficiency: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-navy-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="subheading">My Skillset</h3>
          <h2 className="heading text-2xl md:text-4xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-white">
                  {category.name}
                </h3>
              </div>

              <div>
                {category.skills.map((skill, i) => (
                  <SkillItem
                    key={i}
                    name={skill.name}
                    // proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate max-w-2xl mx-auto">
            I'm constantly learning and adding new skills to my repertoire. I
            believe in staying current with the latest technologies and best
            practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
