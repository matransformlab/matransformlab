'use client'

import { useEffect } from 'react'

interface ColorTransitionProps {
  targetColor: string
}

export default function ColorTransition({ targetColor }: ColorTransitionProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.style.backgroundColor = targetColor
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px',
      }
    )

    const section = document.getElementById(window.location.hash.slice(1)) || document.querySelector(`section`)
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [targetColor])

  return null
}
