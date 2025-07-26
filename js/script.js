// Dados dos módulos da trilha de 80 horas - TODOS LIBERADOS
const modules = [
    {
        id: 1,
        title: "Fundamentos Avançados do Shopify",
        duration: "4 horas",
        description: "Compreenda profundamente a arquitetura da plataforma e configure uma loja com padrões profissionais.",
        lessons: [
            { title: "Arquitetura e Ecossistema Shopify", duration: "1h" },
            { title: "Configuração Profissional de Loja", duration: "1h" },
            { title: "Gestão de Usuários e Permissões", duration: "1h" },
            { title: "Backup e Versionamento", duration: "1h" }
        ]
    },
    {
        id: 2,
        title: "Liquid Programming Avançado",
        duration: "4 horas",
        description: "Domine a linguagem de template do Shopify e crie customizações avançadas com performance otimizada.",
        lessons: [
            { title: "Sintaxe e Estruturas Liquid", duration: "1h" },
            { title: "Objetos Globais e Contextos", duration: "1h" },
            { title: "Liquid Avançado e Performance", duration: "1h" },
            { title: "Projetos Práticos com Liquid", duration: "1h" }
        ]
    },
    {
        id: 3,
        title: "Desenvolvimento de Temas Profissionais",
        duration: "4 horas",
        description: "Crie temas responsivos e profissionais com CSS avançado, JavaScript e otimização mobile-first.",
        lessons: [
            { title: "Estrutura e Arquitetura de Temas", duration: "1h" },
            { title: "CSS Avançado e Preprocessadores", duration: "1h" },
            { title: "JavaScript e Interatividade", duration: "1h" },
            { title: "Responsividade e Mobile-First", duration: "1h" }
        ]
    },
    {
        id: 4,
        title: "Gestão Avançada de Produtos",
        duration: "4 horas",
        description: "Organize catálogos complexos, trabalhe com metafields e otimize mídia para performance máxima.",
        lessons: [
            { title: "Estrutura de Produtos e Variantes", duration: "1h" },
            { title: "Metafields e Dados Customizados", duration: "1h" },
            { title: "Importação e Exportação em Massa", duration: "1h" },
            { title: "Otimização de Imagens e Mídia", duration: "1h" }
        ]
    },
    {
        id: 5,
        title: "Coleções e Navegação Avançada",
        duration: "4 horas",
        description: "Implemente sistemas de navegação intuitivos com filtros avançados e otimização de performance.",
        lessons: [
            { title: "Estratégias de Coleções", duration: "1h" },
            { title: "Filtros e Busca Avançada", duration: "1h" },
            { title: "Navegação e Menu Dinâmicos", duration: "1h" },
            { title: "Performance de Coleções", duration: "1h" }
        ]
    },
    {
        id: 6,
        title: "Checkout e Conversão Avançada",
        duration: "4 horas",
        description: "Maximize conversões com otimização de checkout, upsell estratégico e testes A/B.",
        lessons: [
            { title: "Otimização do Checkout", duration: "1h" },
            { title: "Upsell e Cross-sell Estratégicos", duration: "1h" },
            { title: "Carrinho Dinâmico e Ajax", duration: "1h" },
            { title: "Testes A/B e Otimização", duration: "1h" }
        ]
    },
    {
        id: 7,
        title: "Apps e Integrações Estratégicas",
        duration: "4 horas",
        description: "Selecione apps estratégicos, integre com ERPs e desenvolva automações customizadas.",
        lessons: [
            { title: "Ecossistema de Apps Shopify", duration: "1h" },
            { title: "Integrações com ERPs", duration: "1h" },
            { title: "Marketing Automation", duration: "1h" },
            { title: "APIs e Integrações Customizadas", duration: "1h" }
        ]
    },
    {
        id: 8,
        title: "SEO Técnico e Avançado",
        duration: "4 horas",
        description: "Implemente SEO técnico avançado, schema markup e otimize para Core Web Vitals.",
        lessons: [
            { title: "SEO Técnico Fundamental", duration: "1h" },
            { title: "Schema Markup e Rich Snippets", duration: "1h" },
            { title: "Performance e Core Web Vitals", duration: "1h" },
            { title: "SEO Internacional e Multiidioma", duration: "1h" }
        ]
    },
    {
        id: 9,
        title: "Analytics e Métricas Avançadas",
        duration: "4 horas",
        description: "Configure tracking avançado com GA4, GTM e implemente stack completo de analytics.",
        lessons: [
            { title: "Google Analytics 4 Profundo", duration: "1h" },
            { title: "Google Tag Manager Avançado", duration: "1h" },
            { title: "Métricas de Negócio e KPIs", duration: "1h" },
            { title: "Ferramentas de Analytics Complementares", duration: "1h" }
        ]
    },
    {
        id: 10,
        title: "Marketing Digital Integrado",
        duration: "4 horas",
        description: "Domine publicidade em redes sociais, Google Ads e desenvolva estratégias de email marketing.",
        lessons: [
            { title: "Facebook e Instagram Ads", duration: "1h" },
            { title: "Google Ads e Shopping", duration: "1h" },
            { title: "Email Marketing Avançado", duration: "1h" },
            { title: "Influencer e Affiliate Marketing", duration: "1h" }
        ]
    },
    {
        id: 11,
        title: "Experiência do Cliente Avançada",
        duration: "4 horas",
        description: "Crie experiências personalizadas com segmentação avançada e programas de fidelidade.",
        lessons: [
            { title: "Personalização e Segmentação", duration: "1h" },
            { title: "Atendimento ao Cliente Integrado", duration: "1h" },
            { title: "Programa de Fidelidade", duration: "1h" },
            { title: "Avaliações e Prova Social", duration: "1h" }
        ]
    },
    {
        id: 12,
        title: "Logística e Fulfillment",
        duration: "4 horas",
        description: "Otimize estratégias de frete, gestão de estoque e processos de pós-venda.",
        lessons: [
            { title: "Estratégias de Frete", duration: "1h" },
            { title: "Gestão de Estoque Avançada", duration: "1h" },
            { title: "Dropshipping e Fulfillment", duration: "1h" },
            { title: "Devoluções e Trocas", duration: "1h" }
        ]
    },
    {
        id: 13,
        title: "Pagamentos e Fintech",
        duration: "4 horas",
        description: "Configure gateways avançados, prevenção de fraudes e opções de financiamento.",
        lessons: [
            { title: "Gateways de Pagamento Avançados", duration: "1h" },
            { title: "Prevenção de Fraudes", duration: "1h" },
            { title: "Parcelamento e Financiamento", duration: "1h" },
            { title: "Gestão Financeira", duration: "1h" }
        ]
    },
    {
        id: 14,
        title: "Internacionalização",
        duration: "4 horas",
        description: "Expanda para mercados globais com Shopify Markets e estratégias de localização.",
        lessons: [
            { title: "Shopify Markets", duration: "1h" },
            { title: "Localização de Conteúdo", duration: "1h" },
            { title: "Logística Internacional", duration: "1h" },
            { title: "Marketing Global", duration: "1h" }
        ]
    },
    {
        id: 15,
        title: "Shopify Plus e Enterprise",
        duration: "4 horas",
        description: "Explore recursos exclusivos do Plus e implemente soluções enterprise escaláveis.",
        lessons: [
            { title: "Recursos Exclusivos do Plus", duration: "1h" },
            { title: "Arquitetura Enterprise", duration: "1h" },
            { title: "Integrações Enterprise", duration: "1h" },
            { title: "Governança e Compliance", duration: "1h" }
        ]
    },
    {
        id: 16,
        title: "Automação e Workflows",
        duration: "4 horas",
        description: "Crie automações complexas com Shopify Flow, Zapier e scripts customizados.",
        lessons: [
            { title: "Shopify Flow Avançado", duration: "1h" },
            { title: "Zapier e Integrações", duration: "1h" },
            { title: "Scripts e Automações Customizadas", duration: "1h" },
            { title: "Otimização de Processos", duration: "1h" }
        ]
    },
    {
        id: 17,
        title: "Segurança e Compliance",
        duration: "4 horas",
        description: "Implemente medidas de segurança robustas e garanta compliance com regulamentações.",
        lessons: [
            { title: "Segurança da Loja", duration: "1h" },
            { title: "LGPD e Privacidade", duration: "1h" },
            { title: "Conformidade PCI", duration: "1h" },
            { title: "Recuperação de Desastres", duration: "1h" }
        ]
    },
    {
        id: 18,
        title: "Performance e Otimização",
        duration: "4 horas",
        description: "Maximize performance da loja com monitoramento contínuo e troubleshooting avançado.",
        lessons: [
            { title: "Otimização de Velocidade", duration: "1h" },
            { title: "Monitoramento Contínuo", duration: "1h" },
            { title: "Escalabilidade", duration: "1h" },
            { title: "Solução de Problemas Avançada", duration: "1h" }
        ]
    },
    {
        id: 19,
        title: "Crescimento Acelerado e Inovação",
        duration: "4 horas",
        description: "Implemente táticas de crescimento acelerado e explore tecnologias emergentes.",
        lessons: [
            { title: "Estratégias de Crescimento Acelerado", duration: "1h" },
            { title: "Inovação em E-commerce", duration: "1h" },
            { title: "Marketplace e Canais", duration: "1h" },
            { title: "Sustentabilidade e ESG", duration: "1h" }
        ]
    },
    {
        id: 20,
        title: "Projeto Final e Certificação",
        duration: "4 horas",
        description: "Aplique todos os conhecimentos em um projeto real e obtenha sua certificação.",
        lessons: [
            { title: "Planejamento do Projeto", duration: "1h" },
            { title: "Implementação Prática", duration: "1h" },
            { title: "Revisão e Otimização", duration: "1h" },
            { title: "Apresentação e Certificação", duration: "1h" }
        ]
    }
];

