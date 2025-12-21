import Hero from "../main-section/Main.tsx"
import Events from "../../layout/events-section/events";
import Announcement from "../../layout/announcement-section/Announcement";
import About from "../../layout/about-section/About";
import Officer from "../../layout/officer-layout/Officer";
import Document from "../../layout/document-section/Document";

export default function MainPage() {
    return(
        <>
            <section id="home"><Hero /></section>
            <section id="csgBulletin"><Announcement /></section>
            <section id="documents"><Document /></section>
            <section id="events"><Events /></section>
            <section id="about"><About /></section>
            <section id="officers"><Officer /></section>
        </>
    );
}