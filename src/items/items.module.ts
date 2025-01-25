import { Module } from '@nestjs/common';
import { ItemsResolver } from './items.resolver';

@Module({
  providers: [ItemsResolver],
})
export class ItemsModule {}
