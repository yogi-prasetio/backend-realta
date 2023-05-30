import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PriceItemsService } from './price-items.service';
import { priceDto } from './price.dto';

@Controller('price-items')
export class PriceItemsController {
  constructor(private Services: PriceItemsService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async create(@Body() priceDto: priceDto) {
    return await this.Services.create(priceDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}