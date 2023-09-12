"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const create_flight_dto_1 = require("./dto/create-flight.dto");
const update_flight_dto_1 = require("./dto/update-flight.dto");
const passenger_service_1 = require("../passenger/passenger.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let FlightController = class FlightController {
    constructor(flightService, passengerService) {
        this.flightService = flightService;
        this.passengerService = passengerService;
    }
    create(createFlightDto) {
        return this.flightService.create(createFlightDto);
    }
    findAll() {
        return this.flightService.findAll();
    }
    findOne(id) {
        return this.flightService.findOne(id);
    }
    update(id, updateFlightDto) {
        return this.flightService.update(id, updateFlightDto);
    }
    remove(id) {
        return this.flightService.remove(id);
    }
    async addPassenger(flightId, passengerId) {
        const passenger = await this.passengerService.findOne(passengerId);
        if (!passenger)
            throw new common_1.HttpException('Passenger Not found', common_1.HttpStatus.NOT_FOUND);
        return this.flightService.addPassenger(flightId, passengerId);
    }
};
exports.FlightController = FlightController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_dto_1.UpdateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':flightId/passenger/:passengerId'),
    __param(0, (0, common_1.Param)('flightId')),
    __param(1, (0, common_1.Param)('passengerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "addPassenger", null);
exports.FlightController = FlightController = __decorate([
    (0, swagger_1.ApiTags)('flight'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('/api/v1/flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService, passenger_service_1.PassengerService])
], FlightController);
//# sourceMappingURL=flight.controller.js.map