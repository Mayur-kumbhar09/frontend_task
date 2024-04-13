import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MessageInput({ addMessage }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      addMessage(message);
      setMessage("");
    }
  };

  return (
    <Paper
      sx={{
        textAlign: "start",
        pb:"8px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <TextField
        sx={{ width: "90%" }}
        label="Type your message"
        variant="outlined"
        value={message}
        onChange={handleMessageChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        style={{ marginLeft: 10 }}
      >
        <SendIcon fontSize="large" />
      </Button>
    </Paper>
  );
}

export default MessageInput;
