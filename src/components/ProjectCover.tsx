interface ProjectCoverProps {
  name: string
  /** Quando existir uma imagem real do projeto, ela é usada no lugar da capa gerada. */
  image?: string
}

/**
 * Capa do projeto. Enquanto não existe screenshot, o card mostra uma capa gerada
 * (formas geométricas + monograma), evitando imagem inventada.
 */
export function ProjectCover({ name, image }: ProjectCoverProps) {
  if (image) {
    return (
      <img
        src={image}
        alt={`Prévia do projeto ${name}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-linear-to-br from-navy-2 via-navy to-navy-deep"
        aria-hidden="true"
      />
      <div
        className="absolute -inset-x-6 top-1/2 h-px -rotate-12 bg-linear-to-r from-transparent via-green-bright/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -inset-x-6 top-[68%] h-px -rotate-12 bg-linear-to-r from-transparent via-gray-light/25 to-transparent"
        aria-hidden="true"
      />
      <span className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-semibold tracking-tight text-gray-light/80">
        {getInitials(name)}
      </span>
    </div>
  )
}

/** "Arena — Challenges Manager" -> "AC" */
function getInitials(name: string): string {
  return name
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}
