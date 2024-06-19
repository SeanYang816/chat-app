import React, { useReducer } from "react";
import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import { StatusDot } from "components/StatusDot";
import { ChatItemType } from "./types";
import { mockData } from "./mockData";
import { ChatList } from "components/ChatList";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";

// Define Action Types
type ActionType = 
  | { type: 'ADD_MESSAGE'; payload: ChatItemType }
  | { type: 'LOAD_MESSAGES'; payload: ChatItemType[] };

// Initial State
const initialState: ChatItemType[] = mockData;

// Reducer Function
function reducer(state: ChatItemType[], action: ActionType): ChatItemType[] {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'LOAD_MESSAGES':
      return action.payload;
    default:
      throw new Error('Unknown action.');
  }
}

export function Chat() {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleMessageSend(values.message);
      resetForm();
    },
  });

  const handleMessageSend = (message: string) => {
    try {
      const isOwn = Math.random() > 0.5;
      const newMessage: ChatItemType = {
        avatarSrc: "path/to/avatar.png", // Replace with the correct path
        name: isOwn ? "Anya Forger" : "Loid Forger",
        message,
        timestamp: new Date().toLocaleTimeString(),
        isSelf: isOwn,
      };
  
      dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

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
        <Stack direction="row" spacing={2} p={1} alignItems="center">
          <Avatar alt="Anya Forger" src={'anyaImage'} />
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
        <Stack gap={2} pl={2} pr={2}>
          <ChatList data={state} />
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
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              {...formik.getFieldProps("message")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" edge="end">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Box>
      </Stack>
    </Stack>
  );
}
