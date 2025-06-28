'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [slug])

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFav(fav.includes(slug))
  }, [slug])

  const toggleFavorite = () => {
    let fav = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (fav.includes(slug)) {
      fav = fav.filter(id => id !== slug)
    } else {
      fav.push(slug)
    }
    localStorage.setItem('favorites', JSON.stringify(fav))
    setIsFav(!isFav)
  }

  if (!product) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="p-6">
      <Navbar />
      <img src={product.image} className="w-40 h-40 object-contain mx-auto" />
      <h1 className="text-xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-900">{product.description}</p>
      <p className="font-semibold mt-2">${product.price}</p>
      <button onClick={toggleFavorite} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
        {isFav ? 'Remove from Favorite' : 'Add to Favorite'}
      </button>
    </div>
  )
}