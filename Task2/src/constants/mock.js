export const categories = [
	{ name: "Художественная литература", id: 1 },
	{ name: "Нехудожественная литература", id: 2 },
	{ name: "Книги для детей", id: 3 },
	{ name: "Переодические издания", id: 4 },
	{ name: "Религия", id: 5 },
	{ name: "Учебная литература", id: 6 },
	{ name: "Комиксы", id: 7 },
]

export const books = [
	{
		id: "1",
		title: "Несносное проклятье некроманта",
		category: 1,
		author: "Блинова Маргарита",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: 'Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить "что-нибудь для вечной любви"? Подумай о некромантии!\nПрисоединяйся к дружной компании черных магов и просто любителей гулять по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками черного. Вперед, Тесса Грей!',
		comments: [
			{
				author: "Анна К.",
				rating: 5,
				text: 'С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".',
			},
			{
				author: "Любмила Н.",
				rating: 5,
				text: 'С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".',
			},
			{
				author: "Валентина П.",
				rating: 3,
				text: "Начало весьма непредсказуемое, и непонятно кто или что из себя представляет героиня. Повествование сумбурное, словно не книгу читаешь, а над ухом кто-то трещит и быстро-быстро что-то пересказывает. Перескакивает с одного на другое очень быстро, что приходилось перечитывать многие моменты. В прологе они на кладбище, их хотят изгонять, а потом резко замке. А там вообще страшные события происходят и молодой девочке хоть бы хны, хотя она не некромант. Но хоть с половины истории чтение завлекло. Соответствует заявленному жанру - юмористическому фентези, но больше склоняется к черному юмору.",
			},
		],
	},
	{
		id: "2",
		title: "Книга ночи",
		category: 1,
		author: "Блэк Холли",
		genre: "Фэнтези",
		rating: 4,
		price: 350,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 4,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 3,
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			},
		],
	},
	{
		id: "3",
		title: "Благие знамения",
		category: 1,
		author: "Пратчетт, Гейман",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 4,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 3,
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			},
		],
	},
	{
		id: "4",
		title: "Целительница. Первое испытание",
		category: 1,
		author: "Бульба Наталья Владимировна",
		genre: "Фэнтези",
		rating: 4,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 4,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				author: "Lorem ipsum",
				rating: 3,
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			},
		],
	},
	{
		id: "5",
		title: "Lorem ipsum dolor",
		category: 2,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "6",
		title: "Curabitur gravida",
		category: 3,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "7",
		title: "Maecenas volutpat",
		category: 4,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "8",
		title: "Sed quis odio",
		category: 5,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "9",
		title: "Nullam ullamcorper",
		category: 6,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "10",
		title: "Donec lorem",
		category: 7,
		author: "Lorem ipsum",
		genre: "Lorem",
		rating: 5,
		price: 250,
		annotation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit officia distinctio quibusdam dolorem in iusto nulla sequi enim.',
		comments: [
			{
				author: "Lorem ipsum",
				rating: 5,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
	},
	{
		id: "11",
		title: "Мухман в космосе",
		category: 7,
		author: "Павел@SSV",
		genre: "Приключение",
		rating: 5,
		price: "100 500",
		annotation: 'Встречайте увлекательные истории про Мухмана и его друзей',
		comments: [
			{
				author: "Кубрик",
				rating: 5,
				text: 'Мне очень понравилось, всегда было интересно, чем занят Мухман.',
			},
			{
				author: "Сёмга",
				rating: 4,
				text: 'Интересно, но не хватает тортиков',
			},
			{
				author: "Совушка",
				rating: 5,
				text: 'Ничего не понятно, но очень интересно',
			},
			{
				author: "Суслик",
				rating: 1,
				text: 'Меня забыли! Я там был! Почему я только на одной странице! А не на всех!',
			},
			{
				author: "Шур-шуль",
				rating: 5,
				text: 'Уверен, что очень хорошая книжка. У Мухмана всегда интересные истории. К сожалению, не смог купить за такую цену(',
			},
		],
	},
]