import 'styled-components';
import { AppTheme } from '../themes/appTheme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
