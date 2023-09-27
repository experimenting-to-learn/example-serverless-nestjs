import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class DatasetDto {

    public readonly datasetId: string;

    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsNotEmpty()
    recap: string
}