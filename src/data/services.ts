import type { Service } from '../models/service'

/** Serviços oferecidos. A ordem aqui é a ordem exibida na Home. */
export const services: Service[] = [
  {
    id: 'sites',
    title: 'Sites e páginas',
    description:
      'Sites institucionais, portfólios e páginas de apresentação. React e TypeScript, responsivo de verdade (do 320px ao desktop), leve e sem depender de template pronto.',
  },
  {
    id: 'painels',
    title: 'Painéis e telas que consomem API',
    description:
      'Interfaces que leem e escrevem em APIs REST: listagens, filtros, formulários, login. Com os estados que todo sistema tem — carregando, vazio, erro — tratados direito.',
  },
  {
    id: 'sistemas',
    title: 'Front-end de sistemas internos',
    description:
      'Telas de gestão: cadastros, pedidos, chamados, permissão por perfil. É o tipo de interface que venho construindo nos meus próprios projetos — gestão de pedidos, gincanas em equipes e serviços de TI.',
  },
  {
    id: 'manutencao',
    title: 'Manutenção e evolução de interfaces',
    description:
      'Ajustes e correções em projeto que já existe: responsividade quebrada no mobile, layout, acessibilidade, tela que não trata erro. Mudança pontual, sem reescrever o que já funciona.',
  },
]
