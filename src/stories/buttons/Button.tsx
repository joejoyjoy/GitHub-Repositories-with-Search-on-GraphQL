import './button.scss';

interface ButtonProps {
  primary?: boolean;
  label: string;
  customPadding?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  primary = false,
  label,
  customPadding,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button-component--primary' : 'button-component--secondary';
  return (
    <a
      type="button"
      className={['button-component', mode].join(' ')}
      style={{ padding: customPadding }}
      {...props}
    >
      {label}
    </a>
  );
};
