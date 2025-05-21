export default {
  loading: 'Loading',

  hero: {
    title: 'Turn your receipts into valuable data',
    subtitle:
      'Automate and simplify your receipt and invoice management with our intelligent OCR API.',
    cta: 'Try for free',
  },
  features: {
    accuracy: {
      title: 'AI Accuracy',
      desc: 'Reliable automatic extraction powered by AI.',
      icon: 'psychology',
    },
    time: {
      title: 'Time Saver',
      desc: 'Instant processing, no manual entry.',
      icon: 'schedule',
    },
    easy: {
      title: 'Easy Integration',
      desc: 'Simple REST API, responses in JSON or YAML.',
      icon: 'code',
    },
    security: {
      title: 'Security & Privacy',
      desc: 'Your data protected, GDPR compliant.',
      icon: 'security',
    },
  },
  demo: {
    title: 'Quick Demo',
    request: 'Request',
    response: 'Response',
    icon: 'terminal',
    code: {
      request:
        'POST /api/v1/scan\\n{\\n  "api_key": "your_api_key",\\n  "receipt": "receipt.jpg"\\n}',
      response:
        '{\\n  "merchant": "Starbucks",\\n  "date": "2025-05-17",\\n  "total": "5.99 CAD",\\n  "items": [\\n    {"name": "Latte", "price": 4.49},\\n    {"name": "Cookie", "price": 1.50}\\n  ]\\n}',
    },
  },
  steps: {
    title: 'How does it work?',
    one: {
      title: 'Step 1',
      desc: 'Create your account and get your unique API key.',
      icon: 'vpn_key',
    },
    two: {
      title: 'Step 2',
      desc: 'Send your receipt or invoice via the API with a simple POST request.',
      icon: 'cloud_upload',
    },
    three: {
      title: 'Step 3',
      desc: 'Receive clean, structured data instantly.',
      icon: 'insights',
    },
  },
  ctaFinal: {
    title: 'Start now',
    icon: 'arrow_forward',
  },
  faq: {
    title: 'Frequently Asked Questions',
    icon: 'help_outline',
    q1: {
      q: 'Which receipt types are supported?',
      a: 'All readable photo or PDF receipts and invoices, color or black and white.',
      icon: 'receipt_long',
    },
    q2: {
      q: 'How do I get an API key?',
      a: 'Create a free account and access your API dashboard.',
      icon: 'vpn_key',
    },
    q3: {
      q: 'Is my data secure?',
      a: 'Yes, your data is encrypted and securely hosted, fully GDPR compliant.',
      icon: 'security',
    },
  },
}
