/**
 * Define a generic type parameter T that extends React.ComponentProps<typeof T> with optional addition of parameter A (to assign darkmode for example).
 */
export type ExtendedStoryProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  A extends unknown,
> = React.ComponentProps<T> & A;

/**
 * Type for to toggle the darkmode.
 */
export type DarkModeType = { darkMode: boolean };
