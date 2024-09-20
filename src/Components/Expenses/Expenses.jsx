import expenses from './expenses'
import styles from './Expenses.module.css'

function Expenses () {
  const mapItem = ({ id, title, amount, date }) => (
    <li key={id} className={styles.expenseItem}>
      <div className={styles.dateContainer}>
        <div className={styles.dateMonth}>
          {date.toLocaleString('en-US', { month: 'long' })}
        </div>
        <div className={styles.dateYear}>{date.getFullYear()}</div>
        <div className={styles.dateDay}>{date.getDate()}</div>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.amountContainer}>
        <p className={styles.amount}>${amount}</p>
      </div>
    </li>
  )

  return (
    <main className={styles.expenses}>
      <ul>{expenses.map(mapItem)}</ul>
    </main>
  )
}

export default Expenses
