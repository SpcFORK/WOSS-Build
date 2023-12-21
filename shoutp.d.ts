interface ShoutInterface {
  total: Record<string, any>;

  createShout(name?: string, cb?: (count: number, Self: Record<string, any>) => void): void;
  destroyShout(name: string): void;
  isShout(name: string): boolean;
}

declare const Shout: ShoutInterface;

export default Shout;