export default {
  loading: 'Chargement',
  hero: {
    title: 'Transformez vos reçus en données utiles',
    subtitle:
      'Automatisez et simplifiez la gestion de vos reçus et factures grâce à notre API OCR intelligente.',
    cta: 'Essayez gratuitement',
  },
  features: {
    accuracy: {
      title: 'Précision IA',
      desc: 'Extraction automatique fiable grâce à l’intelligence artificielle.',
      icon: 'psychology',
    },
    time: {
      title: 'Gain de temps',
      desc: 'Traitement instantané, zéro saisie manuelle.',
      icon: 'schedule',
    },
    easy: {
      title: 'Intégration facile',
      desc: 'API REST simple, réponses en JSON ou YAML.',
      icon: 'code',
    },
    security: {
      title: 'Sécurité & confidentialité',
      desc: 'Protection de vos données et conformité RGPD.',
      icon: 'security',
    },
  },
  demo: {
    title: 'Démonstration Express',
    request: 'Requête',
    response: 'Réponse',
    icon: 'terminal',
    code: {
      request:
        'POST /api/v1/scan\\n{\\n  "api_key": "votre_cle_api",\\n  "receipt": "recu.jpg"\\n}',
      response:
        '{\\n  "marchand": "Starbucks",\\n  "date": "2025-05-17",\\n  "total": "5.99 CAD",\\n  "articles": [\\n    {"nom": "Latte", "prix": 4.49},\\n    {"nom": "Cookie", "prix": 1.50}\\n  ]\\n}',
    },
  },
  steps: {
    title: 'Comment ça marche ?',
    one: {
      title: 'Étape 1',
      desc: 'Créez votre compte et obtenez votre clé API unique.',
      icon: 'vpn_key',
    },
    two: {
      title: 'Étape 2',
      desc: 'Envoyez votre reçu ou facture via l’API, en un simple appel POST.',
      icon: 'cloud_upload',
    },
    three: {
      title: 'Étape 3',
      desc: 'Recevez instantanément des données propres et exploitables.',
      icon: 'insights',
    },
  },
  ctaFinal: {
    title: 'Commencez maintenant',
    icon: 'arrow_forward',
  },
  faq: {
    title: 'Questions fréquentes',
    icon: 'help_outline',
    q1: {
      q: 'Quels types de reçus sont supportés ?',
      a: 'Tous les reçus et factures lisibles en photo ou PDF, couleur ou noir et blanc.',
      icon: 'receipt_long',
    },
    q2: {
      q: 'Comment obtenir une clé API ?',
      a: 'Créez un compte gratuitement puis accédez à votre espace API.',
      icon: 'vpn_key',
    },
    q3: {
      q: 'Mes données sont-elles sécurisées ?',
      a: 'Oui, vos données sont cryptées et hébergées en toute sécurité, conformes RGPD.',
      icon: 'security',
    },
  },
}
