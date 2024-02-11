import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png'
import AmazonLogo from '../../assets/amazon_logo.png'

import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png'
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';


export const Home = () => {
	const categories = ['Home', 'TV Shows', 'Movies', 'Kids']

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
				<Image style={styles.amazonLogoImg} source={AmazonLogo} />
			</View>

			<View style={styles.category}>
				{
					categories.map((category, index) => {
						return (
							<TouchableOpacity key={index}>
								<Text
									style={styles.categoryText}
								>
									{category}
								</Text>
							</TouchableOpacity>
						)
					})
				}
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.contentMovies}
			>

				<TouchableOpacity style={styles.movieImageThumbnail}>
					<Image style={styles.movieImage} source={MovieTheWheel} />
				</TouchableOpacity>


				<Text style={styles.sectionTitle}>Continue Watching</Text>
				<FlatList
					data={MOVIESWATCHING}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <MoviesCard movieImage={item.moviesURL} />}
					//* Styling the FlatList
					horizontal
					contentContainerStyle={styles.movieList}
					showsHorizontalScrollIndicator={false}
				/>


				<Text style={styles.sectionTitle}>Crime Movies</Text>
				<FlatList
					data={MOVIESCRIME}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <MoviesCard movieImage={item.moviesURL} />}
					//* Styling the FlatList
					horizontal
					contentContainerStyle={styles.movieList}
					showsHorizontalScrollIndicator={false}
				/>


				<Text style={styles.sectionTitle}>Crime Movies</Text>
				<FlatList
					data={MOVIESWATCH}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <MoviesCard movieImage={item.moviesURL} />}
					//* Styling the FlatList
					horizontal
					contentContainerStyle={styles.movieList}
					showsHorizontalScrollIndicator={false}
				/>
			</ScrollView>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		backgroundColor: '#232F3E',
	},

	//* Header Styles
	header: {
		width: '100%',
		paddingTop: 48,
		alignItems: 'center',
		justifyContent: 'center',
	},
	// Logos Styles
	primeLogoImg: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},
	amazonLogoImg: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
		marginTop: -40,
		marginLeft: 20,
	},

	//* Category Styles
	category: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 16,
		color: 'white',
	},
	categoryText: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
	},

	//* Movie Image
	movieImageThumbnail: {
		width: '100%',
		height: 200,
		marginTop: 16,
	},
	movieImage: {
		width: '100%',
		height: '100%',
	},

	//* FlatList Styles
	movieList: {
		gap: 8,
		paddingHorizontal: 8,
	},

	//* Section Title
	sectionTitle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 8,
		marginTop: 16,
		marginBottom: 8,
	},

	//* Content Movies
	contentMovies: {
		width: '100%',
	}

});