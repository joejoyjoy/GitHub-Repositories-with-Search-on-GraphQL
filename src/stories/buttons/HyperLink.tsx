import './hyperLink.scss';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  href?: string;
}

export const HyperLink = ({
  primary = true,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'hyper-link--primary' : 'hyper-link--secondary';
  return (
    <a
      type="button"
      className={`hyper-link ${mode}`}
      {...props}
    >
      {label}
    </a>
  );
};
