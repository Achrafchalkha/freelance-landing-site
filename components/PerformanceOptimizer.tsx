"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Performance monitoring and optimization
export function PerformanceOptimizer() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch critical routes on page load
    const prefetchRoutes = ['/about', '/programs', '/contact', '/news']
    
    // Prefetch after a short delay to not block initial render
    const timer = setTimeout(() => {
      prefetchRoutes.forEach(route => {
        router.prefetch(route)
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [router])

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log slow operations in development
          if (process.env.NODE_ENV === 'development' && entry.duration > 100) {
            console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`)
          }
        }
      })

      observer.observe({ entryTypes: ['measure', 'navigation'] })

      return () => observer.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}

// Hook for lazy loading components
export function useLazyLoad() {
  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add('animate-fadeIn')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all elements with lazy-load class
    const lazyElements = document.querySelectorAll('.lazy-load')
    lazyElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Component for optimized images
interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-300`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={(e) => {
        const img = e.target as HTMLImageElement
        img.style.opacity = '1'
      }}
      style={{ opacity: 0 }}
    />
  )
}
