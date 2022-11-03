import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { BookList } from "../../components/BookList/BookList"
import { Cart } from "../../components/Cart/Cart"
import { loadCartIfNotExist } from "../../store/cart/loadCartIfNotExist";
import styles from "./styles.module.css"


export function CartPage()
{
	const dispatch = useDispatch();
	useEffect(() => { dispatch(loadCartIfNotExist) }, [dispatch]);

	return <main className={styles.main}>
		<Cart className={styles.panel}/>
		<BookList displayCart={true} />
	</main>
}
