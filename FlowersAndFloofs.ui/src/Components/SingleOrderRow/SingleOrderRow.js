import React from 'react';

class SingleOrderRow extends React.Component {
  render() {
    const {order} = this.props;
    return(
      <tbody>
                        <tr>
                          <td className="border-0 align-middle"><strong>{order.id}</strong></td>
                            <td className="border-0 align-middle"><strong>{order.orderTotal}</strong></td>
                        </tr>
                      </tbody>
    )
  }
}

export default SingleOrderRow;