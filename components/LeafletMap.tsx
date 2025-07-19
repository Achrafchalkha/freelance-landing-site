"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Loading component for better UX
const MapLoading = () => (
  <div className="h-64 w-full rounded-lg bg-[#1E1E1E] border border-[#333] flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F95700] mx-auto mb-2"></div>
      <p className="text-[#AAAAAA] text-sm">Loading map...</p>
    </div>
  </div>
)

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false,
    loading: () => <MapLoading />
  }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface LeafletMapProps {
  latitude: number
  longitude: number
  locationName: string
  address: string
  phone: string
}

export default function LeafletMap({ 
  latitude, 
  longitude, 
  locationName, 
  address, 
  phone 
}: LeafletMapProps) {
  useEffect(() => {
    // Import Leaflet CSS and custom styles
    import('leaflet/dist/leaflet.css')
    import('./leaflet-custom.css')

    // Fix for default markers in react-leaflet and create custom red marker
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl

      // Create custom red marker icon with better styling
      const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [28, 45],
        iconAnchor: [14, 45],
        popupAnchor: [1, -38],
        shadowSize: [45, 45],
        shadowAnchor: [14, 45]
      })

      // Set as default with enhanced styling
      L.Icon.Default.mergeOptions({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [28, 45],
        iconAnchor: [14, 45],
        popupAnchor: [1, -38],
        shadowSize: [45, 45],
        shadowAnchor: [14, 45]
      })
    })
  }, [])

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden shadow-lg border border-[#333]">
      <MapContainer
        center={[latitude, longitude]}
        zoom={17}
        minZoom={10}
        maxZoom={19}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '0.5rem'
        }}
        className="z-0"
        scrollWheelZoom={true}
        zoomControl={true}
        doubleClickZoom={true}
        touchZoom={true}
        dragging={true}
        zoomSnap={1}
        zoomDelta={1}
      >
        {/* Standard OpenStreetMap - most reliable and detailed for Morocco */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          subdomains={['a', 'b', 'c']}
        />

        <Marker position={[latitude, longitude]}>
          <Popup
            closeButton={true}
            autoClose={false}
            closeOnEscapeKey={true}
            className="custom-popup"
          >
            <div className="text-center min-w-[220px] p-2">
              <h3 className="font-bold text-[#F95700] mb-2 text-base">{locationName}</h3>
              <p className="text-sm text-gray-700 mb-1 leading-relaxed">{address}</p>
              <p className="text-sm text-[#F95700] font-semibold mb-2">{phone}</p>
              <div className="mt-3 pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">📍 Exact location marked</p>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
