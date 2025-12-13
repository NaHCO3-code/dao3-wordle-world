type Effect = () => void;

let activeEffect: Effect | null = null;

const depsMap = new WeakMap<object, Set<Effect>>();

function track(obj: object) {
  if (!activeEffect) {
    return;
  }
  let dep = depsMap.get(obj);
  if (!dep) {
    dep = new Set();
    depsMap.set(obj, dep);
  }
  dep.add(activeEffect);
}

function trigger(obj: object) {
  const dep = depsMap.get(obj);
  if (!dep) {
    return;
  }
  dep.forEach((effect) => effect());
}

export type xRef<T> = xignal<{
  value: T;
}>;

export type xComputed<T> = {
  readonly value: T;
};

export type xignal<T> = T;

export function xref<T>(value: T) {
  return {
    get value() {
      track(this);
      return value;
    },
    set value(v: T) {
      if (v === value) {
        return;
      }
      value = v;
      trigger(this);
    },
  };
}

export function xreactive<T extends object>(obj: T): xignal<T> {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      track(target);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      const result = Reflect.set(target, prop, value, receiver);
      trigger(target);
      return result;
    },
  });
}

export function xwatch<T>(
  update: () => T,
  callback: ((value: T) => void) | (() => void)
) {
  const effect = () => {
    activeEffect = effect;
    const res = update();
    callback(res);
    activeEffect = null;
  };
  effect();
}

export function xcomputed<T>(
  update: () => T extends void ? never : T
): xComputed<T> {
  let value: T;
  const effect = () => {
    activeEffect = effect;
    value = update();
    activeEffect = null;
  };
  effect();
  return {
    get value() {
      track(this);
      return value;
    },
  };
}
