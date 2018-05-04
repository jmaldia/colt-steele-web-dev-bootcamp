let movies = [
	{
		title: "The Goonies",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Beetlejuice",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Amytyville",
		rating: 0,
		hasWatched: false
	}
]

movies.forEach(function(movie) {
	console.log(
		`You have ${movie.hasWatched ? 'watched' : 'not watched'} "${movie.title}" - ${movie.rating} stars`
	);
});

console.log("USE YOUR OWN MOVIES!");