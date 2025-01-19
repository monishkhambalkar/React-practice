import { useState } from "react";
import "./App.css";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";
import TabButton from "./TabButton";

function App() {
  const [tab, setTab] = useState("about");

  const selectTab = (tab) => {
    setTab(tab);
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    links: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div className="tutorial">
      <nav style={styles.navbar}>
        <div style={styles.logo}>MyApp</div>
        <div style={styles.links}>
          <TabButton
            title="About"
            onClick={() => selectTab("about")}
            variant={tab === "about" ? "primary" : "secondary"}
            className="w-32"
          >
            About
          </TabButton>
          <TabButton
            title="Posts"
            onClick={() => selectTab("posts")}
            variant={tab === "posts" ? "primary" : "secondary"}
            className="w-32"
          >
            Posts
          </TabButton>
          <TabButton
            title="Contact"
            onClick={() => selectTab("contact")}
            variant={tab === "contact" ? "primary" : "secondary"}
            className="w-32"
          >
            Contact
          </TabButton>
        </div>
      </nav>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
}

export default App;
