import { DefaultTheme, RuleSet, css } from 'styled-components'

export type Colors = {
  GRAY: string
  RED: string
  GREEN: string
  BLUE_1: string
  BLUE_2: string
  TEXT_GRAY: string
}

export type TypoGraphies = {
  MAIN_TITLE: RuleSet<object>
  HEADING: RuleSet<object>
  DEFAULT: RuleSet<object>
  HELPER_TEXT: RuleSet<object>
  BUTTON: RuleSet<object>
  SUB_TITLE: RuleSet<object>
  SUB_TEXT: RuleSet<object>
}

export const theme: DefaultTheme = {
  colors: {
    GRAY: '#717171',
    RED: '#D72F2F',
    GREEN: '#2BCD3B',
    BLUE_1: '#99CEFF',
    BLUE_2: '#59A4FB',
    TEXT_GRAY: '#1E1E1E',
  },
  typographies: {
    MAIN_TITLE: css`
      font-size: 54px;
      font-weight: 600;
      line-height: 65px;
    `,
    HEADING: css`
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
    `,
    DEFAULT: css`
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    `,
    HELPER_TEXT: css`
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    `,
    BUTTON: css`
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
    `,
    SUB_TITLE: css`
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
    `,
    SUB_TEXT: css`
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    `,
  },
}
