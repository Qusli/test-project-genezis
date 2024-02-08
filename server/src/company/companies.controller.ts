import {Controller, Get, UseGuards, Request, Query, Post, Body} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import {AuthGuard} from "../auth/auth.guard";
import {CompaniesDto} from "./dto/companies.dto";
import {ContactsDto} from "../contact/dto/contacts.dto";

@Controller('companies')
@UseGuards(AuthGuard)
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @Get()
  async getCompany(@Query() params: any, @Request() req: Request) {
    return await this.companyService.getCompanines(params, req).then((res: Array<CompaniesDto>) => res);
  }

  @Post()
  async createCompany(@Body() body: CompaniesDto, @Request() req: Request) {
    return await this.companyService.createCompany(body, req).then((res: Array<CompaniesDto>) => res);
  }

}
