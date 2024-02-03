import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/store";

import FavoriteMovie from "../../components/FavoriteMovie";
import { personalAreaWrapper, personalAreaWrapper__title, userDataWrapper, favoritesWrapper } from "./styles";
import HistoryMovie from "../../components/HistoryMovie";

function PersonalArea() {
	const { user } = useSelector((state: RootState) => state.user);
	const favoriteIdList = useSelector((state: RootState) => state.favorites);
	const historyIdList = useSelector((state: RootState) => state.history);

	function renderFavoriteList(favoritesId: number[]) {
		if (!favoritesId) {
			return <></>;
		}

		return favoritesId.map((favoriteId, index) => {
			return <FavoriteMovie key={index} movieId={favoriteId} />;
		});
	}

	function renderHistoryList(favoritesId: number[]) {
		if (!favoritesId) {
			return <></>;
		}

		return favoritesId.map((favoriteId, index) => {
			return <HistoryMovie key={index} movieId={favoriteId} />;
		});
	}

	return (
		<Box sx={personalAreaWrapper} component="main">
			<Typography variant="h4" component="h4" sx={personalAreaWrapper__title}>
				Personal area
			</Typography>
			<Typography variant="h5" component="h5" sx={personalAreaWrapper__title}>
				User data
			</Typography>
			<Box sx={userDataWrapper}>
				<Typography variant="body1" component="span" sx={personalAreaWrapper__title}>
					Name: {user?.username}
				</Typography>
				<Typography variant="body1" component="span" sx={personalAreaWrapper__title}>
					Login: {user?.username}
				</Typography>
				<Typography variant="body1" component="span" sx={personalAreaWrapper__title}>
					Password: {user?.username}
				</Typography>
			</Box>

			<Box sx={favoritesWrapper}>{renderFavoriteList(favoriteIdList?.favorites as number[])}</Box>

			<Box>{renderHistoryList(historyIdList?.watched as number[])}</Box>
		</Box>
	);
}

export default PersonalArea;
