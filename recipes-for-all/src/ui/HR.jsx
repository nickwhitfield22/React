function HR({ children }) {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow rounded border-t border-gray-400"></div>
      <span className="mx-4 flex-shrink text-gray-400">{children}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}

export default HR;
