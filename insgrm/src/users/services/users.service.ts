import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UsersService {
    private readonly BASELINK = `https://imai.co/api/dict/users`;
    private readonly FEED_BASELINK = `https://imai.co/api/raw/ig/user/feed`;
    private readonly headers = {
        authkey: 'rK8rJ15HgL', //process.env.AUTH_KEY;
    };
    constructor(private httpService: HttpService) { }

    async getUserList(params: any): Promise<AxiosResponse> {
        try {
            const response$ = this.httpService
                .get(this.BASELINK, { headers: this.headers, params })
                .pipe(
                    map((response) => response.data),
                    catchError((err) => {
                        throw new HttpException('Error fetching user list', HttpStatus.INTERNAL_SERVER_ERROR);
                    })
                );

            return await lastValueFrom(response$);

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getUserFeeds(params: any): Promise<AxiosResponse> {


        try {
            const response$ = this.httpService
                .get(this.FEED_BASELINK, { headers: this.headers, params })
                .pipe(
                    tap(res => console.log("tap res", res.data.items.length)),
                    map((response) => response.data),
                    catchError((err) => {
                        throw new HttpException('Error fetching user feeds', HttpStatus.INTERNAL_SERVER_ERROR);
                    })
                );

            return await lastValueFrom(response$);

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getImageData(url: string): Promise<string> {
        try {
            const response$ = this.httpService
                .get(url, { responseType: 'arraybuffer' })
                .pipe(
                    map((response) => `data:${response.headers['content-type']};base64,${Buffer.from(response.data, 'binary').toString('base64')}`),
                    catchError((err) => {
                        throw new HttpException('Error fetching the image', HttpStatus.INTERNAL_SERVER_ERROR);
                    })
                );

            return await lastValueFrom(response$);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}