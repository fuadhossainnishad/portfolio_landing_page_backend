import { IsArray, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  field!: string;

  @IsArray()
  @IsString({ each: true })
  language!: string[];

  @IsArray()
  @IsString({ each: true })
  frameworks!: string[];

  @IsArray()
  @IsString({ each: true })
  library!: string[];
}
