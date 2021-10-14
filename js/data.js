const data = {
    "rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		}
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
}

//Рейтинг

class RatingItem{
	constructor(place, src, id, className ,firstName, lastName, points, parentSelector) {
		this.place = place;
		this.src = src;
		this.id = id;
		this.className = className
		this.firstName = firstName;
		this.lastName = lastName;
		this.points = points;
		this.parentSelector = document.querySelector(parentSelector)
	}
	render(){
		const item = document.createElement('div');
		item.classList.add('rating_list-item');
		item.innerHTML=`
			<ul>
				<li class="place">${this.place}</li>
				<li class="img" style="background: url(${this.src}) no-repeat"></li>
				<li data-id=${this.id} class='${this.className} name' >${this.firstName} ${this.lastName}</li>
				<li class="points">${this.points}</li>
			</ul>
        `;
		this.parentSelector.append(item)
		for(let i=0; i<data.friends.length; i++){
			for(let y = 0; y<data.rating.length; y++){
				if(+data.friends[i].id === +data.rating[y].id){
					data.rating[y].friend = 'true'
				}
			}
		}

	}
	
}

function allItem(){
	data.rating.sort(function(a, b) {
		return  b.points -a.points;
	})
// Два способа определить есть ли друг в массиве рейтинг
	// for(let i =0; i<data.rating.length; i++){
	// 	let rend = new RatingItem(`${i+1}`,
	// 	'img/rating/img.png',
	// 	`${data.rating[i].id}`,
	// 	(data.rating[i].friend ? 'yourFriend': ''),
	// 	`${data.rating[i].name}`,
	// 	`${data.rating[i].lastName}`,
	// 	`${data.rating[i].points}`,
	// 	'.rating_list'
	// 	);
	
	for(let i =0; i<data.rating.length; i++){
		let rend = new RatingItem(`${i+1}`,
		'img/rating/img.png',
		`${data.rating[i].id}`,
		'',
		`${data.rating[i].name}`,
		`${data.rating[i].lastName}`,
		`${data.rating[i].points}`,
		'.rating_list'
		);
		if(data.rating[i].friend) {
			rend.className = 'yourFriend';
		};
		rend.render();
	};
};
allItem()

