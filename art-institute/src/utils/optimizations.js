/**
 * Performance Optimization Utilities
 * Includes lazy loading, image optimization, and resource hints
 */

// Preload critical resources
export const preloadResource = (href, as = 'image') => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = as
    link.href = href
    document.head.appendChild(link)
  }
}

// Prefetch non-critical resources
export const prefetchResource = (href) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    document.head.appendChild(link)
  }
}

// DNS prefetch for external resources
export const dnsPrefetch = (hostname) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = `https://${hostname}`
    document.head.appendChild(link)
  }
}

// Intersection Observer for lazy loading elements
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  }

  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, defaultOptions)
  }
  return null
}

// Optimize image loading with progressive enhancement
export const getOptimizedImageUrl = (url, width = 1200, quality = 80) => {
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=${quality}`
  }
  return url
}

// Debounce function for resize events
export const debounce = (func, delay = 250) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Throttle function for scroll events
export const throttle = (func, limit = 100) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Reduce motion based on user preferences
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

// Detect network speed
export const getNetworkSpeed = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    }
  }
  return null
}

// Conditional loading based on network speed
export const shouldLoadHeavyAssets = () => {
  const connection = getNetworkSpeed()
  if (!connection) return true
  
  // Don't load heavy assets on slow connections
  return !connection.saveData && 
         connection.effectiveType !== 'slow-2g' && 
         connection.effectiveType !== '2g'
}
