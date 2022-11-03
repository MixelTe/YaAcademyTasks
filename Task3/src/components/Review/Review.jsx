import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReviewById } from "../../store/review/loadIfNotExist"
import { selectIsReviewLoading, selectReviewById } from "../../store/review/selectors"
import { Card } from "../Card/Card"
import { Placeholder } from "../Placeholder/Placeholder"
import { Stars } from "../Stars/Stars"
import { Text } from "../Text/Text"
import { UserName } from "../UserName/UserName"
import styles from "./styles.module.css"


export function Review({ reviewId })
{
	const dispatch = useDispatch();
	const review = useSelector(selectReviewById(reviewId));
	const reviewIsLoading = useSelector(selectIsReviewLoading(reviewId));

	useEffect(() => { dispatch(loadReviewById(reviewId)) }, [reviewId, dispatch]);

	if (reviewIsLoading) return createPlaceholder();

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

function createPlaceholder()
{
	return <Card>
		<div className={styles.header}>
			<Placeholder className={styles.header__text} width={10} widthD={5} unit="em" />
			<Stars count={0} />
		</div>
		<Placeholder height="4em" />
	</Card>
}
