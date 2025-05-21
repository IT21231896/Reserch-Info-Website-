import SectionWrapper from "../components/SectionWrapper"

const diagrams = [
    {
      title: "System Diagram",
      img: "/assets/diagrams/System Diagram.jpg",
      caption: "Shows the full data flow from sensors to cloud to dashboard, covering the interaction between IoT, Firebase, ML models, and the web interface."
    },
    {
      title: "Overall Architecture Diagram",
      img: "/assets/diagrams/Owerall System Diagram.png",
      caption: "Visualizes the modular architecture of the system, including components like ESP32, cloud storage, Python ML models, and React frontend."
    },
    {
      title: "Circuit Diagram",
      img: "/assets/diagrams/iot ceircuit.png",
      caption: "This circuit layout shows wiring between sensors and ESP32, pin connections, and power management for reliable greenhouse data collection."
    },
    {
      title: "IoT Device Circuit",
      img: "/assets/diagrams/IOT_withCercuit.jpg",
      caption: "hardwares soldered with the PCB shows how environmental sensors like soil moisture, humidity, and temperature are physically arranged in the greenhouse and connected to the ESP32 controller."
    },
    {
      title: "IoT Device",
      img: "/assets/diagrams/IOT_Device.png",
      caption: "A real-world photo of the assembled IoT unit used in testing. It includes DHT22, LDR, and soil sensors connected to the ESP32 and powered via battery."
    }
  ];
  

  const Diagrams = () => {
    return (
      <SectionWrapper id="diagrams">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8 text-center text-primary">System Diagrams</h2>
        <div className="space-y-12">
          {diagrams.map((diagram, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-green-400 mb-4">{diagram.title}</h3>
              <img
                src={diagram.img}
                alt={diagram.title}
                className="mx-auto max-w-full md:max-w-3xl rounded-lg shadow"
              />
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">{diagram.caption}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
  };
  
  export default Diagrams;