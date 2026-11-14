import "react";

/* Inline styles set CSS custom properties, such as --cs-d on the project drawings. */
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
