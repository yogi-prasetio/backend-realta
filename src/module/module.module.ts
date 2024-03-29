import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'output/entities/Address';
import { Bank } from 'output/entities/Bank';
import { BookingOrderDetail } from 'output/entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'output/entities/BookingOrderDetailExtra';
import { BookingOrders } from 'output/entities/BookingOrders';
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Country } from 'output/entities/Country';
import { Department } from 'output/entities/Department';
import { Employee } from 'output/entities/Employee';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { Entitys } from 'output/entities/Entitys';
import { Facilities } from 'output/entities/Facilities';
import { FacilityPhoto } from 'output/entities/FacilityPhoto';
import { FacilityPriceHistory } from 'output/entities/FacilityPriceHistory';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Hotels } from 'output/entities/Hotels';
import { JobRole } from 'output/entities/JobRole';
import { Members } from 'output/entities/Members';
import { OrderMenuDetail } from 'output/entities/OrderMenuDetail';
import { OrderMenus } from 'output/entities/OrderMenus';
import { PaymentGateway } from 'output/entities/PaymentGateway';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { Policy } from 'output/entities/Policy';
import { PolicyCategoryGroup } from 'output/entities/PolicyCategoryGroup';
import { PriceItems } from 'output/entities/PriceItems';
import { Proviences } from 'output/entities/Proviences';
import { PurchaseOrderDetail } from 'output/entities/PurchaseOrderDetail';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import { Regions } from 'output/entities/Regions';
import { RestoMenuPhotos } from 'output/entities/RestoMenuPhotos';
import { RestoMenus } from 'output/entities/RestoMenus';
import { Roles } from 'output/entities/Roles';
import { ServiceTask } from 'output/entities/ServiceTask';
import { Shift } from 'output/entities/Shift';
import { SpecialOfferCoupons } from 'output/entities/SpecialOfferCoupons';
import { SpecialOffers } from 'output/entities/SpecialOffers';
import { StockDetail } from 'output/entities/StockDetail';
import { StockPhoto } from 'output/entities/StockPhoto';
import { Stocks } from 'output/entities/Stocks';
import { UserAccounts } from 'output/entities/UserAccounts';
import { UserBonusPoints } from 'output/entities/UserBonusPoints';
import { UserBreakfeast } from 'output/entities/UserBreakfeast';
import { UserMembers } from 'output/entities/UserMembers';
import { UserPassword } from 'output/entities/UserPassword';
import { UserProfiles } from 'output/entities/UserProfiles';
import { UserRoles } from 'output/entities/UserRoles';
import { Users } from 'output/entities/Users';
import { Vendor } from 'output/entities/Vendor';
import { VendorProduct } from 'output/entities/VendorProduct';
import { WorkOrderDetail } from 'output/entities/WorkOrderDetail';
import { WorkOrders } from 'output/entities/WorkOrders';
import { ConfigMulter } from 'src/multer/multer.middleware';

import { PurchaseOrderDetailController } from 'src/purchasing/purchase-order-detail/purchase-order-detail.controller';
import { PurchaseOrderDetailService } from 'src/purchasing/purchase-order-detail/purchase-order-detail.service';
import { PurchaseOrderHeaderController } from 'src/purchasing/purchase-order-header/purchase-order-header.controller';
import { PurchaseOrderHeaderService } from 'src/purchasing/purchase-order-header/purchase-order-header.service';
import { StockDetailController } from 'src/purchasing/stock-detail/stock-detail.controller';
import { StockDetailService } from 'src/purchasing/stock-detail/stock-detail.service';
import { StockPhotoController } from 'src/purchasing/stock-photo/stock-photo.controller';
import { StockPhotoService } from 'src/purchasing/stock-photo/stock-photo.service';
import { StocksController } from 'src/purchasing/stocks/stocks.controller';
import { StocksService } from 'src/purchasing/stocks/stocks.service';
import { VendorProductController } from 'src/purchasing/vendor-product/vendor-product.controller';
import { VendorProductService } from 'src/purchasing/vendor-product/vendor-product.service';
import { VendorController } from 'src/purchasing/vendor/vendor.controller';
import { VendorService } from 'src/purchasing/vendor/vendor.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FacilitiesService } from 'src/hotel/facilities/facilities.service';
import { FacilitiesController } from 'src/hotel/facilities/facilities.controller';
import { EmployeeService } from 'src/hr/employee/employee.service';
import { EmployeeController } from 'src/hr/employee/employee.controller';

// import { PurchaseOrderDetailController } from 'src/purchase-order-detail/purchase-order-detail.controller';
// import { PurchaseOrderDetailService } from 'src/purchase-order-detail/purchase-order-detail.service';
// import { PurchaseOrderHeaderController } from 'src/purchase-order-header/purchase-order-header.controller';
// import { PurchaseOrderHeaderService } from 'src/purchase-order-header/purchase-order-header.service';
// import { StockDetailController } from 'src/stock-detail/stock-detail.controller';
// import { StockDetailService } from 'src/stock-detail/stock-detail.service';
// import { StockPhotoController } from 'src/stock-photo/stock-photo.controller';
// import { StockPhotoService } from 'src/stock-photo/stock-photo.service';
// import { StocksController } from 'src/stocks/stocks.controller';
// import { StocksService } from 'src/stocks/stocks.service';
// import { VendorProductController } from 'src/vendor-product/vendor-product.controller';
// import { VendorProductService } from 'src/vendor-product/vendor-product.service';
// import { VendorController } from 'src/vendor/vendor.controller';
// import { VendorService } from 'src/vendor/vendor.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', ''),
    }),
    TypeOrmModule.forFeature([
      Hotels,
      HotelReviews,
      Facilities,
      FacilityPhoto,
      FacilityPriceHistory,
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Entitys,
      JobRole,
      Members,
      OrderMenuDetail,
      OrderMenus,
      PaymentGateway,
      PaymentTransaction,
      Policy,
      PolicyCategoryGroup,
      PriceItems,
      Proviences,
      PurchaseOrderDetail,
      PurchaseOrderHeader,
      Regions,
      RestoMenuPhotos,
      RestoMenus,
      Roles,
      ServiceTask,
      Shift,
      SpecialOfferCoupons,
      SpecialOffers,
      StockDetail,
      StockPhoto,
      Stocks,
      UserAccounts,
      UserBonusPoints,
      UserBreakfeast,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Vendor,
      VendorProduct,
      WorkOrderDetail,
      WorkOrders,
    ]),
    MulterModule.register(ConfigMulter.Uploadfiles()),
  ],
  controllers: [
    StocksController,
    VendorProductController,
    StockDetailController,
    VendorController,
    PurchaseOrderHeaderController,
    PurchaseOrderDetailController,
    StockPhotoController,
    FacilitiesController,
    EmployeeController,
  ],
  providers: [
    StocksService,
    VendorProductService,
    StockDetailService,
    VendorService,
    PurchaseOrderHeaderService,
    PurchaseOrderDetailService,
    StockPhotoService,
    FacilitiesService,
    EmployeeService,
  ],
})
export class ModuleModule {}
