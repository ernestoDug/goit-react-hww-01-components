import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

// import exact from 'prop-types-exact';
// // npm i prop-types-exact

// компонент транзакційної історії
const TransactionHistory = props => {
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
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// прототайпи

TransactionHistory.propTypes = {
  TransactionHistory: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
