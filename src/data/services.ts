import type { Service } from '../models/service'

/** Serviços oferecidos. A ordem aqui é a ordem exibida na Home. */
export const services: Service[] = [
  {
    id: 'apis',
    title: 'APIs REST em Java e Spring Boot',
    description:
      'API para o seu sistema: cadastro, pedidos, usuários, autenticação. Spring Boot com JPA em banco relacional, regras de negócio no domínio e endpoints documentados.',
  },
  {
    id: 'sistemas',
    title: 'Sistemas de gestão, do banco à tela',
    description:
      'Modelagem de dados, backend e as telas de uso: pedidos, chamados, cadastros e permissão por perfil. É o caminho que sigo nos meus próprios projetos.',
  },
  {
    id: 'seguranca',
    title: 'Autenticação e segurança de API',
    description:
      'Login com JWT, papéis e autorização por endpoint usando Spring Security. Cada parte do sistema acessa exatamente o que deve — e nada além disso.',
  },
  {
    id: 'interfaces',
    title: 'Telas que consomem API (React e TypeScript)',
    description:
      'O front do sistema: listagens, filtros, formulários e o tratamento de carregando, vazio e erro. Integrado ao contrato real da API.',
  },
  {
    id: 'manutencao',
    title: 'Manutenção e evolução de sistemas',
    description:
      'Projeto que já existe e precisa andar: corrigir regra, adicionar campo, ajustar tela, resolver comportamento inesperado. Mudança pontual, sem reescrever o que funciona.',
  },
]
