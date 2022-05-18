import { Component } from 'react';
import { Button } from '../Button';
import { Container } from './styles';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return error ? { error: true } : { error: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    return this.state.error ? (
      <Container>
        <h1>Something went wrong</h1>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </Container>
    ) : (
      this.props.children
    );
  }
}
