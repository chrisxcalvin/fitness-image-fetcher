function Header({ title, subtitle }) {
  return (
    <header className="text-center py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </header>
  );
}

export default Header;
