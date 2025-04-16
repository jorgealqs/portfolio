const { markup, Component, xml } = owl;

export class Contact extends Component {
    static template = xml`
        <section id="contact" class="bg-white px-6 py-20">
            <div class="max-w-2xl mx-auto text-center" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">Contacto</h2>
                <p class="text-lg text-gray-600 mb-10">
                    ¿Tienes una idea o proyecto en mente? <br />
                    No dudes en escribirme, ¡estaré encantado de ayudarte!
                </p>

                <div class="flex justify-center gap-8 text-yellow-500 text-3xl">
                    <t t-out="contact.all"/>
                </div>

                <div class="mt-10">
                    <a t-att-href="contact.email" class="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-yellow-600 transition">
                        Envíame un correo
                    </a>
                </div>
            </div>
        </section>
    `;

    static props = {
        contact: Object,
    }

    setup() {
        this.contact = {
            ...this.props.contact,
            all: this.props.contact.all ? markup(this.props.contact.all) : "",
        }
    }
}