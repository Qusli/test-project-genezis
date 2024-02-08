import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './company/companies.module';
import { LeadsModule } from './contract/leads.module';
import { ContactsModule } from './contact/contacts.module';

@Module({
  imports: [CompaniesModule, LeadsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
