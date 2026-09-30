export interface ProfileHighlight {
  id: string
  label: string
  value: string
}

export interface Profile {
  /** Marca principal. */
  brand: string
  name: string
  /** Codename pessoal. Usado como assinatura discreta (loading e rodapé). */
  codename: string
  role: string
  /** Linha de apresentação do hero. */
  headline: string
  /** Complemento do hero, em uma frase. */
  intro: string
  /** Parágrafos da seção "Sobre". */
  about: string[]
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
  /** Linhas curtas exibidas no card do hero (linguagens, ferramentas...). */
  highlights: ProfileHighlight[]
}
