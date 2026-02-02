import { useState, useEffect, useRef } from 'react'

/**
 * LazyImage Component
 * Optimized image loading with lazy loading and async decoding
 * Includes loading state and error handling
 */
export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'bg-gray-100',
  onLoad,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    // Use Intersection Observer for additional lazy loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Trigger the image load by setting src
              img.src = src
              observer.unobserve(img)
            }
          })
        },
        { rootMargin: '50px' }
      )

      observer.observe(img)
      return () => observer.disconnect()
    } else {
      // Fallback for browsers without IntersectionObserver
      img.src = src
    }
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <>
      <img
        ref={imgRef}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        {...props}
      />
      
      {/* Placeholder while loading */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 ${placeholder} animate-pulse`}
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center`}>
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      )}
    </>
  )
}
