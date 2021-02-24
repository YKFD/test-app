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
import { BlogDto, BLOG_SERVICE, IBlogService } from 'src/core';

@Controller('app/blogs')
export class BlogController {
  @Inject(BLOG_SERVICE)
  private readonly blogService: IBlogService;

  @Get()
  getAll(): Promise<BlogDto[]> {
    return this.blogService.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string): Promise<BlogDto[]> {
    return this.blogService.getByCategory(category);
  }

  @Get(':category/:id')
  getByCategoryAndId(
    @Param('category') category: string,
    @Param('id') id: string,
  ): Promise<BlogDto> {
    return this.blogService.getByCategoryAndId(category, id);
  }

  @Post()
  async save(@Body() dto: BlogDto): Promise<string> {
    if (await this.blogService.save(dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Blog was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
