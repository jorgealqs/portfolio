const { Component, useState, onWillStart, xml } = owl;

import { Hero } from "./Hero.js";
import { About } from "./About.js";
import { Navbar } from "./Navbar.js";
import { Projects } from "./Projects.js";
import { Contact } from "./Contact.js";
import { Footer } from "./Footer.js";

export class Root extends Component {
    static components = { Hero, About, Navbar, Projects, Contact, Footer };

    static template = xml`
        <div t-if="state.profile">
            <Navbar name="state.profile.name"/>
            <div class="pt-14">
                <div id="hero"><Hero hero="state.profile.hero"/></div>
                <div id="about"><About about="state.profile.aboutMe"/></div>
                <div id="projects"><Projects projects="state.projects"/></div>
                <div id="Contact"><Contact contact="state.profile.contact"/></div>
                <Footer name="state.profile.name" tech="state.profile.footer"/>
            </div>
        </div>
    `;

    setup() {
        this.state = useState({
            profile: null,
            projects: [
                {
                    title: "Portfolio Personal",
                    description: "Mi sitio web profesional hecho con OWL y TailwindCSS.",
                    link: "https://miportfolio.com"
                },
                {
                    title: "App de Tareas",
                    description: "Gestor de tareas fullstack con Odoo y Vue.",
                    link: "https://github.com/jorge/app-tareas"
                },
                {
                    title: "Clon de Netflix",
                    description: "Una app con streaming y login usando Firebase.",
                    link: "https://github.com/jorge/netflix-clone"
                },
            ]
        });

        onWillStart(async () => {
            const res = await fetch('./static/src/data/profile.json');
            this.state.profile = await res.json();
        });
    }
}