import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, description, _id, owner, pricing }) => {
  return (
    <div>
      <Card
        title={name}
        extra={<Link to={`/product/${_id}`}>Click for more info</Link>}
        style={{ width: 300 }}
      >
        <p>Description:{description}</p>
        <p>Price:{pricing}</p>
        <p>Owner:{owner && owner.name}</p>
      </Card>
    </div>
  )
}

export default ProductCard
