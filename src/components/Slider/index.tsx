import { Card, CardContent, Typography } from '@mui/material';
import { ICardProps } from '../SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ISliderProps {
    cards: ICardProps[];
}

const Slider = ({ cards }: ISliderProps) => {
    return (
      <Swiper slidesPerView={3} spaceBetween={10}>
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <img src={card.poster} alt="Poster" />
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
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