function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-10 flex flex-col space-y-8 rounded-lg bg-slate-100 px-10 pb-10 pt-5"
    >
      {children}
    </form>
  );
}

export default Form;
