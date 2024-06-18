import React from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';

export type ChatItemProps = {
  avatarSrc: string;
  name: string;
  message: string;
  timestamp: string;
  isSelf: boolean;
}

export const ChatItem: React.FC<ChatItemProps> = ({ avatarSrc, name, message, timestamp, isSelf }) => {
  const getBackgroundImage = (isSelf: boolean) => (
    isSelf
      ? 'linear-gradient(135deg, #FE9F5D, #FF3C56)'
      : 'linear-gradient(135deg, #F8305C, #8425CA)'
  );

  return (
    <Stack spacing={2} alignItems={isSelf ? 'flex-end' : 'flex-start'}>
      <Stack direction="row" spacing={2}>
        {!isSelf && <Avatar alt={name} src={avatarSrc} />}
        <Stack spacing={0.25}>
          <Box
            maxWidth={300}
            sx={{
              backgroundImage: getBackgroundImage(isSelf),
              padding: 2,
              borderRadius: 4,
            }}
          >
            <Typography color='whitesmoke'>
              {message}
            </Typography>
          </Box>
          <Typography component='div' variant="caption" textAlign={isSelf ? 'left' : 'right'}>
            {timestamp}
          </Typography>
        </Stack>
        {isSelf && <Avatar alt={name} src={avatarSrc} />}
      </Stack>
    </Stack>
  );
};