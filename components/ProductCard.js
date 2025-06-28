'use client'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 shadow rounded bg-white">
      <img src={product.image} alt={product.title} className="h-32 object-contain mx-auto mb-2" />
      <h2 className="font-semibold">{product.title}</h2>
      <Link href={`/products/${product.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">View Details</button>
      </Link>
    </div>
  )
}