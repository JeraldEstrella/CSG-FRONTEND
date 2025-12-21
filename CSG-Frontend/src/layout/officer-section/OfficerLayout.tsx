import DropDown from "../../components/dropdown/DropDown";
import OfficerCard from "../../components/officer-card/Officer-card";
import Typography from "../../components/typography/Typography";
import './officerLayout.css'

export default function OfficerLayout(){
    const executiveofficer = [
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

    const boardmembers = [
        {
        id: "Jimmuel D. Palma",
        title: "GAD Representative",
        description:
            "Passionate advocate for student rights and campus transparency",
        image: "/path/to/image1.png",
        },
        {
        id: "Angela C. Regidor",
        title: "SAP Business Administration",
        description:
            "Focused on improving student services and campus infrastructure",
        image: "/path/to/image1.png",
        },
        {
        id: "Charles Derrick A. Garcia",
        title: "SAP Computer Science",
        description:
            "Ensuring responsible management of student government resources",
        image: "/path/to/image1.png",
        },
        {
        id: "Juanita Anjela M. Rivas",
        title: "SAP Education",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Mikaella Kathe Palileo",
        title: "SAP Entrepreneurship",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Misael A. Ponferrada",
        title: "SAP Hospitality Management",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Ivan P. Duran",
        title: "SAP Information Technology",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Chris John Labalan",
        title: "SAP Journalism",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Lorie P. Salude",
        title: "SAP Office Admininstration",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
        {
        id: "Mary Eunice D. Ramos",
        title: "SAP Psychology",
        description:
            "Committed to clear and open communication with the student body",
        image: "/path/to/image1.png",
        },
    ];

    const RIAC = [
        "Rica Babes B. Delos Reyes",
        "Craven Mish Lorraine L. Norbe",
        "Chieko M. Lantajo",
        "Ivan Reniel H. Amangca",
        "Loubert L. Apin",
        "Carmella P. Cayetano",
        "Marvilyn G. Frias",
        "Kimverly S. Mina",
    ];

    const COEXA = [
        "Dean Levi's G. Aquino",
        "Allexzeus Marvel C. Padilla",
        "Juria Mae N. Dela Cerna",
        "Ryren Hagos",
        "Juvert V. Vista",
    ];

    const CCAA = [
        "Hans Christian O. Ancierto",
        "Anjon-Lores E. Cañares",
        "Jay Ar V. Rondina",
        "Georgie May G. Tunay",
        "Keith Owen B. Silva",
    ];

    const SOCENVI = [
        "Jennifer Nazarenoina",
        "Ralfh Dharren Molina",
    ];

    const CREATIVES = [
        "",
    ];

    const CSAC = [
        "",
    ];

    const SECRETARIAT = [
        "Ishra Firreli B. Fernando",
        "Ma. Cristina Hernandez",
        "Minea Sabina M. Feliciano",
        "Jose Angelo Bitanga",
        "Gwen Marinie Paciente",
        "Ariane Nicole D. Comedia",
        "Zachariah Sydney U. Babon",
    ];

    const CWD = [
        "Ralph Kenneth B. Perez",
        "Jerald D. Estrella",
        "Taisei Domingo",
        "Lorenz E. Tuboro",
        "John Harold R. Magma",
        "Gerald D. Alansalon",
    ];

    const execOffPastYr = [
        {
        id: "Rica Babes B. Delos Reyes",
        title: "CSG President",
        },
        {
        id: "Neal Brian M. Martija",
        title: "Vice President for Internal Affairs",
        },
        {
        id: "Vench Kyla C. Ababon",
        title: "Vice President for External Affairs",
        },
        {
        id: "Ednalyn Kaye B. Hamili",
        title: "Secretary General",
        },
        {
        id: "Justine Grace C. Aleman",
        title: "Treasurer",
        },
        {
        id: "Jasmine O. Ramos",
        title: "Auditor",
        },
        {
        id: "Marvin E. Apawan",
        title: "Public Relations Officer",
        },
    ];

    const boardMemPastYr = [
        {
        id: "Ma. Nicole E. Valenzuela",
        title: "SAP Business Administration",
        },
        {
        id: "Johnny S. De Asis Jr.",
        title: "SAP Computer Science",
        },
        {
        id: "Hannah Coleen M. Marteriz",
        title: "SAP Education",
        },
        {
        id: "Jhomari Kenshin P. Sarte",
        title: "SAP Entrepreneurship",
        },
        {
        id: "Mary Carmelemn H. Catoltol",
        title: "SAP Hospitality Management",
        },
        {
        id: "Sarah Bernalte",
        title: "SAP Information Technology",
        },
        {
        id: "Allen Malabanan",
        title: "SAP Journalism",
        },
        {
        id: "Chloe O. Regalado",
        title: "SAP Office Admininstration",
        },
        {
        id: "Hans Christian O. Ancierto",
        title: "SAP Psychology",
        },
    ];

    const handleView = (id: string) => {
        console.log("Viewing document:", id);
    };

    return(
        <div className="officer-layout-container">
            <div className="officer-layout-layout">
                <div className="document-texts">
                    <Typography size="text-md" color="text-dark">
                        Officers
                    </Typography>
                    <Typography size="text-sm" color="text-ghost">
                        Executive Officers
                    </Typography>
                </div>

                <div className="officer-grid">
                    {executiveofficer.map((officer) => (
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
                
                <div className="document-texts">
                    <Typography size="text-sm" color="text-ghost">
                        Board Members
                    </Typography>
                </div>

                <div className="boards-grid">
                    {boardmembers.map((officer) => (
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

                <div className="document-texts">
                    <Typography size="text-sm" color="text-ghost">
                        Committees
                    </Typography>
                </div>
                
                <div className="committees">
                    <DropDown 
                        title="Rules and Internal Affairs Committee" 
                        members={RIAC} 
                    />
                    <DropDown 
                        title="Committee on External Affairs" 
                        members={COEXA} 
                    />
                    <DropDown 
                        title="Committee on Culture, Arts and Athletics" 
                        members={CCAA} 
                    />
                    <DropDown 
                        title="Social and Environmental Awareness Committee" 
                        members={SOCENVI} 
                    />
                    <DropDown 
                        title="Committee on Creatives" 
                        members={CREATIVES} 
                    />
                    <DropDown 
                        title="Committee on Student Affairs and Concern" 
                        members={CSAC} 
                    />
                    <DropDown 
                        title="Secretariat Committee" 
                        members={SECRETARIAT} 
                    />
                    <DropDown 
                        title="Committee on Web Development" 
                        members={CWD} 
                    />
                </div>
                
                <div className="document-texts">
                    <Typography size="text-md" color="text-dark">
                        Academic Year 2024-2025
                    </Typography>
                    <Typography size="text-sm" color="text-ghost">
                        Executive Officers
                    </Typography>
                </div>

                <div className="officer-grid">
                    {execOffPastYr.map((officer) => (
                        <OfficerCard
                            key={officer.id}
                            id={officer.id}
                            title={officer.title}
                            variant="default"
                            onClick={() => handleView(officer.id)}
                        />
                    ))}
                </div>
                
                <div className="document-texts">
                    <Typography size="text-sm" color="text-ghost">
                        Board Members
                    </Typography>
                </div>

                <div className="boards-grid">
                    {boardMemPastYr.map((officer) => (
                        <OfficerCard
                            key={officer.id}
                            id={officer.id}
                            title={officer.title}
                            variant="default"
                            onClick={() => handleView(officer.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}