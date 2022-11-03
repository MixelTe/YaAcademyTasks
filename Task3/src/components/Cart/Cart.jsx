import { classnames } from "../../classnames";
import { Card } from "../Card/Card";
import styles from "./styles.module.css"

import { books, cart } from "../../constants/mock"


export function Cart({ className })
{
	let sum = 0;
	return <Card className={classnames(styles.root, className)}>
		<h1 className={styles.title}>Ваш заказ:</h1>
		<ul className={styles.cart}>
			{
				cart.map(item =>
				{
					const book = getBook(item.bookId);
					sum += book.price * item.count;
					return <li key={item.bookId} className={styles.cart__item}>
						<div className={styles.cart__text}>{book.title}</div>
						<div className={styles.cart__price}>
							{item.count > 1 ? `${item.count}шт × ` : ""}
							{book.price} &#x20bd;
						</div>
					</li>
				})
			}
		</ul>
		<div className={styles.footer}>
			<div className={styles.total}>
				Итого: {sum} &#x20bd;
			</div>
			<button className={styles.buyButton}>Купить</button>
		</div>
	</Card>
}

function getBook(id)
{
	return books.find(book => book.id === id);
}