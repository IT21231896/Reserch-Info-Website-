import SectionWrapper from "../components/SectionWrapper";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const mentors = [
  {
    name: "Ms. Geethanjali Wimalaratne",
    role: "Supervisor",
    position: "Faculty of Computing | CS & Software Engineering",
    email: "geethanjali.w@sliit.lk",
    linkedin: "https://www.linkedin.com/in/geethanjali-wimalaratne-56625a7a/",
    image: "/assets/team/Supervisor_geethanjaliW.jpg"
  },
  {
    name: "Prof. Samantha Thelijjagoda",
    role: "Co-Supervisor",
    position: "Pro Vice-Chancellor (Research & International)",
    email: "samantha.t@sliit.lk",
    linkedin: "https://lk.linkedin.com/in/samantha-thelijjagoda-84342037",
    image: "/assets/team/Co-supervisor-Prof_Samantha.jpg"
  }
];

const members = [
  {
    name: "Asardeen .A",
    role: "Undergraduate",
    stream: "Information Technology",
    email: "azeesasardeen@gmail.com",
    linkedin: "https://www.linkedin.com/in/asardeen-azees/",
    image: "/assets/team/Asardeen.jpg"
  },
  {
    name: "Jayaneththi I.H.N.S.",
    role: "Undergraduate",
    stream: "Information Technology",
    email: "naveensudaraka20@gmail.com",
    linkedin: "http://www.linkedin.com/in/naveen-jayaneththi-033bb82a1",
    image: "/assets/team/jayaneththi.png"
  },
  {
    name: "Thrimavithana V.D.",
    role: "Undergraduate",
    stream: "Information Technology",
    email: "diltharavishvi@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/assets/team/thrimavithana.png"
  },
  /*{
    name: "Najas M.N.M.",
    role: "Undergraduate",
    stream: "Information Technology",
    email: "your@email.com",
    linkedin: "https://linkedin.com",
    image: "/assets/team/najas.png"
  }*/
];

const ProfileCard = ({ person }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img
      src={person.image}
      alt={person.name}
      className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary"
    />
    <h3 className="text-lg font-bold text-secondary dark:text-white">{person.name}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{person.role}</p>
    {person.position && (
      <p className="text-xs text-gray-500 mt-1">{person.position}</p>
    )}
    {person.stream && (
      <p className="text-xs text-gray-500 mt-1">{person.stream}</p>
    )}
    <div className="flex gap-4 mt-4">
      <a href={`mailto:${person.email}`} className="text-primary hover:text-green-600 text-xl">
        <FaEnvelope />
      </a>
      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-600 text-xl">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

const Team = () => {
  return (
    <SectionWrapper id="team">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Meet Our Team</h2>

      {/* Mentors */}
      <h3 className="text-2xl font-semibold text-center text-green-500 mb-6">Mentors</h3>
      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        {mentors.map((mentor, i) => (
          <ProfileCard key={i} person={mentor} />
        ))}
      </div>

      {/* Members */}
      <h3 className="text-2xl font-semibold text-center text-green-500 mb-6">Group Members</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, i) => (
          <ProfileCard key={i} person={member} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;
