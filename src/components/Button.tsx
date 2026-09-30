import type { ComponentProps } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm'

const variants: Record<Variant, string> = {
  /* O corte no canto é o detalhe de marca; só é usado no botão de preenchimento. */
  primary: 'bg-accent text-white clip-corner-br hover:bg-accent-strong',
  outline: 'border border-line text-text hover:border-accent hover:text-accent-text',
}

interface LinkButtonProps extends ComponentProps<typeof Link> {
  variant?: Variant
}

/** Link estilizado como botão (navegação interna e links externos com `to`). */
export function LinkButton({ variant = 'primary', className = '', ...props }: LinkButtonProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
}

interface ExternalButtonProps extends ComponentProps<'a'> {
  variant?: Variant
}

/** Link externo estilizado como botão. */
export function ExternalButton({
  variant = 'outline',
  className = '',
  ...props
}: ExternalButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />
}
