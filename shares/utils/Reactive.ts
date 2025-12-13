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

export type Ref<T> = {
  value: T;
};

export type Computed<T> = {
  readonly value: T;
};

export function ref<T>(value: T) {
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

export function watch<T>(
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

export function computed<T>(
  update: () => T extends void ? never : T
): Computed<T> {
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
