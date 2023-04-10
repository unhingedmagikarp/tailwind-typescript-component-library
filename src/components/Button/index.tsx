import React from 'react';

type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles =
    'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg',
  };

  const colorStyles = {
    primary: {
      filled: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
      outlined:
        'bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400',
    },
    secondary: {
      filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
      outlined:
        'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400',
    },
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};
