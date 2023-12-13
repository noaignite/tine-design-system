export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className="font-bold bg-red-500">
      {children}
    </button>
  );
}

Button.displayName = 'Button';
