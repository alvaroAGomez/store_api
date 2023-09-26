import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/DTO/products.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {

    private counterId=1;
    private products : Product[] =[{
        id:1,
        name: "product 1",
        description: "la alalal",
        price : 123,
        stock: 456,
        image:''
    }];
    
    findAll() {
        return this.products;
    }

    findOne(id:number) {
        const product = this.products.find(item=>item.id==id);
        if(!product){
            throw new NotFoundException(`Product #${id} not found`)
        }
        return product;
    }

    create (payload:CreateProductDTO){
        console.log(payload);
        
        this.counterId++;

        const newProduct={
            id: this.counterId,
            ...payload
        }
        
        this.products.push(newProduct);

        return newProduct;
    }

    update (payload:UpdateProductDTO, id: number){
        const productUpdate = this.products.find(item=> item.id == id);

        if(!productUpdate){
            return 'Producto inexistente'
        }
        
        const index =  this.products.findIndex(item=>item.id==id);

        this.products[index] = {
            ...productUpdate, 
            ...payload
        };
        
        return  this.products[index];
    }

    remove(id:number) {
        const index =  this.products.findIndex(item=>item.id==id);

        if(index === -1){
            throw new NotFoundException(`Product #${id} not found`);
        }
        this.products.splice(index, 1);

        return 'Elemento eliminado'
    }
}
