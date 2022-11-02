import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { classnames } from "../../classnames";
import { selectCategories } from "../../store/category/selectors";
import styles from "./styles.module.css"


export function BookCategories({ activeCategoryId })
{
	const categories = useSelector(selectCategories);

	return <nav className={styles.root}>
		{
			categories.map(category =>
				<Link
					to={"/" + encodeURIComponent(category.id)}
					className={classnames(styles.item, activeCategoryId === category.id ? styles.item_selected : "")}
					key={category.id}
				>
					{category.name}
				</Link>
			)
		}
	</nav>
}
