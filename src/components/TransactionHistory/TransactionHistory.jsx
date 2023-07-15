import PropTypes from "prop-types"
import  css from "./TransactionHistory.module.css";


const  TransactionHistory = (props) => {
    const { items } = props;
    
       return (
        <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
              <tbody>
    {items.map(item => (
      <tr key={item.id}>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>))}
    </tbody>
    </table>)
    }

      // прототайпи
      TransactionHistory.propTypes =  {
        items:  PropTypes.array,
  }





    export default TransactionHistory







   