// Estado da aplicação - TODOS OS MÓDULOS LIBERADOS
let appState = {
    completedModules: JSON.parse(localStorage.getItem('completedModules') || '[]'),
    currentModule: parseInt(localStorage.getItem('currentModule') || '1')
};

// Função para salvar estado
function saveState() {
    localStorage.setItem('completedModules', JSON.stringify(appState.completedModules));
    localStorage.setItem('currentModule', appState.currentModule.toString());
}

// Função para determinar status do módulo - TODOS DISPONÍVEIS
function getModuleStatus(moduleId) {
    if (appState.completedModules.includes(moduleId)) {
        return 'completed';
    } else {
        return 'available'; // TODOS MÓDULOS SEMPRE DISPONÍVEIS
    }
}

// Função para renderizar módulos
function renderModules() {
    const modulesGrid = document.getElementById('modulesGrid');
    if (!modulesGrid) return;

    modulesGrid.innerHTML = '';

    modules.forEach(module => {
        const status = getModuleStatus(module.id);
        const moduleCard = document.createElement('div');
        moduleCard.className = `module-card ${status}`;

        const completedLessons = JSON.parse(localStorage.getItem(`module-${module.id}-lessons`) || '[]');
        
        moduleCard.innerHTML = `
            <div class="module-header">
                <div class="module-icon ${status}">
                    ${status === 'completed' ? '✓' : module.id}
                </div>
                <div class="module-info">
                    <h4>${module.title}</h4>
                    <div class="module-duration">${module.duration}</div>
                </div>
            </div>
            <p class="module-description">${module.description}</p>
            <div class="module-lessons">
                ${module.lessons.map((lesson, index) => `
                    <div class="lesson-item ${completedLessons.includes(index) ? 'completed' : ''}">
                        <div class="lesson-number">${index + 1}</div>
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-duration">${lesson.duration}</div>
                    </div>
                `).join('')}
            </div>
            ${renderModuleButton(module.id, status)}
        `;

        modulesGrid.appendChild(moduleCard);
    });
}

// Função para renderizar botão do módulo
function renderModuleButton(moduleId, status) {
    if (status === 'completed') {
        return `<a href="modulos/modulo-${moduleId}.html" class="module-button completed">✓ Módulo Concluído</a>`;
    } else {
        return `<a href="modulos/modulo-${moduleId}.html" class="module-button start">Iniciar Módulo</a>`;
    }
}

// Função para atualizar barra de progresso
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!progressFill || !progressText) return;

    const completedCount = appState.completedModules.length;
    const totalModules = modules.length;
    const progressPercentage = (completedCount / totalModules) * 100;

    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `${completedCount} de ${totalModules} módulos concluídos`;
}

// Função para marcar módulo como concluído
function completeModule(moduleId) {
    if (!appState.completedModules.includes(moduleId)) {
        appState.completedModules.push(moduleId);
        appState.currentModule = Math.max(appState.currentModule, moduleId + 1);
        saveState();
        renderModules();
        updateProgress();
    }
}

// Função de inicialização
function init() {
    renderModules();
    updateProgress();
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Expor funções globalmente para uso em outras páginas
window.ShopifyTrail = {
    completeModule,
    getModuleStatus,
    modules,
    appState
};

