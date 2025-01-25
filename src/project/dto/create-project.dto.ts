import { IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  color!: string;

  @IsString()
  title!: string;

  @IsString()
  subtitle!: string;

  @IsString()
  image!: string;

  @IsString()
  client!: string;

  @IsString()
  work!: string;
}
