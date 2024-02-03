// ===================== Material UI =====================
import { Card, CardContent, Typography } from "@mui/material";

interface ICardProps {
	poster: string;
	title: string;
	year: string;
}

const SliderCardComponent = ({ poster, title, year }: ICardProps) => {
	return (
		<div>
			<Card>
				<img src={poster} alt="Poster" />

				<CardContent>
					<Typography variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{year}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default SliderCardComponent;
