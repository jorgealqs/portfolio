const { Component, useState, xml } = owl;

export class Projects extends Component {
    static props = {
        projects: Object,
    };

    static template = xml`
        <section class="max-w-7xl mx-auto px-6 py-14" id="projects">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Proyectos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <t t-foreach="props.projects" t-as="project" t-key="project.title">
                    <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                        <!-- Para aún más grande -->
                        <img t-att-src="project.image || 'https://via.placeholder.com/400x200?text=Proyecto'" alt="project.title" class="w-full h-64 object-cover cursor-pointer transition duration-300 hover:scale-105"
                        t-on-click="() => openModal(project.image || 'https://via.placeholder.com/400x200?text=Proyecto')" />
                        <div class="p-6 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 class="text-xl font-semibold text-yellow-500 mb-2">
                                    <t t-esc="project.title" />
                                </h3>
                                <p class="text-gray-700 text-sm mb-4 leading-relaxed">
                                    <t t-esc="project.description" />
                                </p>
                            </div>
                            <div class="mt-auto flex flex-wrap gap-3">
                                <a t-if="project.link" t-att-href="project.link" target="_blank"
                                    class="inline-block bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-yellow-600 transition">
                                    Ver más
                                </a>
                                <a t-if="project.github" t-att-href="project.github" target="_blank"
                                    class="inline-block border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </t>
            </div>
        </section>
        <t t-if="state.selectedImage">
            <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" t-on-click="closeModal">
                <img t-att-src="state.selectedImage" class="max-w-3xl max-h-[80vh] rounded-lg shadow-lg" />
            </div>
        </t>
    `;

    setup() {
        this.state = useState({
            selectedImage: null,
        });

        this.openModal = (src) => {
            this.state.selectedImage = src;
        };

        this.closeModal = () => {
            this.state.selectedImage = null;
        };
    }
}