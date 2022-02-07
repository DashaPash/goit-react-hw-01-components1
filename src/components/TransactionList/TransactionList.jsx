import TransactionItem from './TransactionItem/TransactionItem';
export default function TransactionList({ items }) {
  return (
    <>
      <table class="transaction-history">
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
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
