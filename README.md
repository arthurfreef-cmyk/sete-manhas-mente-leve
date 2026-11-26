# Sete Manhas Mente Leve

Crie uma landing page de vendas completa, moderna e responsiva (mobile-first) em português do Brasil para um desafio digital chamado "7 Manhãs Mais Leves", no nicho de bem-estar e organização mental.

## OBJETIVO
Converter visitantes em compradores do desafio por R$ 27. Todos os botões de CTA devem apontar para uma constante CHECKOUT_URL editável no topo do código (valor inicial: "#checkout").

## ESTILO VISUAL
- Visual calmo, acolhedor e minimalista, transmitindo leveza e clareza mental
- Paleta: fundo off-white (#FAF7F2), verde sálvia (#8FAE9B) como cor principal, azul-céu suave (#CFE3EC) como secundária, e um pêssego/âmbar (#F4A261) APENAS para botões de CTA
- Texto principal em cinza-grafite (#2F3A3A)
- Tipografia: títulos em "Fraunces" (serifada suave) e corpo em "Inter", via Google Fonts
- Cantos bem arredondados, sombras suaves, muito espaço em branco, ícones lineares (lucide-react)
- Animações sutis de fade-in ao rolar a página. Nada exagerado.
- Botões CTA grandes, com contraste forte, cantos arredondados e leve efeito hover

## ESTRUTURA DAS SEÇÕES (nesta ordem)

1. **Barra superior fixa** com texto "Desafio de 7 dias • Começa assim que você entra" e botão CTA pequeno.

2. **Hero**
- Selo pequeno: "7 dias • 10 minutos por dia • No seu WhatsApp"
- H1: "7 manhãs para acordar com a cabeça mais leve"
- Subtítulo: "Um desafio simples, de 10 minutos por dia, para reduzir o caos mental e começar o dia com mais clareza, sem acordar às 5h e sem rotina impossível."
- Botão: "Quero começar o desafio por R$ 27"
- Abaixo do botão: "Acesso imediato • Garantia de 7 dias"
- Ilustração/mockup de celular com mensagens de WhatsApp do desafio (criar em CSS/HTML, estilo conversa)

3. **Identificação da dor** – título "Você se reconhece nisso?" com 5 itens com ícone:
- Acorda e a cabeça já está pensando em tudo ao mesmo tempo
- Pega o celular na cama e já começa o dia reagindo
- Sente que tem coisa demais para fazer e não sabe por onde começar
- Já tentou rotinas matinais gigantes e desistiu na segunda semana
- Termina o dia cansada(o) sem sentir que fez o que importava

4. **A virada** – título "O problema não é falta de disciplina". Texto: "É excesso de coisas na cabeça. Rotinas longas pedem energia que você não tem. O desafio 7 Manhãs Mais Leves faz o oposto: tira peso primeiro, depois organiza."

5. **Método D.L.P.** – 3 cards grandes:
- D = Descarregar: tire tudo da cabeça e coloque no papel
- L = Limpar: reduza estímulos e ruídos logo ao acordar
- P = Priorizar: escolha só o que realmente importa no dia

6. **Os 7 dias** – timeline vertical (ou cards em carrossel no mobile), cada dia com número, título e descrição curta:
- Dia 1: Descarga mental – 5 minutos para esvaziar a cabeça no papel
- Dia 2: Manhã sem tela – os primeiros 15 minutos sem celular
- Dia 3: Corpo antes da mente – respiração e alongamento de 3 minutos
- Dia 4: Regra das 3 – escolha apenas 3 prioridades
- Dia 5: Ambiente leve – organize 1 ponto que te incomoda
- Dia 6: Luz, água e movimento – o trio simples da energia
- Dia 7: Sua manhã mínima – monte sua rotina personalizada de 10 minutos
Abaixo: "Dia puxado? Todo dia tem uma versão de 2 minutos."

7. **O que você recebe** – lista com ícones de check e valor de cada item riscado:
- 7 missões diárias no seu WhatsApp (R$ 47)
- Guia do Desafio em PDF (R$ 27)
- Checklist de acompanhamento imprimível (R$ 17)
- Versão "dia ruim" de 2 minutos para cada missão (R$ 12)
- Mensagens de resgate se você perder um dia (R$ 7)
Total "Valor real: R$ 110" riscado

8. **Para quem é / Para quem não é** – duas colunas.
- É para: quem vive no piloto automático, quer começar simples, tem pouco tempo
- Não é para: quem busca tratamento clínico (o desafio não substitui psicólogo ou médico), quem quer resultados mágicos sem fazer nada

9. **Depoimentos** – 3 cards com placeholders claramente marcados como "[Substituir por depoimento real]", com foto circular genérica, nome e cidade.

10. **Oferta** – card central destacado:
- "De R$ 97 por apenas"
- "R$ 27" bem grande
- "pagamento único, acesso imediato"
- Botão CTA grande: "Quero começar agora"
- Selos: pagamento seguro, garantia de 7 dias

11. **Garantia** – ícone de selo, "Garantia incondicional de 7 dias. Se você fizer o desafio e sentir que não valeu, devolvemos 100% do seu dinheiro."

12. **FAQ** – accordion com 6 perguntas:
- Como recebo o desafio? (WhatsApp, com e-mail como alternativa)
- Quanto tempo por dia preciso? (Até 10 minutos, com versão de 2 minutos)
- E se eu perder um dia? (Recebe mensagem de resgate e retoma de onde parou)
- Precisa de algum material? (Papel e caneta)
- Isso substitui terapia? (Não. É um programa educativo nao bote os asteriscos nas copys e crie o checkout em outro slug

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sete-manhas-mente-leve.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eafbc431-376e-48ee-9c87-cb3191495146).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
