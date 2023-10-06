import { useEffect, useState } from 'react';
import { Eye } from '../Icons/Eye';
import { Text } from '../Text/Text';
import * as S from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({ errorMessage, label, passwordMode = false }: InputProps) => {
  const [togglePasswordMode, setTogglePasswordMode] = useState(passwordMode);

  const handleTogglePassword = () => setTogglePasswordMode(!togglePasswordMode);

  useEffect(() => {
    setTogglePasswordMode(passwordMode);
  }, [passwordMode]);

  return (
    <div>
      {label ? (
        <S.InfoTextWrapper>
          <Text $weight='medium'>{label}</Text>
        </S.InfoTextWrapper>
      ) : null}
      <S.Container data-testid='input-component-container' $errorMessage={errorMessage}>
        <S.Input data-testid='input-component' type={togglePasswordMode ? 'password' : 'text'} />
        {passwordMode && (
          <S.SvgWrapper>
            <Eye onClick={handleTogglePassword} />
          </S.SvgWrapper>
        )}
      </S.Container>
      {errorMessage ? (
        <S.InfoTextWrapper>
          <Text $color='red600' $size='s' $weight='bold'>
            {errorMessage}
          </Text>
        </S.InfoTextWrapper>
      ) : null}
    </div>
  );
};
