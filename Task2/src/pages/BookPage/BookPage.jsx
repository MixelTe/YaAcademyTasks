import { BookCard } from "../../components/BookCard/BookCard"
import { Card } from "../../components/Card/Card"
import { Comment } from "../../components/Comment/Comment"
import { Text } from "../../components/Text/Text"
import styles from "./styles.module.css"


export function BookPage({ book })
{
	return <main className={styles.main}>
		<div className={styles.panel}>
			<BookCard book={book} inputOnBottom={true} />
			<Card>
				<h1 className={styles.annotation__title}>Аннотация</h1>
				<Text text={book.annotation} />
			</Card>
		</div>
		<div className={styles.comments}>
			{
				book.comments.map((el, i) =>
					<Comment key={i} comment={el} />
				)
			}
		</div>
	</main>
}