import { BsTriangleFill } from 'react-icons/bs'
import './buttonWithSvg.scss';

interface ButtonProps {
  active?: boolean;
  selected?: boolean;
  label: string;
  onClick?: () => void;
}

export const ButtonSvg = ({
  active = false,
  selected = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = active ? 'button-svg-component--active' : 'button-svg-component--inActive';
  const triangle = selected ? 'selected' : '';
  return (
    <span
      className={['button-svg-component', mode].join(' ')}
      {...props}
    >
      <BsTriangleFill className={triangle} />
      <p>{label}</p>
    </span>
  );
};
