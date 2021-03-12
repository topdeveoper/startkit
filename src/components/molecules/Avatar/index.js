import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Button} from '../../atoms';

export default function Avatar({source, size, disabled, onPress, ...rest}) {
  return (
    <Button disabled={disabled} onPress={onPress} transparent>
      <Image source={source} size={size} {...rest} />
    </Button>
  );
}

const Image = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
`;

Avatar.propTypes = {
  source: PropTypes.object.isRequired,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Avatar.defaultProps = {
  size: 24,
  disabled: false,
  onPress: () => {},
};
