import { Card, CardContent, Typography } from "@mui/material";

export interface ICardProps {
  poster: string;
  title: string;
  year: string;
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
}

const SliderCardComponent = ({
  poster,
  title,
  year,
  onClickHandler,
}: ICardProps) => {
  return (
    <Card onClick={onClickHandler}>
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
  );
};

export default SliderCardComponent;
