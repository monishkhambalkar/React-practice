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

  return (
    <div className="tutorial">
      <div className="mb-4 flex flex-row items-center gap-4">
        <TabButton
          title="About"
          onClick={() => selectTab("about")}
          variant={tab === "about" ? "primary" : "secondary"}
        />
        <TabButton
          title="Posts"
          onClick={() => selectTab("posts")}
          variant={tab === "posts" ? "primary" : "secondary"}
        />
        <TabButton
          title="Contact"
          onClick={() => selectTab("contact")}
          variant={tab === "contact" ? "primary" : "secondary"}
        />
      </div>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
}

export default App;
