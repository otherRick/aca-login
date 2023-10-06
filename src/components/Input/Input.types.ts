export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'style' | 'className'
  > {
  label?: string;
  passwordMode?: boolean;
  errorMessage?: string;
}

export type InputContainerProps = Omit<InputProps, 'errorMessage'> & { $errorMessage?: string };
