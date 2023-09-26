import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UserController } from './controllers/user/user.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UserController, BrandController, CustomerController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
