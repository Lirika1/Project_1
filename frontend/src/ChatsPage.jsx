import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'bdd454c6-3164-4ca3-a2bd-e223edb68ef0',
    props.user.username,
    props.user.secret
  );

  return (
    <div className="background">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps}  />
    </div>
  );
};

export default ChatsPage;
