function Button({ children, className,onClick }) {
  return (
    <button  onClick={onClick} className={`px-4 py-2 rounded-lg  ${className} `}>
      {children}
    </button>
  );
}

export default Button;