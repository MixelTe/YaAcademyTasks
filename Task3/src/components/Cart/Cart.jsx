import { useSelector } from "react-redux";
import { classnames } from "../../classnames";
import { selectCart, selectCartTotal } from "../../store/cart/selectors";
import { Card } from "../Card/Card";
import { CartItem } from "../CartItem/CartItem";
import styles from "./styles.module.css"


export function Cart({ className })
{
	const cart = useSelector(selectCart);
	const tolal = useSelector(selectCartTotal);

	return <Card className={classnames(styles.root, className)}>
		<h1 className={styles.title}>Ваш заказ:</h1>
		<ul className={styles.cart}>
			{
				cart.map(item => <CartItem key={item.bookId} item={item} />)
			}
		</ul>
		<div className={styles.spacer}></div>
		<div className={styles.footer}>
			<div className={styles.total}>
				Итого: {tolal} &#x20bd;
			</div>
			<button className={styles.buyButton}>Купить</button>
		</div>
	</Card>
}