'use client'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}