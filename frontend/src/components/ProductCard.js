import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../context'
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import '../index.css'
import { Row, Col } from 'antd'

const { Meta } = Card

const ProductCard = ({
  name,
  _id,
  isActive,
  description,
  pricing,
  owner,
  imgURL,
  deleteProduct,
  plan,
  status,
}) => {
  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <>
          <Row type="flex" justify="left" gutter={[48, 48]}>
            <Col className="gutter-row" span={6} xs={12}>
              <Card
                title={name}
                size="small"
                style={{ width: 250, textAlign: 'center' }}
                cover={
                  <img
                    alt="example"
                    src={imgURL}
                    style={{
                      maxWidth: 200,
                      minWidth: 200,
                      maxHeight: 100,
                      minHeight: 100,
                      margin: 25,
                    }}
                  />
                }
                actions={
                  isActive
                    ? [
                        loggedUser?.email === owner?.email && [
                          <DeleteOutlined key="delete" onClick={() => deleteProduct(_id)} />,
                        ],
                        loggedUser?.email === owner?.email && [
                          <Link to={`/product/edit/${_id}`}>
                            <EditOutlined key="edit" />
                          </Link>,
                        ],
                        <Link to={`/product/${_id}`}>
                          <PlusCircleOutlined />
                        </Link>,
                      ]
                    : null
                }
              >
                <Meta description={`$ ${pricing} ${plan}`} />
                <br />
                {!isActive ? (
                  <p style={{ color: 'red' }}>On rent</p>
                ) : (
                  <p style={{ color: 'red' }}>Available</p>
                )}
              </Card>
            </Col>
          </Row>
        </>
      )}
    </MyContext.Consumer>
  )
}

export default ProductCard
