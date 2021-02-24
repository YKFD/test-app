import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ForumDto, FORUM_SERVICE, IForumService } from 'src/core';

@Controller('app/forums')
export class ForumController {
  @Inject(FORUM_SERVICE)
  private readonly forumService: IForumService;

  @Get()
  getAll(): Promise<ForumDto[]> {
    return this.forumService.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string): Promise<ForumDto[]> {
    return this.forumService.getByCategory(category);
  }

  @Get(':category/:id')
  getByCategoryAndId(
    @Param('category') category: string,
    @Param('id') id: string,
  ): Promise<ForumDto> {
    return this.forumService.getByCategoryAndId(category, id);
  }

  @Post()
  async save(@Body() dto: ForumDto): Promise<string> {
    if (await this.forumService.save(dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
