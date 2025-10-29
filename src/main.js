import './styles/tw.css'
import "./styles/main.scss";

// import { initAbout } from '';
import { initThemeToggle } from './js/common/theme';   
import { initAbout } from './js/app/aboutPage';

initThemeToggle();

let cleanupFunction = () => {};
const page = document.body.dataset.page;

const routes = {
    about:    () => import('./js/app/aboutPage.js').then(m => m.initAbout()
        .then(abortFn => {
            cleanupFunction = abortFn;
            console.log('Ініціалізація About Page завершена. Функція скасування збережена.');
        })),
};

if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка ініціалізації сторінки:', err);
    });
}


// cleanupFunction();