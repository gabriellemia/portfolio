import "./Button.css";

interface ButtonProps {
  url: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ url, label }) => {
  return (
    <a href={url} target="_blank" className="link-btn">
      {label}
    </a>
  );
};
export default Button;
