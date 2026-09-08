/**
 * Tailwind ↔ Figma bridge.
 *
 * Споживає preset, згенерований Style Dictionary з tokens.json
 * (`npm run build:tokens`). Завдяки цьому класи на кшталт
 * `bg-brand-primary`, `text-text-title`, `rounded-card-radius`
 * резолвляться у ті самі CSS-змінні (`var(--brand-primary)` ...),
 * що описані токенами з Figma Variables.
 *
 * Потрібен КРОК ЗБІРКИ Tailwind (CLI / PostCSS). У CDN-плейграунді
 * (`cdn.tailwindcss.com`) цей файл не читається — там конфіг задають
 * інлайн через глобал `tailwind.config` (див. приклад у README/скілі).
 *
 * Не забудь підключити згенеровані CSS-змінні один раз глобально:
 *   @import "./src/styles/tokens.css";
 */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  presets: [require('./src/styles/tailwind.tokens.cjs')],
};
