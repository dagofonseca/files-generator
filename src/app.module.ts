import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [PdfModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
