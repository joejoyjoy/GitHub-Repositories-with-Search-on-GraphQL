import { CiSearch } from 'react-icons/ci';
import './searchBar.scss';

interface SearchBarProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  value,
  ...props
}: SearchBarProps) => {

  return (
    <section className="search-bar-component">
      <div className="search-bar-component__icon">
        <CiSearch />
      </div>
      <input
        type="text"
        value={value}
        placeholder="Search..."
        className="search-bar-component__search"
        {...props}
      />
    </section>
  );
};
