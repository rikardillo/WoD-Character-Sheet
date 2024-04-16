import debug from "debug";

export const APP_NAME = "character-sheet";

if (!import.meta.VITE_DEBUG) {
  debug.enable("*");
}

export const loggerMethodsMiddleware = <T>(methods: Partial<T>): T => {
  return Object.keys(methods).reduce((result, fnKey) => {
    return {
      ...result,
      [fnKey]: async (...params) => {
        try {
          console.groupCollapsed(`action - ${fnKey}`);
          appLogger.debug(
            `${fnKey}: call params - ${JSON.stringify(params, null, 2)}`
          );
          const result = await methods[fnKey](...params);
          appLogger.debug(
            `${fnKey}: result - ${JSON.stringify(result, null, 2)}`
          );
          return result;
        } catch (err) {
          appLogger.debug(`${fnKey}: ${err}`);
          return Promise.reject(err);
        } finally {
          console.groupEnd();
        }
      },
    };
  }, {} as T);
};

export const createLogger = (name: string) => ({
  info: debug(`${APP_NAME}:info:${name}`),
  warn: debug(`${APP_NAME}:warn:${name}`),
  error: debug(`${APP_NAME}:error:${name}`),
  debug: debug(`${APP_NAME}:debug:${name}`),
  custom: (logLevel: string) => debug(`${APP_NAME}:${logLevel}`),
});

export const appLogger = createLogger("app");

export default appLogger;
