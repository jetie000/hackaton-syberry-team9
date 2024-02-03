import { Card, CardContent, Typography } from "@mui/material";
import { ICardProps } from "../SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ITopResp } from "../../types/responses/topResp.interface";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface ISliderProps {
	cards: ITopResp;
}

const Slider = ({ cards }: ISliderProps) => {
	const navigate = useNavigate();
	const onCardClickHandler = useCallback((id: number) => {
		navigate(`currentmovie/${id}`);
	}, []);
	return (
		<Swiper
			style={{ zIndex: 1 }}
			slidesPerView={5}
			spaceBetween={"5px"}
			navigation
			modules={[Pagination]}
			pagination={{ clickable: true }}
			className={styles.swiper}>
			{cards.items.map((card, index) => (
				<SwiperSlide key={index} onClick={() => onCardClickHandler(card.kinopoiskId)}>
					<Card sx={{ height: "100%", p: "8px" }}>
						<img src={card.posterUrlPreview} alt="Poster" style={{ height: "20vh" }} />
						<CardContent sx={{ p: 0 }}>
							<Typography component="p">{card.nameRu}</Typography>
							<Typography variant="body2" color="text.secondary">
								{card.year}
							</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
