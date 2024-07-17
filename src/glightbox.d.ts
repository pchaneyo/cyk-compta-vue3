declare module 'glightbox' {
    export default function Glightbox(config: GlightboxConfig): GlightboxInstance;
  
    interface GlightboxConfig {
      elements?: GlightboxElement[];
      // Autres options de configuration ici
      selector?: string;
    }
  
    interface GlightboxElement {
      href: string;
      type: string;
      // Autres propriétés d'élément ici
    }
  
    interface GlightboxInstance {
      open(): void;
      // Autres méthodes disponibles ici
    }
  }
  