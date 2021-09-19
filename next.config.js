module.exports = {
	async redirects() {
		return [
			{
				source: '/demo',
				destination: 'https://www.youtube.com/watch?v=s7mozY3j4Nw',
				permanent: true,
			},
		]
	},
}
