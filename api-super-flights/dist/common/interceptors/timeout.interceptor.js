"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOutInterceptor = void 0;
const rxjs_1 = require("rxjs");
class TimeOutInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.timeout)(120000));
    }
}
exports.TimeOutInterceptor = TimeOutInterceptor;
//# sourceMappingURL=timeout.interceptor.js.map