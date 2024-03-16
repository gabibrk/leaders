import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
    constructor(private httpService: HttpService) { }

    get(url: string, params: object = {}) {
        return this.httpService.get(url, { params }).pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            }),
        ).toPromise();
    }

    post(url: string, data: any) {
        return this.httpService.post(url, data).pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            }),
        ).toPromise();
    }
}