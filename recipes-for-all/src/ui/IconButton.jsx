function IconButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="border-none bg-none">
      {children}
    </button>
  );
}

export default IconButton;
