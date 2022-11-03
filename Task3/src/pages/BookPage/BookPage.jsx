import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { classnames } from "../../classnames"
import { BookCard } from "../../components/BookCard/BookCard"
import { Card } from "../../components/Card/Card"
import { Review } from "../../components/Review/Review"
import { Text } from "../../components/Text/Text"
import { loadBookById } from "../../store/book/loadIfNotExist"
import { selectBookById, selectIsBookLoading } from "../../store/book/selectors"
import styles from "./styles.module.css"


export function BookPage()
{
	const dispatch = useDispatch();
	const { bookId } = useParams();
	const book = useSelector(selectBookById(bookId));
	const bookIsLoading = useSelector(selectIsBookLoading);

	useEffect(() => { dispatch(loadBookById(bookId)) }, [bookId, dispatch]);

	if (bookIsLoading)
		return <main className={classnames(styles.main, styles.main_centered)}>
			<h1>Загрузка книги...</h1>
		</main>

	if (!book)
		return <main className={classnames(styles.main, styles.main_centered)}>
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
				book.reviews.map((reviewId, i) =>
					<Review key={i} reviewId={reviewId} />
				)
			}
		</div>
	</main>
}