export function scrollToSection(id: string) {
  // Fonction pour gérer le défilement vers une section spécifique
  const element = document.getElementById(id)

  if (element) {
    // Si nous sommes sur la même page, défilement fluide
    element.scrollIntoView({ behavior: "smooth" })
  }
}

