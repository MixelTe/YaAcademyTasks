import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewById } from "../../store/review/loadIfNotExist"
import { selectIsReviewLoading, selectReviewById } from "../../store/review/selectors"
import { Card } from "../Card/Card"
import { Stars } from "../Stars/Stars"
import { Text } from "../Text/Text"
import { UserName } from "../UserName/UserName"
import styles from "./styles.module.css"


export function Review({ reviewId })
{
	const dispatch = useDispatch();
	const review = useSelector(selectReviewById(reviewId));
	const reviewIsLoading = useSelector(selectIsReviewLoading);

	useEffect(() => { dispatch(loadReviewById(reviewId)) }, [reviewId, dispatch]);

	if (reviewIsLoading) return <Card>
		<div className={styles.header}>
			<h1 className={styles.header__text}>Загрузка...</h1>
			<Stars count={0} />
		</div>
		<Text text="Загрузка..." />
	</Card>

	if (!review) return <Card>
		<div className={styles.header}>
			<h1 className={styles.header__text}>Не найдено</h1>
			<Stars count={0} />
		</div>
		<Text text="Произошла ошибка. Не удалось загрузить отзыв." />
	</Card>

	return <Card>
		<div className={styles.header}>
			<UserName userId={review.userId} className={styles.header__text}>{review.author}</UserName>
			<Stars count={review.rating} />
		</div>
		<Text text={review.text} />
	</Card>
}
