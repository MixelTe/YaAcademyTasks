import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsUserLoading } from "../../store/user/selectors"
import { loadUserById } from "../../store/user/loadIfNotExist"
import { selectUserById } from "../../store/user/selectors"


export function UserName({ userId, className })
{
	const dispatch = useDispatch();
	const user = useSelector(selectUserById(userId));
	const userIsLoading = useSelector(selectIsUserLoading(userId));

	useEffect(() => { dispatch(loadUserById(userId)) }, [userId, dispatch]);

	if (userIsLoading) return <h1 className={className}>Загрузка...</h1>
	if (!user) return <h1 className={className}>Неизвестный пользователь</h1>
	return <h1 className={className}>{user.name}</h1>
}
