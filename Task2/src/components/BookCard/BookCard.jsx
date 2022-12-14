import { classnames } from "../../classnames"
import { Card } from "../Card/Card"
import { CountInput } from "../CountInput/CountInput"
import { Stars } from "../Stars/Stars"
import styles from "./styles.module.css"


export function BookCard({ book, inputOnBottom })
{
	return <Card className={styles.root}>
		<div className={styles.content}>
			<h1 className={styles.title}>{book.title}</h1>
			<div className={styles.descripion}>
				<p>{book.author}</p>
				<p>{book.genre}</p>
				<Stars count={book.rating} />
			</div>
			<div className={styles.price}>{book.price} &#x20bd;</div>
		</div>
		<div className={classnames(styles.countInput, inputOnBottom ? styles.countInput_bottom : "")}>
			<CountInput />
		</div>
	</Card>
}
