import {IsNumberString, IsString} from "class-validator";

export class ContactsDto {
    @IsNumberString()
    id: number;

    @IsString()
    name: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}