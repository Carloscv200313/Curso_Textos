interface Project {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    link: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Simulador M.R.U.V.",
        description: "Se creó un programa en Python utilizando Tkinter, Matplotlib y NumPy para simular y visualizar el desplazamiento de un móvil en MRUV. El software incluye una interfaz gráfica, opciones de simulación y una calculadora de magnitudes físicas.",
        image: "/proyectos/1.png",
        tags: ["Python"],
        link: "https://github.com/Carloscv200313/pyto_progrmacion_MRUV"
    },
    {
        id: 2,
        title: "Algoritmo Colonia de Hormiga",
        description: "Se implementó el Algoritmo de Colonia de Hormigas (ACO) en Python para optimizar el recorrido mínimo entre los cruces de las avenidas de Villa El Salvador, demostrando eficacia en problemas de optimización de rutas urbanas y redes complejas.",
        image: "/proyectos/5.png",
        tags: ["Python"],
        link: "https://github.com/Carloscv200313/Algortimo_de_Hormigas"
    },
    {
        id: 3,
        title: "Sistema de Tienda en Java-MySQL",
        description: "Se desarrolló un sistema de tienda virtual en Java con NetBeans y MySQL, que gestiona productos, clientes y pedidos. Incluye visualización de productos, gestión de inventarios, procesamiento de compras y administración de cuentas de usuario.",
        image: "/proyectos/3.png",
        tags: ["Java","MySQL"],
        link: "https://github.com/Carloscv200313/pyto_progrmacion_MRUV"
    },
    {
        id: 4,
        title: "Reconocimiento Facial",
        description: "Se desarrolló un sistema de reconocimiento facial en Python con OpenCV y el modelo LBPH para identificar rostros en tiempo real. Utiliza una base de datos local y es eficaz para aplicaciones de seguridad y autenticación de usuarios.",
        image: "/proyectos/6.png",
        tags: ["Python"],
        link: "https://github.com/Carloscv200313/Algortimo_de_Hormigas"
    },
    {
        id: 5,
        title: "Sistema de alarma en Proteus",
        description: "Se diseñó un sistema de entrada con cerradura y alarma en Proteus, que requiere un código de tres cifras. Si se ingresan tres errores consecutivos, se activa una alarma, ofreciendo un nivel básico de seguridad.",
        image: "/proyectos/4.png",
        tags: ["Python","Arduino"],
        link: "https://github.com/Carloscv200313/pyto_progrmacion_MRUV"
    },
    {
        id: 6,
        title: "Clon de página Web de KFC",
        description: "Se desarrolló una página web para KFC usando HTML y CSS, con secciones como el menú, información de la empresa y contacto. El diseño visual asegura una experiencia de navegación atractiva y coherente con la marca.",
        image: "/proyectos/2.png",
        tags: ["HTML","CSS","Javascript"],
        link: "https://github.com/Carloscv200313/Algortimo_de_Hormigas"
    },
]