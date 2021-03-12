import * as React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

import {SVGError} from '../../../../assets/svg';
import {
  DividerVertical,
  DividerHorizontal,
  Body1,
  Center,
  H3,
  Row,
  DynIcon,
} from '../../atoms';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  onRefresh = () => {
    this.setState({hasError: false});
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <StyledCenter>
          <SVGError />
          <DividerVertical spacing={20} />
          <Title>Something went wrong</Title>
          <DividerVertical spacing={20} />
          <TouchableOpacity onPress={this.onRefresh}>
            <StyledRow>
              <DynIcon
                name="refresh"
                type="FontAwesome"
                size={30}
                color={DefaultTheme.colors.primary}
                disabled
              />
              <DividerHorizontal spacing={8} />
              <Body1>Refresh</Body1>
            </StyledRow>
          </TouchableOpacity>
        </StyledCenter>
      );
    }

    return this.props.children;
  }
}

const StyledCenter = styled(Center)`
  flex: 1;
`;

const Title = styled(H3)`
  color: ${DefaultTheme.colors.primary};
`;

const StyledRow = styled(Row)`
  align-items: center;
`;
