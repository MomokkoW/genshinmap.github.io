/**
 * Provides an error handler which will either display a component or,
 * if the component throws an error, display an appropriate error handler.
 *
 * Any component, not just the main page component, can utilize this wrapper.
 * Utilizing this wrapper on an unstable component will replace it with the error handler,
 * while preventing the parent DOM from being dropped.
 */

import React, {
  ClassAttributes,
  ClassType,
  Component,
  ComponentClass,
  ComponentState,
  FunctionComponent,
  ReactElement,
} from 'react';

interface ErrorHandlerState {
  error: Error | undefined; // Is either empty or an Error object.
  errorInfo: React.ErrorInfo | undefined; // Is either empty or an ErrorInfo object.
}

interface ErrorHandlerProps {
  // I require children...
  children: JSX.Element | JSX.Element[];
  // A component to initialize. Takes the state as props.
  errorHandler: ErrorHandlerComponent;
}

export type ErrorHandlerComponent =
  | FunctionComponent<Readonly<ErrorHandlerState>>
  | ComponentClass<Readonly<ErrorHandlerState>>;

/**
 * Wraps the component in a error boundary, and renders the error handler component in the event of an error.
 *
 * Note that this MUST wrap one or more components. If the direct child of the error handler throws an error,
 * the error handler itself cannot render and the issue gets passed up to the parent.
 * @param {Component} children The components to render.
 * @param {Function<Component>} errorHandler If `component` crashes, create an instance of this type and render it instead.
 */
class ErrorHandler extends React.Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = {
      error: undefined,
      errorInfo: undefined,
    };
  }

  static getDerivedStateFromError(error: Error /* , errorPartialInfo, state */): ErrorHandlerState {
    // Update state so the next render will show the fallback UI.
    // console.log(`Get derived state from error: ${errorPartialInfo}`);
    return { error, errorInfo: undefined };
  }

  /*
    The componentDidCatch Lifecycle Method is used to record
    the error which occurred. The componentDidCatch is not
    a factor in the rendering of the fallback error UI. In fact,
    this method will run after the re-rendering of the component
    to display the fallback UI
    If a componentDidCatch method is defined but the 
    getDerivedStateFromError method is not defined then an error
    will appear in the console stating that the getDerivedStateFromError
    should be defined.
    Here is the execution order:
    ** Task 1: JavaScript **
    - Error Boundary Component: Render
    - Error Thrown in Child Component
    - Error Boundary Component: getDerivedStateFromError
    - Error Boundary Component: Render to display Fallback UI
    - Error Boundary Component: componentDidCatch
    ** Task 2: Browser UI **
    - Paint
  */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Add side effects here.
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactElement {
    const { error } = this.state;
    const { children, errorHandler } = this.props;

    // If there is an error, display the error handler
    // instead of the base page.
    if (error) {
      console.error('Error caught, rendering error handler.');
      console.error(errorHandler);
      return React.createElement(errorHandler, this.state);
    }

    // Else, render the child components.
    return <>{children}</>;
  }
}

export default ErrorHandler;

export const handleError = <
  P extends unknown,
  T extends Component<P, ComponentState>,
  C extends ComponentClass<P>
>(
  component: ClassType<P, T, C>,
  errorHandler: ErrorHandlerComponent
) => (props: (ClassAttributes<T> & P) | null): ReactElement => {
  return (
    <ErrorHandler errorHandler={errorHandler}>{React.createElement(component, props)}</ErrorHandler>
  );
};
