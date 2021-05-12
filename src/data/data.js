/**src/Data/data.js**/
const HEADER = "logo-full.svg";

const NAVBAR_DATA = [{
        id: 1,
        url: "/",
        label: "Início"
    },
    {
        id: 2,
        url: "#solutions",
        label: "Soluções"
    },
    {
        id: 3,
        url: "#about-us",
        label: "Sobre nós"
    },
    {
        id: 4,
        url: "#contact",
        label: "Contato"
    }
];

const MENU = "menu.svg";

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
            URL: "airlogo.svg",
            PAGE: "/solutions/air"
        },
        {
            LABEL: "FRETE MARÍTIMO",
            DESCRIPTION: "A equipe TMLOG possui amplo conhecimento e experiência neste modal, proporcionando soluções flexíveis e diversificadas.",
            URL: "sealogo.svg",
            PAGE: "/solutions/sea"
        },
        {
            LABEL: "FRETE RODOVIÁRIO",
            DESCRIPTION: "O serviço de transporte rodoviário da TMLOG proporciona tranquilidade e segurança para os seus negócios.",
            URL: "trucklogo.svg",
            PAGE: "/solutions/truck"
        },
        {
            LABEL: "LOGÍSTICA INTEGRADA",
            DESCRIPTION: "Através dos serviços de Logística Integrada TMLOG, você conta com profissionais aptos a gerenciar, transportar, armazenar e distribuir sua carga de forma eficiente e segura.",
            URL: "supply-chain.svg",
            PAGE: "/solutions/integrated"
        }
    ]
};

const ABOUT_DATA = {
    HEADING: "Quem somos?",
    TITLE: "Somos uma empresa com foco em ajudar os clientes a tomar as melhores decisões no ramo de agenciamento de cargas.",
    IMAGE_URL: "teamwork.svg",
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
            IMAGE_URL: "success.svg"
        },
        {
            TITLE: "Confiança",
            DESCRIPTION: "A base entre grandes negócios de sucesso está na confiança, por isso nós da TMLOG trabalhamos levando com seriedade total transparência em nossos serviços, oferecendo serviços dedicados aos nossos clientes, entregando nosso comprometimento as metas estabelecidas. Acreditamos que a confiança é o resultado de cada ação trabalhada em conjunto com seriedade e total interação em cada passo realizado.",
            IMAGE_URL: "trust.svg"
        },
        {
            TITLE: "Responsabilidade",
            DESCRIPTION: "Com o comprometimento sendo uma de nossas bases, temos também em nossas principais ações a inovação, entusiasmo e flexibilidade atribuídos em nossos conceitos.",
            IMAGE_URL: "responsiveness.svg"
        },
    ]
};

const CONTACT_DATA = {
    HEADING: "Entre em contato",
    DESCRIPTION: [
        "Preencha o formulário e receba uma cotação personalizada para a sua operação:",
        "Você pode garantir toda a eficiência e segurança que a sua operação logística precisa. Entre em contato com a TMLOG para entender como podemos ajudar.",
        "Preencha o formulário e nossa equipe fará contato com uma oferta que cumpra seu prazo e com valor adequado ao seu negócio."
    ],
    IMAGE_URL: "/form.svg",
    EMAIL_LIST: [
        "Nome Completo",
        "Endereço de Email",
        "Telefone",
        "Serviço desejado",
        "Qual a origem da carga?",
        "Qual o destino da carga?",
        "Descrição da carga",
        "Já realizou transporte internacional?",
        "Solicitar cotação"
    ],
    SERVICES_LIST: [
        "Selecionar",
        "Importação Marítima",
        "Exportação Marítima",
        "Importação Aérea",
        "Exportação Aérea",
        "Importação Rodoviária",
        "Exportação Rodoviária"
    ],
    IMPORTER_LIST: [
        "Sim",
        "Não"
    ]
};

const SOCIAL_DATA = {
    HEADING: "Nos encontre nas mídias sociais:",
    IMAGES_LIST: [
        "instagram.svg",
        "twitter.svg",
        "linkedin.svg",
    ]
};

const FOOTER_DATA = {
    IMAGE_URL: "logo-full-white.svg",
    DESCRIPTION: "Nossa logística movimentando seu negócio",
    IMAGE_LOCAL: "local.svg",
    CONTACT_DETAILS: {
        CITY: "SANTO ANDRÉ-SP",
        STREET: "Rua Giovanni Battista Pirelli, 270, Sala 207",
        STREET2: "Vila Homero Thon, CEP 09111-340",
        TEL: "+55 11 4978-5939",
        CEL: "+55 11 98342-0044",
        EMAIL: "contato@tmlog.com.br"
    },
    CREDITS: "Feito por Diego Augusto",
    CREDITS_EMAIL: "diaugustdev@gmail.com"
};

const MOCK_DATA = {
    HEADER,
    MENU,
    NAVBAR_DATA,
    HERO_SLOGAN,
    SOLUTIONS_DATA,
    ABOUT_DATA,
    VALUES_DATA,
    CONTACT_DATA,
    SOCIAL_DATA,
    FOOTER_DATA
};
export default MOCK_DATA;