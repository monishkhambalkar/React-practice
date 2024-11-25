import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Header />
          <HomePage />
          {/* Uncomment below for navigation simulation */}
          {/* <CartPage /> */}
          {/* <ProfilePage /> */}
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
