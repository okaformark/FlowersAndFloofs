import React, { Component } from 'react'

export class SingleCartProduct extends Component {

  state = {
    isClicked: false
  }

  // changeQuantity = () => {
  //   if(this.state.isClicked)
  // }

  isClickedEditButton = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  isClickedPostEditButton = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

    render() {
        const { price } = this.props;
        const { unitPrice }= this.props;
        const { product } = this.props;
    return (
              <tbody>
                <tr>
                  <th scope="row" className="border-0">
                    <div className="p-2">
                      {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" /> */}
                      <div className="ml-3 d-inline-block align-middle">
                      <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{product.flowerTitle} {"&"} {product.puppyTitle}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{product.description}</span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle"><strong>{unitPrice}</strong></td>
                    <td className="border-0 align-middle"><strong>{product.quantity}</strong></td>
                    <td className="border-0 align-middle"><strong>{price}</strong></td>
                  <td className="border-0 align-middle" onClick={this.props.deleteItem.bind(this, product.id)}><a href="#" className="text-dark"><i className="material-icons">delete</i></a></td>
                  {this.state.isClicked ?(
                    <td className="border-0 align-middle" onClick={this.isClickedEditButton}><a href="#" className="text-dark"><i className="material-icons">trending_flat</i></a></td>
                  ) :(
                    <td className="border-0 align-middle"onClick={this.isClickedPostEditButton} ><a href="#" className="text-dark"><i className="material-icons">edit</i></a></td>
                  )}
                  
                </tr>
              </tbody>
        )
    }
}

export default SingleCartProduct;
