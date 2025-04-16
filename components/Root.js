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
            <div class="pt-14 max-w-6xl mx-auto">
                <div id="hero"><Hero hero="state.profile.hero"/></div>
                <div id="about"><About about="state.profile.aboutMe"/></div>
                <div id="projects"><Projects projects="state.profile.projects"/></div>
                <div id="Contact"><Contact contact="state.profile.contact"/></div>
            </div>
            <Footer name="state.profile.name" tech="state.profile.footer"/>
        </div>
    `;

    setup() {
        this.state = useState({
            profile: null
        });

        onWillStart(async () => {
            const res = await fetch('./static/src/data/profile.json');
            this.state.profile = await res.json();
        });
    }
}