import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { StocksRepository } from './stocks.repository';

@Module({
  controllers: [StocksController],
  providers: [StocksService, StocksRepository],
})
export class StocksModule {}