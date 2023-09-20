import styled from "styled-components/native";

// 設定主題text default setting
const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

// 設定主題body text setting
const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

// 設定主題hint text setting
const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

// 設定主題error text setting
const error = (theme) => `
    color: ${theme.colors.text.error};
`;

// 設定主題caption text setting
const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

// 設定主題label text setting
const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

//宣告變數的value有哪些property
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

// 預設text的變數是body
Text.defaultProps = {
  variant: "body",
};