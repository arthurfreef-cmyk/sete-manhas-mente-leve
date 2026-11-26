/** Configurações editáveis da página de vendas. */
export const CHECKOUT_URL = "/checkout";
export const PRICE = "R$ 27";

/** Prova social: deixe vazio ("") para ocultar. Nunca invente números. */
export const PROOF_COUNT = "";
export const PROOF_RATING = "";

/** Ligue somente se o bônus for real. */
export const BONUS_ATIVO = false;

/** Urgência: desligada por padrão. Só ligue se for verdadeira. */
export const COUNTDOWN_ATIVO = false;
export const COUNTDOWN_FIM = ""; // ex.: "2026-12-01T23:59:00-03:00"
export const VAGAS_ATIVO = false;
export const VAGAS_TEXTO = "";

export interface Testimonial { name: string; city: string; text: string; photo?: string; stars: number; print?: string }
/** Depoimentos reais. Se vazio, a seção não aparece no site publicado. */
export const TESTIMONIALS: Testimonial[] = [];
