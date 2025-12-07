/**
 * @zh 游戏日志方法类型
 * @en Game logger method type
 */
declare type GameLoggerMethod = (...args: any[]) => void;

/**
 * @zh 控制台对象，用于在控制台输出信息。
 * @en The console object, used to output information to the console.
 */
declare const console: {
  /**
   * @zh 断言，如果断言为 false，则在控制台输出错误信息。
   * @en Assertion, if the assertion is false, an error message is output to the console.
   */
  assert: (assertion, ...args: any[]) => void;
  /**
   * @zh 在控制台输出日志信息。
   * @en Outputs log information to the console.
   */
  log: GameLoggerMethod;
  /**
   * @zh 在控制台输出调试信息。
   * @en Outputs debug information to the console.
   */
  debug: GameLoggerMethod;
  /**
   * @zh 在控制台输出错误信息。
   * @en Outputs error information to the console.
   */
  error: GameLoggerMethod;
  /**
   * @zh 在控制台输出警告信息。
   * @en Outputs warning information to the console.
   */
  warn: GameLoggerMethod;
  /**
   * @zh 清空控制台。
   * @en Clears the console.
   */
  clear: GameLoggerMethod;
};

/**
 * @zh 因神岛平台限制，无法使用Nodejs原生模块，这里是模拟 Node.js 的 process 对象。
 * @en Due to platform limitations, native Node.js modules cannot be used. This is a mock of the Node.js process object.
 */
declare const process: {
  /**
   * @zh 返回一个包含用户环境信息的对象。需结合插件dotenv-webpack使用。
   * @en Returns an object containing user environment information. Requires the use of the dotenv-webpack plugin.
   * @link https://docs.dao3.fun/arenapro/zh/guide/06-advanced-topics/env.html
   */
  env: ProcessEnv;
};


/**
 * @zh GameWorld 是整个游戏世界的主要接口，它对应涵盖了控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。
 * @en GameWorld is the main interface for the entire game world. It covers global scene attributes such as controlling environmental weather, physics gravity, and screen filters. It can also be used to create and search for entities in the world, or listen for events such as collisions, damage, and interactions between entities and players.
 */
declare const world: GameWorld;
/**
 * @zh GameVoxels 是控制游戏方块的接口，你可以控制地形变化，利用循环语法批量生成/销毁方块，获取某个方块的类型、名称、旋转角度等。
 * @en GameVoxels is the interface for controlling game blocks. You can control terrain changes, use loop syntax to batch generate/destroy blocks, and get the type, name, rotation angle, etc. of a certain block.
 */
declare const voxels: GameVoxels;
/**
 * @zh GameAssetListEntry 是控制游戏中的资产对象，用于获取游戏内模型、图片、音频等资源。
 * @en GameAssetListEntry is an object that controls assets in the game, used to obtain in-game resources such as models, images, and audio.
 */
declare const resources: {
  /**
   * @zh 列出指定类型的游戏资源。
   * @en Lists game resources of a specified type.
   * @param path
   * @zh 可选。指定游戏资源的类型。如果不提供，默认返回全部资源（包含脚本）。
   *        - 'snow': 查询雪贴图资源。
   *        - 'mesh': 查询体素模型资源。
   *        - 'picture': 查询图片资源。
   *        - 'audio': 查询音频资源。
   *        - 'lut': 查询滤镜资源。
   * @en Optional. Specifies the type of game resource. If not provided, all resources (including scripts) are returned by default.
   *        - 'snow': Query for snow texture resources.
   *        - 'mesh': Query for voxel model resources.
   *        - 'picture': Query for image resources.
   *        - 'audio': Query for audio resources.
   *        - 'lut': Query for filter resources.
   * @returns
   * @zh 返回一个 GameAssetListEntry 对象数组，每个对象代表一个游戏资源条目。
   * @en Returns an array of GameAssetListEntry objects, each representing a game resource entry.
   */
  ls: (
    path?: "snow" | "mesh" | "picture" | "audio" | "lut"
  ) => GameAssetListEntry[];
};
/**
 * @zh 旧代编辑器使用的数据库接口，已弃用，请在使用GameDataStorage。
 * @en The database interface used by the old editor, which is deprecated. Please use GameDataStorage.
 * @example
 * ```
 * const sa = storage.getGroupStorage('boxGame');
 * sa.get('box');
 * ```
 * @deprecated
 */
declare const db: GameDatabase;
/**
 * @zh GameDataStorage 代表数据存储空间的类，能控制单地图或组地图数据库，能够以键值对的形式存储数据，提供方法处理空间内键值对相关的操作。
 * @en GameDataStorage is a class that represents data storage space. It can control single-map or group-map databases, store data in the form of key-value pairs, and provide methods to handle operations related to key-value pairs in the space.
 */
declare const storage: GameStorage;
/**
 * @zh GameHttpAPI 是可以链接外部网站数据的对象，用于对接第三方平台接口的操作。
 * @en GameHttpAPI is an object that can link to external website data and is used for operations that interface with third-party platform APIs.
 */
declare const http: GameHttpAPI;
/**
 * @zh GameRTC 是实时通讯技术，用于与其他游戏玩家语音交流的操作。
 * @en GameRTC is a real-time communication technology used for voice communication with other game players.
 */
declare const rtc: GameRTC;

/**
 * @zh GameAnalytics 是专业的游戏数据分析模块，提供强大的数据追踪与分析能力。借助此模块，你可以精确记录玩家行为、监控游戏事件并获取深入的数据洞察，为游戏优化和决策提供有力支持。
 * @en GameAnalytics is a professional game data analysis module that provides powerful data tracking and analysis capabilities. With this module, you can accurately record player behavior, monitor game events, and obtain in-depth data insights to provide strong support for game optimization and decision-making.
 */
declare const analytics: GameAnalytics;

/**
 * @zh 较老版本的GUI接口，已不推荐使用，请在客户端使用GameUI。
 * @en An older version of the GUI interface, which is no longer recommended. Please use GameUI on the client side.
 * @example
 * ```
 * const box = ui.findChildByName('box');
 * box.zIndex=2;
 * ```
 * @deprecated
 */
declare const gui: GameGUI;
/**
 * @zh ServerRemoteChannel 是管理客户端与服务端通讯的对象，用于对跨端传递信息的操作。
 * @en ServerRemoteChannel is an object that manages communication between the client and the server, used for cross-end information transfer operations.
 */
declare const remoteChannel: ServerRemoteChannel;

/**
 * @zh sleep是一种函数，作用是延时，程序暂停若干时间。在执行时可能会抛出一个中断异常，建议对其进行捕获并处理。
 * @en sleep is a function that delays the program for a certain period of time. It may throw an interruption exception during execution, and it is recommended to catch and handle it.
 * @param ms
 * @zh 延迟时间，单位为毫秒。
 * @en The delay time in milliseconds.
 */
declare function sleep(ms: number): Promise<void>;

/**
 * @zh 用于加载模块，返回模块对象。
 * @en Used to load a module and return the module object.
 */
declare const require: {
  /**
   * @zh 加载模块，返回模块对象。
   * @en Loads a module and returns the module object.
   * @param module
   * @zh 模块名称。
   * @en The name of the module.
   */
  (module: string): any;
  /**
   * @zh 解析模块的绝对路径。
   * @en Resolves the absolute path of a module.
   * @param path
   * @zh 路径。
   * @en The path.
   * @returns
   * @zh 模块的绝对路径。
   * @en The absolute path of the module.
   */
  resolve: (path: string) => string;
};
/**
 * @zh 当前模块的引用。
 * @en A reference to the current module.
 */
declare const module: {
  /**
   * @zh 导出模块的对象。
   * @en The object that is exported by the module.
   */
  exports: any;
};
/**
 * 用于导出模块，返回模块对象。
 */
declare const exports: any;
/**
 * @zh 当前模块的目录名。这是一个只读属性。
 * @en The directory name of the current module. This is a read-only property.
 */
declare const __dirname: string;
/**
 * @zh 当前模块的文件名。这是一个只读属性。
 * @en The file name of the current module. This is a read-only property.
 */
declare const __filename: string;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Map<K, V> {
  /**
   * @zh 从 Map 对象中移除所有元素。
   * @en Removes all elements from a Map object.
   */
  clear(): void;
  /**
   * @zh 从 Map 对象中移除指定的元素。
   * @en Removes the specified element from a Map object.
   * @param key
   * @zh 要移除的元素的键。
   * @en The key of the element to remove.
   * @returns
   * @zh 如果元素成功移除，则返回 true；否则返回 false。
   * @en Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean;
  /**
   * @zh 对 Map 对象中的每个键值对执行一次提供的函数。
   * @en Executes a provided function once for each key/value pair in the Map object.
   * @param callbackfn
   * @zh 为每个元素执行的函数。
   * @en Function to execute for each element.
   * @param thisArg
   * @zh 执行 callbackfn 时用作 this 的值。
   * @en Value to use as this when executing callbackfn.
   */
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 返回与指定键关联的值，如果找不到键，则返回 undefined。
   * @en Returns the value associated with the specified key, or undefined if the key can't be found.
   * @param key
   * @zh 要返回其值的元素的键。
   * @en The key of the element to return.
   * @returns
   * @zh 与指定键关联的值，如果找不到键，则返回 undefined。
   * @en The value associated with the specified key, or undefined if the key can't be found.
   */
  get(key: K): V | undefined;
  /**
   * @zh 返回一个布尔值，指示具有指定键的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified key exists or not.
   * @param key
   * @zh 要在 Map 对象中测试其存在性的元素的键。
   * @en The key of the element to test for presence in the Map object.
   * @returns
   * @zh 如果具有指定键的元素存在于 Map 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified key exists in the Map object; otherwise false.
   */
  has(key: K): boolean;
  /**
   * @zh 在 Map 对象中设置指定键的值。
   * @en Sets the value for the specified key in the Map object.
   * @param key
   * @zh 要在 Map 对象中添加或更新的元素的键。
   * @en The key of the element to add or update in the Map object.
   * @param value
   * @zh 要为指定键设置的值。
   * @en The value to set for the specified key.
   * @returns
   * @zh Map 对象。
   * @en The Map object.
   */
  set(key: K, value: V): this;
  /**
   * @zh 返回 Map 对象中的键值对数量。
   * @en Returns the number of key/value pairs in the Map object.
   */
  readonly size: number;
}

interface MapConstructor {
  /**
   * @zh 创建一个新的 Map 对象。
   * @en Creates a new Map object.
   */
  new (): Map<any, any>;
  /**
   * @zh 创建一个新的 Map 对象。
   * @en Creates a new Map object.
   * @param entries
   * @zh 一个可迭代的键值对（[key, value]）数组。
   * @en An array of key-value pairs to initialize the map with.
   */
  new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
  /**
   * @zh 对 Map 原型的引用。
   * @en A reference to the Map prototype.
   */
  readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
  /**
   * @zh 对 Map 对象中的每个键值对执行一次提供的函数。
   * @en Executes a provided function once for each key/value pair in the Map object.
   * @param callbackfn
   * @zh 为每个元素执行的函数。
   * @en Function to execute for each element.
   * @param thisArg
   * @zh 执行 callbackfn 时用作 this 的值。
   * @en Value to use as this when executing callbackfn.
   */
  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 返回与指定键关联的值，如果找不到键，则返回 undefined。
   * @en Returns the value associated with the specified key, or undefined if the key can't be found.
   * @param key
   * @zh 要返回其值的元素的键。
   * @en The key of the element to return.
   * @returns
   * @zh 与指定键关联的值，如果找不到键，则返回 undefined。
   * @en The value associated with the specified key, or undefined if the key can't be found.
   */
  get(key: K): V | undefined;
  /**
   * @zh 返回一个布尔值，指示具有指定键的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified key exists or not.
   * @param key
   * @zh 要在 Map 对象中测试其存在性的元素的键。
   * @en The key of the element to test for presence in the Map object.
   * @returns
   * @zh 如果具有指定键的元素存在于 Map 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified key exists in the Map object; otherwise false.
   */
  has(key: K): boolean;
  /**
   * @zh 返回 Map 对象中的键值对数量。
   * @en Returns the number of key/value pairs in the Map object.
   */
  readonly size: number;
}

interface WeakMap<K extends object, V> {
  /**
   * @zh 从 WeakMap 对象中移除指定的元素。
   * @en Removes the specified element from a WeakMap object.
   * @param key
   * @zh 要移除的元素的键。
   * @en The key of the element to remove.
   * @returns
   * @zh 如果元素成功移除，则返回 true；否则返回 false。
   * @en Returns true if an element in the WeakMap object existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean;
  /**
   * @zh 返回与指定键关联的值，如果找不到键，则返回 undefined。
   * @en Returns the value associated with the specified key, or undefined if the key can't be found.
   * @param key
   * @zh 要返回其值的元素的键。
   * @en The key of the element to return.
   * @returns
   * @zh 与指定键关联的值，如果找不到键，则返回 undefined。
   * @en The value associated with the specified key, or undefined if the key can't be found.
   */
  get(key: K): V | undefined;
  /**
   * @zh 返回一个布尔值，指示具有指定键的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified key exists or not.
   * @param key
   * @zh 要在 WeakMap 对象中测试其存在性的元素的键。
   * @en The key of the element to test for presence in the WeakMap object.
   * @returns
   * @zh 如果具有指定键的元素存在于 WeakMap 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified key exists in the WeakMap object; otherwise false.
   */
  has(key: K): boolean;
  /**
   * @zh 在 WeakMap 对象中设置指定键的值。
   * @en Sets the value for the specified key in the WeakMap object.
   * @param key
   * @zh 要在 WeakMap 对象中添加或更新的元素的键。
   * @en The key of the element to add or update in the WeakMap object.
   * @param value
   * @zh 要为指定键设置的值。
   * @en The value to set for the specified key.
   * @returns
   * @zh WeakMap 对象。
   * @en The WeakMap object.
   */
  set(key: K, value: V): this;
}

interface WeakMapConstructor {
  /**
   * @zh 创建一个新的 WeakMap 对象。
   * @en Creates a new WeakMap object.
   * @param entries
   * @zh 一个可迭代的键值对（[key, value]）数组。
   * @en An array of key-value pairs to initialize the map with.
   */
  new <K extends object, V>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
  /**
   * @zh 对 WeakMap 原型的引用。
   * @en A reference to the WeakMap prototype.
   */
  readonly prototype: WeakMap<object, any>;
}
/**
 * @zh
 * WeakMap 构造函数。
 * @en
 * WeakMap constructor.
 */
declare var WeakMap: WeakMapConstructor;

/**
 * @zh
 * Set 构造函数。
 * @en
 * Set constructor.
 */
interface Set<T> {
  /**
   * @zh 向 Set 对象添加一个新元素。
   * @en Appends a new element with a specified value to the end of a Set object.
   * @param value
   * @zh 要添加到 Set 对象的元素的值。
   * @en The value of the element to add to the Set object.
   * @returns
   * @zh Set 对象。
   * @en The Set object.
   */
  add(value: T): this;
  /**
   * @zh 从 Set 对象中移除所有元素。
   * @en Removes all elements from a Set object.
   */
  clear(): void;
  /**
   * @zh 从 Set 对象中移除指定的元素。
   * @en Removes the specified element from a Set object.
   * @param value
   * @zh 要移除的元素的值。
   * @en The value of the element to remove.
   * @returns
   * @zh 如果元素成功移除，则返回 true；否则返回 false。
   * @en Returns true if an element in the Set object existed and has been removed, or false if the element does not exist.
   */
  delete(value: T): boolean;
  /**
   * @zh 对 Set 对象中的每个值执行一次提供的函数。
   * @en Executes a provided function once for each value in the Set object.
   * @param callbackfn
   * @zh 为每个元素执行的函数。
   * @en Function to execute for each element.
   * @param thisArg
   * @zh 执行 callbackfn 时用作 this 的值。
   * @en Value to use as this when executing callbackfn.
   */
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 返回一个布尔值，指示具有指定值的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified value exists or not.
   * @param value
   * @zh 要在 Set 对象中测试其存在性的元素的值。
   * @en The value of the element to test for presence in the Set object.
   * @returns
   * @zh 如果具有指定值的元素存在于 Set 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified value exists in the Set object; otherwise false.
   */
  has(value: T): boolean;
  /**
   * @zh 返回 Set 对象中的值的数量。
   * @en Returns the number of values in the Set object.
   */
  readonly size: number;
}

interface SetConstructor {
  /**
   * @zh 创建一个新的 Set 对象。
   * @en Creates a new Set object.
   * @param values
   * @zh 一个可迭代的对象，其元素将添加到新的 Set 中。
   * @en An iterable object whose elements will be added to the new Set.
   */
  new <T = any>(values?: readonly T[] | null): Set<T>;
  /**
   * @zh 对 Set 原型的引用。
   * @en A reference to the Set prototype.
   */
  readonly prototype: Set<any>;
}
/**
 * @zh
 * Set 构造函数。
 * @en
 * Set constructor.
 */
declare var Set: SetConstructor;

interface ReadonlySet<T> {
  /**
   * @zh 对 Set 对象中的每个值执行一次提供的函数。
   * @en Executes a provided function once for each value in the Set object.
   * @param callbackfn
   * @zh 为每个元素执行的函数。
   * @en Function to execute for each element.
   * @param thisArg
   * @zh 执行 callbackfn 时用作 this 的值。
   * @en Value to use as this when executing callbackfn.
   */
  forEach(
    callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 返回一个布尔值，指示具有指定值的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified value exists or not.
   * @param value
   * @zh 要在 Set 对象中测试其存在性的元素的值。
   * @en The value of the element to test for presence in the Set object.
   * @returns
   * @zh 如果具有指定值的元素存在于 Set 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified value exists in the Set object; otherwise false.
   */
  has(value: T): boolean;
  /**
   * @zh 返回 Set 对象中的值的数量。
   * @en Returns the number of values in the Set object.
   */
  readonly size: number;
}

interface WeakSet<T extends object> {
  /**
   * @zh 向 WeakSet 对象添加一个新对象。
   * @en Appends a new object to the end of a WeakSet object.
   * @param value
   * @zh 要添加到 WeakSet 对象的对象。
   * @en The object to add to the WeakSet object.
   * @returns
   * @zh WeakSet 对象。
   * @en The WeakSet object.
   */
  add(value: T): this;
  /**
   * @zh 从 WeakSet 对象中移除指定的元素。
   * @en Removes the specified element from a WeakSet object.
   * @param value
   * @zh 要移除的元素的值。
   * @en The value of the element to remove.
   * @returns
   * @zh 如果元素成功移除，则返回 true；否则返回 false。
   * @en Returns true if an element in the WeakSet object existed and has been removed, or false if the element does not exist.
   */
  delete(value: T): boolean;
  /**
   * @zh 返回一个布尔值，指示具有指定值的元素是否存在。
   * @en Returns a boolean indicating whether an element with the specified value exists or not.
   * @param value
   * @zh 要在 WeakSet 对象中测试其存在性的元素的值。
   * @en The value of the element to test for presence in the WeakSet object.
   * @returns
   * @zh 如果具有指定值的元素存在于 WeakSet 对象中，则返回 true；否则返回 false。
   * @en Returns true if an element with the specified value exists in the WeakSet object; otherwise false.
   */
  has(value: T): boolean;
}

interface WeakSetConstructor {
  new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
  readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate
   * @zh 为数组中的每个元素执行的函数。
   * @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg
   * @zh 执行 predicate 时用作 this 的对象。
   * @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined;
  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate
   * @zh 为数组中的每个元素执行的函数。
   * @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg
   * @zh 执行 predicate 时用作 this 的对象。
   * @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T | undefined;

  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate
   * @zh 为数组中的每个元素执行的函数。
   * @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg
   * @zh 执行 predicate 时用作 this 的对象。
   * @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): number;

  /**
   * @zh 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
   * @en Returns the this object after filling the section identified by start and end with value
   * @param value
   * @zh 用来填充数组的值。
   * @en value to fill array section with
   * @param start
   * @zh 起始索引，默认为0。
   * @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end
   * @zh 终止索引，默认为 a.length。
   * @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: T, start?: number, end?: number): this;

  /**
   * @zh 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target
   * @param target
   * @zh 复制序列到该位置。如果为负数，target 将从末尾开始计算。
   * @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start
   * @zh 开始复制元素的起始位置。如果为负数，start 将从末尾开始计算。
   * @en If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.
   * @param end
   * @zh 停止复制元素的终止位置。如果未指定，copyWithin 将会一直复制到数组末尾。
   * @en If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
}

interface ArrayConstructor {
  /**
   * @zh 从一个类数组或可迭代对象创建一个新的数组实例。
   * @en Creates an array from an array-like object.
   * @param arrayLike @zh 一个类数组或可迭代对象，用于转换成数组。 @en An array-like object to convert to an array.
   */
  from<T>(arrayLike: ArrayLike<T>): T[];

  /**
   * @zh 从一个类数组或可迭代对象创建一个新的数组实例。
   * @en Creates an array from an iterable object.
   * @param arrayLike @zh 一个类数组或可迭代对象，用于转换成数组。 @en An array-like object to convert to an array.
   * @param mapfn @zh 对数组每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 执行 mapfn 时用作 this 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any
  ): U[];

  /**
   * @zh 根据一组参数来创建一个新的数组实例。
   * @en Returns a new array from a set of elements.
   * @param items @zh 用于创建新数组对象的元素集合。 @en A set of elements to include in the new array object.
   */
  of<T>(...items: T[]): T[];
}

interface DateConstructor {
  /**
   * @zh 创建一个表示特定日期和时间的 `Date` 对象。
   * @en Creates a `Date` object representing a specific date and time.
   * @param value @zh 可以是表示自1970年1月1日UTC以来的毫秒数的数字，或者是表示日期的字符串，或者另一个Date对象。
   * @en Can be a number representing milliseconds since the Unix Epoch, a string representing a date, or another Date object.
   */
  new (value: number | string | Date): Date;
}

interface Function {
  /**
   * @zh 返回函数的名称。函数名称是只读的，不能更改。
   * @en Returns the name of the function. Function names are read-only and can not be changed.
   */
  readonly name: string;
}

interface Math {
  /**
   * @zh 返回一个数字在32位二进制表示形式下的前导零的数量。
   * @en Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  clz32(x: number): number;

  /**
   * @zh 返回两个数字的32位整数乘法的结果。
   * @en Returns the result of 32-bit multiplication of two numbers.
   * @param x @zh 第一个数。 @en First number.
   * @param y @zh 第二个数。 @en Second number.
   */
  imul(x: number, y: number): number;

  /**
   * @zh 返回一个数字的符号，表示这个数字是正数、负数还是零。
   * @en Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x @zh 要测试的数值表达式。 @en The numeric expression to test.
   */
  sign(x: number): number;

  /**
   * @zh 返回一个数字以10为底的对数。
   * @en Returns the base 10 logarithm of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  log10(x: number): number;

  /**
   * @zh 返回一个数字以2为底的对数。
   * @en Returns the base 2 logarithm of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  log2(x: number): number;

  /**
   * @zh 返回一个数字加1后的自然对数。
   * @en Returns the natural logarithm of 1 + x.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  log1p(x: number): number;

  /**
   * @zh 返回 e^x - 1 的结果。
   * @en Returns the result of (e^x - 1).
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  expm1(x: number): number;

  /**
   * @zh 返回一个数字的双曲余弦值。
   * @en Returns the hyperbolic cosine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  cosh(x: number): number;

  /**
   * @zh 返回一个数字的双曲正弦值。
   * @en Returns the hyperbolic sine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  sinh(x: number): number;

  /**
   * @zh 返回一个数字的双曲正切值。
   * @en Returns the hyperbolic tangent of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  tanh(x: number): number;

  /**
   * @zh 返回一个数字的反双曲余弦值。
   * @en Returns the inverse hyperbolic cosine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  acosh(x: number): number;

  /**
   * @zh 返回一个数字的反双曲正弦值。
   * @en Returns the inverse hyperbolic sine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  asinh(x: number): number;

  /**
   * @zh 返回一个数字的反双曲正切值。
   * @en Returns the inverse hyperbolic tangent of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  atanh(x: number): number;

  /**
   * @zh 返回其参数平方和的平方根。
   * @en Returns the square root of the sum of squares of its arguments.
   * @param values @zh 用于计算平方根的值。 @en Values to compute the square root for.
   */
  hypot(...values: number[]): number;

  /**
   * @zh 返回一个数的整数部分，去除任何小数位数。
   * @en Returns the integral part of a numeric expression, x, removing any fractional digits.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  trunc(x: number): number;

  /**
   * @zh 返回一个数的最近的单精度浮点数表示。
   * @en Returns the nearest single precision float representation of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  fround(x: number): number;

  /**
   * @zh 返回一个数的立方根。
   * @en Returns an implementation-dependent approximation to the cube root of number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  cbrt(x: number): number;
}

interface NumberConstructor {
  /**
   * @zh 两个可表示数字之间的最小间隔。
   * @en The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value.
   */
  readonly EPSILON: number;

  /**
   * @zh 判断传入的值是否为有限数。
   * @en Returns true if passed value is finite.
   * @param number @zh 一个数值。 @en A numeric value.
   */
  isFinite(number: number): boolean;

  /**
   * @zh 判断传入的值是否为整数。
   * @en Returns true if the value passed is an integer, false otherwise.
   * @param number @zh 一个数值。 @en A numeric value.
   */
  isInteger(number: number): boolean;

  /**
   * @zh 判断传入的值是否为 NaN。
   * @en Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
   * @param number @zh 一个数值。 @en A numeric value.
   */
  isNaN(number: number): boolean;

  /**
   * @zh 判断传入的值是否为安全整数。
   * @en Returns true if the value passed is a safe integer.
   * @param number @zh 一个数值。 @en A numeric value.
   */
  isSafeInteger(number: number): boolean;

  /**
   * @zh 表示在 JavaScript 中最大的安全整数（2^53 - 1）。
   * @en The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value.
   */
  readonly MAX_SAFE_INTEGER: number;

  /**
   * @zh 表示在 JavaScript 中最小的安全整数（-(2^53 - 1)）。
   * @en The value of the smallest integer n such that n and n − 1 are both exactly representable as a Number value.
   */
  readonly MIN_SAFE_INTEGER: number;

  /**
   * @zh 将字符串转换为浮点数。
   * @en Converts a string to a floating-point number.
   * @param string @zh 包含浮点数的字符串。 @en A string that contains a floating-point number.
   */
  parseFloat(string: string): number;

  /**
   * @zh 将字符串转换为整数。
   * @en Converts a string to an integer.
   * @param string @zh 要转换为数字的字符串。 @en A string to convert into a number.
   * @param radix @zh 用于解析数字的基数，介于2和36之间。 @en A value between 2 and 36 that specifies the base of the number in numString.
   */
  parseInt(string: string, radix?: number): number;
}

interface ObjectConstructor {
  /**
   * @zh 将一个或多个源对象的所有可枚举自有属性的值复制到目标对象。返回目标对象。
   * @en Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
   * @param target
   * @zh 要复制到的目标对象。
   * @en The target object to copy to.
   * @param source
   * @zh 要从中复制属性的源对象。
   * @en The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;

  /**
   * @zh 将一个或多个源对象的所有可枚举自有属性的值复制到目标对象。返回目标对象。
   * @en Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
   * @param target
   * @zh 要复制到的目标对象。
   * @en The target object to copy to.
   * @param source1
   * @zh 第一个要从中复制属性的源对象。
   * @en The first source object from which to copy properties.
   * @param source2
   * @zh 第二个要从中复制属性的源对象。
   * @en The second source object from which to copy properties.
   */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
   * @zh 将一个或多个源对象的所有可枚举自有属性的值复制到目标对象。返回目标对象。
   * @en Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
   * @param target
   * @zh 要复制到的目标对象。
   * @en The target object to copy to.
   * @param source1
   * @zh 第一个要从中复制属性的源对象。
   * @en The first source object from which to copy properties.
   * @param source2
   * @zh 第二个要从中复制属性的源对象。
   * @en The second source object from which to copy properties.
   * @param source3
   * @zh 第三个要从中复制属性的源对象。
   * @en The third source object from which to copy properties.
   */
  assign<T, U, V, W>(
    target: T,
    source1: U,
    source2: V,
    source3: W
  ): T & U & V & W;

  /**
   * @zh 将一个或多个源对象的所有可枚举自有属性的值复制到目标对象。返回目标对象。
   * @en Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
   * @param target
   * @zh 要复制到的目标对象。
   * @en The target object to copy to.
   * @param sources
   * @zh 一系列源对象。
   */
  assign(target: object, ...sources: any[]): any;

  /**
   * @zh 返回一个包含给定对象所有自有符号属性的数组。
   * @en Returns an array of all symbol properties found directly upon a given object.
   * @param o @zh 要返回其符号属性的对象。 @en The object whose symbol properties are to be returned.
   */
  getOwnPropertySymbols(o: any): symbol[];

  /**
   * @zh 返回一个对象的可枚举字符串属性和方法的名称。
   * @en Returns the names of the enumerable string properties and methods of an object.
   * @param o
   * @zh 包含属性和方法的对象。这可以是您创建的对象或现有的文档对象模型 (DOM) 对象。
   * @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: {}): string[];

  /**
   * @zh 如果值是相同的值，则返回 true，否则返回 false。
   * @en Returns true if the values are the same value, false otherwise.
   * @param value1
   * @zh 第一个值。
   * @en The first value.
   * @param value2
   * @zh 第二个值。
   * @en The second value.
   */
  is(value1: any, value2: any): boolean;

  /**
   * @zh 将指定对象 o 的原型设置为对象 proto 或 null。返回对象 o。
   * @en Sets the prototype of a specified object o to object proto or null. Returns the object o.
   * @param o
   * @zh 要更改其原型的对象。
   * @en The object to change its prototype.
   * @param proto
   * @zh 新原型的值或 null。
   * @en The value of the new prototype or null.
   */
  setPrototypeOf(o: any, proto: object | null): any;
}

interface ReadonlyArray<T> {
  /**
   * @zh 返回数组中第一个满足 predicate 函数的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate
   * @zh find 为数组中的每个元素（按升序）调用一次 predicate 函数，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。
   * @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg
   * @zh 如果提供，它将用作每次调用 predicate 时的 this 值。如果未提供，则使用 undefined。
   * @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: readonly T[]
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
    thisArg?: any
  ): T | undefined;

  /**
   * @zh 返回数组中第一个满足 predicate 函数的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate
   * @zh findIndex 为数组中的每个元素（按升序）调用一次 predicate 函数，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。
   * @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg
   * @zh 如果提供，它将用作每次调用 predicate 时的 this 值。如果未提供，则使用 undefined。
   * @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
    thisArg?: any
  ): number;
}

interface RegExp {
  /**
   * @zh 返回一个表示当前正则表达式标志的字符串。此字段为只读。
   * @en Returns a string indicating the flags of the regular expression in question. This field is read-only.
   * @zh 字符串中的字符按以下顺序排列和连接：
   * @en The characters in this string are sequenced and concatenated in the following order:
   *
   *    - "g" for global
   *    - "i" for ignoreCase
   *    - "m" for multiline
   *    - "u" for unicode
   *    - "y" for sticky
   *
   * @zh 如果没有设置任何标志，则值为空字符串。
   * @en If no flags are set, the value is the empty string.
   */
  readonly flags: string;

  /**
   * @zh 返回一个布尔值，表示正则表达式是否使用了粘性标志 (y)。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the sticky flag (y) used with a regular expression. Default is false. Read-only.
   */
  readonly sticky: boolean;

  /**
   * @zh 返回一个布尔值，表示正则表达式是否使用了 Unicode 标志 (u)。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular expression. Default is false. Read-only.
   */
  readonly unicode: boolean;
}

interface RegExpConstructor {
  /**
   * @zh 创建一个新的正则表达式对象。
   * @en Creates a new regular expression object.
   * @param pattern
   * @zh 正则表达式的模式或字符串。
   * @en The pattern or string for the regular expression.
   * @param flags
   * @zh 一个包含标志的字符串。
   * @en A string containing the flags.
   */
  new (pattern: RegExp | string, flags?: string): RegExp;
  /**
   * @zh 创建一个新的正则表达式对象。
   * @en Creates a new regular expression object.
   * @param pattern
   * @zh 正则表达式的模式或字符串。
   * @en The pattern or string for the regular expression.
   * @param flags
   * @zh 一个包含标志的字符串。
   * @en A string containing the flags.
   */
  (pattern: RegExp | string, flags?: string): RegExp;
}

interface String {
  /**
   * @zh 返回一个非负整数，该整数是位于字符串中指定位置的 UTF-16 编码代码点的值。
   * @en Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String.
   * @zh 如果该位置没有元素，则结果为 undefined。
   * @en If there is no element at that position, the result is undefined.
   * @zh 如果在 pos 处没有有效的 UTF-16 代理对开始，则结果是 pos 处的代码单元。
   * @en If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
   */
  codePointAt(pos: number): number | undefined;

  /**
   * @zh 如果 searchString 作为转换此对象为字符串的结果的子字符串出现，并且出现位置大于或等于 position，则返回 true；否则返回 false。
   * @en Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
   * @param searchString
   * @zh 搜索字符串。
   * @en search string
   * @param position
   * @zh 如果 position 未定义，则假定为 0，以便搜索整个字符串。
   * @en If position is undefined, 0 is assumed, so as to search all of the String.
   */
  includes(searchString: string, position?: number): boolean;

  /**
   * @zh 如果 searchString 转换为字符串的元素序列与此对象（转换为字符串）从 endPosition – length(this) 开始的相应元素相同，则返回 true。否则返回 false。
   * @en Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
   */
  endsWith(searchString: string, endPosition?: number): boolean;

  /**
   * @zh 返回将字符串规范化为 Unicode 标准附件 #15 中指定的范式（form）后的字符串值。
   * @en Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form
   * @zh 可用值为 "NFC", "NFD", "NFKC", 或 "NFKD"。如果未指定，默认为 "NFC"。
   * @en Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"
   */
  normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;

  /**
   * @zh 返回将字符串规范化为 Unicode 标准附件 #15 中指定的范式（form）后的字符串值。
   * @en Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form
   * @zh 可用值为 "NFC", "NFD", "NFKC", 或 "NFKD"。如果未指定，默认为 "NFC"。
   * @en Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"
   */
  normalize(form?: string): string;

  /**
   * @zh 返回一个由 count 个副本连接而成的字符串值。如果 count 为 0，则返回空字符串。
   * @en Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
   * @param count
   * @zh 要附加的副本数。
   * @en number of copies to append
   */
  repeat(count: number): string;

  /**
   * @zh 如果 searchString 转换为字符串的元素序列与此对象（转换为字符串）从 position 开始的相应元素相同，则返回 true。否则返回 false。
   * @en Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
   */
  startsWith(searchString: string, position?: number): boolean;

  /**
   * @zh 返回一个 <a> HTML 锚点元素，并将其 name 属性设置为文本值。
   * @en Returns an <a> HTML anchor element and sets the name attribute to the text value.
   * @param name
   */
  anchor(name: string): string;

  /**
   * @zh 返回一个 <big> HTML 元素。
   * @en Returns a <big> HTML element.
   */
  big(): string;

  /**
   * @zh 返回一个 <blink> HTML 元素。
   * @en Returns a <blink> HTML element.
   */
  blink(): string;

  /**
   * @zh 返回一个 <b> HTML 元素。
   * @en Returns a <b> HTML element.
   */
  bold(): string;

  /**
   * @zh 返回一个 <tt> HTML 元素。
   * @en Returns a <tt> HTML element.
   */
  fixed(): string;

  /**
   * @zh 返回一个 <font> HTML 元素并设置其 color 属性值。
   * @en Returns a <font> HTML element and sets the color attribute value.
   */
  fontcolor(color: string): string;

  /**
   * @zh 返回一个 <font> HTML 元素并设置其 size 属性值。
   * @en Returns a <font> HTML element and sets the size attribute value.
   */
  fontsize(size: number): string;

  /**
   * @zh 返回一个 <font> HTML 元素并设置其 size 属性值。
   * @en Returns a <font> HTML element and sets the size attribute value.
   */
  fontsize(size: string): string;

  /**
   * @zh 返回一个 <i> HTML 元素。
   * @en Returns an <i> HTML element.
   */
  italics(): string;

  /**
   * @zh 返回一个 <a> HTML 元素并设置其 href 属性值。
   * @en Returns an <a> HTML element and sets the href attribute value.
   */
  link(url: string): string;

  /**
   * @zh 返回一个 <small> HTML 元素。
   * @en Returns a <small> HTML element.
   */
  small(): string;

  /**
   * @zh 返回一个 <strike> HTML 元素。
   * @en Returns a <strike> HTML element.
   */
  strike(): string;

  /**
   * @zh 返回一个 <sub> HTML 元素。
   * @en Returns a <sub> HTML element.
   */
  sub(): string;

  /**
   * @zh 返回一个 <sup> HTML 元素。
   * @en Returns a <sup> HTML element.
   */
  sup(): string;
}

interface StringConstructor {
  /**
   * @zh 返回一个字符串值，其元素按顺序是列表元素中的元素。如果长度为 0，则返回空字符串。
   * @en Return the String value whose elements are, in order, the elements in the List elements. If length is 0, the empty string is returned.
   */
  fromCodePoint(...codePoints: number[]): string;

  /**
   * @zh String.raw 旨在用作标记模板字符串的标记函数。当这样调用时，第一个参数将是一个格式正确的模板调用站点对象，其余参数将包含替换值。
   * @en String.raw is intended for use as a tag function of a Tagged Template String. When called as such the first argument will be a well formed template call site object and the rest parameter will contain the substitution values.
   * @param template
   * @zh 一个格式正确的模板字符串调用站点表示。
   * @en A well-formed template string call site representation.
   * @param substitutions
   * @zh 一组替换值。
   * @en A set of substitution values.
   */
  raw(template: TemplateStringsArray, ...substitutions: any[]): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Generator<T = unknown, TReturn = any, TNext = unknown>
  extends Iterator<T, TReturn, TNext> {
  /**
   * @zh 移至生成器的下一个值。
   * @en Moves to the next value in the generator.
   */
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  /**
   * @zh 结束生成器并返回值。
   * @en Ends the generator and returns a value.
   */
  return(value: TReturn): IteratorResult<T, TReturn>;
  /**
   * @zh 在生成器中引发错误。
   * @en Throws an error in the generator.
   */
  throw(e: any): IteratorResult<T, TReturn>;
  /**
   * @zh 返回生成器自身的迭代器。
   * @en Returns the generator's own iterator.
   */
  [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

interface GeneratorFunction {
  /**
   * @zh 创建一个新的生成器对象。
   * @en Creates a new Generator object.
   * @param args
   * @zh 函数接受的参数列表。
   * @en A list of arguments the function accepts.
   */
  new (...args: any[]): Generator;
  /**
   * @zh 创建一个新的生成器对象。
   * @en Creates a new Generator object.
   * @param args
   * @zh 函数接受的参数列表。
   * @en A list of arguments the function accepts.
   */
  (...args: any[]): Generator;
  /**
   * @zh 参数的长度。
   * @en The length of the arguments.
   */
  readonly length: number;
  /**
   * @zh 返回函数的名称。
   * @en Returns the name of the function.
   */
  readonly name: string;
  /**
   * @zh 对原型的引用。
   * @en A reference to the prototype.
   */
  readonly prototype: Generator;
}

interface GeneratorFunctionConstructor {
  /**
   * @zh 创建一个新的生成器函数。
   * @en Creates a new Generator function.
   * @param args
   * @zh 函数接受的参数列表。
   * @en A list of arguments the function accepts.
   */
  new (...args: string[]): GeneratorFunction;
  /**
   * @zh 创建一个新的生成器函数。
   * @en Creates a new Generator function.
   * @param args
   * @zh 函数接受的参数列表。
   * @en A list of arguments the function accepts.
   */
  (...args: string[]): GeneratorFunction;
  /**
   * @zh 参数的长度。
   * @en The length of the arguments.
   */
  readonly length: number;
  /**
   * @zh 返回函数的名称。
   * @en Returns the name of the function.
   */
  readonly name: string;
  /**
   * @zh 对原型的引用。
   * @en A reference to the prototype.
   */
  readonly prototype: GeneratorFunction;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * @zh 一个返回对象默认迭代器的方法。由 for-of 语句的语义调用。
   * @en A method that returns the default iterator for an object. Called by the semantics of the for-of statement.
   */
  readonly iterator: symbol;
}

interface IteratorYieldResult<TYield> {
  /**
   * @zh 表示迭代器是否完成。
   * @en Indicates whether the iterator is done.
   */
  done?: false;
  /**
   * @zh 迭代器返回的值。
   * @en The value returned by the iterator.
   */
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  /**
   * @zh 表示迭代器是否完成。
   * @en Indicates whether the iterator is done.
   */
  done: true;
  /**
   * @zh 迭代器返回的值。
   * @en The value returned by the iterator.
   */
  value: TReturn;
}

type IteratorResult<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn = any, TNext = undefined> {
  /**
   * @zh 移至迭代器的下一个值。
   * @en Moves to the next value in the iterator.
   */
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  /**
   * @zh 结束迭代器并返回值。
   * @en Ends the iterator and returns a value.
   */
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  /**
   * @zh 在迭代器中引发错误。
   * @en Throws an error in the iterator.
   */
  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  /**
   * @zh 返回此对象的迭代器。
   * @en Returns an iterator for this object.
   */
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  /**
   * @zh 返回此对象的可迭代迭代器。
   * @en Returns an iterable iterator for this object.
   */
  [Symbol.iterator](): IterableIterator<T>;
}

interface Array<T> {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * @zh 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
   * @en Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * @zh 返回一个新的Array迭代器，它包含数组中每个索引的键。
   * @en Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个新的Array Iterator对象，该对象包含数组中每个索引的值。
   * @en Returns an iterable of values in the array
   */
  values(): IterableIterator<T>;
}

interface ArrayConstructor {
  /**
   * @zh 从一个可迭代对象创建一个数组。
   * @en Creates an array from an iterable object.
   * @param iterable
   * @zh 要转换为数组的可迭代对象。
   * @en An iterable object to convert to an array.
   */
  from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];

  /**
   * @zh 从一个可迭代对象创建一个数组。
   * @en Creates an array from an iterable object.
   * @param iterable
   * @zh 要转换为数组的可迭代对象。
   * @en An iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(
    iterable: Iterable<T> | ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any
  ): U[];
}

interface ReadonlyArray<T> {
  /**
   * @zh 数组中值的迭代器。
   * @en Iterator of values in the array.
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * @zh 返回一个可迭代对象，其中包含数组中每个条目的键/值对。
   * @en Returns an iterable of key, value pairs for every entry in the array.
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * @zh 返回一个包含数组中键的可迭代对象。
   * @en Returns an iterable of keys in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个包含数组中值的可迭代对象。
   * @en Returns an iterable of values in the array.
   */
  values(): IterableIterator<T>;
}

interface IArguments {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<any>;
}

interface Map<K, V> {
  /**
   * @zh 返回一个包含映射中条目的可迭代对象。
   * @en Returns an iterable of entries in the map.
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * @zh 返回一个可迭代对象，其中包含映射中每个条目的键/值对。
   * @en Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * @zh 返回一个包含映射中键的可迭代对象。
   * @en Returns an iterable of keys in the map.
   */
  keys(): IterableIterator<K>;

  /**
   * @zh 返回一个包含映射中值的可迭代对象。
   * @en Returns an iterable of values in the map.
   */
  values(): IterableIterator<V>;
}

interface MapConstructor {
  /**
   * @zh 创建一个新的 Map 对象。
   * @en Creates a new Map object.
   * @param iterable
   * @zh 一个可迭代对象，其元素是键/值对。
   * @en An iterable object whose elements are key-value pairs.
   */
  new <K, V>(iterable: Iterable<readonly [K, V]>): Map<K, V>;
}

interface WeakMap<K extends object, V> {}

interface WeakMapConstructor {
  /**
   * @zh 创建一个新的 WeakMap 对象。
   * @en Creates a new WeakMap object.
   * @param iterable
   * @zh 一个可迭代对象，其元素是键/值对。
   * @en An iterable object whose elements are key-value pairs.
   */
  new <K extends object, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
}

interface Set<T> {
  /**
   * @zh 遍历集合中的值。
   * @en Iterates over values in the set.
   */
  [Symbol.iterator](): IterableIterator<T>;
  /**
   * @zh 对于集合中的每个值 `v`，返回一个 `[v,v]` 对的可迭代对象。
   * @en Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * @zh 尽管名称不同，但返回集合中值的可迭代对象。
   * @en Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * @zh 返回集合中值的可迭代对象。
   * @en Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
  /**
   * @zh 遍历集合中的值。
   * @en Iterates over values in the set.
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * @zh 对于集合中的每个值 `v`，返回一个 `[v,v]` 对的可迭代对象。
   * @en Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * @zh 尽管名称不同，但返回集合中值的可迭代对象。
   * @en Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * @zh 返回集合中值的可迭代对象。
   * @en Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface SetConstructor {
  /**
   * @zh 创建一个新的 Set 对象。
   * @en Creates a new Set object.
   * @param iterable
   * @zh 一个可迭代对象，其元素将添加到新的 Set 中。
   * @en An iterable object whose elements will be added to the new Set.
   */
  new <T>(iterable?: Iterable<T> | null): Set<T>;
}

interface WeakSet<T extends object> {}

interface WeakSetConstructor {
  /**
   * @zh 创建一个新的 WeakSet 对象。
   * @en Creates a new WeakSet object.
   * @param iterable
   * @zh 一个可迭代对象，其元素将添加到新的 WeakSet 中。
   * @en An iterable object whose elements will be added to the new WeakSet.
   */
  new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}

interface Promise<T> {}

interface PromiseConstructor {
  /**
   * @zh 创建一个 Promise，当所有提供的 Promise 都解析后，它将以结果数组进行解析，或者当任何一个 Promise 被拒绝时，它将被拒绝。
   * @en Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh 一组 Promise。
   * @en An array of Promises.
   * @returns
   * @zh 一个新的 Promise。
   * @en A new Promise.
   */
  all<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<TAll[]>;

  /**
   * @zh 创建一个 Promise，当任何一个提供的 Promise 被解析或拒绝时，它将被解析或拒绝。
   * @en Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
   * @param values
   * @zh 一组 Promise。
   * @en An array of Promises.
   * @returns
   * @zh 一个新的 Promise。
   * @en A new Promise.
   */
  race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
}

declare namespace Reflect {
  /**
   * @zh (非标准) 返回一个迭代器，用于遍历目标对象的可枚举属性。
   * @en (Non-standard) Returns an iterator for the enumerable properties of a target object.
   * @param target
   * @zh 要检查的对象。
   * @en The object to inspect.
   * @deprecated
   */
  function enumerate(target: object): IterableIterator<any>;
}

interface String {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<string>;
}

interface Int8Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int8ArrayConstructor {
  /**
   * @zh 创建一个新的 Int8Array 对象。
   * @en Creates a new Int8Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Int8Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int8Array;
}

interface Uint8Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ArrayConstructor {
  /**
   * @zh 创建一个新的 Uint8Array 对象。
   * @en Creates a new Uint8Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Uint8Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number
  ): Uint8Array;
}

interface Uint8ClampedArray {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ClampedArrayConstructor {
  /**
   * @zh 创建一个新的 Uint8ClampedArray 对象。
   * @en Creates a new Uint8ClampedArray object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Uint8ClampedArray;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint8ClampedArray;
}

interface Int16Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int16ArrayConstructor {
  /**
   * @zh 创建一个新的 Int16Array 对象。
   * @en Creates a new Int16Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Int16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int16Array;
}

interface Uint16Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint16ArrayConstructor {
  /**
   * @zh 创建一个新的 Uint16Array 对象。
   * @en Creates a new Uint16Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Uint16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint16Array;
}

/**
 * @zh WebAssembly 命名空间包含了所有与 WebAssembly 相关的功能。
 * @en The WebAssembly namespace contains all WebAssembly-related functionality.
 */
declare namespace WebAssembly {
  /**
   * @zh 表示 WebAssembly 编译期间发生的错误。
   * @en Represents an error that occurs during WebAssembly compilation.
   */
  interface CompileError extends Error {}

  /**
   * @zh `WebAssembly.CompileError` 对象的构造函数。
   * @en The constructor for `WebAssembly.CompileError` objects.
   */
  var CompileError: {
    prototype: CompileError;
    new (message?: string): CompileError;
    (message?: string): CompileError;
  };

  /**
   * @zh `WebAssembly.Global` 对象表示一个全局变量实例，可以从 JavaScript 中导入和导出。
   * @en A `WebAssembly.Global` object represents a global variable instance, which can be imported and exported to and from JavaScript.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Global)
   */
  interface Global<T extends ValueType = ValueType> {
    /**
     * @zh 全局变量的值。
     * @en The value of the global variable.
     */
    value: ValueTypeMap[T];
    /**
     * @zh 返回全局变量的值。
     * @en Returns the value of the global variable.
     */
    valueOf(): ValueTypeMap[T];
  }

  /**
   * @zh `WebAssembly.Global` 对象的构造函数。
   * @en The constructor for `WebAssembly.Global` objects.
   */
  var Global: {
    prototype: Global;
    new <T extends ValueType = ValueType>(
      descriptor: GlobalDescriptor<T>,
      v?: ValueTypeMap[T]
    ): Global<T>;
  };

  /**
   * @zh `WebAssembly.Instance` 对象是 `WebAssembly.Module` 的一个有状态、可执行的实例。
   * @en A `WebAssembly.Instance` object is a stateful, executable instance of a `WebAssembly.Module`.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance)
   */
  interface Instance {
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) */
    readonly exports: Exports;
  }

  /**
   * @zh `WebAssembly.Instance` 对象的构造函数。
   * @en The constructor for `WebAssembly.Instance` objects.
   */
  var Instance: {
    prototype: Instance;
    new (module: Module, importObject?: Imports): Instance;
  };

  /**
   * @zh 表示 WebAssembly 链接期间发生的错误。
   * @en Represents an error that occurs during WebAssembly linking.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
   */
  interface LinkError extends Error {}

  /**
   * @zh `WebAssembly.LinkError` 对象的构造函数。
   * @en The constructor for `WebAssembly.LinkError` objects.
   */
  var LinkError: {
    prototype: LinkError;
    new (message?: string): LinkError;
    (message?: string): LinkError;
  };

  /**
   * @zh `WebAssembly.Memory` 对象是一个可调整大小的 `ArrayBuffer` 或 `SharedArrayBuffer`，它持有 WebAssembly 实例访问的原始字节内存。
   * @en A `WebAssembly.Memory` object is a resizable `ArrayBuffer` or `SharedArrayBuffer` that holds the raw bytes of memory accessed by a WebAssembly instance.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory)
   */
  interface Memory {
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) */
    readonly buffer: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) */
    grow(delta: number): number;
  }

  /**
   * @zh `WebAssembly.Memory` 对象的构造函数。
   * @en The constructor for `WebAssembly.Memory` objects.
   */
  var Memory: {
    prototype: Memory;
    new (descriptor: MemoryDescriptor): Memory;
  };

  /**
   * @zh `WebAssembly.Module` 对象包含已经由浏览器编译的无状态 WebAssembly 代码，可以进行高效的共享、实例化和缓存。
   * @en A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently shared, instantiated, and cached.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module)
   */
  interface Module {}

  /**
   * @zh `WebAssembly.Module` 对象的构造函数。
   * @en The constructor for `WebAssembly.Module` objects.
   */
  var Module: {
    prototype: Module;
    new (bytes: BufferSource): Module;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static) */
    customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static) */
    exports(moduleObject: Module): ModuleExportDescriptor[];
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static) */
    imports(moduleObject: Module): ModuleImportDescriptor[];
  };

  /**
   * @zh 表示 WebAssembly 运行时期间发生的错误。
   * @en Represents an error that occurs during WebAssembly runtime.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
   */
  interface RuntimeError extends Error {}

  /**
   * @zh `WebAssembly.RuntimeError` 对象的构造函数。
   * @en The constructor for `WebAssembly.RuntimeError` objects.
   */
  var RuntimeError: {
    prototype: RuntimeError;
    new (message?: string): RuntimeError;
    (message?: string): RuntimeError;
  };

  /**
   * @zh `WebAssembly.Table` 对象是可调整大小的类型化引用数组，可以从 JavaScript 中导入和导出。
   * @en A `WebAssembly.Table` object is a resizable, typed array of references that can be imported and exported to and from JavaScript.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table)
   */
  interface Table {
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/length) */
    readonly length: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/get) */
    get(index: number): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) */
    grow(delta: number, value?: any): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/set) */
    set(index: number, value?: any): void;
  }

  /**
   * @zh `WebAssembly.Table` 对象的构造函数。
   * @en The constructor for `WebAssembly.Table` objects.
   */
  var Table: {
    prototype: Table;
    new (descriptor: TableDescriptor, value?: any): Table;
  };

  /**
   * @zh `WebAssembly.Global` 的描述符对象。
   * @en The descriptor object for a `WebAssembly.Global`.
   */
  interface GlobalDescriptor<T extends ValueType = ValueType> {
    /**
     * @zh 一个布尔值，指定全局变量是否可变。
     * @en A boolean specifying whether the global is mutable.
     */
    mutable?: boolean;
    /**
     * @zh 全局变量的数据类型。
     * @en The data type of the global variable.
     */
    value: T;
  }

  /**
   * @zh `WebAssembly.Memory` 的描述符对象。
   * @en The descriptor object for a `WebAssembly.Memory`.
   */
  interface MemoryDescriptor {
    /**
     * @zh 内存的初始大小，单位为 WebAssembly 页面。
     * @en The initial size of the memory, in WebAssembly pages.
     */
    initial: number;
    /**
     * @zh 允许内存增长到的最大大小，单位为 WebAssembly 页面。
     * @en The maximum size the memory is allowed to grow to, in WebAssembly pages.
     */
    maximum?: number;
    /**
     * @zh 一个布尔值，定义内存是否为共享内存。
     * @en A boolean that defines whether the memory is a shared memory.
     */
    shared?: boolean;
  }

  /**
   * @zh `WebAssembly.Module` 导出的描述符对象。
   * @en The descriptor object for an export from a `WebAssembly.Module`.
   */
  interface ModuleExportDescriptor {
    /**
     * @zh 描述的导出的种类。
     * @en The kind of the described export.
     */
    kind: ImportExportKind;
    /**
     * @zh 导出的名称。
     * @en The name of the export.
     */
    name: string;
  }

  /**
   * @zh `WebAssembly.Module` 导入的描述符对象。
   * @en The descriptor object for an import to a `WebAssembly.Module`.
   */
  interface ModuleImportDescriptor {
    /**
     * @zh 描述的导入的种类。
     * @en The kind of the described import.
     */
    kind: ImportExportKind;
    /**
     * @zh 从中导入的模块说明符。
     * @en The module specifier from which to import.
     */
    module: string;
    /**
     * @zh 正在导入的名称。
     * @en The name being imported.
     */
    name: string;
  }

  /**
   * @zh `WebAssembly.Table` 的描述符对象。
   * @en The descriptor object for a `WebAssembly.Table`.
   */
  interface TableDescriptor {
    /**
     * @zh 表中存储的值的类型。
     * @en The type of value stored in the table.
     */
    element: TableKind;
    /**
     * @zh 表的初始大小。
     * @en The initial size of the table.
     */
    initial: number;
    /**
     * @zh 允许表增长到的最大大小。
     * @en The maximum size the table is allowed to grow to.
     */
    maximum?: number;
  }

  /**
   * @zh 将 WebAssembly 值类型映射到其对应的 JS 类型。
   * @en A map of WebAssembly value types to their corresponding JS types.
   */
  interface ValueTypeMap {
    anyfunc: Function;
    externref: any;
    f32: number;
    f64: number;
    i32: number;
    i64: bigint;
    v128: never;
  }

  /**
   * @zh `instantiate()` 方法的成功结果。
   * @en The result of a successful `instantiate()` call.
   */
  interface WebAssemblyInstantiatedSource {
    /**
     * @zh 新的 `WebAssembly.Instance` 对象。
     * @en A new `WebAssembly.Instance` object.
     */
    instance: Instance;
    /**
     * @zh 实例化的 `WebAssembly.Module` 对象。
     * @en The `WebAssembly.Module` object that was instantiated.
     */
    module: Module;
  }

  
  type ImportExportKind = "function" | "global" | "memory" | "table";
  type TableKind = "anyfunc" | "externref";
  type ExportValue = Function | Global | Memory | Table;
  type Exports = Record<string, ExportValue>;
  type ImportValue = ExportValue | number;
  type Imports = Record<string, ModuleImports>;
  type ModuleImports = Record<string, ImportValue>;
  type ValueType = keyof ValueTypeMap;
  /**
   * @zh `WebAssembly.compile()` 函数从 WebAssembly 二进制代码中编译一个 `WebAssembly.Module`。
   * @en The `WebAssembly.compile()` function compiles a `WebAssembly.Module` from WebAssembly binary code.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
   */
  function compile(bytes: BufferSource): Promise<Module>;
  /**
   * @zh `WebAssembly.compileStreaming()` 函数直接从流式底层源编译一个 `WebAssembly.Module`。
   * @en The `WebAssembly.compileStreaming()` function compiles a `WebAssembly.Module` directly from a streamed underlying source.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
   */
  function compileStreaming(
    source: Response | PromiseLike<Response>
  ): Promise<Module>;
  /**
   * @zh `WebAssembly.instantiate()` 函数允许您编译和实例化 WebAssembly 代码。
   * @en The `WebAssembly.instantiate()` function allows you to compile and instantiate WebAssembly code.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
   */
  function instantiate(
    bytes: BufferSource,
    importObject?: Imports
  ): Promise<WebAssemblyInstantiatedSource>;
  function instantiate(
    moduleObject: Module,
    importObject?: Imports
  ): Promise<Instance>;
  /**
   * @zh `WebAssembly.instantiateStreaming()` 函数直接从流式底层源编译和实例化一个 WebAssembly 模块。
   * @en The `WebAssembly.instantiateStreaming()` function compiles and instantiates a WebAssembly module directly from a streamed underlying source.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
   */
  function instantiateStreaming(
    source: Response | PromiseLike<Response>,
    importObject?: Imports
  ): Promise<WebAssemblyInstantiatedSource>;
  /**
   * @zh `WebAssembly.validate()` 函数验证一个类型化数组是否包含有效的 WebAssembly 二进制代码。
   * @en The `WebAssembly.validate()` function validates a typed array of WebAssembly binary code.
   * [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
   */
  function validate(bytes: BufferSource): boolean;
}

interface Int32Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int32ArrayConstructor {
  /**
   * @zh 创建一个新的 Int32Array 对象。
   * @en Creates a new Int32Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Int32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Int32Array;
}

interface Uint32Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint32ArrayConstructor {
  /**
   * @zh 创建一个新的 Uint32Array 对象。
   * @en Creates a new Uint32Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Uint32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Uint32Array;
}

interface Float32Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float32ArrayConstructor {
  /**
   * @zh 创建一个新的 Float32Array 对象。
   * @en Creates a new Float32Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Float32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Float32Array;
}

interface Float64Array {
  /**
   * @zh 迭代器
   * @en Iterator
   */
  [Symbol.iterator](): IterableIterator<number>;
  /**
   * @zh 返回一个数组，其中包含数组中每个条目的键/值对。
   * @en Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * @zh 返回数组中键的列表。
   * @en Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * @zh 返回数组中值的列表。
   * @en Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float64ArrayConstructor {
  /**
   * @zh 创建一个新的 Float64Array 对象。
   * @en Creates a new Float64Array object.
   * @param elements
   * @zh 可迭代的数字元素。
   * @en An iterable of number elements.
   */
  new (elements: Iterable<number>): Float64Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike
   * @zh 要转换为数组的类数组或可迭代对象。
   * @en An array-like or iterable object to convert to an array.
   * @param mapfn
   * @zh 对数组的每个元素调用的映射函数。
   * @en A mapping function to call on every element of the array.
   * @param thisArg
   * @zh 用于调用 mapfn 的 'this' 的值。
   * @en Value of 'this' used to invoke the mapfn.
   */
  from(
    arrayLike: Iterable<number>,
    mapfn?: (v: number, k: number) => number,
    thisArg?: any
  ): Float64Array;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface PromiseConstructor {
  /**
   * @zh
   * 对原型的引用。
   * @en
   * A reference to the prototype.
   */
  readonly prototype: Promise<any>;

  /**
   * @zh
   * 创建一个新的 Promise。
   * @en
   * Creates a new Promise.
   * @param executor
   * @zh
   * 用于初始化 promise 的回调函数。此回调函数接收两个参数：
   * 一个 resolve 回调，用于以一个值或另一个 promise 的结果来解决 promise；
   * 以及一个 reject 回调，用于以给定的原因或错误来拒绝 promise。
   * @en
   * A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new <T>(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>,
      T10 | PromiseLike<T10>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>
    ]
  ): Promise<[T1, T2, T3, T4, T5, T6]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4, T5>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>
    ]
  ): Promise<[T1, T2, T3, T4, T5]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3, T4>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>
    ]
  ): Promise<[T1, T2, T3, T4]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2, T3>(
    values: readonly [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>
    ]
  ): Promise<[T1, T2, T3]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T1, T2>(
    values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]
  ): Promise<[T1, T2]>;

  /**
   * @zh
   * 当所有提供的 Promise 都解决时，创建一个以结果数组解决的 Promise，或者当任何一个 Promise 被拒绝时，该 Promise 也会被拒绝。
   * @en
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;

  /**
   * @zh
   * 当任何一个提供的 Promise 被解决或拒绝时，创建一个被解决或拒绝的 Promise。
   * @en
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values
   * @zh
   * 一组 Promise。
   * @en
   * An array of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  race<T>(
    values: readonly T[]
  ): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * @zh
   * 当任何一个提供的 Promise 被解决或拒绝时，创建一个被解决或拒绝的 Promise。
   * @en
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values
   * @zh
   * 一个 Promise 的可迭代对象。
   * @en
   * An iterable of Promises.
   * @returns
   * @zh
   * 一个新的 Promise。
   * @en
   * A new Promise.
   */
  race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * @zh
   * 为提供的 reason 创建一个新的被拒绝的 promise。
   * @en
   * Creates a new rejected promise for the provided reason.
   * @param reason
   * @zh
   * promise 被拒绝的原因。
   * @en
   * The reason the promise was rejected.
   * @returns
   * @zh
   * 一个新的被拒绝的 Promise。
   * @en
   * A new rejected Promise.
   */
  reject<T = never>(reason?: any): Promise<T>;

  /**
   * @zh
   * 为提供的值创建一个新的已解决的 promise。
   * @en
   * Creates a new resolved promise for the provided value.
   * @param value
   * @zh
   * 一个 promise。
   * @en
   * A promise.
   * @returns
   * @zh
   * 一个其内部状态与提供的 promise 相匹配的 promise。
   * @en
   * A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T>): Promise<T>;

  /**
   * @zh
   * 创建一个新的已解决的 promise。
   * @en
   * Creates a new resolved promise.
   * @returns
   * @zh
   * 一个已解决的 promise。
   * @en
   * A resolved promise.
   */
  resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ProxyHandler<T extends object> {
  /**
   * @zh 一个陷阱，用于拦截 `Object.getPrototypeOf`。
   * @en A trap for `Object.getPrototypeOf`.
   */
  getPrototypeOf?(target: T): object | null;
  /**
   * @zh 一个陷阱，用于拦截 `Object.setPrototypeOf`。
   * @en A trap for `Object.setPrototypeOf`.
   */
  setPrototypeOf?(target: T, v: any): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `Object.isExtensible`。
   * @en A trap for `Object.isExtensible`.
   */
  isExtensible?(target: T): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `Object.preventExtensions`。
   * @en A trap for `Object.preventExtensions`.
   */
  preventExtensions?(target: T): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `Object.getOwnPropertyDescriptor`。
   * @en A trap for `Object.getOwnPropertyDescriptor`.
   */
  getOwnPropertyDescriptor?(
    target: T,
    p: PropertyKey
  ): PropertyDescriptor | undefined;
  /**
   * @zh 一个陷阱，用于拦截 `in` 运算符。
   * @en A trap for the `in` operator.
   */
  has?(target: T, p: PropertyKey): boolean;
  /**
   * @zh 一个陷阱，用于获取属性值。
   * @en A trap for getting property values.
   */
  get?(target: T, p: PropertyKey, receiver: any): any;
  /**
   * @zh 一个陷阱，用于设置属性值。
   * @en A trap for setting property values.
   */
  set?(target: T, p: PropertyKey, value: any, receiver: any): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `delete` 运算符。
   * @en A trap for the `delete` operator.
   */
  deleteProperty?(target: T, p: PropertyKey): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `Object.defineProperty`。
   * @en A trap for `Object.defineProperty`.
   */
  defineProperty?(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  /**
   * @zh 一个陷阱，用于拦截 `for...in` 循环。
   * @en A trap for `for...in` loops.
   */
  enumerate?(target: T): PropertyKey[];
  /**
   * @zh 一个陷阱，用于拦截 `Object.keys`。
   * @en A trap for `Object.keys`.
   */
  ownKeys?(target: T): PropertyKey[];
  /**
   * @zh 一个陷阱，用于函数调用。
   * @en A trap for function calls.
   */
  apply?(target: T, thisArg: any, argArray?: any): any;
  /**
   * @zh 一个陷阱，用于拦截 `new` 运算符。
   * @en A trap for the `new` operator.
   */
  construct?(target: T, argArray: any, newTarget?: any): object;
}

interface ProxyConstructor {
  /**
   * @zh 创建一个可撤销的 Proxy 对象。
   * @en Creates a revocable Proxy object.
   */
  revocable<T extends object>(
    target: T,
    handler: ProxyHandler<T>
  ): { proxy: T; revoke: () => void };
  /**
   * @zh 创建一个新的 Proxy 对象。
   * @en Creates a new Proxy object.
   */
  new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Reflect {
  /**
   * @zh 调用一个函数，并指定 `this` 上下文和参数。
   * @en Calls a function with a specified `this` context and arguments.
   */
  function apply(
    target: Function,
    thisArgument: any,
    argumentsList: ArrayLike<any>
  ): any;
  /**
   * @zh 使用指定的参数调用一个构造函数。
   * @en Calls a constructor with specified arguments.
   */
  function construct(
    target: Function,
    argumentsList: ArrayLike<any>,
    newTarget?: any
  ): any;
  /**
   * @zh 在一个对象上定义一个新属性，或修改一个现有属性。
   * @en Defines a new property on an object, or modifies an existing property.
   */
  function defineProperty(
    target: object,
    propertyKey: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  /**
   * @zh 删除一个对象的属性。
   * @en Deletes a property on an object.
   */
  function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
  /**
   * @zh 获取一个对象的属性值。
   * @en Gets a property value of an object.
   */
  function get(target: object, propertyKey: PropertyKey, receiver?: any): any;
  /**
   * @zh 获取一个对象自身属性的描述符。
   * @en Gets the descriptor of an own property of an object.
   */
  function getOwnPropertyDescriptor(
    target: object,
    propertyKey: PropertyKey
  ): PropertyDescriptor | undefined;
  /**
   * @zh 获取一个对象的原型。
   * @en Gets the prototype of an object.
   */
  function getPrototypeOf(target: object): object;
  /**
   * @zh 检查一个对象是否具有某个属性。
   * @en Checks if an object has a property.
   */
  function has(target: object, propertyKey: PropertyKey): boolean;
  /**
   * @zh 判断一个对象是否是可扩展的（即是否可以添加新属性）。
   * @en Determines if an object is extensible (whether it can have new properties added to it).
   */
  function isExtensible(target: object): boolean;
  /**
   * @zh 返回一个由目标对象自身的属性键组成的数组。
   * @en Returns an array of the target object's own property keys.
   */
  function ownKeys(target: object): PropertyKey[];
  /**
   * @zh 阻止向对象添加新属性。
   * @en Prevents new properties from being added to an object.
   */
  function preventExtensions(target: object): boolean;
  /**
   * @zh 设置一个对象的属性值。
   * @en Sets a property value of an object.
   */
  function set(
    target: object,
    propertyKey: PropertyKey,
    value: any,
    receiver?: any
  ): boolean;
  /**
   * @zh 设置一个对象的原型（即其内部的 `[[Prototype]]` 属性）。
   * @en Sets the prototype of an object (its internal `[[Prototype]]` property).
   */
  function setPrototypeOf(target: object, proto: any): boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * @zh 对原型对象的引用。
   * @en A reference to the prototype.
   */
  readonly prototype: Symbol;

  /**
   * @zh 返回一个新的唯一的 Symbol 值。
   * @en Returns a new unique Symbol value.
   * @param  description @zh 新 Symbol 对象的描述。 @en Description of the new Symbol object.
   */
  (description?: string | number): symbol;

  /**
   * @zh 从全局符号注册表中返回与给定键匹配的 Symbol 对象（如果找到）。否则，返回一个带有此键的新符号。
   * @en Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
   * @param key @zh 要搜索的键。 @en key to search for.
   */
  for(key: string): symbol;

  /**
   * @zh 从全局符号注册表中返回与给定 Symbol 匹配的键（如果找到）。否则，返回 undefined。
   * @en Returns a key from the global symbol registry matching the given Symbol if found. Otherwise, returns a undefined.
   * @param sym @zh 要查找其键的 Symbol。 @en Symbol to find the key for.
   */
  keyFor(sym: symbol): string | undefined;
}

declare var Symbol: SymbolConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * @zh 一个用于确定构造函数是否将对象识别为其实例的方法。由 `instanceof` 运算符的语义调用。
   * @en A method that determines if a constructor object recognizes an object as one of the constructor’s instances. Called by the semantics of the instanceof operator.
   */
  readonly hasInstance: symbol;

  /**
   * @zh 一个布尔值，如果为 true，表示当使用 `Array.prototype.concat` 时，对象应该被扁平化到其数组元素。
   * @en A Boolean value that if true indicates that an object should flatten to its array elements by Array.prototype.concat.
   */
  readonly isConcatSpreadable: symbol;

  /**
   * @zh 一个正则表达式方法，用于将正则表达式与字符串进行匹配。由 `String.prototype.match` 方法调用。
   * @en A regular expression method that matches the regular expression against a string. Called by the String.prototype.match method.
   */
  readonly match: symbol;

  /**
   * @zh 一个正则表达式方法，用于替换字符串的匹配子串。由 `String.prototype.replace` 方法调用。
   * @en A regular expression method that replaces matched substrings of a string. Called by the String.prototype.replace method.
   */
  readonly replace: symbol;

  /**
   * @zh 一个正则表达式方法，用于返回字符串中与正则表达式匹配的索引。由 `String.prototype.search` 方法调用。
   * @en A regular expression method that returns the index within a string that matches the regular expression. Called by the String.prototype.search method.
   */
  readonly search: symbol;

  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly species: symbol;

  /**
   * @zh 一个正则表达式方法，用于在匹配正则表达式的索引处拆分字符串。由 `String.prototype.split` 方法调用。
   * @en A regular expression method that splits a string at the indices that match the regular expression. Called by the String.prototype.split method.
   */
  readonly split: symbol;

  /**
   * @zh 一个将对象转换为相应原始值的方法。由 ToPrimitive 抽象操作调用。
   * @en A method that converts an object to a corresponding primitive value. Called by the ToPrimitive abstract operation.
   */
  readonly toPrimitive: symbol;

  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly toStringTag: symbol;

  /**
   * @zh 一个对象，其自有属性名是在关联对象的 'with' 环境绑定中被排除的属性名。
   * @en An Object whose own property names are property names that are excluded from the 'with' environment bindings of the associated objects.
   */
  readonly unscopables: symbol;
}

interface Symbol {
  readonly [Symbol.toStringTag]: string;
}

interface Array<T> {
  /**
   * @zh 返回一个对象，其属性在“with”语句中使用时将不存在，值为“true”。
   * @en Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.
   */
  readonly [Symbol.unscopables]: {
    [key in keyof T[]]?: boolean;
  };
}

interface Date {
  /**
   * @zh 将 Date 对象转换为字符串。
   * @en Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "default"): string;
  /**
   * @zh 将 Date 对象转换为字符串。
   * @en Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "string"): string;
  /**
   * @zh 将 Date 对象转换为数字。
   * @en Converts a Date object to a number.
   */
  [Symbol.toPrimitive](hint: "number"): number;
  /**
   * @zh 将 Date 对象转换为字符串或数字。
   * @en Converts a Date object to a string or number.
   *
   * @param hint @zh 字符串 "number"、"string" 或 "default"，用于指定返回哪种原始类型。 @en The strings "number", "string", or "default" to specify what primitive to return.
   *
   * @throws {TypeError} @zh 如果 'hint' 不是 "number"、"string" 或 "default"。 @en If 'hint' was given something other than "number", "string", or "default".
   * @returns @zh 如果 'hint' 是 "number"，则返回数字；如果 'hint' 是 "string" 或 "default"，则返回字符串。 @en A number if 'hint' was "number", a string if 'hint' was "string" or "default".
   */
  [Symbol.toPrimitive](hint: string): string | number;
}

interface Map<K, V> {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface WeakMap<K extends object, V> {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface Set<T> {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface WeakSet<T extends object> {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface JSON {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface Function {
  /**
   * @zh 如果此函数用作构造函数，则确定给定值是否继承自此函数。
   * @en Determines whether the given value inherits from this function if this function was used as a constructor function.
   *
   * @zh 构造函数可以通过重写此方法来控制哪些对象被 'instanceof' 识别为其-实例。
   * @en A constructor function can control which objects are recognized as its instances by 'instanceof' by overriding this method.
   */
  [Symbol.hasInstance](value: any): boolean;
}

interface GeneratorFunction {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface Math {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface Promise<T> {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface PromiseConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: PromiseConstructor;
}

interface RegExp {
  /**
   * @zh 匹配一个字符串与此正则表达式，并返回一个包含该搜索结果的数组。
   * @en Matches a string with this regular expression, and returns an array containing the results of that search.
   * @param string @zh 要搜索的字符串。 @en A string to search within.
   */
  [Symbol.match](string: string): RegExpMatchArray | null;

  /**
   * @zh 使用此正则表达式替换字符串中的文本。
   * @en Replaces text in a string, using this regular expression.
   * @param string @zh 将对其内容与此正则表达式进行匹配并替换的 String 对象或字符串字面量。 @en A String object or string literal whose contents matching against this regular expression will be replaced.
   * @param replaceValue @zh 一个 String 对象或字符串字面量，包含用于替换此正则表达式每次成功匹配的文本。 @en A String object or string literal containing the text to replace for every successful match of this regular expression.
   */
  [Symbol.replace](string: string, replaceValue: string): string;

  /**
   * @zh 使用此正则表达式替换字符串中的文本。
   * @en Replaces text in a string, using this regular expression.
   * @param string @zh 将对其内容与此正则表达式进行匹配并替换的 String 对象或字符串字面量。 @en A String object or string literal whose contents matching against this regular expression will be replaced.
   * @param replacer @zh 一个返回替换文本的函数。 @en A function that returns the replacement text.
   */
  [Symbol.replace](
    string: string,
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * @zh 使用此正则表达式在正则表达式搜索中查找第一个子字符串匹配的起始位置。
   * @en Finds the position beginning first substring match in a regular expression search using this regular expression.
   *
   * @param string @zh 要搜索的字符串。 @en The string to search within.
   * @returns @zh 匹配的起始位置。 @en The index of the start of the match.
   */
  [Symbol.search](string: string): number;

  /**
   * @zh 返回一个子字符串数组，这些子字符串由原始输入中与此正则表达式匹配的字符串分隔。
   * @en Returns an array of substrings that were delimited by strings in the original input that match against this regular expression.
   *
   * @param string @zh 要拆分的字符串。 @en String to split.
   * @param limit @zh 一个用于限制数组中返回元素数量的值。 @en A value used to limit the number of elements returned in the array.
   * @returns @zh 一个包含子字符串的数组。 @en An array of substrings.
   */
  [Symbol.split](string: string, limit?: number): string[];
}

interface RegExpConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: RegExpConstructor;
}

interface String {
  /**
   * @zh 匹配一个字符串和一个支持匹配的对象，并返回一个包含该搜索结果的数组。
   * @en Matches a string an object that supports being matched against, and returns an array containing the results of that search.
   * @param matcher @zh 一个支持匹配的对象。 @en An object that supports being matched against.
   */
  match(matcher: {
    [Symbol.match](string: string): RegExpMatchArray | null;
  }): RegExpMatchArray | null;

  /**
   * @zh 使用一个支持在字符串内替换的对象来替换字符串中的文本。
   * @en Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue @zh 一个可以在字符串中搜索和替换匹配项的对象。 @en An object that can search for and replace matches within a string.
   * @param replaceValue @zh 一个字符串，包含用于替换此字符串中 searchValue 每次成功匹配的文本。 @en A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(
    searchValue: {
      [Symbol.replace](string: string, replaceValue: string): string;
    },
    replaceValue: string
  ): string;

  /**
   * @zh 使用一个支持在字符串内替换的对象来替换字符串中的文本。
   * @en Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue @zh 一个可以在字符串中搜索和替换匹配项的对象。 @en An object that can search for and replace matches within a string.
   * @param replacer @zh 一个返回替换文本的函数。 @en A function that returns the replacement text.
   */
  replace(
    searchValue: {
      [Symbol.replace](
        string: string,
        replacer: (substring: string, ...args: any[]) => string
      ): string;
    },
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * @zh 在正则表达式搜索中查找第一个子字符串匹配项。
   * @en Finds the first substring match in a regular expression search.
   * @param searcher @zh 一个支持在字符串内搜索的对象。 @en An object which supports searching within a string.
   */
  search(searcher: { [Symbol.search](string: string): number }): number;

  /**
   * @zh 使用指定的分隔符将一个字符串分割成子字符串，并以数组形式返回它们。
   * @en Split a string into substrings using the specified separator and return them as an array.
   * @param splitter @zh 一个可以分割字符串的对象。 @en An object that can split a string.
   * @param limit @zh 一个用于限制数组中返回元素数量的值。 @en A value used to limit the number of elements returned in the array.
   */
  split(
    splitter: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number
  ): string[];
}

interface ArrayBuffer {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface DataView {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: string;
}

interface Int8Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Int8Array";
}

interface Uint8Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "UInt8Array";
}

interface Uint8ClampedArray {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Uint8ClampedArray";
}

interface Int16Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Int16Array";
}

interface Uint16Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Uint16Array";
}

interface Int32Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Int32Array";
}

interface Uint32Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Uint32Array";
}

interface Float32Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Float32Array";
}

interface Float64Array {
  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Float64Array";
}

interface ArrayConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: ArrayConstructor;
}
interface MapConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: MapConstructor;
}
interface SetConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: SetConstructor;
}
interface ArrayBufferConstructor {
  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: ArrayBufferConstructor;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface ReadonlyArray<T> {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface Int8Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8ClampedArray {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int16Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint16Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int32Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint32Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float32Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float64Array {
  /**
   * @zh 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement
   * @zh 需要查找的元素值。
   * @en The element to search for.
   * @param fromIndex
   * @zh 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
   * @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  type DateTimeFormatPartTypes =
    | "day"
    | "dayPeriod"
    | "era"
    | "hour"
    | "literal"
    | "minute"
    | "month"
    | "second"
    | "timeZoneName"
    | "weekday"
    | "year";

  interface DateTimeFormatPart {
    type: DateTimeFormatPartTypes;
    value: string;
  }

  interface DateTimeFormat {
    formatToParts(date?: Date | number): DateTimeFormatPart[];
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * @zh 返回一个包含对象自身所有可枚举属性值的数组。
   * @en Returns an array of values of the enumerable properties of an object.
   * @param o @zh 包含属性和方法的对象。可以是您创建的对象或现有的 DOM 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

  /**
   * @zh 返回一个包含对象自身所有可枚举属性值的数组。
   * @en Returns an array of values of the enumerable properties of an object.
   * @param o @zh 包含属性和方法的对象。可以是您创建的对象或现有的 DOM 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values(o: {}): any[];

  /**
   * @zh 返回一个包含对象自身所有可枚举属性的键/值对的数组。
   * @en Returns an array of key/values of the enumerable properties of an object.
   * @param o @zh 包含属性和方法的对象。可以是您创建的对象或现有的 DOM 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

  /**
   * @zh 返回一个包含对象自身所有可枚举属性的键/值对的数组。
   * @en Returns an array of key/values of the enumerable properties of an object.
   * @param o @zh 包含属性和方法的对象。可以是您创建的对象或现有的 DOM 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries(o: {}): [string, any][];

  /**
   * @zh 返回一个包含对象所有自身属性描述符的对象。
   * @en Returns an object containing all own property descriptors of an object.
   * @param o @zh 包含属性和方法的对象。可以是您创建的对象或现有的 DOM 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  getOwnPropertyDescriptors<T>(o: T): {
    [P in keyof T]: TypedPropertyDescriptor<T[P]>;
  } & {
    [x: string]: PropertyDescriptor;
  };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SharedArrayBuffer {
  /**
   * @zh 只读。ArrayBuffer 的长度（以字节为单位）。
   * @en Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /**
   * @zh 返回 SharedArrayBuffer 的一个片段。
   * @en Returns a section of a SharedArrayBuffer.
   * @param begin @zh 切片开始的索引。 @en The beginning of the specified portion of the SharedArrayBuffer.
   * @param end @zh 切片结束的索引（不包括）。 @en The end of the specified portion of the SharedArrayBuffer. (exclusive)
   */
  slice(begin: number, end?: number): SharedArrayBuffer;

  /**
   * @zh 一个函数值的属性，是用于创建派生对象的构造函数。
   * @en A function valued property that is the constructor function that is used to create derived objects.
   */
  readonly [Symbol.species]: SharedArrayBuffer;

  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}

interface SharedArrayBufferConstructor {
  /**
   * @zh SharedArrayBuffer 构造函数的原型对象。
   * @en The prototype of the SharedArrayBuffer constructor.
   */
  readonly prototype: SharedArrayBuffer;
  /**
   * @zh 创建一个新的 SharedArrayBuffer 对象。
   * @en Creates a new SharedArrayBuffer object.
   * @param byteLength @zh 新的 SharedArrayBuffer 的大小（以字节为单位）。 @en The size, in bytes, of the new SharedArrayBuffer.
   */
  new (byteLength: number): SharedArrayBuffer;
}
declare var SharedArrayBuffer: SharedArrayBufferConstructor;

interface ArrayBufferTypes {
  SharedArrayBuffer: SharedArrayBuffer;
}

interface Atomics {
  /**
   * @zh 将一个值与数组中给定位置的值相加，并返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Adds a value to the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要加上的值。 @en The value to add.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  add(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 将一个值与数组中给定位置的值进行按位与操作，并将结果存储回该位置，返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Stores the bitwise AND of a value with the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要进行按位与操作的值。 @en The value to perform the bitwise AND with.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  and(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 如果数组中给定位置的原始值等于给定的期望值，则替换该位置的值，并返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Replaces the value at the given position in the array if the original value equals the given expected value, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param expectedValue @zh 期望在 `index` 位置找到的值。 @en The value that is expected to be found at the given index.
   * @param replacementValue @zh 如果 `expectedValue` 匹配，要替换的值。 @en The value to replace with if the expected value matches.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  compareExchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    expectedValue: number,
    replacementValue: number
  ): number;

  /**
   * @zh 替换数组中给定位置的值，并返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Replaces the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要存储的值。 @en The value to store.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  exchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 返回一个布尔值，指示对于给定字节数的类型化数组元素，高性能算法是可以使用原子操作（`true`）还是必须使用锁（`false`）。
   * @en Returns a value indicating whether high-performance algorithms can use atomic operations (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed array.
   * @param size @zh 要检查的元素大小（以字节为单位）。 @en The size in bytes of the element to check.
   * @returns @zh 如果可以在该大小的元素上执行原子操作，则为 `true`；否则为 `false`。 @en `true` if atomic operations can be performed on elements of that size, `false` otherwise.
   */
  isLockFree(size: number): boolean;

  /**
   * @zh 返回数组中给定位置的值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Returns the value at the given position in the array. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要读取的位置索引。 @en The index in the typedArray to read from.
   * @returns @zh 该位置的值。 @en The value at that position.
   */
  load(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number
  ): number;

  /**
   * @zh 将一个值与数组中给定位置的值进行按位或操作，并将结果存储回该位置，返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Stores the bitwise OR of a value with the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要进行按位或操作的值。 @en The value to perform the bitwise OR with.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  or(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 在数组中的给定位置存储一个值，并返回新值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Stores a value at the given position in the array, returning the new value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要存储的位置索引。 @en The index in the typedArray to store into.
   * @param value @zh 要存储的值。 @en The value to store.
   * @returns @zh 存储的值。 @en The value that was stored.
   */
  store(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 从数组中给定位置的值中减去一个值，并返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Subtracts a value from the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要减去的值。 @en The value to subtract.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  sub(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 如果数组中给定位置的值等于提供的值，则当前代理将进入休眠状态，导致执行暂停，直到超时（返回 `"timed-out"`）或代理被唤醒（返回 `"ok"`）；否则，返回 `"not-equal"`。
   * @en If the value at the given position in the array is equal to the provided value, the current agent is put to sleep causing execution to suspend until the timeout expires (returning `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns `"not-equal"`.
   * @param typedArray @zh 一个 Int32Array。 @en An Int32Array.
   * @param index @zh `typedArray` 中要等待的位置索引。 @en The index in the typedArray to wait on.
   * @param value @zh 期望在 `index` 位置找到的值。 @en The value that is expected to be found at the given index.
   * @param timeout @zh 等待的毫秒数。 @en The number of milliseconds to wait.
   * @returns @zh `'ok'`、`'not-equal'` 或 `'timed-out'`。 @en `'ok'`, `'not-equal'`, or `'timed-out'`.
   */
  wait(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number
  ): "ok" | "not-equal" | "timed-out";

  /**
   * @zh 唤醒正在数组给定索引上等待的休眠代理，并返回被唤醒的代理数量。
   * @en Wakes up sleeping agents that are waiting on the given index of the array, returning the number of agents that were awoken.
   * @param typedArray @zh 一个 Int32Array。 @en An Int32Array.
   * @param index @zh `typedArray` 中要通知的位置索引。 @en The index in the typedArray to notify on.
   * @param count @zh 要唤醒的代理数量。 @en The number of agents to wake up.
   * @returns @zh 被唤醒的代理数量。 @en The number of agents that were awoken.
   */
  notify(typedArray: Int32Array, index: number, count: number): number;

  /**
   * @zh 将一个值与数组中给定位置的值进行按位异或操作，并将结果存储回该位置，返回原始值。在此原子操作完成之前，对该数组的任何其他读写操作都将被阻塞。
   * @en Stores the bitwise XOR of a value with the value at the given position in the array, returning the original value. Until this atomic operation completes, any other read or write operation against the array will block.
   * @param typedArray @zh 一个 Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array 或 Uint32Array。 @en An Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, or Uint32Array.
   * @param index @zh `typedArray` 中要操作的位置索引。 @en The index in the typedArray to operate on.
   * @param value @zh 要进行按位异或操作的值。 @en The value to perform the bitwise XOR with.
   * @returns @zh 该位置的原始值。 @en The original value at that position.
   */
  xor(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;

  /**
   * @zh 一个字符串值，用于创建对象的默认字符串描述。由内置方法 `Object.prototype.toString` 调用。
   * @en A String value that is used in the creation of the default string description of an object. Called by the built-in method Object.prototype.toString.
   */
  readonly [Symbol.toStringTag]: "Atomics";
}

declare var Atomics: Atomics;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * @zh 使用给定字符串（可能重复）填充当前字符串的开头（左侧），直到结果字符串达到给定长度。
   * @en Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
   * @param maxLength @zh 填充后结果字符串的长度。如果此参数小于当前字符串的长度，将按原样返回当前字符串。 @en The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as is.
   * @param fillString @zh 用于填充当前字符串的字符串。如果此字符串太长而无法保持在 maxLength 内，它将从右侧被截断。 @en The string to pad the current string with. If this string is too long to stay within the maxLength, it will be truncated from the right.
   * @returns @zh 填充后的字符串。 @en The padded string.
   */
  padStart(maxLength: number, fillString?: string): string;

  /**
   * @zh 使用给定字符串（可能重复）填充当前字符串的结尾（右侧），直到结果字符串达到给定长度。
   * @en Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
   * @param maxLength @zh 填充后结果字符串的长度。如果此参数小于当前字符串的长度，将按原样返回当前字符串。 @en The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as is.
   * @param fillString @zh 用于填充当前字符串的字符串。如果此字符串太长而无法保持在 maxLength 内，它将从右侧被截断。 @en The string to pad the current string with. If this string is too long to stay within the maxLength, it will be truncated from the right.
   * @returns @zh 填充后的字符串。 @en The padded string.
   */
  padEnd(maxLength: number, fillString?: string): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/**
 * @zh Int8Array 构造函数。
 * @en The Int8Array constructor.
 */
interface Int8ArrayConstructor {
  new (): Int8Array;
}

/**
 * @zh Uint8Array 构造函数。
 * @en The Uint8Array constructor.
 */
interface Uint8ArrayConstructor {
  new (): Uint8Array;
}

/**
 * @zh Uint8ClampedArray 构造函数。
 * @en The Uint8ClampedArray constructor.
 */
interface Uint8ClampedArrayConstructor {
  new (): Uint8ClampedArray;
}

/**
 * @zh Int16Array 构造函数。
 * @en The Int16Array constructor.
 */
interface Int16ArrayConstructor {
  new (): Int16Array;
}

/**
 * @zh Uint16Array 构造函数。
 * @en The Uint16Array constructor.
 */
interface Uint16ArrayConstructor {
  new (): Uint16Array;
}

/**
 * @zh Int32Array 构造函数。
 * @en The Int32Array constructor.
 */
interface Int32ArrayConstructor {
  new (): Int32Array;
}

/**
 * @zh Uint32Array 构造函数。
 * @en The Uint32Array constructor.
 */
interface Uint32ArrayConstructor {
  new (): Uint32Array;
}

/**
 * @zh Float32Array 构造函数。
 * @en The Float32Array constructor.
 */
interface Float32ArrayConstructor {
  new (): Float32Array;
}

/**
 * @zh Float64Array 构造函数。
 * @en The Float64Array constructor.
 */
interface Float64ArrayConstructor {
  new (): Float64Array;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface AsyncGenerator<T = unknown, TReturn = any, TNext = unknown>
  extends AsyncIterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  /**
   * @zh 返回一个 Promise，该 Promise 解析为一个包含 `value` 和 `done` 属性的对象。
   * @en Returns a Promise that resolves to an object with `value` and `done` properties.
   * @param args @zh 传递给生成器的参数。 @en The arguments to pass to the generator.
   */
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
  /**
   * @zh 返回给定的值并结束生成器。
   * @en Returns the given value and finishes the generator.
   * @param value @zh 要返回的值。 @en The value to return.
   */
  return(
    value: TReturn | PromiseLike<TReturn>
  ): Promise<IteratorResult<T, TReturn>>;
  /**
   * @zh 抛出一个错误并结束生成器。
   * @en Throws an error and finishes the generator.
   * @param e @zh 要抛出的错误。 @en The error to throw.
   */
  throw(e: any): Promise<IteratorResult<T, TReturn>>;
  /**
   * @zh 返回生成器本身。
   * @en Returns the generator itself.
   */
  [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
}

interface AsyncGeneratorFunction {
  /**
   * @zh 创建一个新的 AsyncGenerator 对象。
   * @en Creates a new AsyncGenerator object.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  new (...args: any[]): AsyncGenerator;
  /**
   * @zh 创建一个新的 AsyncGenerator 对象。
   * @en Creates a new AsyncGenerator object.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  (...args: any[]): AsyncGenerator;
  /**
   * @zh 参数的长度。
   * @en The length of the arguments.
   */
  readonly length: number;
  /**
   * @zh 返回函数的名称。
   * @en Returns the name of the function.
   */
  readonly name: string;
  /**
   * @zh 对原型的引用。
   * @en A reference to the prototype.
   */
  readonly prototype: AsyncGenerator;
}

interface AsyncGeneratorFunctionConstructor {
  /**
   * @zh 创建一个新的 AsyncGenerator 函数。
   * @en Creates a new AsyncGenerator function.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  new (...args: string[]): AsyncGeneratorFunction;
  /**
   * @zh 创建一个新的 AsyncGenerator 函数。
   * @en Creates a new AsyncGenerator function.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  (...args: string[]): AsyncGeneratorFunction;
  /**
   * @zh 参数的长度。
   * @en The length of the arguments.
   */
  readonly length: number;
  /**
   * @zh 返回函数的名称。
   * @en Returns the name of the function.
   */
  readonly name: string;
  /**
   * @zh 对原型的引用。
   * @en A reference to the prototype.
   */
  readonly prototype: AsyncGeneratorFunction;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that returns the default async iterator for an object. Called by the semantics of
   * the for-await-of statement.
   */
  readonly asyncIterator: symbol;
}

interface AsyncIterator<T, TReturn = any, TNext = unknown> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  /**
   * @zh 返回一个 Promise，该 Promise 解析为迭代器结果对象。
   * @en Returns a Promise that resolves to an iterator result object.
   */
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
  /**
   * @zh 可选。返回给定的值并完成迭代器。
   * @en Optional. Returns the given value and finishes the iterator.
   */
  return?(
    value?: TReturn | PromiseLike<TReturn>
  ): Promise<IteratorResult<T, TReturn>>;
  /**
   * @zh 可选。向迭代器发出错误信号。
   * @en Optional. Signals an error to the iterator.
   */
  throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncIterable<T> {
  /**
   * @zh 返回一个异步可迭代对象。
   * @en Returns an async iterable object.
   * @zh 返回一个符合异步迭代器协议的对象。
   * @en Returns an object that conforms to the async iterator protocol.
   */
  [Symbol.asyncIterator](): AsyncIterator<T>;
}

interface AsyncIterableIterator<T> extends AsyncIterator<T> {
  /**
   * @zh 返回一个符合异步可迭代协议和异步迭代器协议的对象。
   * @en Returns an object that conforms to both the async iterable and async iterator protocols.
   */
  [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  interface PluralRulesOptions {
    /**
     * @zh 使用的区域设置匹配算法。
     * @en The locale matching algorithm to use.
     */
    localeMatcher?: "lookup" | "best fit";
    /**
     * @zh 格式化时使用的类型。
     * @en The type to use for formatting.
     */
    type?: "cardinal" | "ordinal";
  }

  interface ResolvedPluralRulesOptions {
    /**
     * @zh BCP 47 语言标签，用于实际的区域设置。
     * @en The BCP 47 language tag for the locale actually used.
     */
    locale: string;
    /**
     * @zh 此区域设置和选项下使用的复数类别。
     * @en The plural categories used for this locale and options.
     */
    pluralCategories: string[];
    /**
     * @zh 格式化时使用的类型。
     * @en The type used for formatting.
     */
    type: "cardinal" | "ordinal";
    /**
     * @zh 用于整数部分的最小位数。
     * @en The minimum number of integer digits to use.
     */
    minimumIntegerDigits: number;
    /**
     * @zh 用于小数部分的最小位数。
     * @en The minimum number of fraction digits to use.
     */
    minimumFractionDigits: number;
    /**
     * @zh 用于小数部分的最大位数。
     * @en The maximum number of fraction digits to use.
     */
    maximumFractionDigits: number;
    /**
     * @zh 用于有效数字的最小位数。
     * @en The minimum number of significant digits to use.
     */
    minimumSignificantDigits: number;
    /**
     * @zh 用于有效数字的最大位数。
     * @en The maximum number of significant digits to use.
     */
    maximumSignificantDigits: number;
    /**
     * @zh 舍入优先级。
     * @en The rounding priority.
     */
    roundingPriority?: "auto" | "morePrecision" | "lessPrecision";
  }

  interface PluralRules {
    /**
     * @zh 返回一个包含已解析区域设置和复数规则选项的对象。
     * @en Returns an object with the resolved locale and plural rules options.
     */
    resolvedOptions(): ResolvedPluralRulesOptions;
    /**
     * @zh 返回一个字符串，指示与给定数字对应的复数类别。
     * @en Returns a string indicating which plural category the number falls into.
     * @param n @zh 要格式化的数字。 @en The number to format.
     */
    select(n: number): string;
  }

  /**
   * @zh 一个构造函数，用于创建复数规则。
   * @en A constructor used to create plural rules.
   */
  const PluralRules: {
    /**
     * @zh 创建一个 PluralRules 对象。
     * @en Creates a PluralRules object.
     * @param locales @zh BCP 47 语言标签的字符串或数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 配置复数规则格式化行为的选项对象。 @en An object with some or all of the following properties.
     */
    new (
      locales?: string | string[],
      options?: PluralRulesOptions
    ): PluralRules;
    /**
     * @zh 返回一个数组，其中包含所提供区域设置中受支持的那些区域设置，同时不必要求运行时支持它们。
     * @en Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.
     * @param locales @zh BCP 47 语言标签的字符串或数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 配置复数规则格式化行为的选项对象。 @en An object with some or all of the following properties.
     */
    supportedLocalesOf(
      locales: string | string[],
      options?: PluralRulesOptions
    ): string[];
  };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * @zh 附加一个在 Promise 敲定（无论是 fulfilled 或 rejected）时调用的回调函数。从该回调中无法修改解析值。
   * @en Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.
   * @param onfinally @zh 当 Promise 敲定时要执行的回调函数。 @en The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns @zh 一个表示回调完成的 Promise。 @en A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface RegExpMatchArray {
  /**
   * @zh 一个包含命名捕获组的对象，或者如果未使用命名捕获组，则为 undefined。
   * @en An object containing named capture groups, or undefined if no named capture groups were used.
   */
  groups?: {
    [key: string]: string;
  };
}

interface RegExpExecArray {
  /**
   * @zh 一个包含命名捕获组的对象，或者如果未使用命名捕获组，则为 undefined。
   * @en An object containing named capture groups, or undefined if no named capture groups were used.
   */
  groups?: {
    [key: string]: string;
  };
}

interface RegExp {
  /**
   * @zh 返回一个布尔值，指示正则表达式中使用的 dotAll 标志 (s) 的状态。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression. Default is false. Read-only.
   */
  readonly dotAll: boolean;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ReadonlyArray<T> {
  /**
   * @zh 对数组中的每个元素调用定义的回调函数，然后将结果展平为新数组。
   * 这等同于先进行 map 操作，然后进行深度为 1 的 flat 操作。
   * @en Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback @zh 一个接受最多三个参数的函数。flatMap 方法对数组中的每个元素调用一次回调函数。 @en A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg @zh 一个对象，在回调函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index: number,
      array: T[]
    ) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][][][]>
      | ReadonlyArray<ReadonlyArray<U[][][]>>
      | ReadonlyArray<ReadonlyArray<U[][]>[]>
      | ReadonlyArray<ReadonlyArray<U[]>[][]>
      | ReadonlyArray<ReadonlyArray<U>[][][]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[][]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[][]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[][]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>[]>
      | ReadonlyArray<
          ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>
        >,
    depth: 4
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][][]>
      | ReadonlyArray<ReadonlyArray<U>[][]>
      | ReadonlyArray<ReadonlyArray<U[]>[]>
      | ReadonlyArray<ReadonlyArray<U[][]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>,
    depth: 3
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(
    this:
      | ReadonlyArray<U[][]>
      | ReadonlyArray<ReadonlyArray<U[]>>
      | ReadonlyArray<ReadonlyArray<U>[]>
      | ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>,
    depth: 2
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(
    this: ReadonlyArray<U[]> | ReadonlyArray<ReadonlyArray<U>>,
    depth?: 1
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: ReadonlyArray<U>, depth: 0): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。如果未提供深度，flat 方法默认为深度 1。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(depth?: number): any[];
}

interface Array<T> {
  /**
   * @zh 对数组中的每个元素调用定义的回调函数，然后将结果展平为新数组。
   * 这等同于先进行 map 操作，然后进行深度为 1 的 flat 操作。
   * @en Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback @zh 一个接受最多三个参数的函数。flatMap 方法对数组中的每个元素调用一次回调函数。 @en A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg @zh 一个对象，在回调函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index: number,
      array: T[]
    ) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][][][][][][], depth: 7): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][][][][][], depth: 6): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][][][][], depth: 5): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][][][], depth: 4): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][][], depth: 3): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][][], depth: 2): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[][], depth?: 1): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(this: U[], depth: 0): U[];

  /**
   * @zh 返回一个新数组，其中所有子数组元素递归地连接到指定深度。如果未提供深度，flat 方法默认为深度 1。
   * @en Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth @zh 最大递归深度。 @en The maximum recursion depth.
   */
  flat<U>(depth?: number): any[];
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * @zh 通过属性和方法的键值对条目返回一个创建的对象。
   * @en Returns an object created by key-value entries for properties and methods.
   * @param entries @zh 一个包含属性和方法的键值对条目的可迭代对象。 @en An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries<T = any>(
    entries: Iterable<readonly [PropertyKey, T]>
  ): { [k in PropertyKey]: T };

  /**
   * @zh 通过属性和方法的键值对条目返回一个创建的对象。
   * @en Returns an object created by key-value entries for properties and methods.
   * @param entries @zh 一个包含属性和方法的键值对条目的可迭代对象。 @en An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries(entries: Iterable<readonly any[]>): any;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * @zh 从字符串中删除尾随的空白字符和行终止符。
   * @en Removes the trailing white space and line terminator characters from a string.
   */
  trimEnd(): string;

  /**
   * @zh 从字符串中删除前导的空白字符和行终止符。
   * @en Removes the leading white space and line terminator characters from a string.
   */
  trimStart(): string;

  /**
   * @zh 从字符串中删除前导的空白字符和行终止符。
   * @en Removes the leading white space and line terminator characters from a string.
   */
  trimLeft(): string;

  /**
   * @zh 从字符串中删除尾随的空白字符和行终止符。
   * @en Removes the trailing white space and line terminator characters from a string.
   */
  trimRight(): string;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Symbol {
  /**
   * @zh 直接暴露符号的 [[Description]] 内部插槽。
   * @en Expose the [[Description]] internal slot of a symbol directly.
   */
  readonly description: string | undefined;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface BigInt {
  /**
   * @zh 返回一个对象的字符串表示。
   * @en Returns a string representation of an object.
   * @param radix @zh 指定用于将数值转换为字符串的基数。 @en Specifies a radix for converting numeric values to strings.
   */
  toString(radix?: number): string;

  /**
   * @zh 返回一个适合宿主环境当前区域设置的字符串表示。
   * @en Returns a string representation appropriate to the host environment's current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): bigint;

  readonly [Symbol.toStringTag]: "BigInt";
}

interface BigIntConstructor {
  (value?: any): bigint;
  readonly prototype: BigInt;

  /**
   * @zh 将 BigInt 的低位解释为二进制补码有符号整数。
   * 所有高位都被丢弃。
   * @en Interprets the low bits of a BigInt as a 2's-complement signed integer.
   * All higher bits are discarded.
   * @param bits @zh 要使用的低位数。 @en The number of low bits to use.
   * @param int @zh 要提取位的 BigInt。 @en The BigInt whose bits to extract.
   */
  asIntN(bits: number, int: bigint): bigint;
  /**
   * @zh 将 BigInt 的低位解释为无符号整数。
   * 所有高位都被丢弃。
   * @en Interprets the low bits of a BigInt as an unsigned integer.
   * All higher bits are discarded.
   * @param bits @zh 要使用的低位数。 @en The number of low bits to use.
   * @param int @zh 要提取位的 BigInt。 @en The BigInt whose bits to extract.
   */
  asUintN(bits: number, int: bigint): bigint;
}

declare var BigInt: BigIntConstructor;

/**
 * @zh 一个 64 位有符号整数值的类型化数组。内容初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 64-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigInt64Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 在数组内部，将一段序列（由 start 和 end 决定）复制到另一个位置（由 target 决定），并返回改变后的数组。
   * @en Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target @zh 目标位置。如果 target 是负数，则将其视为 length+target。 @en If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start @zh 开始位置。如果 start 是负数，则将其视为 length+start。 @en If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end @zh 结束位置。如果未指定，则默认为数组的长度。 @en If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 返回一个新的迭代器对象，该对象包含数组中每个索引的键/值对。
   * @en Yields index, value pairs for every entry in the array.
   */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * @zh 测试一个数组内的所有元素是否都能通过某个指定函数的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 用于测试每个元素的函数。 @en A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * @zh 使用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
   * @en Returns the this object after filling the section identified by start and end with value
   * @param value @zh 用于填充数组的值。 @en value to fill array section with
   * @param start @zh 起始索引，默认为 0。 @en index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end @zh 终止索引，默认为 a.length。 @en index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * @zh 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 为数组中的每个元素执行的函数。 @en A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any
  ): BigInt64Array;

  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate @zh 在数组中的每个元素上执行的函数。 @en find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 执行 predicate 时用作 this 的对象。 @en If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): bigint | undefined;

  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
   * @en Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate @zh 在数组中的每个元素上执行的函数。 @en find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 执行 predicate 时用作 this 的对象。 @en If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组的每个成员执行一次给定的函数。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 为数组中每个元素执行的函数。 @en A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement @zh 需要查找的元素。 @en The element to search for.
   * @param fromIndex @zh 从该索引处开始查找 searchElement。 @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * @zh 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要查找的元素。 @en The value to locate in the array.
   * @param fromIndex @zh 开始查找的索引。 @en The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * @zh 将一个数组的所有元素连接成一个字符串并返回这个字符串。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 指定一个字符串来分隔数组的每个元素。 @en A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个包含数组中每个索引键的迭代器。
   * @en Yields each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 需要查找的元素。 @en The value to locate in the array.
   * @param fromIndex @zh 从此位置开始逆向查找。 @en The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array. */
  readonly length: number;

  /**
   * @zh 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
   * @en Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn @zh 生成新数组元素的函数。 @en A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 `callbackfn` 时用作 `this` 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any
  ): BigInt64Array;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => bigint
  ): bigint;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数（降序执行），将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => bigint
  ): bigint;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数（降序执行），将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 颠倒数组中元素的位置。
   * @en Reverses the elements in the array.
   */
  reverse(): this;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 数组的指定部分的开头。 @en The beginning of the specified portion of the array.
   * @param end @zh 数组的指定部分的结尾。 @en The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;

  /**
   * @zh 测试是否至少有一个元素通过由提供的函数实现的测试。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 为数组中的每个元素执行的函数。 @en A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg @zh 执行 `callbackfn` 时用作 `this` 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组的元素进行排序。
   * @en Sorts the array.
   * @param compareFn @zh 指定排序顺序的函数。如果省略，元素将按照升序排序。 @en The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 BigInt64Array 视图，引用从 begin（包括）到 end（不包括）的元素。
   * @en Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组开头的索引。 @en The index of the beginning of the array.
   * @param end @zh 数组结尾的索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;

  /**
   * @zh 使用当前区域设置将数组转换为字符串。
   * @en Converts the array to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of the array.
   */
  toString(): string;

  /**
   * @zh 产生数组中的每个值。
   * @en Yields each value in the array.
   */
  values(): IterableIterator<bigint>;

  /**
   * @zh 迭代器协议。
   * @en The iterator protocol.
   */
  [Symbol.iterator](): IterableIterator<bigint>;

  /**
   * @zh 一个字符串，表示对象的类型。
   * @en A string value that represents the type of the object.
   */
  readonly [Symbol.toStringTag]: "BigInt64Array";

  /**
   * @zh 索引签名。
   * @en The index signature.
   */
  [index: number]: bigint;
}

interface BigInt64ArrayConstructor {
  /**
   * @zh BigInt64Array 的原型对象。
   * @en The prototype of BigInt64Array.
   */
  readonly prototype: BigInt64Array;
  /**
   * @zh 创建一个新的 BigInt64Array 对象。
   * @en Creates a new BigInt64Array object.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length?: number): BigInt64Array;
  /**
   * @zh 从一个可迭代对象创建一个新的 BigInt64Array 对象。
   * @en Creates a new BigInt64Array object from an iterable object.
   * @param array @zh 用于创建新数组的可迭代对象。 @en An iterable object to create the new array from.
   */
  new (array: Iterable<bigint>): BigInt64Array;
  /**
   * @zh 从一个 ArrayBuffer 创建一个新的 BigInt64Array 对象。
   * @en Creates a new BigInt64Array object from an ArrayBuffer.
   * @param buffer @zh 新数组将基于的 ArrayBuffer。 @en The ArrayBuffer that the new array will be based on.
   * @param byteOffset @zh `buffer` 中开始引用的字节偏移量。 @en The byte offset from the beginning of the `buffer`.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    length?: number
  ): BigInt64Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigInt64Array;

  /**
   * @zh 从一个类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 在数组的每个元素上调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigInt64Array;
  from<U>(
    arrayLike: ArrayLike<U>,
    mapfn: (v: U, k: number) => bigint,
    thisArg?: any
  ): BigInt64Array;
}

declare var BigInt64Array: BigInt64ArrayConstructor;

/**
 * @zh 一个 64 位无符号整数值的类型化数组。内容初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigUint64Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 在数组内部，将一段序列（由 start 和 end 决定）复制到另一个位置（由 target 决定），并返回改变后的数组。
   * @en Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target @zh 目标位置。如果 target 是负数，则将其视为 length+target。 @en If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start @zh 开始位置。如果 start 是负数，则将其视为 length+start。 @en If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end @zh 结束位置。如果未指定，则默认为数组的长度。 @en If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 返回一个新的迭代器对象，该对象包含数组中每个索引的键/值对。
   * @en Yields index, value pairs for every entry in the array.
   */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * @zh 测试一个数组内的所有元素是否都能通过某个指定函数的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 用于测试每个元素的函数。 @en A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (
      value: bigint,
      index: number,
      array: BigUint64Array
    ) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * @zh 使用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
   * @en Returns the this object after filling the section identified by start and end with value
   * @param value @zh 用于填充数组的值。 @en value to fill array section with
   * @param start @zh 起始索引，默认为 0。 @en index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end @zh 终止索引，默认为 a.length。 @en index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * @zh 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 为数组中的每个元素执行的函数。 @en A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any
  ): BigUint64Array;

  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate @zh 在数组中的每个元素上执行的函数。 @en find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 执行 predicate 时用作 this 的对象。 @en If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any
  ): bigint | undefined;

  /**
   * @zh 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
   * @en Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate @zh 在数组中的每个元素上执行的函数。 @en find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 执行 predicate 时用作 this 的对象。 @en If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组的每个成员执行一次给定的函数。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 为数组中每个元素执行的函数。 @en A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 callbackfn 时用作 this 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
   * @en Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement @zh 需要查找的元素。 @en The element to search for.
   * @param fromIndex @zh 从该索引处开始查找 searchElement。 @en The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * @zh 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要查找的元素。 @en The value to locate in the array.
   * @param fromIndex @zh 开始查找的索引。 @en The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * @zh 将一个数组的所有元素连接成一个字符串并返回这个字符串。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 指定一个字符串来分隔数组的每个元素。 @en A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个包含数组中每个索引键的迭代器。
   * @en Yields each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 需要查找的元素。 @en The value to locate in the array.
   * @param fromIndex @zh 从此位置开始逆向查找。 @en The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
   * @en Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn @zh 生成新数组元素的函数。 @en A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg @zh 执行 `callbackfn` 时用作 `this` 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any
  ): BigUint64Array;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => bigint
  ): bigint;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数（降序执行），将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => bigint
  ): bigint;

  /**
   * @zh 对数组中的每个元素执行一个由您提供的reducer函数（降序执行），将其结果汇总为单个返回值。
   * @en Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn @zh 在数组中每个元素上执行的函数。 @en A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue @zh 作为第一次调用 `callback` 的第一个参数的值。 @en If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 颠倒数组中元素的位置。
   * @en Reverses the elements in the array.
   */
  reverse(): this;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 数组的指定部分的开头。 @en The beginning of the specified portion of the array.
   * @param end @zh 数组的指定部分的结尾。 @en The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;

  /**
   * @zh 测试是否至少有一个元素通过由提供的函数实现的测试。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 为数组中的每个元素执行的函数。 @en A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg @zh 执行 `callbackfn` 时用作 `this` 的对象。 @en An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (
      value: bigint,
      index: number,
      array: BigUint64Array
    ) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组的元素进行排序。
   * @en Sorts the array.
   * @param compareFn @zh 指定排序顺序的函数。如果省略，元素将按照升序排序。 @en The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 BigUint64Array 视图，引用从 begin（包括）到 end（不包括）的元素。
   * @en Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组开头的索引。 @en The index of the beginning of the array.
   * @param end @zh 数组结尾的索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;

  /**
   * @zh 使用当前区域设置将数组转换为字符串。
   * @en Converts the array to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of the array.
   */
  toString(): string;

  /**
   * @zh 产生数组中的每个值。
   * @en Yields each value in the array.
   */
  values(): IterableIterator<bigint>;

  /**
   * @zh 迭代器协议。
   * @en The iterator protocol.
   */
  [Symbol.iterator](): IterableIterator<bigint>;

  /**
   * @zh 一个字符串，表示对象的类型。
   * @en A string value that represents the type of the object.
   */
  readonly [Symbol.toStringTag]: "BigUint64Array";

  /**
   * @zh 索引签名。
   * @en The index signature.
   */
  [index: number]: bigint;
}

interface BigUint64ArrayConstructor {
  /**
   * @zh BigUint64Array 的原型对象。
   * @en The prototype of BigUint64Array.
   */
  readonly prototype: BigUint64Array;
  /**
   * @zh 创建一个新的 BigUint64Array 对象。
   * @en Creates a new BigUint64Array object.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length?: number): BigUint64Array;
  /**
   * @zh 从一个可迭代对象创建一个新的 BigUint64Array 对象。
   * @en Creates a new BigUint64Array object from an iterable object.
   * @param array @zh 用于创建新数组的可迭代对象。 @en An iterable object to create the new array from.
   */
  new (array: Iterable<bigint>): BigUint64Array;
  /**
   * @zh 从一个 ArrayBuffer 创建一个新的 BigUint64Array 对象。
   * @en Creates a new BigUint64Array object from an ArrayBuffer.
   * @param buffer @zh 新数组将基于的 ArrayBuffer。 @en The ArrayBuffer that the new array will be based on.
   * @param byteOffset @zh `buffer` 中开始引用的字节偏移量。 @en The byte offset from the beginning of the `buffer`.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    length?: number
  ): BigUint64Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigUint64Array;

  /**
   * @zh 从一个类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 在数组的每个元素上调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigUint64Array;
  from<U>(
    arrayLike: ArrayLike<U>,
    mapfn: (v: U, k: number) => bigint,
    thisArg?: any
  ): BigUint64Array;
}

declare var BigUint64Array: BigUint64ArrayConstructor;

interface DataView {
  /**
   * @zh 从视图的指定字节偏移量处获取一个 BigInt64 值。没有对齐约束；多字节值可以从任何偏移量获取。
   * @en Gets the BigInt64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应从中检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 指示64位整数是小端还是大端格式。如果为false或未定义，则应写入一个大端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * @zh 从视图的指定字节偏移量处获取一个 BigUint64 值。没有对齐约束；多字节值可以从任何偏移量获取。
   * @en Gets the BigUint64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应从中检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 指示64位无符号整数是小端还是大端格式。如果为false或未定义，则应写入一个大端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * @zh 在视图的指定字节偏移量处存储一个 BigInt64 值。
   * @en Stores a BigInt64 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 指示64位整数是小端还是大端格式。如果为false或未定义，则应写入一个大端值。 @en If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;

  /**
   * @zh 在视图的指定字节偏移量处存储一个 BigUint64 值。
   * @en Stores a BigUint64 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 指示64位无符号整数是小端还是大端格式。如果为false或未定义，则应写入一个大端值。 @en If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface PromiseFulfilledResult<T> {
  /**
   * @zh Promise 履行的状态。
   * @en The status of the fulfilled promise.
   */
  status: "fulfilled";
  /**
   * @zh Promise 履行的值。
   * @en The fulfilled value of the promise.
   */
  value: T;
}

interface PromiseRejectedResult {
  /**
   * @zh Promise 拒绝的状态。
   * @en The status of the rejected promise.
   */
  status: "rejected";
  /**
   * @zh Promise 拒绝的原因。
   * @en The reason for the promise's rejection.
   */
  reason: any;
}

/**
 * @zh 表示 Promise 结算的结果，可以是履行或拒绝。
 * @en Represents the result of a settled promise, which can be either fulfilled or rejected.
 */
type PromiseSettledResult<T> =
  | PromiseFulfilledResult<T>
  | PromiseRejectedResult;

interface PromiseConstructor {
  /**
   * @zh 创建一个 Promise，当所有提供的 Promise 都被履行或拒绝后，它将以一个结果数组来解决。
   * @en Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values @zh Promise 数组。 @en An array of Promises.
   * @returns @zh 一个新的 Promise。 @en A new Promise.
   */
  allSettled<T extends readonly unknown[] | readonly [unknown]>(
    values: T
  ): Promise<{
    -readonly [P in keyof T]: PromiseSettledResult<
      T[P] extends PromiseLike<infer U> ? U : T[P]
    >;
  }>;

  /**
   * @zh 创建一个 Promise，当所有提供的 Promise 都被履行或拒绝后，它将以一个结果数组来解决。
   * @en Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values @zh Promise 的可迭代对象。 @en An iterable of Promises.
   * @returns @zh 一个新的 Promise。 @en A new Promise.
   */
  allSettled<T>(
    values: Iterable<T>
  ): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * @zh 使用正则表达式匹配字符串，并返回一个包含该搜索结果的匹配项的可迭代对象。
   * @en Matches a string with a regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param regexp @zh 包含正则表达式模式和标志的变量名或字符串字面量。 @en A variable name or string literal containing the regular expression pattern and flags.
   */
  matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * @zh 一个正则表达式方法，用于根据字符串匹配正则表达式。由 String.prototype.matchAll 方法调用。
   * @en A regular expression method that matches the regular expression against a string. Called
   * by the String.prototype.matchAll method.
   */
  readonly matchAll: symbol;
}

interface RegExp {
  /**
   * @zh 使用此正则表达式匹配字符串，并返回一个包含该搜索结果的匹配项的可迭代对象。
   * @en Matches a string with this regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param str @zh 要在其中搜索的字符串。 @en A string to search within.
   */
  [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/////////////////////////////
/// ECMAScript APIs
/////////////////////////////
/**
 * @zh 表示“非数字”值的数值。
 * @en A value that is not a number.
 */
declare var NaN: number;
/**
 * @zh 一个表示正无穷大的数值。
 * @en A numeric value representing infinity.
 */
declare var Infinity: number;

/**
 * @zh 评估 JavaScript 代码并执行它。
 * @en Evaluates JavaScript code and executes it.
 * @param x @zh 包含有效 JavaScript 代码的字符串值。 @en A String value that contains valid JavaScript code.
 */
declare function eval(x: string): any;

/**
 * @zh 将字符串转换为整数。
 * @en Converts a string to an integer.
 * @param s @zh 要转换为数字的字符串。 @en A string to convert into a number.
 * @param radix @zh 一个介于 2 和 36 之间的值，指定 `s` 中数字的基数。如果未提供此参数，则前缀为“0x”的字符串被视为十六进制。所有其他字符串都被视为十进制。 @en A value between 2 and 36 that specifies the base of the number in `s`. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 */
declare function parseInt(s: string, radix?: number): number;

/**
 * @zh 将字符串转换为浮点数。
 * @en Converts a string to a floating-point number.
 * @param string @zh 包含浮点数的字符串。 @en A string that contains a floating-point number.
 */
declare function parseFloat(string: string): number;

/**
 * @zh 返回一个布尔值，表示一个值是否是保留值 NaN（非数字）。
 * @en Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
 * @param number @zh 一个数值。 @en A numeric value.
 */
declare function isNaN(number: number): boolean;

/**
 * @zh 确定提供的数字是否是有限的。
 * @en Determines whether a supplied number is finite.
 * @param number @zh 任何数值。 @en Any numeric value.
 */
declare function isFinite(number: number): boolean;

/**
 * @zh 获取编码后的统一资源标识符（URI）的未编码版本。
 * @en Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
 * @param encodedURI @zh 表示编码后的 URI 的值。 @en A value representing an encoded URI.
 */
declare function decodeURI(encodedURI: string): string;

/**
 * @zh 获取编码后的统一资源标识符（URI）组件的未编码版本。
 * @en Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
 * @param encodedURIComponent @zh 表示编码后的 URI 组件的值。 @en A value representing an encoded URI component.
 */
declare function decodeURIComponent(encodedURIComponent: string): string;

/**
 * @zh 将文本字符串编码为有效的统一资源标识符 (URI)
 * @en Encodes a text string as a valid Uniform Resource Identifier (URI)
 * @param uri @zh 表示编码 URI 的值。 @en A value representing an encoded URI.
 */
declare function encodeURI(uri: string): string;

/**
 * @zh 将文本字符串编码为有效的统一资源标识符 (URI) 组件。
 * @en Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
 * @param uriComponent @zh 表示编码 URI 组件的值。 @en A value representing an encoded URI component.
 */
declare function encodeURIComponent(
  uriComponent: string | number | boolean
): string;

/**
 * @zh 计算一个新字符串，其中某些字符已被十六进制转义序列替换。
 * @en Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
 * @param string @zh 字符串值。 @en A string value
 */
declare function escape(string: string): string;

/**
 * @zh 计算一个新字符串，其中十六进制转义序列被替换为它所代表的字符。
 * @en Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.
 * @param string @zh 字符串值。 @en A string value
 */
declare function unescape(string: string): string;

interface Symbol {
  /**
   * @zh 返回对象的字符串表示形式。
   * @en Returns a string representation of an object.
   */
  toString(): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): symbol;
}

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
  /**
   * @zh 如果为 true，则此属性描述符的类型可以更改，并且该属性可以从相应的对象中删除。
   * @en If true, the type of this property descriptor may be changed and the property may be deleted from the corresponding object.
   */
  configurable?: boolean;
  /**
   * @zh 如果为 true，则该属性在相应对象的属性枚举期间显示。
   * @en If true, the property shows up during enumeration of the properties on the corresponding object.
   */
  enumerable?: boolean;
  /**
   * @zh 与属性关联的值。
   * @en The value associated with the property.
   */
  value?: any;
  /**
   * @zh 如果为 true，则与属性关联的值可以通过赋值运算符更改。
   * @en If true, the value associated with the property may be changed with an assignment operator.
   */
  writable?: boolean;
  /**
   * @zh 作为属性的 getter 的函数，如果没有 getter，则为 `undefined`。
   * @en A function which serves as a getter for the property, or `undefined` if there is no getter.
   */
  get?(): any;
  /**
   * @zh 作为属性的 setter 的函数，如果没有 setter，则为 `undefined`。
   * @en A function which serves as a setter for the property, or `undefined` if there is no setter.
   */
  set?(v: any): void;
}

/**
 * @zh 从属性键到其描述符的映射。
 * @en A map from property keys to their descriptors.
 */
interface PropertyDescriptorMap {
  [s: string]: PropertyDescriptor;
}

interface Object {
  /**
   * @zh Object.prototype.constructor 的初始值是标准的内置 Object 构造函数。
   * @en The initial value of Object.prototype.constructor is the standard built-in Object constructor.
   */
  constructor: Function;

  /**
   * @zh 返回对象的字符串表示形式。
   * @en Returns a string representation of an object.
   */
  toString(): string;

  /**
   * @zh 使用当前区域设置将日期转换为字符串。
   * @en Returns a date converted to a string using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): Object;

  /**
   * @zh 确定对象是否具有指定名称的属性。
   * @en Determines whether an object has a property with the specified name.
   * @param v @zh 属性名称。 @en A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * @zh 确定一个对象是否存在于另一个对象的原型链中。
   * @en Determines whether an object exists in another object's prototype chain.
   * @param v @zh 另一个要检查其原型链的对象。 @en Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * @zh 确定指定的属性是否可枚举。
   * @en Determines whether a specified property is enumerable.
   * @param v @zh 属性名称。 @en A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
  new (value?: any): Object;
  (): any;
  (value: any): any;

  /**
   * @zh 对一类对象的原型的引用。
   * @en A reference to the prototype for a class of objects.
   */
  readonly prototype: Object;

  /**
   * @zh 返回一个对象的原型。
   * @en Returns the prototype of an object.
   * @param o @zh 引用原型的对象。 @en The object that references the prototype.
   */
  getPrototypeOf(o: any): any;

  /**
   * @zh 获取指定对象的自有属性描述符。
   * @en Gets the own property descriptor of the specified object.
   * @zh 自有属性描述符是直接在对象上定义的，而不是从对象的原型继承的。
   * @en An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
   * @param o @zh 包含该属性的对象。 @en Object that contains the property.
   * @param p @zh 属性的名称。 @en Name of the property.
   */
  getOwnPropertyDescriptor(
    o: any,
    p: PropertyKey
  ): PropertyDescriptor | undefined;

  /**
   * @zh 返回一个对象的自有属性的名称。
   * @en Returns the names of the own properties of an object.
   * @zh 对象的自有属性是直接在该对象上定义的，而不是从对象的原型继承的。对象的属性包括字段（对象）和函数。
   * @en The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
   * @param o @zh 包含自有属性的对象。 @en Object that contains the own properties.
   */
  getOwnPropertyNames(o: any): string[];

  /**
   * @zh 创建一个具有指定原型或具有 null 原型的对象。
   * @en Creates an object that has the specified prototype or that has null prototype.
   * @param o @zh 用作原型的对象。可以为 null。 @en Object to use as a prototype. May be null.
   */
  create(o: object | null): any;

  /**
   * @zh 创建一个具有指定原型的对象，并可以选择性地包含指定的属性。
   * @en Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o @zh 用作原型的对象。可以为 null。 @en Object to use as a prototype. May be null
   * @param properties @zh 包含一个或多个属性描述符的 JavaScript 对象。 @en JavaScript object that contains one or more property descriptors.
   */
  create(
    o: object | null,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * @zh 向对象添加属性，或修改现有属性的特性。
   * @en Adds a property to an object, or modifies attributes of an existing property.
   * @param o @zh 要添加或修改属性的对象。这可以是本机 JavaScript 对象（即用户定义的对象或内置对象）或 DOM 对象。 @en Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
   * @param p @zh 属性名称。 @en The property name.
   * @param attributes @zh 属性的描述符。它可以是数据属性或访问器属性。 @en Descriptor for the property. It can be for a data property or an accessor property.
   */
  defineProperty(
    o: any,
    p: PropertyKey,
    attributes: PropertyDescriptor & ThisType<any>
  ): any;

  /**
   * @zh 向对象添加一个或多个属性，和/或修改现有属性的特性。
   * @en Adds one or more properties to an object, and/or modifies attributes of existing properties.
   * @param o @zh 要添加或修改属性的对象。这可以是本机 JavaScript 对象或 DOM 对象。 @en Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
   * @param properties @zh 包含一个或多个描述符对象的 JavaScript 对象。每个描述符对象描述一个数据属性或一个访问器属性。 @en JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
   */
  defineProperties(
    o: any,
    properties: PropertyDescriptorMap & ThisType<any>
  ): any;

  /**
   * @zh 防止修改现有属性的特性，并防止添加新属性。
   * @en Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
   * @param o @zh 要锁定特性的对象。 @en Object on which to lock the attributes.
   */
  seal<T>(o: T): T;

  /**
   * @zh 防止修改现有属性的特性和值，并防止添加新属性。
   * @en Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param a @zh 要锁定特性的对象。 @en Object on which to lock the attributes.
   */
  freeze<T>(a: T[]): readonly T[];

  /**
   * @zh 防止修改现有属性的特性和值，并防止添加新属性。
   * @en Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param f @zh 要锁定特性的对象。 @en Object on which to lock the attributes.
   */
  freeze<T extends Function>(f: T): T;

  /**
   * @zh 防止修改现有属性的特性和值，并防止添加新属性。
   * @en Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o @zh 要锁定特性的对象。 @en Object on which to lock the attributes.
   */
  freeze<T>(o: T): Readonly<T>;

  /**
   * @zh 防止向对象添加新属性。
   * @en Prevents the addition of new properties to an object.
   * @param o @zh 要使其不可扩展的对象。 @en Object to make non-extensible.
   */
  preventExtensions<T>(o: T): T;

  /**
   * @zh 如果现有属性的特性无法在对象中修改，并且新属性无法添加到对象中，则返回 true。
   * @en Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
   * @param o @zh 要测试的对象。 @en Object to test.
   */
  isSealed(o: any): boolean;

  /**
   * @zh 如果现有属性的特性和值无法在对象中修改，并且新属性无法添加到对象中，则返回 true。
   * @en Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
   * @param o @zh 要测试的对象。 @en Object to test.
   */
  isFrozen(o: any): boolean;

  /**
   * @zh 返回一个值，该值指示是否可以向对象添加新属性。
   * @en Returns a value that indicates whether new properties can be added to an object.
   * @param o @zh 要测试的对象。 @en Object to test.
   */
  isExtensible(o: any): boolean;

  /**
   * @zh 返回一个对象的可枚举字符串属性和方法的名称。
   * @en Returns the names of the enumerable string properties and methods of an object.
   * @param o @zh 包含属性和方法的对象。这可以是您创建的对象或现有的文档对象模型 (DOM) 对象。 @en Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: object): string[];
}

/**
 * @zh 为所有 JavaScript 对象提供通用功能。
 * @en Provides functionality common to all JavaScript objects.
 */
declare var Object: ObjectConstructor;

/**
 * Creates a new function.
 */
interface Function {
  /**
   * @zh 调用函数，用指定的对象替换函数的 this 值，用指定的数组替换函数的参数。
   * @en Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param argArray @zh 要传递给函数的一组参数。 @en A set of arguments to be passed to the function.
   */
  apply(this: Function, thisArg: any, argArray?: any): any;

  /**
   * @zh 调用对象的方法，用另一个对象替换当前对象。
   * @en Calls a method of an object, substituting another object for the current object.
   * @param thisArg @zh 将用作当前对象的对象。 @en The object to be used as the current object.
   * @param argArray @zh 要传递给方法的参数列表。 @en A list of arguments to be passed to the method.
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any;

  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh this 关键字在新函数内部可以引用的对象。 @en An object to which the this keyword can refer inside the new function.
   * @param argArray @zh 要传递给新函数的参数列表。 @en A list of arguments to be passed to the new function.
   */
  bind(this: Function, thisArg: any, ...argArray: any[]): any;

  /**
   * @zh 返回函数的字符串表示形式。
   * @en Returns a string representation of a function.
   */
  toString(): string;

  /**
   * @zh 函数的原型。
   * @en The prototype of a function.
   */
  prototype: any;

  /**
   * @zh 函数期望的参数个数。
   * @en The number of arguments expected by the function.
   */
  readonly length: number;

  // Non-standard extensions
  /**
   * @zh 传递给函数的参数。
   * @en The arguments passed to a function.
   * @non-standard
   */
  arguments: any;
  /**
   * @zh 调用当前函数的函数。
   * @en The function that invoked the current function.
   * @non-standard
   */
  caller: Function;
}

interface FunctionConstructor {
  /**
   * @zh 创建一个新函数。
   * @en Creates a new function.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  new (...args: string[]): Function;
  /**
   * @zh 创建一个新函数。
   * @en Creates a new function.
   * @param args @zh 函数接受的参数列表。 @en A list of arguments the function accepts.
   */
  (...args: string[]): Function;

  /**
   * @zh Function 构造函数的原型对象。
   * @en The prototype object for the Function constructor.
   */
  readonly prototype: Function;
}

/**
 * @zh Function 构造函数。
 * @en The Function constructor.
 */
declare var Function: FunctionConstructor;

/**
 * @zh 提取函数类型的 'this' 参数的类型，如果函数类型没有 'this' 参数，则为 'unknown'。
 * @en Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

/**
 * @zh 从函数类型中移除 'this' 参数。
 * @en Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

/**
 * @zh 表示可调用的函数。
 * @en Represents a callable function.
 */
interface CallableFunction extends Function {
  /**
   * @zh 使用指定的对象作为 this 值，并将指定数组的元素作为参数来调用函数。
   * @en Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要传递给函数的参数值数组。 @en An array of argument values to be passed to the function.
   */
  apply<T, R>(this: (this: T) => R, thisArg: T, args?: undefined): R;
  apply<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    args: A
  ): R;

  /**
   * @zh 使用指定的对象作为 this 值，并使用指定的 rest 参数作为参数来调用函数。
   * @en Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要传递给函数的参数值。 @en Argument values to be passed to the function.
   */
  call<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R;

  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T, A0, A extends any[], R>(
    this: (this: T, arg0: A0, ...args: A) => R,
    thisArg: T,
    arg0: A0
  ): (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T, A0, A1, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1
  ): (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T, A0, A1, A2, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T, A0, A1, A2, A3, A extends any[], R>(
    this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: T,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T, AX, R>(
    this: (this: T, ...args: AX[]) => R,
    thisArg: T,
    ...args: AX[]
  ): (...args: AX[]) => R;
}

/**
 * @zh 表示可使用 new 运算符调用的函数。
 * @en Represents a function that can be called with the new operator.
 */
interface NewableFunction extends Function {
  /**
   * @zh 使用指定的对象作为 this 值，并将指定数组的元素作为参数来调用函数。
   * @en Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要传递给函数的参数值数组。 @en An array of argument values to be passed to the function.
   */
  apply<T>(this: new () => T, thisArg: T): void;
  /**
   * @zh 使用指定的对象作为 this 值，并将指定数组的元素作为参数来调用函数。
   * @en Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要传递给函数的参数值数组。 @en An array of argument values to be passed to the function.
   */
  apply<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    args: A
  ): void;

  /**
   * @zh 使用指定的对象作为 this 值，并使用指定的 rest 参数作为参数来调用函数。
   * @en Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要传递给函数的参数值。 @en Argument values to be passed to the function.
   */
  call<T, A extends any[]>(
    this: new (...args: A) => T,
    thisArg: T,
    ...args: A
  ): void;

  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: any): T;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<A0, A extends any[], R>(
    this: new (arg0: A0, ...args: A) => R,
    thisArg: any,
    arg0: A0
  ): new (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<A0, A1, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1
  ): new (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<A0, A1, A2, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2
  ): new (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<A0, A1, A2, A3, A extends any[], R>(
    this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
    thisArg: any,
    arg0: A0,
    arg1: A1,
    arg2: A2,
    arg3: A3
  ): new (...args: A) => R;
  /**
   * @zh 对于给定的函数，创建一个绑定函数，其主体与原始函数相同。
   * @en For a given function, creates a bound function that has the same body as the original function.
   * @zh 绑定函数的 this 对象与指定的对象相关联，并具有指定的初始参数。
   * @en The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg @zh 将用作 this 对象的对象。 @en The object to be used as the this object.
   * @param args @zh 要绑定到函数参数的参数。 @en Arguments to bind to the parameters of the function.
   */
  bind<AX, R>(
    this: new (...args: AX[]) => R,
    thisArg: any,
    ...args: AX[]
  ): new (...args: AX[]) => R;
}

/**
 * @zh 表示函数参数的对象。
 * @en Represents the arguments object of a function.
 */
interface IArguments {
  /**
   * @zh 参数的索引。
   * @en The index of the argument.
   */
  [index: number]: any;
  /**
   * @zh 参数的长度。
   * @en The length of the arguments.
   */
  length: number;
  /**
   * @zh 当前执行的函数。
   * @en The currently executing function.
   */
  callee: Function;
}

interface String {
  /**
   * @zh 返回字符串的字符串表示形式。
   * @en Returns a string representation of a string.
   */
  toString(): string;

  /**
   * @zh 返回指定索引处的字符。
   * @en Returns the character at the specified index.
   * @param pos @zh 所需字符的从零开始的索引。 @en The zero-based index of the desired character.
   */
  charAt(pos: number): string;

  /**
   * @zh 返回指定位置字符的 Unicode 值。
   * @en Returns the Unicode value of the character at the specified location.
   * @param index @zh 所需字符的从零开始的索引。如果指定索引处没有字符，则返回 NaN。 @en The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
   */
  charCodeAt(index: number): number;

  /**
   * @zh 返回一个包含两个或多个字符串连接的字符串。
   * @en Returns a string that contains the concatenation of two or more strings.
   * @param strings @zh 要附加到字符串末尾的字符串。 @en The strings to append to the end of the string.
   */
  concat(...strings: string[]): string;

  /**
   * @zh 返回子字符串第一次出现的位置。
   * @en Returns the position of the first occurrence of a substring.
   * @param searchString @zh 要在字符串中搜索的子字符串。 @en The substring to search for in the string.
   * @param position @zh 开始搜索 String 对象的索引。如果省略，则从字符串的开头开始搜索。 @en The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
   */
  indexOf(searchString: string, position?: number): number;

  /**
   * @zh 返回字符串中子字符串的最后一次出现。
   * @en Returns the last occurrence of a substring in the string.
   * @param searchString @zh 要搜索的子字符串。 @en The substring to search for.
   * @param position @zh 开始搜索的索引。如果省略，则从字符串的末尾开始搜索。 @en The index at which to begin searching. If omitted, the search begins at the end of the string.
   */
  lastIndexOf(searchString: string, position?: number): number;

  /**
   * @zh 确定两个字符串在当前区域设置中是否相等。
   * @en Determines whether two strings are equivalent in the current locale.
   * @param that @zh 要与目标字符串进行比较的字符串。 @en String to compare to target string.
   */
  localeCompare(that: string): number;

  /**
   * @zh 将字符串与正则表达式匹配，并返回包含该搜索结果的数组。
   * @en Matches a string with a regular expression, and returns an array containing the results of that search.
   * @param regexp @zh 包含正则表达式模式和标志的变量名或字符串字面量。 @en A variable name or string literal containing the regular expression pattern and flags.
   */
  match(regexp: string | RegExp): RegExpMatchArray | null;

  /**
   * @zh 使用正则表达式或搜索字符串替换字符串中的文本。
   * @en Replaces text in a string, using a regular expression or search string.
   * @param searchValue @zh 要搜索的字符串。 @en A string to search for.
   * @param replaceValue @zh 一个字符串，包含替换此字符串中每个成功匹配的 searchValue 的文本。 @en A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(searchValue: string | RegExp, replaceValue: string): string;

  /**
   * @zh 使用正则表达式或搜索字符串替换字符串中的文本。
   * @en Replaces text in a string, using a regular expression or search string.
   * @param searchValue @zh 要搜索的字符串。 @en A string to search for.
   * @param replacer @zh 一个返回替换文本的函数。 @en A function that returns the replacement text.
   */
  replace(
    searchValue: string | RegExp,
    replacer: (substring: string, ...args: any[]) => string
  ): string;

  /**
   * @zh 在正则表达式搜索中查找第一个子字符串匹配项。
   * @en Finds the first substring match in a regular expression search.
   * @param regexp @zh 正则表达式模式和适用的标志。 @en The regular expression pattern and applicable flags.
   */
  search(regexp: string | RegExp): number;

  /**
   * @zh 返回字符串的一部分。
   * @en Returns a section of a string.
   * @param start @zh stringObj 指定部分的起始索引。 @en The index to the beginning of the specified portion of stringObj.
   * @param end @zh stringObj 指定部分的结束索引。子字符串包括直到但不包括由 end 指示的字符的字符。如果未指定此值，则子字符串将继续到 stringObj 的末尾。 @en The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
   */
  slice(start?: number, end?: number): string;

  /**
   * @zh 使用指定的分隔符将字符串拆分为子字符串，并以数组形式返回它们。
   * @en Split a string into substrings using the specified separator and return them as an array.
   * @param separator @zh 标识用于分隔字符串的一个或多个字符的字符串。如果省略，则返回包含整个字符串的单元素数组。 @en A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param limit @zh 用于限制数组中返回的元素数量的值。 @en A value used to limit the number of elements returned in the array.
   */
  split(separator: string | RegExp, limit?: number): string[];

  /**
   * @zh 返回 String 对象中指定位置的子字符串。
   * @en Returns the substring at the specified location within a String object.
   * @param start @zh 指示子字符串开头的从零开始的索引号。 @en The zero-based index number indicating the beginning of the substring.
   * @param end @zh 指示子字符串结尾的从零开始的索引号。子字符串包括直到但不包括由 end 指示的字符的字符。如果省略 end，则返回从 start 到原始字符串末尾的字符。 @en Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.
   */
  substring(start: number, end?: number): string;

  /**
   * @zh 将字符串中的所有字母字符转换为小写。
   * @en Converts all the alphabetic characters in a string to lowercase.
   */
  toLowerCase(): string;

  /**
   * @zh 将所有字母字符转换为小写，同时考虑宿主环境的当前区域设置。
   * @en Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
   */
  toLocaleLowerCase(locales?: string | string[]): string;

  /**
   * @zh 将字符串中的所有字母字符转换为大写。
   * @en Converts all the alphabetic characters in a string to uppercase.
   */
  toUpperCase(): string;

  /**
   * @zh 返回一个字符串，其中所有字母字符都已转换为大写，同时考虑宿主环境的当前区域设置。
   * @en Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
   */
  toLocaleUpperCase(locales?: string | string[]): string;

  /**
   * @zh 从字符串中删除前导和尾随的空白和行终止符字符。
   * @en Removes the leading and trailing white space and line terminator characters from a string.
   */
  trim(): string;

  /**
   * @zh 返回 String 对象的长度。
   * @en Returns the length of a String object.
   */
  readonly length: number;

  // IE extensions
  /**
   * @zh 获取从指定位置开始并具有指定长度的子字符串。
   * @en Gets a substring beginning at the specified location and having the specified length.
   * @param from @zh 所需子字符串的起始位置。字符串中第一个字符的索引为零。 @en The starting position of the desired substring. The index of the first character in the string is zero.
   * @param length @zh 要包含在返回的子字符串中的字符数。 @en The number of characters to include in the returned substring.
   */
  substr(from: number, length?: number): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): string;

  /**
   * @zh 允许通过数字索引访问字符串中的单个字符。
   * @en Allows accessing individual characters in the string by a numeric index.
   */
  readonly [index: number]: string;
}

interface StringConstructor {
  /**
   * @zh 创建一个新的 String 对象。
   * @en Creates a new String object.
   * @param value @zh 要存储在 String 对象中或转换为原始字符串的值。 @en The value to be stored in the String object or converted to a primitive string.
   */
  new (value?: any): String;
  /**
   * @zh 将值转换为原始字符串。
   * @en Converts a value to a primitive string.
   * @param value @zh 要转换为原始字符串的值。 @en The value to be converted to a primitive string.
   */
  (value?: any): string;
  /**
   * @zh 允许向 String 对象添加属性。
   * @en Allows the addition of properties to a String object.
   */
  readonly prototype: String;
  /**
   * @zh 从一系列 Unicode 值返回一个字符串。
   * @en Returns a string created from the specified sequence of Unicode values.
   * @param codes @zh 一系列数字，它们是 16 位 Unicode 代码单元值。 @en A sequence of numbers that are Unicode character codes.
   */
  fromCharCode(...codes: number[]): string;
}

/**
 * @zh 允许操作和格式化文本字符串，以及确定和定位字符串中的子字符串。
 * @en Allows manipulation and formatting of text strings and determination and location of substrings within strings.
 */
declare var String: StringConstructor;

interface Boolean {
  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): boolean;
}

interface BooleanConstructor {
  /**
   * @zh 创建一个新的 Boolean 对象。
   * @en Creates a new Boolean object.
   * @param value @zh 要存储在 Boolean 对象中的值。 @en The value to be stored in the Boolean object.
   */
  new (value?: any): Boolean;
  /**
   * @zh 将值转换为原始布尔值。
   * @en Converts a value to a primitive boolean.
   * @param value @zh 要转换为原始布尔值的值。 @en The value to be converted to a primitive boolean.
   */
  <T>(value?: T): boolean;
  /**
   * @zh 允许向 Boolean 对象添加属性。
   * @en Allows the addition of properties to a Boolean object.
   */
  readonly prototype: Boolean;
}

/**
 * @zh 表示布尔值的对象。
 * @en An object that represents a Boolean value.
 */
declare var Boolean: BooleanConstructor;

interface Number {
  /**
   * @zh 返回对象的字符串表示形式。
   * @en Returns a string representation of an object.
   * @param radix @zh 指定用于将数值转换为字符串的基数。此值仅用于数字。 @en Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(radix?: number): string;

  /**
   * @zh 返回一个以定点表示法表示数字的字符串。
   * @en Returns a string representing a number in fixed-point notation.
   * @param fractionDigits @zh 小数点后的位数。必须在 0 - 20 的范围内（含）。 @en Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number): string;

  /**
   * @zh 返回一个包含用指数表示法表示的数字的字符串。
   * @en Returns a string containing a number represented in exponential notation.
   * @param fractionDigits @zh 小数点后的位数。必须在 0 - 20 的范围内（含）。 @en Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toExponential(fractionDigits?: number): string;

  /**
   * @zh 返回一个包含以指数或定点表示法表示的、具有指定位数精度的数字的字符串。
   * @en Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision @zh 有效数字的位数。必须在 1 - 21 的范围内（含）。 @en Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  toPrecision(precision?: number): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): number;
}

interface NumberConstructor {
  /**
   * @zh 创建一个新的 Number 对象。
   * @en Creates a new Number object.
   * @param value @zh 要存储在 Number 对象中的值或要转换为原始数字的值。 @en The value to be stored in the Number object or converted to a primitive number.
   */
  new (value?: any): Number;
  /**
   * @zh 将值转换为原始数字。
   * @en Converts a value to a primitive number.
   * @param value @zh 要转换为原始数字的值。 @en The value to be converted to a primitive number.
   */
  (value?: any): number;
  /**
   * @zh 允许向 Number 对象添加属性。
   * @en Allows the addition of properties to a Number object.
   */
  readonly prototype: Number;

  /**
   * @zh JavaScript 中可表示的最大数值。约等于 1.79E+308。
   * @en The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308.
   */
  readonly MAX_VALUE: number;

  /**
   * @zh JavaScript 中可表示的最小正数（最接近零）。约等于 5.00E-324。
   * @en The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324.
   */
  readonly MIN_VALUE: number;

  /**
   * @zh 一个表示“非数字”的值。
   * @en A value that is not a number.
   * @zh 在相等比较中，NaN 不等于任何值，包括其自身。要测试一个值是否等效于 NaN，请使用 isNaN 函数。
   * @en In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
   */
  readonly NaN: number;

  /**
   * @zh 一个小于 JavaScript 中可表示的最大负数的值。
   * @en A value that is less than the largest negative number that can be represented in JavaScript.
   * @zh JavaScript 将 NEGATIVE_INFINITY 值显示为 -infinity。
   * @en JavaScript displays NEGATIVE_INFINITY values as -infinity.
   */
  readonly NEGATIVE_INFINITY: number;

  /**
   * @zh 一个大于 JavaScript 中可表示的最大数值的值。
   * @en A value greater than the largest number that can be represented in JavaScript.
   * @zh JavaScript 将 POSITIVE_INFINITY 值显示为 infinity。
   * @en JavaScript displays POSITIVE_INFINITY values as infinity.
   */
  readonly POSITIVE_INFINITY: number;
}

/**
 * @zh 表示任何类型数字的对象。所有 JavaScript 数字都是 64 位浮点数。
 * @en An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
 */
declare var Number: NumberConstructor;

/**
 * @zh 允许访问模板字面量的原始字符串形式。
 * @en Allows access to the raw string form of template literals.
 */
interface TemplateStringsArray extends ReadonlyArray<string> {
  /**
   * @zh 包含模板字符串中所有原始（即未处理）字符串的只读数组。
   * @en A read-only array of raw strings that are interpolated with the expression values.
   */
  readonly raw: readonly string[];
}

/**
 * @zh `import.meta` 的类型。
 * @en The type of `import.meta`.
 *
 * @zh 如果您需要声明 `import.meta` 上存在给定属性，可以通过接口合并来增强此类型。
 * @en If you need to declare that a given property exists on `import.meta`, this type may be augmented via interface merging.
 */
interface ImportMeta {}

interface Math {
  /**
   * @zh 数学常数 e。这是欧拉数，自然对数的底数。
   * @en The mathematical constant e. This is Euler's number, the base of natural logarithms.
   */
  readonly E: number;
  /**
   * @zh 10 的自然对数。
   * @en The natural logarithm of 10.
   */
  readonly LN10: number;
  /**
   * @zh 2 的自然对数。
   * @en The natural logarithm of 2.
   */
  readonly LN2: number;
  /**
   * @zh e 的以 2 为底的对数。
   * @en The base-2 logarithm of e.
   */
  readonly LOG2E: number;
  /**
   * @zh e 的以 10 为底的对数。
   * @en The base-10 logarithm of e.
   */
  readonly LOG10E: number;
  /**
   * @zh 圆周率。这是一个圆的周长与其直径的比值。
   * @en Pi. This is the ratio of the circumference of a circle to its diameter.
   */
  readonly PI: number;
  /**
   * @zh 0.5 的平方根，或者等价地，1 除以 2 的平方根。
   * @en The square root of 0.5, or, equivalently, one divided by the square root of 2.
   */
  readonly SQRT1_2: number;
  /**
   * @zh 2 的平方根。
   * @en The square root of 2.
   */
  readonly SQRT2: number;
  /**
   * @zh 返回一个数的绝对值（该值不考虑其是正数还是负数）。
   * @en Returns the absolute value of a number (the value without regard to whether it is positive or negative).
   * @zh 例如，-5 的绝对值与 5 的绝对值相同。
   * @en For example, the absolute value of -5 is the same as the absolute value of 5.
   * @param x @zh 需要计算绝对值的数值表达式。 @en A numeric expression for which the absolute value is needed.
   */
  abs(x: number): number;
  /**
   * @zh 返回一个数的反余弦（或逆余弦）。
   * @en Returns the arc cosine (or inverse cosine) of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  acos(x: number): number;
  /**
   * @zh 返回一个数的反正弦。
   * @en Returns the arcsine of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  asin(x: number): number;
  /**
   * @zh 返回一个数的反正切。
   * @en Returns the arctangent of a number.
   * @param x @zh 需要计算反正切的数值表达式。 @en A numeric expression for which the arctangent is needed.
   */
  atan(x: number): number;
  /**
   * @zh 返回从 X 轴到一个点的角度（以弧度为单位）。
   * @en Returns the angle (in radians) from the X axis to a point.
   * @param y @zh 表示笛卡尔 y 坐标的数值表达式。 @en A numeric expression representing the cartesian y-coordinate.
   * @param x @zh 表示笛卡尔 x 坐标的数值表达式。 @en A numeric expression representing the cartesian x-coordinate.
   */
  atan2(y: number, x: number): number;
  /**
   * @zh 返回大于或等于其数值参数的最小整数。
   * @en Returns the smallest integer greater than or equal to its numeric argument.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  ceil(x: number): number;
  /**
   * @zh 返回一个数的余弦。
   * @en Returns the cosine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  cos(x: number): number;
  /**
   * @zh 返回 e（自然对数的底）的指定次幂。
   * @en Returns e (the base of natural logarithms) raised to a power.
   * @param x @zh 表示 e 的幂的数值表达式。 @en A numeric expression representing the power of e.
   */
  exp(x: number): number;
  /**
   * @zh 返回小于或等于其数值参数的最大整数。
   * @en Returns the greatest integer less than or equal to its numeric argument.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  floor(x: number): number;
  /**
   * @zh 返回一个数的自然对数（以 e 为底）。
   * @en Returns the natural logarithm (base e) of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  log(x: number): number;
  /**
   * @zh 返回一组提供的数值表达式中的最大值。
   * @en Returns the larger of a set of supplied numeric expressions.
   * @param values @zh 要求值的数值表达式。 @en Numeric expressions to be evaluated.
   */
  max(...values: number[]): number;
  /**
   * @zh 返回一组提供的数值表达式中的最小值。
   * @en Returns the smaller of a set of supplied numeric expressions.
   * @param values @zh 要求值的数值表达式。 @en Numeric expressions to be evaluated.
   */
  min(...values: number[]): number;
  /**
   * @zh 返回一个基表达式的指定次幂的值。
   * @en Returns the value of a base expression taken to a specified power.
   * @param x @zh 表达式的基值。 @en The base value of the expression.
   * @param y @zh 表达式的指数值。 @en The exponent value of the expression.
   */
  pow(x: number, y: number): number;
  /**
   * @zh 返回一个 0 到 1 之间的伪随机数。
   * @en Returns a pseudorandom number between 0 and 1.
   */
  random(): number;
  /**
   * @zh 返回四舍五入到最接近整数的数值表达式。
   * @en Returns a supplied numeric expression rounded to the nearest integer.
   * @param x @zh 要四舍五入到最接近整数的值。 @en The value to be rounded to the nearest integer.
   */
  round(x: number): number;
  /**
   * @zh 返回一个数的正弦。
   * @en Returns the sine of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  sin(x: number): number;
  /**
   * @zh 返回一个数的平方根。
   * @en Returns the square root of a number.
   * @param x @zh 一个数值表达式。 @en A numeric expression.
   */
  sqrt(x: number): number;
  /**
   * @zh 返回一个数的正切。
   * @en Returns the tangent of a number.
   * @param x @zh 一个包含以弧度为单位的角度的数值表达式。 @en A numeric expression that contains an angle measured in radians.
   */
  tan(x: number): number;
}
/**
 * @zh 一个内置对象，提供基本的数学功能和常数。
 * @en An intrinsic object that provides basic mathematics functionality and constants.
 */
declare var Math: Math;

/** 启用日期和时间的基本存储和检索功能。 */
interface Date {
  /**
   * @zh 返回日期的字符串表示形式。字符串的格式取决于本地化设置。
   * @en Returns a string representation of a date. The format of the string depends on the locale specific conventions.
   */
  toString(): string;
  /**
   * @zh 以字符串值返回日期。
   * @en Returns a date as a string value.
   */
  toDateString(): string;
  /**
   * @zh 以字符串值返回时间。
   * @en Returns a time as a string value.
   */
  toTimeString(): string;
  /**
   * @zh 以适合主机环境当前本地化设置的字符串值返回值。
   * @en Returns a value as a string value appropriate to the host environment's current locale.
   */
  toLocaleString(): string;
  /**
   * @zh 以适合主机环境当前本地化设置的字符串值返回日期。
   * @en Returns a date as a string value appropriate to the host environment's current locale.
   */
  toLocaleDateString(): string;
  /**
   * @zh 以适合主机环境当前本地化设置的字符串值返回时间。
   * @en Returns a time as a string value appropriate to the host environment's current locale.
   */
  toLocaleTimeString(): string;
  /**
   * @zh 返回自 1970 年 1 月 1 日午夜（UTC）以来的存储时间值（以毫秒为单位）。
   * @en Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   */
  valueOf(): number;
  /**
   * @zh 获取时间值（以毫秒为单位）。
   * @en Gets the time value in milliseconds.
   */
  getTime(): number;
  /**
   * @zh 使用本地时间获取年份。
   * @en Gets the year using local time.
   */
  getFullYear(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取年份。
   * @en Gets the year using Coordinated Universal Time (UTC).
   */
  getUTCFullYear(): number;
  /**
   * @zh 使用本地时间获取月份。
   * @en Gets the month using local time.
   */
  getMonth(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取月份。
   * @en Gets the month using Coordinated Universal Time (UTC).
   */
  getUTCMonth(): number;
  /**
   * @zh 使用本地时间获取月份中的日期。
   * @en Gets the day-of-the-month, using local time.
   */
  getDate(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取月份中的日期。
   * @en Gets the day-of-the-month, using Coordinated Universal Time (UTC).
   */
  getUTCDate(): number;
  /**
   * @zh 使用本地时间获取星期几。
   * @en Gets the day of the week, using local time.
   */
  getDay(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取星期几。
   * @en Gets the day of the week using Coordinated Universal Time (UTC).
   */
  getUTCDay(): number;
  /**
   * @zh 使用本地时间获取小时数。
   * @en Gets the hour, using local time.
   */
  getHours(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取 Date 对象中的小时数。
   * @en Gets the hours in a date, using Coordinated Universal Time (UTC).
   */
  getUTCHours(): number;
  /**
   * @zh 使用本地时间获取分钟数。
   * @en Gets the minutes of a Date object, using local time.
   */
  getMinutes(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取 Date 对象中的分钟数。
   * @en Gets the minutes of a Date object, using Coordinated Universal Time (UTC).
   */
  getUTCMinutes(): number;
  /**
   * @zh 使用本地时间获取秒数。
   * @en Gets the seconds of a Date object, using local time.
   */
  getSeconds(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取 Date 对象中的秒数。
   * @en Gets the seconds of a Date object, using Coordinated Universal Time (UTC).
   */
  getUTCSeconds(): number;
  /**
   * @zh 使用本地时间获取 Date 对象中的毫秒数。
   * @en Gets the milliseconds of a Date, using local time.
   */
  getMilliseconds(): number;
  /**
   * @zh 使用协调世界时 (UTC) 获取 Date 对象中的毫秒数。
   * @en Gets the milliseconds of a Date object, using Coordinated Universal Time (UTC).
   */
  getUTCMilliseconds(): number;
  /**
   * @zh 获取本地计算机时间和协调世界时 (UTC) 之间的差值（以分钟为单位）。
   * @en Gets the difference in minutes between the time on the local computer and Coordinated Universal Time (UTC).
   */
  getTimezoneOffset(): number;

  /**
   * @zh 设置 Date 对象中的日期和时间值。
   * @en Sets the date and time value in the Date object.
   * @param time
   * @zh 一个数值，表示自 1970 年 1 月 1 日午夜（GMT）以来经过的毫秒数。
   * @en A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  setTime(time: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的毫秒值。
   * @en Sets the milliseconds value in the Date object using local time.
   * @param ms
   * @zh 一个等于毫秒值的数字。
   * @en A numeric value equal to the millisecond value.
   */
  setMilliseconds(ms: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的毫秒值。
   * @en Sets the milliseconds value in the Date object using Coordinated Universal Time (UTC).
   * @param ms
   * @zh 一个等于毫秒值的数字。
   * @en A numeric value equal to the millisecond value.
   */
  setUTCMilliseconds(ms: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的秒数。
   * @en Sets the seconds value in the Date object using local time.
   * @param sec
   * @zh 一个等于秒数的数字。
   * @en A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setSeconds(sec: number, ms?: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的秒数。
   * @en Sets the seconds value in the Date object using Coordinated Universal Time (UTC).
   * @param sec
   * @zh 一个等于秒数的数字。
   * @en A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setUTCSeconds(sec: number, ms?: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的分钟数。
   * @en Sets the minutes value in the Date object using local time.
   * @param min
   * @zh 一个等于分钟数的数字。
   * @en A numeric value equal to the minutes value.
   * @param sec
   * @zh 可选参数，一个等于秒数的数字。
   * @en Optional. A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的分钟数。
   * @en Sets the minutes value in the Date object using Coordinated Universal Time (UTC).
   * @param min
   * @zh 一个等于分钟数的数字。
   * @en A numeric value equal to the minutes value.
   * @param sec
   * @zh 可选参数，一个等于秒数的数字。
   * @en Optional. A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setUTCMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的小时数。
   * @en Sets the hours value in the Date object using local time.
   * @param hours
   * @zh 一个等于小时数的数字。
   * @en A numeric value equal to the hours value.
   * @param min
   * @zh 可选参数，一个等于分钟数的数字。
   * @en Optional. A numeric value equal to the minutes value.
   * @param sec
   * @zh 可选参数，一个等于秒数的数字。
   * @en Optional. A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的小时数。
   * @en Sets the hours value in the Date object using Coordinated Universal Time (UTC).
   * @param hours
   * @zh 一个等于小时数的数字。
   * @en A numeric value equal to the hours value.
   * @param min
   * @zh 可选参数，一个等于分钟数的数字。
   * @en Optional. A numeric value equal to the minutes value.
   * @param sec
   * @zh 可选参数，一个等于秒数的数字。
   * @en Optional. A numeric value equal to the seconds value.
   * @param ms
   * @zh 可选参数，一个等于毫秒值的数字。
   * @en Optional. A numeric value equal to the milliseconds value.
   */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的月份日期。
   * @en Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date
   * @zh 一个等于月份日期的数字。
   * @en A numeric value equal to the day of the month.
   */
  setDate(date: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的月份日期。
   * @en Sets the numeric day-of-the-month value of the Date object using Coordinated Universal Time (UTC).
   * @param date
   * @zh 一个等于月份日期的数字。
   * @en A numeric value equal to the day of the month.
   */
  setUTCDate(date: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的月份。
   * @en Sets the month value in the Date object using local time.
   * @param month
   * @zh 一个等于月份的数字。1 月为 0，其他月份依次递增。
   * @en A numeric value equal to the month. The value for January is 0, and other months follow in sequence.
   * @param date
   * @zh 可选参数，等于月份日期的数字。如果未提供，则使用 `getDate` 方法的返回值。
   * @en Optional. A numeric value representing the day of the month. If it is not supplied, the value from a call to the `getDate` method is used.
   */
  setMonth(month: number, date?: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的月份。
   * @en Sets the month value in the Date object using Coordinated Universal Time (UTC).
   * @param month
   * @zh 一个等于月份的数字。1 月为 0，其他月份依次递增。
   * @en A numeric value equal to the month. The value for January is 0, and other months follow in sequence.
   * @param date
   * @zh 可选参数，等于月份日期的数字。如果未提供，则使用 `getUTCDate` 方法的返回值。
   * @en Optional. A numeric value representing the day of the month. If it is not supplied, the value from a call to the `getUTCDate` method is used.
   */
  setUTCMonth(month: number, date?: number): number;

  /**
   * @zh 使用本地时间设置 Date 对象中的年份。
   * @en Sets the year of the Date object using local time.
   * @param year
   * @zh 一个等于年份的数字。
   * @en A numeric value for the year.
   * @param month
   * @zh 可选参数，等于月份的数字。1 月为 0，其他月份依次递增。如果提供了 `date` 参数，则必须提供此参数。
   * @en Optional. A numeric value equal to the month. The value for January is 0, and other months follow in sequence. If you specify the `date` parameter, you must also specify the `month`.
   * @param date
   * @zh 可选参数，等于月份日期的数字。
   * @en Optional. A numeric value equal to the day of the month.
   */
  setFullYear(year: number, month?: number, date?: number): number;

  /**
   * @zh 使用协调世界时 (UTC) 设置 Date 对象中的年份。
   * @en Sets the year of the Date object using Coordinated Universal Time (UTC).
   * @param year
   * @zh 一个等于年份的数字。
   * @en A numeric value for the year.
   * @param month
   * @zh 可选参数，等于月份的数字。1 月为 0，其他月份依次递增。如果提供了 `date` 参数，则必须提供此参数。
   * @en Optional. A numeric value equal to the month. The value for January is 0, and other months follow in sequence. If you specify the `date` parameter, you must also specify the `month`.
   * @param date
   * @zh 可选参数，等于月份日期的数字。
   * @en Optional. A numeric value equal to the day of the month.
   */
  setUTCFullYear(year: number, month?: number, date?: number): number;

  /**
   * @zh 将日期转换为使用协调世界时 (UTC) 的字符串。
   * @en Converts a date to a string using Coordinated Universal Time (UTC).
   */
  toUTCString(): string;

  /**
   * @zh 将日期作为 ISO 格式的字符串值返回。
   * @en Returns a date as a string value in ISO format.
   */
  toISOString(): string;

  /**
   * @zh 用于 `JSON.stringify` 方法，以便在将对象数据序列化为 JSON 时进行转换。
   * @en Used by the `JSON.stringify` method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
   */
  toJSON(key?: any): string;
}

interface DateConstructor {
  /**
   * @zh 创建一个表示当前日期和时间的 Date 对象。
   * @en Creates a Date object that represents the current date and time.
   */
  new (): Date;
  /**
   * @zh 创建一个 Date 对象。
   * @en Creates a Date object.
   * @param value @zh 自 1970-01-01 00:00:00 UTC 以来的毫秒数，或表示日期的字符串。 @en The number of milliseconds since 1970-01-01 00:00:00 UTC, or a string representing a date.
   */
  new (value: number | string): Date;
  /**
   * @zh 创建一个 Date 对象。
   * @en Creates a Date object.
   * @param year @zh 完整的年份。 @en The full year.
   * @param month @zh 月份，从 0（一月）到 11（十二月）。 @en The month, from 0 (January) to 11 (December).
   * @param date @zh 月份中的第几天，从 1 到 31。 @en The day of the month, from 1 to 31.
   * @param hours @zh 小时，从 0 到 23。 @en The hour, from 0 to 23.
   * @param minutes @zh 分钟，从 0 到 59。 @en The minute, from 0 to 59.
   * @param seconds @zh 秒，从 0 到 59。 @en The second, from 0 to 59.
   * @param ms @zh 毫秒，从 0 到 999。 @en The millisecond, from 0 to 999.
   */
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): Date;
  /**
   * @zh 返回表示当前日期和时间的字符串。
   * @en Returns a string representation of the current date and time.
   */
  (): string;
  /**
   * @zh 允许向 Date 对象添加属性。
   * @en Allows the addition of properties to a Date object.
   */
  readonly prototype: Date;
  /**
   * @zh 解析一个包含日期的字符串，并返回该日期与 1970 年 1 月 1 日午夜之间的毫秒数。
   * @en Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s @zh 一个日期字符串。 @en A date string.
   */
  parse(s: string): number;
  /**
   * @zh 返回指定日期与 1970 年 1 月 1 日午夜协调世界时 (UTC)（或 GMT）之间的毫秒数。
   * @en Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @param year @zh 为了跨世纪日期的准确性，需要完整的年份指定。如果年份在 0 到 99 之间，则年份假定为 1900 + 年份。 @en The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param month @zh 月份，为 0 到 11 之间的数字（一月到十二月）。 @en The month as a number between 0 and 11 (January to December).
   * @param date @zh 日期，为 1 到 31 之间的数字。 @en The date as a number between 1 and 31.
   * @param hours @zh 如果提供了分钟，则必须提供。一个从 0 到 23（午夜到晚上 11 点）的数字，指定小时。 @en Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
   * @param minutes @zh 如果提供了秒，则必须提供。一个从 0 到 59 的数字，指定分钟。 @en Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
   * @param seconds @zh 如果提供了毫秒，则必须提供。一个从 0 到 59 的数字，指定秒。 @en Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
   * @param ms @zh 一个从 0 到 999 的数字，指定毫秒。 @en A number from 0 to 999 that specifies the milliseconds.
   */
  UTC(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): number;
  /**
   * @zh 返回自 1970 年 1 月 1 日 00:00:00 UTC 以来经过的毫秒数。
   * @en Returns the number of milliseconds that have elapsed since midnight, January 1, 1970.
   */
  now(): number;
}

/**
 * @zh 启用日期和时间的基本存储和检索功能。
 * @en Enables basic storage and retrieval of dates and times.
 */
declare var Date: DateConstructor;

/**
 * @zh 表示正则表达式匹配结果的数组。
 * @en Represents an array of results from a regular expression match.
 */
interface RegExpMatchArray extends Array<string> {
  /**
   * @zh 匹配在字符串中开始的位置。
   * @en The index at which the match begins in the string.
   */
  index?: number;
  /**
   * @zh 进行匹配的原始字符串。
   * @en The original string against which the match was made.
   */
  input?: string;
}

/**
 * @zh 表示正则表达式执行结果的数组。
 * @en Represents an array of results from a regular expression execution.
 */
interface RegExpExecArray extends Array<string> {
  /**
   * @zh 匹配在字符串中开始的位置。
   * @en The index at which the match begins in the string.
   */
  index: number;
  /**
   * @zh 进行匹配的原始字符串。
   * @en The original string against which the match was made.
   */
  input: string;
}

/**
 * @zh 表示一个正则表达式对象。
 * @en Represents a regular expression object.
 */
interface RegExp {
  /**
   * @zh 使用正则表达式模式对字符串执行搜索，并返回包含该搜索结果的数组。
   * @en Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string @zh 要在其上执行搜索的 String 对象或字符串字面量。 @en The String object or string literal on which to perform the search.
   */
  exec(string: string): RegExpExecArray | null;

  /**
   * @zh 返回一个布尔值，指示模式是否存在于被搜索的字符串中。
   * @en Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string @zh 要在其上执行搜索的字符串。 @en String on which to perform the search.
   */
  test(string: string): boolean;

  /**
   * @zh 返回正则表达式模式的文本副本。只读。
   * @en Returns a copy of the text of the regular expression pattern. Read-only.
   */
  readonly source: string;

  /**
   * @zh 返回一个布尔值，指示与正则表达式一起使用的全局标志 (g) 的状态。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.
   */
  readonly global: boolean;

  /**
   * @zh 返回一个布尔值，指示与正则表达式一起使用的忽略大小写标志 (i) 的状态。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.
   */
  readonly ignoreCase: boolean;

  /**
   * @zh 返回一个布尔值，指示与正则表达式一起使用的多行标志 (m) 的状态。默认为 false。只读。
   * @en Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.
   */
  readonly multiline: boolean;

  /**
   * @zh 下一次匹配开始的索引位置。
   * @en The index at which to start the next match.
   */
  lastIndex: number;

  /**
   * @deprecated
   * @zh （非标准）编译正则表达式，使其执行更快。
   * @en (Non-standard) Compiles a regular expression, making it execute faster.
   */
  compile(): this;
}

/**
 * @zh 表示正则表达式的构造函数。
 * @en Represents the constructor for regular expressions.
 */
interface RegExpConstructor {
  /**
   * @zh 创建一个正则表达式对象。
   * @en Creates a regular expression object.
   * @param pattern @zh 正则表达式模式或现有正则表达式对象。 @en A regular expression pattern or an existing regular expression object.
   */
  new (pattern: RegExp | string): RegExp;
  /**
   * @zh 创建一个正则表达式对象。
   * @en Creates a regular expression object.
   * @param pattern @zh 正则表达式模式。 @en A regular expression pattern.
   * @param flags @zh 一个包含正则表达式标志的字符串。 @en A string containing regular expression flags.
   */
  new (pattern: string, flags?: string): RegExp;
  /**
   * @zh 创建一个正则表达式对象。
   * @en Creates a regular expression object.
   * @param pattern @zh 正则表达式模式或现有正则表达式对象。 @en A regular expression pattern or an existing regular expression object.
   */
  (pattern: RegExp | string): RegExp;
  /**
   * @zh 创建一个正则表达式对象。
   * @en Creates a regular expression object.
   * @param pattern @zh 正则表达式模式。 @en A regular expression pattern.
   * @param flags @zh 一个包含正则表达式标志的字符串。 @en A string containing regular expression flags.
   */
  (pattern: string, flags?: string): RegExp;
  /**
   * @zh 允许向 RegExp 对象添加属性。
   * @en Allows the addition of properties to a RegExp object.
   */
  readonly prototype: RegExp;

  // Non-standard extensions
  /**
   * @zh （非标准）最近一次成功匹配中的第一个捕获组。
   * @en (Non-standard) The first captured group in the last successful match.
   */
  $1: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第二个捕获组。
   * @en (Non-standard) The second captured group in the last successful match.
   */
  $2: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第三个捕获组。
   * @en (Non-standard) The third captured group in the last successful match.
   */
  $3: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第四个捕获组。
   * @en (Non-standard) The fourth captured group in the last successful match.
   */
  $4: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第五个捕获组。
   * @en (Non-standard) The fifth captured group in the last successful match.
   */
  $5: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第六个捕获组。
   * @en (Non-standard) The sixth captured group in the last successful match.
   */
  $6: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第七个捕获组。
   * @en (Non-standard) The seventh captured group in the last successful match.
   */
  $7: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第八个捕获组。
   * @en (Non-standard) The eighth captured group in the last successful match.
   */
  $8: string;
  /**
   * @zh （非标准）最近一次成功匹配中的第九个捕获组。
   * @en (Non-standard) The ninth captured group in the last successful match.
   */
  $9: string;
  /**
   * @zh （非标准）最近一次匹配的子字符串。
   * @en (Non-standard) The last matched substring.
   */
  lastMatch: string;
}

/**
 * @zh 一个内置对象，提供用于处理正则表达式的功能。
 * @en An intrinsic object that provides functionality for working with regular expressions.
 */
declare var RegExp: RegExpConstructor;

/**
 * @zh 表示一个运行时错误。
 * @en Represents a runtime error.
 */
interface Error {
  /**
   * @zh 错误的名称。
   * @en The name of the error.
   */
  name: string;
  /**
   * @zh 错误消息。
   * @en The error message.
   */
  message: string;
  /**
   * @zh （非标准）调用堆栈。
   * @en (Non-standard) The call stack.
   */
  stack?: string;
}

/**
 * @zh 表示错误对象的构造函数。
 * @en Represents the constructor for Error objects.
 */
interface ErrorConstructor {
  /**
   * @zh 创建一个新的 Error 对象。
   * @en Creates a new Error object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): Error;
  /**
   * @zh 创建一个新的 Error 对象。
   * @en Creates a new Error object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): Error;
  /**
   * @zh 允许向 Error 对象添加属性。
   * @en Allows the addition of properties to an Error object.
   */
  readonly prototype: Error;
}

/**
 * @zh 一个内置对象，表示一个运行时错误。
 * @en An intrinsic object that represents a runtime error.
 */
declare var Error: ErrorConstructor;

/**
 * @zh 表示一个与全局 `eval()` 函数相关的错误。
 * @en Represents an error related to the global `eval()` function.
 */
interface EvalError extends Error {}

/**
 * @zh 表示 EvalError 对象的构造函数。
 * @en Represents the constructor for EvalError objects.
 */
interface EvalErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 EvalError 对象。
   * @en Creates a new EvalError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): EvalError;
  /**
   * @zh 创建一个新的 EvalError 对象。
   * @en Creates a new EvalError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): EvalError;
  /**
   * @zh 允许向 EvalError 对象添加属性。
   * @en Allows the addition of properties to an EvalError object.
   */
  readonly prototype: EvalError;
}

/**
 * @zh 一个内置对象，表示与全局 `eval()` 函数相关的错误。
 * @en An intrinsic object that represents an error related to the global `eval()` function.
 */
declare var EvalError: EvalErrorConstructor;

/**
 * @zh 表示一个错误，当一个值不在其允许的范围内时抛出。
 * @en Represents an error that is thrown when a value is not within its allowed range.
 */
interface RangeError extends Error {}

/**
 * @zh 表示 RangeError 对象的构造函数。
 * @en Represents the constructor for RangeError objects.
 */
interface RangeErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 RangeError 对象。
   * @en Creates a new RangeError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): RangeError;
  /**
   * @zh 创建一个新的 RangeError 对象。
   * @en Creates a new RangeError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): RangeError;
  /**
   * @zh 允许向 RangeError 对象添加属性。
   * @en Allows the addition of properties to a RangeError object.
   */
  readonly prototype: RangeError;
}

/**
 * @zh 一个内置对象，表示一个错误，当一个值不在其允许的范围内时抛出。
 * @en An intrinsic object that represents an error that is thrown when a value is not within its allowed range.
 */
declare var RangeError: RangeErrorConstructor;

/**
 * @zh 表示一个错误，当引用一个不存在的变量时抛出。
 * @en Represents an error that is thrown when referencing a non-existent variable.
 */
interface ReferenceError extends Error {}

/**
 * @zh 表示 ReferenceError 对象的构造函数。
 * @en Represents the constructor for ReferenceError objects.
 */
interface ReferenceErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 ReferenceError 对象。
   * @en Creates a new ReferenceError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): ReferenceError;
  /**
   * @zh 创建一个新的 ReferenceError 对象。
   * @en Creates a new ReferenceError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): ReferenceError;
  /**
   * @zh 允许向 ReferenceError 对象添加属性。
   * @en Allows the addition of properties to a ReferenceError object.
   */
  readonly prototype: ReferenceError;
}

/**
 * @zh 一个内置对象，表示一个错误，当引用一个不存在的变量时抛出。
 * @en An intrinsic object that represents an error that is thrown when referencing a non-existent variable.
 */
declare var ReferenceError: ReferenceErrorConstructor;

/**
 * @zh 表示一个语法错误。
 * @en Represents a syntax error.
 */
interface SyntaxError extends Error {}

/**
 * @zh 表示 SyntaxError 对象的构造函数。
 * @en Represents the constructor for SyntaxError objects.
 */
interface SyntaxErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 SyntaxError 对象。
   * @en Creates a new SyntaxError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): SyntaxError;
  /**
   * @zh 创建一个新的 SyntaxError 对象。
   * @en Creates a new SyntaxError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): SyntaxError;
  /**
   * @zh 允许向 SyntaxError 对象添加属性。
   * @en Allows the addition of properties to a SyntaxError object.
   */
  readonly prototype: SyntaxError;
}

/**
 * @zh 一个内置对象，表示一个语法错误。
 * @en An intrinsic object that represents a syntax error.
 */
declare var SyntaxError: SyntaxErrorConstructor;

/**
 * @zh 表示一个类型错误。
 * @en Represents a type error.
 */
interface TypeError extends Error {}

/**
 * @zh 表示 TypeError 对象的构造函数。
 * @en Represents the constructor for TypeError objects.
 */
interface TypeErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 TypeError 对象。
   * @en Creates a new TypeError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): TypeError;
  /**
   * @zh 创建一个新的 TypeError 对象。
   * @en Creates a new TypeError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): TypeError;
  /**
   * @zh 允许向 TypeError 对象添加属性。
   * @en Allows the addition of properties to a TypeError object.
   */
  readonly prototype: TypeError;
}

/**
 * @zh 一个内置对象，表示一个类型错误。
 * @en An intrinsic object that represents a type error.
 */
declare var TypeError: TypeErrorConstructor;

/**
 * @zh 表示一个错误，当 `encodeURI()` 或 `decodeURI()` 函数的参数无效时抛出。
 * @en Represents an error that is thrown when the parameters of `encodeURI()` or `decodeURI()` are invalid.
 */
interface URIError extends Error {}

/**
 * @zh 表示 URIError 对象的构造函数。
 * @en Represents the constructor for URIError objects.
 */
interface URIErrorConstructor extends ErrorConstructor {
  /**
   * @zh 创建一个新的 URIError 对象。
   * @en Creates a new URIError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  new (message?: string): URIError;
  /**
   * @zh 创建一个新的 URIError 对象。
   * @en Creates a new URIError object.
   * @param message @zh （可选）错误消息。 @en (Optional) The error message.
   */
  (message?: string): URIError;
  /**
   * @zh 允许向 URIError 对象添加属性。
   * @en Allows the addition of properties to a URIError object.
   */
  readonly prototype: URIError;
}

/**
 * @zh 一个内置对象，表示一个错误，当 `encodeURI()` 或 `decodeURI()` 函数的参数无效时抛出。
 * @en An intrinsic object that represents an error that is thrown when the parameters of `encodeURI()` or `decodeURI()` are invalid.
 */
declare var URIError: URIErrorConstructor;

/**
 * @zh 一个内置的 JSON 对象，包含用于解析和序列化 JSON 的方法。
 * @en An intrinsic object that provides methods to parse and serialize JSON (JavaScript Object Notation).
 */
interface JSON {
  /**
   * @zh 将一个 JSON 字符串转换为一个对象。
   * @en Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text @zh 一个有效的 JSON 字符串。 @en A valid JSON string.
   * @param reviver @zh 一个转换结果的函数。此函数会为对象的每个成员调用。如果成员包含嵌套对象，则在父对象之前转换嵌套对象。 @en A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  parse(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
  ): any;
  /**
   * @zh 将一个 JavaScript 值转换为一个 JSON 字符串。
   * @en Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value @zh 一个 JavaScript 值，通常是一个对象或数组，需要被转换。 @en A JavaScript value, usually an object or array, to be converted.
   * @param replacer @zh 一个转换结果的函数。 @en A function that transforms the results.
   * @param space @zh 向返回值 JSON 文本添加缩进、空白和换行符，使其更易于阅读。 @en Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): string;
  /**
   * @zh 将一个 JavaScript 值转换为一个 JSON 字符串。
   * @en Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value @zh 一个 JavaScript 值，通常是一个对象或数组，需要被转换。 @en A JavaScript value, usually an object or array, to be converted.
   * @param replacer @zh 一个由字符串和数字组成的数组，用作白名单，用于选择将被字符串化的对象属性。 @en An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
   * @param space @zh 向返回值 JSON 文本添加缩进、空白和换行符，使其更易于阅读。 @en Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(
    value: any,
    replacer?: (string | number)[] | null,
    space?: string | number
  ): string;
}

/**
 * @zh 一个内置的 JSON 对象，提供将 JavaScript 值与 JSON（JavaScript 对象表示法）格式相互转换的函数。
 * @en An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 */
declare var JSON: JSON;

/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

/**
 * @zh 表示一个只读的数组类型。
 * @en Represents a read-only array type.
 */
interface ReadonlyArray<T> {
  /**
   * @zh 获取数组的长度。这个数字比数组中定义的最高元素索引大一。
   * @en Gets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  readonly length: number;
  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;
  /**
   * @zh 返回数组的本地化字符串表示形式。元素使用其 toLocaleString 方法转换为字符串。
   * @en Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
   */
  toLocaleString(): string;
  /**
   * @zh 合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
   * @en Combines two or more arrays. This method does not change the existing arrays, but instead returns a new array.
   * @param items @zh 要添加到数组末尾的其他数组和/或值。 @en Additional arrays and/or items to add to the end of the array.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * @zh 合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
   * @en Combines two or more arrays. This method does not change the existing arrays, but instead returns a new array.
   * @param items @zh 要添加到数组末尾的其他数组和/或值。 @en Additional arrays and/or items to add to the end of the array.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * @zh 将数组的所有元素连接成一个字符串，并用指定的分隔符分隔。
   * @en Adds all the elements of an array into a string, separated by the specified separator string.
   * @param separator @zh 一个字符串，用于分隔数组的每个元素。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * @zh 返回数组的一部分。此方法不会更改原始数组。
   * @en Returns a section of an array. This method does not change the original array.
   * @param start @zh 指定部分的开始位置。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束位置。这是在索引 'end' 处的元素之前。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * @zh 返回数组中首次出现指定值的索引，如果未找到则返回 -1。
   * @en Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * @zh 返回数组中最后一次出现指定值的索引，如果未找到则返回 -1。
   * @en Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始向前搜索的数组索引。如果省略 fromIndex，则从数组的最后一个索引开始搜索。 @en The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * @zh 判断数组中的所有成员是否都满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every<S extends T>(
    callbackfn: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): this is readonly S[];
  /**
   * @zh 判断数组中的所有成员是否都满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * @zh 判断数组中是否有任何元素满足指定的测试。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: readonly T[]) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: readonly T[]) => U,
    thisArg?: any
  ): U[];
  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    callbackfn: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): S[];
  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。 filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，在 callbackfn 函数中可以作为 this 关键字引用。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): T[];
  /**
   * @zh 对数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。 reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，此值将作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * @zh 对数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。 reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，此值将作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;
  /**
   * @zh 对数组中的所有元素按降序调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。 reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，此值将作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * @zh 对数组中的所有元素按降序调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。 reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，此值将作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 获取或设置数组中的元素。
   * @en Gets or sets the element at the specified index.
   */
  readonly [n: number]: T;
}

interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
  join(separator?: string): string;
  slice(start?: number, end?: number): T[];
}

interface Array<T> {
  /**
   * @zh 获取或设置数组的长度。这个数字比数组中定义的最高元素大一。
   * @en Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;
  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;
  /**
   * @zh 返回数组的字符串表示形式。元素使用其 toLocaleString 方法转换为字符串。
   * @en Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
   */
  toLocaleString(): string;
  /**
   * @zh 从数组中移除最后一个元素并返回它。
   * @en Removes the last element from an array and returns it.
   */
  pop(): T | undefined;
  /**
   * @zh 向数组追加新元素，并返回数组的新长度。
   * @en Appends new elements to an array, and returns the new length of the array.
   * @param items @zh 数组的新元素。 @en New elements of the Array.
   */
  push(...items: T[]): number;
  /**
   * @zh 合并两个或多个数组。
   * @en Combines two or more arrays.
   * @param items @zh 要添加到 array1 末尾的其他项。 @en Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * @zh 合并两个或多个数组。
   * @en Combines two or more arrays.
   * @param items @zh 要添加到 array1 末尾的其他项。 @en Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * @zh 将数组的所有元素连接成一个字符串，并由指定的分隔符字符串分隔。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于分隔数组中一个元素与下一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * @zh 反转数组中元素的顺序。
   * @en Reverses the elements in an Array.
   */
  reverse(): T[];
  /**
   * @zh 从数组中移除第一个元素并返回它。
   * @en Removes the first element from an array and returns it.
   */
  shift(): T | undefined;
  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分数组的开头。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分数组的结尾。这是索引“end”处元素的独占。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则按升序 ASCII 字符顺序对元素进行排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;
  /**
   * @zh 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素。
   * @en Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start @zh 数组中开始删除元素的从零开始的位置。 @en The zero-based location in the array from which to start removing elements.
   * @param deleteCount @zh 要删除的元素数。 @en The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): T[];
  /**
   * @zh 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素。
   * @en Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start @zh 数组中开始删除元素的从零开始的位置。 @en The zero-based location in the array from which to start removing elements.
   * @param deleteCount @zh 要删除的元素数。 @en The number of elements to remove.
   * @param items @zh 要插入到数组中代替已删除元素的元素。 @en Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  /**
   * @zh 在数组的开头插入新元素。
   * @en Inserts new elements at the start of an array.
   * @param items @zh 要在数组开头插入的元素。 @en Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;
  /**
   * @zh 返回数组中某个值的第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则搜索从索引 0 开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * @zh 返回数组中指定值的最后一次出现的索引。
   * @en Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则搜索从数组的最后一个索引开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * @zh 判断数组的所有成员是否满足指定测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个最多接受三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个最多接受三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个最多接受三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  /**
   * @zh 对数组的每个元素调用已定义的回调函数，并返回包含结果的数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个最多接受三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个最多接受三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    callbackfn: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个最多接受三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 一个对象，this 关键字可以在 callbackfn 函数中引用该对象。如果省略 thisArg，则 undefined 将用作 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个最多接受四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，则将其用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个最多接受四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，则将其用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个最多接受四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，则将其用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个最多接受四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，则将其用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;

  [n: number]: T;
}

interface ArrayConstructor {
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param arrayLength @zh 数组的初始大小。 @en An initial size for the array.
   */
  new (arrayLength?: number): any[];
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param arrayLength @zh 数组的初始大小。 @en An initial size for the array.
   */
  new <T>(arrayLength: number): T[];
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param items @zh 要包含在新数组中的项目列表。 @en A list of items to include in the new array.
   */
  new <T>(...items: T[]): T[];
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param arrayLength @zh 数组的初始大小。 @en An initial size for the array.
   */
  (arrayLength?: number): any[];
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param arrayLength @zh 数组的初始大小。 @en An initial size for the array.
   */
  <T>(arrayLength: number): T[];
  /**
   * @zh 创建一个新数组。
   * @en Creates a new array.
   * @param items @zh 要包含在新数组中的项目列表。 @en A list of items to include in the new array.
   */
  <T>(...items: T[]): T[];
  /**
   * @zh 确定一个值是否为数组。
   * @en Determines whether a value is an array.
   * @param arg @zh 要检查的值。 @en The value to check.
   */
  isArray(arg: any): arg is any[];
  /**
   * @zh 对 Array 对象的引用。
   * @en A reference to the Array object.
   */
  readonly prototype: any[];
}

declare var Array: ArrayConstructor;

interface TypedPropertyDescriptor<T> {
  /**
   * @zh 如果此属性在 `for...in` 循环中可见，则为 true。
   * @en True if this property is visible in a `for...in` loop.
   */
  enumerable?: boolean;
  /**
   * @zh 如果此属性的类型可以更改并且可以从对象中删除，则为 true。
   * @en True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
   */
  configurable?: boolean;
  /**
   * @zh 如果此属性可以使用赋值运算符更改，则为 true。
   * @en True if this property can be changed with an assignment operator.
   */
  writable?: boolean;
  /**
   * @zh 与属性关联的值。
   * @en The value associated with the property.
   */
  value?: T;
  /**
   * @zh 用作属性 getter 的函数。
   * @en A function which serves as a getter for the property.
   */
  get?: () => T;
  /**
   * @zh 用作属性 setter 的函数。
   * @en A function which serves as a setter for the property.
   */
  set?: (value: T) => void;
}

/**
 * @zh 类装饰器。
 * @en A class decorator.
 */
declare type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
/**
 * @zh 属性装饰器。
 * @en A property decorator.
 */
declare type PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => void;
/**
 * @zh 方法装饰器。
 * @en A method decorator.
 */
declare type MethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;
/**
 * @zh 参数装饰器。
 * @en A parameter decorator.
 */
declare type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;

/**
 * @zh 表示类似 Promise 的构造函数。
 * @en Represents a Promise-like constructor.
 */
declare type PromiseConstructorLike = new <T>(
  executor: (
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) => void
) => PromiseLike<T>;

interface PromiseLike<T> {
  /**
   * @zh 为 Promise 的解决和/或拒绝附加回调。
   * @en Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled @zh 当 Promise 解决时执行的回调。 @en The callback to execute when the Promise is resolved.
   * @param onrejected @zh 当 Promise 被拒绝时执行的回调。 @en The callback to execute when the Promise is rejected.
   * @returns @zh 一个 Promise，用于完成所执行的任何回调。 @en A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2>;
}

/**
 * @zh 表示异步操作的完成。
 * @en Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * @zh 为 Promise 的解决和/或拒绝附加回调。
   * @en Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled @zh 当 Promise 解决时执行的回调。 @en The callback to execute when the Promise is resolved.
   * @param onrejected @zh 当 Promise 被拒绝时执行的回调。 @en The callback to execute when the Promise is rejected.
   * @returns @zh 一个 Promise，用于完成所执行的任何回调。 @en A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>;

  /**
   * @zh 仅为 Promise 的拒绝附加回调。
   * @en Attaches a callback for only the rejection of the Promise.
   * @param onrejected @zh 当 Promise 被拒绝时执行的回调。 @en The callback to execute when the Promise is rejected.
   * @returns @zh 一个用于完成回调的 Promise。 @en A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>;
}

/**
 * @zh 表示类似数组的对象。
 * @en Represents an array-like object.
 */
interface ArrayLike<T> {
  /**
   * @zh 获取或设置数组的长度。此值是一个 32 位无符号整数，始终在数值上大于数组中最高项的索引。
   * @en Gets or sets the length of the array. This is a number one higher than the highest index in the array.
   */
  readonly length: number;
  /**
   * @zh 获取或设置指定索引处的元素。
   * @en Gets or sets the element at the specified index.
   */
  readonly [n: number]: T;
}

/**
 * @zh 使 T 中的所有属性都可选。
 * @en Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * @zh 使 T 中的所有属性都为必需。
 * @en Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * @zh 使 T 中的所有属性都为只读。
 * @en Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * @zh 从 T 中选择一组属性，其键在联合 K 中。
 * @en From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * @zh 构造一个类型，其属性集为 K，类型为 T。
 * @en Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * @zh 从 T 中排除可分配给 U 的那些类型。
 * @en Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * @zh 从 T 中提取可分配给 U 的那些类型。
 * @en Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * @zh 构造一个类型，该类型具有 T 的属性，但类型 K 中的属性除外。
 * @en Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * @zh 从 T 中排除 null 和 undefined。
 * @en Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * @zh 在元组中获取函数类型的参数。
 * @en Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * @zh 在元组中获取构造函数类型的参数。
 * @en Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

/**
 * @zh 获取函数类型的返回类型。
 * @en Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * @zh 获取构造函数类型的实例类型。
 * @en Obtain the instance type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * @zh 上下文“this”类型的标记。
 * @en Marker for contextual 'this' type
 */
interface ThisType<T> {}

/**
 * @zh 表示一个原始的二进制数据缓冲区，用于存储不同类型数组的数据。ArrayBuffers 不能直接读取或写入，但可以传递给类型化数组或 DataView 对象以根据需要解释原始缓冲区。
 * @en Represents a raw buffer of binary data, which is used to store data for the
 * different typed arrays. ArrayBuffers cannot be read from or written to directly,
 * but can be passed to a typed array or DataView Object to interpret the raw
 * buffer as needed.
 */
interface ArrayBuffer {
  /**
   * @zh 只读。ArrayBuffer 的长度（以字节为单位）。
   * @en Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /**
   * @zh 返回 ArrayBuffer 的一个片段。
   * @en Returns a section of an ArrayBuffer.
   * @param begin @zh 开始索引。 @en The beginning of the specified portion of the ArrayBuffer.
   * @param end @zh 结束索引。 @en The end of the specified portion of the ArrayBuffer.
   */
  slice(begin: number, end?: number): ArrayBuffer;
}

/**
 * @zh 表示一个原始的二进制数据缓冲区，用于存储不同类型数组的数据。SharedArrayBuffers 不能直接读取或写入，但可以传递给类型化数组或 DataView 对象以根据需要解释原始缓冲区。
 * @en Represents a raw buffer of binary data, which is used to store data for the
 * different typed arrays. SharedArrayBuffers cannot be read from or written to directly,
 * but can be passed to a typed array or DataView Object to interpret the raw
 * buffer as needed.
 */
interface SharedArrayBuffer {
  /**
   * @zh SharedArrayBuffer 的大小（以字节为单位）。
   * @en The size, in bytes, of the SharedArrayBuffer.
   */
  readonly byteLength: number;

  /**
   * @zh 返回 SharedArrayBuffer 的一个片段。
   * @en Returns a section of a SharedArrayBuffer.
   * @param begin @zh 切片开始的索引。 @en The beginning of the specified portion of the SharedArrayBuffer.
   * @param end @zh 切片结束的索引（不包括）。 @en The end of the specified portion of the SharedArrayBuffer. (exclusive)
   */
  slice(begin: number, end?: number): SharedArrayBuffer;
}

/**
 * @zh ArrayBufferView 和相关类型化数组的缓冲区允许的 ArrayBuffer 类型。
 * @en Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
 */
interface ArrayBufferTypes {
  ArrayBuffer: ArrayBuffer;
}
/**
 * @zh 表示类似 ArrayBuffer 的对象。
 * @en Represents an ArrayBuffer-like object.
 */
type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];

/**
 * @zh 表示 ArrayBuffer 的构造函数。
 * @en Represents the constructor of ArrayBuffer.
 */
interface ArrayBufferConstructor {
  /**
   * @zh ArrayBuffer 的原型对象。
   * @en The prototype of ArrayBuffer.
   */
  readonly prototype: ArrayBuffer;
  /**
   * @zh 创建一个新的 ArrayBuffer。
   * @en Creates a new ArrayBuffer.
   * @param byteLength @zh ArrayBuffer 的字节长度。 @en The length of the ArrayBuffer in bytes.
   */
  new (byteLength: number): ArrayBuffer;
  /**
   * @zh 检查一个值是否为 ArrayBufferView。
   * @en Checks if a value is an ArrayBufferView.
   * @param arg @zh 要检查的值。 @en The value to check.
   */
  isView(arg: any): arg is ArrayBufferView;
}

/**
 * @zh ArrayBuffer 的构造函数。
 * @en The constructor of ArrayBuffer.
 */
declare var ArrayBuffer: ArrayBufferConstructor;

interface SharedArrayBufferConstructor {
  /**
   * @zh SharedArrayBuffer 构造函数的原型对象。
   * @en The prototype of the SharedArrayBuffer constructor.
   * The ArrayBuffer instance referenced by the array.
   */
  buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  byteOffset: number;
}

/**
 * @zh 提供对 ArrayBuffer 的低级接口，用于读取和写入多种数字类型。
 * @en Provides a low-level interface for reading and writing multiple number types in an ArrayBuffer.
 */
interface DataView {
  /**
   * @zh 此视图引用的 ArrayBuffer。
   * @en The ArrayBuffer referenced by this view.
   */
  readonly buffer: ArrayBuffer;
  /**
   * @zh 此视图的字节长度。
   * @en The byte length of this view.
   */
  readonly byteLength: number;
  /**
   * @zh 此视图在其 ArrayBuffer 中的字节偏移量。
   * @en The byte offset of this view from the start of its ArrayBuffer.
   */
  readonly byteOffset: number;
  /**
   * @zh 从视图开始的指定字节偏移量处获取 Float32 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Float32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getFloat32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Float64 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Float64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getFloat64(byteOffset: number, littleEndian?: boolean): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Int8 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Int8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   */
  getInt8(byteOffset: number): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Int16 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Int16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getInt16(byteOffset: number, littleEndian?: boolean): number;
  /**
   * @zh 从视图开始的指定字节偏移量处获取 Int32 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Int32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getInt32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Uint8 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Uint8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   */
  getUint8(byteOffset: number): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Uint16 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Uint16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getUint16(byteOffset: number, littleEndian?: boolean): number;

  /**
   * @zh 从视图开始的指定字节偏移量处获取 Uint32 值。没有对齐约束；可以从任何偏移量获取多字节值。
   * @en Gets the Uint32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset @zh 应检索值的缓冲区中的位置。 @en The place in the buffer at which the value should be retrieved.
   * @param littleEndian @zh 是否使用小端字节序。 @en Whether to use little-endian byte order.
   */
  getUint32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Float32 值。
   * @en Stores an Float32 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Float64 值。
   * @en Stores an Float64 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Int8 值。
   * @en Stores an Int8 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   */
  setInt8(byteOffset: number, value: number): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Int16 值。
   * @en Stores an Int16 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Int32 值。
   * @en Stores an Int32 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Uint8 值。
   * @en Stores an Uint8 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   */
  setUint8(byteOffset: number, value: number): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Uint16 值。
   * @en Stores an Uint16 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * @zh 在视图开始的指定字节偏移量处存储 Uint32 值。
   * @en Stores an Uint32 value at the specified byte offset from the start of the view.
   * @param byteOffset @zh 应设置值的缓冲区中的位置。 @en The place in the buffer at which the value should be set.
   * @param value @zh 要设置的值。 @en The value to set.
   * @param littleEndian @zh 如果为 false 或 undefined，则应写入大端值，否则应写入小端值。 @en If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.
   */
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}

/**
 * @zh DataView 构造函数接口。
 * @en DataView constructor interface.
 */
interface DataViewConstructor {
  /**
   * @zh 创建一个新的 DataView 实例。
   * @en Creates a new DataView instance.
   * @param buffer @zh 要使用的 ArrayBuffer 或 ArrayBufferLike 对象。 @en The ArrayBuffer or ArrayBufferLike object to use.
   * @param byteOffset @zh 从缓冲区开始的字节偏移量。 @en The byte offset from the start of the buffer.
   * @param byteLength @zh 视图的字节长度。 @en The byte length of the view.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    byteLength?: number
  ): DataView;
}
declare var DataView: DataViewConstructor;

/**
 * @zh 8 位整数值的类型化数组。内容初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Int8Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 在将由 start 和 end 标识的数组部分复制到从位置 target 开始的同一数组后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target @zh 如果 target 为负数，则将其视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则将其视为 length+start。如果 end 为负数，则将其视为 length+end。 @en If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.
   * @param end @zh 如果未指定，则使用 this 对象的长度作为其默认值。 @en If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否都满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或直到数组结束。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后，返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value
   * @param value @zh 用于填充数组部分的值。 @en value to fill array section with
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则将其视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则将其视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回满足回调函数中指定条件的数组元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int8Array) => any,
    thisArg?: any
  ): Int8Array;

  /**
   * @zh 返回数组中 predicate 为 true 的第一个元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate @zh find 以升序为数组的每个元素调用一次 predicate，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，find 立即返回该元素值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用 predicate 的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中 predicate 为 true 的第一个元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate @zh find 以升序为数组的每个元素调用一次 predicate，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，findIndex 立即返回该元素索引。否则，findIndex 返回 -1。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用 predicate 的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int8Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回数组中值的第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，搜索从索引 0 开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素连接成一个字符串。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于分隔数组元素的字符串。如果省略 separator，数组元素将用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回数组中值的最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，搜索从索引 0 开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any
  ): Int8Array;

  /**
   * @zh 对数组中的每个元素执行指定的操作，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any
  ): Int8Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Int8Array;

  /**
   * @zh 设置一个值或一组值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 开始写入的当前数组中的索引。 @en The index in the current array at which to begin writing.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束（不包括该索引处的元素）。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int8Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法按升序为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或直到数组结束。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array, in ascending order, until the callbackfn returns a value that is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则按升序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Int8Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int8Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回指定对象的原始值。
   * @en Returns the primitive value of the specified object.
   */
  valueOf(): Int8Array;

  /**
   * @zh 返回数组中每个条目的键/值对的可迭代对象。
   * @en Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回数组中键的可迭代对象。
   * @en Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回数组中值的可迭代对象。
   * @en Returns an iterable of values in the array
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回数组中值的可迭代对象。
   * @en Returns an iterable of values in the array
   */
  [Symbol.iterator](): IterableIterator<number>;
}

/**
 * @zh 8 位整数值的类型化数组构造函数。
 * @en A typed array of 8-bit integer values constructor.
 */
interface Int8ArrayConstructor {
  /**
   * @zh 8 位整数值的类型化数组的原型。
   * @en The Int8Array prototype.
   */
  readonly prototype: Int8Array;

  /**
   * @zh 创建一个新的 Int8Array 对象。
   * @en Creates a new Int8Array object.
   * @param length @zh 数组的长度。 @en The length of the array.
   */
  new (length: number): Int8Array;

  /**
   * @zh 创建一个新的 Int8Array 对象。
   * @en Creates a new Int8Array object.
   * @param arrayOrArrayBuffer @zh 一个类型化或非类型化数组，或者一个 ArrayBuffer。 @en A typed or untyped array, or an ArrayBuffer.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int8Array;

  /**
   * @zh 创建一个新的 Int8Array 对象。
   * @en Creates a new Int8Array object.
   * @param buffer @zh 一个 ArrayBuffer。 @en An ArrayBuffer.
   * @param byteOffset @zh 数组的字节偏移量。 @en The byte offset of the array.
   * @param length @zh 数组的长度。 @en The length of the array.
   */
  new (buffer: ArrayBufferLike, byteOffset: number, length?: number): Int8Array;

  /**
   * @zh 8 位整数值的类型化数组中每个元素的字节大小。
   * @en The size in bytes of each element in the Int8Array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一个可迭代对象或一个类数组对象创建一个新的 Int8Array 对象。
   * @en Creates a new Int8Array object from an iterable object or an array-like object.
   * @param arrayLike @zh 一个可迭代对象或一个类数组对象。 @en An iterable object or an array-like object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int8Array;

  /**
   * @zh 创建一个数组，包含从 iterable 对象或可迭代对象中获取的元素。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 一个可迭代对象或一个类数组对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 一个映射函数，用于对数组中的每个元素进行映射。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh his的thisArg值用于调用mapfn。 @en thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int8Array;
}
declare var Int8Array: Int8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
/**
 * @zh 一个由 8 位无符号整数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint8Array) => any,
    thisArg?: any
  ): Uint8Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint8Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint8Array) => number,
    thisArg?: any
  ): Uint8Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Uint8Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Uint8Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Uint8Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Uint8ArrayConstructor {
  /**
   * @zh Uint8Array 构造函数的原型。
   * @en The prototype of the Uint8Array constructor.
   */
  readonly prototype: Uint8Array;

  /**
   * @zh 创建一个新的 Uint8Array。
   * @en Creates a new Uint8Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Uint8Array;
  /**
   * @zh 创建一个新的 Uint8Array。
   * @en Creates a new Uint8Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint8Array;
  /**
   * @zh 创建一个新的 Uint8Array。
   * @en Creates a new Uint8Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint8Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8Array;
}
declare var Uint8Array: Uint8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
 * If the requested number of bytes could not be allocated an exception is raised.
 */
/**
 * @zh 一个由 8 位无符号整数（钳位）组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8ClampedArray {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint8ClampedArray) => any,
    thisArg?: any
  ): Uint8ClampedArray;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => number,
    thisArg?: any
  ): Uint8ClampedArray;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Uint8ClampedArray;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8ClampedArray;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Uint8ClampedArray 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8ClampedArray;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Uint8ClampedArray;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Uint8ClampedArrayConstructor {
  /**
   * @zh Uint8ClampedArray 构造函数的原型。
   * @en The prototype of the Uint8ClampedArray constructor.
   */
  readonly prototype: Uint8ClampedArray;

  /**
   * @zh 创建一个新的 Uint8ClampedArray。
   * @en Creates a new Uint8ClampedArray.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Uint8ClampedArray;
  /**
   * @zh 创建一个新的 Uint8ClampedArray。
   * @en Creates a new Uint8ClampedArray.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (
    arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike
  ): Uint8ClampedArray;
  /**
   * @zh 创建一个新的 Uint8ClampedArray。
   * @en Creates a new Uint8ClampedArray.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint8ClampedArray;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8ClampedArray;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8ClampedArray;
}
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;

/**
 * @zh 一个由 16 位有符号整数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 16-bit signed integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Int16Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int16Array) => any,
    thisArg?: any
  ): Int16Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int16Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int16Array) => number,
    thisArg?: any
  ): Int16Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Int16Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int16Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Int16Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int16Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Int16Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Int16ArrayConstructor {
  /**
   * @zh Int16Array 构造函数的原型。
   * @en The prototype of the Int16Array constructor.
   */
  readonly prototype: Int16Array;

  /**
   * @zh 创建一个新的 Int16Array。
   * @en Creates a new Int16Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Int16Array;
  /**
   * @zh 创建一个新的 Int16Array。
   * @en Creates a new Int16Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int16Array;
  /**
   * @zh 创建一个新的 Int16Array。
   * @en Creates a new Int16Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Int16Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Int16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int16Array;
}
declare var Int16Array: Int16ArrayConstructor;

/**
 * @zh 一个由 16 位无符号整数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint16Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint16Array) => any,
    thisArg?: any
  ): Uint16Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint16Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint16Array) => number,
    thisArg?: any
  ): Uint16Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Uint16Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint16Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Uint16Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint16Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Uint16Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Uint16ArrayConstructor {
  /**
   * @zh Uint16Array 构造函数的原型。
   * @en The prototype of the Uint16Array constructor.
   */
  readonly prototype: Uint16Array;

  /**
   * @zh 创建一个新的 Uint16Array。
   * @en Creates a new Uint16Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Uint16Array;
  /**
   * @zh 创建一个新的 Uint16Array。
   * @en Creates a new Uint16Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint16Array;
  /**
   * @zh 创建一个新的 Uint16Array。
   * @en Creates a new Uint16Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint16Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint16Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint16Array;
}
declare var Uint16Array: Uint16ArrayConstructor;
/**
 * @zh 一个由 32 位有符号整数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 32-bit signed integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Int32Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Int32Array) => any,
    thisArg?: any
  ): Int32Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int32Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int32Array) => number,
    thisArg?: any
  ): Int32Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Int32Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int32Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Int32Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int32Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Int32Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Int32ArrayConstructor {
  /**
   * @zh Int32Array 构造函数的原型。
   * @en The prototype of the Int32Array constructor.
   */
  readonly prototype: Int32Array;

  /**
   * @zh 创建一个新的 Int32Array。
   * @en Creates a new Int32Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Int32Array;
  /**
   * @zh 创建一个新的 Int32Array。
   * @en Creates a new Int32Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int32Array;
  /**
   * @zh 创建一个新的 Int32Array。
   * @en Creates a new Int32Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Int32Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Int32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int32Array;
}
declare var Int32Array: Int32ArrayConstructor;

/**
 * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
/**
 * @zh 一个由 32 位无符号整数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint32Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Uint32Array) => any,
    thisArg?: any
  ): Uint32Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint32Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint32Array) => number,
    thisArg?: any
  ): Uint32Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Uint32Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint32Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Uint32Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint32Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Uint32Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Uint32ArrayConstructor {
  /**
   * @zh Uint32Array 构造函数的原型。
   * @en The prototype of the Uint32Array constructor.
   */
  readonly prototype: Uint32Array;

  /**
   * @zh 创建一个新的 Uint32Array。
   * @en Creates a new Uint32Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Uint32Array;
  /**
   * @zh 创建一个新的 Uint32Array。
   * @en Creates a new Uint32Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint32Array;
  /**
   * @zh 创建一个新的 Uint32Array。
   * @en Creates a new Uint32Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Uint32Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint32Array;
}
declare var Uint32Array: Uint32ArrayConstructor;

/**
 * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
 * of bytes could not be allocated an exception is raised.
 */
/**
 * @zh 一个由 32 位浮点数组成的类型化数组。内容被初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en A typed array of 32-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.
 */
interface Float32Array {
  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 数组引用的 ArrayBuffer 实例。
   * @en The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh 数组的字节长度。
   * @en The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh 数组的字节偏移量。
   * @en The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * @zh 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置后，返回 this 对象。
   * @en Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 为负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 为负数，则视为 length+start。 @en If start is negative, it is treated as length+start.
   * @param end @zh 如果 end 为负数，则视为 length+end。如果未指定，则使用 this 对象的长度作为其默认值。 @en If end is negative, it is treated as length+end. If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh 确定数组的所有成员是否满足指定的测试。
   * @en Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Float32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 为负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 为负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh 返回数组中满足回调函数中指定条件的元素。
   * @en Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Float32Array) => any,
    thisArg?: any
  ): Float32Array;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的值，否则返回 undefined。
   * @en Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，find 会立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh 返回数组中第一个谓词为 true 的元素的索引，否则返回 -1。
   * @en Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次谓词，直到找到一个谓词返回 true 的元素。如果找到这样的元素，findIndex 会立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用谓词的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh 对数组中的每个元素执行指定的操作。
   * @en Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Float32Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh 返回一个值在数组中第一次出现的索引。
   * @en Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从索引 0 开始搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh 返回一个值在数组中最后一次出现的索引。
   * @en Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则从数组的最后一个元素开始向前搜索。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the last element and goes backwards.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh 数组的长度。
   * @en The length of the array.
   */
  readonly length: number;

  /**
   * @zh 对数组中的每个元素调用定义的回调函数，并返回包含结果的新数组。
   * @en Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Float32Array) => number,
    thisArg?: any
  ): Float32Array;

  /**
   * @zh 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number,
    initialValue: number
  ): number;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。第一次调用 callbackfn 函数时，将此值作为参数而不是数组值。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => number,
    initialValue: number
  ): number;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh 反转数组中的元素。
   * @en Reverses the elements in an Array.
   */
  reverse(): Float32Array;

  /**
   * @zh 设置一个值或一个数组的值。
   * @en Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh 返回数组的一部分。
   * @en Returns a section of an array.
   * @param start @zh 指定部分的开始。 @en The beginning of the specified portion of the array.
   * @param end @zh 指定部分的结束。这是不包括索引 'end' 处的元素。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float32Array;

  /**
   * @zh 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中 this 关键字可以引用的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Float32Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh 对数组进行排序。
   * @en Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh 获取此数组的 ArrayBuffer 存储的新 Float32Array 视图，引用从 begin（包含）到 end（不包含）的元素。
   * @en Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float32Array;

  /**
   * @zh 使用当前区域设置将数字转换为字符串。
   * @en Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * @zh 返回数组的字符串表示形式。
   * @en Returns a string representation of an array.
   */
  toString(): string;

  /**
   * @zh 返回此对象的原始值。
   * @en Returns the primitive value of this object.
   */
  valueOf(): Float32Array;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键/值对。
   * @en Returns an iterator that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的键。
   * @en Returns an iterator that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh 返回一个迭代器，该迭代器包含数组中每个索引的值。
   * @en Returns an iterator that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  [index: number]: number;
}

interface Float32ArrayConstructor {
  /**
   * @zh Float32Array 构造函数的原型。
   * @en The prototype of the Float32Array constructor.
   */
  readonly prototype: Float32Array;

  /**
   * @zh 创建一个新的 Float32Array。
   * @en Creates a new Float32Array.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Float32Array;
  /**
   * @zh 创建一个新的 Float32Array。
   * @en Creates a new Float32Array.
   * @param arrayOrArrayBuffer @zh 从中创建新数组的类数组或 ArrayBufferLike 对象。 @en An array-like or ArrayBufferLike object to create the new array from.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float32Array;
  /**
   * @zh 创建一个新的 Float32Array。
   * @en Creates a new Float32Array.
   * @param buffer @zh 新数组将引用的 ArrayBufferLike 对象。 @en The ArrayBufferLike object that the new array will reference.
   * @param byteOffset @zh 开始引用的 `buffer` 中的字节偏移量。 @en The byte offset in `buffer` to begin referencing.
   * @param length @zh 要引用的字节数。 @en The number of bytes to reference.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Float32Array;

  /**
   * @zh 数组中每个元素的字节大小。
   * @en The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh 从一组元素返回一个新数组。
   * @en Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Float32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float32Array;

  /**
   * @zh 从类数组或可迭代对象创建一个数组。
   * @en Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Float32Array;
}
declare var Float32Array: Float32ArrayConstructor;

/**
 * @zh
 * 一个 64 位浮点数数组。内容初始化为 0。如果无法分配请求的字节数，则会引发异常。
 * @en
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Float64Array {
  /**
   * @zh
   * 数组中每个元素的字节大小。
   * @en
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh
   * 从其创建此数组的 ArrayBuffer。
   * @en
   * The ArrayBuffer from which this array is created.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * @zh
   * 数组的长度（以字节为单位）。
   * @en
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * @zh
   * 从其 ArrayBuffer 的起始位置到此数组的偏移量（以字节为单位）。
   * @en
   * The offset in bytes of this array from the start of its ArrayBuffer.
   */
  readonly byteOffset: number;

  /**
   * @zh
   * 将数组中由 start 和 end 标识的部分复制到同一数组中从 target 位置开始的位置，返回 this 对象。
   * @en
   * Returns the this object after copying a section of the array identified by start and end to the same array starting at position target.
   * @param target @zh 如果 target 是负数，则视为 length+target，其中 length 是数组的长度。 @en If target is negative, it is treated as length+target where length is the length of the array.
   * @param start @zh 如果 start 是负数，则视为 length+start。如果 end 是负数，则视为 length+end。 @en If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.
   * @param end @zh 如果未指定，则使用 this 对象的长度作为其默认值。 @en If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * @zh
   * 确定数组的所有成员是否满足指定的测试。
   * @en
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn @zh 一个接受最多三个参数的函数。every 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 false 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中可以引用 this 关键字的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: number, index: number, array: Float64Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh
   * 在用 value 填充由 start 和 end 标识的部分后返回 this 对象。
   * @en
   * Returns the this object after filling the section identified by start and end with value.
   * @param value @zh 用来填充数组部分的值。 @en value to fill array section with.
   * @param start @zh 开始填充数组的索引。如果 start 是负数，则视为 length+start，其中 length 是数组的长度。 @en index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.
   * @param end @zh 停止填充数组的索引。如果 end 是负数，则视为 length+end。 @en index to stop filling the array at. If end is negative, it is treated as length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * @zh
   * 返回数组中满足回调函数中指定条件的元素。
   * @en
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn @zh 一个接受最多三个参数的函数。filter 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中可以引用 this 关键字的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    callbackfn: (value: number, index: number, array: Float64Array) => any,
    thisArg?: any
  ): Float64Array;

  /**
   * @zh
   * 返回数组中第一个 predicate 返回 true 的元素的值，否则返回 undefined。
   * @en
   * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate @zh find 为数组的每个元素（按升序）调用一次 predicate，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，find 立即返回该元素的值。否则，find 返回 undefined。 @en find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg @zh 如果提供，它将用作每次调用 predicate 时的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number | undefined;

  /**
   * @zh
   * 返回数组中第一个 predicate 返回 true 的元素的索引，否则返回 -1。
   * @en
   * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate @zh findIndex 为数组的每个元素（按升序）调用一次 predicate，直到找到一个 predicate 返回 true 的元素。如果找到这样的元素，findIndex 立即返回该元素的索引。否则，findIndex 返回 -1。 @en findIndex calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg @zh 如果提供，它将用作每次调用 predicate 时的 this 值。如果未提供，则使用 undefined。 @en If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number;

  /**
   * @zh
   * 对数组中的每个元素执行指定的操作。
   * @en
   * Performs the specified action for each element in an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。forEach 为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中可以引用 this 关键字的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Float64Array) => void,
    thisArg?: any
  ): void;

  /**
   * @zh
   * 返回数组中第一次出现某个值的索引。
   * @en
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则搜索从索引 0 开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh
   * 将数组的所有元素用指定的分隔符字符串连接起来。
   * @en
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator @zh 用于在生成的字符串中分隔数组的一个元素的字符串。如果省略，数组元素用逗号分隔。 @en A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * @zh
   * 返回数组中最后一次出现某个值的索引。
   * @en
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement @zh 要在数组中定位的值。 @en The value to locate in the array.
   * @param fromIndex @zh 开始搜索的数组索引。如果省略 fromIndex，则搜索从数组末尾开始。 @en The array index at which to begin the search. If fromIndex is omitted, the search starts at the end of the array.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * @zh
   * 数组的长度。
   * @en
   * The length of the array.
   */
  readonly length: number;

  /**
   * @zh
   * 对数组的每个元素调用已定义的回调函数，并返回一个包含结果的数组。
   * @en
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn @zh 一个接受最多三个参数的函数。map 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg @zh 在 callbackfn 函数中可以引用 this 关键字的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Float64Array) => number,
    thisArg?: any
  ): Float64Array;

  /**
   * @zh
   * 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * @zh
   * 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduce 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh
   * 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => number,
    initialValue: number
  ): number;

  /**
   * @zh
   * 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积的结果，并在下一次调用回调函数时作为参数提供。
   * @en
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn @zh 一个接受最多四个参数的函数。reduceRight 方法为数组中的每个元素调用一次 callbackfn 函数。 @en A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue @zh 如果指定了 initialValue，它将用作开始累积的初始值。对 callbackfn 函数的第一次调用将此值作为参数而不是数组值提供。 @en If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue: U
  ): U;

  /**
   * @zh
   * 反转数组中的元素。
   * @en
   * Reverses the elements in an Array.
   */
  reverse(): Float64Array;

  /**
   * @zh
   * 设置一个值或一个值数组。
   * @en
   * Sets a value or an array of values.
   * @param array @zh 要设置的值的类型化或非类型化数组。 @en A typed or untyped array of values to set.
   * @param offset @zh 要写入值的当前数组中的索引。 @en The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * @zh
   * 返回数组的一部分。
   * @en
   * Returns a section of an array.
   * @param start @zh 数组指定部分的开头。 @en The beginning of the specified portion of the array.
   * @param end @zh 数组指定部分的结尾。这是不包括索引“end”处的元素的。 @en The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float64Array;

  /**
   * @zh
   * 确定指定的回调函数是否对数组的任何元素返回 true。
   * @en
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn @zh 一个接受最多三个参数的函数。some 方法为数组中的每个元素调用 callbackfn 函数，直到 callbackfn 返回一个可强制转换为布尔值 true 的值，或者直到数组的末尾。 @en A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg @zh 在 callbackfn 函数中可以引用 this 关键字的对象。如果省略 thisArg，则使用 undefined 作为 this 值。 @en An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: number, index: number, array: Float64Array) => unknown,
    thisArg?: any
  ): boolean;

  /**
   * @zh
   * 对数组进行排序。
   * @en
   * Sorts an array.
   * @param compareFn @zh 用于确定元素顺序的函数。如果第一个参数小于第二个参数，则应返回负值；如果相等，则返回零；否则返回正值。如果省略，则元素按升序 ASCII 字符顺序排序。 @en Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * @zh
   * 从 begin（包含）到 end（不包含）获取子数组。
   * @en
   * Gets a new Float64Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
   * @param begin @zh 数组的起始索引。 @en The index of the beginning of the array.
   * @param end @zh 数组的结束索引。 @en The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float64Array;

  /**
   * @zh
   * 将数组转换为字符串。
   * @en
   * Converts the array to a string.
   */
  toString(): string;

  /**
   * @zh
   * 返回此对象的原始值。
   * @en
   * Returns the primitive value of this object.
   */
  valueOf(): Float64Array;

  /**
   * @zh
   * 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。
   * @en
   * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * @zh
   * 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键。
   * @en
   * Returns a new Array Iterator object that contains the keys for each index in the array.
   */
  keys(): IterableIterator<number>;

  /**
   * @zh
   * 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的值。
   * @en
   * Returns a new Array Iterator object that contains the values for each index in the array.
   */
  values(): IterableIterator<number>;

  /**
   * @zh
   * 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的值。
   * @en
   * Returns a new Array Iterator object that contains the values for each index in the array.
   */
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * @zh
   * 获取或设置数字索引处的元素。
   * @en
   * Gets or sets the element at the specified numeric index.
   */
  [index: number]: number;
  new (module: Module, importObject?: Imports): Instance;
}

interface LinkError extends Error {}

var LinkError: {
  prototype: LinkError;
  new (message?: string): LinkError;
  (message?: string): LinkError;
};

/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory) */
interface Memory {
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) */
  readonly buffer: ArrayBuffer;
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) */
  grow(delta: number): number;
}

var Memory: {
  prototype: Memory;
  new (descriptor: MemoryDescriptor): Memory;
};

/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module) */
interface Module {}

var Module: {
  prototype: Module;
  new (bytes: BufferSource): Module;
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static) */
  customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static) */
  exports(moduleObject: Module): ModuleExportDescriptor[];
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static) */
  imports(moduleObject: Module): ModuleImportDescriptor[];
};

interface RuntimeError extends Error {}

var RuntimeError: {
  prototype: RuntimeError;
  new (message?: string): RuntimeError;
  (message?: string): RuntimeError;
};

/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table) */
interface Table {
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/length) */
  readonly length: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/get) */
  get(index: number): any;
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) */
  grow(delta: number, value?: any): number;
  /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/set) */
  set(index: number, value?: any): void;
}

var Table: {
  prototype: Table;
  new (descriptor: TableDescriptor, value?: any): Table;
};

interface GlobalDescriptor<T extends ValueType = ValueType> {
  mutable?: boolean;
  value: T;
}

interface MemoryDescriptor {
  initial: number;
  maximum?: number;
  shared?: boolean;
}

interface ModuleExportDescriptor {
  kind: ImportExportKind;
  name: string;
}

interface ModuleImportDescriptor {
  kind: ImportExportKind;
  module: string;
  name: string;
}

interface TableDescriptor {
  element: TableKind;
  initial: number;
  maximum?: number;
}

interface ValueTypeMap {
  anyfunc: Function;
  externref: any;
  f32: number;
  f64: number;
  i32: number;
  i64: bigint;
  v128: never;
}

interface WebAssemblyInstantiatedSource {
  instance: Instance;
  module: Module;
}

type ImportExportKind = "function" | "global" | "memory" | "table";
type TableKind = "anyfunc" | "externref";
type ExportValue = Function | Global | Memory | Table;
type Exports = Record<string, ExportValue>;
type ImportValue = ExportValue | number;
type Imports = Record<string, ModuleImports>;
type ModuleImports = Record<string, ImportValue>;
type ValueType = keyof ValueTypeMap;
/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compile_static) */
function compile(bytes: BufferSource): Promise<Module>;
/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) */
function compileStreaming(
  source: Response | PromiseLike<Response>
): Promise<Module>;
/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) */
function instantiate(
  bytes: BufferSource,
  importObject?: Imports
): Promise<WebAssemblyInstantiatedSource>;
function instantiate(
  moduleObject: Module,
  importObject?: Imports
): Promise<Instance>;
/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) */
function instantiateStreaming(
  source: Response | PromiseLike<Response>,
  importObject?: Imports
): Promise<WebAssemblyInstantiatedSource>;
/** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/validate_static) */
function validate(bytes: BufferSource): boolean;

interface Float64ArrayConstructor {
  readonly prototype: Float64Array;

  /**
   * @zh
   * 创建一个新的 `Float64Array` 对象。
   * @en
   * Creates a new `Float64Array` object.
   * @param length @zh 新数组的长度。 @en The length of the new array.
   */
  new (length: number): Float64Array;

  /**
   * @zh
   * 从一个类数组或 `ArrayBuffer` 对象创建一个新的 `Float64Array` 对象。
   * @en
   * Creates a new `Float64Array` object from an array-like or `ArrayBuffer` object.
   * @param arrayOrArrayBuffer @zh 一个类数组或 `ArrayBuffer` 对象。 @en An array-like or `ArrayBuffer` object.
   */
  new (arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float64Array;

  /**
   * @zh
   * 从一个 `ArrayBuffer` 对象创建一个新的 `Float64Array` 对象。
   * @en
   * Creates a new `Float64Array` object from an `ArrayBuffer` object.
   * @param buffer @zh `ArrayBuffer` 对象。 @en The `ArrayBuffer` object.
   * @param byteOffset @zh `buffer` 中的字节偏移量。 @en The byte offset in the `buffer`.
   * @param length @zh 要创建的数组的长度。 @en The length of the array to create.
   */
  new (
    buffer: ArrayBufferLike,
    byteOffset: number,
    length?: number
  ): Float64Array;

  /**
   * @zh
   * 数组中每个元素的字节大小。
   * @en
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * @zh
   * 从一组元素返回一个新数组。
   * @en
   * Returns a new array from a set of elements.
   * @param items @zh 要包含在新数组对象中的一组元素。 @en A set of elements to include in the new array object.
   */
  of(...items: number[]): Float64Array;

  /**
   * @zh
   * 从类数组或可迭代对象创建一个数组。
   * @en
   * Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float64Array;

  /**
   * @zh
   * 从类数组或可迭代对象创建一个数组。
   * @en
   * Creates an array from an array-like or iterable object.
   * @param arrayLike @zh 要转换为数组的类数组或可迭代对象。 @en An array-like or iterable object to convert to an array.
   * @param mapfn @zh 对数组的每个元素调用的映射函数。 @en A mapping function to call on every element of the array.
   * @param thisArg @zh 用于调用 mapfn 的 'this' 的值。 @en Value of 'this' used to invoke the mapfn.
   */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Float64Array;
}
/**
 * @zh
 * Float64Array 构造函数。
 * @en
 * Float64Array constructor.
 */
declare var Float64Array: Float64ArrayConstructor;

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////

declare namespace Intl {
  /**
   * @zh
   * 为 `Intl.Collator` 对象提供配置选项的接口。
   * @en
   * An interface that provides configuration options for `Intl.Collator` objects.
   */
  interface CollatorOptions {
    /**
     * @zh
     * 指定是用于排序还是搜索。
     * @en
     * Specifies whether it's for sorting or searching.
     */
    usage?: string;
    /**
     * @zh
     * 要使用的区域匹配算法。
     * @en
     * The locale matching algorithm to use.
     */
    localeMatcher?: string;
    /**
     * @zh
     * 是否应使用数字排序。
     * @en
     * Whether numeric sorting should be used.
     */
    numeric?: boolean;
    /**
     * @zh
     * 指定大写字母和小写字母的排序方式。
     * @en
     * Specifies how upper and lower case letters should be sorted.
     */
    caseFirst?: string;
    /**
     * @zh
     * 指定比较的灵敏度级别。
     * @en
     * Specifies the level of sensitivity for comparison.
     */
    sensitivity?: string;
    /**
     * @zh
     * 是否应在比较中忽略标点符号。
     * @en
     * Whether punctuation should be ignored in comparison.
     */
    ignorePunctuation?: boolean;
  }

  /**
   * @zh
   * 一个接口，表示由 `Intl.Collator` 对象的 `resolvedOptions` 方法返回的已解析选项。
   * @en
   * An interface that represents the resolved options returned by the `resolvedOptions` method of an `Intl.Collator` object.
   */
  interface ResolvedCollatorOptions {
    /**
     * @zh
     * 实际使用的区域设置。
     * @en
     * The locale actually used.
     */
    locale: string;
    /**
     * @zh
     * 实际使用的用法（排序或搜索）。
     * @en
     * The usage actually used (sorting or searching).
     */
    usage: string;
    /**
     * @zh
     * 实际使用的灵敏度级别。
     * @en
     * The sensitivity level actually used.
     */
    sensitivity: string;
    /**
     * @zh
     * 是否忽略标点符号的实际设置。
     * @en
     * The actual setting for whether to ignore punctuation.
     */
    ignorePunctuation: boolean;
    /**
     * @zh
     * 实际使用的排序规则。
     * @en
     * The collation actually used.
     */
    collation: string;
    /**
     * @zh
     * 大小写排序的实际设置。
     * @en
     * The actual setting for case-first sorting.
     */
    caseFirst: string;
    /**
     * @zh
     * 是否使用数字排序的实际设置。
     * @en
     * The actual setting for whether to use numeric sorting.
     */
    numeric: boolean;
  }

  /**
   * @zh
   * 一个接口，提供对语言敏感的字符串比较功能。
   * @en
   * An interface that provides language-sensitive string comparison.
   */
  interface Collator {
    /**
     * @zh
     * 比较两个字符串。
     * @en
     * Compares two strings.
     * @param x @zh 要比较的第一个字符串。 @en The first string to compare.
     * @param y @zh 要比较的第二个字符串。 @en The second string to compare.
     * @returns @zh 一个数字，指示 `x` 是在 `y` 之前、之后还是与 `y` 相同。
     * - 如果 `x` 在 `y` 之前，则为负数。
     * - 如果 `x` 在 `y` 之后，则为正数。
     * - 如果 `x` 和 `y` 相等，则为 0。
     * @en A number indicating whether `x` comes before, after, or is the same as `y`.
     * - A negative value if `x` comes before `y`.
     * - A positive value if `x` comes after `y`.
     * - 0 if `x` and `y` are equal.
     */
    compare(x: string, y: string): number;
    /**
     * @zh
     * 返回一个包含此 `Collator` 对象计算出的区域设置和排序规则选项的对象。
     * @en
     * Returns an object with the locale and collation options computed for this `Collator` object.
     */
    resolvedOptions(): ResolvedCollatorOptions;
  }
  /**
   * @zh
   * `Intl.Collator` 构造函数。
   * @en
   * The `Intl.Collator` constructor.
   */
  var Collator: {
    /**
     * @zh
     * 创建一个新的 `Intl.Collator` 对象。
     * @en
     * Creates a new `Intl.Collator` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `Collator` 行为的选项对象。 @en An object with options to configure the `Collator`'s behavior.
     */
    new (locales?: string | string[], options?: CollatorOptions): Collator;
    /**
     * @zh
     * 创建一个新的 `Intl.Collator` 对象。
     * @en
     * Creates a new `Intl.Collator` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `Collator` 行为的选项对象。 @en An object with options to configure the `Collator`'s behavior.
     */
    (locales?: string | string[], options?: CollatorOptions): Collator;
    /**
     * @zh
     * 返回一个包含受支持的区域设置的数组。
     * @en
     * Returns an array containing the supported locales.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置选项的对象。 @en An object with configuration options.
     */
    supportedLocalesOf(
      locales: string | string[],
      options?: CollatorOptions
    ): string[];
  };

  /**
   * @zh
   * 为 `Intl.NumberFormat` 对象提供配置选项的接口。
   * @en
   * An interface that provides configuration options for `Intl.NumberFormat` objects.
   */
  interface NumberFormatOptions {
    /**
     * @zh
     * 要使用的区域匹配算法。
     * @en
     * The locale matching algorithm to use.
     */
    localeMatcher?: string;
    /**
     * @zh
     * 格式化样式。
     * @en
     * The formatting style.
     */
    style?: string;
    /**
     * @zh
     * 在货币格式化中使用的货币。
     * @en
     * The currency to use in currency formatting.
     */
    currency?: string;
    /**
     * @zh
     * 如何显示货币格式化中的货币。
     * @en
     * How to display the currency in currency formatting.
     */
    currencyDisplay?: string;
    /**
     * @zh
     * 是否使用分组分隔符，例如千位分隔符。
     * @en
     * Whether to use grouping separators, such as thousands separators.
     */
    useGrouping?: boolean;
    /**
     * @zh
     * 要使用的最小整数位数。
     * @en
     * The minimum number of integer digits to use.
     */
    minimumIntegerDigits?: number;
    /**
     * @zh
     * 要使用的最小小数位数。
     * @en
     * The minimum number of fraction digits to use.
     */
    minimumFractionDigits?: number;
    /**
     * @zh
     * 要使用的最大小数位数。
     * @en
     * The maximum number of fraction digits to use.
     */
    maximumFractionDigits?: number;
    /**
     * @zh
     * 要使用的最小有效数字位数。
     * @en
     * The minimum number of significant digits to use.
     */
    minimumSignificantDigits?: number;
    /**
     * @zh
     * 要使用的最大有效数字位数。
     * @en
     * The maximum number of significant digits to use.
     */
    maximumSignificantDigits?: number;
  }

  /**
   * @zh
   * 一个接口，表示由 `Intl.NumberFormat` 对象的 `resolvedOptions` 方法返回的已解析选项。
   * @en
   * An interface that represents the resolved options returned by the `resolvedOptions` method of an `Intl.NumberFormat` object.
   */
  interface ResolvedNumberFormatOptions {
    /**
     * @zh
     * 实际使用的区域设置。
     * @en
     * The locale actually used.
     */
    locale: string;
    /**
     * @zh
     * 实际使用的编号系统。
     * @en
     * The numbering system actually used.
     */
    numberingSystem: string;
    /**
     * @zh
     * 实际使用的格式化样式。
     * @en
     * The formatting style actually used.
     */
    style: string;
    /**
     * @zh
     * 实际使用的货币。
     * @en
     * The currency actually used.
     */
    currency?: string;
    /**
     * @zh
     * 实际使用的货币显示方式。
     * @en
     * The currency display actually used.
     */
    currencyDisplay?: string;
    /**
     * @zh
     * 实际使用的最小整数位数。
     * @en
     * The minimum number of integer digits actually used.
     */
    minimumIntegerDigits: number;
    /**
     * @zh
     * 实际使用的最小小数位数。
     * @en
     * The minimum number of fraction digits actually used.
     */
    minimumFractionDigits: number;
    /**
     * @zh
     * 实际使用的最大小数位数。
     * @en
     * The maximum number of fraction digits actually used.
     */
    maximumFractionDigits: number;
    /**
     * @zh
     * 实际使用的最小有效数字位数。
     * @en
     * The minimum number of significant digits actually used.
     */
    minimumSignificantDigits?: number;
    /**
     * @zh
     * 实际使用的最大有效数字位数。
     * @en
     * The maximum number of significant digits actually used.
     */
    maximumSignificantDigits?: number;
    /**
     * @zh
     * 是否使用分组分隔符的实际设置。
     * @en
     * The actual setting for whether to use grouping separators.
     */
    useGrouping: boolean;
  }

  /**
   * @zh
   * 一个接口，提供对语言敏感的数字格式化功能。
   * @en
   * An interface that provides language-sensitive number formatting.
   */
  interface NumberFormat {
    /**
     * @zh
     * 格式化一个数字。
     * @en
     * Formats a number.
     * @param value @zh 要格式化的数字。 @en The number to format.
     * @returns @zh 一个表示格式化后数字的字符串。 @en A string representing the formatted number.
     */
    format(value: number): string;
    /**
     * @zh
     * 返回一个包含此 `NumberFormat` 对象计算出的区域设置和数字格式选项的对象。
     * @en
     * Returns an object with the locale and number format options computed for this `NumberFormat` object.
     */
    resolvedOptions(): ResolvedNumberFormatOptions;
  }
  /**
   * @zh
   * `Intl.NumberFormat` 构造函数。
   * @en
   * The `Intl.NumberFormat` constructor.
   */
  var NumberFormat: {
    /**
     * @zh
     * 创建一个新的 `Intl.NumberFormat` 对象。
     * @en
     * Creates a new `Intl.NumberFormat` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `NumberFormat` 行为的选项对象。 @en An object with options to configure the `NumberFormat`'s behavior.
     */
    new (
      locales?: string | string[],
      options?: NumberFormatOptions
    ): NumberFormat;
    /**
     * @zh
     * 创建一个新的 `Intl.NumberFormat` 对象。
     * @en
     * Creates a new `Intl.NumberFormat` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `NumberFormat` 行为的选项对象。 @en An object with options to configure the `NumberFormat`'s behavior.
     */
    (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
    /**
     * @zh
     * 返回一个包含受支持的区域设置的数组。
     * @en
     * Returns an array containing the supported locales.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置选项的对象。 @en An object with configuration options.
     */
    supportedLocalesOf(
      locales: string | string[],
      options?: NumberFormatOptions
    ): string[];
  };

  /**
   * @zh
   * 为 `Intl.DateTimeFormat` 对象提供配置选项的接口。
   * @en
   * An interface that provides configuration options for `Intl.DateTimeFormat` objects.
   */
  interface DateTimeFormatOptions {
    /**
     * @zh
     * 要使用的区域匹配算法。
     * @en
     * The locale matching algorithm to use.
     */
    localeMatcher?: string;
    /**
     * @zh
     * 工作日的表示方式。
     * @en
     * The representation of the weekday.
     */
    weekday?: string;
    /**
     * @zh
     * 纪元的表示方式。
     * @en
     * The representation of the era.
     */
    era?: string;
    /**
     * @zh
     * 年份的表示方式。
     * @en
     * The representation of the year.
     */
    year?: string;
    /**
     * @zh
     * 月份的表示方式。
     * @en
     * The representation of the month.
     */
    month?: string;
    /**
     * @zh
     * 日期的表示方式。
     * @en
     * The representation of the day.
     */
    day?: string;
    /**
     * @zh
     * 小时的表示方式。
     * @en
     * The representation of the hour.
     */
    hour?: string;
    /**
     * @zh
     * 分钟的表示方式。
     * @en
     * The representation of the minute.
     */
    minute?: string;
    /**
     * @zh
     * 秒的表示方式。
     * @en
     * The representation of the second.
     */
    second?: string;
    /**
     * @zh
     * 时区名称的表示方式。
     * @en
     * The representation of the time zone name.
     */
    timeZoneName?: string;
    /**
     * @zh
     * 要使用的格式匹配算法。
     * @en
     * The format matching algorithm to use.
     */
    formatMatcher?: string;
    /**
     * @zh
     * 是否使用 12 小时制。
     * @en
     * Whether to use 12-hour time.
     */
    hour12?: boolean;
    /**
     * @zh
     * 要使用的时区。
     * @en
     * The time zone to use.
     */
    timeZone?: string;
  }

  /**
   * @zh
   * 一个接口，表示由 `Intl.DateTimeFormat` 对象的 `resolvedOptions` 方法返回的已解析选项。
   * @en
   * An interface that represents the resolved options returned by the `resolvedOptions` method of an `Intl.DateTimeFormat` object.
   */
  interface ResolvedDateTimeFormatOptions {
    /**
     * @zh
     * 实际使用的区域设置。
     * @en
     * The locale actually used.
     */
    locale: string;
    /**
     * @zh
     * 实际使用的日历。
     * @en
     * The calendar actually used.
     */
    calendar: string;
    /**
     * @zh
     * 实际使用的编号系统。
     * @en
     * The numbering system actually used.
     */
    numberingSystem: string;
    /**
     * @zh
     * 实际使用的时区。
     * @en
     * The time zone actually used.
     */
    timeZone: string;
    /**
     * @zh
     * 是否使用 12 小时制的实际设置。
     * @en
     * The actual setting for whether to use 12-hour time.
     */
    hour12?: boolean;
    /**
     * @zh
     * 实际使用的工作日表示方式。
     * @en
     * The representation of the weekday actually used.
     */
    weekday?: string;
    /**
     * @zh
     * 实际使用的纪元表示方式。
     * @en
     * The representation of the era actually used.
     */
    era?: string;
    /**
     * @zh
     * 实际使用的年份表示方式。
     * @en
     * The representation of the year actually used.
     */
    year?: string;
    /**
     * @zh
     * 实际使用的月份表示方式。
     * @en
     * The representation of the month actually used.
     */
    month?: string;
    /**
     * @zh
     * 实际使用的日期表示方式。
     * @en
     * The representation of the day actually used.
     */
    day?: string;
    /**
     * @zh
     * 实际使用的小时表示方式。
     * @en
     * The representation of the hour actually used.
     */
    hour?: string;
    /**
     * @zh
     * 实际使用的分钟表示方式。
     * @en
     * The representation of the minute actually used.
     */
    minute?: string;
    /**
     * @zh
     * 实际使用的秒表示方式。
     * @en
     * The representation of the second actually used.
     */
    second?: string;
    /**
     * @zh
     * 实际使用的时区名称表示方式。
     * @en
     * The representation of the time zone name actually used.
     */
    timeZoneName?: string;
  }

  /**
   * @zh
   * 一个接口，提供对语言敏感的日期和时间格式化功能。
   * @en
   * An interface that provides language-sensitive date and time formatting.
   */
  interface DateTimeFormat {
    /**
     * @zh
     * 格式化一个日期。
     * @en
     * Formats a date.
     * @param date @zh 要格式化的日期。 @en The date to format.
     * @returns @zh 一个表示格式化后日期的字符串。 @en A string representing the formatted date.
     */
    format(date?: Date | number): string;
    /**
     * @zh
     * 返回一个包含此 `DateTimeFormat` 对象计算出的区域设置和日期/时间格式选项的对象。
     * @en
     * Returns an object with the locale and date/time format options computed for this `DateTimeFormat` object.
     */
    resolvedOptions(): ResolvedDateTimeFormatOptions;
  }
  /**
   * @zh
   * `Intl.DateTimeFormat` 构造函数。
   * @en
   * The `Intl.DateTimeFormat` constructor.
   */
  var DateTimeFormat: {
    /**
     * @zh
     * 创建一个新的 `Intl.DateTimeFormat` 对象。
     * @en
     * Creates a new `Intl.DateTimeFormat` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `DateTimeFormat` 行为的选项对象。 @en An object with options to configure the `DateTimeFormat`'s behavior.
     */
    new (
      locales?: string | string[],
      options?: DateTimeFormatOptions
    ): DateTimeFormat;
    /**
     * @zh
     * 创建一个新的 `Intl.DateTimeFormat` 对象。
     * @en
     * Creates a new `Intl.DateTimeFormat` object.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置 `DateTimeFormat` 行为的选项对象。 @en An object with options to configure the `DateTimeFormat`'s behavior.
     */
    (
      locales?: string | string[],
      options?: DateTimeFormatOptions
    ): DateTimeFormat;
    /**
     * @zh
     * 返回一个包含受支持的区域设置的数组。
     * @en
     * Returns an array containing the supported locales.
     * @param locales @zh 一个包含 BCP 47 语言标记的字符串或字符串数组。 @en A string with a BCP 47 language tag, or an array of such strings.
     * @param options @zh 一个配置选项的对象。 @en An object with configuration options.
     */
    supportedLocalesOf(
      locales: string | string[],
      options?: DateTimeFormatOptions
    ): string[];
  };
}

interface String {
  /**
   * @zh
   * 确定两个字符串在当前或指定区域设置中是否等效。
   * @en
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that @zh 要与目标字符串进行比较的字符串。 @en String to compare to target string
   * @param locales @zh 一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出，以便第一个条目是首选区域设置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。此参数必须符合 BCP 47 标准；有关详细信息，请参阅 Intl.Collator 对象。 @en A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options @zh 一个包含一个或多个指定比较选项的属性的对象。有关详细信息，请参阅 Intl.Collator 对象。 @en An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(
    that: string,
    locales?: string | string[],
    options?: Intl.CollatorOptions
  ): number;
}

interface Number {
  /**
   * @zh
   * 使用当前或指定的区域设置将数字转换为字符串。
   * @en
   * Converts a number to a string by using the current or specified locale.
   * @param locales @zh 一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出，以便第一个条目是首选区域设置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。 @en A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options @zh 一个包含一个或多个指定比较选项的属性的对象。 @en An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | string[],
    options?: Intl.NumberFormatOptions
  ): string;
}

interface Date {
  /**
   * @zh
   * 使用当前或指定的区域设置将日期和时间转换为字符串。
   * @en
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales @zh 一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出，以便第一个条目是首选区域设置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。 @en A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options @zh 一个包含一个或多个指定比较选项的属性的对象。 @en An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;
  /**
   * @zh
   * 使用当前或指定的区域设置将日期转换为字符串。
   * @en
   * Converts a date to a string by using the current or specified locale.
   * @param locales @zh 一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出，以便第一个条目是首选区域设置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。 @en A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options @zh 一个包含一个或多个指定比较选项的属性的对象。 @en An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;

  /**
   * @zh
   * 使用当前或指定的区域设置将时间转换为字符串。
   * @en
   * Converts a time to a string by using the current or specified locale.
   * @param locales @zh 一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出，以便第一个条目是首选区域设置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。 @en A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options @zh 一个包含一个或多个指定比较选项的属性的对象。 @en An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;
}
/**
 * @zh
 * 定义 GUI 元素的数据结构。
 * @en
 * Defines the data structure for a GUI element.
 */
interface GUIData {
  /**
   * @zh
   * 元素的名称或类型。
   * @en
   * The name or type of the element.
   */
  name: string;
  /**
   * @zh
   * 元素拥有的属性。
   * @en
   * The attributes of the element.
   */
  attributes?: {
    [name: string]: string | number;
  };
  /**
   * @zh
   * 子元素列表。
   * @en
   * The list of child elements.
   */
  children?: GUIData[];
}
/**
 * @zh
 * 定义 GUI 事件绑定。
 * @en
 * Defines a GUI event binding.
 */
interface GUIBind<T extends string> {
  /**
   * @zh
   * 要绑定的事件名称（例如 'click'）。
   * @en
   * The name of the event to bind (e.g., 'click').
   */
  event: string;
  /**
   * @zh
   * 用于目标元素的 CSS 选择器。
   * @en
   * The CSS selector for the target element.
   */
  selector?: string;
  /**
   * @zh
   * 事件触发时要执行的操作。
   * @en
   * The action to perform when the event is triggered.
   */
  action: T;
}
/**
 * @zh
 * 定义 GUI 绑定的具体行为。
 * @en
 * Defines the specific behavior for a GUI binding.
 */
interface GUIBindDefinition<T> {
  /**
   * @zh
   * 定义拖动行为。
   * @en
   * Defines the drag behavior.
   */
  drag: {
    /**
     * @zh
     * 将 DOM 元素的属性映射到拖动方向。
     * @en
     * Maps attributes of a DOM element to drag directions.
     */
    attributes: {
      [name: string]: "x" | "-x" | "y" | "-y";
    };
    /**
     * @zh
     * 要应用拖动效果的目标元素的 CSS 选择器。
     * @en
     * The CSS selector for the target element to apply the drag effect to.
     */
    targetSelector: string;
  };
  /**
   * @zh
   * 定义显示行为。
   * @en
   * Defines the show behavior.
   */
  show: {
    /**
     * @zh
     * 要显示的元素的名称。
     * @en
     * The name of the element to show.
     */
    name: T;
    /**
     * @zh
     * 是否允许多个实例。
     * @en
     * Whether to allow multiple instances.
     */
    allowMultiple?: boolean;
  };
  /**
   * @zh
   * 定义移除行为。
   * @en
   * Defines the remove behavior.
   */
  remove: {
    /**
     * @zh
     * 要移除的目标元素的 CSS 选择器。
     * @en
     * The CSS selector for the target element to remove.
     */
    targetSelector: string;
  };
  /**
   * @zh
   * 定义发送消息行为。
   * @en
   * Defines the send message behavior.
   */
  sendMessage: {
    /**
     * @zh
     * 要发送的消息的名称。
     * @en
     * The name of the message to send.
     */
    messageName: string;
    /**
     * @zh
     * 要发送的消息数据。
     * @en
     * The message data to send.
     */
    messageData?: string[];
  };
  /**
   * @zh
   * 定义写入剪贴板行为。
   * @en
   * Defines the clipboard write behavior.
   */
  clipboardWrite: {
    /**
     * @zh
     * 从中获取数据的目标元素的 CSS 选择器。
     * @en
     * The CSS selector for the target element to get data from.
     */
    targetSelector: string;
    /**
     * @zh
     * 要写入剪贴板的属性名称。
     * @en
     * The name of the attribute to write to the clipboard.
     */
    attributeName: string;
  };
}
/**
 * @zh
 * 一个映射类型，用于创建所有可能的绑定类型的联合。对于 `GUIBindDefinition` 中的每个键，它将通用的 `GUIBind` 与该键的特定定义相结合。
 * @en
 * A mapped type that creates a union of all possible bind types. For each key in `GUIBindDefinition`, it combines the generic `GUIBind` with the specific definition for that key.
 */
declare type GUIBindTypeMap<T> = {
  [key in keyof GUIBindDefinition<T>]: GUIBind<key> & GUIBindDefinition<T>[key];
};
/**
 * @zh
 * 定义单个 GUI 配置项。
 * @en
 * Defines a single GUI configuration item.
 */
interface GUIConfigItem<T extends string> {
  /**
   * @zh
   * 是否显示此项。
   * @en
   * Whether to display this item.
   */
  display?: boolean;
  /**
   * @zh
   * 此项的 GUI 绑定。
   * @en
   * The GUI bindings for this item.
   */
  bindings?: GUIBindTypes<T>[];
  /**
   * @zh
   * 此项的 GUI 数据。
   * @en
   * The GUI data for this item.
   */
  data: string | GUIData;
}
/**
 * @zh
 * GUI 配置项。
 * @en
 * GUI configuration item.
 */
declare type GUIConfig<T extends string, U extends T> = {
  [name in T]: GUIConfigItem<U>;
};

/**
 * @zh
 * 表示一个 JSON 值的类型。
 * @en
 * Represents the type of a JSON value.
 */
/**
 * @zh
 * 表示一个 JSON 值的类型。
 * @en
 * Represents the type of a JSON value.
 */
declare type JSONValue =
  | string
  | number
  | boolean
  | {
      [x: string]: JSONValue;
    }
  | Array<JSONValue>;

/**
 * @zh 游戏日志级别枚举。
 * @en Game log level enumeration.
 */
declare enum GameLogLevel {
  /**
   * @zh 错误级别。
   * @en Error level.
   */
  ERROR = 0,
  /**
   * @zh 警告级别。
   * @en Warning level.
   */
  WARN = 1,
  /**
   * @zh 信息级别。
   * @en Information level.
   */
  INFO = 2,
  /**
   * @zh 调试级别。
   * @en Debug level.
   */
  DEBUG = 3,
}

/**
 * @zh 定义远传错误状态类型，表示可能的错误情况。
 * @en Defines teleport error status types, representing possible error conditions.
 */
declare type TELEPORT_ERROR_STATUS =
  | "PLAYER_OFFLINE"
  | "ACCESS_DENIED"
  | "UNKNOWN";

/**
 * @zh 定义远传函数类型，包含地图ID、玩家列表和可选的服务器ID作为参数，返回Promise<TeleportResult>。
 * @en Defines teleport function type, containing map ID, player list, and optional server ID as parameters, returning Promise<TeleportResult>.
 */
declare type TeleportType = (
  mapId: string,
  players: GameEntity[],
  serverId?: (string & {}) | "public"
) => Promise<TeleportResult>;

/**
 * @zh 定义远传结果类型，包含服务器ID。
 * @en Defines teleport result type, containing server ID.
 */
declare type TeleportResult = {
  serverId: string;
};

/**
 * @zh 社交关系类型枚举。
 * @en Social relationship type enumeration.
 */
declare enum SocialType {
  /**
   * @zh 表示用户正在关注的人。
   * @en Represents people the user is following.
   */
  FOLLOWING = 0,
  /**
   * @zh 表示用户的粉丝。
   * @en Represents the user's followers.
   */
  FOLLOWERS = 1,
  /**
   * @zh 表示用户的双向关注者，即互相关注的人。
   * @en Represents the user's bidirectional followers, i.e., people who follow each other.
   */
  FRIENDS = 2,
}

/**
 * @zh 定义社交统计信息的类型。
 * @en Defines the type for social statistics information.
 */
type SocialStatisticType = {
  /**
   * @zh 表示用户关注的人数。
   * @en Represents the number of people the user is following.
   */
  followingNum: number;
  /**
   * @zh 表示用户的粉丝人数。
   * @en Represents the number of the user's followers.
   */
  followerNum: number;
  /**
   * @zh 表示用户的好友人数。
   * @en Represents the number of the user's friends.
   */
  friendsNum: number;
};

/**
 * @zh 定义游戏音效配置的接口。
 * @en Defines the interface for game sound effect configuration.
 * @zh 此接口用于标准化音效配置，确保音效在游戏中的表现一致性和可预测性。
 * @en This interface is used to standardize sound effect configuration, ensuring consistency and predictability of sound effects in the game.
 */
interface GameSoundEffectConfig {
  /**
   * @zh 音效样本的标识符，用于引用特定的音效资源。
   * @en Identifier for the sound effect sample, used to reference specific sound effect resources.
   */
  sample: GameAudioAssets | "";
  /**
   * @zh 音效生效的最大半径，超出此范围将无法听到音效。
   * @en Maximum radius for the sound effect to take effect, beyond which the sound effect cannot be heard.
   */
  radius: number;
  /**
   * @zh 音效的基础音量增益，用于控制音效的初始响度。
   * @en Base volume gain for the sound effect, used to control the initial loudness of the sound effect.
   */
  gain: number;
  /**
   * @zh 音量增益的变化范围，用于随机化音效的响度，增加真实感。
   * @en Range of volume gain variation, used to randomize the loudness of sound effects, adding realism.
   */
  gainRange: number;
  /**
   * @zh 音效的基础音高，用于控制音效的初始频率。
   * @en Base pitch for the sound effect, used to control the initial frequency of the sound effect.
   */
  pitch: number;
  /**
   * @zh 音高变化的范围，用于随机化音效的频率，增加多样性和真实感。
   * @en Range of pitch variation, used to randomize the frequency of sound effects, adding diversity and realism.
   */
  pitchRange: number;
}
/**
 * @zh 单个音效表。
 * @en Individual sound effect table.
 */
declare class GameSoundEffect implements GameSoundEffectConfig {
  /**
   * @zh 样本权重。
   * @en Sample weight.
   */
  radius: number;
  /**
   * @zh 音量增益，使声音更大。
   * @en Volume gain, making the sound louder.
   */
  gain: number;
  /**
   * @zh 音量增益的变化范围。
   * @en Range of volume gain variation.
   */
  gainRange: number;
  /**
   * @zh 音调调整倍数。
   * @en Pitch adjustment multiplier.
   * @zh * 1 : 正常
   * @en * 1 : Normal
   * @zh * < 1 : 播放速度变慢
   * @en * < 1 : Playback speed becomes slower
   * @zh * > 1 : 播放速度变快
   * @en * > 1 : Playback speed becomes faster
   */
  pitch: number;
  /**
   * @zh 音调变化范围。
   * @en Pitch variation range.
   */
  pitchRange: number;
  /**
   * @zh 样本路径。
   * @en Sample path.
   */
  sample: GameAudioAssets | "";
}
/**
 * @zh 触发器可以用于检测对象何时进入或离开某个区域。
 * @en Triggers can be used to detect when objects enter or leave a certain area.
 */
declare class GameZone {
  /**
   * @zh 列出所有实体。
   * @en Lists all entities.
   */
  entities: () => GameEntity[];

  /**
   * @zh 当实体进入区域时触发。
   * @en Triggered when an entity enters the area.
   */
  onEnter: GameEventChannel<GameTriggerEvent>;

  /**
   * @zh 获取下一个进入事件。
   * @en Gets the next enter event.
   */
  nextEnter: GameEventFuture<GameTriggerEvent>;

  /**
   * @zh 当实体离开区域时触发。
   * @en Triggered when an entity leaves the area.
   */
  onLeave: GameEventChannel<GameTriggerEvent>;

  /**
   * @zh 获取下一个离开事件。
   * @en Gets the next leave event.
   */
  nextLeave: GameEventFuture<GameTriggerEvent>;

  /**
   * @zh 销毁区域。
   * @en Destroys the area.
   */
  remove: () => void;

  /**
   * @zh 区域的边界。
   * @en The boundaries of the area.
   */
  bounds: GameBounds3;

  /**
   * @zh 选择器过滤条件。
   * @en Selector filter conditions.
   */
  selector: GameSelectorString;

  /**
   * @zh 控制对象的质量对力的影响。
   * @en Controls the effect of object mass on force.
   * @zh 0 = 行为像重力
   * @en 0 = Behaves like gravity
   * @zh 1 = 行为像风
   * @en 1 = Behaves like wind
   */
  massScale: number;

  /**
   * @zh 应用到对象上的力的大小。
   * @en The magnitude of force applied to objects.
   */
  force: GameVector3;

  /**
   * @zh 是否启用雾效果。
   * @en Whether fog effects are enabled.
   */
  fogEnabled: boolean;

  /**
   * @zh 雾的颜色。
   * @en The color of the fog.
   */
  fogColor: GameRGBColor;

  /**
   * @zh 雾开始的距离。
   * @en The distance at which fog starts.
   */
  fogStartDistance: number;

  /**
   * @zh 雾的高度偏移。
   * @en The height offset of the fog.
   */
  fogHeightOffset: number;

  /**
   * @zh 雾的高度衰减。
   * @en The height falloff of the fog.
   */
  fogHeightFalloff: number;

  /**
   * @zh 雾的密度。
   * @en The density of the fog.
   */
  fogDensity: number;

  /**
   * @zh 雾的最大值。
   * @en The maximum value of the fog.
   */
  fogMax: number;

  /**
   * @zh 是否启用雪效果。
   * @en Whether snow effects are enabled.
   */
  snowEnabled: boolean;

  /**
   * @zh 雪的密度。
   * @en The density of the snow.
   */
  snowDensity: number;

  /**
   * @zh 雪的最小尺寸。
   * @en The minimum size of the snow.
   */
  snowSizeLo: number;

  /**
   * @zh
   * 雪的最大尺寸。
   * @en
   * The maximum size of the snow.
   * @category Weather
   */
  snowSizeHi: number;

  /**
   * @zh
   * 雪的下落速度。
   * @en
   * The speed at which the snow falls.
   * @category Weather
   */
  snowFallSpeed: number;

  /**
   * @zh 雪的旋转速度。
   * @en The rotation speed of the snow.
   */
  snowSpinSpeed: number;

  /**
   * @zh 雪的颜色。
   * @en The color of the snow.
   */
  snowColor: GameRGBAColor;

  /**
   * @zh 雪的纹理。
   * @en The texture of the snow.
   */
  snowTexture: string;

  /**
   * @zh 是否启用雨效果。
   * @en Whether rain effects are enabled.
   */
  rainEnabled: boolean;

  /**
   * @zh 雨的密度。
   * @en The density of the rain.
   */
  rainDensity: number;

  /**
   * @zh 雨的方向。
   * @en The direction of the rain.
   */
  rainDirection: GameVector3;

  /**
   * @zh 雨的速度。
   * @en The speed of the rain.
   */
  rainSpeed: number;

  /**
   * @zh 雨的最小尺寸。
   * @en The minimum size of the rain.
   */
  rainSizeLo: number;

  /**
   * @zh 雨的最大尺寸。
   * @en The maximum size of the rain.
   */
  rainSizeHi: number;

  /**
   * @zh 雨的干扰程度。
   * @en The interference level of the rain.
   */
  rainInterference: number;

  /**
   * @zh 雨的颜色。
   * @en The color of the rain.
   */
  rainColor: GameRGBAColor;

  /**
   * @zh 是否启用天空效果。
   * @en Whether sky effects are enabled.
   */
  skyEnabled: boolean;

  /**
   * @zh 天空模式。
   * @en Sky mode.
   * @zh 'natural' - 自然模式
   * @en 'natural' - Natural mode
   * @zh 'manual' - 手动模式
   * @en 'manual' - Manual mode
   */
  skyMode: "natural" | "manual";

  /**
   * @zh 太阳相位。
   * @en The sun phase.
   */
  skySunPhase: number;

  /**
   * @zh 太阳频率。
   * @en The sun frequency.
   */
  skySunFrequency: number;

  /**
   * @zh 月相。
   * @en The lunar phase.
   */
  skyLunarPhase: number;

  /**
   * @zh 太阳方向。
   * @en The sun direction.
   */
  skySunDirection: GameVector3;

  /**
   * @zh 太阳光颜色。
   * @en The sunlight color.
   */
  skySunLight: GameRGBColor;

  /**
   * @zh 左侧光颜色。
   * @en The left light color.
   */
  skyLeftLight: GameRGBColor;

  /**
   * @zh 右侧光颜色。
   * @en The right light color.
   */
  skyRightLight: GameRGBColor;

  /**
   * @zh 底部光颜色。
   * @en The bottom light color.
   */
  skyBottomLight: GameRGBColor;

  /**
   * @zh 顶部光颜色。
   * @en The top light color.
   */
  skyTopLight: GameRGBColor;

  /**
   * @zh 前方光颜色。
   * @en The front light color.
   */
  skyFrontLight: GameRGBColor;

  /**
   * @zh 后方光颜色。
   * @en The back light color.
   */
  skyBackLight: GameRGBColor;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 定义游戏区域的配置对象。
 * @en Defines the configuration object for game zones.
 * @zh 包含了游戏区域内各种环境效果和物理属性的配置。
 * @en Contains configuration for various environmental effects and physical properties within the game zone.
 */
declare type GameZoneConfig = {
  /**
   * @zh 定义游戏区域的边界。
   * @en Defines the boundaries of the game zone.
   */
  bounds: GameBounds3;
  /**
   * @zh 定义游戏区域的选择器字符串，用于标识和选择游戏区域。
   * @en Defines the selector string for the game zone, used to identify and select the game zone.
   */
  selector: GameSelectorString;
  /**
   * @zh 定义物体质量的缩放因子，影响物理模拟中的质量计算。
   * @en Defines the scaling factor for object mass, affecting mass calculations in physics simulation.
   */
  massScale: number;
  /**
   * @zh 定义应用于游戏区域内的力矢量。
   * @en Defines the force vector applied within the game zone.
   */
  force: GameVector3;
  /**
   * @zh 表示是否启用雾效。
   * @en Indicates whether fog effects are enabled.
   */
  fogEnabled: boolean;
  /**
   * @zh 定义雾效的颜色。
   * @en Defines the color of the fog effect.
   */
  fogColor: GameRGBColor;
  /**
   * @zh 定义雾效的起始距离。
   * @en Defines the starting distance of the fog effect.
   */
  fogStartDistance: number;
  /**
   * @zh 定义雾效的高度偏移量。
   * @en Defines the height offset of the fog effect.
   */
  fogHeightOffset: number;
  /**
   * @zh 定义雾效的高度衰减系数。
   * @en Defines the height falloff coefficient of the fog effect.
   */
  fogHeightFalloff: number;
  /**
   * @zh 定义雾效的密度。
   * @en Defines the density of the fog effect.
   */
  fogDensity: number;
  /**
   * @zh 定义雾效的最大浓度。
   * @en Defines the maximum concentration of the fog effect.
   */
  fogMax: number;
  /**
   * @zh 表示是否启用雪效。
   * @en Indicates whether snow effects are enabled.
   */
  snowEnabled: boolean;
  /**
   * @zh 定义雪效的密度。
   * @en Defines the density of the snow effect.
   */
  snowDensity: number;
  /**
   * @zh 定义雪粒子的最小尺寸。
   * @en Defines the minimum size of snow particles.
   */
  snowSizeLo: number;
  /**
   * @zh 定义雪粒子的最大尺寸。
   * @en Defines the maximum size of snow particles.
   */
  snowSizeHi: number;
  /**
   * @zh 定义雪粒子的下落速度。
   * @en Defines the falling speed of snow particles.
   */
  snowFallSpeed: number;
  /**
   * @zh 定义雪粒子的旋转速度。
   * @en Defines the rotation speed of snow particles.
   */
  snowSpinSpeed: number;
  /**
   * @zh 定义雪效的颜色。
   * @en Defines the color of the snow effect.
   */
  snowColor: GameRGBAColor;
  /**
   * @zh 定义雪粒子的纹理贴图路径。
   * @en Defines the texture map path for snow particles.
   */
  snowTexture: string;
  /**
   * @zh 表示是否启用雨效。
   * @en Indicates whether rain effects are enabled.
   */
  rainEnabled: boolean;
  /**
   * @zh 定义雨效的密度。
   * @en Defines the density of the rain effect.
   */
  rainDensity: number;
  /**
   * @zh 定义雨效的方向矢量。
   * @en Defines the direction vector of the rain effect.
   */
  rainDirection: GameVector3;
  /**
   * @zh 定义雨效的速度。
   * @en Defines the speed of the rain effect.
   */
  rainSpeed: number;
  /**
   * @zh 定义雨粒子的最小尺寸。
   * @en Defines the minimum size of rain particles.
   */
  rainSizeLo: number;
  /**
   * @zh 定义雨粒子的最大尺寸。
   * @en Defines the maximum size of rain particles.
   */
  rainSizeHi: number;
  /**
   * @zh 定义雨效对视线或信号的干扰程度。
   * @en Defines the interference level of rain effects on vision or signals.
   */
  rainInterference: number;
  /**
   * @zh 定义雨效的颜色。
   * @en Defines the color of the rain effect.
   */
  rainColor: GameRGBAColor;
  /**
   * @zh 表示是否启用天空盒。
   * @en Indicates whether skybox is enabled.
   */
  skyEnabled: boolean;
  /**
   * @zh 定义天空盒的模式，可以是自然模式或手动模式。
   * @en Defines the skybox mode, can be natural mode or manual mode.
   */
  skyMode: "natural" | "manual";
  /**
   * @zh 定义天空盒的太阳相位，用于控制太阳的位置和光照。
   * @en Defines the sun phase of the skybox, used to control the sun's position and lighting.
   */
  skySunPhase: number;
  /**
   * @zh 定义天空盒的太阳频率，用于控制太阳光照的变化速度。
   * @en Defines the sun frequency of the skybox, used to control the rate of change of sunlight.
   */
  skySunFrequency: number;
  /**
   * @zh 定义天空盒的月相，用于控制月亮的外观。
   * @en Defines the lunar phase of the skybox, used to control the appearance of the moon.
   */
  skyLunarPhase: number;
  /**
   * @zh 定义天空盒的太阳方向矢量。
   * @en Defines the sun direction vector of the skybox.
   */
  skySunDirection: GameVector3;
  /**
   * @zh 定义天空盒的太阳光颜色。
   * @en Defines the sunlight color of the skybox.
   */
  skySunLight: GameRGBColor;
  /**
   * @zh 定义天空盒的左侧光颜色。
   * @en Defines the left light color of the skybox.
   */
  skyLeftLight: GameRGBColor;
  /**
   * @zh 定义天空盒的右侧光颜色。
   * @en Defines the right light color of the skybox.
   */
  skyRightLight: GameRGBColor;
  /**
   * @zh 定义天空盒的底部光颜色。
   * @en Defines the bottom light color of the skybox.
   */
  skyBottomLight: GameRGBColor;
  /**
   * @zh 定义天空盒的顶部光颜色。
   * @en Defines the top light color of the skybox.
   */
  skyTopLight: GameRGBColor;
  /**
   * @zh 定义天空盒的前方光颜色。
   * @en Defines the front light color of the skybox.
   */
  skyFrontLight: GameRGBColor;
  /**
   * @zh 定义天空盒的后方光颜色。
   * @en Defines the back light color of the skybox.
   */
  skyBackLight: GameRGBColor;
};
declare enum GameAnimationPlaybackState {
  PENDING = "pending",
  RUNNING = "running",
  FINISHED = "finished",
}
declare enum GameAnimationDirection {
  NORMAL = "normal",
  REVERSE = "reverse",
  WRAP = "wrap",
  WRAP_REVERSE = "wrap-reverse",
  ALTERNATE = "alternate",
  ALTERNATE_REVERSE = "alternate-reverse",
}
/**
 * @zh 游戏动画缓动类型枚举。
 * @en Game animation easing type enumeration.
 */
declare enum GameEasing {
  /**
   * @zh 无缓动。
   * @en No easing.
   */
  NONE = "none",
  /**
   * @zh 线性缓动。
   * @en Linear easing.
   */
  LINEAR = "linear",
  /**
   * @zh 二次缓动。
   * @en Quadratic easing.
   */
  QUADRATIC = "quadratic",
  /**
   * @zh 正弦缓动。
   * @en Sine easing.
   */
  SINE = "sine",
  /**
   * @zh 指数缓动。
   * @en Exponential easing.
   */
  EXP = "exp",
  /**
   * @zh 回弹缓动。
   * @en Back easing.
   */
  BACK = "back",
  /**
   * @zh 弹性缓动。
   * @en Elastic easing.
   */
  ELASTIC = "elastic",
  /**
   * @zh 弹跳缓动。
   * @en Bounce easing.
   */
  BOUNCE = "bounce",
  /**
   * @zh 圆形缓动。
   * @en Circle easing.
   */
  CIRCLE = "circle",
}
/**
 * @zh 定义游戏动画播放的配置接口。
 * @en Defines the configuration interface for game animation playback.
 * @zh 这个接口包含了动画播放的所有必要参数，用于控制动画的行为和特性。
 * @en This interface contains all necessary parameters for animation playback, used to control animation behavior and characteristics.
 */
interface GameAnimationPlaybackConfig {
  /**
   * @zh 动画开始的时间点，单位为毫秒。
   * @en The starting time point of the animation, in milliseconds.
   */
  startTick: number;
  /**
   * @zh 动画开始前的延迟时间，单位为毫秒。
   * @en The delay time before the animation starts, in milliseconds.
   */
  delay: number;
  /**
   * @zh 动画结束后的延迟时间，单位为毫秒。
   * @en The delay time after the animation ends, in milliseconds.
   */
  endDelay: number;
  /**
   * @zh 动画持续的总时间，单位为毫秒。
   * @en The total duration of the animation, in milliseconds.
   */
  duration: number;
  /**
   * @zh 动画播放的方向，可能的值包括正向、反向、交替等。
   * @en The direction of animation playback, possible values include forward, reverse, alternate, etc.
   */
  direction: GameAnimationDirection;
  /**
   * @zh 动画开始播放的位置，表示在动画周期中的一个比例。
   * @en The starting position of animation playback, representing a proportion within the animation cycle.
   */
  iterationStart: number;
  /**
   * @zh 动画重复播放的次数，无限重复时可以设置为特定值（例如Infinity）。
   * @en The number of times the animation repeats, can be set to a specific value (e.g., Infinity) for infinite repetition.
   */
  iterations: number;
}
/**
 * @zh 游戏动画类，用于控制和管理动画播放。
 * @en Game animation class for controlling and managing animation playback.
 */
declare class GameAnimation<KeyframeType, TargetType> {
  /**
   * @zh 动画目标对象（可能是世界、玩家或实体）。
   * @en Animation target object (could be world, player, or entity).
   */
  target: TargetType;

  /**
   * @zh 返回所有动画关键帧。
   * @en Returns all animation keyframes.
   */
  keyframes: () => Partial<KeyframeType>[];

  /**
   * @zh 开始或重新开始播放动画。
   * @en Starts or restarts animation playback.
   * @param playback 可选参数，包含动画播放配置的部分属性
   */
  play: (playback?: Partial<GameAnimationPlaybackConfig>) => void;

  /**
   * @zh 取消当前动画播放。
   * @en Cancels the current animation playback.
   */
  cancel: () => void;

  /**
   * @zh 当动画开始时触发。
   * @en Triggered when the animation starts.
   */
  onReady: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * @zh 获取下一个动画准备完成的事件。
   * @en Gets the next animation ready event.
   */
  nextReady: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * @zh 当动画成功完成时触发。
   * @en Triggered when the animation completes successfully.
   */
  onFinish: GameEventChannel<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * @zh 获取下一个动画完成的事件。
   * @en Gets the next animation finish event.
   */
  nextFinish: GameEventFuture<GameAnimationEvent<KeyframeType, TargetType>>;

  /**
   * @zh 动画的当前播放时间（以动画帧为单位）。
   * @en The current playback time of the animation (in animation frames).
   */
  currentTime: number;

  /**
   * 动画的开始刻度
   */
  startTime: number;

  /**
   * 动画的当前播放状态
   */
  playState: GameAnimationPlaybackState;

  /**
   * 播放速率（每刻度的帧数）
   */
  playbackRate: number;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
  then<T>(
    resolve: (event: GameAnimationEvent<KeyframeType, TargetType>) => T,
    reject?: (error: any) => any
  ): any;
}
/**
 * @zh
 * 定义游戏世界的关键帧接口，用于描述游戏环境中各种效果和状态的动画变化。
 * @en
 * Defines the interface for a game world keyframe, used to describe animated changes in various effects and states in the game environment.
 */
interface GameWorldKeyframe {
  /**
   * @zh 关键帧持续时间，单位为毫秒。
   * @en The duration of the keyframe in milliseconds.
   */
  duration: number;
  /**
   * @zh 加速曲线类型，用于控制关键帧开始时的变化速度。
   * @en The easing curve type for acceleration, controlling the rate of change at the start of the keyframe.
   */
  easeIn: GameEasing;
  /**
   * @zh 减速曲线类型，用于控制关键帧结束时的变化速度。
   * @en The easing curve type for deceleration, controlling the rate of change at the end of the keyframe.
   */
  easeOut: GameEasing;
  /**
   * @zh 雾效颜色，使用RGB格式。
   * @en The fog color in RGB format.
   */
  fogColor: GameRGBColor;
  /**
   * @zh 雾效起始距离，单位为米。
   * @en The starting distance of the fog in meters.
   */
  fogStartDistance: number;
  /**
   * @zh 雾效高度偏移量，用于调整雾效的垂直位置。
   * @en The height offset of the fog, used to adjust its vertical position.
   */
  fogHeightOffset: number;
  /**
   * @zh 雾效高度衰减系数，用于控制雾效随高度减少的速度。
   * @en The fog height falloff factor, controlling how quickly the fog diminishes with height.
   */
  fogHeightFalloff: number;
  /**
   * @zh 统一雾效密度，用于控制雾效的浓密程度。
   * @en The uniform fog density, controlling the thickness of the fog.
   */
  fogUniformDensity: number;
  /**
   * @zh 最大雾效强度，用于限制雾效的最大可见度。
   * @en The maximum fog intensity, limiting the maximum visibility of the fog.
   */
  maxFog: number;
  /**
   * @zh 光照模式，可以是 'natural' (自然) 或 'manual' (手动)。
   * @en The lighting mode, can be 'natural' or 'manual'.
   */
  lightMode: "natural" | "manual";
  /**
   * @zh 太阳相位，用于控制太阳的位置和光照。
   * @en The sun phase, used to control the position and lighting of the sun.
   */
  sunPhase: number;
  /**
   * @zh 太阳频率，用于控制太阳光照的变化速度。
   * @en The sun frequency, controlling the speed of change in sunlight.
   */
  sunFrequency: number;
  /**
   * @zh 月相，用于控制月亮的光照效果。
   * @en The lunar phase, used to control the lighting effects of the moon.
   */
  lunarPhase: number;
  /**
   * @zh 太阳方向，使用三维向量表示。
   * @en The direction of the sun, represented by a 3D vector.
   */
  sunDirection: GameVector3;
  /**
   * @zh 太阳光照颜色，使用RGB格式。
   * @en The color of the sunlight in RGB format.
   */
  sunLight: GameRGBColor;
  /**
   * @zh 左侧天空光照颜色。
   * @en The sky light color from the left.
   */
  skyLeftLight: GameRGBColor;
  /**
   * @zh 右侧天空光照颜色。
   * @en The sky light color from the right.
   */
  skyRightLight: GameRGBColor;
  /**
   * @zh 底部天空光照颜色。
   * @en The sky light color from the bottom.
   */
  skyBottomLight: GameRGBColor;
  /**
   * @zh 顶部天空光照颜色。
   * @en The sky light color from the top.
   */
  skyTopLight: GameRGBColor;
  /**
   * @zh 前方天空光照颜色。
   * @en The sky light color from the front.
   */
  skyFrontLight: GameRGBColor;
  /**
   * @zh 后方天空光照颜色。
   * @en The sky light color from the back.
   */
  skyBackLight: GameRGBColor;
  /**
   * @zh 雨密度，用于控制雨效的浓密程度。
   * @en The rain density, controlling the thickness of the rain effect.
   */
  rainDensity: number;
  /**
   * @zh 雨方向，使用三维向量表示。
   * @en The direction of the rain, represented by a 3D vector.
   */
  rainDirection: GameVector3;
  /**
   * @zh 雨速，单位为米/秒。
   * @en The speed of the rain in meters per second.
   */
  rainSpeed: number;
  /**
   * @zh 小雨滴大小，单位为米。
   * @en The size of small raindrops in meters.
   */
  rainSizeLo: number;
  /**
   * @zh 大雨滴大小，单位为米。
   * @en The size of large raindrops in meters.
   */
  rainSizeHi: number;
  /**
   * @zh 雨干扰程度，用于控制雨滴的随机偏移。
   * @en The rain interference level, controlling the random offset of raindrops.
   */
  rainInterference: number;
  /**
   * @zh 雨色，使用RGBA格式，支持透明度。
   * @en The color of the rain in RGBA format, with transparency support.
   */
  rainColor: GameRGBAColor;
  /**
   * @zh 雪密度，用于控制雪效的浓密程度。
   * @en The snow density, controlling the thickness of the snow effect.
   */
  snowDensity: number;
  /**
   * @zh 小雪片大小，单位为米。
   * @en The size of small snowflakes in meters.
   */
  snowSizeLo: number;
  /**
   * @zh 大雪片大小，单位为米。
   * @en The size of large snowflakes in meters.
   */
  snowSizeHi: number;
  /**
   * @zh 雪片下落速度，单位为米/秒。
   * @en The falling speed of snowflakes in meters per second.
   */
  snowFallSpeed: number;
  /**
   * @zh 雪片旋转速度，用于控制雪片的旋转动画。
   * @en The spin speed of snowflakes, controlling their rotation animation.
   */
  snowSpinSpeed: number;
  /**
   * @zh 雪色，使用RGBA格式，支持透明度。
   * @en The color of the snow in RGBA format, with transparency support.
   */
  snowColor: GameRGBAColor;
  /**
   * @zh 雪纹理，使用字符串表示雪片的纹理资源。
   * @en The snow texture, represented by a string for the snowflake texture resource.
   */
  snowTexture: string;
  /**
   * @zh 重力加速度，用于控制物体下落速度。
   * @en The gravitational acceleration, controlling the falling speed of objects.
   */
  gravity: number;
  /**
   * @zh 空气摩擦系数，用于控制物体在空气中移动时的阻力。
   * @en The air friction coefficient, controlling the resistance for objects moving through the air.
   */
  airFriction: number;
}

/**
 * @zh
 * 定义声音类，用于控制声音的播放。
 * @en
 * Defines the Sound class, used to control sound playback.
 */
declare class Sound {
  /**
   * @zh
   * 恢复播放。
   * @en
   * Resumes playback.
   * @param currentTime
   * @zh 可选参数，指定从哪个时间点开始恢复播放。如果不提供，则从上次暂停处继续。
   * @en Optional parameter, specifies the time point from which to resume playback. If not provided, playback continues from where it was last paused.
   */
  resume: (currentTime?: number) => void;

  /**
   * @zh
   * 设置当前播放时间，允许精确控制播放进度。
   * @en
   * Sets the current playback time, allowing for precise control over the playback progress.
   * @param currentTime
   * @zh 必需参数，指定要跳转到的播放时间点。
   * @en Required parameter, specifies the time point to jump to.
   */
  setCurrentTime: (currentTime: number) => void;

  /**
   * @zh
   * 暂停当前播放。
   * @en
   * Pauses the current playback.
   */
  pause: () => void;

  /**
   * @zh
   * 停止当前播放，并将播放进度重置到初始状态。
   * @en
   * Stops the current playback and resets the playback progress to the initial state.
   */
  stop: () => void;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh
 * {@link GameWorld} 是引擎 API 的主要入口点。使用此对象可以控制场景的全局属性，如天气、一天中的时间等，并对存在于世界中的所有 {@link GameEntity} 进行搜索。
 * @en
 * The {@link GameWorld} is the main entry point for the engine API. Use this object to control global properties of the scene, such as weather, time of day, etc., and to search for all {@link GameEntity}s that exist in the world.
 */
declare class GameWorld {
  /**
   * @zh 当前运行世界的公共 URL。
   * @en The public URL of the currently running world.
   */
  url: URL;

  /**
   * @zh
   * 返回脚本当前还可以创建的实体数量配额。
   * @en
   * Returns the remaining number of entities that the script is allowed to create.
   * @category Entities
   */
  entityQuota: () => number;

  /**
   * @zh
   * 当玩家重生时触发的事件。
   * @en
   * Event triggered when a player respawns.
   * @category Health
   */
  onRespawn: GameEventChannel<GameRespawnEvent>;

  /**
   * @zh
   * 等待下一次玩家重生事件。
   * @en
   * Waits for the next player respawn event.
   */
  nextRespawn: GameEventFuture<GameRespawnEvent>;

  /**
   * @zh
   * 创建一个新的 {@link GameEntity} 或复制一个现有实体。
   * 如果超出实体配额，则返回 `null`。
   * @en
   * Creates a new {@link GameEntity} or duplicates an existing one.
   * Returns `null` if the entity quota is exceeded.
   * @param config
   * @zh
   * 实体的初始值集或要复制的新实体。
   * @en
   * A set of initial values for the entity or the new entity to be duplicated.
   * @returns
   * @zh
   * 具有给定参数的新创建的实体。
   * @en
   * The newly created entity with the given parameters.
   * @category Entities
   */
  createEntity: (config: Partial<GameEntityConfig>) => GameEntity | null;

  /**
   * @zh
   * 使用类似于 jQuery 选择器的语法搜索游戏中的实体，并返回匹配的第一个实体。
   * 更多示例参见 {@link GameSelectorString}。
   * @en
   * Searches for entities in the game using a syntax similar to jQuery selectors and returns the first matching entity.
   * For more examples, see {@link GameSelectorString}.
   *
   * @param selector
   * @zh 选择器搜索模式。
   * @en The selector search pattern.
   * @returns
   * @zh 匹配选择器的第一个实体，如果找不到则返回 `null`。
   * @en The first entity that matches the selector, or `null` if not found.
   * @category Entities
   */
  querySelector: (selector: GameSelectorString) => GameEntity | null;

  /**
   * @zh
   * 使用类似于 jQuery 选择器的语法搜索游戏中的实体，并返回所有匹配的实体。
   * 更多示例参见 {@link GameSelectorString}。
   * @en
   * Searches for entities in the game using a syntax similar to jQuery selectors and returns all matching entities.
   * For more examples, see {@link GameSelectorString}.
   *
   * @param selector
   * @zh 选择器搜索模式。
   * @en The selector search pattern.
   * @returns
   * @zh 所有匹配选择器的实体数组。
   * @en An array of all entities that match the selector.
   * @category Entities
   */
  querySelectorAll(selector: "player"): GamePlayerEntity[];
  querySelectorAll(selector: GameSelectorString): GameEntity[];

  /**
   * @zh
   * 测试给定实体是否匹配选择器模式。
   * @en
   * Tests if a given entity matches a selector pattern.
   *
   * @param selector
   * @zh 要测试的选择器模式。
   * @en The selector pattern to test.
   * @param entity
   * @zh 要测试的实体。
   * @en The entity to test.
   * @returns
   * @zh 如果实体匹配选择器，则返回 `true`，否则返回 `false`。
   * @en Returns `true` if the entity matches the selector, otherwise `false`.
   * @category Entities
   */
  testSelector: (selector: GameSelectorString, entity: GameEntity) => boolean;

  /**
   * @zh
   * 禁用所有匹配 aSelector 和 bSelector 的实体之间的碰撞。
   * @en
   * Disables collisions between all entities matching aSelector and bSelector.
   *
   * @param aSelector
   * @zh 第一组实体的选择器。
   * @en The selector for the first group of entities.
   * @param bSelector
   * @zh 第二组实体的选择器。
   * @en The selector for the second group of entities.
   * @category Physics
   */
  addCollisionFilter: (
    aSelector: GameSelectorString,
    bSelector: GameSelectorString
  ) => void;

  /**
   * @zh
   * 移除 aSelector 和 bSelector 之间的碰撞过滤器。
   * @en
   * Removes the collision filter between aSelector and bSelector.
   *
   * @param aSelector
   * @zh 第一组实体的选择器。
   * @en The selector for the first group of entities.
   * @param bSelector
   * @zh 第二组实体的选择器。
   * @en The selector for the second group of entities.
   * @category Physics
   */
  removeCollisionFilter: (
    aSelector: GameSelectorString,
    bSelector: GameSelectorString
  ) => void;

  /**
   * @zh
   * 清除所有已设置的碰撞过滤器。
   * @en
   * Clears all configured collision filters.
   *
   * @category Physics
   */
  clearCollisionFilters: () => void;

  /**
   * @zh
   * 返回当前所有活动的碰撞过滤器列表。
   * @en
   * Returns a list of all currently active collision filters.
   *
   * @returns
   * @zh
   * 所有当前活动的碰撞过滤器。
   * @en
   * All currently active collision filters.
   * @category Physics
   */
  collisionFilters: () => string[][];

  /**
   * @zh
   * 从 `origin` 沿 `direction` 投射一条光线，并返回第一个命中的结果。
   * @en
   * Casts a ray from `origin` along `direction` and returns the first hit result.
   * @param origin
   * @zh 光线的起点。
   * @en The starting point of the ray.
   * @param direction
   * @zh 光线的方向。
   * @en The direction of the ray.
   * @param options
   * @zh 可选的配置参数。
   * @en Optional configuration parameters.
   * @returns
   * @zh 关于光线投射结果的信息。
   * @en Information about the raycast result.
   * @category Search
   */
  raycast: (
    origin: GameVector3,
    direction: GameVector3,
    options?: Partial<GameRaycastOptions>
  ) => GameRaycastResult;

  /**
   * @zh
   * 搜索并返回所有包含在指定边界框内的实体。
   * @en
   * Searches for and returns all entities contained within the specified bounding box.
   * @param bounds
   * @zh 要搜索的边界框。
   * @en The bounding box to search within.
   * @returns
   * @zh 所有完全包含在 `bounds` 内的实体数组。
   * @en An array of all entities fully contained within `bounds`.
   * @category Search
   */
  searchBox: (bounds: GameBounds3) => GameEntity[];

  /**
   * @zh
   * 在世界对象上播放一个基于关键帧的动画。
   * @en
   * Plays a keyframe-based animation on the world object.
   * @param keyframes
   * @zh
   * 定义动画行为的关键帧数组。
   * @en
   * An array of keyframes that define the animation's behavior.
   * @param playbackInfo
   * @zh
   * 动画的播放配置选项。
   * @en
   * Playback configuration options for the animation.
   * @returns
   * @zh
   * 返回一个 {@link GameAnimation} 对象，用于控制动画的播放。
   * @en
   * Returns a {@link GameAnimation} object to control the animation's playback.
   * @category Animation
   */
  animate: (
    keyframes: Partial<GameWorldKeyframe>[],
    playbackInfo?: Partial<GameAnimationPlaybackConfig>
  ) => GameAnimation<GameWorldKeyframe, GameWorld>;

  /**
   * @zh
   * 获取当前在世界对象上播放的所有动画。
   * @en
   * Gets all animations currently playing on the world object.
   * @returns
   * @zh
   * 一个包含所有世界动画的 {@link GameAnimation} 数组。
   * @en
   * An array of {@link GameAnimation} objects for all world animations.
   * @category Animation
   */
  getAnimations: () => GameAnimation<GameWorldKeyframe, GameWorld>[];

  /**
   * @zh
   * 获取当前在所有实体上播放的动画。
   * @en
   * Gets all animations currently playing on any entity.
   * @returns
   * @zh
   * 一个包含所有实体动画的 {@link GameAnimation} 数组。
   * @en
   * An array of {@link GameAnimation} objects for all entity animations.
   * @category Animation
   */
  getEntityAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[];

  /**
   * @zh
   * 获取当前在所有玩家上播放的动画。
   * @en
   * Gets all animations currently playing on any player.
   * @returns
   * @zh
   * 一个包含所有玩家动画的 {@link GameAnimation} 数组。
   * @en
   * An array of {@link GameAnimation} objects for all player animations.
   * @category Animation
   */
  getPlayerAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[];

  /**
   * @zh
   * 每个游戏 tick 触发的事件。一个 tick 是一个游戏世界更新周期。
   * @en
   * Event fired on every game tick. A tick is a single update cycle of the game world.
   * @category Tick
   */
  onTick: GameEventChannel<GameTickEvent>;

  /**
   * @zh
   * 等待下一个游戏 tick 事件。
   * @en
   * Waits for the next game tick event.
   * @category Tick
   */
  nextTick: GameEventFuture<GameTickEvent>;

  /**
   * @zh
   * 当任何实体受到伤害时触发的事件。
   * @en
   * Event fired when any entity takes damage.
   * @category Health
   */
  onTakeDamage: GameEventChannel<GameDamageEvent>;

  /**
   * @zh
   * 等待下一个实体受到伤害事件。
   * @en
   * Waits for the next entity take damage event.
   * @category Health
   */
  nextTakeDamage: GameEventFuture<GameDamageEvent>;

  /**
   * @zh
   * 当任何实体死亡时触发的事件。
   * @en
   * Event fired when any entity dies.
   * @category Health
   */
  onDie: GameEventChannel<GameDieEvent>;

  /**
   * @zh
   * 等待下一个实体死亡事件。
   * @en
   * Waits for the next entity die event.
   * @category Health
   */
  nextDie: GameEventFuture<GameDieEvent>;

  /**
   * @zh
   * 当有新玩家加入游戏时触发的事件。
   * @en
   * Event fired when a new player joins the game.
   * @category Player
   */
  onPlayerJoin: GameEventChannel<GamePlayerEntityEvent>;

  /**
   * @zh
   * 等待下一个玩家加入事件。
   * @en
   * Waits for the next player join event.
   * @category Player
   */
  nextPlayerJoin: GameEventFuture<GamePlayerEntityEvent>;

  /**
   * @zh
   * 当有玩家离开游戏时触发的事件。
   * @en
   * Event fired when a player leaves the game.
   * @category Player
   */
  onPlayerLeave: GameEventChannel<GamePlayerEntityEvent>;

  /**
   * @zh
   * 等待下一个玩家离开事件。
   * @en
   * Waits for the next player leave event.
   * @category Player
   */
  nextPlayerLeave: GameEventFuture<GamePlayerEntityEvent>;

  /**
   * @zh
   * 当世界中创建新实体时触发的事件。
   * @en
   * Event fired when a new entity is created in the world.
   * @category Entity
   */
  onEntityCreate: GameEventChannel<GameEntityEvent>;

  /**
   * @zh
   * 等待下一个实体创建事件。
   * @en
   * Waits for the next entity create event.
   * @category Entity
   */
  nextEntityCreate: GameEventFuture<GameEntityEvent>;

  /**
   * @zh
   * 当世界中的实体被销毁时触发的事件。
   * @en
   * Event fired when an entity in the world is destroyed.
   * @category Entity
   */
  onEntityDestroy: GameEventChannel<GameEntityEvent>;

  /**
   * @zh
   * 等待下一个实体销毁事件。
   * @en
   * Waits for the next entity destroy event.
   * @category Entity
   */
  nextEntityDestroy: GameEventFuture<GameEntityEvent>;

  /**
   * @zh
   * 向所有玩家广播一条消息。
   * @en
   * Broadcasts a message to all players.
   * @param message
   * @zh 要广播的文本消息。
   * @en The text message to broadcast.
   * @category Player
   */
  say: (message: string) => void;

  /**
   * @zh
   * 当任何玩家在聊天中发言时触发的事件。
   * @en
   * Event fired when any player speaks in the chat.
   * @category Player
   */
  onChat: GameEventChannel<GameChatEvent>;

  /**
   * @zh
   * 等待下一个聊天事件。
   * @en
   * Waits for the next chat event.
   * @category Player
   */
  nextChat: GameEventFuture<GameChatEvent>;

  /**
   * @zh
   * 当玩家点击一个实体或体素时触发的事件。
   * @en
   * Event fired when a player clicks on an entity or voxel.
   * @category Player
   */
  onClick: GameEventChannel<GameClickEvent>;

  /**
   * @zh
   * 等待下一个点击事件。
   * @en
   * Waits for the next click event.
   * @category Player
   */
  nextClick: GameEventFuture<GameClickEvent>;

  /**
   * @zh
   * 当玩家按下已绑定的输入按钮时触发的事件。
   * @en
   * Event fired when a player presses a bound input button.
   * @category Player
   */
  onPress: GameEventChannel<GameInputEvent>;

  /**
   * @zh
   * 等待下一个按钮按下事件。
   * @en
   * Waits for the next button press event.
   * @category Player
   */
  nextPress: GameEventFuture<GameInputEvent>;

  /**
   * @zh
   * 当玩家释放已绑定的输入按钮时触发的事件。
   * @en
   * Event fired when a player releases a bound input button.
   * @category Player
   */
  onRelease: GameEventChannel<GameInputEvent>;

  /**
   * @zh
   * 等待下一个按钮释放事件。
   * @en
   * Waits for the next button release event.
   * @category Player
   */
  nextRelease: GameEventFuture<GameInputEvent>;

  /**
   * @zh
   * 当两个实体开始接触时触发的事件。
   * @en
   * Event fired when two entities start contacting each other.
   * @category Entity
   */
  onEntityContact: GameEventChannel<GameEntityContactEvent>;

  /**
   * @zh
   * 等待下一个实体接触事件。
   * @en
   * Waits for the next entity contact event.
   * @category Entity
   */
  nextEntityContact: GameEventFuture<GameEntityContactEvent>;

  /**
   * @zh
   * 当两个实体停止接触时触发的事件。
   * @en
   * Event fired when two entities stop contacting each other.
   * @category Entity
   */
  onEntitySeparate: GameEventChannel<GameEntityContactEvent>;

  /**
   * @zh
   * 等待下一个实体分离事件。
   * @en
   * Waits for the next entity separate event.
   * @category Entity
   */
  nextEntitySeparate: GameEventFuture<GameEntityContactEvent>;

  /**
   * @zh
   * 当一个实体开始接触一个体素（方块）时触发的事件。
   * @en
   * Event fired when an entity starts contacting a voxel (block).
   * @category Entity
   */
  onVoxelContact: GameEventChannel<GameVoxelContactEvent>;

  /**
   * @zh
   * 等待下一个实体接触体素事件。
   * @en
   * Waits for the next entity-voxel contact event.
   * @category Entity
   */
  nextVoxelContact: GameEventFuture<GameVoxelContactEvent>;

  /**
   * @zh
   * 当一个实体停止接触一个体素（方块）时触发的事件。
   * @en
   * Event fired when an entity stops contacting a voxel (block).
   * @category Entity
   */
  onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>;

  /**
   * @zh
   * 等待下一个实体与体素分离的事件。
   * @en
   * Waits for the next event where an entity separates from a voxel.
   * @category Entity
   */
  nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>;

  /**
   * @zh
   * 当一个实体进入流体时触发的事件。
   * @en
   * Event fired when an entity enters a fluid.
   * @category Entity
   */
  onFluidEnter: GameEventChannel<GameFluidContactEvent>;

  /**
   * @zh
   * 等待下一个实体进入流体的事件。
   * @en
   * Waits for the next event of an entity entering a fluid.
   * @category Entity
   */
  nextFluidEnter: GameEventFuture<GameFluidContactEvent>;

  /**
   * @zh
   * 当一个实体离开流体时触发的事件。
   * @en
   * Event fired when an entity leaves a fluid.
   * @category Entity
   */
  onFluidLeave: GameEventChannel<GameFluidContactEvent>;

  /**
   * @zh
   * 等待下一个实体离开流体的事件。
   * @en
   * Waits for the next event of an entity leaving a fluid.
   * @category Entity
   */
  nextFluidLeave: GameEventFuture<GameFluidContactEvent>;

  /**
   * @zh
   * 获取世界中所有区域的列表。
   * @en
   * Gets a list of all zones in the world.
   * @returns
   * @zh 一个包含所有 {@link GameZone} 对象的数组。
   * @en An array of all {@link GameZone} objects.
   * @category Zone
   */
  zones: () => GameZone[];

  /**
   * @zh
   * 在世界中创建一个新的区域。
   * @en
   * Creates a new zone in the world.
   * @param config
   * @zh 用于配置新区域的 {@link GameZoneConfig} 对象。
   * @en The {@link GameZoneConfig} object to configure the new zone.
   * @returns
   * @zh 新创建的 {@link GameZone} 对象。
   * @en The newly created {@link GameZone} object.
   * @category Zone
   */
  addZone: (config: Partial<GameZoneConfig>) => GameZone;

  /**
   * @zh
   * 从世界中移除一个区域。
   * @en
   * Removes a zone from the world.
   * @param trigger
   * @zh 要移除的 {@link GameZone} 对象。
   * @en The {@link GameZone} object to remove.
   * @category Zone
   */
  removeZone: (trigger: GameZone) => void;

  /**
   * @zh
   * 当玩家与实体或UI元素互动时触发的事件。
   * @en
   * Event fired when a player interacts with an entity or UI element.
   * @category Interaction
   */
  onInteract: GameEventChannel<GameInteractEvent>;

  /**
   * @zh
   * 等待下一个互动事件。
   * @en
   * Waits for the next interaction event.
   * @category Interaction
   */
  nextInteract: GameEventFuture<GameInteractEvent>;

  /**
   * @zh
   * 当玩家成功完成一次购买时触发的事件。
   * @en
   * Event fired when a player successfully completes a purchase.
   * @category Player
   */
  onPlayerPurchaseSuccess: GameEventChannel<GamePurchaseSuccessEvent>;

  /**
   * @zh
   * 等待下一个玩家成功购买事件。
   * @en
   * Waits for the next successful player purchase event.
   * @category Player
   */
  nextPlayerPurchaseSuccess: GameEventFuture<GamePurchaseSuccessEvent>;

  /**
   * @zh
   * 在指定位置播放一个声音效果。
   * @en
   * Plays a sound effect at a specified location.
   * @param spec
   * @zh
   * 声音效果配置。
   * @en
   * Sound effect configuration.
   * @returns
   * @zh
   * 返回一个 {@link Sound} 对象，用于控制声音的播放。
   * @en
   * Returns a {@link Sound} object to control the sound's playback.
   * @category Sound
   */
  sound: (
    spec:
      | {
          /**
           * @zh
           * 音频样本的名称。
           * @en
           * The name of the audio sample.
           */
          sample: string;
          /**
           * @zh
           * 声音的播放位置。
           * @en
           * The position where the sound is played.
           */
          position?: GameVector3;
          /**
           * @zh
           * 声音的播放半径。
           * @en
           * The radius of the sound.
           */
          radius?: number;
          /**
           * @zh
           * 声音的音量。
           * @en
           * The volume of the sound.
           */
          gain?: number;
          /**
           * @zh
           * 声音的音调。
           * @en
           * The pitch of the sound.
           */
          pitch?: number;
        }
      | GameAudioAssets
      | ""
  ) => Sound;

  /**
   * @zh
   * 提供将玩家传送到同一地图组内其他地图的能力。
   * @en
   * Provides the ability to teleport the player to other maps within the same map group.
   * @type {TeleportType}
   * @category Player
   */
  teleport: TeleportType;
  /**
   * @zh
   * 创建一个临时聊天频道。
   * @en
   * Creates a temporary chat channel.
   * @param userIds
   * @zh
   * 频道中初始用户的 ID 列表。
   * @en
   * An array of user IDs to initially include in the channel.
   * @returns
   * @zh
   * 返回一个 Promise，解析为新创建的聊天频道的 ID。
   * @en
   * A Promise that resolves with the ID of the newly created chat channel.
   * @category Chat
   */
  createTempChat: (userIds?: string[]) => Promise<string>;
  /**
   * @zh
   * 销毁一个或多个临时聊天频道。
   * @en
   * Destroys one or more temporary chat channels.
   * @param chatIds
   * @zh
   * 要销毁的聊天频道的 ID 列表。
   * @en
   * An array of chat channel IDs to destroy.
   * @returns
   * @zh
   * 返回一个 Promise，解析为已成功销毁的聊天频道的 ID 列表。
   * @en
   * A Promise that resolves with an array of chat channel IDs that were successfully destroyed.
   * @category Chat
   */
  destroyTempChat: (chatIds: string[]) => Promise<string[]>;
  /**
   * @zh
   * 将一个或多个用户添加到一个特定的临时聊天频道。
   * @en
   * Adds one or more users to a specific temporary chat channel.
   * @param chatId
   * @zh
   * 目标聊天频道的 ID。
   * @en
   * The ID of the target chat channel.
   * @param userIds
   * @zh
   * 要添加的用户的 ID 列表。
   * @en
   * An array of user IDs to add.
   * @returns
   * @zh
   * 返回一个 Promise，解析为已成功添加的用户的 ID 列表。
   * @en
   * A Promise that resolves with an array of user IDs that were successfully added.
   * @category Chat
   */
  addTempChatPlayer: (chatId: string, userIds: string[]) => Promise<string[]>;
  /**
   * @zh
   * 从一个特定的临时聊天频道中移除一个或多个用户。
   * @en
   * Removes one or more users from a specific temporary chat channel.
   * @param chatId
   * @zh
   * 目标聊天频道的 ID。
   * @en
   * The ID of the target chat channel.
   * @param userIds
   * @zh
   * 要移除的用户的 ID 列表。
   * @en
   * An array of user IDs to remove.
   * @returns
   * @zh
   * 返回一个 Promise，解析为已成功移除的用户的 ID 列表。
   * @en
   * A Promise that resolves with an array of user IDs that were successfully removed.
   * @category Chat
   */
  removeTempChatPlayer: (
    chatId: string,
    userIds: string[]
  ) => Promise<string[]>;
  /**
   * @zh
   * 获取当前地图中所有存在的临时聊天频道的列表。
   * @en
   * Gets a list of all existing temporary chat channels in the current map.
   * @returns
   * @zh
   * 返回一个 Promise，解析为一个包含所有临时聊天频道 ID 的数组。
   * @en
   * A Promise that resolves with an array of all temporary chat channel IDs.
   * @category Chat
   */
  getTempChats: () => Promise<string[]>;
  /**
   * @zh
   * 查询特定临时聊天频道内的所有用户。
   * @en
   * Queries all users within a specific temporary chat channel.
   * @param chatId
   * @zh
   * 要查询的聊天频道的 ID。
   * @en
   * The ID of the chat channel to query.
   * @returns
   * @zh
   * 返回一个 Promise，解析为一个包含该频道内所有用户 ID 的数组。
   * @en
   * A Promise that resolves with an array of all user IDs in the channel.
   * @category Chat
   */
  getTempChatUsers: (chatId: string) => Promise<string[]>;
  /**
   * @zh
   * 当前服务器的唯一标识符。
   * @en
   * The unique identifier for the current server.
   * @category Server
   */
  serverId: string;
  /**
   * @zh
   * 项目的名称（只读）。
   * @en
   * The name of the project (read-only).
   * @category Server
   */
  projectName: string;

  /**
   * @zh
   * 当前的游戏 tick 数，用于记录时间点或事件序列中的位置。
   * @en
   * The current game tick count, used to record the position in time or an event sequence.
   * @category Tick
   */
  currentTick: number;

  /**
   * @zh
   * 用于天空和环境光的照明模式。
   * @en
   * The lighting mode for the sky and ambient light.
   * @category Weather
   */
  lightMode: "natural" | "manual";

  /**
   * @zh
   * 太阳在天空中的初始相位。一天中的时间通过以下公式计算：
   * `timeOfDay = (sunPhase + sunFrequency * tick) % 1`
   * @en
   * The initial phase of the sun in the sky. The time of day is calculated with the formula:
   * `timeOfDay = (sunPhase + sunFrequency * tick) % 1`
   * @category Weather
   */
  sunPhase: number;

  /**
   * @zh
   * 太阳在天空中移动的频率。值越高，太阳移动越快。
   * @en
   * The frequency at which the sun moves across the sky. Higher values make the sun move faster.
   * @category Weather
   */
  sunFrequency: number;

  /**
   * @zh
   * 月球的相位。必须在 0 和 1 之间。
   * @en
   * The phase of the moon. Must be between 0 and 1.
   * @category Weather
   */
  lunarPhase: number;

  /**
   * @zh
   * 太阳的方向（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The direction of the sun (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  sunDirection: GameVector3;

  /**
   * @zh
   * 太阳光的光照颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The color of the sunlight (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  sunLight: GameRGBColor;

  /**
   * @zh
   * 天空左侧（-x 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color on the left side of the sky (-x direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyLeftLight: GameRGBColor;

  /**
   * @zh
   * 天空右侧（+x 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color on the right side of the sky (+x direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyRightLight: GameRGBColor;

  /**
   * @zh
   * 天空底部（-y 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color at the bottom of the sky (-y direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyBottomLight: GameRGBColor;

  /**
   * @zh
   * 天空顶部（+y 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color at the top of the sky (+y direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyTopLight: GameRGBColor;

  /**
   * @zh
   * 天空前方（-z 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color at the front of the sky (-z direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyFrontLight: GameRGBColor;

  /**
   * @zh
   * 天空后方（+z 方向）的环境光颜色（仅当 `lightMode` 为 `'manual'` 时生效）。
   * @en
   * The ambient light color at the back of the sky (+z direction) (only effective when `lightMode` is `'manual'`).
   * @category Weather
   */
  skyBackLight: GameRGBColor;

  /**
   * @zh
   * 雾的颜色。
   * @en
   * The color of the fog.
   * @category Weather
   */
  fogColor: GameRGBColor;

  /**
   * @zh
   * 雾开始的距离。
   * @en
   * The distance at which the fog starts.
   * @category Weather
   */
  fogStartDistance: number;

  /**
   * @zh
   * 雾开始的高度。
   * @en
   * The height at which the fog starts.
   * @category Weather
   */
  fogHeightOffset: number;

  /**
   * @zh
   * 高度雾衰减率。
   * @en
   * The rate at which the fog attenuates with height.
   * @category Weather
   */
  fogHeightFalloff: number;

  /**
   * @zh
   * 均匀雾的量（如果大于 0，则看不到天空盒）。
   * @en
   * The amount of uniform fog (if greater than 0, the skybox is not visible).
   * @category Weather
   */
  fogUniformDensity: number;

  /**
   * @zh
   * 最大雾量。
   * @en
   * The maximum amount of fog.
   * @category Weather
   */
  maxFog: number;

  /**
   * @zh
   * 雪的密度。
   * @en
   * The density of the snow.
   * @category Weather
   */
  snowDensity: number;

  /**
   * @zh
   * 雪的最小尺寸。
   * @en
   * The minimum size of the snow.
   * @category Weather
   */
  snowSizeLo: number;

  /**
   * @zh
   * 雪的最大尺寸。
   * @en
   * The maximum size of the snow.
   * @category Weather
   */
  snowSizeHi: number;

  /**
   * @zh
   * 雪的下落速度。
   * @en
   * The speed at which the snow falls.
   * @category Weather
   */
  snowFallSpeed: number;

  /**
   * @zh
   * 雪的旋转速度。
   * @en
   * The speed at which the snow rotates.
   * @category Weather
   */
  snowSpinSpeed: number;

  /**
   * @zh
   * 雪的颜色。
   * @en
   * The color of the snow.
   * @category Weather
   */
  snowColor: GameRGBAColor;

  /**
   * @zh
   * 雪的纹理。
   * @en
   * The texture of the snow.
   * @category Weather
   */
  snowTexture: string;

  /**
   * @zh
   * 雨的密度。
   * @en
   * The density of the rain.
   * @category Weather
   */
  rainDensity: number;

  /**
   * @zh
   * 雨的方向。
   * @en
   * The direction of the rain.
   * @category Weather
   */
  rainDirection: GameVector3;

  /**
   * @zh
   * 雨的速度。
   * @en
   * The speed of the rain.
   * @category Weather
   */
  rainSpeed: number;

  /**
   * @zh
   * 雨滴的最小尺寸。
   * @en
   * The minimum size of the raindrops.
   * @category Weather
   */
  rainSizeLo: number;

  /**
   * @zh
   * 雨滴的最大尺寸。
   * @en
   * The maximum size of the raindrops.
   * @category Weather
   */
  rainSizeHi: number;

  /**
   * @zh
   * 雨的干扰量。
   * @en
   * The amount of rain interference.
   * @category Weather
   */
  rainInterference: number;

  /**
   * @zh
   * 雨的颜色。
   * @en
   * The color of the rain.
   * @category Weather
   */
  rainColor: GameRGBAColor;

  /**
   * @zh
   * 全局重力。
   * @en
   * The global gravity.
   * @category Physics
   */
  gravity: number;

  /**
   * @zh
   * 空气摩擦力。
   * @en
   * The air friction.
   * @category Physics
   */
  airFriction: number;

  /**
   * @zh
   * 雨滴的最小尺寸。
   * @en
   * The minimum size of the raindrops.
   * @category Weather
   */
  rainSizeLo: number;

  /**
   * @zh
   * 雨滴的最大尺寸。
   * @en
   * The maximum size of the raindrops.
   * @category Weather
   */
  rainSizeHi: number;

  /**
   * @zh
   * 雨的干扰量。
   * @en
   * The amount of rain interference.
   * @category Weather
   */
  rainInterference: number;

  /**
   * @zh
   * 雨的颜色。
   * @en
   * The color of the rain.
   * @category Weather
   */
  rainColor: GameRGBAColor;

  /**
   * @zh
   * 是否使用 OBB（Oriented Bounding Box）刚体进行物理计算。
   * @en
   * Whether to use OBB (Oriented Bounding Box) rigid bodies for physics calculations.
   * @category Physics
   */
  useOBB: boolean;

  /**
   * @zh
   * 当方块被破坏时播放的声音效果。
   * @en
   * The sound effect played when a voxel is broken.
   * @category Sound
   */
  breakVoxelSound: GameSoundEffect;

  /**
   * @zh
   * 当方块被放置时播放的声音效果。
   * @en
   * The sound effect played when a voxel is placed.
   * @category Sound
   */
  placeVoxelSound: GameSoundEffect;

  /**
   * @zh
   * 当玩家加入游戏时播放的声音效果。
   * @en
   * The sound effect played when a player joins the game.
   * @category Sound
   */
  playerJoinSound: GameSoundEffect;

  /**
   * @zh
   * 当玩家离开游戏时播放的声音效果。
   * @en
   * The sound effect played when a player leaves the game.
   * @category Sound
   */
  playerLeaveSound: GameSoundEffect;

  /**
   * @zh
   * 全局播放的背景环境声音。
   * @en
   * The ambient background sound played globally.
   * @category Sound
   */
  ambientSound: GameSoundEffect;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh
 * 方块名称
 * @en
 * Voxel name
 */
type voxelName =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "acacia"
  | "air"
  | "bamboo"
  | "barrier"
  | "bear_footprint"
  | "blue_surface_01"
  | "blue_surface_02"
  | "dark_grass"
  | "dark_stone"
  | "dark_surface"
  | "dirt"
  | "grass"
  | "green_leaf"
  | "honeycomb_01"
  | "honeycomb_02"
  | "ice"
  | "lava01"
  | "lava02"
  | "leaf_01"
  | "leaf_02"
  | "leaf_03"
  | "leaf_04"
  | "leaf_05"
  | "leaf_06"
  | "palm"
  | "polar_ice"
  | "polar_region"
  | "pumpkin"
  | "purple_surface_01"
  | "purple_surface_02"
  | "rock"
  | "sand"
  | "snow"
  | "snowland"
  | "spiderweb"
  | "stone"
  | "water"
  | "white_grass"
  | "windygrass"
  | "winter_leaf"
  | "wood"
  | "yellow_grass"
  | "add"
  | "ampersand"
  | "asterisk"
  | "at"
  | "backslash"
  | "bracket_close"
  | "bracket_open"
  | "caret"
  | "colon"
  | "comma"
  | "divide"
  | "dollar"
  | "equal"
  | "exclamation_mark"
  | "greater_than"
  | "less_than"
  | "multiply"
  | "paren_close"
  | "paren_open"
  | "percent"
  | "period"
  | "pound"
  | "question_mark"
  | "quotation_mark"
  | "semicolon"
  | "slash"
  | "subtract"
  | "tilde"
  | "air_duct"
  | "bat_window"
  | "black_glass"
  | "blue_decorative_light"
  | "blue_gift"
  | "blue_glass"
  | "board0"
  | "board1"
  | "board10"
  | "board11"
  | "board12"
  | "board13"
  | "board14"
  | "board15"
  | "board2"
  | "board3"
  | "board4"
  | "board5"
  | "board6"
  | "board7"
  | "board8"
  | "board9"
  | "board_01"
  | "board_02"
  | "board_03"
  | "board_04"
  | "board_05"
  | "board_06"
  | "board_07"
  | "bookshelf"
  | "bounce_pad"
  | "brick_01"
  | "brick_02"
  | "button"
  | "carpet_01"
  | "carpet_02"
  | "carpet_03"
  | "carpet_04"
  | "carpet_05"
  | "carpet_06"
  | "carpet_07"
  | "carpet_08"
  | "carpet_09"
  | "carpet_10"
  | "carpet_11"
  | "carpet_12"
  | "carpet_13"
  | "color_glass"
  | "conveyor"
  | "crane_lantern"
  | "crane_roof_01"
  | "crane_roof_02"
  | "cross_window"
  | "dark_brick_00"
  | "dark_brick_01"
  | "dark_brick_02"
  | "express_box"
  | "fan"
  | "firecracker"
  | "fu"
  | "geometric_window_01"
  | "geometric_window_02"
  | "glass"
  | "gold_trim_brick"
  | "green_decorative_light"
  | "green_glass"
  | "greenbelt_L"
  | "greenbelt_L1"
  | "grey_stone_brick"
  | "ice_brick"
  | "ice_wall"
  | "lab_lamp_01"
  | "lab_lamp_02"
  | "lab_lamp_03"
  | "lab_material_01"
  | "lab_material_02"
  | "lab_material_03"
  | "lab_material_04"
  | "lab_material_05"
  | "lab_material_06"
  | "lab_material_07"
  | "lab_material_08"
  | "lab_material_09"
  | "lab_material_10"
  | "lab_material_11"
  | "lab_material_12"
  | "lab_material_13"
  | "lab_material_14"
  | "lab_material_15"
  | "lab_screen"
  | "lab_wire"
  | "lantern_01"
  | "lantern_02"
  | "ledfloor01"
  | "ledfloor02"
  | "light_grey_stone_brick"
  | "palace_carving"
  | "palace_cloud"
  | "palace_eaves_01"
  | "palace_eaves_02"
  | "palace_eaves_03"
  | "palace_eaves_04"
  | "palace_eaves_05"
  | "palace_eaves_06"
  | "palace_eaves_07"
  | "palace_eaves_08"
  | "palace_floor"
  | "palace_lamp"
  | "palace_roof"
  | "palace_window"
  | "plank_01"
  | "plank_02"
  | "plank_03"
  | "plank_04"
  | "plank_05"
  | "plank_06"
  | "plank_07"
  | "pumpkin_lantern"
  | "quartz_brick"
  | "rainbow_cube"
  | "red_brick"
  | "red_brick_floor"
  | "red_brick_wall"
  | "red_decorative_light"
  | "red_gift"
  | "red_glass"
  | "roof_blue_04"
  | "roof_green"
  | "roof_grey"
  | "roof_purple"
  | "roof_red"
  | "roof_yellow"
  | "snowflake_lamp"
  | "snowman_body"
  | "snowman_head"
  | "stained_glass"
  | "stainless_steel"
  | "star_lamp"
  | "stone_brick_01"
  | "stone_brick_02"
  | "stone_pillar_03"
  | "stone_pillar_04"
  | "stone_pillar_05"
  | "stone_pillar_06"
  | "stone_wall"
  | "stone_wall_01"
  | "television"
  | "toolbox"
  | "traditional_window"
  | "treasure_chest"
  | "window"
  | "wooden_box"
  | "woodstone_12"
  | "biscuit"
  | "blueberry_juice"
  | "candy"
  | "coffee"
  | "grape_juice"
  | "lemon_juice"
  | "lime_juice"
  | "macaroon"
  | "milk"
  | "orange_juice"
  | "peach_juice"
  | "pink_cake"
  | "soy_sauce"
  | "strawberry_juice"
  | "black"
  | "blue"
  | "brick_red"
  | "cadet_blue"
  | "coffee_gray"
  | "dark_gray"
  | "dark_orchid"
  | "dark_red"
  | "dark_salmon"
  | "dark_slate_blue"
  | "lemon"
  | "light_gray"
  | "maroon"
  | "medium_gray"
  | "medium_green"
  | "medium_orchid"
  | "medium_purple"
  | "medium_spring_green"
  | "medium_violet_red"
  | "medium_yellow"
  | "mint_green"
  | "navajo_white"
  | "olive_green"
  | "orange"
  | "orange_red"
  | "pale_green"
  | "peru"
  | "pink"
  | "powder_blue"
  | "red"
  | "sakura_pink"
  | "sienna"
  | "sky_blue"
  | "stripe_01"
  | "stripe_02"
  | "stripe_03"
  | "stripe_04"
  | "stripe_05"
  | "turquoise"
  | "white"
  | "yellow_green"
  | "blue_grass"
  | "blue_grass_all"
  | "dark_blue_grass"
  | "dark_blue_grass_all"
  | "dark_grass_all"
  | "dark_grass_rock"
  | "dark_grass_sand"
  | "dark_purple_grass"
  | "dark_purple_grass_all"
  | "dark_red_grass"
  | "dark_red_grass_all"
  | "dark_sand"
  | "dark_volcanic_rock"
  | "dark_yellow_grass"
  | "dark_yellow_grass_all"
  | "grass_all"
  | "grass_rock"
  | "grass_sand"
  | "light_blue_grass"
  | "light_blue_grass_all"
  | "light_dirt"
  | "light_purple_grass_"
  | "light_purple_grass_all"
  | "light_sand"
  | "light_volcanic_rock"
  | "orange_grass"
  | "orange_grass_all"
  | "pink_grass"
  | "pink_grass_all"
  | "purple_grass"
  | "purple_grass_all"
  | "sand_stones"
  | "snow_grass"
  | "snow_land"
  | "special_grass_01"
  | "special_grass_02"
  | "special_grass_03"
  | "special_grass_04"
  | "special_grass_05"
  | "special_grass_06"
  | "special_grass_07"
  | "special_grass_08"
  | "special_grass_09"
  | "special_grass_10"
  | "special_grass_11"
  | "special_grass_12"
  | "special_grass_13"
  | "special_grass_14"
  | "special_grass_15"
  | "special_grass_16"
  | "special_land_01"
  | "special_sand_01"
  | "special_sand_02"
  | "special_sand_03"
  | "special_sand_04"
  | "special_sand_05"
  | "withered_grass"
  | "withered_grass_land"
  | "blue_light"
  | "green_light"
  | "indigo_light"
  | "mint_green_light"
  | "orange_light"
  | "pink_light"
  | "purple"
  | "red_light"
  | "warm_yellow_light"
  | "white_light"
  | "yellow_decorative_light"
  | "yellow_light"
  | "eight"
  | "five"
  | "four"
  | "nine"
  | "one"
  | "seven"
  | "six"
  | "three"
  | "two"
  | "zero"
  | "exclamation_mark"
  | "question_mark"
  | "tilde"
  | "woodstone_12"
  | "toolbox"
  | "traditional_window"
  | "treasure_chest"
  | "window"
  | "wooden_box";

/**
 * @zh
 * 方块ID
 * @en
 * Voxel ID
 */
type voxelId =
  | 37
  | 39
  | 41
  | 43
  | 45
  | 47
  | 49
  | 51
  | 53
  | 55
  | 57
  | 59
  | 61
  | 63
  | 65
  | 67
  | 69
  | 71
  | 73
  | 75
  | 77
  | 79
  | 81
  | 83
  | 85
  | 87
  | 133
  | 0
  | 574
  | 650
  | 553
  | 349
  | 351
  | 317
  | 327
  | 357
  | 125
  | 127
  | 131
  | 535
  | 537
  | 398
  | 465
  | 467
  | 251
  | 253
  | 529
  | 531
  | 533
  | 633
  | 541
  | 347
  | 345
  | 543
  | 353
  | 355
  | 359
  | 135
  | 169
  | 343
  | 544
  | 129
  | 364
  | 539
  | 469
  | 527
  | 257
  | 3
  | 485
  | 487
  | 489
  | 491
  | 493
  | 495
  | 497
  | 499
  | 501
  | 9
  | 503
  | 11
  | 505
  | 507
  | 7
  | 511
  | 509
  | 513
  | 515
  | 517
  | 15
  | 519
  | 521
  | 523
  | 5
  | 525
  | 585
  | 546
  | 302
  | 566
  | 557
  | 276
  | 433
  | 435
  | 453
  | 455
  | 457
  | 459
  | 461
  | 463
  | 437
  | 439
  | 441
  | 443
  | 445
  | 447
  | 449
  | 451
  | 181
  | 183
  | 309
  | 311
  | 313
  | 315
  | 635
  | 483
  | 631
  | 637
  | 639
  | 587
  | 195
  | 197
  | 199
  | 201
  | 203
  | 205
  | 207
  | 235
  | 237
  | 239
  | 241
  | 243
  | 245
  | 172
  | 471
  | 405
  | 401
  | 403
  | 162
  | 329
  | 331
  | 333
  | 479
  | 589
  | 582
  | 577
  | 164
  | 166
  | 170
  | 151
  | 568
  | 278
  | 319
  | 321
  | 149
  | 145
  | 249
  | 591
  | 593
  | 595
  | 597
  | 599
  | 601
  | 603
  | 605
  | 607
  | 609
  | 611
  | 613
  | 615
  | 617
  | 619
  | 621
  | 622
  | 624
  | 627
  | 629
  | 157
  | 159
  | 473
  | 475
  | 477
  | 147
  | 264
  | 361
  | 209
  | 211
  | 213
  | 215
  | 217
  | 219
  | 221
  | 223
  | 263
  | 307
  | 255
  | 408
  | 137
  | 139
  | 141
  | 143
  | 641
  | 643
  | 645
  | 549
  | 155
  | 581
  | 153
  | 259
  | 261
  | 570
  | 555
  | 304
  | 231
  | 229
  | 407
  | 227
  | 225
  | 233
  | 565
  | 561
  | 559
  | 123
  | 247
  | 562
  | 323
  | 325
  | 267
  | 269
  | 271
  | 273
  | 275
  | 335
  | 481
  | 647
  | 578
  | 649
  | 160
  | 179
  | 411
  | 341
  | 416
  | 551
  | 428
  | 420
  | 418
  | 414
  | 339
  | 424
  | 422
  | 430
  | 337
  | 426
  | 412
  | 175
  | 363
  | 109
  | 89
  | 379
  | 95
  | 369
  | 107
  | 383
  | 113
  | 121
  | 97
  | 377
  | 111
  | 391
  | 371
  | 373
  | 397
  | 375
  | 389
  | 395
  | 385
  | 99
  | 119
  | 387
  | 93
  | 105
  | 117
  | 393
  | 91
  | 185
  | 187
  | 189
  | 191
  | 193
  | 367
  | 177
  | 101
  | 669
  | 671
  | 693
  | 695
  | 745
  | 743
  | 725
  | 697
  | 699
  | 685
  | 687
  | 729
  | 735
  | 689
  | 691
  | 741
  | 739
  | 723
  | 677
  | 679
  | 737
  | 681
  | 683
  | 727
  | 733
  | 661
  | 663
  | 673
  | 675
  | 665
  | 667
  | 731
  | 653
  | 655
  | 701
  | 703
  | 705
  | 707
  | 709
  | 711
  | 713
  | 715
  | 717
  | 719
  | 747
  | 749
  | 751
  | 753
  | 755
  | 757
  | 721
  | 759
  | 761
  | 763
  | 765
  | 767
  | 659
  | 657
  | 291
  | 287
  | 289
  | 297
  | 283
  | 295
  | 293
  | 281
  | 301
  | 299
  | 572
  | 285
  | 33
  | 27
  | 25
  | 35
  | 19
  | 31
  | 29
  | 23
  | 21
  | 13
  | 17;

/**
 * @zh
 * 旋转码
 * @en
 * Rotation code
 */
type voxelRotation = 0 | 1 | 2 | 3;

/**
 * {@link GameVoxels} 提供了游戏中所有方块的接口。您可以使用它来控制地形。
 * @link https://docs.dao3.fun/arenapro/zh/difference/voxel.html
 */
declare class GameVoxels {
  /**
   * @zh
   * 方块网格在 x、y、z 维度上的大小。
   * @en
   * The size of the voxel grid in the x, y, and z dimensions.
   * @category Grid
   */
  shape: GameVector3;

  /**
   * @zh
   * 游戏中所有支持的方块类型的名称数组。
   * @en
   * An array of names for all supported voxel types in the game.
   * @category Voxel
   */
  VoxelTypes: string[];

  /**
   * @zh
   * 根据方块的可读名称获取其数字 ID。如果名称无效，则返回 0。
   * @en
   * Gets the numeric ID of a voxel from its human-readable name. Returns 0 if the name is invalid.
   * @param name
   * @zh 方块的可读名称。
   * @en The human-readable name of the voxel.
   * @returns
   * @zh 方块的数字 ID，如果名称无效则为 0。
   * @en The numeric ID of the voxel, or 0 if the name is invalid.
   * @category Voxel
   */
  id: (name: voxelName) => voxelId | 0;

  /**
   * @zh
   * 获取指定坐标处的方块 ID。
   * @en
   * Gets the voxel ID at the specified coordinates.
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @returns
   * @zh 指定坐标处的方块 ID。
   * @en The voxel ID at the specified coordinates.
   * @category Grid
   */
  getVoxel: (x: number, y: number, z: number) => voxelId | 0;

  /**
   * @zh
   * 获取指定坐标处方块的旋转代码。
   * @en
   * Gets the rotation code of the voxel at the specified coordinates.
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @returns
   * @zh 指定坐标处方块的旋转代码。
   * @en The rotation code of the voxel at the specified coordinates.
   * @category Grid
   */
  getVoxelRotation: (x: number, y: number, z: number) => voxelRotation;

  /**
   * @zh
   * 使用方块的数字 ID 在指定坐标处设置一个方块。这是 `setVoxel` 的一个更高效的版本。
   * @en
   * Sets a voxel at the specified coordinates using its numeric ID. This is a more performant version of `setVoxel`.
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 要设置的方块的 ID。
   * @en The ID of the voxel to set.
   * @returns
   * @zh 更新后位置的方块 ID。
   * @en The voxel ID of the updated position.
   * @category Advanced
   */
  setVoxelId(x: number, y: number, z: number, voxel: number | voxelId): voxelId | number;

  /**
   * @zh
   * 在指定坐标处设置一个方块，并返回该方块的数字 ID。
   *
   * @en
   * Sets a voxel at the given coordinates and returns its numeric ID.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 要设置的方块数字 ID，可包含旋转码。
   * @en The numeric voxel ID to set, which may include rotation bits.
   * @param rotation
   * @zh 可选的旋转码，为 `0` 或未传入时表示不使用旋转。
   * @en Optional rotation code. `0` or `undefined` means no rotation.
   * @returns
   * @zh 若未使用旋转，返回不带旋转码的 `voxelId`；否则返回 `0`。
   * @en Returns a plain `voxelId` when no rotation is used; otherwise returns `0`.
   * @category Advanced
   */
 setVoxel(
    x: number,
    y: number,
    z: number,
    voxel: number,
    rotation?: 0
  ): voxelId | 0;

  /**
   * @zh
   * 在指定坐标处设置一个带旋转信息的方块，并返回完整的数值 ID。
   * 传入的 `voxel` 为基础方块 ID，最终返回的 ID 将包含旋转码。
   *
   * @en
   * Sets a voxel with rotation at the given coordinates and returns the full
   * numeric ID including rotation bits. The `voxel` argument is the base ID,
   * and the returned value includes the rotation.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 基础方块数值 ID（不含旋转码）。
   * @en The base numeric voxel ID (without rotation bits).
   * @param rotation
   * @zh 旋转码，将编码进返回的 ID 中。
   * @en The rotation code that will be encoded into the returned ID.
   * @returns
   * @zh 带旋转码的数值 ID。
   * @en The numeric ID including rotation bits.
   * @category Advanced
   */
  setVoxel(
    x: number,
    y: number,
    z: number,
    voxel: number,
    rotation: voxelRotation
  ): number;

  /**
   * @zh
   * 在指定坐标处通过方块 ID 或方块名设置一个方块（不使用旋转，或旋转为 0），
   * 并返回不带旋转码的 `voxelId`，否则返回 `0`。
   *
   * @en
   * Sets a voxel at the given coordinates using a `voxelId` or `voxelName`
   * without rotation (or with rotation `0`) and returns a plain `voxelId`.
   * When rotation is not applicable, `0` is returned.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 要设置的方块，可以是方块 ID 或方块名。
   * @en The voxel to set, either as a `voxelId` or a `voxelName`.
   * @param rotation
   * @zh 可选旋转码，为 `0` 或未传入时表示不使用旋转。
   * @en Optional rotation code. `0` or `undefined` means no rotation.
   * @returns
   * @zh 成功设置且不含旋转信息时返回 `voxelId`，否则返回 `0`。
   * @en Returns a `voxelId` when set without rotation; otherwise returns `0`.
   */
  setVoxel(
    x: number,
    y: number,
    z: number,
    voxel: voxelId | voxelName,
    rotation?: 0
  ): voxelId | 0;

  /**
   * @zh
   * 在指定坐标处通过方块 ID 或方块名设置一个带旋转的方块，
   * 返回带旋转码的完整数值 ID。
   *
   * @en
   * Sets a voxel with rotation at the given coordinates using either a
   * `voxelId` or a `voxelName`, and returns the full numeric ID including
   * rotation bits.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 要设置的方块，可以是方块 ID 或方块名。
   * @en The voxel to set, either as a `voxelId` or a `voxelName`.
   * @param rotation
   * @zh 旋转码，将编码进返回的 ID 中。
   * @en The rotation code that will be encoded into the returned ID.
   * @returns
   * @zh 带旋转码的数值 ID。
   * @en The numeric ID including rotation bits.
   * @category Advanced
   */
  setVoxel(
    x: number,
    y: number,
    z: number,
    voxel: voxelId | voxelName,
    rotation: voxelRotation
  ): number;

  /**
   * @zh
   * 在指定坐标处通过数值 ID 设置一个方块，并返回最终写入的数值 ID。
   * 此处 `voxel` 可以是带旋转码的 ID，返回值同样是带旋转码的 ID。
   *
   * @en
   * Sets a voxel at the given coordinates using a numeric ID and returns the
   * actual ID that is stored. The `voxel` argument may already include rotation
   * bits, and the returned value will also include them.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 方块的数值 ID，可以包含旋转码。
   * @en The numeric voxel ID to set, which may include rotation bits.
   * @returns
   * @zh 实际写入的数值 ID（可能包含旋转码）。
   * @en The numeric ID actually stored (possibly including rotation bits).
   * @category Advanced
   */
  setVoxelId(x: number, y: number, z: number, voxel: voxelId | number): voxelId | number;

  /**
   * @zh
   * 在指定坐标处通过 `voxelId` 设置一个方块。
   * 若传入的是不带旋转码的 `voxelId`，返回值也为不带旋转码的 `voxelId`；
   * 若无法设置则返回 `0`。
   *
   * @en
   * Sets a voxel at the given coordinates using a `voxelId`.
   * If the provided ID is a plain `voxelId` without rotation bits, the
   * returned value is also a plain `voxelId`; otherwise `0` is returned.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @param voxel
   * @zh 方块的 `voxelId`（不包含旋转码）。
   * @en The `voxelId` of the voxel (without rotation bits).
   * @returns
   * @zh 设置成功时返回 `voxelId`，否则返回 `0`。
   * @en Returns the `voxelId` on success, or `0` if it fails.
   */
  setVoxelId(x: number, y: number, z: number, voxel: voxelId): voxelId | 0;

  /**
   * @zh
   * 检索指定坐标处方块的数字 ID。这是 `getVoxel` 的一个更高效的版本。
   * 返回的方块 ID 是带旋转码的 ID。
   *
   * @en
   * Retrieves the numeric ID of the voxel at the specified coordinates.
   * This is a more performant version of `getVoxel`. The returned ID
   * includes rotation bits.
   *
   * @param x
   * @zh x 坐标。
   * @en The x-coordinate.
   * @param y
   * @zh y 坐标。
   * @en The y-coordinate.
   * @param z
   * @zh z 坐标。
   * @en The z-coordinate.
   * @returns
   * @zh 带旋转码的方块数值 ID。
   * @en The numeric voxel ID including rotation bits.
   * @category Advanced
   */
  getVoxelId(x: number, y: number, z: number): voxelId | number;

  /**
   * @zh
   * 根据方块的数值 ID 获取对应的方块名称。
   * 传入带旋转码的 ID 也可以正常解析为方块名。
   *
   * @en
   * Resolves the voxel name from a numeric voxel ID.
   * IDs that include rotation bits are also supported and will be
   * correctly mapped to the base voxel name.
   *
   * @param id
   * @zh 方块的数值 ID，可以包含旋转码。
   * @en The numeric voxel ID, possibly including rotation bits.
   * @returns
   * @zh 与该 ID 对应的方块名称。
   * @en The voxel name corresponding to the given ID.
   */
  name(id: voxelId | number): voxelName;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 代表一个玩家实体，它继承自 `GameEntity` 并包含了对 `GamePlayer` 对象的引用。
 * @en
 * Represents a player entity, which inherits from `GameEntity` and includes a reference to the `GamePlayer` object.
 * @category Entity
 */
declare type GamePlayerEntity = GameEntity & {
  /**
   * @zh
   * 当前游戏世界中的玩家对象。
   * @en
   * The player object in the current game world.
   * @type {GamePlayer}
   * @category Player
   */
  player: GamePlayer;
  /**
   * @zh
   * 用于识别此实体是否为玩家的只读标志。
   * @en
   * A read-only flag to identify if this entity is a player.
   * @readonly
   */
  readonly isPlayer: true;
};

/**
 * @zh
 * 代表一个与玩家实体相关的事件，确保事件中的 `entity` 字段是一个 `GamePlayerEntity`。
 * @en
 * Represents an event related to a player entity, ensuring the `entity` field in the event is a `GamePlayerEntity`.
 * @category Event
 */
declare type GamePlayerEntityEvent = GameEntityEvent & {
  entity: GamePlayerEntity;
};

/**
 * @zh
 * 定义了用于创建或更新游戏实体的配置选项。
 * @en
 * Defines the configuration options for creating or updating a game entity.
 * @category Entity
 */
interface GameEntityConfig {
  /**
   * @zh
   * 实体在世界中的初始位置。
   * @en
   * The initial position of the entity in the world.
   * @category Physics
   */
  position: GameVector3;

  /**
   * @zh
   * 实体的初始速度。
   * @en
   * The initial velocity of the entity.
   * @category Physics
   */
  velocity: GameVector3;

  /**
   * @zh
   * 实体的物理边界框大小。
   * @en
   * The size of the entity's physics bounding box.
   * @category Physics
   */
  bounds: GameVector3;

  /**
   * @zh
   * 实体的质量，影响物理交互。
   * @en
   * The mass of the entity, affecting physics interactions.
   * @category Physics
   */
  mass: number;

  /**
   * @zh
   * 实体在表面上移动时的摩擦系数。
   * @en
   * The friction coefficient of the entity when moving on surfaces.
   * @category Physics
   */
  friction: number;

  /**
   * @zh
   * 实体的弹性恢复系数（“反弹”程度）。
   * @en
   * The restitution coefficient (bounciness) of the entity.
   * @category Physics
   */
  restitution: number;

  /**
   * @zh
   * 实体是否与其他对象发生碰撞。
   * @en
   * Whether the entity collides with other objects.
   * @category Physics
   */
  collides: boolean;

  /**
   * @zh
   * 实体是否在世界中固定不动。
   * @en
   * Whether the entity is fixed in the world and immovable.
   * @category Physics
   */
  fixed: boolean;

  /**
   * @zh
   * 实体是否受世界重力的影响。
   * @en
   * Whether the entity is affected by world gravity.
   * @category Physics
   */
  gravity: boolean;

  /**
   * @zh
   * 实体的视觉模型（网格）。可以是预设的模型资源名称或空字符串。
   * @en
   * The visual model (mesh) of the entity. Can be a preset model asset name or an empty string.
   * @category Visual
   */
  mesh: GameModelAssets | "";

  /**
   * @zh
   * 实体模型的颜色和透明度。
   * @en
   * The color and opacity of the entity's model.
   * @category Visual
   */
  meshColor: GameRGBAColor;

  /**
   * @zh
   * 实体模型的缩放比例。
   * @en
   * The scale of the entity's model.
   * @category Visual
   */
  meshScale: GameVector3;

  /**
   * @zh
   * 实体模型的旋转朝向。
   * @en
   * The rotational orientation of the entity's model.
   * @category Visual
   */
  meshOrientation: GameQuaternion;

  /**
   * @zh
   * 实体的网格金属度。
   * @en
   * The metalness of the entity's mesh.
   * @category Visual
   */
  meshMetalness: number;

  /**
   * @zh
   * 实体的网格发光强度。
   * @en
   * The emissive intensity of the entity's mesh.
   * @category Visual
   */
  meshEmissive: number;

  /**
   * @zh
   * 实体的网格光泽度。
   * @en
   * The shininess of the entity's mesh.
   * @category Visual
   */
  meshShininess: number;

  /**
   * @zh
   * 实体几何中心与锚点的偏移量。
   * @en
   * The offset of the entity's geometric center from its anchor point.
   * @category Visual
   */
  anchorOffset: GameVector3;

  /**
   * @zh
   * 实体的粒子发射速率。
   * @en
   * The particle emission rate of the entity.
   * @category Visual
   */
  particleRate: number;

  /**
   * @zh
   * 实体的粒子发射速率的随机范围。
   * @en
   * The random spread of the entity's particle emission rate.
   * @category Visual
   */
  particleRateSpread: number;

  /**
   * @zh
   * 实体的粒子数量上限。
   * @en
   * The maximum number of particles for the entity.
   * @category Visual
   */
  particleLimit: number;

  /**
   * @zh
   * 实体的粒子颜色数组。
   * @en
   * The color array of the entity's particles.
   * @category Visual
   */
  particleColor: GameRGBColor[];

  /**
   * @zh
   * 实体的粒子大小数组。
   * @en
   * The size array of the entity's particles.
   * @category Visual
   */
  particleSize: number[];

  /**
   * @zh
   * 实体的粒子大小的随机范围。
   * @en
   * The random spread of the entity's particle size.
   * @category Visual
   */
  particleSizeSpread: number;

  /**
   * @zh
   * 实体的粒子生命周期。
   * @en
   * The lifetime of the entity's particles.
   * @category Visual
   */
  particleLifetime: number;

  /**
   * @zh
   * 实体的粒子生命周期的随机范围。
   * @en
   * The random spread of the entity's particle lifetime.
   * @category Visual
   */
  particleLifetimeSpread: number;

  /**
   * @zh
   * 实体的粒子初速度。
   * @en
   * The initial velocity of the entity's particles.
   * @category Visual
   */
  particleVelocity: GameVector3;

  /**
   * @zh
   * 实体的粒子初速度的随机范围。
   * @en
   * The random spread of the entity's particle initial velocity.
   * @category Visual
   */
  particleVelocitySpread: GameVector3;

  /**
   * @zh
   * 实体的粒子阻尼。
   * @en
   * The damping of the entity's particles.
   * @category Visual
   */
  particleDamping: number;

  /**
   * @zh
   * 实体的粒子加速度。
   * @en
   * The acceleration of the entity's particles.
   * @category Visual
   */
  particleAcceleration: GameVector3;

  /**
   * @zh
   * 实体的粒子噪声强度。
   * @en
   * The noise intensity of the entity's particles.
   * @category Visual
   */
  particleNoise: number;

  /**
   * @zh
   * 实体的粒子噪声频率。
   * @en
   * The noise frequency of the entity's particles.
   * @category Visual
   */
  particleNoiseFrequency: number;

  /**
   * @zh
   * 实体的粒子目标。
   * @en
   * The target of the entity's particles.
   * @category Visual
   */
  particleTarget: GameEntity | null;

  /**
   * @zh
   * 实体的粒子目标权重。
   * @en
   * The target weight of the entity's particles.
   * @category Visual
   */
  particleTargetWeight: number;

  /**
   * @zh
   * 实体是否可以交互。
   * @en
   * Whether the entity can be interacted with.
   * @category Interaction
   */
  enableInteract: boolean;

  /**
   * @zh
   * 实体的交互颜色。
   * @en
   * The interaction color of the entity.
   * @category Interaction
   */
  interactColor: GameRGBColor;

  /**
   * @zh
   * 实体的交互提示文本。
   * @en
   * The interaction hint text for the entity.
   * @category Interaction
   */
  interactHint: string;

  /**
   * @zh
   * 实体的交互半径。
   * @en
   * The interaction radius of the entity.
   * @category Interaction
   */
  interactRadius: number;

  /**
   * @zh
   * 实体受伤时的声音配置。
   * @en
   * The sound configuration for when the entity is hurt.
   * @category Sound
   */
  hurtSound: GameSoundEffectConfig;

  /**
   * @zh
   * 实体死亡时的声音配置。
   * @en
   * The sound configuration for when the entity dies.
   * @category Sound
   */
  dieSound: GameSoundEffectConfig;

  /**
   * @zh
   * 实体交互时的声音配置。
   * @en
   * The sound configuration for when the entity is interacted with.
   * @category Sound
   */
  interactSound: GameSoundEffectConfig;

  /**
   * @zh
   * 实体聊天时的声音配置。
   * @en
   * The sound configuration for when the entity chats.
   * @category Sound
   */
  chatSound: GameSoundEffectConfig;

  /**
   * @zh
   * 实体的唯一标识符。
   * @en
   * The unique identifier of the entity.
   * @category General
   * @readonly
   */
  readonly id: string;

  /**
   * @zh
   * 实体的标签，可以是返回字符串数组的函数或字符串数组。
   * @en
   * The tags of the entity, which can be a function that returns a string array or a string array.
   * @category General
   */
  tags: (() => string[]) | string[];
}

/**
 * @zh
 * 定义游戏实体受伤选项的接口。
 * @en
 * Defines the options for when a game entity is hurt.
 */
interface GameHurtOptions {
  /**
   * @zh
   * 伤害来源的实体。
   * @en
   * The entity that is the source of the damage.
   */
  attacker: GameEntity;
  /**
   * @zh
   * 伤害类型。
   * @en
   * The type of damage.
   */
  damageType: string;
}

/**
 * @zh
 * 定义游戏实体关键帧的接口。
 * @en
 * Defines the interface for a game entity keyframe.
 */
interface GameEntityKeyframe {
  /**
   * @zh
   * 关键帧的持续时间。
   * @en
   * The duration of the keyframe.
   */
  duration: number;
  /**
   * @zh
   * 关键帧的加速方式。
   * @en
   * The easing-in method for the keyframe.
   */
  easeIn: GameEasing;
  /**
   * @zh
   * 关键帧的减速方式。
   * @en
   * The easing-out method for the keyframe.
   */
  easeOut: GameEasing;
  /**
   * @zh
   * 实体的位置。
   * @en
   * The position of the entity.
   */
  position: GameVector3;
  /**
   * @zh
   * 实体的速度。
   * @en
   * The velocity of the entity.
   */
  velocity: GameVector3;
  /**
   * @zh
   * 实体的质量。
   * @en
   * The mass of the entity.
   */
  mass: number;
  /**
   * @zh
   * 实体的摩擦力。
   * @en
   * The friction of the entity.
   */
  friction: number;
  /**
   * @zh
   * 实体的恢复系数。
   * @en
   * The restitution coefficient of the entity.
   */
  restitution: number;
  /**
   * @zh
   * 实体是否可以碰撞。
   * @en
   * Whether the entity can collide.
   */
  collides: boolean;
  /**
   * @zh
   * 实体是否固定。
   * @en
   * Whether the entity is fixed.
   */
  fixed: boolean;
  /**
   * @zh
   * 实体是否受重力影响。
   * @en
   * Whether the entity is affected by gravity.
   */
  gravity: boolean;
  /**
   * @zh
   * 实体的网格模型。
   * @en
   * The mesh model of the entity.
   */
  mesh: GameModelAssets | "";
  /**
   * @zh
   * 实体网格是否不可见。
   * @en
   * Whether the entity's mesh is invisible.
   */
  meshInvisible: boolean;
  /**
   * @zh
   * 实体的网格缩放。
   * @en
   * The scale of the entity's mesh.
   */
  meshScale: GameVector3;
  /**
   * @zh
   * 实体的网格朝向。
   * @en
   * The orientation of the entity's mesh.
   */
  meshOrientation: GameQuaternion;
  /**
   * @zh
   * 实体的网格偏移。
   * @en
   * The offset of the entity's mesh.
   */
  meshOffset: GameVector3;
  /**
   * @zh
   * 实体的网格颜色。
   * @en
   * The color of the entity's mesh.
   */
  meshColor: GameRGBAColor;
  /**
   * @zh
   * 实体的网格金属度。
   * @en
   * The metalness of the entity's mesh.
   */
  meshMetalness: number;
  /**
   * @zh
   * 实体的网格发光强度。
   * @en
   * The emissive intensity of the entity's mesh.
   */
  meshEmissive: number;
  /**
   * @zh
   * 实体的网格光泽度。
   * @en
   * The shininess of the entity's mesh.
   */
  meshShininess: number;
  /**
   * @zh
   * 实体的粒子发射速率。
   * @en
   * The particle emission rate of the entity.
   */
  particleRate: number;
  /**
   * @zh
   * 实体的粒子发射速率的随机范围。
   * @en
   * The random spread of the entity's particle emission rate.
   */
  particleRateSpread: number;
  /**
   * @zh
   * 实体的粒子数量上限。
   * @en
   * The maximum number of particles for the entity.
   */
  particleLimit: number;
  /**
   * @zh
   * 实体的粒子生命周期。
   * @en
   * The lifetime of the entity's particles.
   */
  particleLifetime: number;
  /**
   * @zh
   * 实体的粒子生命周期的随机范围。
   * @en
   * The random spread of the entity's particle lifetime.
   */
  particleLifetimeSpread: number;
  /**
   * @zh
   * 实体的粒子初速度。
   * @en
   * The initial velocity of the entity's particles.
   */
  particleVelocity: GameVector3;
  /**
   * @zh
   * 实体的粒子初速度的随机范围。
   * @en
   * The random spread of the entity's particle initial velocity.
   */
  particleVelocitySpread: GameVector3;
  /**
   * @zh
   * 实体的粒子颜色数组。
   * @en
   * The color array of the entity's particles.
   */
  particleColor: GameRGBColor[];
  /**
   * @zh
   * 实体的粒子大小数组。
   * @en
   * The size array of the entity's particles.
   */
  particleSize: number[];
  /**
   * @zh
   * 实体的粒子大小的随机范围。
   * @en
   * The random spread of the entity's particle size.
   */
  particleSizeSpread: number;
  /**
   * @zh
   * 实体的粒子阻尼。
   * @en
   * The damping of the entity's particles.
   */
  particleDamping: number;
  /**
   * @zh
   * 实体的粒子加速度。
   * @en
   * The acceleration of the entity's particles.
   */
  particleAcceleration: GameVector3;
  /**
   * @zh
   * 实体的粒子噪声强度。
   * @en
   * The noise intensity of the entity's particles.
   */
  particleNoise: number;
  /**
   * @zh
   * 实体的粒子噪声频率。
   * @en
   * The noise frequency of the entity's particles.
   */
  particleNoiseFrequency: number;
  /**
   * @zh
   * 实体的粒子目标。
   * @en
   * The target of the entity's particles.
   */
  particleTarget: GameEntity | null;
  /**
   * @zh
   * 实体的粒子目标权重。
   * @en
   * The target weight of the entity's particles.
   */
  particleTargetWeight: number;
  /**
   * @zh
   * 实体的交互颜色。
   * @en
   * The interaction color of the entity.
   */
  interactColor: GameRGBColor;
}
/**
 * @zh
 * 实体是游戏中的游戏对象，可以用来表示玩家、物体等。
 * @en
 * An entity is a game object in the game, which can be used to represent players, objects, etc.
 */
declare class GameEntity implements GameEntityConfig {
  /**
   * @zh
   * 获取分配给实体的所有标签集合。
   * @en
   * Gets the collection of all tags assigned to the entity.
   * @category selectors
   */
  tags: () => string[];

  /**
   * @zh
   * 向实体添加新标签。
   * @en
   * Adds a new tag to the entity.
   * @param tag The tag to add.
   * @zh_param tag 要添加的标签。
   * @category selectors
   */
  addTag: (tag: string) => void;

  /**
   * @zh
   * 从实体中移除标签。
   * @en
   * Removes a tag from the entity.
   * @param tag The tag to remove.
   * @zh_param tag 要移除的标签。
   * @category selectors
   */
  removeTag: (tag: string) => void;

  /**
   * @zh
   * 测试实体是否具有某个标签。
   * @en
   * Tests if the entity has a certain tag.
   * @param tag The tag to test for.
   * @zh_param tag 要测试的标签。
   * @returns
   * @zh_returns 如果实体有该标签则返回 true，否则返回 false。
   * @en_returns True if the entity has the tag, otherwise false.
   * @category selectors
   */
  hasTag: (tag: string) => boolean;

  /**
   * @zh
   * 销毁实体。
   * @en
   * Destroys the entity.
   * @category destroy
   */
  destroy: () => void;

  /**
   * @zh
   * 当实体被销毁时调用。
   * @en
   * Called when the entity is destroyed.
   * @category destroy
   */
  onDestroy: GameEventChannel<GameEntityEvent>;

  /**
   * @zh
   * 下一次实体被销毁时的未来事件。
   * @en
   * A future event for the next time the entity is destroyed.
   * @category destroy
   */
  nextDestroy: GameEventFuture<GameEntityEvent>;

  /**
   * @zh
   * 当实体受到伤害时调用。
   * @en
   * Called when the entity takes damage.
   * @category health
   */
  onTakeDamage: GameEventChannel<GameDamageEvent>;

  /**
   * @zh
   * 下一次实体受到伤害时的未来事件。
   * @en
   * A future event for the next time the entity takes damage.
   * @category health
   */
  nextTakeDamage: GameEventFuture<GameDamageEvent>;

  /**
   * @zh
   * 当实体死亡时调用。
   * @en
   * Called when the entity dies.
   * @category health
   */
  onDie: GameEventChannel<GameDieEvent>;

  /**
   * @zh
   * 下一次实体死亡时的未来事件。
   * @en
   * A future event for the next time the entity dies.
   * @category health
   */
  nextDie: GameEventFuture<GameDieEvent>;

  /**
   * @zh
   * 对实体造成伤害。
   * @en
   * Inflicts damage on the entity.
   * @param amount The amount of damage to inflict.
   * @zh_param amount 伤害量。
   * @param options Options for the damage.
   * @zh_param options 伤害选项。
   * @category health
   */
  hurt: (amount: number, options?: Partial<GameHurtOptions>) => void;

  /**
   * @zh
   * 使实体说话。
   * @en
   * Makes the entity say something.
   * @param message The message to say.
   * @zh_param message 要说的信息。
   * @param options Options for saying the message.
   * @zh_param options 说话的选项。
   * @category chat
   */
  say: (
    message: string,
    options?: Partial<{
      /**
       * @zh
       * 气泡及广播提示语的持续时间（ms)。
       * - 缺省值：2000
       * @en
       * The duration of the bubble and broadcast message in milliseconds.
       * - Default: 2000
       */
      duration: number;
      /**
       * @zh
       * 气泡内容是否在世界广播上隐藏？
       * - 缺省值：false
       * @en
       * Whether to hide the bubble content from the world broadcast.
       * - Default: false
       */
      hideFloat: boolean;
    }>
  ) => void;

  /**
   * @zh
   * 在实体上播放动画。
   * @en
   * Plays an animation on the entity.
   * @param keyframes The keyframes of the animation.
   * @zh_param keyframes 动画的关键帧。
   * @param playbackInfo Playback information for the animation.
   * @zh_param playbackInfo 动画的播放信息。
   * @returns The animation instance.
   * @zh_returns 动画实例。
   */
  animate: (
    keyframes: Partial<GameEntityKeyframe>[],
    playbackInfo?: Partial<GameAnimationPlaybackConfig>
  ) => GameAnimation<GameEntityKeyframe, GameEntity>;

  /**
   * @zh
   * 获取实体当前播放的所有动画。
   * @en
   * Gets all animations currently playing on the entity.
   * @returns An array of animation instances.
   * @zh_returns 动画实例数组。
   */
  getAnimations: () => GameAnimation<GameEntityKeyframe, GameEntity>[];

  /**
   * @zh
   * 当玩家点击此实体时调用。
   * @en
   * Called when a player clicks this entity.
   */
  onClick: GameEventChannel<GameClickEvent>;

  /**
   * @zh
   * 下一次玩家点击此实体时的未来事件。
   * @en
   * A future event for the next time a player clicks this entity.
   */
  nextClick: GameEventFuture<GameClickEvent>;

  /**
   * @zh
   * 当实体接触另一个实体时调用。
   * @en
   * Called when the entity contacts another entity.
   * @category physics
   */
  onEntityContact: GameEventChannel<GameEntityContactEvent>;

  /**
   * @zh
   * 下一次实体接触另一个实体时的未来事件。
   * @en
   * A future event for the next time the entity contacts another entity.
   */
  nextEntityContact: GameEventFuture<GameEntityContactEvent>;

  /**
   * @zh
   * 当实体停止接触另一个实体时调用。
   * @en
   * Called when the entity stops contacting another entity.
   * @category physics
   */
  onEntitySeparate: GameEventChannel<GameEntityContactEvent>;

  /**
   * @zh
   * 下一次实体停止接触另一个实体时的未来事件。
   * @en
   * A future event for the next time the entity stops contacting another entity.
   * @category physics
   */
  nextEntitySeparate: GameEventFuture<GameEntityContactEvent>;

  /**
   * @zh
   * 当实体接触方块时调用。
   * @en
   * Called when the entity contacts a voxel.
   * @category physics
   */
  onVoxelContact: GameEventChannel<GameVoxelContactEvent>;

  /**
   * @zh
   * 下一次实体接触方块时的未来事件。
   * @en
   * A future event for the next time the entity contacts a voxel.
   * @category physics
   */
  nextVoxelContact: GameEventFuture<GameVoxelContactEvent>;

  /**
   * @zh
   * 当实体停止接触方块时调用。
   * @en
   * Called when the entity stops contacting a voxel.
   * @category physics
   */
  onVoxelSeparate: GameEventChannel<GameVoxelContactEvent>;

  /**
   * @zh
   * 下一次实体停止接触方块时的未来事件。
   * @en
   * A future event for the next time the entity stops contacting a voxel.
   * @category physics
   */
  nextVoxelSeparate: GameEventFuture<GameVoxelContactEvent>;

  /**
   * @zh
   * 当实体进入流体时调用。
   * @en
   * Called when the entity enters a fluid.
   * @category physics
   */
  onFluidEnter: GameEventChannel<GameFluidContactEvent>;

  /**
   * @zh
   * 下一次实体进入流体时的未来事件。
   * @en
   * A future event for the next time the entity enters a fluid.
   * @category physics
   */
  nextFluidEnter: GameEventFuture<GameFluidContactEvent>;

  /**
   * @zh
   * 当实体离开流体时调用。
   * @en
   * Called when the entity leaves a fluid.
   * @category physics
   */
  onFluidLeave: GameEventChannel<GameFluidContactEvent>;

  /**
   * @zh
   * 下一次实体离开流体时的未来事件。
   * @en
   * A future event for the next time the entity leaves a fluid.
   * @category physics
   */
  nextFluidLeave: GameEventFuture<GameFluidContactEvent>;

  /**
   * @zh
   * 当实体与另一个实体互动时调用。
   * @en
   * Called when the entity interacts with another entity.
   * @category interactive
   */
  onInteract: GameEventChannel<GameInteractEvent>;

  /**
   * @zh
   * 下一次实体与另一个实体互动时的未来事件。
   * @en
   * A future event for the next time the entity interacts with another entity.
   */
  nextInteract: GameEventFuture<GameInteractEvent>;

  /**
   * @zh
   * 在实体位置播放音效。
   * @en
   * Plays a sound effect at the entity's position.
   * @param spec The sound specification. This can be an audio asset string, an empty string to stop the sound, or a configuration object with the following properties:
   * - `sample`: The audio asset (`GameAudioAssets | ''`).
   * - `radius`: The sound radius (optional).
   * - `pitch`: The pitch (optional).
   * - `gain`: The gain (optional).
   * @zh_param spec 音效规格。可以是一个音频资源字符串，一个用于停止音效的空字符串，或一个包含以下属性的配置对象：
   * - `sample`: 音频资源 (`GameAudioAssets | ''`)。
   * - `radius`: 音效半径（可选）。
   * - `pitch`: 音调（可选）。
   * - `gain`: 音量（可选）。
   * @returns The sound instance.
   * @zh_returns 音效实例。
   * @category sound
   */
  sound: (
    spec:
      | {
          sample: GameAudioAssets | "";
          radius?: number;
          pitch?: number;
          gain?: number;
        }
      | GameAudioAssets
      | ""
  ) => Sound;

  /**
   * @zh
   * 运动控制器。
   * @en
   * The motion controller.
   * @category motion
   */
  motion: GameMotionController<GameEntity>;

  /**
   * @zh
   * 使实体朝向指定位置。
   * @en
   * Makes the entity look at a specified position.
   * @param targetPosition The position to look at.
   * @zh_param targetPosition 要朝向的位置。
   * @param facingDirection The direction that should face the target.
   * @zh_param facingDirection 应朝向目标的方向。
   * @param up The up vector.
   * @zh_param up 上方向向量。
   * @category mesh
   */
  lookAt: (
    targetPosition: GameVector3,
    facingDirection?: "X" | "Y" | "Z",
    up?: GameVector3
  ) => void;

  /**
   * @zh
   * 围绕模型自身坐标系下的某个点进行旋转。
   * @en
   * Rotates around a point in the model's own coordinate system.
   * @param localPosition A 3D vector containing x, y, z coordinates, representing the position to rotate around.
   * @zh_param localPosition 一个包含x、y、z坐标的三维向量，表示待旋转的位置。
   * @param axis A string specifying the rotation axis, can be 'X', 'Y', or 'Z'.
   * @zh_param axis 一个字符串，指定旋转轴可以是'X'、'Y'或'Z'。
   * @param rad The angle of rotation in radians.
   * @zh_param rad 旋转的角度，以弧度为单位。
   * @category mesh
   */
  rotateLocal: (
    localPosition: GameVector3,
    axis: "X" | "Y" | "Z",
    rad: number
  ) => void;

  /**
   * @zh
   * 参照模型自身坐标系下的某个点进行缩放。
   * @en
   * Scales relative to a point in the model's own coordinate system.
   * @param localPosition The position vector in the local coordinate system, representing the point to scale around.
   * @zh_param localPosition 本地坐标系中的位置向量，表示待缩放的点。
   * @param v The scaling vector, representing the scaling factors on the x, y, and z axes.
   * @zh_param v 缩放向量，表示在x、y、z轴上的缩放因子。
   * @category mesh
   */
  scaleLocal: (localPosition: GameVector3, v: GameVector3) => void;

  /**
   * @zh
   * 实体在编辑器中的种子名称。
   * @en
   * The entity's seed name in the editor.
   * @category selectors
   */
  id: string;

  /**
   * @zh
   * 如果为 true，表示实体已被销毁。
   * @en
   * If true, indicates that the entity has been destroyed.
   * @readonly
   * @category destroy
   */
  readonly destroyed: boolean;

  /**
   * @zh
   * 实体的位置。
   * @en
   * The position of the entity.
   * @category physics
   */
  position: GameVector3;

  /**
   * @zh
   * 实体的速度。
   * @en
   * The velocity of the entity.
   * @category physics
   */
  velocity: GameVector3;

  /**
   * @zh
   * 实体边界框在 x/y/z 轴上的半径。
   * @en
   * The radius of the entity's bounding box on the x/y/z axes.
   * @category physics
   */
  bounds: GameVector3;

  /**
   * @zh
   * 实体的质量。
   * @en
   * The mass of the entity.
   * @category physics
   */
  mass: number;

  /**
   * @zh
   * 控制物体的粘性（0 = 滑，1 = 粘）。
   * @en
   * Controls the friction of the object (0 = slippery, 1 = sticky).
   * @category physics
   */
  friction: number;

  /**
   * @zh
   * 控制弹跳性（0 = 软，1 = 弹）。
   * @en
   * Controls the bounciness (0 = soft, 1 = bouncy).
   * @category physics
   */
  restitution: number;

  /**
   * @zh
   * 如果为 false，物体不会发生碰撞。
   * @en
   * If false, the object will not collide.
   * @category physics
   */
  collides: boolean;

  /**
   * @zh
   * 如果为 false，物体不会受到重力影响。
   * @en
   * If false, the object is not affected by gravity.
   * @category physics
   */
  gravity: boolean;

  /**
   * @zh
   * 如果为 true，物体不会移动。
   * @en
   * If true, the object will not move.
   * @category physics
   */
  fixed: boolean;

  /**
   * @zh
   * 应用于此对象的净接触力。
   * @en
   * The net contact force applied to this object.
   * @readonly
   * @category physics
   */
  contactForce: GameVector3;

  /**
   * @zh
   * 返回所有活动的实体接触列表。
   * @en
   * Returns a list of all active entity contacts.
   * @readonly
   * @category physics
   */
  readonly entityContacts: GameEntityContact[];

  /**
   * @zh
   * 返回所有活动的方块接触列表。
   * @en
   * Returns a list of all active voxel contacts.
   * @readonly
   * @category physics
   */
  readonly voxelContacts: GameVoxelContact[];

  /**
   * @zh
   * 返回所有活动的流体接触列表。
   * @en
   * Returns a list of all active fluid contacts.
   * @readonly
   * @category physics
   */
  readonly fluidContacts: GameFluidContact[];

  /**
   * @zh
   * 实体网格的哈希值。如果设置为空字符串，则实体没有网格。
   * 除非对象是玩家，否则如果设置了网格，则使用网格来计算对象的边界。
   * @en
   * The hash of the entity's mesh. If set to an empty string, the entity has no mesh.
   * Unless the object is a player, if a mesh is set, it is used to calculate the object's bounds.
   * @category mesh
   */
  mesh: GameModelAssets | "";

  /**
   * @zh
   * 使网格不可见。
   * @en
   * Makes the mesh invisible.
   * @category mesh
   */
  meshInvisible: boolean;

  /**
   * @zh
   * 网格缩放。
   * @en
   * The mesh scale.
   * @category mesh
   */
  meshScale: GameVector3;

  /**
   * @zh
   * 网格方向。
   * @en
   * The mesh orientation.
   * @category mesh
   */
  meshOrientation: GameQuaternion;

  /**
   * @zh
   * 网格偏移。
   * @en
   * The mesh offset.
   * @category mesh
   */
  meshOffset: GameVector3;

  /**
   * @zh
   * 网格颜色。
   * @en
   * The mesh color.
   * @category mesh
   */
  meshColor: GameRGBAColor;

  /**
   * @zh
   * 网格金属度。
   * @en
   * The mesh metalness.
   * @category mesh
   */
  meshMetalness: number;

  /**
   * @zh
   * 网格发光度。
   * @en
   * The mesh emissive intensity.
   * @category mesh
   */
  meshEmissive: number;

  /**
   * @zh
   * 网格光泽度。
   * @en
   * The mesh shininess.
   * @category mesh
   */
  meshShininess: number;

  /**
   * @zh
   * 几何中心与锚点的偏移量。
   * @en
   * The offset of the geometric center from the anchor point.
   * @category mesh
   */
  anchorOffset: GameVector3;

  /**
   * @zh
   * 是否启用伤害。
   * @en
   * Whether damage is enabled.
   * @category health
   */
  enableDamage: boolean;

  /**
   * @zh
   * 是否显示生命条。
   * @en
   * Whether to show the health bar.
   * @category health
   */
  showHealthBar: boolean;

  /**
   * @zh
   * 当前生命值。
   * @en
   * The current health points.
   * @category health
   */
  hp: number;

  /**
   * @zh
   * 最大生命值。
   * @en
   * The maximum health points.
   * @category health
   */
  maxHp: number;

  /**
   * @zh
   * 粒子发射速率（每秒粒子数）。
   * @en
   * The particle emission rate (particles per second).
   * @category particle
   */
  particleRate: number;

  /**
   * @zh
   * 粒子发射的变化范围。
   * @en
   * The spread of the particle emission rate.
   * @category particle
   */
  particleRateSpread: number;

  /**
   * @zh
   * 该实体可以发射的最大粒子数。
   * @en
   * The maximum number of particles this entity can emit.
   * @category particle
   */
  particleLimit: number;

  /**
   * @zh
   * 粒子颜色样条曲线。最多 5 个条目，粒子在其生命周期内沿这 5 个点插值颜色。
   * 颜色是发光值，可以在 0 到 256 之间取任何值。
   * @en
   * The particle color spline. Up to 5 entries, particles interpolate colors along these 5 points during their lifetime.
   * Colors are emissive values and can take any value between 0 and 256.
   * @category particle
   */
  particleColor: GameRGBColor[];

  /**
   * @zh 粒子大小样条曲线。最多 5 个条目，粒子在其生命周期内沿这 5 个点插值大小。
   * @en The particle size spline. Up to 5 entries, particles interpolate sizes along these 5 points during their lifetime.
   * @category particle
   */
  particleSize: number[];

  /**
   * @zh 粒子大小分布。
   * @en The distribution of particle sizes.
   * @category particle
   */
  particleSizeSpread: number;

  /**
   * @zh 控制每个粒子的生命周期（以秒为单位）。
   * @en Controls the lifetime of each particle (in seconds).
   * @category particle
   */
  particleLifetime: number;

  /**
   * @zh 粒子生命周期的变化范围（以秒为单位）。
   * @en The variation range of particle lifetime (in seconds).
   * @category particle
   */
  particleLifetimeSpread: number;

  /**
   * @zh 粒子速度偏置。单位是方块/滴答。
   * @en The particle velocity offset. Unit is voxels/tick.
   * @category particle
   */
  particleVelocity: GameVector3;

  /**
   * @zh 粒子速度随机化范围。单位是方块/滴答。
   * @en The randomization range of particle velocity. Unit is voxels/tick.
   * @category particle
   */
  particleVelocitySpread: GameVector3;

  /**
   * @zh 粒子阻尼指数。0 = 无阻尼，正值减慢粒子，负值加速粒子。
   * @en The particle damping index. 0 = no damping, positive values slow down particles, negative values accelerate them.
   * @category particle
   */
  particleDamping: number;

  /**
   * 粒子加速度/重力力矢量
   * 单位是方块/(滴答^2)
   * @category particle
   */
  particleAcceleration: GameVector3;

  /**
   * 粒子噪声幅度。影响粒子运动
   * @category particle
   */
  particleNoise: number;

  /**
   * 粒子噪声频率。增加噪声偏置的运动速率
   * @category particle
   */
  particleNoiseFrequency: number;

  /**
   * 粒子目标实体
   * @category particle
   */
  particleTarget: GameEntity | null;

  /**
   * 粒子目标权重
   * @category particle
   */
  particleTargetWeight: number;

  /**
   * 启用交互
   * @category interact
   */
  enableInteract: boolean;

  /**
   * @zh 交互提示文本的颜色
   * @en The color of the interaction prompt text.
   * @category interact
   */
  interactColor: GameRGBColor;

  /**
   * @zh 交互实体的提示文本
   * @en The prompt text for the interactive entity.
   * @category interact
   */
  interactHint: string;

  /**
   * @zh 交互的半径范围
   * @en The radius range for interaction.
   * @category interact
   */
  interactRadius: number;

  /**
   * @zh 显示实体名称
   * @en Whether to display the entity's name.
   * @category entityName
   */
  showEntityName: boolean;

  /**
   * @zh 实体名称
   * @en The entity's name.
   * @category entityName
   */
  customName: string;

  /**
   * @zh 显示实体名称的半径范围
   * @en The radius range for displaying the entity's name.
   * @category entityName
   */
  nameRadius: number;

  /**
   * @zh 实体名称的颜色
   * @en The color of the entity's name.
   * @category entityName
   */
  nameColor: GameRGBColor;

  /**
   * @zh 当实体聊天时播放的声音
   * @en The sound played when the entity chats.
   * @category sound
   */
  chatSound: GameSoundEffect;

  /**
   * @zh 当实体受到伤害时播放的声音
   * @en The sound played when the entity is hurt.
   * @category sound
   */
  hurtSound: GameSoundEffect;

  /**
   * @zh 当实体死亡时播放的声音
   * @en The sound played when the entity dies.
   * @category sound
   */
  dieSound: GameSoundEffect;

  /**
   * @zh 当实体被交互时播放的声音
   * @en The sound played when the entity is interacted with.
   * @category sound
   */
  interactSound: GameSoundEffect;

  /**
   * @zh 如果为 true，则该实体是玩家
   * @en If true, this entity is a player.
   * @deprecated
   * @zh 已废弃。请直接使用 `if (entity.player)` 进行玩家实体存在性检查，这能让TypeScript自动推断出 {@link GameEntity.player} 在该代码块中是已定义的 {@link GamePlayer} 类型，从而提高类型安全性。
   * @en Deprecated. Please use `if (entity.player)` directly to check for player entity existence. This allows TypeScript to automatically infer that {@link GameEntity.player} is a defined {@link GamePlayer} type within that code block, improving type safety.
   * @category player
   */
  readonly isPlayer: boolean;

  /**
   * @zh 如果实体是玩家，则此属性存在。包含所有特定于玩家的状态和方法的引用。
   * @en If the entity is a player, this property exists. It contains references to all player-specific states and methods.
   * @category player
   */
  player: GamePlayer | undefined;
}

/**
 * @zh
 * 定义游戏动作配置接口，用于描述单个游戏动作的名称和迭代次数。
 * @en
 * Defines the game motion configuration interface, used to describe the name and iteration count of a single game motion.
 */
interface GameMotionConfig {
  /**
   * @zh 动作的名称
   * @en The name of the motion.
   */
  name: string;
  /**
   * @zh 动作的迭代次数
   * @en The number of iterations for the motion.
   */
  iterations: number;
}

/**
 * @zh
 * 定义游戏动作集配置接口，用于描述一组游戏动作及其整体的迭代次数。
 * @en
 * Defines the game motion clip configuration interface, used to describe a set of game motions and their overall iteration count.
 */
interface GameMotionClipConfig {
  /**
   * @zh 动作集，包含多个 `GameMotionConfig`
   * @en A set of motions, containing multiple `GameMotionConfig` objects.
   */
  motions: GameMotionConfig[];
  /**
   * @zh 整组动作的迭代次数
   * @en The number of iterations for the entire set of motions.
   */
  iterations: number;
}
/**
 * @zh
 * 游戏动作控制器类，用于管理和控制目标的动作播放。
 * @en
 * Game motion controller class, used for managing and controlling the motion playback of a target.
 * @template TargetType 动作目标对象的类型。
 */
declare class GameMotionController<TargetType> {
  /**
   * @zh
   * 通过名称（可以是动作列表）创建动作处理器。
   * @en
   * Creates a motion handler by name (can be a list of motions).
   * @param config
   * @zh 动作配置，可以是字符串、动作配置数组或单个动作剪辑配置。
   * @en The motion configuration, which can be a string, an array of motion configurations, or a single motion clip configuration.
   * @returns
   * @zh 返回一个 `GameMotionHandler` 实例，用于处理指定的动作。
   * @en Returns a `GameMotionHandler` instance for processing the specified motion.
   */
  loadByName: (
    config: string | GameMotionConfig[] | GameMotionClipConfig
  ) => GameMotionHandler<TargetType>;

  /**
   * @zh
   * 暂停当前动作。
   * @en
   * Pauses the current motion.
   */
  pause: () => void;

  /**
   * @zh
   * 恢复暂停的动作。
   * @en
   * Resumes the paused motion.
   */
  resume: () => void;

  /**
   * @zh
   * 通过名称设置默认动作。
   * @en
   * Sets the default motion by name.
   * @param motionName
   * @zh 动作名称，可选参数。
   * @en The name of the motion, optional parameter.
   */
  setDefaultMotionByName: (motionName?: string) => void;

  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）。
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually).
   * @remarks
   * @zh
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   * @en
   * This class is automatically created and maintained by the game engine. Direct instantiation by developers will result in an invalid object.
   * Please obtain an instance through the interface provided by the engine.
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 游戏动作处理器类，用于控制单个动作序列的播放。
 * @en
 * Game motion handler class, used to control the playback of a single motion sequence.
 * @template TargetType 动作目标对象的类型。
 */
declare class GameMotionHandler<TargetType> {
  /**
   * @zh
   * 动作目标对象（实体）。
   * @en
   * The target object (entity) of the motion.
   */
  readonly target: TargetType;

  /**
   * @zh
   * 开始播放动作。
   * @en
   * Starts playing the motion.
   */
  play: () => void;

  /**
   * @zh
   * 取消当前动作播放。
   * @en
   * Cancels the current motion playback.
   */
  cancel: () => void;

  /**
   * @zh 当动作成功完成时触发的事件。
   * @en Event triggered when the motion successfully completes.
   */
  onFinish: GameEventChannel<GameMotionEvent<TargetType>>;

  /**
   * @zh 下一次动作完成时的未来事件。
   * @en A future event for when the next motion completes.
   */
  nextFinish: GameEventFuture<GameMotionEvent<TargetType>>;

  /**
   * @zh 当动作被取消时触发的事件。
   * @en Event triggered when the motion is cancelled.
   */
  onCancel: GameEventChannel<GameMotionEvent<TargetType>>;

  /**
   * @zh 下一次动作取消时的未来事件。
   * @en A future event for when the next motion is cancelled.
   */
  nextCancel: GameEventFuture<GameMotionEvent<TargetType>>;

  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）。
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually).
   * @remarks
   * @zh
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   * @en
   * This class is automatically created and maintained by the game engine. Direct instantiation by developers will result in an invalid object.
   * Please obtain an instance through the interface provided by the engine.
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 表示与游戏动作相关的事件，携带有关目标和事件状态的信息。
 * @en
 * Represents an event related to a game motion, carrying information about the target and event state.
 * @template TargetType 动作目标对象的类型。
 */
declare class GameMotionEvent<TargetType> {
  /**
   * @zh 发生事件的刻度。
   * @en The tick at which the event occurred.
   */
  tick: number;

  /**
   * @zh 事件的目标对象。
   * @en The target object of the event.
   */
  readonly target: TargetType;

  /**
   * @zh 动作事件处理器，特定于目标对象。
   * @en The motion event handler, specific to the target object.
   */
  motionHandler: GameMotionHandler<TargetType>;

  /**
   * @zh 表示事件是否被取消。
   * @en Indicates whether the event has been cancelled.
   */
  readonly cancelled: boolean;

  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）。
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually).
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh
 * 描述一个活跃的实体对接触状态。
 * @en
 * Describes an active entity pair contact state.
 * @category Contacts
 */
declare class GameEntityContact {
  /**
   * @zh
   * 接触的另一个实体。
   * @en
   * The other entity in the contact.
   */
  other: GameEntity;

  /**
   * @zh
   * 接触力。
   * @en
   * The contact force.
   */
  force: GameVector3;

  /**
   * @zh
   * 接触轴。
   * @en
   * The contact axis.
   */
  axis: GameVector3;

  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）。
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually).
   * @remarks
   * @zh
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   * @en
   * This class is automatically created and maintained by the game engine. Direct instantiation by developers will result in an invalid object.
   * Please obtain an instance through the interface provided by the engine.
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 描述一个活跃的方块接触状态。
 * @en
 * Describes an active voxel contact state.
 * @category Contacts
 */
declare class GameVoxelContact {
  /**
   * @zh
   * 方块的 X 坐标。
   * @en
   * The X coordinate of the voxel.
   */
  x: number;

  /**
   * @zh
   * 方块的 Y 坐标。
   * @en
   * The Y coordinate of the voxel.
   */
  y: number;

  /**
   * @zh
   * 方块的 Z 坐标。
   * @en
   * The Z coordinate of the voxel.
   */
  z: number;

  /**
   * @zh
   * 方块编号。
   * @en
   * The voxel ID.
   */
  voxel: voxelId;

  /**
   * @zh
   * 接触力。
   * @en
   * The contact force.
   */
  force: GameVector3;

  /**
   * @zh
   * 接触轴。
   * @en
   * The contact axis.
   */
  axis: GameVector3;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 活跃流体接触。
 * @en Active fluid contact.
 */
declare class GameFluidContact {
  /**
   * @zh 方块编号。
   * @en The voxel ID.
   */
  voxel: voxelId;
  /**
   * @zh 流体体积。
   * @en The volume of the fluid.
   */
  volume: number;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 玩家移动状态。
 * @en Player movement state.
 */
declare enum GamePlayerMoveState {
  FLYING = "fly",
  GROUND = "ground",
  SWIM = "swim",
  FALL = "fall",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2",
}
/**
 * @zh 玩家行走状态。
 * @en Player walking state.
 */
declare enum GamePlayerWalkState {
  NONE = "",
  CROUCH = "crouch",
  WALK = "walk",
  RUN = "run",
}
/**
 * @zh 身体部位。
 * @en Body part.
 */
declare enum GameBodyPart {
  HIPS = "hips",
  TORSO = "torso",
  NECK = "neck",
  HEAD = "head",
  LEFT_SHOULDER = "leftShoulder",
  LEFT_UPPER_ARM = "leftUpperArm",
  LEFT_LOWER_ARM = "leftLowerArm",
  LEFT_HAND = "leftHand",
  LEFT_UPPER_LEG = "leftUpperLeg",
  LEFT_LOWER_LEG = "leftLowerLeg",
  LEFT_FOOT = "leftFoot",
  RIGHT_SHOULDER = "rightShoulder",
  RIGHT_UPPER_ARM = "rightUpperArm",
  RIGHT_LOWER_ARM = "rightLowerArm",
  RIGHT_HAND = "rightHand",
  RIGHT_UPPER_LEG = "rightUpperLeg",
  RIGHT_LOWER_LEG = "rightLowerLeg",
  RIGHT_FOOT = "rightFoot",
}
/**
 * @zh 皮肤值，可以是字符串、未定义或空值。
 * @en The skin value, which can be a string, undefined, or null.
 */
declare type GameSkinValue = string | undefined | null;

/**
 * @zh 皮肤定义，将每个身体部位映射到一个皮肤值。
 * @en Defines the skin, mapping each body part to a skin value.
 */
declare type GameSkin = {
  [key in GameBodyPart]: GameSkinValue;
};

/**
 * @zh 皮肤可见性定义，将每个身体部位映射到一个布尔值。
 * @en Defines skin visibility, mapping each body part to a boolean value.
 */
declare type GameSkinInvisible = {
  [key in GameBodyPart]: boolean;
};

/**
 * @zh 定义游戏可穿戴物品的规格接口。该接口用于描述游戏中的可穿戴物品的各种属性，以便在游戏环境中准确地呈现这些物品。
 * @en Defines the specification interface for game wearables. This interface is used to describe the various attributes of wearable items in the game to accurately render them in the game environment.
 */
interface GameWearableSpec {
  /**
   * @zh 身体部位，表示该可穿戴物品所对应的穿戴位置。
   * @en The body part to which this wearable corresponds.
   */
  bodyPart: GameBodyPart;
  /**
   * @zh 网格模型路径，用于指定该物品的3D模型。
   * @en The mesh model path, used to specify the 3D model for this item.
   */
  mesh: GameModelAssets | "";
  /**
   * @zh 颜色，表示该物品在游戏中的显示颜色。
   * @en The color of the item as displayed in the game.
   */
  color: GameRGBColor;
  /**
   * @zh 发光强度，用于控制物品的自发光效果，使其在特定条件下更加显眼。
   * @en The emissive intensity, used to control the self-illumination effect of the item, making it more conspicuous under certain conditions.
   */
  emissive: number;
  /**
   * @zh 金属度，用于控制物品的金属质感，影响光照下的反射和折射效果。
   * @en The metalness, used to control the metallic texture of the item, affecting reflection and refraction effects under lighting.
   */
  metalness: number;
  /**
   * @zh 光泽度，用于控制物品表面的光滑程度，影响光线的反射效果。
   * @en The shininess, used to control the smoothness of the item's surface, affecting the reflection of light.
   */
  shininess: number;
  /**
   * @zh 朝向，表示物品在空间中的旋转状态，用于确保物品正确地面向玩家或指定方向。
   * @en The orientation, representing the rotational state of the item in space, used to ensure the item correctly faces the player or a specified direction.
   */
  orientation: GameQuaternion;
  /**
   * @zh 缩放，用于控制物品的大小，允许在不同情境下调整物品的视觉大小。
   * @en The scale, used to control the size of the item, allowing for adjustment of its visual size in different contexts.
   */
  scale: GameVector3;
  /**
   * @zh 偏移，表示物品相对于默认位置的移动距离，用于精确定位物品在游戏世界中的位置。
   * @en The offset, representing the distance the item is moved from its default position, used for precise positioning in the game world.
   */
  offset: GameVector3;
}
/**
 * @zh 可穿戴物品类，实现了 GameWearableSpec 接口。
 * @en The wearable item class, implementing the GameWearableSpec interface.
 */
declare class GameWearable implements GameWearableSpec {
  /**
   * @zh 此可穿戴装备所附着的玩家。
   * @en The player to whom this wearable is attached.
   */
  player: GamePlayer | null;
  /**
   * @zh 此可穿戴装备所附着的身体部位。
   * @en The body part to which this wearable is attached.
   */
  bodyPart: GameBodyPart;
  /**
   * @zh 此可穿戴装备的网格模型。
   * @en The mesh model for this wearable.
   */
  mesh: GameModelAssets | "";
  /**
   * @zh 可穿戴装备的可选颜色调整。
   * @en Optional color adjustment for the wearable.
   */
  color: GameRGBColor;
  /**
   * @zh 可穿戴装备的发光度调整。
   * @en Emissive adjustment for the wearable.
   */
  emissive: number;
  /**
   * @zh 可穿戴装备的金属度调整。
   * @en Metalness adjustment for the wearable.
   */
  metalness: number;
  /**
   * @zh 可穿戴装备的光泽度调整。
   * @en Shininess adjustment for the wearable.
   */
  shininess: number;
  /**
   * @zh 可穿戴装备的方向。
   * @en The orientation of the wearable.
   */
  orientation: GameQuaternion;
  /**
   * @zh 可穿戴装备在x/y/z轴上的缩放。
   * @en The scale of the wearable on the x/y/z axes.
   */
  scale: GameVector3;
  /**
   * @zh 可穿戴装备的位置偏移。
   * @en The position offset of the wearable.
   */
  offset: GameVector3;
  /**
   * @zh 移除此可穿戴装备。
   * @en Removes this wearable.
   */
  remove(): void;
}
/**
 * @zh 定义游戏对话的类型。
 * GameDialogType 枚举列出了游戏中对话类型：
 * - `TEXT` —— 文本
 * - `SELECT` —— 选择
 * - `INPUT` —— 输入
 * @en Defines the type of game dialog.
 * The GameDialogType enum lists the types of dialogs in the game:
 * - `TEXT` — Text
 * - `SELECT` — Selection
 * - `INPUT` — Input
 */
declare enum GameDialogType {
  TEXT = "text",
  SELECT = "select",
  INPUT = "input",
}
/**
 * @zh 表示游戏中对话框的选择响应。
 * @en Represents the selection response from a game dialog.
 */
declare type GameDialogSelectResponse = {
  /**
   * @zh 选中选项的索引号。
   * @en The index number of the selected option.
   */
  index: number;
  /**
   * @zh 选中选项的字符串值。
   * @en The string value of the selected option.
   */
  value: string;
};
/**
 * @zh 对话框响应，可以是选择响应、字符串或空值。
 * @en The dialog response, which can be a selection response, a string, or null.
 */
declare type GameDialogResponse = GameDialogSelectResponse | string | null;
/**
 * @zh 对话框参数类型定义。
 * @en Defines the parameters for a dialog box.
 */
declare type GameDialogParams = {
  /**
   * @zh 对话框类型。
   * @en The type of the dialog box.
   */
  type: GameDialogType;
  /**
   * @zh 对话框标题。
   * @en The title of the dialog box.
   */
  title?: string;
  /**
   * @zh 对话框内容。
   * @en The content of the dialog box.
   */
  content: string;
  /**
   * @zh 对话框标题背景色。
   * @en The background color of the dialog box title.
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框标题文字颜色。
   * @en The text color of the dialog box title.
   */
  titleTextColor?: GameRGBAColor;
  /**
   * @zh 对话框背景色。
   * @en The background color of the dialog box.
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框文字颜色。
   * @en The text color of the dialog box.
   */
  contentTextColor?: GameRGBAColor;
  /**
   * @zh 文本对话框是否显示箭头。
   * @en Whether the text dialog box displays an arrow.
   */
  hasArrow?: boolean;
  /**
   * @zh 选择对话框的选项列表。
   * @en The list of options for the selection dialog box.
   */
  options?: string[];
  /**
   * @zh 输入对话框的默认输入文本。
   * @en The default input text for the input dialog.
   */
  placeholder?: string;
  /**
   * @zh 输入对话框的确认按钮文本。
   * @en The text for the confirm button in the input dialog.
   */
  confirmText?: string;
  /**
   * @zh 对象的目标点。
   * @en The target point of the object.
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * @zh 如果目标实体已给出，则为目标实体的偏移量。
   * @en The offset of the target entity if one is given.
   */
  lookTargetOffset?: GameVector3;
  /**
   * @zh 相机上方向量。
   * @en The up vector of the camera.
   */
  lookUp?: GameVector3;
  /**
   * @zh 相机眼位置。
   * @en The position of the camera eye.
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * @zh 如果相机眼位置是实体，则为实体位置的偏移量。
   * @en The offset of the entity's position if the camera eye position is an entity.
   */
  lookEyeOffset?: GameVector3;
};
/**
 * @zh 游戏文本对话框参数类型定义。
 * @en Defines the parameters for a game text dialog.
 */
declare type GameTextDialogParams = {
  type: GameDialogType.TEXT;
  /**
   * @zh 对话框标题。
   * @en The title of the dialog box.
   */
  title?: string;
  /**
   * @zh 对话框内容。
   * @en The content of the dialog box.
   */
  content: string;
  /**
   * @zh 对话框标题背景色。
   * @en The background color of the dialog box title.
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框标题文字颜色。
   * @en The text color of the dialog box title.
   */
  titleTextColor?: GameRGBAColor;
  /**
   * @zh 对话框背景色。
   * @en The background color of the dialog box.
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框文字颜色。
   * @en The text color of the dialog box.
   */
  contentTextColor?: GameRGBAColor;
  /**
   * @zh 是否绘制箭头。
   * @en Whether to draw an arrow.
   */
  hasArrow?: boolean;
  /**
   * @zh 对象的目标点。
   * @en The target point of the object.
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * @zh 如果目标实体已给出，则为目标实体的偏移量。
   * @en The offset of the target entity if one is given.
   */
  lookTargetOffset?: GameVector3;
  /**
   * @zh 相机上方向量。
   * @en The up vector of the camera.
   */
  lookUp?: GameVector3;
  /**
   * @zh 相机眼位置。
   * @en The position of the camera eye.
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * @zh 如果相机眼位置是实体，则为实体位置的偏移量。
   * @en The offset of the entity's position if the camera eye position is an entity.
   */
  lookEyeOffset?: GameVector3;
};

/**
 * @zh 游戏选择对话框参数类型定义。
 * @en Defines the parameters for a game select dialog.
 */
declare type GameSelectDialogParams = {
  type: GameDialogType.SELECT;
  /**
   * @zh 对话框标题。
   * @en The title of the dialog box.
   */
  title?: string;
  /**
   * @zh 对话框内容。
   * @en The content of the dialog box.
   */
  content: string;
  /**
   * @zh 对话框标题背景色。
   * @en The background color of the dialog box title.
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框标题文字颜色。
   * @en The text color of the dialog box title.
   */
  titleTextColor?: GameRGBAColor;
  /**
   * @zh 对话框背景色。
   * @en The background color of the dialog box.
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框文字颜色。
   * @en The text color of the dialog box.
   */
  contentTextColor?: GameRGBAColor;
  /**
   * @zh 选项列表。
   * @en The list of options.
   */
  options: string[];
  /**
   * @zh 对象的目标点。
   * @en The target point of the object.
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * @zh 如果目标实体已给出，则为目标实体的偏移量。
   * @en The offset of the target entity if one is given.
   */
  lookTargetOffset?: GameVector3;
  /**
   * @zh 相机上方向量。
   * @en The up vector of the camera.
   */
  lookUp?: GameVector3;
  /**
   * @zh 相机眼位置。
   * @en The position of the camera eye.
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * @zh 如果相机眼位置是实体，则为实体位置的偏移量。
   * @en The offset of the entity's position if the camera eye position is an entity.
   */
  lookEyeOffset?: GameVector3;
};

/**
 * @zh 游戏输入对话框参数类型定义。
 * @en Defines the parameters for a game input dialog.
 */
declare type GameInputDialogParams = {
  type: GameDialogType.INPUT;
  /**
   * @zh 对话框标题。
   * @en The title of the dialog box.
   */
  title?: string;
  /**
   * @zh 对话框内容。
   * @en The content of the dialog box.
   */
  content: string;
  /**
   * @zh 对话框标题背景色。
   * @en The background color of the dialog box title.
   */
  titleBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框标题文字颜色。
   * @en The text color of the dialog box title.
   */
  titleTextColor?: GameRGBAColor;
  /**
   * @zh 对话框背景色。
   * @en The background color of the dialog box.
   */
  contentBackgroundColor?: GameRGBAColor;
  /**
   * @zh 对话框文字颜色。
   * @en The text color of the dialog box.
   */
  contentTextColor?: GameRGBAColor;
  /**
   * @zh 输入框默认文本。
   * @en The default text in the input box.
   */
  placeholder?: string;
  /**
   * @zh 确认按钮文本。
   * @en The text for the confirm button.
   */
  confirmText?: string;
  /**
   * @zh 对象的目标点。
   * @en The target point of the object.
   */
  lookTarget?: GameVector3 | GameEntity;
  /**
   * @zh 如果目标实体已给出，则为目标实体的偏移量。
   * @en The offset of the target entity if one is given.
   */
  lookTargetOffset?: GameVector3;
  /**
   * @zh 相机上方向量。
   * @en The up vector of the camera.
   */
  lookUp?: GameVector3;
  /**
   * @zh 相机眼位置。
   * @en The position of the camera eye.
   */
  lookEye?: GameVector3 | GameEntity;
  /**
   * @zh 如果相机眼位置是实体，则为实体位置的偏移量。
   * @en The offset of the entity's position if the camera eye position is an entity.
   */
  lookEyeOffset?: GameVector3;
};
/**
 * @zh 定义游戏对话框取消选项的类型，用于表示对话框取消操作的回调函数。
 * @en Defines the type for a game dialog cancel option, used to represent the callback function for a dialog cancellation.
 */
declare type GameDialogCancelOption = {
  /**
   * @zh 取消对话框的操作。
   * @en The operation to cancel the dialog.
   */
  cancel: () => void;
};

/**
 * @zh 定义游戏摄像头模式的枚举，包含游戏摄像头可以设置的不同模式。
 * @en Defines the enumeration for game camera modes, including the different modes the game camera can be set to.
 */
declare enum GameCameraMode {
  /**
   * @zh 摄像头跟随玩家移动。
   * @en The camera follows the player's movement.
   */
  FOLLOW = "follow",
  /**
   * @zh 第一人称射击视角。
   * @en First-person shooter perspective.
   */
  FPS = "fps",
  /**
   * @zh 固定视角。
   * @en Fixed perspective.
   */
  FIXED = "fixed",
  /**
   * @zh 相对视角。
   * @en Relative perspective.
   */
  RELATIVE = "relative",
}
/**
 * @zh 冻结相机轴的枚举。
 * @en Enum for freezing camera axes.
 */
declare enum GameCameraFreezedAxis {
  NONE = "",
  X = "x",
  Y = "y",
  Z = "z",
  XY = "xy",
  XZ = "xz",
  YZ = "yz",
  XYZ = "xyz",
}
/**
 * @zh 输入方向的枚举。
 * @en Enum for input direction.
 */
declare enum GameInputDirection {
  NONE = "none",
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
  BOTH = "both",
}
/**
 * @zh 游戏玩家关键帧接口，定义了玩家在游戏中的动画和视觉属性。
 * @en Interface for game player keyframes, defining the animation and visual attributes of a player in the game.
 */
interface GamePlayerKeyframe {
  /**
   * @zh 关键帧持续时间，单位为毫秒。
   * @en The duration of the keyframe in milliseconds.
   */
  duration: number;
  /**
   * @zh 加速曲线类型，用于控制动画开始时的速度变化。
   * @en The easing type for acceleration, controlling the speed change at the start of the animation.
   */
  easeIn: GameEasing;
  /**
   * @zh 减速曲线类型，用于控制动画结束时的速度变化。
   * @en The easing type for deceleration, controlling the speed change at the end of the animation.
   */
  easeOut: GameEasing;
  /**
   * @zh 玩家模型的缩放比例。
   * @en The scale of the player model.
   */
  scale: number;
  /**
   * @zh 玩家模型的颜色，使用RGB格式。
   * @en The color of the player model in RGB format.
   */
  color: GameRGBColor;
  /**
   * @zh 金属度属性，影响材质的反射和高光特性。
   * @en The metalness property, affecting the reflection and specular characteristics of the material.
   */
  metalness: number;
  /**
   * @zh 自发光属性，使模型在黑暗中可见。
   * @en The emissive property, making the model visible in the dark.
   */
  emissive: number;
  /**
   * @zh 光泽度属性，影响材质的反光强度。
   * @en The shininess property, affecting the reflective intensity of the material.
   */
  shininess: number;
  /**
   * @zh 玩家模型是否不可见。
   * @en Whether the player model is invisible.
   */
  invisible: boolean;
  /**
   * @zh 玩家名称是否显示。
   * @en Whether the player name is displayed.
   */
  showName: boolean;
  /**
   * @zh 玩家指示器是否显示。
   * @en Whether the player indicator is displayed.
   */
  showIndicator: boolean;
  /**
   * @zh 颜色查找表，用于动态调整颜色。
   * @en The color lookup table, used for dynamic color adjustment.
   */
  colorLUT: string;
  /**
   * @zh 相机模式，决定相机的移动和旋转行为。
   * @en The camera mode, determining the camera's movement and rotation behavior.
   */
  cameraMode: GameCameraMode;
  /**
   * @zh 相机实体，关联到场景中的具体对象。
   * @en The camera entity, associated with a specific object in the scene.
   */
  cameraEntity: GameEntity | null;
  /**
   * @zh 相机目标点，相机试图对准的位置。
   * @en The camera target point, the position the camera tries to aim at.
   */
  cameraTarget: GameVector3;
  /**
   * @zh 相机上方向量，定义相机的向上方向。
   * @en The camera's up vector, defining the upward direction of the camera.
   */
  cameraUp: GameVector3;
  /**
   * @zh 相机位置，相机在世界空间中的坐标。
   * @en The camera position, the coordinates of the camera in world space.
   */
  cameraPosition: GameVector3;
  /**
   * @zh 相机冻结轴，限制相机在特定轴上的移动。
   * @en The camera's freezed axis, restricting camera movement on specific axes.
   */
  cameraFreezedAxis: GameCameraFreezedAxis;
  /**
   * @zh 相机垂直视野角，影响投影矩阵的构建。
   * @en The camera's vertical field of view, affecting the construction of the projection matrix.
   */
  cameraFovY: number;
  /**
   * @zh 相机与目标点的距离。
   * @en The distance between the camera and the target point.
   */
  cameraDistance: number;
}

/**
 * @zh 游戏虚拟手柄接口，定义了手柄上各个按钮和摇杆的映射。
 * @en Interface for the game's virtual gamepad, defining the mapping of various buttons and joysticks on the controller.
 */
interface Gamepad {
  /**
   * @zh 摇杆背景图片路径。
   * @en The image path for the joystick background.
   */
  joystickBackground: GamePictureAssets | "";
  /**
   * @zh 摇杆控制器图片路径。
   * @en The image path for the joystick controller.
   */
  joystickController: GamePictureAssets | "";
  /**
   * @zh 飞行按钮图片路径。
   * @en The image path for the fly button.
   */
  flyButton: GamePictureAssets | "";
  /**
   * @zh 飞行背景图片路径。
   * @en The image path for the flying background.
   */
  flyingBackground: GamePictureAssets | "";
  /**
   * @zh 飞行控制器图片路径。
   * @en The image path for the flying controller.
   */
  flyingController: GamePictureAssets | "";
  /**
   * @zh 跳跃按钮图片路径。
   * @en The image path for the jump button.
   */
  jump: GamePictureAssets | "";
  /**
   * @zh 蹲下按钮图片路径。
   * @en The image path for the crouch button.
   */
  crouch: GamePictureAssets | "";
  /**
   * @zh 动作A按钮图片路径。
   * @en The image path for the action A button.
   */
  actionA: GamePictureAssets | "";
  /**
   * @zh 动作B按钮图片路径。
   * @en The image path for the action B button.
   */
  actionB: GamePictureAssets | "";
}
/**
 * @zh 玩家对应于连接到游戏的用户。每个玩家对象代表一个已连接的用户，可以包含玩家的详细信息，如用户名、得分、角色等。
 * @en A player corresponds to a user connected to the game. Each player object represents a connected user and can contain detailed information such as username, score, character, etc.
 */
declare class GamePlayer {
  /**
   * @zh 向玩家发送私聊消息。
   * @en Sends a direct message to the player.
   * @category Chat
   */
  directMessage: (message: string) => void;

  /**
   * @zh 当玩家发起聊天事件时调用。
   * @en Called when the player initiates a chat event.
   * @category Chat
   */
  onChat: GameEventChannel<GameChatEvent>;

  /**
   * @zh 获取下一个聊天事件。
   * @en Gets the next chat event.
   * @category Chat
   */
  nextChat: GameEventFuture<GameChatEvent>;

  /**
   * @zh 当玩家按下按钮时调用。
   * @en Called when the player presses a button.
   * @category Input
   */
  onPress: GameEventChannel<GameInputEvent>;

  /**
   * @zh 获取下一个按键按下事件。
   * @en Gets the next button press event.
   * @category Input
   */
  nextPress: GameEventFuture<GameInputEvent>;

  /**
   * @zh 当玩家释放按钮时调用。
   * @en Called when the player releases a button.
   * @category Input
   */
  onRelease: GameEventChannel<GameInputEvent>;

  /**
   * @zh 获取下一个按键释放事件。
   * @en Gets the next button release event.
   * @category Input
   */
  nextRelease: GameEventFuture<GameInputEvent>;

  /**
   * @zh 当玩家重生时调用。
   * @en Called when the player respawns.
   * @category Health
   */
  onRespawn: GameEventChannel<GameRespawnEvent>;

  /**
   * @zh 获取下一个重生事件。
   * @en Gets the next respawn event.
   * @category Health
   */
  nextRespawn: GameEventFuture<GameRespawnEvent>;

  /**
   * @zh 强制玩家重生。
   * @en Forces the player to respawn.
   * @category Health
   */
  forceRespawn: () => void;

  /**
   * @zh 为玩家打开一个对话框。
   * @en Opens a dialog box for the player.
   * @category Dialog
   * @param params @zh 对话框参数，可以是 {@link GameInputDialogParams}、{@link GameTextDialogParams} 或 {@link GameSelectDialogParams} 中的一种。 @en The dialog parameters, which can be one of {@link GameInputDialogParams}, {@link GameTextDialogParams}, or {@link GameSelectDialogParams}.
   * @returns @zh 如果参数类型为 {@link GameSelectDialogParams}，则返回 {@link GameDialogSelectResponse} 或 null 的 Promise；否则，返回 string 或 null 的 Promise。 @en If the parameter type is {@link GameSelectDialogParams}, it returns a Promise of {@link GameDialogSelectResponse} or null; otherwise, it returns a Promise of string or null.
   */
  dialog<
    T extends
      | GameInputDialogParams
      | GameTextDialogParams
      | GameSelectDialogParams
  >(
    params: T
  ): T extends GameSelectDialogParams
    ? Promise<GameDialogSelectResponse | null>
    : Promise<string | null>;
  dialog(params: GameInputDialogParams): Promise<string | null>;
  dialog(params: GameTextDialogParams): Promise<string | null>;
  dialog(
    params: GameSelectDialogParams
  ): Promise<GameDialogSelectResponse | null>;

  /**
   * @zh 取消玩家的所有打开的对话框。
   * @en Cancels all open dialogs for the player.
   * @category Dialog
   */
  cancelDialogs: () => void;

  /**
   * @zh 在客户端打开一个超链接。
   * @en Opens a hyperlink on the client side.
   * @category Web
   */
  link: (
    href: string,
    options?: {
      /**
       * @zh 是否弹出确认的提醒？
       * @en Should a confirmation prompt be displayed?
       */
      isConfirm?: boolean;

      /**
       * @zh 是否新标签页打开网页？
       * @en Should the webpage be opened in a new tab?
       */
      isNewTab?: boolean;
    }
  ) => void;

  /**
   * @zh 列出玩家身上所有可穿戴物品。
   * @en Lists all wearable items on the player.
   * @param bodyPart @zh 是一个可选过滤器，用于显示特定身体部位上的可穿戴物品。 @en An optional filter to display wearable items on a specific body part.
   * @category Display
   */
  wearables: (bodyPart?: GameBodyPart) => GameWearable[];

  /**
   * @zh 为玩家添加一个新的可穿戴物品。
   * @en Adds a new wearable item to the player.
   * @category Display
   */
  addWearable: (spec: Partial<GameWearable>) => GameWearable;

  /**
   * @zh 从玩家身上移除一个可穿戴物品。
   * @en Removes a wearable item from the player.
   * @param wearable @zh 要移除的可穿戴物品。 @en The wearable item to remove.
   * @category Display
   */
  removeWearable: (wearable: GameWearable) => void;

  /**
   * @zh 通过皮肤名称设置玩家皮肤。
   * @en Sets the player's skin by skin name.
   * @category Display
   */
  setSkinByName: (skinName: string) => void;

  /**
   * @zh 将玩家重置为默认皮肤。
   * @en Resets the player to the default skin.
   * @category Display
   */
  resetToDefaultSkin: () => void;

  /**
   * @zh 清除玩家自定义皮肤并恢复到角色皮肤。
   * @en Clears the player's custom skin and restores the character's skin.
   * @category Display
   */
  clearSkin: () => void;

  /**
   * @zh 为玩家播放声音。
   * @en Plays a sound for the player.
   * @category Sound
   */
  sound: (
    spec:
      | {
          /**
           * @zh 用于表示样本或示例数据。
           * @en Used to represent sample or example data.
           */
          sample: GameAudioAssets | "";

          /**
           * @zh 用于表示增益或音量调整。
           * @en Used to represent gain or volume adjustment.
           */
          gain?: number;

          /**
           * @zh 用于表示音高或频率调整。
           * @en Used to represent pitch or frequency adjustment.
           */
          pitch?: number;
        }
      | GameAudioAssets
      | ""
  ) => Sound;

  /**
   * @zh 播放动画。
   * @en Plays an animation.
   * @category Animation
   */
  animate: (
    keyframes: Partial<GamePlayerKeyframe>[],
    playbackConfig?: GameAnimationPlaybackConfig
  ) => GameAnimation<GamePlayerKeyframe, GamePlayer>;

  /**
   * @zh 获取当前播放的所有动画。
   * @en Gets all currently playing animations.
   * @category Animation
   */
  getAnimations: () => GameAnimation<GamePlayerKeyframe, GamePlayer>[];

  /**
   * @zh 将用户踢出服务器。
   * @en Kicks the user from the server.
   * @category Admin
   */
  kick: () => void;

  /**
   * @zh 设置摄像机的垂直旋转角度。
   * @en Sets the vertical rotation angle of the camera.
   * @category Camera
   */
  setCameraPitch: (value: number) => void;

  /**
   * @zh 设置摄像机的水平旋转角度。
   * @en Sets the horizontal rotation angle of the camera.
   * @category Camera
   */
  setCameraYaw: (value: number) => void;

  /**
   * @zh 打开商品购买对话框。
   * @en Opens the product purchase dialog.
   * @category Web
   */
  openMarketplace: (productIds: GameProductAssets[]) => void;

  /**
   * @zh 获取玩家的喵币数量。
   * @en Gets the player's Miao Shells count.
   * @category Economy
   */
  getMiaoShells: () => Promise<number>;

  /**
   * @zh 打开分享模态框。
   * @en Opens the share modal.
   * @category Web
   */
  share: (content: string) => void;

  /**
   * @zh 打开用户个人资料对话框。
   * @en Opens the user profile dialog.
   * @category Social
   */
  openUserProfileDialog: (userId: number) => void;

  /**
   * @zh 查询用户的社交关系。
   * @en Queries the user's social relationships.
   * @category Social
   */
  querySocial: (socialType: SocialType) => Promise<number[]>;

  /**
   * @zh 查询用户的社交统计信息。
   * @en Queries the user's social statistics.
   * @category Social
   */
  querySocialStatistic: () => Promise<SocialStatisticType>;

  /**
   * @zh 当玩家按下键盘键时调用。
   * @en Called when the player presses a keyboard key.
   * @category Input
   */
  onKeyDown: GameEventChannel<GameKeyBoardEvent>;

  /**
   * @zh 当玩家释放键盘键时调用。
   * @en Called when the player releases a keyboard key.
   * @category Input
   */
  onKeyUp: GameEventChannel<GameKeyBoardEvent>;
  /**
   * @zh 设置虚拟按键图片。
   * @en Sets the virtual button images.
   */
  gamepad: Gamepad;

  /**
   * @zh 玩家名称。常量。
   * @en The player's name. Constant.
   */
  name: string;

  /**
   * @zh 登录玩家的用户ID。
   * @en The logged-in user's ID.
   */
  userId: string;

  /**
   * @zh 此玩家的唯一用户密钥。可用于将他们的信息保存到数据库中。
   * @en The unique user key for this player. Can be used to save their information in a database.
   */
  userKey: string;

  /**
   * @zh 如果已登录，则为玩家的 Box 用户 ID。
   * @en The player's Box user ID if logged in.
   */
  boxId: string;

  /**
   * @zh 如果已登录，则为玩家的头像。
   * @en The player's avatar if logged in.
   */
  avatar: string;

  /**
   * @zh 玩家 URL。
   * @en The player's URL.
   */
  url: URL;

  /**
   * @zh 玩家的初始生成点。
   * @en The player's initial spawn point.
   * @category Spawn
   */
  spawnPoint: GameVector3;

  /**
   * @zh 移动边界。
   * @en Movement bounds.
   * @category Spawn
   */
  movementBounds: GameBounds3;

  /**
   * @zh 缩放比例。
   * @en Scale factor.
   * @category 显示
   */
  scale: number;

  /**
   * @zh 颜色。
   * @en Color.
   * @category Display
   */
  color: GameRGBColor;

  /**
   * @zh 金属度。
   * @en Metalness.
   * @category Display
   */
  metalness: number;

  /**
   * @zh 发光强度。
   * @en Emissive intensity.
   * @category Display
   */
  emissive: number;

  /**
   * @zh 光泽度。
   * @en Shininess.
   * @category Display
   */
  shininess: number;

  /**
   * @zh 是否隐身。
   * @en Whether the player is invisible.
   * @category Display
   */
  invisible: boolean;

  /**
   * @zh 是否显示名称。
   * @en Whether to show the name.
   * @category Display
   */
  showName: boolean;

  /**
   * @zh 是否显示指示器。
   * @en Whether to show the indicator.
   * @category Display
   */
  showIndicator: boolean;

  /**
   * @zh 是否死亡。
   * @en Whether the player is dead.
   * @category Health
   */
  dead: boolean;

  /**
   * @zh 颜色分级查找表，应用于玩家以调整游戏状态的颜色。
   * @en Color lookup table applied to the player to adjust game state colors.
   */
  colorLUT: string;

  /**
   * @zh 摄像机行为模式。
   * @en Camera behavior mode.
   *  + `"FPS"` - @zh 第一人称摄像机 @en First-person camera
   *  + `"FOLLOW"` - @zh 第三人称跟随摄像机（默认） @en Third-person follow camera (default)
   *  + `"FIXED"` - @zh 第三人称固定摄像机 @en Third-person fixed camera
   *  + `"RELATIVE"` - @zh 相对玩家位置的第三人称摄像机 @en Third-person camera relative to player position
   * @category Camera
   */
  cameraMode: GameCameraMode;

  /**
   * @zh 在FPS或FOLLOW模式下，玩家摄像机跟随的实体。
   * @en The entity that the player's camera follows in FPS or FOLLOW mode.
   * @category Camera
   */
  cameraEntity: GameEntity | null;

  /**
   * @zh 在FIXED模式下的摄像机目标点。
   * @en The camera target point in FIXED mode.
   * @category Camera
   */
  cameraTarget: GameVector3;

  /**
   * @zh 在FIXED模式下的摄像机上向量。
   * @en The camera up vector in FIXED mode.
   * @category Camera
   */
  cameraUp: GameVector3;

  /**
   * @zh 在FIXED模式下的摄像机眼睛位置。
   * @en The camera eye position in FIXED mode.
   * @category Camera
   */
  cameraPosition: GameVector3;

  /**
   * @zh 在RELATIVE模式下冻结的摄像机轴。
   * @en The frozen camera axis in RELATIVE mode.
   * @category Camera
   */
  cameraFreezedAxis: GameCameraFreezedAxis;

  /**
   * @zh 摄像机视场角Y。
   * @en The camera field of view Y.
   * @category Camera
   */
  cameraFovY: number;

  /**
   * @zh 摄像机距离。
   * @en The camera distance.
   * @category Camera
   */
  cameraDistance: number;

  /**
   * @zh 如果为true，允许玩家飞行。
   * @en If true, allows the player to fly.
   * @category Movement
   */
  canFly: boolean;

  /**
   * @zh 如果为true，玩家是幽灵，可以穿过墙壁。
   * @en If true, the player is a ghost and can pass through walls.
   * @category Movement
   */
  spectator: boolean;

  /**
   * @zh 最大步行速度。
   * @en Maximum walking speed.
   * @category Movement
   */
  walkSpeed: number;

  /**
   * @zh 步行加速度。
   * @en Walking acceleration.
   * @category Movement
   */
  walkAcceleration: number;

  /**
   * @zh 最大跑步速度。
   * @en Maximum running speed.
   * @category Movement
   */
  runSpeed: number;

  /**
   * @zh 跑步加速度。
   * @en Running acceleration.
   * @category Movement
   */
  runAcceleration: number;

  /**
   * @zh 蹲下行走速度。
   * @en Crouching walking speed.
   * @category Movement
   */
  crouchSpeed: number;

  /**
   * @zh 蹲下行走加速度。
   * @en Crouching walking acceleration.
   * @category Movement
   */
  crouchAcceleration: number;

  /**
   * @zh 最大游泳速度。
   * @en Maximum swimming speed.
   * @category Movement
   */
  swimSpeed: number;

  /**
   * @zh 游泳加速度。
   * @en Swimming acceleration.
   * @category Movement
   */
  swimAcceleration: number;

  /**
   * @zh 最大飞行速度。
   * @en Maximum flying speed.
   * @category Movement
   */
  flySpeed: number;

  /**
   * @zh 飞行加速度。
   * @en Flying acceleration.
   * @category Movement
   */
  flyAcceleration: number;

  /**
   * @zh 跳跃速度因子。
   * @en Jump speed factor.
   * @category Movement
   */
  jumpSpeedFactor: number;

  /**
   * @zh 跳跃加速度率。
   * @en Jump acceleration factor.
   * @category Movement
   */
  jumpAccelerationFactor: number;

  /**
   * @zh 跳跃速度冲量。
   * @en Jump power impulse.
   * @category Movement
   */
  jumpPower: number;

  /**
   * @zh 双重跳跃速度冲量。
   * @en Double jump power impulse.
   * @category Movement
   */
  doubleJumpPower: number;

  /**
   * @zh 在RELATIVE模式下冻结的前向方向。
   * @en The frozen forward direction in RELATIVE mode.
   * @category Movement
   */
  freezedForwardDirection: GameVector3 | null;

  /**
   * @zh 移动状态。
   * @en Movement state.
   * @category State
   */
  moveState: GamePlayerMoveState;

  /**
   * @zh 行走状态。
   * @en Walking state.
   * @category State
   */
  walkState: GamePlayerWalkState;

  /**
   * @zh 是否交换输入方向。
   * @en Whether to swap input directions.
   * @category Input
   */
  swapInputDirection: boolean;

  /**
   * @zh 反转输入方向。
   * @en Reverse input direction.
   * @category Input
   */
  reverseInputDirection: GameInputDirection;

  /**
   * @zh 禁用的输入方向。
   * @en Disabled input direction.
   * @category Input
   */
  disableInputDirection: GameInputDirection;

  /**
   * @zh 是否按下了行走按钮。
   * @en Whether the walk button is pressed.
   * @category Input
   */
  walkButton: boolean;

  /**
   * @zh 是否按下了蹲下按钮。
   * @en Whether the crouch button is pressed.
   * @category Input
   */
  crouchButton: boolean;

  /**
   * @zh 是否按下了跳跃按钮。
   * @en Whether the jump button is pressed.
   * @category Input
   */
  jumpButton: boolean;

  /**
   * @zh 如果为true，启用玩家输入按钮鼠标左键 / 虚拟按钮A。
   * @en If true, enables player input button action 0.
   * @category Input
   */
  enableAction0: boolean;

  /**
   * @zh 如果为true，启用玩家输入按钮鼠标右键 / 虚拟按钮B。
   * @en If true, enables player input button action 1.
   * @category Input
   */
  enableAction1: boolean;

  /**
   * @zh 是否按下了鼠标左键 / 虚拟按钮A按钮。
   * @en Whether the action 0 button is pressed.
   * @category Input
   */
  action0Button: boolean;

  /**
   * @zh 是否按下了鼠标右键 / 虚拟按钮B按钮。
   * @en Whether the action 1 button is pressed.
   * @category Input
   */
  action1Button: boolean;

  /**
   * @zh 是否启用跳跃。
   * @en Whether jumping is enabled.
   * @category Input
   */
  enableJump: boolean;

  /**
   * @zh 是否启用双重跳跃。
   * @en Whether double jumping is enabled.
   * @category Input
   */
  enableDoubleJump: boolean;

  /**
   * @zh 是否启用蹲下。
   * @en Whether crouching is enabled.
   * @category Input
   */
  enableCrouch: boolean;

  /**
   * @zh 是否启用3D光标。
   * @en Whether 3D cursor is enabled.
   * @category Input
   */
  enable3DCursor: boolean;

  /**
   * @zh 面向方向。
   * @en Facing direction.
   * @category Input
   */
  facingDirection: GameVector3;

  /**
   * @zh 摄像机水平旋转角度。
   * @en Camera horizontal rotation angle.
   * @category Input
   */
  cameraYaw: number;

  /**
   * @zh 摄像机垂直旋转角度。
   * @en Camera vertical rotation angle.
   * @category Input
   */
  cameraPitch: number;

  /**
   * @zh 玩家重生时播放的声音。
   * @en Sound played when the player respawns.
   * @category Sound
   */
  spawnSound: GameSoundEffect;

  /**
   * @zh 玩家跳跃时播放的声音。
   * @en Sound played when the player jumps.
   * @category Sound
   */
  jumpSound: GameSoundEffect;

  /**
   * @zh 玩家双重跳跃时播放的声音。
   * @en Sound played when the player double jumps.
   * @category Sound
   */
  doubleJumpSound: GameSoundEffect;

  /**
   * @zh 玩家落地时播放的声音。
   * @en Sound played when the player lands.
   * @category Sound
   */
  landSound: GameSoundEffect;

  /**
   * @zh 玩家蹲下时播放的声音。
   * @en Sound played when the player crouches.
   * @category Sound
   */
  crouchSound: GameSoundEffect;

  /**
   * @zh 玩家行走时播放的脚步声。
   * @en Footstep sound played when the player walks.
   * @category Sound
   */
  stepSound: GameSoundEffect;

  /**
   * @zh 玩家游泳时播放的声音。
   * @en Sound played when the player swims.
   * @category Sound
   */
  swimSound: GameSoundEffect;

  /**
   * @zh 玩家按下鼠标左键 / 虚拟按钮A按钮时播放的声音。
   * @en Sound played when the player presses action 0 button.
   * @category Sound
   */
  action0Sound: GameSoundEffect;
  /**
   * @zh 玩家按下鼠标右键 / 虚拟按钮B按钮时播放的声音。
   * @en Sound played when the player presses action 1 button.
   * @category Sound
   */
  action1Sound: GameSoundEffect;

  /**
   * @zh 实体进入水中时播放的声音。
   * @en Sound played when the entity enters water.
   * @category Sound
   */
  enterWaterSound: GameSoundEffect;

  /**
   * @zh 实体离开水中时播放的声音。
   * @en Sound played when the entity leaves water.
   * @category Sound
   */
  leaveWaterSound: GameSoundEffect;

  /**
   * @zh 玩家开始飞行时播放的声音。
   * @en Sound played when the player starts flying.
   * @category Sound
   */
  startFlySound: GameSoundEffect;

  /**
   * @zh 玩家停止飞行时播放的声音。
   * @en Sound played when the player stops flying.
   * @category Sound
   */
  stopFlySound: GameSoundEffect;

  /**
   * @zh 玩家的背景音乐。
   * @en The player's background music.
   * @category Sound
   */
  music: GameSoundEffect;

  /**
   * @zh 如果为true，则玩家不能聊天。
   * @en If true, the player cannot chat.
   * @category Chat
   * @deprecated @zh 当前未使用。 @en Currently unused.
   */
  muted: boolean;

  /**
   * @zh 皮肤部件。
   * @en Skin components.
   * @category Display
   */
  skin: GameSkin;

  /**
   * @zh 皮肤部件是否不可见。
   * @en Whether skin components are invisible.
   * @category Display
   */
  skinInvisible: GameSkinInvisible;

  /**
   * @zh 导航器。
   * @en Navigator.
   */
  navigator: PlayerNavigator;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh Player 用户设备相关的接口。
 * @en Player device-related interface.
 */
declare class PlayerNavigator {
  /**
   * @zh 发出事件。
   * @en Emits an event.
   */
  emitEvent: (type: string, value: object) => void;
  /**
   * @zh 添加事件监听器。
   * @en Adds an event listener.
   */
  addEventListener: (
    type: NavigatorEventType,
    listener: (event: { data: object }) => void
  ) => void;
  /**
   * @zh 分发事件。
   * @en Dispatches an event.
   */
  dispatchEvent: (type: string, value: object) => void;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 导航器事件类型。
 * @en Navigator event type.
 */
declare type NavigatorEventType = "message";
/**
 * @zh 执行射线检测的结果。包含关于射线检测及其命中的对象的信息。
 * @en Result of performing a raycast. Contains information about the raycast and the object it hit.
 */
declare class GameRaycastResult {
  /**
   * @zh 如果为 true，射线检测命中了对象。
   * @en If true, the raycast hit an object.
   */
  hit: boolean;

  /**
   * @zh 被射线检测命中的实体。
   * @en The entity hit by the raycast.
   */
  hitEntity: GameEntity | null;

  /**
   * @zh 被射线检测命中的方块 ID（如果没有命中方块则为 0）。
   * @en The voxel ID hit by the raycast (0 if no voxel was hit).
   */
  hitVoxel: voxelId;

  /**
   * @zh 射线检测的起点。
   * @en The origin point of the raycast.
   */
  origin: GameVector3;

  /**
   * @zh 射线检测的方向。
   * @en The direction of the raycast.
   */
  direction: GameVector3;

  /**
   * @zh 沿射线行进的距离。
   * @en The distance traveled along the ray.
   */
  distance: number;

  /**
   * @zh 射线交点的位置。
   * @en The position of the ray intersection.
   */
  hitPosition: GameVector3;

  /**
   * @zh 交点处表面的法向量。
   * @en The surface normal at the intersection point.
   */
  normal: GameVector3;

  /**
   * @zh 如果命中了方块，该方块的网格坐标。
   * @en The grid coordinates of the voxel if a voxel was hit.
   */
  voxelIndex: GameVector3;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 传递给射线检测方法的配置参数。
 * @en Configuration parameters passed to raycast methods.
 */
interface GameRaycastOptions {
  /**
   * @zh 射线允许的最大距离。
   * @en The maximum distance allowed for the ray.
   */
  maxDistance: number;

  /**
   * @zh 如果为 true，则忽略流体方块。
   * @en If true, ignores fluid voxels.
   */
  ignoreFluid: boolean;

  /**
   * @zh 如果为 true，则不检测与方块的交点。
   * @en If true, does not detect intersections with voxels.
   */
  ignoreVoxel: boolean;

  /**
   * @zh 如果为 true，则不检测与实体的交点。
   * @en If true, does not detect intersections with entities.
   */
  ignoreEntities: boolean;

  /**
   * @zh 忽略选定的实体。
   * @en Ignores selected entities.
   */
  ignoreSelector: GameSelectorString;
}

/**
 * @zh 使用 EventChannel 可以订阅来自某些对象的事件。
 * @en Use EventChannel to subscribe to events from certain objects.
 *
 * @zh 事件通道接受一个事件处理程序作为输入，并返回一个可以用于取消处理程序的令牌。
 * @en Event channels accept an event handler as input and return a token that can be used to cancel the handler.
 *
 * **示例:**
 * ```typescript
 * const token = world.onTick(() => console.log("tick !"));
 * setTimeout(() => {
 *      console.log('取消 tick 处理程序');
 *      token.cancel();
 *      // 不再记录 tick 事件
 * }, 1000);
 * ```
 *
 * @param handler @zh 每当事件触发时调用的处理程序回调。 @en Handler callback called whenever the event is triggered.
 * @typeparam EventType @zh 通道发出的事件类型。 @en The event type emitted by the channel.
 * @returns @zh 一个事件处理程序令牌，可以用于取消事件处理程序。 @en An event handler token that can be used to cancel the event handler.
 * @category Events
 */
declare type GameEventChannel<EventType> = (
  handler: (event: EventType) => void
) => GameEventHandlerToken;

/**
 * @zh
 * Promise 提供了另一种处理事件的方式。你可以使用 Promise 来组织长序列的事件，通过结构化编程来简化代码。
 * 在某些情况下，这可以使代码更简单和清晰，但必须谨慎使用。
 * 异步代码在等待时可能会被中断，这意味着世界中的事物可能会在你的代码之外发生变化。
 * 此外，异步代码中生成的错误不会带有堆栈跟踪，这会使调试变得复杂。考虑这些因素并谨慎使用 Promise。
 * @en
 * Promise provides another way to handle events. You can use Promise to organize long sequences of events and simplify code through structured programming.
 * In some cases, this can make code simpler and clearer, but must be used with caution.
 * Asynchronous code may be interrupted while waiting, which means things in the world may change outside of your code.
 * Additionally, errors generated in asynchronous code do not come with stack traces, which makes debugging complex. Consider these factors and use Promise with caution.
 *
 * @example
 * ```typescript
 * // Wait for 2 players to join the world
 * async function waitForPlayers(count) {
 *      while (world.querySelectorAll('player').length < count) {
 *          const { entity } = await world.nextPlayerJoin();
 *          world.say(entity.player.name + ' has joined');
 *      }
 * }
 *
 * waitForPlayers(2).then(() => world.say('The game is ready'));
 * ```
 *
 * @param filter
 * @zh 一个可选的函数，用于检查事件类型。如果过滤器不为真，则事件不会被分发。如果没有提供过滤器，则未来会在下一个事件上触发。
 * @en An optional function to check the event type. If the filter is not true, the event will not be dispatched. If no filter is provided, the future will trigger on the next event.
 * @typeparam EventType
 * @zh 通道发出的事件类型。
 * @en The event type emitted by the channel.
 * @returns
 * @zh 一个 Promise，在匹配过滤器的事件触发时解析。
 * @en A Promise that resolves when an event matching the filter is triggered.
 * @category Events
 */
declare type GameEventFuture<EventType> = (
  filter?: (event: EventType) => boolean
) => Promise<EventType>;

/**
 * @zh
 * 当注册处理程序时由 {@link GameEventChannel} 返回。可以用于取消处理程序。
 * @en
 * Returned by {@link GameEventChannel} when registering a handler. Can be used to cancel the handler.
 * @category Events
 */
declare class GameEventHandlerToken {
  /**
   * @zh
   * 取消事件处理程序。
   * @en
   * Cancels the event handler.
   */
  cancel: () => void;

  /**
   * @zh
   * 恢复监听事件处理程序。
   * @en
   * Resumes listening to the event handler.
   */
  resume: () => void;

  /**
   * @zh 检查处理程序是否处于活动状态。
   * @en Checks if the handler is in an active state.
   */
  active: () => boolean;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 每个游戏帧由 {@link GameWorld.onTick} 触发的事件。
 * @en Event triggered by {@link GameWorld.onTick} for each game frame.
 * @category Events
 */
declare class GameTickEvent {
  /**
   * @zh 事件触发的帧数。
   * @en The frame number when the event was triggered.
   */
  tick: number;

  /**
   * @zh 上一次处理的帧数。
   * @en The frame number of the previous processing.
   */
  prevTick: number;

  /**
   * @zh 是否由于脚本延迟而跳过了任何帧。
   * @en Whether any frames were skipped due to script delay.
   */
  skip: boolean;

  /**
   * @zh 帧之间的时间间隔（毫秒）。
   * @en The time interval between frames (in milliseconds).
   */
  elapsedTimeMS: number;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 当某个实体被创建或销毁时触发的事件。
 * @en Event triggered when an entity is created or destroyed.
 * @zh 由 {@link GameWorld.onPlayerJoin}, {@link GameWorld.onPlayerLeave}, {@link GameWorld.onEntityCreate}, {@link GameWorld.onEntityDestroy} 和 {@link GameEntity.onDestroy} 触发。
 * @en Triggered by {@link GameWorld.onPlayerJoin}, {@link GameWorld.onPlayerLeave}, {@link GameWorld.onEntityCreate}, {@link GameWorld.onEntityDestroy} and {@link GameEntity.onDestroy}.
 * @category Events
 */
declare class GameEntityEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 被创建或销毁的实体。
   * @en The entity that was created or destroyed.
   */
  entity: GameEntity;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当实体激活或取消激活触发器时触发的事件。
 * @en Event triggered when an entity activates or deactivates a trigger.
 * @category Events
 */
declare class GameTriggerEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 触发事件的实体。
   * @en The entity that triggered the event.
   */
  entity: GameEntity;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当实体受到伤害时触发的事件。
 * @en Event triggered when an entity takes damage.
 * @zh 由 {@link GameWorld.onTakeDamage} 和 {@link GameEntity.onTakeDamage} 触发。
 * @en Triggered by {@link GameWorld.onTakeDamage} and {@link GameEntity.onTakeDamage}.
 * @category Events
 */
declare class GameDamageEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 受到伤害的实体。
   * @en The entity that took damage.
   */
  entity: GameEntity;

  /**
   * @zh 伤害量。
   * @en The amount of damage.
   */
  damage: number;

  /**
   * @zh 攻击者实体。
   * @en The attacker entity.
   */
  attacker: GameEntity | null;

  /**
   * @zh 伤害类型。
   * @en The type of damage.
   */
  damageType: string;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当实体死亡时触发的事件。
 * @en Event triggered when an entity dies.
 * @zh 由 {@link GameWorld.onTakeDamage} 和 {@link GameEntity.onTakeDamage} 触发。
 * @en Triggered by {@link GameWorld.onTakeDamage} and {@link GameEntity.onTakeDamage}.
 * @category Events
 */
declare class GameDieEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 死亡的实体。
   * @en The entity that died.
   */
  entity: GameEntity;

  /**
   * @zh 攻击者实体。
   * @en The attacker entity.
   */
  attacker: GameEntity | null;

  /**
   * @zh 伤害类型。
   * @en The type of damage.
   */
  damageType: string;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当玩家重生时触发的事件。
 * @en Event triggered when a player respawns.
 * @category Events
 */
declare class GameRespawnEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 重生的玩家实体。
   * @en The player entity that respawned.
   */
  entity: GamePlayerEntity;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当两个实体发生碰撞时触发的事件。
 * @en Event triggered when two entities collide.
 * @zh 由 {@link GameWorld.onEntityContact}, {@link GameWorld.onEntitySeparate}, {@link GameEntity.onEntityContact}, {@link GameEntity.onEntitySeparate} 触发。
 * @en Triggered by {@link GameWorld.onEntityContact}, {@link GameWorld.onEntitySeparate}, {@link GameEntity.onEntityContact}, {@link GameEntity.onEntitySeparate}.
 * @category Events
 */
declare class GameEntityContactEvent {
  /**
   * @zh 实体发生碰撞的时间。
   * @en The time when the entities collided.
   */
  tick: number;

  /**
   * @zh 第一个实体。
   * @en The first entity.
   */
  entity: GameEntity;

  /**
   * @zh 第二个实体。
   * @en The second entity.
   */
  other: GameEntity;

  /**
   * @zh 碰撞的分离轴。
   * @en The separation axis of the collision.
   */
  axis: GameVector3;

  /**
   * 碰撞产生的力。
   */
  force: GameVector3;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * 当实体与地形接触时触发的事件。
 * 由 {@link GameWorld.onVoxelContact}, {@link GameWorld.onVoxelSeparate}, {@link GameEntity.onVoxelContact}, {@link GameEntity.onVoxelSeparate} 触发。
 * @category 事件
 */
declare class GameVoxelContactEvent {
  /**
   * @zh 接触事件发生的时间。
   * @en The time when the contact event occurred.
   */
  tick: number;

  /**
   * @zh 与地形接触的实体。
   * @en The entity that contacted the terrain.
   */
  entity: GameEntity;

  /**
   * @zh 接触方块的 x 坐标。
   * @en The x coordinate of the contacted voxel.
   */
  x: number;

  /**
   * @zh 接触方块的 y 坐标。
   * @en The y coordinate of the contacted voxel.
   */
  y: number;

  /**
   * @zh 接触方块的 z 坐标。
   * @en The z coordinate of the contacted voxel.
   */
  z: number;

  /**
   * @zh 方块的 ID。
   * @en The ID of the voxel.
   */
  voxel: voxelId;

  /**
   * @zh 分离轴。
   * @en The separation axis.
   */
  axis: GameVector3;

  /**
   * @zh 碰撞力。
   * @en The collision force.
   */
  force: GameVector3;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 当实体进入或离开流体时触发的事件。
 * @en Event triggered when an entity enters or leaves a fluid.
 * @zh 由 {@link GameWorld.onFluidEnter}, {@link GameWorld.onFluidLeave}, {@link GameEntity.onFluidEnter}, {@link GameEntity.onFluidLeave} 触发。
 * @en Triggered by {@link GameWorld.onFluidEnter}, {@link GameWorld.onFluidLeave}, {@link GameEntity.onFluidEnter}, {@link GameEntity.onFluidLeave}.
 * @category Events
 */
declare class GameFluidContactEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 被修改的实体。
   * @en The entity that was affected.
   */
  entity: GameEntity;

  /**
   * @zh 流体方块的 ID。
   * @en The ID of the fluid voxel.
   */
  voxel: voxelId;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当实体发起聊天事件时触发。
 * @en Event triggered when an entity initiates a chat event.
 * @zh 由 {@link GameWorld.onChat} 和 {@link GameEntity.onChat} 触发。
 * @en Triggered by {@link GameWorld.onChat} and {@link GameEntity.onChat}.
 * @category Events
 */
declare class GameChatEvent {
  /**
   * @zh 聊天事件发生的时间。
   * @en The time when the chat event occurred.
   */
  tick: number;

  /**
   * @zh 发起聊天事件的实体。
   * @en The entity that initiated the chat event.
   */
  entity: GameEntity;

  /**
   * @zh 实体在聊天事件中说的话。
   * @en The message said by the entity in the chat event.
   */
  message: string;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当玩家购买成功时触发的事件。
 * @en Event triggered when a player makes a successful purchase.
 * @zh 由 {@link GameWorld.onPlayerPurchaseSuccess} 触发。
 * @en Triggered by {@link GameWorld.onPlayerPurchaseSuccess}.
 * @category Events
 */
declare class GamePurchaseSuccessEvent {
  /**
   * @zh 购买成功事件发生的时间。
   * @en The time when the purchase success event occurred.
   */
  tick: number;

  /**
   * @zh 触发购买事件的用户 ID。
   * @en The user ID that triggered the purchase event.
   */
  userId: string;

  /**
   * @zh 购买的商品 ID。
   * @en The ID of the purchased product.
   */
  productId: GameProductAssets;

  /**
   * @zh 购买成功的订单号。
   * @en The order number of the successful purchase.
   */
  orderId: number;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 当实体进行交互时触发的事件。
 * @en Event triggered when an entity performs an interaction.
 * @zh 由 {@link GameWorld.onInteract} 和 {@link GameEntity.onInteract} 触发。
 * @en Triggered by {@link GameWorld.onInteract} and {@link GameEntity.onInteract}.
 * @category Events
 */
declare class GameInteractEvent {
  /**
   * @zh 事件发生的时间。
   * @en The time when the event occurred.
   */
  tick: number;

  /**
   * @zh 发起交互的实体。
   * @en The entity that initiated the interaction.
   */
  entity: GamePlayerEntity;

  /**
   * @zh 接收交互的实体。
   * @en The entity that received the interaction.
   */
  targetEntity: GameEntity;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 玩家按下的按钮类型。
 * @en Type of a button pressed by a player.
 * @category Events
 */
declare enum GameButtonType {
  WALK = "walk",
  RUN = "run",
  CROUCH = "crouch",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2",
  FLY = "fly",
  ACTION0 = "action0",
  ACTION1 = "action1",
}
/**
 * 当玩家按下按钮时生成输入事件。
 * 事件的时间戳表示玩家按下按钮的确切时刻。
 * 由 {@link GameWorld.onPress}, {@link GameWorld.onRelease}, {@link GamePlayer.onPress}, {@link GamePlayer.onRelease} 触发。
 * @category Events
 */
declare class GameInputEvent {
  /**
   * @zh 按钮被按下的时间。
   * @en The time when the button was pressed.
   */
  tick: number;

  /**
   * @zh 按下按钮的玩家引用。
   * @en The player entity that pressed the button.
   */
  entity: GamePlayerEntity;

  /**
   * @zh 按下按钮时玩家的位置。
   * @en The position of the player when the button was pressed.
   */
  position: GameVector3;

  /**
   * @zh 玩家输入的按钮。
   * @en The button pressed by the player.
   */
  button: GameButtonType;

  /**
   * @zh 如果为 true，则这是一个按下事件。否则为 false，表示这是一个释放事件。
   * @en If true, this is a press event. Otherwise, it is a release event.
   */
  pressed: boolean;

  /**
   * @zh 玩家在按下按钮的确切时刻从其摄像机视角发起的射线检测结果。
   * @en The raycast result of the player when the button was pressed.
   */
  raycast: GameRaycastResult;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 游戏点击事件类，用于封装游戏中的点击事件信息。
 * @en Game click event class, used to encapsulate game click event information.
 * @category Events
 */
declare class GameClickEvent {
  /**
   * @zh 发生点击事件的游戏刻。
   * @en The game tick when the click event occurred.
   */
  tick: number;

  /**
   * @zh 被点击的游戏实体。
   * @en The game entity that was clicked.
   */
  entity: GameEntity;

  /**
   * @zh 发起点击事件的玩家实体。
   * @en The player entity that initiated the click event.
   */
  clicker: GamePlayerEntity;

  /**
   * @zh 被按下的按钮，ACTION0 表示左键，ACTION1 表示右键。
   * @en The button that was pressed, ACTION0 represents the left mouse button, ACTION1 represents the right mouse button.
   */
  button: GameButtonType.ACTION0 | GameButtonType.ACTION1;

  /**
   * @zh 点击者与被点击实体之间的距离。
   * @en The distance between the clicker and the clicked entity.
   */
  distance: number;

  /**
   * @zh 点击发生时点击者的位置。
   * @en The position of the clicker when the click event occurred.
   */
  clickerPosition: GameVector3;

  /**
   * @zh 从点击者到被点击实体的射线检测结果。
   * @en The raycast result from the clicker to the clicked entity.
   */
  raycast: GameRaycastResult;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh 游戏键盘事件类，用于封装游戏中的键盘事件信息。
 * @en Game keyboard event class, used to encapsulate game keyboard event information.
 * @zh 由 {@link GameWorld.onKeyBoard}, {@link GamePlayer.onKeyBoard} 触发。
 * @en Triggered by {@link GameWorld.onKeyBoard}, {@link GamePlayer.onKeyBoard}.
 * @category Events
 */
declare class GameKeyBoardEvent {
  /**
   * @zh 发生键盘事件的游戏时刻。
   * @en The game tick when the keyboard event occurred.
   */
  tick: number;

  /**
   * @zh 按下的键码。
   * @en The key code that was pressed.
   */
  keyCode: number;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 表示游戏动画中的一个事件，封装了当前帧数、目标对象、动画详情和取消状态等信息。
 * @en Represents an event in a game animation, encapsulating the current frame number, target object, animation details, and cancellation status, etc.
 * @template KeyframeType 动画关键帧的类型。
 * @template TargetType 动画应用的目标对象的类型。
 */
declare class GameAnimationEvent<KeyframeType, TargetType> {
  // 当前动画的帧数。
  tick: number;
  // 动画应用的目标对象。
  target: TargetType;
  // 此事件所属的动画实例。
  animation: GameAnimation<KeyframeType, TargetType>;
  // 标记事件是否已被取消。
  cancelled: boolean;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh Selectors 是一种强大的语法，用于搜索游戏中的所有对象。游戏中的选择器接口借鉴了 DOM API 的设计。
 * @en Selectors is a powerful syntax that can be used to search for all objects in the game. The game's selector interface borrows the design of the DOM API.
 *
 * 示例：
 * ```javascript
 * const entities = world.querySelector('*');           // 世界中的所有实体
 * const players = world.querySelectorAll('player');    // 游戏中的所有玩家
 * const theChair = world.querySelector('#chair');      // ID 为 "chair" 的第一个实体
 * const boxes = world.querySelectorAll('.box');        // 标记为 "box" 的所有实体
 * const boxChair = world.querySelector('.box .red');   // 标记为 "box" 并且颜色为红色的实体
 * ```
 */
declare type GameSelectorString = string;

/**
 * @zh 描述资产的类型
 * @en Describes the type of asset.
 */
declare enum GameAssetType {
  VOXEL_MESH = "mesh",
  DIRECTORY = "directory",
  COLOR_LUT = "lut",
  JS_SCRIPT = "js",
  IMAGE = "image",
  PARTICLE_TEXTURE = "snow",
  SOUND = "sound",
  PICTURE = "picture",
}

/**
 * @zh 资产列表条目
 * @en Asset list entry
 */
declare class GameAssetListEntry {
  /**
   * @zh 资产的完全限定路径，按目录分割
   * @en The fully qualified path of the asset, separated by directories.
   */
  path: string;
  /**
   * @zh 资产的类型
   * @en The type of the asset.
   *
   */
  type: GameAssetType;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 标准 SQL 数据库
 * @en A standard SQL database
 */
declare class GameDatabase {
  /**
   * @zh 执行 SQL 查询
   * @en Executes a SQL query on this database
   */
  sql: (
    sql: string[],
    ...params: (number | string | Uint8Array | boolean | null)[]
  ) => GameQueryResult;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 查询结果 API
 * @en Query result API
 */
declare class GameQueryResult implements AsyncIterable<any> {
  /**
   * @zh 获取下一行
   * @en Gets the next row
   */
  next: () => Promise<{
    done: boolean;
    value: any;
  }>;

  [Symbol.asyncIterator](): this;
  /**
   * @zh 返回
   * @en Returns
   */
  return: () => Promise<{
    done: boolean;
    value: any;
  }>;
  /**
   * @zh 抛出错误
   * @en Throws an error
   */
  throw: (err: any) => Promise<{
    done: boolean;
    value: any;
  }>;
  /**
   * @zh 然后
   * @en Then
   */
  then: (resolve: (rows: any[]) => any, reject: (err: any) => any) => void;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 错误码规范：{status:T; code:number, msg: string}
 * @en Error code specification: {status:T; code:number, msg: string}
 * @template T 错误类型
 * code: 错误码
 * status: 错误类型
 * msg: 错误描述
 */
declare type CommonError<T> = {
  status: T;
  code: number;
  msg: string;
};

interface GameGUIEvent {
  entity: GamePlayerEntity;
  name: string;
  payload: any;
}
interface GameGUIEventListener {
  (event: GameGUIEvent): void;
}
declare class GameGUI {
  init: <T extends string, U extends T>(
    entity: GamePlayerEntity,
    config: GUIConfig<T, U>
  ) => Promise<void>;
  show: (
    entity: GamePlayerEntity,
    name: string,
    allowMultiple?: boolean
  ) => Promise<void>;
  remove: (entity: GamePlayerEntity, selector: string) => Promise<void>;
  getAttribute: (
    entity: GamePlayerEntity,
    selector: string,
    name: string
  ) => Promise<any>;
  setAttribute: (
    entity: GamePlayerEntity,
    selector: string,
    name: string,
    value: any
  ) => Promise<void>;
  onMessage: (listener: GameGUIEventListener) => void;
  ui: InstanceType<any>["ui"];
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
declare type GameHttpFetchHeaders = {
  /**
   * @zh 响应头名称
   * @en Response header name
   */
  [name: string]: string | string[];
};

/**
 * @zh HTTP 请求选项
 * @en HTTP request options
 */
declare type GameHttpFetchRequestOptions = {
  /**
   * @zh 请求超时时间，单位为毫秒
   * @en Request timeout in milliseconds
   */
  timeout?: number;
  /**
   * @zh 请求方法
   * @en Request method
   */
  method?: "OPTIONS" | "GET" | "HEAD" | "PUT" | "POST" | "DELETE" | "PATCH";
  /**
   * @zh 请求头
   * @en Request headers
   */
  headers?: GameHttpFetchHeaders;
  /**
   * @zh 请求体
   * @en Request body
   */
  body?: string | ArrayBuffer;
};

/**
 * @zh HTTP 请求响应
 * @en HTTP request response
 */
declare class GameHttpFetchResponse {
  /**
   * @zh 状态码
   * @en Status code
   */
  status: number;
  /**
   * @zh 状态码描述
   * @en Status text description
   */
  statusText: string;
  /**
   * @zh 所有响应头
   * @en All response headers
   */
  headers: GameHttpFetchHeaders;
  /**
   * @zh 返回一个Promise，Promise resolve的值为JSON格式的数据
   * @en Returns a Promise that resolves to JSON formatted data
   */
  json: () => Promise<any>;
  /**
   * @zh 返回一个Promise，Promise resolve的值为文本格式的数据
   * @en Returns a Promise that resolves to text formatted data
   */
  text: () => Promise<string>;
  /**
   * @zh 返回一个Promise，Promise resolve的值为二进制格式的数据
   * @en Returns a Promise that resolves to binary formatted data
   */
  arrayBuffer: () => Promise<ArrayBuffer>;
  /**
   * @zh 关闭连接
   * @en Close the connection
   */
  close: () => Promise<void>;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
  /**
   * @zh 是否请求成功
   * @en Whether the request was successful
   */
  get ok(): boolean;
}
/**
 * @zh HTTP 请求对象。该类目前为空，作为类型占位符使用。
 * @en HTTP request object. This class is currently empty and serves as a type placeholder.
 */
declare class GameHttpRequest {}
/**
 * @zh HTTP 响应对象。该类目前为空，作为类型占位符使用。
 * @en HTTP response object. This class is currently empty and serves as a type placeholder.
 */
declare class GameHttpResponse {}
/**
 * @zh HTTP 请求处理器函数类型。
 * @en Type for an HTTP request handler function.
 * @param request @zh HTTP 请求对象。 @en The HTTP request object.
 * @param response @zh HTTP 响应对象。 @en The HTTP response object.
 */
declare type GameHttpHandler = (
  request: GameHttpRequest,
  response: GameHttpResponse
) => void;
/**
 * @zh HTTP API 类，用于处理 HTTP 请求。
 * @en HTTP API class for handling HTTP requests.
 */
declare class GameHttpAPI {
  /**
   * @zh
   * 请求网络资源。
   * @en
   * Requests a network resource.
   * @param url @zh 请求地址。 @en The request URL.
   * @param options @zh 请求配置。 @en The request options.
   * @returns @zh 返回一个 Promise，其 resolve 的值为请求结果。 @en Returns a Promise that resolves with the request result.
   */
  fetch: (
    url: string,
    options?: GameHttpFetchRequestOptions
  ) => Promise<GameHttpFetchResponse>;
  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually)
   *
   * @remarks
   * @zh
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   * @en
   * This class is automatically created and maintained by the game engine. Direct instantiation by developers will result in an invalid object.
   * Please obtain an instance through the interface provided by the engine.
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh 表示一个四元数，用于游戏中的旋转计算。
 * @en Represents a quaternion for rotation calculations in the game.
 */
declare class GameQuaternion {
  /**
   * @zh 四元数的 w 分量。
   * @en The w component of the quaternion.
   */
  w: number;
  /**
   * @zh 四元数的 x 分量。
   * @en The x component of the quaternion.
   */
  x: number;
  /**
   * @zh 四元数的 y 分量。
   * @en The y component of the quaternion.
   */
  y: number;
  /**
   * @zh 四元数的 z 分量。
   * @en The z component of the quaternion.
   */
  z: number;

  /**
   * @zh 构造一个新的四元数实例。
   * @en Constructs a new quaternion instance.
   * @param w @zh 四元数的w分量。 @en The w component of the quaternion.
   * @param x @zh 四元数的x分量。 @en The x component of the quaternion.
   * @param y @zh 四元数的y分量。 @en The y component of the quaternion.
   * @param z @zh 四元数的z分量。 @en The z component of the quaternion.
   */
  constructor(w: number, x: number, y: number, z: number);

  /**
   * @zh 计算两个三维向量之间的旋转四元数。
   * @en Calculates the rotation quaternion between two 3D vectors.
   * @param a @zh 起始向量。 @en The starting vector.
   * @param b @zh 目标向量。 @en The target vector.
   * @returns @zh 代表从向量a旋转到向量b的四元数。 @en The quaternion representing the rotation from vector a to vector b.
   */
  static rotationBetween(a: GameVector3, b: GameVector3): GameQuaternion;

  /**
   * @zh 从轴角表示转换到四元数表示。
   * @en Converts from axis-angle representation to quaternion representation.
   * @param axis @zh 旋转轴。 @en The axis of rotation.
   * @param rad @zh 旋转角度（弧度）。 @en The angle of rotation in radians.
   * @returns @zh 对应轴角表示的四元数。 @en The quaternion corresponding to the axis-angle representation.
   */
  static fromAxisAngle(axis: GameVector3, rad: number): GameQuaternion;

  /**
   * @zh 从欧拉角转换到四元数。
   * @en Converts from Euler angles to quaternion.
   * @param x @zh 绕x轴的旋转角度。 @en The rotation angle around the x-axis.
   * @param y @zh 绕y轴的旋转角度。 @en The rotation angle around the y-axis.
   * @param z @zh 绕z轴的旋转角度。 @en The rotation angle around the z-axis.
   * @returns @zh 对应欧拉角的四元数。 @en The quaternion corresponding to the Euler angles.
   */
  static fromEuler(x: number, y: number, z: number): GameQuaternion;

  /**
   * @zh 设置四元数的分量值。
   * @en Sets the component values of the quaternion.
   * @param w @zh 四元数的w分量。 @en The w component of the quaternion.
   * @param x @zh 四元数的x分量。 @en The x component of the quaternion.
   * @param y @zh 四元数的y分量。 @en The y component of the quaternion.
   * @param z @zh 四元数的z分量。 @en The z component of the quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  set(w: number, x: number, y: number, z: number): GameQuaternion;

  /**
   * @zh 复制另一个四元数的值。
   * @en Copies the values of another quaternion.
   * @param q @zh 要复制的四元数。 @en The quaternion to copy.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  copy(q: GameQuaternion): GameQuaternion;

  /**
   * @zh 获取四元数的轴角表示。
   * @en Gets the axis-angle representation of the quaternion.
   * @param _q @zh 另一个四元数（未使用）。 @en Another quaternion (unused).
   * @returns @zh 包含旋转轴和旋转角度的对象。 @en An object containing the axis and angle of rotation.
   */
  getAxisAngle(_q: GameQuaternion): {
    axis: GameVector3;
    angle: number;
  };

  /**
   * @zh 绕x轴旋转四元数。
   * @en Rotates the quaternion around the x-axis.
   * @param rad @zh 旋转角度（弧度）。 @en The rotation angle in radians.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  rotateX(rad: number): GameQuaternion;

  /**
   * @zh 绕y轴旋转四元数。
   * @en Rotates the quaternion around the y-axis.
   * @param rad @zh 旋转角度（弧度）。 @en The rotation angle in radians.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  rotateY(rad: number): GameQuaternion;

  /**
   * @zh 绕z轴旋转四元数。
   * @en Rotates the quaternion around the z-axis.
   * @param rad @zh 旋转角度（弧度）。 @en The rotation angle in radians.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  rotateZ(rad: number): GameQuaternion;

  /**
   * @zh 计算当前四元数与另一个四元数的点积。
   * @en Calculates the dot product of the current quaternion with another quaternion.
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 点积结果。 @en The dot product result.
   */
  dot(q: GameQuaternion): number;

  /**
   * @zh 将另一个四元数加到当前四元数上。
   * @en Adds another quaternion to the current quaternion.
   * @param v @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  add(v: GameQuaternion): GameQuaternion;

  /**
   * @zh 从当前四元数减去另一个四元数。
   * @en Subtracts another quaternion from the current quaternion.
   * @param v @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  sub(v: GameQuaternion): GameQuaternion;

  /**
   * @zh 计算当前四元数与另一个四元数之间的角度。
   * @en Calculates the angle between the current quaternion and another quaternion.
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 角度结果（弧度）。 @en The angle result in radians.
   */
  angle(q: GameQuaternion): number;

  /**
   * @zh 将当前四元数与另一个四元数相乘。
   * @en Multiplies the current quaternion with another quaternion.
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  mul(q: GameQuaternion): GameQuaternion;

  /**
   * @zh 计算当前四元数的逆四元数。
   * @en Calculates the inverse of the current quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  inv(): GameQuaternion;

  /**
   * @zh 将当前四元数除以另一个四元数。
   * @en Divides the current quaternion by another quaternion.
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  div(q: GameQuaternion): GameQuaternion;

  /**
   * @zh 使用球面线性插值计算两个四元数之间的中间四元数。
   * @en Calculates an intermediate quaternion between two quaternions using spherical linear interpolation.
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @param n @zh 插值参数，范围在0到1之间。 @en The interpolation parameter, ranging from 0 to 1.
   * @returns @zh 插值结果四元数。 @en The resulting interpolated quaternion.
   */
  slerp(q: GameQuaternion, n: number): GameQuaternion;

  /**
   * @zh 计算四元数的模长。
   * @en Calculates the magnitude of the quaternion.
   * @returns @zh 模长结果。 @en The magnitude result.
   */
  mag(): number;

  /**
   * @zh 计算四元数的模长的平方。
   * @en Calculates the square of the magnitude of the quaternion.
   * @returns @zh 模长平方结果。 @en The square of the magnitude.
   */
  sqrMag(): number;

  /**
   * @zh 将四元数归一化，使其模长为1。
   * @en Normalizes the quaternion to have a magnitude of 1.
   * @returns @zh 当前四元数实例。 @en The current quaternion instance.
   */
  normalize(): GameQuaternion;

  /**
   * @zh 检查当前四元数是否与另一个四元数近似（误差值：0.000001）相等。
   * @en Checks if the current quaternion is approximately equal to another quaternion (error value: 0.000001).
   * @param q @zh 另一个四元数。 @en The other quaternion.
   * @returns @zh 如果相等返回true，否则返回false。 @en Returns true if equal, otherwise false.
   */
  equals(q: GameQuaternion): boolean;

  /**
   * @zh 克隆当前四元数实例。
   * @en Clones the current quaternion instance.
   * @returns @zh 新的四元数实例，值与当前实例相同。 @en A new quaternion instance with the same values as the current instance.
   */
  clone(): GameQuaternion;

  /**
   * @zh 将四元数转换为字符串表示。
   * @en Converts the quaternion to a string representation.
   * @returns @zh 四元数的字符串表示。 @en The string representation of the quaternion.
   */
  toString(): string;
}
/**
 * @zh 表示用于游戏开发的三维向量。该类提供了多种3D向量数学运算，包括加法、减法、乘法、除法、点积、叉积和向量插值。
 * @en Represents a three-dimensional vector for game development. This class provides various 3D vector mathematical operations, including addition, subtraction, multiplication, division, dot product, cross product, and vector interpolation.
 */
declare class GameVector3 {
  /**
   * @zh 向量的 x 分量。
   * @en The x component of the vector.
   */
  x: number;
  /**
   * @zh 向量的 y 分量。
   * @en The y component of the vector.
   */
  y: number;
  /**
   * @zh 向量的 z 分量。
   * @en The z component of the vector.
   */
  z: number;

  /**
   * @zh 创建一个新的GameVector3实例。
   * @en Creates a new GameVector3 instance.
   * @param x @zh 向量的x分量。 @en The x component of the vector.
   * @param y @zh 向量的y分量。 @en The y component of the vector.
   * @param z @zh 向量的z分量。 @en The z component of the vector.
   */
  constructor(x: number, y: number, z: number);

  /**
   * @zh 从极坐标创建一个新的GameVector3对象。
   * @en Creates a new GameVector3 object from polar coordinates.
   * @param mag @zh 向量的模长。 @en The magnitude of the vector.
   * @param phi @zh xy平面上的角度（方位角）。 @en The angle in the xy-plane (azimuth).
   * @param theta @zh z轴上的角度（极角）。 @en The angle from the z-axis (polar angle).
   * @returns @zh 新的GameVector3对象。 @en A new GameVector3 object.
   */
  static fromPolar(mag: number, phi: number, theta: number): GameVector3;

  /**
   * @zh 设置此向量的分量。
   * @en Sets the components of this vector.
   * @param x @zh 新的x分量。 @en The new x component.
   * @param y @zh 新的y分量。 @en The new y component.
   * @param z @zh 新的z分量。 @en The new z component.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  set(x: number, y: number, z: number): GameVector3;

  /**
   * @zh 将另一个向量的分量复制到此向量。
   * @en Copies the components of another vector to this vector.
   * @param v @zh 要复制的向量。 @en The vector to copy.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  copy(v: GameVector3): GameVector3;

  /**
   * @zh 将另一个向量加到此向量上。
   * @en Adds another vector to this vector.
   * @param v @zh 要相加的向量。 @en The vector to add.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  add(v: GameVector3): GameVector3;

  /**
   * @zh 从此向量中减去另一个向量。
   * @en Subtracts another vector from this vector.
   * @param v @zh 要相减的向量。 @en The vector to subtract.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  sub(v: GameVector3): GameVector3;

  /**
   * @zh 按分量将此向量与另一个向量相乘。
   * @en Multiplies this vector with another vector component-wise.
   * @param v @zh 要相乘的向量。 @en The vector to multiply by.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  mul(v: GameVector3): GameVector3;

  /**
   * @zh 按分量将此向量与另一个向量相除。
   * @en Divides this vector by another vector component-wise.
   * @param v @zh 要相除的向量。 @en The vector to divide by.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  div(v: GameVector3): GameVector3;

  /**
   * @zh 将另一个向量加到此向量上并更新此向量。
   * @en Adds another vector to this vector and updates this vector.
   * @param v @zh 要相加的向量。 @en The vector to add.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  addEq(v: GameVector3): GameVector3;

  /**
   * @zh 从此向量中减去另一个向量并更新此向量。
   * @en Subtracts another vector from this vector and updates this vector.
   * @param v @zh 要相减的向量。 @en The vector to subtract.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  subEq(v: GameVector3): GameVector3;

  /**
   * @zh 按分量将此向量与另一个向量相乘并更新此向量。
   * @en Multiplies this vector with another vector component-wise and updates this vector.
   * @param v @zh 要相乘的向量。 @en The vector to multiply by.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  mulEq(v: GameVector3): GameVector3;

  /**
   * @zh 按分量将此向量与另一个向量相除并更新此向量。
   * @en Divides this vector by another vector component-wise and updates this vector.
   * @param v @zh 要相除的向量。 @en The vector to divide by.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  divEq(v: GameVector3): GameVector3;

  /**
   * @zh 计算此向量与另一个向量的点积。
   * @en Calculates the dot product of this vector with another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 点积。 @en The dot product.
   */
  dot(v: GameVector3): number;

  /**
   * @zh 计算此向量与另一个向量的叉积。
   * @en Calculates the cross product of this vector with another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 叉积。 @en The cross product.
   */
  cross(v: GameVector3): GameVector3;

  /**
   * @zh 按标量缩放此向量。
   * @en Scales this vector by a scalar.
   * @param n @zh 标量。 @en The scalar.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  scale(n: number): GameVector3;

  /**
   * @zh 创建此向量的副本。
   * @en Creates a copy of this vector.
   * @returns @zh 新的GameVector3对象。 @en A new GameVector3 object.
   */
  clone(): GameVector3;

  /**
   * @zh 线性插值此向量朝向另一个向量。
   * @en Linear interpolation of this vector towards another vector.
   * @param v @zh 目标向量。 @en The target vector.
   * @param n @zh 插值因子。 @en The interpolation factor.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  lerp(v: GameVector3, n: number): GameVector3;

  /**
   * @zh 计算此向量的模长。
   * @en Calculates the magnitude of this vector.
   * @returns @zh 模长。 @en The magnitude.
   */
  mag(): number;

  /**
   * @zh 计算此向量的模长平方。
   * @en Calculates the squared magnitude of this vector.
   * @returns @zh 模长平方。 @en The squared magnitude.
   */
  sqrMag(): number;

  /**
   * @zh 计算并返回指向目标位置的向量。
   * @en Calculates and returns a vector pointing towards the target position.
   * @param v @zh 目标位置的三维向量，表示目标点在游戏世界中的坐标。 @en The 3D vector of the target position, representing the coordinates of the target point in the game world.
   * @returns @zh 返回一个从当前点指向目标点的三维向量。 @en Returns a 3D vector pointing from the current point to the target point.
   */
  towards(v: GameVector3): GameVector3;

  /**
   * @zh 计算此向量与另一个向量之间的距离。
   * @en Calculates the distance between this vector and another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 距离。 @en The distance.
   */
  distance(v: GameVector3): number;

  /**
   * @zh 归一化此向量。
   * @en Normalizes this vector.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  normalize(): GameVector3;

  /**
   * @zh 计算此向量与另一个向量之间的夹角。
   * @en Calculates the angle between this vector and another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 夹角（弧度）。 @en The angle in radians.
   */
  angle(v: GameVector3): number;

  /**
   * @zh 计算此向量与另一个向量的按分量最大值。
   * @en Calculates the component-wise maximum of this vector and another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  max(v: GameVector3): GameVector3;

  /**
   * @zh 计算此向量与另一个向量的按分量最小值。
   * @en Calculates the component-wise minimum of this vector and another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 本向量，用于链式操作。 @en This vector, for chaining.
   */
  min(v: GameVector3): GameVector3;

  /**
   * @zh 检查此向量是否完全等于另一个向量。
   * @en Checks if this vector is exactly equal to another vector.
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 如果向量完全相等则返回true，否则返回false。 @en Returns true if the vectors are exactly equal, otherwise false.
   */
  exactEquals(v: GameVector3): boolean;

  /**
   * @zh 检查此向量是否近似（误差值：0.000001）等于另一个向量。
   * @en Checks if this vector is approximately equal to another vector (error value: 0.000001).
   * @param v @zh 另一个向量。 @en The other vector.
   * @returns @zh 如果向量近似相等则返回true，否则返回false。 @en Returns true if the vectors are approximately equal, otherwise false.
   */
  equals(v: GameVector3): boolean;

  /**
   * @zh 将此向量转换为字符串。
   * @en Converts this vector to a string.
   * @returns @zh 此向量的字符串表示形式。 @en The string representation of this vector.
   */
  toString(): string;
}
/**
 * @zh 表示一个三维游戏区域的边界。
 * @en Represents the boundaries of a three-dimensional game area.
 */
declare class GameBounds3 {
  /**
   * @zh 区域的低处顶点。
   * @en The lower vertex of the area.
   */
  lo: GameVector3;

  /**
   * @zh 区域的高处顶点。
   * @en The upper vertex of the area.
   */
  hi: GameVector3;

  /**
   * @zh 构造一个新的三维游戏区域边界对象。
   * @en Constructs a new three-dimensional game area boundary object.
   * @param lo @zh 区域的低处顶点。xyz最小的值。 @en The lower vertex of the area. xyz minimum values.
   * @param hi @zh 区域的高处顶点。xyz最大的值。 @en The upper vertex of the area. xyz maximum values.
   */
  constructor(lo: GameVector3, hi: GameVector3);

  /**
   * @zh 根据多个点创建一个三维游戏区域边界对象。
   * @en Creates a three-dimensional game area boundary object based on multiple points.
   * @param points @zh 用于定义边界的点数组。 @en An array of points used to define the bounds.
   * @returns @zh 一个新的三维游戏区域边界对象。 @en A new GameBounds3 object.
   */
  static fromPoints(...points: GameVector3[]): GameBounds3;

  /**
   * @zh 计算当前边界与另一个边界的交集。
   * @en Calculates the intersection of the current boundary with another boundary.
   * @param b @zh 另一个边界对象。 @en The other bounds object.
   * @returns @zh 交集边界对象。 @en The intersection bounds object.
   */
  intersect(b: GameBounds3): GameBounds3;

  /**
   * @zh 检查当前边界是否包含给定点。
   * @en Checks if the current boundary contains the given point.
   * @param b @zh 要检查的点。 @en The point to check.
   * @returns @zh 如果当前边界包含该点，则返回true；否则返回false。 @en Returns true if the bounds contain the point, otherwise false.
   */
  contains(b: GameVector3): boolean;

  /**
   * @zh 检查当前边界是否完全包含另一个边界。
   * @en Checks if the current boundary completely contains another boundary.
   * @param b @zh 要检查的边界对象。 @en The bounds object to check.
   * @returns @zh 如果当前边界完全包含另一个边界，则返回true；否则返回false。 @en Returns true if this bounds completely contains the other bounds, otherwise false.
   */
  containsBounds(b: GameBounds3): boolean;

  /**
   * @zh 检查当前边界是否与另一个边界相交。
   * @en Checks if the current boundary intersects with another boundary.
   * @param b @zh 另一个边界对象。 @en The other bounds object.
   * @returns @zh 如果当前边界与另一个边界相交，则返回true；否则返回false。 @en Returns true if this bounds intersects with the other bounds, otherwise false.
   */
  intersects(b: GameBounds3): boolean;

  /**
   * @zh 设置当前边界的低处和高处顶点坐标。
   * @en Sets the coordinates of the lower and upper vertices of the current boundary.
   * @param lox @zh 低处顶点的x坐标。 @en The x coordinate of the lower vertex.
   * @param loy @zh 低处顶点的y坐标。 @en The y coordinate of the lower vertex.
   * @param loz @zh 低处顶点的z坐标。 @en The z coordinate of the lower vertex.
   * @param hix @zh 高处顶点的x坐标。 @en The x coordinate of the upper vertex.
   * @param hiy @zh 高处顶点的y坐标。 @en The y coordinate of the upper vertex.
   * @param hiz @zh 高处顶点的z坐标。 @en The z coordinate of the upper vertex.
   * @returns @zh 当前的三维游戏区域边界对象。 @en The current GameBounds3 object.
   */
  set(
    lox: number,
    loy: number,
    loz: number,
    hix: number,
    hiy: number,
    hiz: number
  ): GameBounds3;

  /**
   * @zh
   * 复制另一个边界对象的属性到当前边界对象。
   * @en
   * Copies the properties of another bounds object to this one.
   * @param b @zh 要复制的边界对象。 @en The bounds object to copy from.
   * @returns @zh 当前的三维游戏区域边界对象。 @en This GameBounds3 object.
   */
  copy(b: GameBounds3): GameBounds3;

  /**
   * @zh
   * 返回当前边界对象的字符串表示。
   * @en
   * Returns a string representation of this bounds object.
   * @returns @zh 当前边界对象的字符串表示。 @en A string representation of this bounds object.
   */
  toString(): string;
}
/**
 * @zh
 * GameRGBAColor 类用于表示和操作具有红（r）、绿（g）、蓝（b）和透明度（a）分量的颜色值。
 * 它提供了一系列方法来设置、复制、比较颜色值，以及进行颜色间的数学运算。
 * @en
 * The GameRGBAColor class is used to represent and manipulate color values with red (r), green (g), blue (b), and alpha (a) components.
 * It provides a series of methods for setting, copying, and comparing color values, as well as performing mathematical operations between colors.
 */
declare class GameRGBAColor {
  /**
   * @zh 红色分量。取值范围为 0 到 1。
   * @en The red component. The value range is 0 to 1.
   */
  r: number;
  /**
   * @zh 绿色分量。取值范围为 0 到 1。
   * @en The green component. The value range is 0 to 1.
   */
  g: number;
  /**
   * @zh 蓝色分量。取值范围为 0 到 1。
   * @en The blue component. The value range is 0 to 1.
   */
  b: number;
  /**
   * @zh 透明度分量。取值范围为 0 到 1。
   * @en The alpha component. The value range is 0 to 1.
   */
  a: number;

  /**
   * @zh
   * 构造一个 GameRGBAColor 实例。
   * @en
   * Constructs a GameRGBAColor instance.
   * @param r @zh 红色分量，取值范围为 0 到 1。 @en The red component, ranging from 0 to 1.
   * @param g @zh 绿色分量，取值范围为 0 到 1。 @en The green component, ranging from 0 to 1.
   * @param b @zh 蓝色分量，取值范围为 0 到 1。 @en The blue component, ranging from 0 to 1.
   * @param a @zh 透明度分量，取值范围为 0 到 1，其中 0 表示完全透明，1 表示完全不透明。 @en The alpha component, ranging from 0 (fully transparent) to 1 (fully opaque).
   */
  constructor(r: number, g: number, b: number, a: number);

  /**
   * @zh
   * 设置颜色的红、绿、蓝和透明度分量。
   * @en
   * Sets the red, green, blue, and alpha components of the color.
   * @param r @zh 红色分量。 @en The red component.
   * @param g @zh 绿色分量。 @en The green component.
   * @param b @zh 蓝色分量。 @en The blue component.
   * @param a @zh 透明度分量。 @en The alpha component.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  set(r: number, g: number, b: number, a: number): GameRGBAColor;

  /**
   * @zh
   * 复制一个颜色值到当前颜色实例。
   * @en
   * Copies a color value to this color instance.
   * @param c @zh 要复制的颜色值。 @en The color value to copy.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  copy(c: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将另一个颜色值与当前颜色相加。
   * @en
   * Adds another color value to the current color.
   * @param rgba @zh 要相加的颜色值。 @en The color value to add.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，表示相加后的颜色。 @en Returns a new GameRGBAColor instance representing the resulting color.
   */
  add(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 从当前颜色中减去另一个颜色值。
   * @en
   * Subtracts another color value from the current color.
   * @param rgba @zh 要减去的颜色值。 @en The color value to subtract.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，表示相减后的颜色。 @en Returns a new GameRGBAColor instance representing the resulting color.
   */
  sub(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色值相乘。
   * @en
   * Multiplies the current color by another color value.
   * @param rgba @zh 要相乘的颜色值。 @en The color value to multiply by.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，表示相乘后的颜色。 @en Returns a new GameRGBAColor instance representing the resulting color.
   */
  mul(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色除以另一个颜色值。
   * @en
   * Divides the current color by another color value.
   * @param rgba @zh 要除以的颜色值。 @en The color value to divide by.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，表示相除后的颜色。 @en Returns a new GameRGBAColor instance representing the resulting color.
   */
  div(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将另一个颜色值与当前颜色相加，并更新当前颜色值。
   * @en
   * Adds another color value to this color and updates this color.
   * @param rgba @zh 要相加的颜色值。 @en The color value to add.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  addEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 从当前颜色中减去另一个颜色值，并更新当前颜色值。
   * @en
   * Subtracts another color value from this color and updates this color.
   * @param rgba @zh 要减去的颜色值。 @en The color value to subtract.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  subEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色值相乘，并更新当前颜色值。
   * @en
   * Multiplies this color by another color value and updates this color.
   * @param rgba @zh 要相乘的颜色值。 @en The color value to multiply by.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  mulEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色除以另一个颜色值，并更新当前颜色值。
   * @en
   * Divides this color by another color value and updates this color.
   * @param rgba @zh 要除以的颜色值。 @en The color value to divide by.
   * @returns @zh 返回当前 GameRGBAColor 实例，支持链式调用。 @en Returns the current GameRGBAColor instance for chaining.
   */
  divEq(rgba: GameRGBAColor): GameRGBAColor;

  /**
   * @zh
   * 对当前颜色与另一个颜色值进行线性插值。
   * @en
   * Linearly interpolates between this color and another color.
   * @param rgba @zh 要进行线性插值的颜色值。 @en The color to interpolate towards.
   * @param n @zh 插值因子，决定了结果颜色中当前颜色和目标颜色的权重。 @en The interpolation factor, determining the weight of the target color in the result.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，表示插值后的颜色。 @en Returns a new GameRGBAColor instance representing the interpolated color.
   */
  lerp(rgba: GameRGBAColor, n: number): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色与一个 RGB 颜色进行混合。
   * @en
   * Blends this color with an RGB color.
   * @param rgb @zh 要混合的 RGB 颜色。 @en The RGB color to blend with.
   * @returns @zh 返回一个新的 GameRGBColor 实例，表示混合后的颜色。 @en Returns a new GameRGBColor instance representing the blended color.
   */
  blendEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 比较当前颜色是否与近似（误差值：0.000001）等于另一个颜色。
   * @en
   * Compares if the current color is approximately equal (with a tolerance of 0.000001) to another color.
   * @param rgba @zh 要比较的颜色。 @en The color to compare with.
   * @returns @zh 如果两个颜色相等，则返回 true；否则返回 false。 @en Returns true if the colors are equal, otherwise false.
   */
  equals(rgba: GameRGBAColor): boolean;

  /**
   * @zh
   * 克隆当前颜色实例。
   * @en
   * Clones the current color instance.
   * @returns @zh 返回一个新的 GameRGBAColor 实例，具有与当前颜色相同的值。 @en Returns a new GameRGBAColor instance with the same value as the current color.
   */
  clone(): GameRGBAColor;

  /**
   * @zh
   * 将当前颜色转换为字符串表示。
   * @en
   * Converts the current color to its string representation.
   * @returns @zh 返回当前颜色的字符串表示。 @en Returns the string representation of the current color.
   */
  toString(): string;
}
/**
 * @zh
 * GameRGBColor 类用于表示和操作 RGB 颜色值。
 * 它提供了设置、复制、运算、插值和比较颜色的功能。
 * @en
 * The GameRGBColor class is used to represent and manipulate RGB color values.
 * It provides functionality for setting, copying, operating on, interpolating, and comparing colors.
 */
declare class GameRGBColor {
  /**
   * @zh 红色分量。取值范围为 0 到 1。
   * @en The red component. The value range is 0 to 1.
   */
  r: number;
  /**
   * @zh 绿色分量。取值范围为 0 到 1。
   * @en The green component. The value range is 0 to 1.
   */
  g: number;
  /**
   * @zh 蓝色分量。取值范围为 0 到 1。
   * @en The blue component. The value range is 0 to 1.
   */
  b: number;

  /**
   * @zh
   * 生成一个随机的 GameRGBColor 实例。
   * @en
   * Generates a random GameRGBColor instance.
   * @returns @zh 一个随机的 GameRGBColor 实例。 @en A random GameRGBColor instance.
   */
  static random(): GameRGBColor;

  /**
   * @zh
   * 创建一个 GameRGBColor 实例。
   * @en
   * Creates a GameRGBColor instance.
   * @param r @zh 红色分量值，取值范围为 0 到 1。 @en The red component value, ranging from 0 to 1.
   * @param g @zh 绿色分量值，取值范围为 0 到 1。 @en The green component value, ranging from 0 to 1.
   * @param b @zh 蓝色分量值，取值范围为 0 到 1。 @en The blue component value, ranging from 0 to 1.
   */
  constructor(r: number, g: number, b: number);

  /**
   * @zh
   * 设置颜色的 RGB 分量值。
   * @en
   * Sets the RGB component values of the color.
   * @param r @zh 红色分量值。 @en The red component value.
   * @param g @zh 绿色分量值。 @en The green component value.
   * @param b @zh 蓝色分量值。 @en The blue component value.
   * @returns @zh 当前的 GameRGBColor 实例。 @en The current GameRGBColor instance.
   */
  set(r: number, g: number, b: number): GameRGBColor;

  /**
   * @zh
   * 复制一个颜色到当前颜色实例。
   * @en
   * Copies a color to this color instance.
   * @param c @zh 要复制的颜色。 @en The color to copy.
   * @returns @zh 当前的 GameRGBColor 实例。 @en The current GameRGBColor instance.
   */
  copy(c: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色相加。
   * @en
   * Adds another color to the current color.
   * @param rgb @zh 要相加的颜色。 @en The color to add.
   * @returns @zh 两个颜色相加的结果。 @en The result of the color addition.
   */
  add(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 从当前颜色中减去另一个颜色。
   * @en
   * Subtracts another color from the current color.
   * @param rgb @zh 要减去的颜色。 @en The color to subtract.
   * @returns @zh 两个颜色相减的结果。 @en The result of the color subtraction.
   */
  sub(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色相乘。
   * @en
   * Multiplies the current color by another color.
   * @param rgb @zh 要相乘的颜色。 @en The color to multiply by.
   * @returns @zh 两个颜色相乘的结果。 @en The result of the color multiplication.
   */
  mul(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色除以另一个颜色。
   * @en
   * Divides the current color by another color.
   * @param rgb @zh 要除以的颜色。 @en The color to divide by.
   * @returns @zh 两个颜色相除的结果。 @en The result of the color division.
   */
  div(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色相加，并更新当前颜色。
   * @en
   * Adds another color to this color and updates this color.
   * @param rgb @zh 要相加的颜色。 @en The color to add.
   * @returns @zh 更新后的当前颜色。 @en The updated current color.
   */
  addEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 从当前颜色中减去另一个颜色，并更新当前颜色。
   * @en
   * Subtracts another color from this color and updates this color.
   * @param rgb @zh 要减去的颜色。 @en The color to subtract.
   * @returns @zh 更新后的当前颜色。 @en The updated current color.
   */
  subEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色与另一个颜色相乘，并更新当前颜色。
   * @en
   * Multiplies this color by another color and updates this color.
   * @param rgb @zh 要相乘的颜色。 @en The color to multiply by.
   * @returns @zh 更新后的当前颜色。 @en The updated current color.
   */
  mulEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 将当前颜色除以另一个颜色，并更新当前颜色。
   * @en
   * Divides this color by another color and updates this color.
   * @param rgb @zh 要除以的颜色。 @en The color to divide by.
   * @returns @zh 更新后的当前颜色。 @en The updated current color.
   */
  divEq(rgb: GameRGBColor): GameRGBColor;

  /**
   * @zh
   * 在当前颜色与另一个颜色之间进行线性插值。
   * @en
   * Performs a linear interpolation between this color and another color.
   * @param rgb @zh 要插值的另一个颜色。 @en The other color to interpolate with.
   * @param n @zh 插值因子，范围在 0 到 1 之间。 @en The interpolation factor, between 0 and 1.
   * @returns @zh 插值后的颜色。 @en The interpolated color.
   */
  lerp(rgb: GameRGBColor, n: number): GameRGBColor;

  /**
   * @zh
   * 比较当前颜色与另一个颜色是否近似（误差值：0.000001）相等。
   * @en
   * Compares if this color is approximately equal (with a tolerance of 0.000001) to another color.
   * @param rgb @zh 要比较的另一个颜色。 @en The other color to compare with.
   * @returns @zh 如果两个颜色相等则返回 true，否则返回 false。 @en Returns true if the colors are equal, otherwise false.
   */
  equals(rgb: GameRGBColor): boolean;

  /**
   * @zh
   * 克隆当前颜色实例。
   * @en
   * Clones the current color instance.
   * @returns @zh 当前颜色的克隆。 @en A clone of the current color.
   */
  clone(): GameRGBColor;

  /**
   * @zh
   * 将当前颜色转换为 RGBA 格式。
   * @en
   * Converts the current color to RGBA format.
   * @returns @zh 当前颜色的 RGBA 表示。 @en The RGBA representation of the current color.
   */
  toRGBA(): GameRGBAColor;

  /**
   * @zh
   * 返回当前颜色的字符串表示。
   * @en
   * Returns the string representation of the current color.
   * @returns @zh 当前颜色的字符串表示。 @en The string representation of the current color.
   */
  toString(): string;
}

/**
 * @zh
 * ServerRemoteChannel 类用于在服务端和客户端之间进行事件通信。
 * @en
 * The ServerRemoteChannel class is used for event communication between the server and clients.
 */
declare class ServerRemoteChannel {
  /**
   * @zh
   * 服务端发送至客户端，向指定玩家发送事件。
   * @en
   * Server sends to client, sends an event to specified players.
   * @param entities @zh 要发送事件的玩家实体或实体列表。 @en The player entity or list of entities to send the event to.
   * @param clientEvent @zh 要发送的事件。 @en The event to send.
   * @link https://docs.dao3.fun/arenapro/zh/difference/remoteChannel.html
   */
  sendClientEvent<T = any>(
    entities: GamePlayerEntity | GamePlayerEntity[],
    clientEvent: T
  ): void;
  /**
   * @zh
   * 服务端发送至客户端，向所有玩家发送事件。
   * @en
   * Server sends to client, broadcasts an event to all players.
   * @param clientEvent @zh 要广播的事件。 @en The event to broadcast.
   * @link https://docs.dao3.fun/arenapro/zh/difference/remoteChannel.html
   */
  broadcastClientEvent<T = any>(clientEvent: T): void;
  /**
   * @zh
   * 监听客户端发来的事件。
   * @en
   * Listens for events sent from the client.
   * @param handler @zh 事件处理函数。 @en The event handler function.
   * @returns @zh 事件处理器令牌。 @en The event handler token.
   * @link https://docs.dao3.fun/arenapro/zh/difference/remoteChannel.html
   */
  onServerEvent<T = any>(
    handler: (event: {
      /**
       * @zh 服务端当前时间
       * @en The current server time (tick).
       */
      tick: number;
      /**
       * @zh 发送者实体
       * @en The sender entity.
       */
      entity: GamePlayerEntity;
      /**
       * @zh 事件参数
       * @en The event arguments.
       */
      args: T;
    }) => void
  ): GameEventHandlerToken;
}

declare class GameRTCChannel {
  /**
   * @zh
   * 将一个玩家添加到此 RTC 通道。
   * @en
   * Adds a player to this RTC channel.
   * @param entity
   * @zh 要添加的玩家实体。
   * @en The player entity to add.
   */
  add: (entity: GamePlayerEntity) => Promise<void>;

  /**
   * @zh
   * 从此 RTC 通道移除一个玩家。
   * @en
   * Removes a player from this RTC channel.
   * @param entity
   * @zh 要移除的玩家实体。
   * @en The player entity to remove.
   */
  remove: (entity: GamePlayerEntity) => Promise<void>;

  /**
   * @zh
   * 停止向此 RTC 通道发布指定玩家的麦克风音频流。
   * @en
   * Stops publishing the specified player's microphone audio stream to this RTC channel.
   * @param entity
   * @zh 要停止发布麦克风的玩家实体。
   * @en The player entity to unpublish the microphone for.
   */
  unpublish: (entity: GamePlayerEntity) => Promise<void>;

  /**
   * @zh
   * 允许指定玩家向此 RTC 通道发布其麦克风音频流。
   * @en
   * Allows the specified player to publish their microphone audio stream to this RTC channel.
   * @param entity
   * @zh 要发布麦克风的玩家实体。
   * @en The player entity to publish the microphone for.
   */
  publishMicrophone: (entity: GamePlayerEntity) => Promise<void>;

  /**
   * @zh
   * 获取当前在此 RTC 通道中的所有玩家实体的列表。
   * @en
   * Gets a list of all player entities currently in this RTC channel.
   * @returns
   * @zh 一个包含所有玩家实体的数组的 Promise。
   * @en A promise that resolves with an array of all player entities.
   */
  getPlayers: () => Promise<GamePlayerEntity[]>;

  /**
   * @zh
   * 销毁此 RTC 通道，断开所有连接。
   * @en
   * Destroys this RTC channel, disconnecting all participants.
   */
  destroy: () => Promise<void>;

  /**
   * @zh
   * 获取指定玩家在此 RTC 通道中的音量。
   * @en
   * Gets the volume of a specified player in this RTC channel.
   * @param entity
   * @zh 要获取音量的玩家实体。
   * @en The player entity whose volume is to be retrieved.
   * @returns
   * @zh 一个解析为玩家音量（0-100）的 Promise。
   * @en A promise that resolves with the player's volume (0-100).
   */
  getVolume: (entity: GamePlayerEntity) => Promise<number>;

  /**
   * @zh
   * 设置指定玩家在此 RTC 通道中的音量。
   * @en
   * Sets the volume of a specified player in this RTC channel.
   * @param entity
   * @zh 要设置音量的玩家实体。
   * @en The player entity whose volume is to be set.
   * @param volume
   * @zh 音量大小，范围从 0 到 100。
   * @en The volume level, ranging from 0 to 100.
   */
  setVolume: (entity: GamePlayerEntity, volume: number) => Promise<void>;

  /**
   * @zh
   * 检查指定玩家是否已授予麦克风权限。
   * @en
   * Checks if the specified player has granted microphone permission.
   * @param entity
   * @zh 要检查权限的玩家实体。
   * @en The player entity whose permission is to be checked.
   * @returns
   * @zh 一个解析为 `true`（如果已授予权限）或 `false`（如果未授予）的 Promise。
   * @en A promise that resolves to `true` if permission is granted, or `false` otherwise.
   */
  getMicrophonePermission: (entity: GamePlayerEntity) => Promise<boolean>;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * GameRTC 类用于管理实时语音通道。
 * @en
 * The GameRTC class is used to manage real-time voice channels.
 */
declare class GameRTC {
  /**
   * @zh
   * 创建一个实时语音通道。
   * @en
   * Creates a real-time voice channel.
   * @param channelId
   * @zh
   * 通道 ID，可选参数。如果不提供，系统将自动生成一个唯一的 ID。
   * @en
   * The channel ID, which is an optional parameter. If not provided, the system will automatically generate a unique ID.
   * @returns
   * @zh
   * 一个 Promise，解析为一个 `GameRTCChannel` 对象。
   * @en
   * A Promise that resolves to a `GameRTCChannel` object.
   */
  createChannel: (channelId?: string) => Promise<GameRTCChannel>;

  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 数据库操作错误状态码。
 * @en
 * Database operation error status codes.
 */
declare type DB_ERROR_STATUS =
  /**
   * @zh
   * 约束目标无效。
   * @en
   * The constraint target is invalid.
   */
  | "CONSTRAINT_TARGET_INVALID"
  /**
   * @zh
   * 参数无效。
   * @en
   * The parameters are invalid.
   */
  | "PARAMS_INVALID"
  /**
   * @zh
   * 数据库名称无效。
   * @en
   * The database name is invalid.
   */
  | "DB_NAME_INVALID"
  /**
   * @zh
   * 键无效。
   * @en
   * The key is invalid.
   */
  | "KEY_INVALID"
  /**
   * @zh
   * 值无效。
   * @en
   * The value is invalid.
   */
  | "VALUE_INVALID"
  /**
   * @zh
   * 服务器拉取错误。
   * @en
   * Server fetch error.
   */
  | "SERVER_FETCH_ERROR"
  /**
   * @zh
   * 请求被节流。
   * @en
   * The request was throttled.
   */
  | "REQUEST_THROTTLED"
  /**
   * @zh
   * 未知错误。
   * @en
   * Unknown error.
   */
  | "UNKNOWN";

/**
 * @zh
 * GameStorage 类用于管理游戏数据存储空间。
 * 它提供了连接数据存储空间、获取数据存储空间实例、销毁数据存储空间等方法。
 * @en
 * The GameStorage class is used to manage game data storage space.
 * It provides methods to connect to, retrieve instances of, and destroy data storage spaces.
 */
declare class GameStorage implements I.GameStorage {
  /**
   * @zh
   * 连接指定数据存储空间，如果不存在则创建一个新的空间。
   * 只能在本地图使用此空间，其他地图（如副图）无法访问此空间，从而避免全局污染。
   * @en
   * Connects to the specified data storage space, creating a new one if it does not exist.
   * This space can only be used in the local map; other maps (e.g., sub-maps) cannot access it, thus avoiding global pollution.
   * @link https://docs.dao3.fun/arenapro/zh/difference/storage.html
   */
  getDataStorage<T = JSONValue>(key: string): GameDataStorage<T>;
  /**
   * @zh
   * 连接指定数据存储空间，如果不存在则创建一个新的空间。
   * 此方法为主图和副图共同维护的数据存储空间。
   * @en
   * Connects to the specified data storage space, creating a new one if it does not exist.
   * This data storage space is jointly maintained by the main map and sub-maps.
   * @link https://docs.dao3.fun/arenapro/zh/difference/storage.html
   */
  getGroupStorage<T = JSONValue>(key: string): GameDataStorage<T>;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * 数据查询操作返回的结果值，包含数据本身及其元信息。
 * @en
 * The result value returned from a data query operation, containing the data itself and its metadata.
 * @template T
 * @zh 数据的类型。
 * @en The type of the data.
 */
declare type ResultValue<T> =
  | {
      /**
       * @zh
       * 数据键名。
       * @en
       * The key of the data.
       */
      key: string;
      /**
       * @zh
       * 数据值。
       * @en
       * The value of the data.
       */
      value: T;
      /**
       * @zh
       * 数据版本号。
       * @en
       * The version of the data.
       */
      version: string;
      /**
       * @zh
       * 数据更新时间戳（毫秒）。
       * @en
       * The timestamp of the data update (in milliseconds).
       */
      updateTime: number;
      /**
       * @zh
       * 数据创建时间戳（毫秒）。
       * @en
       * The timestamp of the data creation (in milliseconds).
       */
      createTime: number;
    }
  | undefined;

/**
 * @zh
 * 列表查询操作返回的数据结构，包含数据列表和分页信息。
 * @en
 * The data structure returned from a list query operation, containing the data list and pagination information.
 * @template T
 * @zh 列表中数据的类型。
 * @en The type of the data in the list.
 */
declare type ListReturnValue<T> = {
  /**
   * @zh
   * 当前页的数据列表。
   * @en
   * The data list for the current page.
   */
  items: ResultValue<T>[];
  /**
   * @zh
   * 是否有下一页数据。
   * @en
   * Indicates if there is a next page of data.
   */
  hasNext: boolean;
  /**
   * @zh
   * 下一页的起始位置标识符。
   * @en
   * The identifier for the starting position of the next page.
   */
  next: string;
};

declare type ReturnValue<T> = ResultValue<T>;

/**
 * @zh
 * 列表分页查询选项。
 * @en
 * Options for paginated list queries.
 */
declare type ListPageOptions = {
  /**
   * @zh
   * 分页指针，用于指定本次获取的分页起点。
   * @en
   * The cursor for pagination, used to specify the starting point for the current page.
   */
  cursor: number;
  /**
   * @zh
   * 分页大小，一页内的数据量，取值范围 [1, 100]，默认 10。
   * @en
   * The page size, representing the amount of data in one page. The value range is [1, 100], default is 10.
   */
  pageSize?: number;
  /**
   * @zh
   * 是否升序，设置为 `true` 时为升序，`false` 为降序，不传或传入 `undefined` 时不排序。
   * @en
   * Whether to sort in ascending order. Set to `true` for ascending, `false` for descending. If not provided or `undefined`, no sorting is applied.
   */
  ascending?: boolean;
  /**
   * @zh
   * 约束目标值的路径，当值是 JSON 格式时，指定用作排序的值的路径。例如传入 `score` 时，会取值上 `score` 属性的值作为排序、最大最小值的限制目标。
   * 可以级联最多5级，例如 `a.b.c.d.e`，超出视作非法参数。
   * 当路径不存在或传入非法参数时，以值本身作为目标进行排序。
   * @en
   * The path to the constraint target value. When the value is in JSON format, this specifies the path to the value used for sorting. For example, passing `score` will use the value of the `score` property for sorting and for max/min constraints.
   * It can be cascaded up to 5 levels, e.g., `a.b.c.d.e`. Exceeding this is an invalid parameter.
   * If the path does not exist or an invalid parameter is passed, the value itself is used as the target for sorting.
   */
  constraintTarget?: string;
  /**
   * @zh
   * 最大值，过滤返回对应值的最大值。默认不过滤。
   * @en
   * The maximum value, used to filter and return keys with values up to this maximum. No filtering by default.
   */
  max?: number;
  /**
   * @zh
   * 最小值，过滤返回对应值的最小值。默认不过滤。
   * @en
   * The minimum value, used to filter and return keys with values down to this minimum. No filtering by default.
   */
  min?: number;
};

/**
 * @zh
 * 游戏数据存储类，用于对特定存储空间内的数据进行操作。
 * @en
 * Game data storage class, used for operating on data within a specific storage space.
 * @template T
 * @zh 存储数据的类型。
 * @en The type of data being stored.
 */
declare class GameDataStorage<T> implements I.GameDataStorage {
  /**
   * @zh
   * 数据存储空间的名称。
   * @en
   * The name of the data storage space.
   */
  readonly key: string;

  /**
   * @zh
   * 以原子方式递增给定键的值。如果键不存在，则会创建并设置初始值。如果对应的值不是数字，则会报错。
   * 通过此方式修改值时不会触发数据锁定。
   * @en
   * Atomically increments the value of a given key. If the key does not exist, it is created and set. An error is thrown if the corresponding value is not a number.
   * Modifying a value this way does not trigger a data lock.
   * @param key
   * @zh 需要递增的键。
   * @en The key to increment.
   * @param value
   * @zh 递增量，默认为 1。
   * @en The amount to increment by, defaults to 1.
   * @returns
   * @zh 返回一个 Promise，解析为累加后的数值。
   * @en Returns a Promise that resolves to the incremented numerical value.
   */
  increment: (key: string, value?: number) => Promise<number>;

  /**
   * @zh
   * 设置指定键的值。
   * @en
   * Sets the value for a specified key.
   * @param key
   * @zh 需要设置的键。
   * @en The key to set.
   * @param value
   * @zh 需要设置的值。
   * @en The value to set.
   * @returns
   * @zh 返回一个 Promise，在设置完成后解析。
   * @en Returns a Promise that resolves when the set operation is complete.
   */
  set: (key: string, value: T) => Promise<void>;

  /**
   * @zh
   * 使用处理器函数更新指定键的值。
   * @en
   * Updates the value of a specified key using a handler function.
   * @param key
   * @zh 需要更新的键。
   * @en The key to update.
   * @param handler
   * @zh 一个接收旧值并返回新值的处理器函数。
   * @en A handler function that receives the previous value and returns the new value.
   * @returns
   * @zh 返回一个 Promise，在更新完成后解析。
   * @en Returns a Promise that resolves when the update is complete.
   */
  update: (
    key: string,
    handler: (prevValue: ReturnValue<T>) => T
  ) => Promise<void>;

  /**
   * @zh
   * 获取指定键的值。
   * @en
   * Gets the value of a specified key.
   * @param key
   * @zh 需要获取的键。
   * @en The key to get.
   * @returns
   * @zh 返回一个 Promise，解析为获取操作的结果。
   * @en Returns a Promise that resolves to the result of the get operation.
   */
  get: (key: string) => Promise<ReturnValue<T>>;

  /**
   * @zh
   * 根据指定选项获取数据列表。
   * @en
   * Retrieves a list of data based on the specified options.
   * @param options
   * @zh 分页和排序选项。
   * @en Pagination and sorting options.
   * @returns
   * @zh 返回一个 Promise，解析为查询结果列表。
   * @en Returns a Promise that resolves to the query list result.
   */
  list: (options: ListPageOptions) => Promise<QueryList<T>>;

  /**
   * @zh
   * 删除指定键的数据。
   * @en
   * Removes the data for a specified key.
   * @param key
   * @zh 需要删除的键。
   * @en The key to remove.
   * @returns
   * @zh 返回一个 Promise，解析为被删除的数据。
   * @en Returns a Promise that resolves to the removed data.
   */
  remove: (key: string) => Promise<ReturnValue<T>>;

  /**
   * @zh
   * 销毁此数据存储空间，并删除所有数据。
   * @en
   * Destroys this data storage space and deletes all of its data.
   * @returns
   * @zh 返回一个 Promise，在销毁完成后解析。
   * @en Returns a Promise that resolves when the destruction is complete.
   */
  destroy: () => Promise<void>;
  /**
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）
   *
   * @remarks
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   *
   * @private
   * @sealed
   */
  private constructor();
}
/**
 * @zh
 * 数据查询列表类，用于处理分页查询结果。
 * @en
 * Data query list class, used for handling paginated query results.
 * @template T
 * @zh 列表中数据的类型。
 * @en The type of data in the list.
 */
declare class QueryList<T> implements I.QueryList {
  /**
   * @zh
   * 获取当前页的键值对数组。
   * @en
   * Gets the array of key-value pairs for the current page.
   * @returns
   * @zh
   * 返回当前页的键值对内容。
   * @en
   * Returns the content of the key-value pairs for the current page.
   */
  getCurrentPage: () => ReturnValue<T>[];
  /**
   * @zh
   * 翻到下一页。执行后，{@link QueryList.getCurrentPage} 将返回下一页的键值对内容。
   * @en
   * Moves to the next page. After execution, {@link QueryList.getCurrentPage} will return the key-value pairs for the next page.
   * @returns
   * @zh
   * 返回一个 Promise，在翻页操作完成后解析。
   * @en
   * Returns a Promise that resolves when the page navigation is complete.
   */
  nextPage: () => Promise<void>;
  /**
   * @zh
   * 是否为最后一页。如果已经翻到末尾之后，此值也为 `true`。
   * @en
   * Indicates if this is the last page. This will also be `true` if navigated past the end.
   */
  readonly isLastPage: boolean;
  /**
   * @zh
   * 游戏引擎核心类（由引擎内部管理，禁止开发者手动实例化）。
   * @en
   * Core game engine class (managed internally by the engine, developers should not instantiate it manually).
   *
   * @remarks
   * @zh
   * 此类由游戏引擎自动创建和维护，开发者直接实例化将导致无效对象。
   * 请通过引擎提供的接口获取实例。
   * @en
   * This class is automatically created and maintained by the game engine. Direct instantiation by developers will result in an invalid object.
   * Please obtain an instance through the interface provided by the engine.
   *
   * @private
   * @sealed
   */
  private constructor();
}

/**
 * @zh
 * GameAnalytics 类用于处理游戏分析相关的功能。
 * 它提供了许多方法来记录游戏事件、用户属性和游戏状态等。
 * @en
 * The GameAnalytics class is used to handle game analytics-related functions.
 * It provides many methods for recording game events, user properties, and game states.
 */
declare class GameAnalytics {
  /**
   * @zh
   * 神策分析平台实例。
   * @en
   * The instance of the Sensor Analytics platform.
   */
  readonly sensor: GameSensorAnalytics;
}

/**
 * @zh
 * GameSensorAnalytics 类是神策平台的专业数据分析模块，提供完整的游戏数据采集与分析能力。通过该模块，你可以追踪玩家行为、记录关键事件并构建全面的数据分析体系。
 * @en
 * The GameSensorAnalytics class is the professional data analytics module for the Sensor platform, providing complete game data collection and analysis capabilities. With this module, you can track player behavior, record key events, and build a comprehensive data analytics system.
 */
declare class GameSensorAnalytics {
  /**
   * @zh
   * 初始化神策埋点配置方法。
   * 用于设置数据接收地址和超时时间。
   * 注意: 以最后一次执行的配置为准。
   * @en
   * Initializes the Sensor tracking configuration.
   * Used to set the data receiving address and timeout period.
   * Note: The configuration from the last execution will be used.
   * @param url
   * @zh 数据接收地址，神策服务器的 URL。
   * @en The data receiving address, which is the URL of the Sensor server.
   * @param timeout
   * @zh 可选，请求超时时间，默认为30s。
   * @en Optional, request timeout in seconds, defaults to 30s.
   */
  init(url: string, timeout?: number): void;

  /**
   * @zh
   * 追踪数据事件方法。
   * 用于记录用户行为和自定义事件。
   * @en
   * Tracks a data event.
   * Used to record user behavior and custom events.
   * @param distinctId
   * @zh 用户唯一标识，通常是平台用户 ID (`GamePlayer.userId`)。
   * @en The user's unique identifier, typically the platform user ID (`GamePlayer.userId`).
   * @param eventName
   * @zh 事件名称。
   * @en The name of the event.
   * @param properties
   * @zh 可选，事件属性 (会被 `JSON.stringify` 序列化)。
   * @en Optional, event properties (will be serialized with `JSON.stringify`).
   */
  track(
    distinctId: string,
    eventName: string,
    properties?: Record<string, string | number | boolean>
  ): void;
}

/**
 * @zh
 * URLSearchParams 类用于处理 URL 查询字符串中的参数部分。
 * 它提供了一系列方法来添加、删除、获取和操作查询参数。
 * @en
 * The URLSearchParams class is used to handle the parameter part of a URL query string.
 * It provides a series of methods to add, delete, get, and manipulate query parameters.
 */
declare class URLSearchParams {
  /**
   * @zh
   * 构造函数，用于创建一个新的 URLSearchParams 对象。
   * @en
   * Constructor, used to create a new URLSearchParams object.
   * @param args
   * @zh 初始化查询参数的对象或字符串。
   * @en The object or string to initialize the query parameters.
   */
  constructor(args: any);

  /**
   * @zh
   * 为指定的查询参数追加一个值。
   * @en
   * Appends a value for the specified query parameter.
   * @param name
   * @zh 查询参数的名称。
   * @en The name of the query parameter.
   * @param value
   * @zh 查询参数的值。
   * @en The value of the query parameter.
   */
  append(name: string, value: string): void;

  /**
   * @zh
   * 删除指定的查询参数及其值。
   * @en
   * Deletes the specified query parameter and its value.
   * @param name
   * @zh 要删除的查询参数的名称。
   * @en The name of the query parameter to delete.
   */
  delete(name: string): void;

  /**
   * @zh
   * 获取指定查询参数的第一个值。
   * 如果该参数不存在，则返回 `null`。
   * @en
   * Gets the first value of the specified query parameter.
   * If the parameter does not exist, it returns `null`.
   * @param name
   * @zh 查询参数的名称。
   * @en The name of the query parameter.
   * @returns
   * @zh 查询参数的值或 `null`。
   * @en The value of the query parameter or `null`.
   */
  get(name: string): string | null;

  /**
   * @zh
   * 获取指定查询参数的所有值。
   * @en
   * Gets all values of the specified query parameter.
   * @param name
   * @zh 查询参数的名称。
   * @en The name of the query parameter.
   * @returns
   * @zh 查询参数的值的数组。
   * @en An array of the query parameter's values.
   */
  getAll(name: string): string[];

  /**
   * @zh
   * 遍历查询参数，对每个键值对执行回调函数。
   * @en
   * Iterates through the query parameters and executes a callback function for each key-value pair.
   * @param callback
   * @zh 每个查询参数执行的回调函数。
   * @en The callback function to execute for each query parameter.
   */
  forEach(
    callback: (
      this: URLSearchParams,
      value: string,
      key: string,
      url: URLSearchParams
    ) => any
  ): void;

  /**
   * @zh
   * 检查是否存在指定的查询参数。
   * @en
   * Checks if the specified query parameter exists.
   * @param name
   * @zh 查询参数的名称。
   * @en The name of the query parameter.
   * @returns
   * @zh 如果存在则返回 `true`，否则返回 `false`。
   * @en Returns `true` if it exists, otherwise `false`.
   */
  has(name: string): boolean;

  /**
   * @zh
   * 设置指定查询参数的值。如果该参数已存在，则替换其值。
   * @en
   * Sets the value of the specified query parameter. If the parameter already exists, its value is replaced.
   * @param name
   * @zh 查询参数的名称。
   * @en The name of the query parameter.
   * @param value
   * @zh 查询参数的值。
   * @en The value of the query parameter.
   */
  set(name: string, value: string): void;

  /**
   * @zh
   * 返回一个包含所有查询参数名称的迭代器。
   * @en
   * Returns an iterator containing all query parameter names.
   * @returns
   * @zh 查询参数名称的迭代器。
   * @en An iterator for the query parameter names.
   */
  keys(): IterableIterator<string>;

  /**
   * @zh
   * 返回一个包含所有查询参数值的迭代器。
   * @en
   * Returns an iterator containing all query parameter values.
   * @returns
   * @zh 查询参数值的迭代器。
   * @en An iterator for the query parameter values.
   */
  values(): IterableIterator<string>;

  /**
   * @zh
   * 返回一个包含所有查询参数键值对的迭代器。
   * 每个元素是一个包含名称和值的数组。
   * @en
   * Returns an iterator containing all query parameter key-value pairs.
   * Each element is an array containing the name and value.
   * @returns
   * @zh 查询参数及其值的迭代器。
   * @en An iterator for the query parameters and their values.
   */
  entries(): IterableIterator<string[]>;

  /**
   * @zh
   * 对查询参数按键进行排序。
   * @en
   * Sorts the query parameters by key.
   */
  sort(): void;

  /**
   * @zh
   * 将查询参数转换为字符串。
   * @en
   * Converts the query parameters to a string.
   * @returns
   * @zh 查询参数的字符串表示。
   * @en The string representation of the query parameters.
   */
  toString(): string;

  /**
   * @zh
   * 返回一个包含所有查询参数及其值的迭代器，与 `entries` 方法的返回值相同。
   * @en
   * Returns an iterator containing all query parameters and their values, same as the return value of the `entries` method.
   */
  [Symbol.iterator](): IterableIterator<string[]>;
}

/**
 * @zh
 * URL 类用于解析和操作统一资源定位符（URL）。
 * 它提供了一系列的属性和方法，用于获取和设置URL的各个组成部分。
 * @en
 * The URL class is used to parse and manipulate Uniform Resource Locators (URLs).
 * It provides a series of properties and methods for getting and setting the various components of a URL.
 */
declare class URL {
  /**
   * @zh
   * 构造函数，创建一个新的 URL 对象。
   * @en
   * Constructor, creates a new URL object.
   * @param url
   * @zh 要解析的URL字符串。
   * @en The URL string to parse.
   * @param base
   * @zh 可选的基准URL，用于解析相对URL。
   * @en An optional base URL for resolving relative URLs.
   */
  constructor(url: any, base?: any);

  /**
   * @zh
   * 获取或设置URL的片段标识符（hash）部分。
   * @en
   * Gets or sets the fragment identifier (hash) part of the URL.
   */
  get hash(): string;
  set hash(value: string);

  /**
   * @zh
   * 获取或设置URL的主机名和端口号部分。
   * @en
   * Gets or sets the hostname and port number part of the URL.
   */
  get host(): string;
  set host(value: string);

  /**
   * @zh
   * 获取或设置URL的主机名部分。
   * @en
   * Gets or sets the hostname part of the URL.
   */
  get hostname(): any;
  set hostname(value: any);

  /**
   * @zh
   * 获取或设置URL的端口号部分。
   * @en
   * Gets or sets the port number part of the URL.
   */
  get port(): string;
  set port(value: string);

  /**
   * @zh
   * 获取或设置整个URL字符串表示。
   * @en
   * Gets or sets the entire URL string representation.
   */
  get href(): string;
  set href(value: string);

  /**
   * @zh
   * 获取URL的源（协议、主机名和端口号）部分。
   * @en
   * Gets the origin (protocol, hostname, and port number) part of the URL.
   */
  get origin(): string;

  /**
   * @zh
   * 获取或设置URL的用户名部分。
   * @en
   * Gets or sets the username part of the URL.
   */
  get username(): string;
  set username(value: string);

  /**
   * @zh
   * 获取或设置URL的密码部分。
   * @en
   * Gets or sets the password part of the URL.
   */
  get password(): string;
  set password(value: string);

  /**
   * @zh
   * 获取或设置URL的路径名部分。
   * @en
   * Gets or sets the pathname part of the URL.
   */
  get pathname(): string;
  set pathname(value: string);

  /**
   * @zh
   * 获取或设置URL的协议部分。
   * @en
   * Gets or sets the protocol part of the URL.
   */
  get protocol(): string;
  set protocol(value: string);

  /**
   * @zh
   * 获取或设置URL的查询字符串部分。
   * @en
   * Gets or sets the query string part of the URL.
   */
  get search(): string;
  set search(value: string);

  /**
   * @zh
   * 获取与URL查询字符串关联的 URLSearchParams 对象。
   * @en
   * Gets the URLSearchParams object associated with the URL's query string.
   */
  get searchParams(): URLSearchParams;

  /**
   * @zh
   * 返回URL的JSON表示。
   * @en
   * Returns the JSON representation of the URL.
   */
  toJSON(): string;

  /**
   * @zh
   * 返回整个URL的字符串表示。
   * @en
   * Returns the string representation of the entire URL.
   */
  toString(): string;
}

/**
 * @zh
 * 延迟指定毫秒后返回一个resolve的Promise对象。
 * @en
 * Returns a resolved Promise after a specified number of milliseconds.
 * @param ms
 * @zh 延迟的毫秒数。
 * @en The number of milliseconds to delay.
 * @returns
 * @zh 一个Promise，在指定的毫秒数后resolve。
 * @en A Promise that resolves after the specified number of milliseconds.
 * @example
 * ```typescript
 * async function example() {
 *   console.log('start');
 *   await sleep(1000);
 *   console.log('end');
 * }
 * ```
 */
declare function sleep(ms: number): Promise<void>;

/**
 * @zh
 * 用于延迟执行函数的计时器，`delayMs`毫秒后异步执行回调函数`callback`。
 * 该函数自身是同步的，返回用于清除此计时器的ID，可在 `clearTimeout` 中使用。
 * @en
 * A timer for delaying the execution of a function. The `callback` function is executed asynchronously after `delayMs` milliseconds.
 * This function itself is synchronous and returns an ID that can be used in `clearTimeout` to clear the timer.
 * @param callback
 * @zh 要延迟执行的回调函数。
 * @en The callback function to be executed with a delay.
 * @param delayMs
 * @zh 延迟的毫秒数。
 * @en The delay in milliseconds.
 * @returns
 * @zh 用于清除计时器的ID。
 * @en The ID for clearing the timer.
 */
declare function setTimeout(callback: Function, delayMs: number): number;

/**
 * @zh
 * 用于清除传入ID对应的 `setTimeout` 计时器。
 * @en
 * Clears the `setTimeout` timer corresponding to the provided ID.
 * @param id
 * @zh 要清除的计时器的ID。
 * @en The ID of the timer to be cleared.
 */
declare function clearTimeout(id: number): void;

/**
 * @zh
 * 用于定时执行函数的计时器，每 `delayMs` 毫秒后异步执行回调函数 `callback`。
 * 该函数自身是同步的，返回用于清除此计时器的ID，可在 `clearInterval` 中使用。
 * @en
 * A timer for periodically executing a function. The `callback` function is executed asynchronously every `delayMs` milliseconds.
 * This function itself is synchronous and returns an ID that can be used in `clearInterval` to clear the timer.
 * @param callback
 * @zh 要定时执行的回调函数。
 * @en The callback function to be executed periodically.
 * @param delayMs
 * @zh 间隔的毫秒数。
 * @en The interval in milliseconds.
 * @returns
 * @zh 用于清除计时器的ID。
 * @en The ID for clearing the timer.
 */
declare function setInterval(callback: Function, delayMs: number): number;

/**
 * @zh
 * 用于清除传入ID对应的 `setInterval` 计时器。
 * @en
 * Clears the `setInterval` timer corresponding to the provided ID.
 * @param id
 * @zh 要清除的计时器的ID。
 * @en The ID of the timer to be cleared.
 */
declare function clearInterval(id: number): void;
