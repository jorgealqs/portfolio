const { markup, Component, xml } = owl;

export class About extends Component {
    static template = xml`
    <section id="about" class="bg-white py-12 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <!-- Columna izquierda -->
            <div data-aos="fade-right">
                <h2 class="text-5xl font-extrabold text-gray-900 mb-4">Sobre mí</h2>
                <p class="text-xl text-gray-700 font-medium mb-6">
                    <t t-out="about.title"/>
                </p>
                <h3 class="text-lg font-semibold text-gray-800 mb-3">🛠️ Tecnologías que uso:</h3>
                <div class="flex flex-wrap gap-4 items-center mb-6">
                    <t t-out="about.tech"/>
                </div>
            </div>

            <!-- Columna derecha -->
            <div data-aos="fade-left">
                <t t-out="about.subtitle"/>
            </div>
        </div>
    </section>
    `;

    static props = {
        about: Object,
    }

    setup() {
        this.about = {
            ...this.props.about,
            title: markup(this.props.about.title),
            subtitle: markup(this.props.about.subtitle),
            tech: markup(this.props.about.tech),
        };
    }
}