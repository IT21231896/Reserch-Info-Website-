import SectionWrapper from "../components/SectionWrapper";

const milestones = [
  { title: "Project Proposal", date: "July 2024", description: "Initial proposal including background, objectives, problem, and methodology submitted for evaluation." },
  { title: "Progress Presentation I", date: "December 2024", description: "Covers 50% project completion: includes system architecture, modules, and key design decisions." },
  { title: "Research Paper", date: "March 2025", description: "Describes contributions to existing knowledge and insights derived from project implementation." },
  { title: "Progress Presentation II", date: "March 2025", description: "Presents 90% completion status, final system demonstration, and poster showcasing complete solution." },
  { title: "Final Report", date: "April 2025", description: "Comprehensive documentation of project work, research findings, testing, and results." },
  { title: "Final Presentation & Viva", date: "May 2025", description: "Team presents final solution to evaluation panel followed by Q&A and viva session." },
  { title: "Project Website", date: "June 2025", description: "Live website published with project overview, documents, presentations, and team information." },
  { title: "Research Logbook", date: "June 2025", description: "Detailed weekly logs showing progress, meetings, decisions, and personal contributions." },
];

const Milestones = () => {
  return (
    <SectionWrapper id="milestones">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Project Milestones</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-primary h-full w-1"></div>

        <div className="space-y-12">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"} items-center`}>
                <div className={`w-full md:w-1/2 px-4 ${isLeft ? "md:pr-10" : "md:pl-10"} py-4`}>
                  <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-green-400">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-black text-primary font-bold py-1 px-2 border border-primary rounded shadow text-sm">
                  {item.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Milestones;
