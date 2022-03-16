import { useContext } from "react";

export const useContextFactory = (name, context) => () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ctx = useContext(context);
  if (ctx === undefined) {
    throw new Error(
      `use ${name}Context must be used withing a ${name}ContextProvider.`
    );
  }
  return ctx;
};
