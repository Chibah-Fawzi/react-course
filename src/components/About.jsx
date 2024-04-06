import Article from "./Article";
import Text from "./Text";
export default function About({ username }) {
  return (
    <div>
      <h2>ABOUT PAGE:</h2>
      <Article username={username} />
      <Text username={username} />
    </div>
  );
}
