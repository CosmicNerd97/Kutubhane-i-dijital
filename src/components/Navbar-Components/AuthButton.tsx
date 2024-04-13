/** @format */

import { Button, ButtonProps } from "@radix-ui/themes";

const AuthButton = ({
  style,
  size = "4",
  color = "gray",
  variant = "solid",
  highContrast = true,
  onClick,
  content,
  ...props
}: ButtonProps) => (
  <Button
    {...props}
    onClick={onClick}
    style={{ ...style, cursor: "pointer" }}
    size={size}
    color={color}
    variant={variant}
    highContrast={highContrast}
  >
    {content}
  </Button>
);

export default AuthButton;
