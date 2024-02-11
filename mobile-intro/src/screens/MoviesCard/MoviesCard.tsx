import { FC } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

export interface MoviesCardProps {
	movieImage: ImageSourcePropType
}

export const MoviesCard: FC<MoviesCardProps> = (props) => {
	const { movieImage } = props;

	return movieImage && (
		<TouchableOpacity>
			<Image
				style={styles.img}
				source={movieImage} // Convert movieImage to ImageSourcePropType
				alt={movieImage.toString()}
			/>
		</TouchableOpacity>
	);
}

const styles = {
	img: {
		width: 160,
		height: 100,
		borderRadius: 10,
	}
}