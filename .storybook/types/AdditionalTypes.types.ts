/**
 * Define a generic type parameter T that extends React.ComponentProps<typeof T> with optional addition of parameter A (to assign darkmode for example).
 */
export type ExtendedStoryProps<
  T extends React.ComponentType<any>,
  A extends unknown,
> = React.ComponentProps<T> & A;

/**
 * Type for to toggle the darkmode.
 */
export type DarkModeType = { darkMode: boolean };
