import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../context'
import { DeleteOutlined } from '@ant-design/icons'

const { Meta } = Card

const ProductCard = ({ name, _id, description, pricing, owner, imgURL, deleteProduct }) => {
  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <div>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={imgURL} />}
            actions={[<DeleteOutlined key="delete" onClick={() => deleteProduct(_id)} />]}
          >
            <Meta title={name} description={description} title={`By: ${owner && owner.name}`} />
          </Card>

          <div className="tags">
            <Link to={`/product/edit/${_id}`}>Edit </Link>

            <Link to={`/product/${_id}`}>More information</Link>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default ProductCard

// {/* <Card
//   style={{ width: 300 }}
//   cover={<img src={imgURL} />}
//   actions={<DeleteOutlined key="delete" onClick={() => deleteProduct(_id)} />}
// >
//   {/* <Link to={`/product/${_id}`}>Click for more info</Link> */}

//   {/* loggedUser.email===owner.email?<Link to={`/product/edit/${_id}`}>Edit</Link>:null */}
//   <br />
//   <br />
//   <Meta title={name} description={`By: ${owner && owner.name}  For: ${description} `} />
// </Card> */}
