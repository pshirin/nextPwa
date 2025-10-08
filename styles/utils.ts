/**
 * Пересчёт макетных пикселей в реальные единицы экрана.
 * Автоматически использует dvh/dvw при наличии, иначе fallback на vh/vw.
 *
 * viewport device  (hight/weight)
 */

const vh = (px: number) => `calc(${px} * (var(--dvh-per-px, var(--vh-per-px))))`;
const vw = (px: number) => `calc(${px} * (var(--dvw-per-px, var(--vw-per-px))))`;

export { vh, vw };
