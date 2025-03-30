interface Platform {
    env: {
       DATABASE: D1Database;
    };
    context: {
       waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache };
 }