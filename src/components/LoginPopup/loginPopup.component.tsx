import { Path } from "../../service/router/RouteLines";
import { useActions } from "../../hooks/useActions";
import {
	Button,
	CssBaseline,
	TextField,
	Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useNavigate } from "react-router";

function LoginPopup({ open, handleClose }: { open: boolean; handleClose: any }) {
	const usernameRef = useRef<HTMLInputElement>(null);
	const loginRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { setUser } = useActions();
	const navigate = useNavigate();

	const handleClick = () => {
		if (
			usernameRef.current &&
			loginRef.current &&
			passwordRef.current &&
			passwordRef.current.value !== "" &&
			usernameRef.current.value !== "" &&
			loginRef.current.value !== ""
		) {
			setUser({
				login: loginRef.current.value,
				username: usernameRef.current.value,
				password: passwordRef.current.value,
			});
			navigate(Path.PersonalArea);
			handleClose();
		}
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={{ width: "500px", margin: "0 auto" }}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "white",
						padding: "16px",
						borderRadius: "8px",
					}}>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							autoFocus
							inputRef={usernameRef}
						/>
						<TextField margin="normal" required fullWidth id="login" label="Login" autoFocus inputRef={loginRef} />
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							inputRef={passwordRef}
						/>
						<Button onClick={handleClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
}

export default LoginPopup;
