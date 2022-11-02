import { useParams } from "react-router-dom"
import { classnames } from "../../classnames"
import { BookCard } from "../../components/BookCard/BookCard"
import { Card } from "../../components/Card/Card"
import { Review } from "../../components/Review/Review"
import { Text } from "../../components/Text/Text"
import styles from "./styles.module.css"


export function BookPage({ books })
{
	const { bookId } = useParams();
	const book = bookId ? books.find(v => v.id === bookId) : undefined;

	if (!book)
		return <main className={classnames(styles.main, styles.main_notfound)}>
			<h1>Книга не найдена</h1>
		</main>

	return <main className={styles.main}>
		<div className={styles.panel}>
			<BookCard book={book} inputOnBottom={true} />
			<Card>
				<h1 className={styles.annotation__title}>Аннотация</h1>
				<Text text={book.annotation} />
			</Card>
		</div>
		<div className={styles.reviews}>
			{
				book.reviews.map((review, i) =>
					<Review key={i} review={review} />
				)
			}
		</div>
	</main>
}