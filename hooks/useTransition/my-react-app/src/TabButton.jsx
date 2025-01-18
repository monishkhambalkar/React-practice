import { useTransition } from "react";
import Button from "../components/ui/Button/Button";

const TabButton = ({ onClick, ...rest }) => {
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

  return <Button {...rest} onClick={handleClick} />;
};

export default TabButton;
