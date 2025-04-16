const { markup, Component, xml } = owl;

export class Footer extends Component {
    static template = xml`
    <footer class="bg-gray-50 border-t border-gray-200 text-gray-700 text-sm py-10">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Columna 1: Marca -->
            <div class="flex items-center space-x-3">
                <i class="bi bi-code-slash text-yellow-500 text-xl"></i>
                <span class="text-2xl font-bold text-yellow-500 transition-all duration-300">
                    <t t-esc="props.name"/>
                </span>
            </div>

            <!-- Columna 2: Contacto -->
            <div>
                <h3 class="text-gray-800 font-semibold mb-2">Contacto</h3>
                <ul class="space-y-1">
                    <li>
                        <a href="mailto:joralquisi@hotmail.com" class="hover:text-yellow-500 transition">
                            <i class="bi bi-envelope-fill mr-2"></i> joralquisi@hotmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/573193662738" target="_blank" class="hover:text-yellow-500 transition">
                            <i class="bi bi-whatsapp mr-2"></i> +57 319 366 2738
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jorgealqs/" target="_blank" class="hover:text-yellow-500 transition">
                            <i class="bi bi-linkedin mr-2"></i> /jorgealqs
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jorgealqs" target="_blank" class="hover:text-yellow-500 transition">
                            <i class="bi bi-github mr-2"></i> /jorgealqs
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Columna 3: Tecnologías -->
            <div>
                <h3 class="text-gray-800 font-semibold mb-4">Tecnologías</h3>
                <div class="grid grid-cols-2 gap-3">
                    <t t-out="footer.tech"/>
                </div>
            </div>
        </div>
    </footer>
    `;

    static props = {
        name: String,
        tech: Object,
    }

    setup(){
        this.footer = {
            ...this.props.tech,
            tech: markup(this.props.tech.tech)
        };

    }
}