import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log(`mostrar  ${value}`);
  return <small>{value}</small>;
});
