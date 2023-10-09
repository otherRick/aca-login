export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'style' | 'className'
  > {
  label?: string;
  passwordMode?: boolean;
  errorMessage?: string;
  $fullWidth?: boolean;
}

export type InputContainerProps = Omit<InputProps, 'errorMessage'> & {
  $errorMessage?: string;
  $isWeb?: boolean;
};
