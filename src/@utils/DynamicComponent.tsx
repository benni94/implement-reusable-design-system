import { ReactElement } from "react";

interface DynamicComponentProps {
  Component?: ReactElement;
  styles?: {
    className?: string;
    size?: number;
  };
}

/**
 * Dynamic component to render the component if exists.
 * Used the type of the component to create a JSX element with the component props.
 *
 * @param className The class names to style the component.
 * @param Component The component to render.
 * @param styles Optional styles applied to the component.
 * @returns The component if exists.
 */
export const DynamicComponent = ({
  Component,
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
