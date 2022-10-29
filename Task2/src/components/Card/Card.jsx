import { classnames } from "../../classnames"
import styles from "./styles.module.css"


export const Card = ({ children, className }) =>
{
	return <section className={classnames(styles.card, className)}>{children}</section>
}
