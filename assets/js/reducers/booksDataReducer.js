// this reducer is essentially a json file for the book data

export const booksDataReducer = () => {
	return [
		{
			id: 1,
			title: 'Batman: The Killing Joke',
			author: 'Alan Moore',
			category: 'Fantasy Fiction',
			published: 'DC Comics',
			coverURL:
				'https://images-na.ssl-images-amazon.com/images/I/51dk0KJMIdL.jpg',
			review:
				'Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland. The Killing Joke provides an origin story for the supervillain the Joker, loosely adapted from the 1951 story arc "The Man Behind the Red Hood!".'
		},
		{
			id: 2,
			title: 'X-Men: Days of Future Past',
			author: 'Chris Claremont',
			category: 'Graphic novel',
			published: 'Marvel Comics',
			coverURL:
				'https://images-na.ssl-images-amazon.com/images/I/61s7EqhPIHL._SX323_BO1,204,203,200_.jpg',
			review:
				'Days of Future Past" is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141–142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps.'
		},
		{
			id: 3,
			title: 'X-Men: God Loves, Man Kills',
			author: 'Chris Claremont',
			category: 'Graphic novel',
			published: 'Marvel Comics',
			coverURL:
				'https://images-na.ssl-images-amazon.com/images/I/511QZUPfXAL._SX339_BO1,204,203,200_.jpg',
			review:
				'X-Men: God Loves, Man Kills is an original graphic novel published in 1982 by Marvel Comics, starring their popular superhero team the X-Men. It was written by Chris Claremont and illustrated by Brent Anderson. The book served as a primary inspiration for the film X2.'
		},
		{
			id: 4,
			title: 'Born Again',
			author: 'Frank Miller',
			category: 'Graphic novel',
			published: 'Marvel Comics',
			coverURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483036515i/343662.jpg',
			review:
				'"Born Again" is a 1986 comic book story arc that appeared in the Marvel Comics series Daredevil. Written by Frank Miller, and drawn by David Mazzucchelli, the storyline first appeared in Daredevil #227–231.'
		},
		{
			id: 5,
			title: 'Teen Titans: Raven',
			author: 'Kami Garcia',
			category: 'Graphic novel',
			published: 'DC Comics',
			coverURL:
				'https://images-na.ssl-images-amazon.com/images/I/51jze5vQT1L._SX326_BO1,204,203,200_.jpg',
			review:
				"USA Today and Publishers Weekly bestseller! When a tragic accident takes the life of 17-year-old Raven Roth's foster mom--and Raven's memory--she moves to New Orleans to recover and finish her senior year of high school. Starting over isn't easy."
		},
		{
			id: 6,
			title: 'The Night Gwen Stacy Died',
			author: 'Gerry Conway and Stan Lee',
			category: 'Marvel Comics',
			published: 'Graphic novel',
			coverURL:
				'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/53579/DIG013105_1._SX360_CLs%7C360,552%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,553%20208,400,152,152_QL80_TTD_.jpg',
			review:
				'"The Night Gwen Stacy Died" is a story arc of the Marvel Comics comic book series The Amazing Spider-Man #121–122, that became a watershed event in the life of the superhero Spider-Man, one of popular culture\'s most enduring and recognizable fictional characters.'
		}
	];
};
