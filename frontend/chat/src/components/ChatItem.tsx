import React, { ReactNode } from "react";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";

export type ChatItemProps = {
  avatarSrc: string;
  name: string;
  message: string;
  timestamp: string;
  isSelf: boolean;
};

const TimeStamp: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  return (
    <Typography
      component="div"
      variant="caption"
      textAlign="left"
      whiteSpace="nowrap"
      alignSelf="flex-end"
      color={theme.palette.grey[600]}
    >
      {children}
    </Typography>
  );
};

const SelfMessage: React.FC<ChatItemProps> = ({
  avatarSrc,
  name,
  message,
  timestamp,
}) => (
  <Stack spacing={2} alignItems="flex-end">
    <Stack direction="row" spacing={2} maxWidth={'85%'}>
      <Stack spacing={1} direction="row">
        <TimeStamp>{timestamp}</TimeStamp>
        <Box
          sx={{
            backgroundImage: "linear-gradient(135deg, #FE9F5D, #FF3C56)",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography color="whitesmoke">{message}</Typography>
        </Box>
      </Stack>
      <Avatar alt={name} src={avatarSrc} />
    </Stack>
  </Stack>
);

const OtherMessage: React.FC<ChatItemProps> = ({
  avatarSrc,
  name,
  message,
  timestamp,
}) => (
  <Stack spacing={2} alignItems="flex-start">
    <Stack direction="row" spacing={2} maxWidth={'85%'}>
      <Avatar alt={name} src={avatarSrc} />
      <Stack spacing={1} direction="row">
        <Box
          sx={{
            backgroundImage: "linear-gradient(135deg, #F8305C, #8425CA)",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography color="whitesmoke">{message}</Typography>
        </Box>
        <TimeStamp>{timestamp}</TimeStamp>
      </Stack>
    </Stack>
  </Stack>
);

export const ChatItem: React.FC<ChatItemProps> = ({
  avatarSrc,
  name,
  message,
  timestamp,
  isSelf,
}) => {
  return isSelf ? (
    <SelfMessage
      avatarSrc={avatarSrc}
      name={name}
      message={message}
      timestamp={timestamp}
      isSelf={isSelf}
    />
  ) : (
    <OtherMessage
      avatarSrc={avatarSrc}
      name={name}
      message={message}
      timestamp={timestamp}
      isSelf={isSelf}
    />
  );
};
