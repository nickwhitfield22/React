function FormRow({ label, children, error }) {
  return (
    <div className="grid grid-cols-3 gap-0">
      {label && (
        <label
          className="text-md font-normal text-black"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <label className="text-xs text-red-600">{error}</label>}
    </div>
  );
}

export default FormRow;
