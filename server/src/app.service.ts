import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {
  getHello(): string {

    return "hello world!";
  }
}
