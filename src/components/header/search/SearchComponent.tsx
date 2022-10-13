import React from 'react'
import CategoriesComponent from '@/components/header/search/categories/CategoriesComponent'

export default function SearchComponent({ className }: { className?: string }) {
  return (
    <div className={className}>
      <CategoriesComponent />
      <input type='text' placeholder='Search by product name or seller' />
    </div>
  )
}
