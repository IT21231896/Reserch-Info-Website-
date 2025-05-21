import SectionWrapper from "../components/SectionWrapper";
import {
  SiPython, SiJavascript, SiHtml5, SiBootstrap, SiFlask,
  SiGitlab, SiTensorflow, SiPytorch, SiJupyter, SiGooglecolab, SiAnaconda, SiFirebase
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const softwareTools = [
  { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
  { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} color="#7952B3" /> },
  { name: "Flask", icon: <SiFlask size={32} color="#000000" /> },
  { name: "VS Code", icon: <VscVscode size={32} color="#007ACC" /> },
  { name: "GitLab", icon: <SiGitlab size={32} color="#FC6D26" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={32} color="#FF6F00" /> },
  { name: "PyTorch", icon: <SiPytorch size={32} color="#EE4C2C" /> },
  { name: "Jupyter", icon: <SiJupyter size={32} color="#F37626" /> },
  { name: "Google Colab", icon: <SiGooglecolab size={32} color="#F9AB00" /> },
  { name: "Anaconda", icon: <SiAnaconda size={32} color="#44A833" /> },
  { name: "Firebase", icon: <SiFirebase size={32} color="#FFCA28" /> }
];


const hardwareTools = [
  { name: "ESP32 Microcontroller", image: "/assets/hardware/esp32.jpg" },
  { name: "DHT11 Temp & Humidity Sensor", image: "/assets/hardware/DH11.png" },
  { name: "Soil Moisture Sensor", image: "/assets/hardware/soil_moisture_sensor.jpg" },
  { name: "Water Level Sensor", image: "/assets/hardware/water-level-sensor.jpg" },
  { name: "Ultrasonic Sensor", image: "/assets/hardware/ultrasonic.jpg" },
  { name: "Relay Module", image: "/assets/hardware/relay.png" },
  { name: "OLED Display", image: "/assets/hardware/oled.jpg" },
  { name: "DC Water Pump", image: "/assets/hardware/motor.webp" },
  { name: "Fan", image: "/assets/hardware/fan.jpg" },
  { name: "LEDs", image: "/assets/hardware/led.avif" },
  { name: "LDR Sensor", image: "/assets/hardware/LDR.webp" },
  { name: "Buzzer", image: "/assets/hardware/Buzzer.webp" }
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
