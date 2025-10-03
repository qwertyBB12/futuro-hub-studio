// components/StudioHead.tsx
import React from 'react'

export default function StudioHead() {
  return (
    <>
      <title>Futuro Hub</title>

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png?v=2" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png?v=2" />

      {/* (Optional) theme color for address bar on mobile */}
      <meta name="theme-color" content="#1B2A41" />
    </>
  )
}