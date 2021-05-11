/**src/Data/data.js**/
const HEADER = "static/logo-full.svg";

const NAVBAR_DATA = [{
        id: 1,
        url: "/",
        label: "Início"
    },
    {
        id: 2,
        url: "#services",
        label: "Soluções"
    },
    {
        id: 3,
        url: "#about-us",
        label: "Sobre nós"
    },
    {
        id: 4,
        url: "#footer",
        label: "Contato"
    }
];

const MENU = "static/menu.svg";

const HERO_SLOGAN = [{
        id: 1,
        text: "Nossa"
    },
    {
        id: 2,
        text: "Logística"
    },
    {
        id: 3,
        text: "Movimentando"
    },
    {
        id: 4,
        text: "Seu negócio."
    },
]

const SOLUTIONS_DATA = {
    HEADING: "Nossas Soluções",
    DESCRIPTION: "Do Sul ao Nordeste Brasileiro, do Brasil aos principais polos logísticos internacionais. Nossas soluções consolidadas em importação e exportação asseguram agilidade para intensificar e auxiliar a sua empresa na geração de negócios.",
    ALL_SOLUTIONS: "Saiba mais",
    SOLUTIONS_LIST: [{
            LABEL: "FRETE AÉREO",
            DESCRIPTION: "Com o transporte aéreo da TMLOG, sua empresa dispõe de muitos benefícios e ganha muito na relação distância x tempo.",
            URL: "static/airlogo.svg",
            PAGE: "/solutions/air"
        },
        {
            LABEL: "FRETE MARÍTIMO",
            DESCRIPTION: "A equipe TMLOG possui amplo conhecimento e experiência neste modal, proporcionando soluções flexíveis e diversificadas.",
            URL: "static/sealogo.svg",
            PAGE: "/solutions/sea"
        },
        {
            LABEL: "FRETE RODOVIÁRIO",
            DESCRIPTION: "O serviço de transporte rodoviário da TMLOG proporciona tranquilidade e segurança para os seus negócios.",
            URL: "static/trucklogo.svg",
            PAGE: "/solutions/truck"
        }
    ]
};

const ABOUT_DATA = {
    HEADING: "Quem somos?",
    TITLE: "Somos uma empresa com foco em ajudar os clientes a tomar as melhores decisões no ramo de agenciamento de cargas.",
    IMAGE_URL: "static/teamwork.svg",
    WHY_CHOOSE_US_LIST: [
        "Com o início das operações no Brasil em 2021 amparado por um time com expertise em agenciamento temos como objetivo oferecer aos nossos clientes análises de cada projeto integrando viabilidade e segurança.",
        "Nosso departamento de coordenação possui amplo conhecimento, gerenciando os embarques de ponta a ponta, fazendo com que os projetos fluam de forma ágil e eficaz de acordo com o perfil de cada cliente, prestando todo auxílio e suporte necessário do início ao fim do processo."
    ]
};
const VALUES_DATA = {
    HEADING: "Conheça nossos valores:",
    VALUES_LIST: [{
            TITLE: "Missão",
            DESCRIPTION: "Temos como missão em entregar aos nossos clientes transparência, agilidade e comprometimento em todos nossos serviços. Nossa equipe formada por profissionais com amplo conhecimento na aérea de logística internacional estão preparados para executarem a melhor solução logística para nossos clientes. Para nós é essencial que além de tornar os projetos rentáveis, proporcionar um ambiente seguro, responsável e protegido para todos nossos colaboradores e clientes.",
            IMAGE_URL: "static/success.svg"
        },
        {
            TITLE: "Confiança",
            DESCRIPTION: "A base entre grandes negócios de sucesso está na confiança, por isso nós da TMLOG trabalhamos levando com seriedade total transparência em nossos serviços, oferecendo serviços dedicados aos nossos clientes, entregando nosso comprometimento as metas estabelecidas. Acreditamos que a confiança é o resultado de cada ação trabalhada em conjunto com seriedade e total interação em cada passo realizado.",
            IMAGE_URL: "static/trust.svg"
        },
        {
            TITLE: "Responsabilidade",
            DESCRIPTION: "Com o comprometimento sendo uma de nossas bases, temos também em nossas principais ações a inovação, entusiasmo e flexibilidade atribuídos em nossos conceitos.",
            IMAGE_URL: "static/responsiveness.svg"
        },
    ]
};

const SOCIAL_DATA = {
    HEADING: "Find us on social media",
    IMAGES_LIST: [
        "images/facebook-icon.png",
        "images/instagram-icon.png",
        "images/whatsapp-icon.png",
        "images/twitter-icon.png",
        "images/linkedin-icon.png",
        "images/snapchat-icon.png"
    ]
};

const FOOTER_DATA = {
    DESCRIPTION: "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
    CONTACT_DETAILS: {
        HEADING: "Contact us",
        ADDRESS: "La trobe street docklands, Melbourne",
        MOBILE: "+1 61234567890",
        EMAIL: "nixalar@gmail.com"
    },
    SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
    SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
    HEADER,
    MENU,
    NAVBAR_DATA,
    HERO_SLOGAN,
    SOLUTIONS_DATA,
    ABOUT_DATA,
    VALUES_DATA,
    SOCIAL_DATA,
    FOOTER_DATA
};
export default MOCK_DATA;