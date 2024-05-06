import { ReactElement } from "react";

interface DynamicComponentProps {
  Component?: ReactElement;
  Fallback?: ReactElement;
  styles?: {
    className?: string;
    fallbackClassName?: string;
    fallbackSize?: string;
    size?: number;
  };
}

/**
 * Dynamic component to render the component if exists.
 * Used the type of the component to create a JSX element with the component props.
 *
 * @param className The class names to style the component.
 * @param Component The component to render.
 * @param fallback The fallback component if the `Component` does not exists.
 * @param styles Optional styles applied to the component.
 * @returns The component if exists.
 */
export const DynamicComponent = ({
  Component,
  Fallback,
  styles,
}: DynamicComponentProps) => {
  if (Component) {
    return (
      <Component.type
        {...Component.props}
        className={styles?.className}
        size={styles?.size}
      />
    );
  } else if (Fallback) {
    return (
      <Fallback.type
        {...Fallback.props}
        className={styles?.fallbackClassName}
        size={styles?.fallbackSize}
      />
    );
  }
  return null;
};

export const DynamicComponentWithWrapper = ({
  Wrapper,
  DynamicComponent,
}: {
  Wrapper: ReactElement;
  DynamicComponent?: ReactElement;
}) => {
  if (DynamicComponent) {
    return <Wrapper.type {...Wrapper.props}>{DynamicComponent}</Wrapper.type>;
  }
  return null;
};
