import { useTransition } from "react";

const TabButton = ({ onClick, children, variant = "secondary", ...rest }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      if (onClick) {
        onClick();
      }
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  const buttonStyle = {
    backgroundColor: variant === "primary" ? "blue" : "gray",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    opacity: isPending ? 0.5 : 1,
  };

  return (
    <button onClick={handleClick} style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default TabButton;
