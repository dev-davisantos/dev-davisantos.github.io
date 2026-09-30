import { useEffect } from 'react'
import { site } from '../data/site'

interface PageMeta {
  /** Título da aba do navegador. */
  title: string
  description: string
}

/**
 * Define o título da página e as meta tags que mudam por rota.
 * Um `usePageMeta({ ... })` no topo de cada página é suficiente.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)

    if (site.url) {
      setMetaTag('property', 'og:url', `${site.url}${window.location.pathname}`)
    }
  }, [title, description])
}

function setMetaTag(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.setAttribute('content', value)
}
