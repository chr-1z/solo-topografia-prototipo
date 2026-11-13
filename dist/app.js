const themes = {
  1: { name: 'Executivo', eyebrow: 'Topografia • Georreferenciamento • Engenharia', title: 'Precisão que dá <em>direção</em> a grandes projetos.', copy: 'Do primeiro ponto em campo à entrega técnica final, transformamos o território em informação segura para decisões melhores.' },
  2: { name: 'Engenharia escura', eyebrow: 'Dados confiáveis. Obras seguras.', title: 'Engenharia que mede. <em>Precisão</em> que comprova.', copy: 'Tecnologia de campo, equipe especializada e processos rigorosos para reduzir riscos em cada etapa.' },
  3: { name: 'Editorial premium', eyebrow: 'Experiência, método e tecnologia', title: 'Conhecer o terreno é o primeiro passo para <em>ir mais longe.</em>', copy: 'Soluções de topografia e georreferenciamento desenhadas para a realidade de cada projeto.' },
  4: { name: 'Cartográfico', eyebrow: 'Coordenadas precisas • decisões seguras', title: 'Transformamos território em <em>inteligência.</em>', copy: 'Levantamentos, mapas e dados geográficos que orientam decisões públicas e privadas.' },
  5: { name: 'Industrial', eyebrow: 'Controle técnico para infraestrutura', title: 'Nenhuma grande obra começa sem um <em>ponto exato.</em>', copy: 'Topografia aplicada à construção, estradas, loteamentos e projetos de alta complexidade.' },
  6: { name: 'Território', eyebrow: 'Engenharia conectada ao território', title: 'Precisão em campo. <em>Segurança</em> no caminho.', copy: 'Da propriedade rural à infraestrutura urbana, entregamos clareza para o seu projeto avançar.' },
  7: { name: 'Minimalista', eyebrow: 'Solo Topografia e Georreferenciamento', title: 'Precisão técnica para <em>decisões seguras.</em>', copy: '19 anos de experiência transformando medições complexas em respostas claras.' }
};

const root = document.documentElement;
const nameEl = document.querySelector('.theme-name');
const titleEl = document.querySelector('.hero-title');
const eyebrowEl = document.querySelector('.hero-eyebrow');
const copyEl = document.querySelector('.hero-copy');

function setTheme(id) {
  const theme = themes[id];
  if (!theme) return;
  root.dataset.theme = id;
  nameEl.textContent = theme.name;
  titleEl.innerHTML = theme.title;
  eyebrowEl.textContent = theme.eyebrow;
  copyEl.textContent = theme.copy;
  document.querySelectorAll('[data-theme-button]').forEach(button => {
    const active = button.dataset.themeButton === String(id);
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', active);
  });
  localStorage.setItem('solo-theme', id);
}

document.querySelectorAll('[data-theme-button]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.themeButton)));
document.querySelector('.menu-toggle').addEventListener('click', event => {
  const header = document.querySelector('.site-header');
  const open = header.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded', open);
});

setTheme(localStorage.getItem('solo-theme') || '1');
