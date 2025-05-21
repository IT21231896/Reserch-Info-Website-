import SectionWrapper from "../components/SectionWrapper";
import { FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

const sections = [
    {
        title: "Group Documents",
        type: "pdf",
        items: [
            { name: "Topic Assessment", file: "/docs/Group-Reports/TAF-Report.pdf", label: "Group Submission" },
            { name: "Research Paper", file: "/docs/Group-Reports/research-paper.pdf", label: "Group Submission" },
            { name: "Group Final Report", file: "/docs/Group-Reports/Group_Final_Report.pdf", label: "Group Submission" }
        ]
    },
    {
        title: "Individual Proposal Reports",
        type: "pdf",
        items: [
            { name: "Asardeen A.", file: "/docs/Proposal-Reports/IT21231896_Asardeen .A.pdf", label: "Project Proposal Report" },
            { name: "Jayaneththi I.H.N.S.", file: "/docs/Proposal-Reports/IT21231414 I H N S jayaneththi.pdf", label: "Project Proposal Report" },
            { name: "Thrimavithana V.D.", file: "/docs/Proposal-Reports/IT21181160_Thrimavithana V.D..pdf", label: "Project Proposal Report" },
            { name: "Najas M.N.M.", file: "/docs/Proposal-Reports/proposal report- Najas MNM.pdf", label: "Project Proposal Report" }
        ]
    },
    {
        title: "Final Individual Reports",
        type: "pdf",
        items: [
            { name: "Asardeen A.", file: "/docs/Final-Reports/IT21231896_Asardeen.A_Final_Report.pdf", label: "Final Report" },
            { name: "Jayaneththi I.H.N.S.", file: "/docs/Final-Reports/Final Report_IT21231414 Jayaneththi I H N S 1.pdf", label: "Final Report" },
            { name: "Thrimavithana V.D.", file: "/docs/Final-Reports/IT21181160-Thrimavithana V.D.pdf", label: "Final Report" },
            { name: "Najas M.N.M.", file: "/docs/Final-Reports/najath-final.pdf", label: "Final Report" }
        ]
    },
    {
        title: "Presentations",
        type: "ppt",
        items: [
            { name: "Proposal Presentation", file: "/docs/Presentation/Proposal Presentation.pdf", label: "Final Presentation" },
            { name: "Progress Presentation 1", file: "/docs/Presentation/PP1.pdf", label: "Final Presentation" },
            { name: "Progress Presentation 2", file: "/docs/Presentation/PP2.pdf", label: "Final Presentation" },
            { name: "Final Presentation", file: "#", label: "Final Presentation - uploaded soon" }
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
