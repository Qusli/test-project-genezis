import {IsNumber, IsNumberString, IsString} from "class-validator";

export class CompaniesDto {
    @IsNumberString()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumberString()
    responsible_user_id: number;

    @IsNumberString()
    group_id: number;

    @IsNumberString()
    status_id: number;

    @IsNumberString()
    pipeline_id: number;

    @IsNumberString()
    loss_reason_id?: number;

    @IsNumber()
    created_by: number

    @IsNumber()
    updated_by: number;

    @IsNumber()
    created_at: number

    @IsNumber()
    updated_at: number

    @IsNumber()
    closed_at?: number
}