import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './categories/categories.model';
import { CategoriesModule } from './categories/categories.module';
import { ElementsSearchModule } from './elements-search/elements-search.module';
import { Element } from './elements/elements.model';
import { ElementsModule } from './elements/elements.module';
import { Group } from './groups/groups.model';
import { GroupsModule } from './groups/groups.module';
import { Period } from './periods/periods.model';
import { PeriodsModule } from './periods/periods.module';
import { State } from './states/states.model';
import { StatesModule } from './states/states.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Element, Period, Group, State, Category],
      autoLoadModels: true,
    }),
    PeriodsModule,
    GroupsModule,
    ElementsModule,
    CategoriesModule,
    StatesModule,
    ElementsSearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
