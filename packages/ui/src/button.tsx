export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      {...other}
      className="font-bold bg-blue-900 p-4 text-white rounded-md"
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
