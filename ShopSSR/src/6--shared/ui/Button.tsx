interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
  }
  
  export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
    const base =
      'rounded-lg px-4 py-2 font-semibold transition duration-200 focus:outline-none cursor-pointer';
  
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    };
  
    return (
      <button
        {...props}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  