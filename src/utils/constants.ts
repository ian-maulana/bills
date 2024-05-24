export const HOST = process.env.HOST ?? '0.0.0.0';
export const PORT = process.env.PORT ?? 8000;
export const MONGO_URI = process.env.MONGOURI || '';
export const LOG_LOCATION = process.env.LOG_LOCATION || 'logs';
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secretkey';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
