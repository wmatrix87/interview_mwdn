import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, firstValueFrom, catchError } from 'rxjs';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { IImage } from './interfaces/image.interface';
import { IPhoto } from './interfaces/photo.interface';

@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll() {
    const data = await Promise.allSettled([
      this.getImageData<IImage>(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/images',
      ),
      this.getImageData<IPhoto>(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/photos',
      ).then((photos) =>
        photos.map((photo) => {
          return <IImage>{
            albumId: photo.albumId,
            id: photo.id,
            path: photo.url,
            title: photo.title,
          };
        }),
      ),
    ]);

    const isFulfilled = <T>(
      input: PromiseSettledResult<T>,
    ): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

    return data.filter(isFulfilled).flatMap(({ value }) => value);
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }

  private async getImageData<T>(url: string) {
    return firstValueFrom(
      this.httpService
        .get<T[][]>(url, {
          headers: {
            Accept: 'application/json',
          },
        })
        .pipe(
          map((resp) => resp.data[0]),
          catchError((e) => {
            throw new HttpException(e.response.data, e.response.status);
          }),
        ),
    );
  }
}
