import { Controller, Get, Header, Query, UseInterceptors } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CheckIfQueryParms } from './services/header.interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/list')
  @UseInterceptors(CheckIfQueryParms)
  async list(@Query() query: any) {
    console.log("query", query);
    const users = await this.userService.getUserList(query);
    return users;
  }

  @Get('/feeds')
  @UseInterceptors(CheckIfQueryParms)
  async feeds(@Query() query: any) {
    console.log("query parms", query);
    const feedsResponse = await this.userService.getUserFeeds(query);
    const feeds = feedsResponse['items'];
    console.log("feeds", feeds)
    const promises = feeds.map(async (item) => {
      const imageData = await this.userService.getImageData(item.display_url);
      return { ...item, display_url: imageData };
    });
    return await Promise.all(promises);
  }
}