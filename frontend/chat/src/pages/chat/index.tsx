import React from "react";
import { Header } from "shared/components/Header";
import anyaImage from "assets/anya-smile.png";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { StatusDot } from "components/StatusDot";
import { ChatItemType } from "./types";
import { mockData } from "./mockData";
import { ChatList } from "components/ChatList";

export function Chat() {
  const theme = useTheme();
  
  return (
    <Stack gap={2}>
      <Stack direction="row" spacing={2}>
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
      
      <ChatList data={mockData} />

    </Stack>
  );
}
