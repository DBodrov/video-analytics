import { useMemo } from 'react';
import { container } from 'tsyringe';
import { Class } from 'type-fest';

type Values<Ctors extends Class[]> = {
  // @ts-ignore
  [K in keyof Ctors]: InstanceType<Ctors[K]>;
};

export function useInject<T extends Class[]>(...ctors: T): Values<T> {
  return useMemo(
    () => ctors.map(ctor => container.resolve(ctor)) as Values<T>,
    [ctors],
  );
}
