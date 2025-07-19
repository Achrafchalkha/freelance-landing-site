import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div 
        className={`animate-spin rounded-full border-2 border-[#333] border-t-[#F95700] ${sizeClasses[size]} mb-3`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-[#AAAAAA] text-sm animate-pulse">{text}</p>
      )}
    </div>
  )
}

// Page-level loading component
export function PageLoading() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading page..." />
    </div>
  )
}

// Section-level loading component  
export function SectionLoading({ height = 'h-64' }: { height?: string }) {
  return (
    <div className={`${height} bg-[#1E1E1E] rounded-lg border border-[#333] flex items-center justify-center`}>
      <LoadingSpinner text="Loading content..." />
    </div>
  )
}
