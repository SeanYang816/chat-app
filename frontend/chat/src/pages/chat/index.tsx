import React from "react";
import { Header } from "shared/components/Header";
import anyaImage from "assets/anya-smile.png";
import {
  Avatar,
  Box,
  Card,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { StatusDot } from "components/StatusDot";
import { ChatItemType } from "./types";
import { mockData } from "./mockData";
import { ChatList } from "components/ChatList";
import { useFormik } from "formik";
import { Send } from "@mui/icons-material";

export function Chat() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: () => {},
  });

  return (
    <Stack>
      <Box
      width={800}
      height={theme.spacing(10)}
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
      >
        <Stack direction="row" spacing={2} p={1} alignItems='center'>
          <Avatar alt="Anya Forger" src={anyaImage} />
          <Stack>
            <Stack direction="row" alignItems="center">
              <Typography mr={1}>Anya Forger</Typography>
              <StatusDot color="success" />
            </Stack>
            <Typography variant="caption">Active Now</Typography>
          </Stack>
        </Stack>

        <Divider />
      </Box>
    
      <Stack
        width={800}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          height: `calc(100vh - ${theme.spacing(18)})`,
          overflowY: "scroll",
        }}
      >
        <Stack gap={2}>
          <ChatList data={mockData} />
        </Stack>

        {/** Message Input */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "inherit",
            background: "white",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            {...formik.getFieldProps("message")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {}} edge="end">
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
