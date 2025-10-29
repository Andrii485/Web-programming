const KEY = 'theme';

function systemPrefersDark() {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(theme) {
    const root = document.documentElement;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
}

export function initThemeToggle() {
    const saved = localStorage.getItem(KEY);
    const theme = saved ?? (systemPrefersDark() ? 'dark' : 'light');
    applyTheme(theme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem(KEY, next);
        applyTheme(next);
    });
}