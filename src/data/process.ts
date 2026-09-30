import type { ProcessStep } from '../models/process'

/** "Como eu trabalho" — ordem exibida na Home. */
export const processSteps: ProcessStep[] = [
  {
    id: 'entender',
    title: 'Entender o problema inteiro',
    description:
      'Antes de escolher ferramenta: o que o sistema precisa fazer, quem usa, que dado entra e que dado sai. Se é um pedido, o que é um pedido válido? Se é um chamado, quando ele pode ser fechado?',
  },
  {
    id: 'modelar',
    title: 'Modelar antes de codar',
    description:
      'Domínio e banco primeiro: entidades, relacionamentos e regras. Depois o contrato da API e só então as telas. Isso evita retrabalho nas duas pontas.',
  },
  {
    id: 'construir',
    title: 'Construir em camadas',
    description:
      'Regra de negócio na entidade, service orquestrando, DTO definindo o contrato, controller expondo. Do backend para o front, cada parte com nome claro e responsabilidade única.',
  },
  {
    id: 'testar',
    title: 'Testar o caminho real',
    description:
      'Fluxo completo funcionando: do banco à tela, com dado ruim, texto longo, resposta lenta e erro tratado. Ajusto o que quebra em tela pequena e na navegação por teclado.',
  },
  {
    id: 'entregar',
    title: 'Entregar de um jeito que o próximo entenda',
    description:
      'Projeto organizado em camadas, README dizendo como rodar e onde mexer, e histórico de commits descritivo.',
  },
]
