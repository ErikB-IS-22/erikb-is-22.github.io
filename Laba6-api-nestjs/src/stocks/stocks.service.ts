import { Injectable } from '@nestjs/common';
import { StocksRepository } from './stocks.repository';
import { Stock } from './stocks.entity';

@Injectable()
export class StocksService {
  constructor(private readonly stocksRepository: StocksRepository) {}

  findAll(): Stock[] {
    return this.stocksRepository.findAll();
  }

  findOne(id: number): Stock {
    return this.stocksRepository.findOne(id);
  }

  create(stock: Stock): Stock {
    return this.stocksRepository.create(stock);
  }

  remove(id: number): Stock[] {
    return this.stocksRepository.remove(id);
  }
}