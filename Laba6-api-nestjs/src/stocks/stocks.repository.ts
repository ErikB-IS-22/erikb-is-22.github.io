import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Stock } from './stocks.entity';

@Injectable()
export class StocksRepository {
  private readonly filePath = path.join(process.cwd(), 'db', 'stocks.json');

  private readFile(): Stock[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  private writeFile(data: Stock[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data), 'utf8');
  }

  findAll(): Stock[] {
    return this.readFile();
  }

  findOne(id: number): Stock {
    const stocks = this.readFile();
    const stock = stocks.find((s) => s.id === id);
    if (!stock) {
      throw new Error('Stock not found');
    }
    return stock;
  }

  create(stock: Stock): Stock {
    const stocks = this.readFile();
    stocks.push(stock);
    this.writeFile(stocks);
    return stock;
  }

  remove(id: number): Stock[] {
    const stocks = this.readFile();
    const filteredStocks = stocks.filter((s) => s.id !== id);
    this.writeFile(filteredStocks);
    return filteredStocks;
  }
}