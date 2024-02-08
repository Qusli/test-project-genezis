import {Body, Controller, Get, Post, Query, Request, UseGuards} from '@nestjs/common';
import { LeadsService } from './leads.service';
import {AuthGuard} from "../auth/auth.guard";
import {LeadsDto} from "./dto/leads.dto";

@Controller('leads')
@UseGuards(AuthGuard)
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  async getLeads(@Query() params: any, @Request() req: Request) {
    return await this.leadsService.getLeads(params, req).then((res: Array<LeadsDto>) => res);
  }

  @Post()
  async createLead(@Body() body: LeadsDto, @Request() req: Request) {
    return await this.leadsService.createLead(body, req).then((res: Array<LeadsDto>) => res);
  }
}
