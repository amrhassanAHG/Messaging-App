import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="59a78e7c-8363-4292-b3df-a655597fc487"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
