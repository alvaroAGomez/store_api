import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/DTO/products.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int/parse-int.pipe';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService : ProductsService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.productService.findAll();
    }

    @Get(':productId')
    getProduct(@Param('productId', ParseIntPipe) productId: number) { //el pipe para verificar q sea un numero 

        return this.productService.findOne(productId);
    }

    @Post()
    create(
        @Body() payload:CreateProductDTO
    ){
        return this.productService.create(payload);
    }
     
    @Put(':id')
    update(
        @Param('id') id: number ,
        @Body() payload:UpdateProductDTO
    ){
        return this.productService.update(payload, id);
    }

    @Delete(':id')
    delete(
        @Param('id') id:number
    ){

        return this.productService.remove(id);
    }

}
