import SectionWrapper from "../components/SectionWrapper";
import {
  SiPython, SiJavascript, SiHtml5, SiBootstrap, SiFlask,
  SiGitlab, SiTensorflow, SiPytorch, SiJupyter, SiGooglecolab, SiAnaconda
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const softwareTools = [
  { name: "Python", icon: <SiPython size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "HTML5", icon: <SiHtml5 size={32} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} /> },
  { name: "Flask", icon: <SiFlask size={32} /> },
  { name: "VS Code", icon: <VscVscode size={32} />},
  { name: "GitLab", icon: <SiGitlab size={32} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
  { name: "PyTorch", icon: <SiPytorch size={32} /> },
  { name: "Jupyter", icon: <SiJupyter size={32} /> },
  { name: "Google Colab", icon: <SiGooglecolab size={32} /> },
  { name: "Anaconda", icon: <SiAnaconda size={32} /> }
];

const hardwareTools = [
  { name: "ESP32 Microcontroller", image: "/assets/hardware/esp32.png" },
  { name: "DHT11 Temp & Humidity Sensor", image: "/assets/hardware/dht11.png" },
  { name: "Soil Moisture Sensor", image: "/assets/hardware/soil.png" },
  { name: "Water Level Sensor", image: "/assets/hardware/water-sensor.png" },
  { name: "Ultrasonic Sensor", image: "/assets/hardware/ultrasonic.png" },
  { name: "Relay Module", image: "/assets/hardware/relay.png" },
  { name: "OLED Display", image: "/assets/hardware/oled.png" },
  { name: "DC Water Pump", image: "/assets/hardware/motor.png" },
  { name: "Fan", image: "/assets/hardware/fan.png" },
  { name: "LEDs", image: "/assets/hardware/led.png" },
  { name: "Firebase Realtime DB", image: "/assets/hardware/firebase.png" }
];

const TechCard = ({ name, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-md transition text-center">
    <div className="text-primary mb-2">{icon}</div>
    <p className="text-sm text-gray-800 dark:text-white font-medium">{name}</p>
  </div>
);

const ImageCard = ({ name, image }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-md transition text-center">
    <img src={image} alt={name} className="w-16 h-16 object-contain mb-2" />
    <p className="text-sm text-gray-800 dark:text-white font-medium">{name}</p>
  </div>
);

const Technologies = () => {
  return (
    <SectionWrapper id="technologies">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Technologies Used</h2>

      {/* Software Tools */}
      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold text-green-500 mb-6">Software & Development Tools</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {softwareTools.map((tool, index) => (
            <TechCard key={index} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </div>

      {/* Hardware Tools */}
      <div>
        <h3 className="text-2xl text-center font-semibold text-green-500 mb-6">IoT Devices & Hardware</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hardwareTools.map((tool, index) => (
            <ImageCard key={index} name={tool.name} image={tool.image} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Technologies;
