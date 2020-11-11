// import original module declarations
import "styled-components";

interface Font {
  size?: string;
  lineHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  fontWeight?: number;
  textTransform?: string;
  fontFamily?: string;
}
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    leading?: () => number;

    utility?: {
      radio?: number;
      rootSize?: number;
      lineHeight?: number;
      borderRadius?: number;
    };

    colors?: {
      primaryBrand?: string;
      secondaryBrand?: string;
      tertiaryBrand?: string;
      dark?: string;
      text?: string;
      subtleText?: string;
      light?: string;
    };

    components?: {
      padding?: string;
      marginBottom?: string;
      spacing?: string;
    };

    buttons: {
      background?: string;
      borderRadius?: string;
      padding?: string;
      text: {
        color: string;
      };
    };

    typography?: {
      body?: {
        size?: string;
        font?: string;
      };
      primaryTitle?: Font;
      secondaryTitle?: Font;
      tertiaryTitle?: Font;
      subHeading?: Font;
      preHeading?: Font;
      button?: Font;
    };
  }
}
