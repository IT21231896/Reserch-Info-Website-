import SectionWrapper from "../components/SectionWrapper";
import { FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

const sections = [
    {
        title: "Group Documents",
        type: "pdf",
        items: [
            { name: "Topic Assessment", file: "/docs/topic-assessment.pdf", label: "Group Submission" },
            { name: "Research Paper", file: "/docs/research-paper.pdf", label: "Group Submission" },
            { name: "Status Document", file: "/docs/status-document.pdf", label: "Group Submission" }
        ]
    },
    {
        title: "Individual Proposal Reports",
        type: "pdf",
        items: [
            { name: "M.P.O.M Gomes", file: "/docs/gomes-proposal.pdf", label: "Project Proposal Report" },
            { name: "Jayasekara Y.N", file: "/docs/jayasekara-proposal.pdf", label: "Project Proposal Report" },
            { name: "Kariyapperuma K.M.K.R", file: "/docs/kariyapperuma-proposal.pdf", label: "Project Proposal Report" },
            { name: "Gunawardhana H.P.M.N", file: "/docs/gunawardhana-proposal.pdf", label: "Project Proposal Report" }
        ]
    },
    {
        title: "Final Individual Reports",
        type: "pdf",
        items: [
            { name: "M.P.O.M Gomes", file: "/docs/gomes-final.pdf", label: "Final Report" },
            { name: "Jayasekara Y.N", file: "/docs/jayasekara-final.pdf", label: "Final Report" },
            { name: "Kariyapperuma K.M.K.R", file: "/docs/kariyapperuma-final.pdf", label: "Final Report" },
            { name: "Gunawardhana H.P.M.N", file: "/docs/gunawardhana-final.pdf", label: "Final Report" }
        ]
    },
    {
        title: "Presentations",
        type: "ppt",
        items: [
            { name: "M.P.O.M Gomes", file: "/presentations/gomes-final-presentation.pptx", label: "Final Presentation" },
            { name: "Jayasekara Y.N", file: "/presentations/jayasekara-final-presentation.pptx", label: "Final Presentation" },
            { name: "Kariyapperuma K.M.K.R", file: "/presentations/kariyapperuma-final-presentation.pptx", label: "Final Presentation" },
            { name: "Gunawardhana H.P.M.N", file: "/presentations/gunawardhana-final-presentation.pptx", label: "Final Presentation" }
        ]
    }
];

const Documents = () => {
    return (
        <SectionWrapper id="documents">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">Documents & Presentations</h2>

            {sections.map((section, index) => (
                <div key={index} className="mb-12">
                    <h3 className="text-2xl font-semibold text-center text-green-500 mb-6 border-b border-gray-300 pb-4">
                        {section.title}
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {section.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-xl transition"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    {section.type === "pdf" ? (
                                        <FaFilePdf className="text-red-500 text-3xl" />
                                    ) : (
                                        <FaFilePowerpoint className="text-orange-500 text-3xl" />
                                    )}
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white">{item.name}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.label}</p>
                                    </div>
                                </div>

                                <a
                                    href={item.file}
                                    download
                                    className={`mt-4 bg-green-600 text-white py-2 px-4 rounded font-medium text-center hover:bg-green-700 transition`}
                                >
                                    Download {section.type === "pdf" ? "PDF" : "PPT"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </SectionWrapper>
    );
};

export default Documents;
