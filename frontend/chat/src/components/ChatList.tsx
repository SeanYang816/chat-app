import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { StatusDot } from "components/StatusDot";
import { ChatItem } from "components/ChatItem";
import { ChatItemType } from "pages/chat/types";

type ChatListProps = {
  data: ChatItemType[];
};

export const ChatList: React.FC<ChatListProps> = ({ data }) => {
  const theme = useTheme();
  return (
      <Stack gap={2} width={1000}>
        {data.map((item, index) => (
          <ChatItem
            key={index}
            isSelf={item.isSelf}
            name={item.name}
            avatarSrc={item.avatarSrc}
            message={item.message}
            timestamp={item.timestamp}
          />
        ))}
      </Stack>
  );
};
