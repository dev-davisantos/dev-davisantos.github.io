import type { ProcessStep } from '../models/process'

/** "Como eu trabalho" — ordem exibida na Home. */
export const processSteps: ProcessStep[] = [
  {
    id: 'entender',
    title: 'Entender o que a tela precisa fazer',
    description:
      'Antes de escrever componente: qual o objetivo da página, quem usa, qual dado entra e qual sai. Se for consumir API, olho o contrato, o formato do retorno e o que acontece quando a requisição falha.',
  },
  {
    id: 'organizar',
    title: 'Organizar antes de codar',
    description:
      'Estruturo as telas, o que se repete vira componente e o caminho do dado fica claro. Separo o que é layout, o que é dado e o que é estado de tela.',
  },
  {
    id: 'construir',
    title: 'Construir do simples para o complexo',
    description:
      'Primeiro a estrutura e o responsivo funcionando; depois os estados (carregando, vazio, erro); por último o acabamento visual e as microinterações.',
  },
  {
    id: 'integrar',
    title: 'Integrar e testar em tela real',
    description:
      'Conecto na API e testo no celular de verdade, com dado ruim, texto longo e resposta lenta. Ajusto contraste, foco, navegação por teclado e o que quebra em tela pequena.',
  },
  {
    id: 'entregar',
    title: 'Entregar de um jeito que o próximo entenda',
    description:
      'Componentes com nomes claros, conteúdo separado do layout, README dizendo como rodar e onde mexer, e histórico de commits descritivo.',
  },
]
