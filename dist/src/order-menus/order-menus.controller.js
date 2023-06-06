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
exports.OrderMenusController = void 0;
const common_1 = require("@nestjs/common");
const order_menus_service_1 = require("./order-menus.service");
let OrderMenusController = class OrderMenusController {
    constructor(orderMenusService) {
        this.orderMenusService = orderMenusService;
    }
    findlastOrderMenus() {
        return this.orderMenusService.findLastOrder();
    }
    getIdLast() {
        return this.orderMenusService.getIdLast();
    }
    findAllOrderMenus() {
        return this.orderMenusService.findAllOrderMenus();
    }
    findOneOrderMenus(Params) {
        return this.orderMenusService.findOneOrderMenus(Params.id);
    }
    async createOrderMenus(body) {
        const result = await this.orderMenusService.createOrderMenus(body);
        if (result) {
            console.log('Data Berhasil order Menus');
            return result;
        }
        else {
            console.log('GAGAL');
        }
    }
    updateOrderMenus(params, body) {
        return this.orderMenusService.updateOrderMenus(params.id, body);
    }
    deleteOrderMenus(params) {
        return this.orderMenusService.deleteOrderMenus(params.id);
    }
};
__decorate([
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderMenusController.prototype, "findlastOrderMenus", null);
__decorate([
    (0, common_1.Get)('lastId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderMenusController.prototype, "getIdLast", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderMenusController.prototype, "findAllOrderMenus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderMenusController.prototype, "findOneOrderMenus", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderMenusController.prototype, "createOrderMenus", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], OrderMenusController.prototype, "updateOrderMenus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], OrderMenusController.prototype, "deleteOrderMenus", null);
OrderMenusController = __decorate([
    (0, common_1.Controller)('order-menus'),
    __metadata("design:paramtypes", [order_menus_service_1.OrderMenusService])
], OrderMenusController);
exports.OrderMenusController = OrderMenusController;
//# sourceMappingURL=order-menus.controller.js.map