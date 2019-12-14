import React, { Component } from 'react'

export class SingleCartProduct extends Component {
    render() {
        const { product } = this.props;
        return (
            <div classNameName="SingleCartProduct">
                <div class="row">
                    <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                 <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-0">
                    <div className="p-2">
                      {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" /> */}
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{product.description}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle"><strong>{product.price}</strong></td>
                    <td className="border-0 align-middle"><strong>{product.quantity}</strong></td>
                  <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="material-icons">delete</i></a></td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
            </div>
            </div>
        )
    }
}

export default SingleCartProduct;
