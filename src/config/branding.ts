/**
 * UptimeWorker - Modern Status Page Monitoring
 * Copyright (c) 2025 Slym B.
 * Licensed under the Apache License, Version 2.0
 *
 * 🎨 Branding Configuration
 *
 * Centralized branding configuration for easy customization.
 *
 * HOW TO CUSTOMIZE:
 * 1. Edit the values below with your company info
 * 2. Update .env file with VITE_STATUS_TITLE and logo paths
 * 3. Replace logo files in public/ directory
 *
 * LOGO FILES:
 * - public/logo-dark.webp   → Logo for dark theme
 * - public/logo-light.webp  → Logo for light theme
 * - public/favicon.ico      → Favicon
 */

export interface BrandingConfig {
  // Company/Project Info
  companyName: string
  projectName: string
  projectDescription: string

  // URLs
  websiteUrl: string
  websiteDomain: string

  // Contact
  supportEmail?: string

  // Social Links (optional)
  githubUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  buymeacoffeeUrl?: string
  donationUrl?: string

  // Footer Links
  links: {
    about?: string
    terms?: string
    privacy?: string
    contact?: string
  }

  // Technical
  userAgent?: string // Custom User-Agent for monitoring requests
}

// ═══════════════════════════════════════════════════════════════════════════
// 🎨 BRANDING CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

export const branding: BrandingConfig = {
  // Company Info
  companyName: 'UptimeWorker',
  projectName: 'UptimeWorker',
  projectDescription: 'Modern status page monitoring system',

  // URLs
  websiteUrl: 'https://uptimeworker.net',
  websiteDomain: 'uptimeworker.net',

  // Contact
  supportEmail: 'support@example.com',

  // Social Links
  githubUrl: 'https://github.com/uptimeworker/uptimeworker',
  buymeacoffeeUrl: 'https://buymeacoffee.com/slym',
  donationUrl: 'https://github.com/sponsors/slymb',

  // Footer Links
  links: {
    about: '/about',
    terms: '/terms',
    privacy: '/privacy',
  },

  // Technical
  userAgent: 'UptimeWorker-Monitor/1.0',
}

// ═══════════════════════════════════════════════════════════════════════════
// 💡 EXAMPLE: Custom branding for your company
// ═══════════════════════════════════════════════════════════════════════════
//
// Replace the values above with your own:
//
//   companyName: 'ACME Corp',
//   projectName: 'ACME Status',
//   websiteUrl: 'https://acme.com',
//   websiteDomain: 'acme.com',
//   supportEmail: 'support@acme.com',
//   githubUrl: 'https://github.com/acme',
//   userAgent: 'ACME-Monitor/1.0',
//
