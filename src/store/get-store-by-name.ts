import { container } from 'tsyringe';

export function getStoreByName(name: string): any {
  const entry: any = Array.from(
    (container as any)._registry._registryMap.entries(),
  ).find((item: any) => item[0].name === name);
  const instance = entry?.[1][0].instance;
  return instance;
}
