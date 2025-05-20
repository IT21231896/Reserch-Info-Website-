export const researchContent = [
    {
      title: "Project Scope",
      content: `The project aims to develop a Smart Greenhouse Decision Support System (DSS) named GreenBrain, tailored for optimized tomato cultivation. It leverages IoT sensor networks and machine learning algorithms to monitor and manage key aspects of greenhouse farming—such as irrigation, fertilization, disease identification, and harvesting. The scope covers the development of a unified, scalable system that provides actionable insights to farmers, reduces manual effort, improves crop yield, and enhances resource efficiency.`
    },
    {
      title: "Literature Survey",
      content: `The literature review explores existing research on smart farming, greenhouse automation, and decision support systems. Studies demonstrate the benefits of combining IoT and ML for efficient agriculture. However, most existing systems are fragmented, focusing only on specific features like watering or disease detection. This project addresses the gap by integrating all essential aspects into a unified platform, specifically optimized for Sri Lankan tomato greenhouses.`
    },
    {
      title: "References",
      content: `The project is grounded in academic research, referencing IEEE publications, Springer articles, and agricultural journals focused on ML-driven agriculture and IoT automation. Additionally, insights were gathered through local interviews with greenhouse farmers and consultations with the Sri Lanka Department of Agriculture, aligning technical development with field realities.`
    },
    {
      title: "Research Gap",
      content: `Current greenhouse technologies lack full integration and adaptability. Most available solutions operate in silos—treating irrigation, disease detection, and fertilization separately. Furthermore, many systems fail to adjust to real-time environmental data. GreenBrain fills this gap by offering an integrated, adaptable DSS with centralized monitoring, smart recommendations, and scalable architecture.`
    },
    {
      title: "Research Problem & Solution",
      content: `Traditional tomato greenhouse farming is labor-intensive and inefficient, leading to issues like water wastage, inconsistent fertilization, late disease detection, and yield loss. GreenBrain solves this through automation and intelligence—offering real-time IoT monitoring and ML-powered recommendations for watering, fertilization, disease control, and harvesting.`
    },
    {
      title: "The Challenge",
      content: `Key challenges include integrating hardware and software in low-resource environments, collecting reliable sensor data, developing accurate ML models with limited agricultural datasets, and ensuring usability for non-technical users. The system also needs to remain cost-effective and scalable to support different greenhouse sizes.`
    },
    {
      title: "Our Solution: GreenBrain",
      content: `GreenBrain is a smart, web-based Decision Support System developed to automate and optimize tomato greenhouse cultivation. It uses ESP32-based IoT sensors to collect environmental data like temperature, humidity, and soil moisture. Data is processed using Python-based ML models—including regression, decision trees, and CNNs—to predict irrigation schedules, fertilization needs, disease risk, and harvesting time. Farmers interact with the system through a clean, responsive React dashboard.`
    },
    {
      title: "Expected Impact",
      content: `GreenBrain is expected to:
      • Reduce water and fertilizer waste through optimized scheduling  
      • Improve crop yield and fruit quality via precision farming  
      • Detect diseases early, minimizing loss and chemical use  
      • Reduce manual effort and dependency on guesswork  
      • Promote sustainability in smart agriculture practices`
    },
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
      }
      ,
    {
      title: "Methodology",
      content: `The system was developed using a modular, data-driven methodology. Environmental data is captured using ESP32 microcontrollers connected to sensors (temperature, humidity, soil moisture, light). Data is stored in Firebase and processed by ML models built with Python (using TensorFlow, scikit-learn). ML techniques include regression, classification, and CNNs. A web-based dashboard (React + TailwindCSS) displays predictions and user controls. Testing involved simulated and real-world greenhouse datasets.`
    }
  ];
  