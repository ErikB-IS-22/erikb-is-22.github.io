import { Controller, Get, Post, Delete, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.stocksService.findOne(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  create(@Body() stock: any) {
    try {
      return this.stocksService.create(stock);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.stocksService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}