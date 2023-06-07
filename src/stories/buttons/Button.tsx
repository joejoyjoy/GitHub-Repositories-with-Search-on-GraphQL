import './button.scss';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button-component--primary' : 'button-component--secondary';
  return (
    <a
      type="button"
      className={['button-component', mode].join(' ')}
      {...props}
    >
      {label}
    </a>
  );
};
