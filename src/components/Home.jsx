import Nav from "./Nav";

// On récupére la propriété username
export default function Home({ username }) {
  return (
    <div style={{ border: "1px solid white", margin: "10px" }}>
      <h2>HOME PAGE:</h2>

      {/* PROPS */}
      <Nav username={username} />
    </div>
  );
}
