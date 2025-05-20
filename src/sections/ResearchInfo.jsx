import SectionWrapper from "../components/SectionWrapper";
import { useState } from "react";

const researchSections = [
    {
        title: "Research Objectives",
        main: "To develop a smart greenhouse DSS that automates core tasks in tomato cultivation using IoT and ML.",
        list: [
            "Implement an IoT sensor network for environmental data collection",
            "Train ML models for watering and fertilization prediction",
            "Apply CNNs for early disease detection through image analysis",
            "Forecast harvesting windows based on plant development",
            "Integrate all modules into a responsive, real-time web interface"
        ]
    },
    {
        title: "Project Scope",
        content: [
            "The project aims to develop a Smart Greenhouse Decision Support System (DSS) named GreenBrain, tailored for optimized tomato cultivation.",
            "It leverages IoT sensor networks and machine learning algorithms to monitor and manage key aspects of greenhouse farming—such as irrigation, fertilization, disease identification, and harvesting.",
            "The scope covers the development of a unified, scalable system that provides actionable insights to farmers, reduces manual effort, improves crop yield, and enhances resource efficiency."
        ]
    },
    {
        title: "Literature Survey",
        content: [
            "The literature review explores existing research on smart farming, greenhouse automation, and decision support systems.",
            "Studies demonstrate the benefits of combining IoT and ML for efficient agriculture.",
            "However, most existing systems are fragmented, focusing only on specific features like watering or disease detection.",
            "This project addresses the gap by integrating all essential aspects into a unified platform, specifically optimized for Sri Lankan tomato greenhouses."
        ]
    },
    {
        title: "References",
        content: [
            "The project is grounded in academic research, referencing IEEE publications, Springer articles, and agricultural journals focused on ML-driven agriculture and IoT automation.",
            "Additionally, insights were gathered through local interviews with greenhouse farmers and consultations with the Sri Lanka Department of Agriculture, aligning technical development with field realities."
        ]
    },
    {
        title: "Research Gap",
        content: [
            "Current greenhouse technologies lack full integration and adaptability.",
            "Most available solutions operate in silos—treating irrigation, disease detection, and fertilization separately.",
            "Furthermore, many systems fail to adjust to real-time environmental data.",
            "GreenBrain fills this gap by offering an integrated, adaptable DSS with centralized monitoring, smart recommendations, and scalable architecture."
        ]
    },
    {
        title: "Research Problem & Solution",
        content: [
            "Traditional tomato greenhouse farming is labor-intensive and inefficient, leading to issues like water wastage, inconsistent fertilization, late disease detection, and yield loss.",
            "GreenBrain solves this through automation and intelligence—offering real-time IoT monitoring and ML-powered recommendations for watering, fertilization, disease control, and harvesting."
        ]
    },
    {
        title: "The Challenge",
        content: [
            "Key challenges include integrating hardware and software in low-resource environments.",
            "Collecting reliable sensor data, developing accurate ML models with limited agricultural datasets, and ensuring usability for non-technical users.",
            "The system also needs to remain cost-effective and scalable to support different greenhouse sizes."
        ]
    },
    {
        title: "Our Solution: GreenBrain",
        content: [
            "GreenBrain is a smart, web-based Decision Support System developed to automate and optimize tomato greenhouse cultivation.",
            "It uses ESP32-based IoT sensors to collect environmental data like temperature, humidity, and soil moisture.",
            "Data is processed using Python-based ML models—including regression, decision trees, and CNNs—to predict irrigation schedules, fertilization needs, disease risk, and harvesting time.",
            "Farmers interact with the system through a clean, responsive React dashboard."
        ]
    },
    {
        title: "Expected Impact",
        content: [
            "Reduce water and fertilizer waste through optimized scheduling",
            "Improve crop yield and fruit quality via precision farming",
            "Detect diseases early, minimizing loss and chemical use",
            "Reduce manual effort and dependency on guesswork",
            "Promote sustainability in smart agriculture practices"
        ],
        isList: true
    },
    {
        title: "Methodology",
        content: [
            "The system was developed using a modular, data-driven methodology.",
            "Environmental data is captured using ESP32 microcontrollers connected to sensors (temperature, humidity, soil moisture, light).",
            "Data is stored in Firebase and processed by ML models built with Python (using TensorFlow, scikit-learn).",
            "ML techniques include regression, classification, and CNNs.",
            "A web-based dashboard (React + TailwindCSS) displays predictions and user controls.",
            "Testing involved simulated and real-world greenhouse datasets."
        ]
    }
];

const ResearchInfo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const selected = researchSections[activeTab];

    const renderContent = () => {
        if (selected.title === "Research Objectives") {
            return (
                <div className="text-gray-700 dark:text-gray-300 space-y-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-400 dark:border-green-700">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">🎯 Main Objective:</h4>
                        <p>{selected.main}</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                        <h4 className="font-semibold text-primary mb-3">✅ Specific Objectives:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            {selected.list.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
                {selected.isList ? (
                    <ul className="list-disc pl-6 space-y-2">
                        {selected.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    selected.content.map((para, i) => <p key={i}>{para}</p>)
                )}
            </div>
        );
    };

    return (
        <SectionWrapper id="research">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-center text-primary">
                Research Information
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                    <ul className="space-y-2">
                        {researchSections.map((item, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => setActiveTab(i)}
                                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === i
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 dark:bg-gray-800 hover:bg-primary/20"
                                        }`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:w-3/4 bg-gray-50 dark:bg-gray-900 p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4 text-gray-600 text-primary">{selected.title}</h3>
                    {renderContent()}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ResearchInfo;
