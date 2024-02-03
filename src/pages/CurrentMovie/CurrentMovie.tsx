import { useGetByIdQuery } from "../../service/store/api/movieApi";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { imgStyles, wrapper } from "./styles";

const CurrentMovie = () => {
  const { movieid } = useParams();
  const navigate = useNavigate();
  const { isLoading, isSuccess, data, isError } = useGetByIdQuery(
    +(movieid || -1),
  );
  useEffect(() => {
    if (isError) {
      navigate("/not-found");
    }
  }, [isError]);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box component="main" sx={wrapper}>
      {isSuccess && typeof data !== "string" && (
        <>
          <Typography variant="h4" component="h4">
            {data.logoUrl}
          </Typography>
          <Box>
            <img
              style={imgStyles}
              alt={data.nameOriginal}
              src={
                data.logoUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
            />
          </Box>
          <Box></Box>
        </>
      )}
    </Box>
  );
};

export default CurrentMovie;
