import { IsNumber, IsString} from "class-validator";

export class Image {
  @IsNumber()
  albumId: number;

  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  path: string;
}
