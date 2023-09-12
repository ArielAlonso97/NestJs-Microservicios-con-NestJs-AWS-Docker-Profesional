import { Module } from "@nestjs/common";
import { ClientProxySuperFlights } from "./client-proxy";


@Module({
    controllers:[ClientProxySuperFlights],
    exports:[ClientProxySuperFlights]
});

export class ProxyModule{};