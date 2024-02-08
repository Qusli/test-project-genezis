import {Body, Controller, Get, Post, Query, Request, UseGuards} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import {AuthGuard} from "../auth/auth.guard";
import {LeadsDto} from "../contract/dto/leads.dto";
import {ContactsDto} from "./dto/contacts.dto";

@Controller('contacts')
@UseGuards(AuthGuard)
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  async getContacts(@Query() params: any, @Request() req: Request) {
    return await this.contactService.getContacts(params, req).then((res: Array<ContactsDto>) => res);
  }

  @Post()
  async createContact(@Body() body: ContactsDto, @Request() req: Request) {
    return await this.contactService.createContact(body, req).then((res: Array<ContactsDto>) => res);
  }
}
