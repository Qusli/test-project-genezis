import {IsNumber, IsNumberString, IsString} from "class-validator";

export class LeadsDto {
    @IsNumberString()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number
}