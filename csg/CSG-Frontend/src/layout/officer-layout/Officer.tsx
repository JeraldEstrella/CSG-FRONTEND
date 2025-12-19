import OfficerCard from "../../components/officer-card/Officer-card";
import Typography from "../../components/typography/Typography";
import "./officer.css";

export default function Officer() {
  const officer = [
    {
      id: "Zoe R. Gil",
      title: "CSG President",
      description:
        "Passionate advocate for student rights and campus transparency",
      image: "/path/to/image1.png",
    },
    {
      id: "Ken B. Lentejas",
      title: "Vice President for Internal Affairs",
      description:
        "Focused on improving student services and campus infrastructure",
      image: "/path/to/image1.png",
    },
    {
      id: "John Jefferson M. De Leon",
      title: "Vice President for External Affairs",
      description:
        "Ensuring responsible management of student government resources",
      image: "/path/to/image1.png",
    },
    {
      id: "Daniel D. Camacláng",
      title: "Secretary General",
      description:
        "Committed to clear and open communication with the student body",
      image: "/path/to/image1.png",
    },
    {
      id: "Samantha Natalie Fattalo",
      title: "Treasurer",
      description:
        "Creating engaging and inclusive campus events for all students",
      image: "/path/to/image1.png",
    },
    {
      id: "Cristina V. Domingo",
      title: "Auditor",
      description:
        "Building bridges between student organizations and campus leadership",
      image: "/path/to/image1.png",
    },
    {
      id: "Kenn Harvey F. Brocoy",
      title: "Public Relations Officer",
      description:
        "Building bridges between student organizations and campus leadership",
      image: "/path/to/image1.png",
    },
  ];

  const handleView = (id: string) => {
    console.log("Viewing document:", id);
  };

  return (
    <section id="officers" className="officer-container">
      <div className="officer-layout">
        <div className="document-texts">
          <Typography size="text-md" color="text-dark">
            Executive Officers
          </Typography>
          <Typography size="text-light" color="text-ghost">
            This are the executive officers
          </Typography>
        </div>
        <div className="officer-grid">
          {officer.map((officer) => (
            <OfficerCard
              key={officer.id}
              id={officer.id}
              title={officer.title}
              description={officer.description}
              image={officer.image}
              variant="default"
              onClick={() => handleView(officer.id)}
            />
          ))}
        </div>
        <div className="page">

          <button className="page-info">
            View All
          </button>

        </div>
      </div>
    </section>
  );
}
