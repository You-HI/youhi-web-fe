import { Provider, WritableAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWritableAtom = WritableAtom<unknown, any[], any>;
type InitialValues = [AnyWritableAtom, unknown][];

interface JotaiProviderProps {
  initialValues: InitialValues;
  children: React.ReactElement;
}

const HydrateAtoms = ({ initialValues, children }: JotaiProviderProps) => {
  useHydrateAtoms(initialValues);
  return children;
};

const JotaiProvider = ({ initialValues, children }: JotaiProviderProps) => {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
};

export default JotaiProvider;
