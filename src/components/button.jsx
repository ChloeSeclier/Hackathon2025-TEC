import { Link } from 'react-router-dom';

import '../css/button.css';

export default function Button({
  link,
  href,
  className,
  children,
  onClick,
  disabled = false,
  title = '',
}) {
  return link ? (
    <Link
      to={href}
      className={`button ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}
