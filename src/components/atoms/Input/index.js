import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Keyboard, StyleSheet, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {conditionStyle} from '../../../utils/style';
import {Body3} from '../Typography';

const Input = ({
  errorMessage,
  color,
  rounded,
  underline,
  defaultStyle,
  style,
  activeStyle,
  errorStyle,
  errorColor,
  iconLeft,
  iconRight,
  onChangeText,
  isValid,
  ...otherProps
}) => {
  const {colors} = useTheme();
  const [focused, setFocus] = useState(false);
  const [error, setError] = useState(false);

  const inputStyle = {
    ...style,
    ...conditionStyle(underline, styles.underline(colors.grey)),
    ...conditionStyle(defaultStyle, styles.default(colors.grey)),
  };

  const inputActiveStyle = {
    ...activeStyle,
    ...conditionStyle(
      underline,
      styles.inputUnderlineStyle(color || colors.primary),
    ),
    ...conditionStyle(
      defaultStyle,
      StyleSheet.flatten([
        styles.default(colors.grey),
        styles.inputDefaultStyle(color || colors.primary),
      ]),
    ),
  };

  const inputErrorStyle = {
    ...errorStyle,
    ...conditionStyle(
      underline,
      styles.inputUnderlineStyle(errorColor || colors.error),
    ),
    ...conditionStyle(
      defaultStyle,
      StyleSheet.flatten([
        styles.default(colors.grey),
        styles.inputDefaultStyle(errorColor || colors.error),
      ]),
    ),
  };

  const handleTextChange = (value) => {
    if (onChangeText) {
      onChangeText(value);
    }

    if (isValid) {
      setError(!isValid(value));
    }
  };

  return (
    <Container>
      <Wrap
        style={
          error ? inputErrorStyle : focused ? inputActiveStyle : inputStyle
        }>
        <StyledInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onSubmitEditing={() => {
            setFocus(true);
            Keyboard.dismiss();
          }}
          placeholderTextColor={
            error ? errorColor || colors.error : colors.grey
          }
          {...otherProps}
          onChangeText={handleTextChange}
        />
      </Wrap>
      {error && errorMessage && (
        <StyledError color={errorColor || colors.error}>
          {errorMessage}
        </StyledError>
      )}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

const Wrap = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  height: 45px;
  flex-direction: row;
`;

const StyledInput = styled.TextInput`
  width: 100%;
`;

const StyledError = styled(Body3)`
  padding: 0px 0px 0px 20px;
`;
const styles = StyleSheet.create({
  inputUnderlineStyle: (color) => ({
    borderBottomColor: color,
    borderBottomWidth: 2,
  }),
  inputDefaultStyle: (color) => ({
    borderColor: color,
    borderWidth: 2,
  }),
  underline: (inputGrey) => ({
    borderBottomColor: inputGrey,
    borderBottomWidth: 0.9,
  }),
  default: (inputGrey) => ({
    borderColor: inputGrey,
    borderWidth: 0.9,
    paddingHorizontal: 5,
    borderRadius: 10,
  }),
});

Input.propTypes = {
  color: PropTypes.string,
  isValid: PropTypes.func,
  errorMessage: PropTypes.string,
  activeStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  rounded: PropTypes.bool,
  underline: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  noStyle: PropTypes.bool,
  errorColor: PropTypes.string,
  ...TextInput.propTypes,
};

Input.defaultProps = {
  defaultStyle: true,
  activeStyle: {},
  errorStyle: {},
};

export default Input;
