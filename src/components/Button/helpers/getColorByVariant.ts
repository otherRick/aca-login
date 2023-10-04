import { colors } from '../../../themes/appTheme';
import { ButtonVariantType, VariantToColorMapType } from '../Button.types';

const variantToColorMap: VariantToColorMapType = {
  primary: {
    backgroundColor: colors.navy600,
    color: 'navy900'
  },
  secondary: {
    backgroundColor: colors.navy900,
    color: 'navy000'
  }
};

export const getColorByVariant = (variant: ButtonVariantType) => variantToColorMap[variant];
