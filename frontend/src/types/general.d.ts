declare type Nullable<T> = T | null;
declare namespace NodeJS {

  enum Environment {
    dev = 'dev',
    prod = 'prod',
  }

  interface ProcessEnv {
    PORT: number;
    NODE_ENV: keyof typeof Environment;
    REACT_APP_API_URL: string;
  }

  export interface Process {
    env: ProcessEnv;
  }
}
