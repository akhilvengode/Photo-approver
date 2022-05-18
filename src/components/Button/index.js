import { ButtonStyled } from './styles';

export const Button = ({
  onClick,
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};
