import React, { FC } from "react";
import { images } from "../../../data";

/**
 * Component to render the logo for the side nav.
 */
export const RenderLogo: FC = () => (
  <img src={images.logo} className="w-8 h-8 select-none" alt="logo" />
);
