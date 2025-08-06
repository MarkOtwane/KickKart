
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model orderItem
 * 
 */
export type orderItem = $Result.DefaultSelection<Prisma.$orderItemPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  CLOTHING: 'CLOTHING',
  SHOES: 'SHOES',
  BAGS: 'BAGS',
  JEWELRY: 'JEWELRY',
  ACCESSORIES: 'ACCESSORIES'
};

export type Category = (typeof Category)[keyof typeof Category]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CARD: 'CARD',
  MPESA: 'MPESA',
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **orderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.orderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    products: 'products',
    customers: 'customers',
    orders: 'orders',
    orderItem: 'orderItem',
    cart: 'cart',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "products" | "customers" | "orders" | "orderItem" | "cart" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      orderItem: {
        payload: Prisma.$orderItemPayload<ExtArgs>
        fields: Prisma.orderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findFirst: {
            args: Prisma.orderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findMany: {
            args: Prisma.orderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          create: {
            args: Prisma.orderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          createMany: {
            args: Prisma.orderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          delete: {
            args: Prisma.orderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          update: {
            args: Prisma.orderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          deleteMany: {
            args: Prisma.orderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          upsert: {
            args: Prisma.orderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.orderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    products?: productsOmit
    customers?: customersOmit
    orders?: ordersOmit
    orderItem?: orderItemOmit
    cart?: cartOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    orderItem: number
    cart: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | ProductsCountOutputTypeCountOrderItemArgs
    cart?: boolean | ProductsCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
    cart: number
    Payment: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
    cart?: boolean | CustomersCountOutputTypeCountCartArgs
    Payment?: boolean | CustomersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderItem: number
    Payment: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrdersCountOutputTypeCountOrderItemArgs
    Payment?: boolean | OrdersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    productID: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    productID: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    productID: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: $Enums.Category | null
    brand: string | null
    size: string | null
    color: string | null
    stock: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    productID: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: $Enums.Category | null
    brand: string | null
    size: string | null
    color: string | null
    stock: number | null
  }

  export type ProductsCountAggregateOutputType = {
    productID: number
    name: number
    description: number
    price: number
    category: number
    brand: number
    size: number
    color: number
    stock: number
    images: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    productID?: true
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    productID?: true
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    productID?: true
    name?: true
    description?: true
    price?: true
    category?: true
    brand?: true
    size?: true
    color?: true
    stock?: true
  }

  export type ProductsMaxAggregateInputType = {
    productID?: true
    name?: true
    description?: true
    price?: true
    category?: true
    brand?: true
    size?: true
    color?: true
    stock?: true
  }

  export type ProductsCountAggregateInputType = {
    productID?: true
    name?: true
    description?: true
    price?: true
    category?: true
    brand?: true
    size?: true
    color?: true
    stock?: true
    images?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    productID: number
    name: string
    description: string
    price: Decimal
    category: $Enums.Category
    brand: string | null
    size: string | null
    color: string | null
    stock: number | null
    images: string[]
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    brand?: boolean
    size?: boolean
    color?: boolean
    stock?: boolean
    images?: boolean
    orderItem?: boolean | products$orderItemArgs<ExtArgs>
    cart?: boolean | products$cartArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    brand?: boolean
    size?: boolean
    color?: boolean
    stock?: boolean
    images?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    brand?: boolean
    size?: boolean
    color?: boolean
    stock?: boolean
    images?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    productID?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    brand?: boolean
    size?: boolean
    color?: boolean
    stock?: boolean
    images?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productID" | "name" | "description" | "price" | "category" | "brand" | "size" | "color" | "stock" | "images", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | products$orderItemArgs<ExtArgs>
    cart?: boolean | products$cartArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      orderItem: Prisma.$orderItemPayload<ExtArgs>[]
      cart: Prisma.$cartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productID: number
      name: string
      description: string
      price: Prisma.Decimal
      category: $Enums.Category
      brand: string | null
      size: string | null
      color: string | null
      stock: number | null
      images: string[]
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `productID`
     * const productsWithProductIDOnly = await prisma.products.findMany({ select: { productID: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productID`
     * const productsWithProductIDOnly = await prisma.products.createManyAndReturn({
     *   select: { productID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productID`
     * const productsWithProductIDOnly = await prisma.products.updateManyAndReturn({
     *   select: { productID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends products$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, products$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends products$cartArgs<ExtArgs> = {}>(args?: Subset<T, products$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly productID: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly category: FieldRef<"products", 'Category'>
    readonly brand: FieldRef<"products", 'String'>
    readonly size: FieldRef<"products", 'String'>
    readonly color: FieldRef<"products", 'String'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly images: FieldRef<"products", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.orderItem
   */
  export type products$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * products.cart
   */
  export type products$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customerID: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customerID: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customerID: number | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    deletedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    customerID: number | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    deletedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    customerID: number
    fullName: number
    email: number
    password: number
    role: number
    deletedAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customerID?: true
  }

  export type CustomersSumAggregateInputType = {
    customerID?: true
  }

  export type CustomersMinAggregateInputType = {
    customerID?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    deletedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    customerID?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    deletedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    customerID?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    deletedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customerID: number
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    deletedAt: Date | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerID?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deletedAt?: boolean
    orders?: boolean | customers$ordersArgs<ExtArgs>
    cart?: boolean | customers$cartArgs<ExtArgs>
    Payment?: boolean | customers$PaymentArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerID?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerID?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customerID?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    deletedAt?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerID" | "fullName" | "email" | "password" | "role" | "deletedAt", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | customers$ordersArgs<ExtArgs>
    cart?: boolean | customers$cartArgs<ExtArgs>
    Payment?: boolean | customers$PaymentArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      cart: Prisma.$cartPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerID: number
      fullName: string
      email: string
      password: string
      role: $Enums.Role
      deletedAt: Date | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customerID`
     * const customersWithCustomerIDOnly = await prisma.customers.findMany({ select: { customerID: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerID`
     * const customersWithCustomerIDOnly = await prisma.customers.createManyAndReturn({
     *   select: { customerID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customerID`
     * const customersWithCustomerIDOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customerID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends customers$cartArgs<ExtArgs> = {}>(args?: Subset<T, customers$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends customers$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, customers$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly customerID: FieldRef<"customers", 'Int'>
    readonly fullName: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly password: FieldRef<"customers", 'String'>
    readonly role: FieldRef<"customers", 'Role'>
    readonly deletedAt: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.orders
   */
  export type customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * customers.cart
   */
  export type customers$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * customers.Payment
   */
  export type customers$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    orderID: number | null
    customerID: number | null
    totalAmount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    orderID: number | null
    customerID: number | null
    totalAmount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    orderID: number | null
    customerID: number | null
    orderDate: Date | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    shippedAt: Date | null
    deliveredAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    orderID: number | null
    customerID: number | null
    orderDate: Date | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    shippedAt: Date | null
    deliveredAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    orderID: number
    customerID: number
    orderDate: number
    totalAmount: number
    status: number
    shippedAt: number
    deliveredAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    orderID?: true
    customerID?: true
    totalAmount?: true
  }

  export type OrdersSumAggregateInputType = {
    orderID?: true
    customerID?: true
    totalAmount?: true
  }

  export type OrdersMinAggregateInputType = {
    orderID?: true
    customerID?: true
    orderDate?: true
    totalAmount?: true
    status?: true
    shippedAt?: true
    deliveredAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    orderID?: true
    customerID?: true
    orderDate?: true
    totalAmount?: true
    status?: true
    shippedAt?: true
    deliveredAt?: true
  }

  export type OrdersCountAggregateInputType = {
    orderID?: true
    customerID?: true
    orderDate?: true
    totalAmount?: true
    status?: true
    shippedAt?: true
    deliveredAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    orderID: number
    customerID: number
    orderDate: Date
    totalAmount: number
    status: $Enums.OrderStatus
    shippedAt: Date | null
    deliveredAt: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderID?: boolean
    customerID?: boolean
    orderDate?: boolean
    totalAmount?: boolean
    status?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    orderItem?: boolean | orders$orderItemArgs<ExtArgs>
    Payment?: boolean | orders$PaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderID?: boolean
    customerID?: boolean
    orderDate?: boolean
    totalAmount?: boolean
    status?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderID?: boolean
    customerID?: boolean
    orderDate?: boolean
    totalAmount?: boolean
    status?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    orderID?: boolean
    customerID?: boolean
    orderDate?: boolean
    totalAmount?: boolean
    status?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderID" | "customerID" | "orderDate" | "totalAmount" | "status" | "shippedAt" | "deliveredAt", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    orderItem?: boolean | orders$orderItemArgs<ExtArgs>
    Payment?: boolean | orders$PaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      orderItem: Prisma.$orderItemPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      orderID: number
      customerID: number
      orderDate: Date
      totalAmount: number
      status: $Enums.OrderStatus
      shippedAt: Date | null
      deliveredAt: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `orderID`
     * const ordersWithOrderIDOnly = await prisma.orders.findMany({ select: { orderID: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderID`
     * const ordersWithOrderIDOnly = await prisma.orders.createManyAndReturn({
     *   select: { orderID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderID`
     * const ordersWithOrderIDOnly = await prisma.orders.updateManyAndReturn({
     *   select: { orderID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItem<T extends orders$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, orders$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends orders$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, orders$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly orderID: FieldRef<"orders", 'Int'>
    readonly customerID: FieldRef<"orders", 'Int'>
    readonly orderDate: FieldRef<"orders", 'DateTime'>
    readonly totalAmount: FieldRef<"orders", 'Float'>
    readonly status: FieldRef<"orders", 'OrderStatus'>
    readonly shippedAt: FieldRef<"orders", 'DateTime'>
    readonly deliveredAt: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.orderItem
   */
  export type orders$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orders.Payment
   */
  export type orders$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model orderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    orderItemID: number | null
    orderID: number | null
    productID: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    orderItemID: number | null
    orderID: number | null
    productID: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    orderItemID: number | null
    orderID: number | null
    productID: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemMaxAggregateOutputType = {
    orderItemID: number | null
    orderID: number | null
    productID: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemCountAggregateOutputType = {
    orderItemID: number
    orderID: number
    productID: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    orderItemID?: true
    orderID?: true
    productID?: true
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    orderItemID?: true
    orderID?: true
    productID?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    orderItemID?: true
    orderID?: true
    productID?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMaxAggregateInputType = {
    orderItemID?: true
    orderID?: true
    productID?: true
    quantity?: true
    price?: true
  }

  export type OrderItemCountAggregateInputType = {
    orderItemID?: true
    orderID?: true
    productID?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItem to aggregate.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type orderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithAggregationInput | orderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: orderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    orderItemID: number
    orderID: number
    productID: number
    quantity: number
    price: Decimal
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends orderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type orderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderItemID?: boolean
    orderID?: boolean
    productID?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderItemID?: boolean
    orderID?: boolean
    productID?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderItemID?: boolean
    orderID?: boolean
    productID?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectScalar = {
    orderItemID?: boolean
    orderID?: boolean
    productID?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type orderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderItemID" | "orderID" | "productID" | "quantity" | "price", ExtArgs["result"]["orderItem"]>
  export type orderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type orderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type orderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $orderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderItem"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderItemID: number
      orderID: number
      productID: number
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type orderItemGetPayload<S extends boolean | null | undefined | orderItemDefaultArgs> = $Result.GetResult<Prisma.$orderItemPayload, S>

  type orderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface orderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderItem'], meta: { name: 'orderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {orderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderItemFindUniqueArgs>(args: SelectSubset<T, orderItemFindUniqueArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, orderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderItemFindFirstArgs>(args?: SelectSubset<T, orderItemFindFirstArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, orderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `orderItemID`
     * const orderItemWithOrderItemIDOnly = await prisma.orderItem.findMany({ select: { orderItemID: true } })
     * 
     */
    findMany<T extends orderItemFindManyArgs>(args?: SelectSubset<T, orderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {orderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends orderItemCreateArgs>(args: SelectSubset<T, orderItemCreateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {orderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderItemCreateManyArgs>(args?: SelectSubset<T, orderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {orderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `orderItemID`
     * const orderItemWithOrderItemIDOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { orderItemID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, orderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {orderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends orderItemDeleteArgs>(args: SelectSubset<T, orderItemDeleteArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {orderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderItemUpdateArgs>(args: SelectSubset<T, orderItemUpdateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderItemDeleteManyArgs>(args?: SelectSubset<T, orderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderItemUpdateManyArgs>(args: SelectSubset<T, orderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {orderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `orderItemID`
     * const orderItemWithOrderItemIDOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { orderItemID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, orderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {orderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends orderItemUpsertArgs>(args: SelectSubset<T, orderItemUpsertArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemCountArgs>(
      args?: Subset<T, orderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderItemGroupByArgs['orderBy'] }
        : { orderBy?: orderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderItem model
   */
  readonly fields: orderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderItem model
   */
  interface orderItemFieldRefs {
    readonly orderItemID: FieldRef<"orderItem", 'Int'>
    readonly orderID: FieldRef<"orderItem", 'Int'>
    readonly productID: FieldRef<"orderItem", 'Int'>
    readonly quantity: FieldRef<"orderItem", 'Int'>
    readonly price: FieldRef<"orderItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * orderItem findUnique
   */
  export type orderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findUniqueOrThrow
   */
  export type orderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findFirst
   */
  export type orderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findFirstOrThrow
   */
  export type orderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findMany
   */
  export type orderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem create
   */
  export type orderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a orderItem.
     */
    data: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
  }

  /**
   * orderItem createMany
   */
  export type orderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderItem createManyAndReturn
   */
  export type orderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem update
   */
  export type orderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a orderItem.
     */
    data: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
    /**
     * Choose, which orderItem to update.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem updateMany
   */
  export type orderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
  }

  /**
   * orderItem updateManyAndReturn
   */
  export type orderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem upsert
   */
  export type orderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the orderItem to update in case it exists.
     */
    where: orderItemWhereUniqueInput
    /**
     * In case the orderItem found by the `where` argument doesn't exist, create a new orderItem with this data.
     */
    create: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
    /**
     * In case the orderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
  }

  /**
   * orderItem delete
   */
  export type orderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter which orderItem to delete.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem deleteMany
   */
  export type orderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to delete.
     */
    limit?: number
  }

  /**
   * orderItem without action
   */
  export type orderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cartID: number | null
    productID: number | null
    customerID: number | null
  }

  export type CartSumAggregateOutputType = {
    cartID: number | null
    productID: number | null
    customerID: number | null
  }

  export type CartMinAggregateOutputType = {
    cartID: number | null
    productID: number | null
    customerID: number | null
  }

  export type CartMaxAggregateOutputType = {
    cartID: number | null
    productID: number | null
    customerID: number | null
  }

  export type CartCountAggregateOutputType = {
    cartID: number
    productID: number
    customerID: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cartID?: true
    productID?: true
    customerID?: true
  }

  export type CartSumAggregateInputType = {
    cartID?: true
    productID?: true
    customerID?: true
  }

  export type CartMinAggregateInputType = {
    cartID?: true
    productID?: true
    customerID?: true
  }

  export type CartMaxAggregateInputType = {
    cartID?: true
    productID?: true
    customerID?: true
  }

  export type CartCountAggregateInputType = {
    cartID?: true
    productID?: true
    customerID?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    cartID: number
    productID: number
    customerID: number
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartID?: boolean
    productID?: boolean
    customerID?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartID?: boolean
    productID?: boolean
    customerID?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartID?: boolean
    productID?: boolean
    customerID?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    cartID?: boolean
    productID?: boolean
    customerID?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cartID" | "productID" | "customerID", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type cartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type cartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cartID: number
      productID: number
      customerID: number
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `cartID`
     * const cartWithCartIDOnly = await prisma.cart.findMany({ select: { cartID: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `cartID`
     * const cartWithCartIDOnly = await prisma.cart.createManyAndReturn({
     *   select: { cartID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `cartID`
     * const cartWithCartIDOnly = await prisma.cart.updateManyAndReturn({
     *   select: { cartID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartUpdateManyAndReturnArgs>(args: SelectSubset<T, cartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly cartID: FieldRef<"cart", 'Int'>
    readonly productID: FieldRef<"cart", 'Int'>
    readonly customerID: FieldRef<"cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart updateManyAndReturn
   */
  export type cartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    orderID: number | null
    customerID: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    orderID: number | null
    customerID: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    orderID: number | null
    customerID: number | null
    amount: Decimal | null
    transactionRef: string | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    orderID: number | null
    customerID: number | null
    amount: Decimal | null
    transactionRef: string | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderID: number
    customerID: number
    amount: number
    transactionRef: number
    currency: number
    status: number
    method: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    orderID?: true
    customerID?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    orderID?: true
    customerID?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderID?: true
    customerID?: true
    amount?: true
    transactionRef?: true
    currency?: true
    status?: true
    method?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderID?: true
    customerID?: true
    amount?: true
    transactionRef?: true
    currency?: true
    status?: true
    method?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderID?: true
    customerID?: true
    amount?: true
    transactionRef?: true
    currency?: true
    status?: true
    method?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    orderID: number
    customerID: number
    amount: Decimal
    transactionRef: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderID?: boolean
    customerID?: boolean
    amount?: boolean
    transactionRef?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderID?: boolean
    customerID?: boolean
    amount?: boolean
    transactionRef?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderID?: boolean
    customerID?: boolean
    amount?: boolean
    transactionRef?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderID?: boolean
    customerID?: boolean
    amount?: boolean
    transactionRef?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderID" | "customerID" | "amount" | "transactionRef" | "currency" | "status" | "method" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      customer: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderID: number
      customerID: number
      amount: Prisma.Decimal
      transactionRef: string | null
      currency: string
      status: $Enums.PaymentStatus
      method: $Enums.PaymentMethod
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly orderID: FieldRef<"Payment", 'Int'>
    readonly customerID: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly transactionRef: FieldRef<"Payment", 'String'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductsScalarFieldEnum: {
    productID: 'productID',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    brand: 'brand',
    size: 'size',
    color: 'color',
    stock: 'stock',
    images: 'images'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    customerID: 'customerID',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    deletedAt: 'deletedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    orderID: 'orderID',
    customerID: 'customerID',
    orderDate: 'orderDate',
    totalAmount: 'totalAmount',
    status: 'status',
    shippedAt: 'shippedAt',
    deliveredAt: 'deliveredAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    orderItemID: 'orderItemID',
    orderID: 'orderID',
    productID: 'productID',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const CartScalarFieldEnum: {
    cartID: 'cartID',
    productID: 'productID',
    customerID: 'customerID'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderID: 'orderID',
    customerID: 'customerID',
    amount: 'amount',
    transactionRef: 'transactionRef',
    currency: 'currency',
    status: 'status',
    method: 'method',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    productID?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFilter<"products"> | $Enums.Category
    brand?: StringNullableFilter<"products"> | string | null
    size?: StringNullableFilter<"products"> | string | null
    color?: StringNullableFilter<"products"> | string | null
    stock?: IntNullableFilter<"products"> | number | null
    images?: StringNullableListFilter<"products">
    orderItem?: OrderItemListRelationFilter
    cart?: CartListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    productID?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    images?: SortOrder
    orderItem?: orderItemOrderByRelationAggregateInput
    cart?: cartOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    productID?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFilter<"products"> | $Enums.Category
    brand?: StringNullableFilter<"products"> | string | null
    size?: StringNullableFilter<"products"> | string | null
    color?: StringNullableFilter<"products"> | string | null
    stock?: IntNullableFilter<"products"> | number | null
    images?: StringNullableListFilter<"products">
    orderItem?: OrderItemListRelationFilter
    cart?: CartListRelationFilter
  }, "productID">

  export type productsOrderByWithAggregationInput = {
    productID?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    images?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    productID?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringWithAggregatesFilter<"products"> | string
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryWithAggregatesFilter<"products"> | $Enums.Category
    brand?: StringNullableWithAggregatesFilter<"products"> | string | null
    size?: StringNullableWithAggregatesFilter<"products"> | string | null
    color?: StringNullableWithAggregatesFilter<"products"> | string | null
    stock?: IntNullableWithAggregatesFilter<"products"> | number | null
    images?: StringNullableListFilter<"products">
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customerID?: IntFilter<"customers"> | number
    fullName?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    role?: EnumRoleFilter<"customers"> | $Enums.Role
    deletedAt?: DateTimeNullableFilter<"customers"> | Date | string | null
    orders?: OrdersListRelationFilter
    cart?: CartListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customerID?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    cart?: cartOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customerID?: number
    email?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    fullName?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    role?: EnumRoleFilter<"customers"> | $Enums.Role
    deletedAt?: DateTimeNullableFilter<"customers"> | Date | string | null
    orders?: OrdersListRelationFilter
    cart?: CartListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "customerID" | "email">

  export type customersOrderByWithAggregationInput = {
    customerID?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customerID?: IntWithAggregatesFilter<"customers"> | number
    fullName?: StringWithAggregatesFilter<"customers"> | string
    email?: StringWithAggregatesFilter<"customers"> | string
    password?: StringWithAggregatesFilter<"customers"> | string
    role?: EnumRoleWithAggregatesFilter<"customers"> | $Enums.Role
    deletedAt?: DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    orderID?: IntFilter<"orders"> | number
    customerID?: IntFilter<"orders"> | number
    orderDate?: DateTimeFilter<"orders"> | Date | string
    totalAmount?: FloatFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    shippedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    orderItem?: OrderItemListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    orderDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    customer?: customersOrderByWithRelationInput
    orderItem?: orderItemOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    orderID?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customerID?: IntFilter<"orders"> | number
    orderDate?: DateTimeFilter<"orders"> | Date | string
    totalAmount?: FloatFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    shippedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    orderItem?: OrderItemListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "orderID">

  export type ordersOrderByWithAggregationInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    orderDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    orderID?: IntWithAggregatesFilter<"orders"> | number
    customerID?: IntWithAggregatesFilter<"orders"> | number
    orderDate?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"orders"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"orders"> | $Enums.OrderStatus
    shippedAt?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type orderItemWhereInput = {
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    orderItemID?: IntFilter<"orderItem"> | number
    orderID?: IntFilter<"orderItem"> | number
    productID?: IntFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    price?: DecimalFilter<"orderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type orderItemOrderByWithRelationInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: ordersOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type orderItemWhereUniqueInput = Prisma.AtLeast<{
    orderItemID?: number
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    orderID?: IntFilter<"orderItem"> | number
    productID?: IntFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    price?: DecimalFilter<"orderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "orderItemID">

  export type orderItemOrderByWithAggregationInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: orderItemCountOrderByAggregateInput
    _avg?: orderItemAvgOrderByAggregateInput
    _max?: orderItemMaxOrderByAggregateInput
    _min?: orderItemMinOrderByAggregateInput
    _sum?: orderItemSumOrderByAggregateInput
  }

  export type orderItemScalarWhereWithAggregatesInput = {
    AND?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    OR?: orderItemScalarWhereWithAggregatesInput[]
    NOT?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    orderItemID?: IntWithAggregatesFilter<"orderItem"> | number
    orderID?: IntWithAggregatesFilter<"orderItem"> | number
    productID?: IntWithAggregatesFilter<"orderItem"> | number
    quantity?: IntWithAggregatesFilter<"orderItem"> | number
    price?: DecimalWithAggregatesFilter<"orderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    cartID?: IntFilter<"cart"> | number
    productID?: IntFilter<"cart"> | number
    customerID?: IntFilter<"cart"> | number
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type cartOrderByWithRelationInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
    customer?: customersOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    cartID?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    productID?: IntFilter<"cart"> | number
    customerID?: IntFilter<"cart"> | number
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "cartID">

  export type cartOrderByWithAggregationInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    cartID?: IntWithAggregatesFilter<"cart"> | number
    productID?: IntWithAggregatesFilter<"cart"> | number
    customerID?: IntWithAggregatesFilter<"cart"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    orderID?: IntFilter<"Payment"> | number
    customerID?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionRef?: StringNullableFilter<"Payment"> | string | null
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
    transactionRef?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: ordersOrderByWithRelationInput
    customer?: customersOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionRef?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    orderID?: IntFilter<"Payment"> | number
    customerID?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }, "id" | "transactionRef">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
    transactionRef?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    orderID?: IntWithAggregatesFilter<"Payment"> | number
    customerID?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type productsCreateInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    orderItem?: orderItemCreateNestedManyWithoutProductInput
    cart?: cartCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    productID?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
    cart?: cartUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
    cart?: cartUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    productID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
    cart?: cartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    productID?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
  }

  export type productsUncheckedUpdateManyInput = {
    productID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
  }

  export type customersCreateInput = {
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersCreateNestedManyWithoutCustomerInput
    cart?: cartCreateNestedManyWithoutCustomerInput
    Payment?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    customerID?: number
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    cart?: cartUncheckedCreateNestedManyWithoutCustomerInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    cart?: cartUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customerID?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    cart?: cartUncheckedUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersCreateManyInput = {
    customerID?: number
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
  }

  export type customersUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customerID?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    customer: customersCreateNestedOneWithoutOrdersInput
    orderItem?: orderItemCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateInput = {
    orderID?: number
    customerID: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersUpdateInput = {
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutOrdersNestedInput
    orderItem?: orderItemUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersCreateManyInput = {
    orderID?: number
    customerID: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderItemCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrderItemInput
    product: productsCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateInput = {
    orderItemID?: number
    orderID: number
    productID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type orderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrderItemNestedInput
    product?: productsUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderItemCreateManyInput = {
    orderItemID?: number
    orderID: number
    productID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type orderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderItemUncheckedUpdateManyInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cartCreateInput = {
    customer: customersCreateNestedOneWithoutCartInput
    product: productsCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    cartID?: number
    productID: number
    customerID: number
  }

  export type cartUpdateInput = {
    customer?: customersUpdateOneRequiredWithoutCartNestedInput
    product?: productsUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
  }

  export type cartCreateManyInput = {
    cartID?: number
    productID: number
    customerID: number
  }

  export type cartUpdateManyMutationInput = {

  }

  export type cartUncheckedUpdateManyInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: ordersCreateNestedOneWithoutPaymentInput
    customer: customersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    orderID: number
    customerID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ordersUpdateOneRequiredWithoutPaymentNestedInput
    customer?: customersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    orderID: number
    customerID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OrderItemListRelationFilter = {
    every?: orderItemWhereInput
    some?: orderItemWhereInput
    none?: orderItemWhereInput
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type orderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    productID?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    color?: SortOrder
    stock?: SortOrder
    images?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    productID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    productID?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    productID?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    productID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customerID?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customerID?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customerID?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customerID?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customerID?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type ordersCountOrderByAggregateInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    orderDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    totalAmount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    orderDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    orderDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    orderID?: SortOrder
    customerID?: SortOrder
    totalAmount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type orderItemCountOrderByAggregateInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemAvgOrderByAggregateInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemMaxOrderByAggregateInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemMinOrderByAggregateInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemSumOrderByAggregateInput = {
    orderItemID?: SortOrder
    orderID?: SortOrder
    productID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type cartCountOrderByAggregateInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    cartID?: SortOrder
    productID?: SortOrder
    customerID?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
    transactionRef?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
    transactionRef?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
    transactionRef?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    orderID?: SortOrder
    customerID?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type productsCreateimagesInput = {
    set: string[]
  }

  export type orderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type cartCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type orderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type cartUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type cartCreateNestedManyWithoutCustomerInput = {
    create?: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput> | cartCreateWithoutCustomerInput[] | cartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartCreateOrConnectWithoutCustomerInput | cartCreateOrConnectWithoutCustomerInput[]
    createMany?: cartCreateManyCustomerInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput> | cartCreateWithoutCustomerInput[] | cartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartCreateOrConnectWithoutCustomerInput | cartCreateOrConnectWithoutCustomerInput[]
    createMany?: cartCreateManyCustomerInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomerInput | ordersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomerInput | ordersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomerInput | ordersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type cartUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput> | cartCreateWithoutCustomerInput[] | cartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartCreateOrConnectWithoutCustomerInput | cartCreateOrConnectWithoutCustomerInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutCustomerInput | cartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: cartCreateManyCustomerInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutCustomerInput | cartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: cartUpdateManyWithWhereWithoutCustomerInput | cartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput> | ordersCreateWithoutCustomerInput[] | ordersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomerInput | ordersCreateOrConnectWithoutCustomerInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomerInput | ordersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ordersCreateManyCustomerInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomerInput | ordersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomerInput | ordersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput> | cartCreateWithoutCustomerInput[] | cartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartCreateOrConnectWithoutCustomerInput | cartCreateOrConnectWithoutCustomerInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutCustomerInput | cartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: cartCreateManyCustomerInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutCustomerInput | cartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: cartUpdateManyWithWhereWithoutCustomerInput | cartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    connect?: customersWhereUniqueInput
  }

  export type orderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type customersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    upsert?: customersUpsertWithoutOrdersInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutOrdersInput, customersUpdateWithoutOrdersInput>, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type orderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ordersCreateWithoutOrderItemInput, ordersUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrderItemInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<productsCreateWithoutOrderItemInput, productsUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrderItemInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ordersCreateWithoutOrderItemInput, ordersUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrderItemInput
    upsert?: ordersUpsertWithoutOrderItemInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrderItemInput, ordersUpdateWithoutOrderItemInput>, ordersUncheckedUpdateWithoutOrderItemInput>
  }

  export type productsUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<productsCreateWithoutOrderItemInput, productsUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrderItemInput
    upsert?: productsUpsertWithoutOrderItemInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrderItemInput, productsUpdateWithoutOrderItemInput>, productsUncheckedUpdateWithoutOrderItemInput>
  }

  export type customersCreateNestedOneWithoutCartInput = {
    create?: XOR<customersCreateWithoutCartInput, customersUncheckedCreateWithoutCartInput>
    connectOrCreate?: customersCreateOrConnectWithoutCartInput
    connect?: customersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCartInput = {
    create?: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartInput
    connect?: productsWhereUniqueInput
  }

  export type customersUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<customersCreateWithoutCartInput, customersUncheckedCreateWithoutCartInput>
    connectOrCreate?: customersCreateOrConnectWithoutCartInput
    upsert?: customersUpsertWithoutCartInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutCartInput, customersUpdateWithoutCartInput>, customersUncheckedUpdateWithoutCartInput>
  }

  export type productsUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartInput
    upsert?: productsUpsertWithoutCartInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCartInput, productsUpdateWithoutCartInput>, productsUncheckedUpdateWithoutCartInput>
  }

  export type ordersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentInput
    connect?: ordersWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<customersCreateWithoutPaymentInput, customersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customersCreateOrConnectWithoutPaymentInput
    connect?: customersWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type ordersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentInput
    upsert?: ordersUpsertWithoutPaymentInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutPaymentInput, ordersUpdateWithoutPaymentInput>, ordersUncheckedUpdateWithoutPaymentInput>
  }

  export type customersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<customersCreateWithoutPaymentInput, customersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customersCreateOrConnectWithoutPaymentInput
    upsert?: customersUpsertWithoutPaymentInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutPaymentInput, customersUpdateWithoutPaymentInput>, customersUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type orderItemCreateWithoutProductInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateWithoutProductInput = {
    orderItemID?: number
    orderID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type orderItemCreateOrConnectWithoutProductInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemCreateManyProductInputEnvelope = {
    data: orderItemCreateManyProductInput | orderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutProductInput = {
    customer: customersCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutProductInput = {
    cartID?: number
    customerID: number
  }

  export type cartCreateOrConnectWithoutProductInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartCreateManyProductInputEnvelope = {
    data: cartCreateManyProductInput | cartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type orderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
  }

  export type orderItemUpdateManyWithWhereWithoutProductInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type orderItemScalarWhereInput = {
    AND?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    OR?: orderItemScalarWhereInput[]
    NOT?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    orderItemID?: IntFilter<"orderItem"> | number
    orderID?: IntFilter<"orderItem"> | number
    productID?: IntFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    price?: DecimalFilter<"orderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type cartUpsertWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartUpdateWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
  }

  export type cartUpdateManyWithWhereWithoutProductInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutProductInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    cartID?: IntFilter<"cart"> | number
    productID?: IntFilter<"cart"> | number
    customerID?: IntFilter<"cart"> | number
  }

  export type ordersCreateWithoutCustomerInput = {
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    orderItem?: orderItemCreateNestedManyWithoutOrderInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateWithoutCustomerInput = {
    orderID?: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutOrderInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersCreateOrConnectWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput>
  }

  export type ordersCreateManyCustomerInputEnvelope = {
    data: ordersCreateManyCustomerInput | ordersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutCustomerInput = {
    product: productsCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutCustomerInput = {
    cartID?: number
    productID: number
  }

  export type cartCreateOrConnectWithoutCustomerInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput>
  }

  export type cartCreateManyCustomerInputEnvelope = {
    data: cartCreateManyCustomerInput | cartCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCustomerInput = {
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: ordersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCustomerInput = {
    id?: number
    orderID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentCreateManyCustomerInputEnvelope = {
    data: PaymentCreateManyCustomerInput | PaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomerInput, ordersUncheckedUpdateWithoutCustomerInput>
    create: XOR<ordersCreateWithoutCustomerInput, ordersUncheckedCreateWithoutCustomerInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomerInput, ordersUncheckedUpdateWithoutCustomerInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomerInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    orderID?: IntFilter<"orders"> | number
    customerID?: IntFilter<"orders"> | number
    orderDate?: DateTimeFilter<"orders"> | Date | string
    totalAmount?: FloatFilter<"orders"> | number
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    shippedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type cartUpsertWithWhereUniqueWithoutCustomerInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutCustomerInput, cartUncheckedUpdateWithoutCustomerInput>
    create: XOR<cartCreateWithoutCustomerInput, cartUncheckedCreateWithoutCustomerInput>
  }

  export type cartUpdateWithWhereUniqueWithoutCustomerInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutCustomerInput, cartUncheckedUpdateWithoutCustomerInput>
  }

  export type cartUpdateManyWithWhereWithoutCustomerInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    orderID?: IntFilter<"Payment"> | number
    customerID?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionRef?: StringNullableFilter<"Payment"> | string | null
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type customersCreateWithoutOrdersInput = {
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    cart?: cartCreateNestedManyWithoutCustomerInput
    Payment?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutOrdersInput = {
    customerID?: number
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    cart?: cartUncheckedCreateNestedManyWithoutCustomerInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutOrdersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
  }

  export type orderItemCreateWithoutOrderInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    product: productsCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateWithoutOrderInput = {
    orderItemID?: number
    productID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type orderItemCreateOrConnectWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemCreateManyOrderInputEnvelope = {
    data: orderItemCreateManyOrderInput | orderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: customersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    customerID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutOrdersInput = {
    update: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type customersUpdateWithoutOrdersInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: cartUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutOrdersInput = {
    customerID?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: cartUncheckedUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type orderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemUpdateManyWithWhereWithoutOrderInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type ordersCreateWithoutOrderItemInput = {
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    customer: customersCreateNestedOneWithoutOrdersInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateWithoutOrderItemInput = {
    orderID?: number
    customerID: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersCreateOrConnectWithoutOrderItemInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrderItemInput, ordersUncheckedCreateWithoutOrderItemInput>
  }

  export type productsCreateWithoutOrderItemInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    cart?: cartCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutOrderItemInput = {
    productID?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    cart?: cartUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutOrderItemInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrderItemInput, productsUncheckedCreateWithoutOrderItemInput>
  }

  export type ordersUpsertWithoutOrderItemInput = {
    update: XOR<ordersUpdateWithoutOrderItemInput, ordersUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ordersCreateWithoutOrderItemInput, ordersUncheckedCreateWithoutOrderItemInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrderItemInput, ordersUncheckedUpdateWithoutOrderItemInput>
  }

  export type ordersUpdateWithoutOrderItemInput = {
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrderItemInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type productsUpsertWithoutOrderItemInput = {
    update: XOR<productsUpdateWithoutOrderItemInput, productsUncheckedUpdateWithoutOrderItemInput>
    create: XOR<productsCreateWithoutOrderItemInput, productsUncheckedCreateWithoutOrderItemInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrderItemInput, productsUncheckedUpdateWithoutOrderItemInput>
  }

  export type productsUpdateWithoutOrderItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    cart?: cartUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutOrderItemInput = {
    productID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    cart?: cartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type customersCreateWithoutCartInput = {
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersCreateNestedManyWithoutCustomerInput
    Payment?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutCartInput = {
    customerID?: number
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutCartInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCartInput, customersUncheckedCreateWithoutCartInput>
  }

  export type productsCreateWithoutCartInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    orderItem?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutCartInput = {
    productID?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: $Enums.Category
    brand?: string | null
    size?: string | null
    color?: string | null
    stock?: number | null
    images?: productsCreateimagesInput | string[]
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutCartInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
  }

  export type customersUpsertWithoutCartInput = {
    update: XOR<customersUpdateWithoutCartInput, customersUncheckedUpdateWithoutCartInput>
    create: XOR<customersCreateWithoutCartInput, customersUncheckedCreateWithoutCartInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutCartInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutCartInput, customersUncheckedUpdateWithoutCartInput>
  }

  export type customersUpdateWithoutCartInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutCartInput = {
    customerID?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type productsUpsertWithoutCartInput = {
    update: XOR<productsUpdateWithoutCartInput, productsUncheckedUpdateWithoutCartInput>
    create: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCartInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCartInput, productsUncheckedUpdateWithoutCartInput>
  }

  export type productsUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutCartInput = {
    productID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    images?: productsUpdateimagesInput | string[]
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ordersCreateWithoutPaymentInput = {
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    customer: customersCreateNestedOneWithoutOrdersInput
    orderItem?: orderItemCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateWithoutPaymentInput = {
    orderID?: number
    customerID: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersCreateOrConnectWithoutPaymentInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
  }

  export type customersCreateWithoutPaymentInput = {
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersCreateNestedManyWithoutCustomerInput
    cart?: cartCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutPaymentInput = {
    customerID?: number
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomerInput
    cart?: cartUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutPaymentInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutPaymentInput, customersUncheckedCreateWithoutPaymentInput>
  }

  export type ordersUpsertWithoutPaymentInput = {
    update: XOR<ordersUpdateWithoutPaymentInput, ordersUncheckedUpdateWithoutPaymentInput>
    create: XOR<ordersCreateWithoutPaymentInput, ordersUncheckedCreateWithoutPaymentInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutPaymentInput, ordersUncheckedUpdateWithoutPaymentInput>
  }

  export type ordersUpdateWithoutPaymentInput = {
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutOrdersNestedInput
    orderItem?: orderItemUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateWithoutPaymentInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type customersUpsertWithoutPaymentInput = {
    update: XOR<customersUpdateWithoutPaymentInput, customersUncheckedUpdateWithoutPaymentInput>
    create: XOR<customersCreateWithoutPaymentInput, customersUncheckedCreateWithoutPaymentInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutPaymentInput, customersUncheckedUpdateWithoutPaymentInput>
  }

  export type customersUpdateWithoutPaymentInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutCustomerNestedInput
    cart?: cartUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutPaymentInput = {
    customerID?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomerNestedInput
    cart?: cartUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type orderItemCreateManyProductInput = {
    orderItemID?: number
    orderID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type cartCreateManyProductInput = {
    cartID?: number
    customerID: number
  }

  export type orderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateWithoutProductInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderItemUncheckedUpdateManyWithoutProductInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cartUpdateWithoutProductInput = {
    customer?: customersUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutProductInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
  }

  export type cartUncheckedUpdateManyWithoutProductInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateManyCustomerInput = {
    orderID?: number
    orderDate: Date | string
    totalAmount: number
    status?: $Enums.OrderStatus
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type cartCreateManyCustomerInput = {
    cartID?: number
    productID: number
  }

  export type PaymentCreateManyCustomerInput = {
    id?: number
    orderID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateWithoutCustomerInput = {
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: orderItemUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomerInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomerInput = {
    orderID?: IntFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartUpdateWithoutCustomerInput = {
    product?: productsUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutCustomerInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
  }

  export type cartUncheckedUpdateManyWithoutCustomerInput = {
    cartID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutCustomerInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ordersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemCreateManyOrderInput = {
    orderItemID?: number
    productID: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type PaymentCreateManyOrderInput = {
    id?: number
    customerID: number
    amount: Decimal | DecimalJsLike | number | string
    transactionRef?: string | null
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productsUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateWithoutOrderInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderItemUncheckedUpdateManyWithoutOrderInput = {
    orderItemID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentUpdateWithoutOrderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}