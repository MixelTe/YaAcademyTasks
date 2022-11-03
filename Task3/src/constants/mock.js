export const categories = [
	{ name: "Художественная литература", id: "hud-lit" },
	{ name: "Нехудожественная литература", id: "nehud-lit" },
	{ name: "Книги для детей", id: "dly-detey" },
	{ name: "Переодические издания", id: "pereod" },
	{ name: "Религия", id: "relig" },
	{ name: "Учебная литература", id: "ucheb" },
	{ name: "Комиксы", id: "komiks" },
]

export const books = [
	{
		id: "1",
		title: "Несносное проклятье некроманта",
		categoryId: "hud-lit",
		author: "Блинова Маргарита",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: "Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить \"что-нибудь для вечной любви\"? Подумай о некромантии!\nПрисоединяйся к дружной компании черных магов и просто любителей гулять по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками черного. Вперед, Тесса Грей!",
		reviews: [
			"1",
			"2",
			"3"
		]
	},
	{
		id: "2",
		title: "Книга ночи",
		categoryId: "hud-lit",
		author: "Блэк Холли",
		genre: "Фэнтези",
		rating: 4,
		price: 350,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"4",
			"5",
			"6"
		]
	},
	{
		id: "3",
		title: "Благие знамения",
		categoryId: "hud-lit",
		author: "Пратчетт, Гейман",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"7",
			"8",
			"9"
		]
	},
	{
		id: "4",
		title: "Целительница. Первое испытание",
		categoryId: "hud-lit",
		author: "Бульба Наталья Владимировна",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"10",
			"11",
			"12"
		]
	},
	{
		id: "5",
		title: "Книга с очень длинным названием, для проверки верстки",
		categoryId: "nehud-lit",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"13"
		]
	},
	{
		id: "6",
		title: "Curabitur gravida",
		categoryId: "dly-detey",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"14"
		]
	},
	{
		id: "7",
		title: "Maecenas volutpat",
		categoryId: "pereod",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"15"
		]
	},
	{
		id: "8",
		title: "Sed quis odio",
		categoryId: "relig",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"16"
		]
	},
	{
		id: "9",
		title: "Nullam ullamcorper",
		categoryId: "ucheb",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"17"
		]
	},
	{
		id: "10",
		title: "Donec lorem",
		categoryId: "komiks",
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.",
		reviews: [
			"18"
		]
	},
	{
		id: "11",
		title: "Мухман в космосе",
		categoryId: "komiks",
		author: "Павел@SSV",
		genre: "Приключение",
		rating: 5,
		price: 100_500,
		annotation: "Встречайте увлекательные истории про Мухмана и его друзей",
		reviews: [
			"19",
			"20",
			"21",
			"22",
			"23"
		]
	}
]

export const reviews = [
	{
		id: "1",
		rating: 5,
		text: "С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке \"Несносное проклятье некроманта\".",
		userId: "1"
	},
	{
		id: "2",
		rating: 5,
		text: "С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке \"Несносное проклятье некроманта\".",
		userId: "2"
	},
	{
		id: "3",
		rating: 3,
		text: "Начало весьма непредсказуемое, и непонятно кто или что из себя представляет героиня. Повествование сумбурное, словно не книгу читаешь, а над ухом кто-то трещит и быстро-быстро что-то пересказывает. Перескакивает с одного на другое очень быстро, что приходилось перечитывать многие моменты. В прологе они на кладбище, их хотят изгонять, а потом резко замке. А там вообще страшные события происходят и молодой девочке хоть бы хны, хотя она не некромант. Но хоть с половины истории чтение завлекло. Соответствует заявленному жанру - юмористическому фентези, но больше склоняется к черному юмору.",
		userId: "3"
	},
	{
		id: "4",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "4"
	},
	{
		id: "5",
		rating: 4,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "5"
	},
	{
		id: "6",
		rating: 3,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "6"
	},
	{
		id: "7",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "7"
	},
	{
		id: "8",
		rating: 4,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "8"
	},
	{
		id: "9",
		rating: 3,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "9"
	},
	{
		id: "10",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "10"
	},
	{
		id: "11",
		rating: 4,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "11"
	},
	{
		id: "12",
		rating: 3,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "12"
	},
	{
		id: "13",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "13"
	},
	{
		id: "14",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "14"
	},
	{
		id: "15",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "15"
	},
	{
		id: "16",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "16"
	},
	{
		id: "17",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "17"
	},
	{
		id: "18",
		rating: 5,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		userId: "18"
	},
	{
		id: "19",
		rating: 5,
		text: "Мне очень понравилось, всегда было интересно, чем занят Мухман.",
		userId: "19"
	},
	{
		id: "20",
		rating: 4,
		text: "Интересно, но не хватает тортиков",
		userId: "20"
	},
	{
		id: "21",
		rating: 5,
		text: "Ничего не понятно, но очень интересно",
		userId: "21"
	},
	{
		id: "22",
		rating: 1,
		text: "Меня забыли! Я там был! Почему я только на одной странице! А не на всех!",
		userId: "22"
	},
	{
		id: "23",
		rating: 5,
		text: "Уверен, что очень хорошая книжка. У Мухмана всегда интересные истории. К сожалению, не смог купить за такую цену(",
		userId: "23"
	}
]

export const users = [
	{
		id: "1",
		name: "Анна К."
	},
	{
		id: "2",
		name: "Любмила Н."
	},
	{
		id: "3",
		name: "Валентина П."
	},
	{
		id: "4",
		name: "Lorem ipsum"
	},
	{
		id: "5",
		name: "Lorem ipsum"
	},
	{
		id: "6",
		name: "Lorem ipsum"
	},
	{
		id: "7",
		name: "Lorem ipsum"
	},
	{
		id: "8",
		name: "Lorem ipsum"
	},
	{
		id: "9",
		name: "Lorem ipsum"
	},
	{
		id: "10",
		name: "Lorem ipsum"
	},
	{
		id: "11",
		name: "Lorem ipsum"
	},
	{
		id: "12",
		name: "Lorem ipsum"
	},
	{
		id: "13",
		name: "Lorem ipsum"
	},
	{
		id: "14",
		name: "Lorem ipsum"
	},
	{
		id: "15",
		name: "Lorem ipsum"
	},
	{
		id: "16",
		name: "Lorem ipsum"
	},
	{
		id: "17",
		name: "Lorem ipsum"
	},
	{
		id: "18",
		name: "Lorem ipsum"
	},
	{
		id: "19",
		name: "Кубрик"
	},
	{
		id: "20",
		name: "Сёмга"
	},
	{
		id: "21",
		name: "Совушка"
	},
	{
		id: "22",
		name: "Суслик"
	},
	{
		id: "23",
		name: "Шур-шуль"
	}
]


export const cart = [
	{ bookId: "1", count: 1 },
	{ bookId: "2", count: 1 },
	{ bookId: "3", count: 1 },
	{ bookId: "4", count: 1 },
	{ bookId: "5", count: 4 },
	{ bookId: "10", count: 3 },
	{ bookId: "11", count: 2 },
]
