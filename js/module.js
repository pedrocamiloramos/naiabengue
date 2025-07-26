// JavaScript para páginas de módulos individuais

// Estado do módulo atual
let currentModuleId = null;
let moduleState = {
    completedLessons: [],
    activities: {},
    notes: {}
};

// Função para inicializar módulo
function initModule(moduleId) {
    currentModuleId = moduleId;
    loadModuleState();
    setupEventListeners();
    updateModuleProgress();
    
    // Expandir primeira aula por padrão
    const firstLesson = document.querySelector('.lesson-card[data-lesson="0"]');
    if (firstLesson) {
        toggleLesson(firstLesson);
    }
}

// Função para carregar estado do módulo
function loadModuleState() {
    const savedState = localStorage.getItem(`module-${currentModuleId}-state`);
    if (savedState) {
        moduleState = JSON.parse(savedState);
    }
    
    // Restaurar checkboxes de atividades
    Object.keys(moduleState.activities).forEach(activityId => {
        const checkbox = document.querySelector(`input[data-activity="${activityId}"]`);
        if (checkbox) {
            checkbox.checked = moduleState.activities[activityId];
        }
    });
    
    // Restaurar notas
    Object.keys(moduleState.notes).forEach(lessonId => {
        const textarea = document.querySelector(`textarea[data-lesson="${lessonId}"]`);
        if (textarea) {
            textarea.value = moduleState.notes[lessonId];
        }
    });
}

// Função para salvar estado do módulo
function saveModuleState() {
    localStorage.setItem(`module-${currentModuleId}-state`, JSON.stringify(moduleState));
    
    // Salvar lista de aulas concluídas separadamente para uso na página principal
    localStorage.setItem(`module-${currentModuleId}-lessons`, JSON.stringify(moduleState.completedLessons));
}

// Função para configurar event listeners
function setupEventListeners() {
    // Cliques nos headers das aulas
    document.querySelectorAll('.lesson-header').forEach(header => {
        header.addEventListener('click', () => {
            const lessonCard = header.closest('.lesson-card');
            toggleLesson(lessonCard);
        });
    });
    
    // Botões de completar aula
    document.querySelectorAll('.complete-lesson-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lessonId = parseInt(e.target.dataset.lesson);
            completeLesson(lessonId);
        });
    });
    
    // Checkboxes de atividades
    document.querySelectorAll('input[data-activity]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const activityId = e.target.dataset.activity;
            moduleState.activities[activityId] = e.target.checked;
            saveModuleState();
        });
    });
    
    // Textareas de notas
    document.querySelectorAll('textarea[data-lesson]').forEach(textarea => {
        textarea.addEventListener('input', (e) => {
            const lessonId = e.target.dataset.lesson;
            moduleState.notes[lessonId] = e.target.value;
            saveModuleState();
        });
    });
}

// Função para alternar visibilidade da aula
function toggleLesson(lessonCard) {
    const isActive = lessonCard.classList.contains('active');
    
    // Fechar todas as outras aulas
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Alternar aula atual
    if (!isActive) {
        lessonCard.classList.add('active');
    }
}

// Função para completar aula
function completeLesson(lessonId) {
    if (!moduleState.completedLessons.includes(lessonId)) {
        moduleState.completedLessons.push(lessonId);
        saveModuleState();
        updateModuleProgress();
        
        // Atualizar botão
        const btn = document.querySelector(`button[data-lesson="${lessonId}"]`);
        if (btn) {
            btn.textContent = '✓ Aula Concluída';
            btn.disabled = true;
            btn.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        }
        
        // Verificar se módulo foi completado
        checkModuleCompletion();
    }
}

// Função para atualizar progresso do módulo
function updateModuleProgress() {
    const progressFill = document.getElementById('moduleProgressFill');
    const progressText = document.getElementById('moduleProgressText');
    
    if (!progressFill || !progressText) return;
    
    const totalLessons = document.querySelectorAll('.lesson-card').length;
    const completedCount = moduleState.completedLessons.length;
    const progressPercentage = (completedCount / totalLessons) * 100;
    
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `${completedCount}/${totalLessons} aulas concluídas`;
}

// Função para verificar conclusão do módulo
function checkModuleCompletion() {
    const totalLessons = document.querySelectorAll('.lesson-card').length;
    const completedCount = moduleState.completedLessons.length;
    
    if (completedCount === totalLessons) {
        // Marcar módulo como concluído no estado global
        if (window.ShopifyTrail) {
            window.ShopifyTrail.completeModule(currentModuleId);
        }
        
        // Mostrar card de conclusão
        const completionCard = document.getElementById('completionCard');
        if (completionCard) {
            completionCard.style.display = 'block';
            completionCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Função para obter ID do módulo da URL
function getModuleIdFromUrl() {
    const path = window.location.pathname;
    const match = path.match(/modulo-(\d+)\.html/);
    return match ? parseInt(match[1]) : 1;
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const moduleId = getModuleIdFromUrl();
    initModule(moduleId);
});

// Expor funções globalmente
window.ModulePage = {
    initModule,
    completeLesson,
    toggleLesson,
    currentModuleId,
    moduleState
};

