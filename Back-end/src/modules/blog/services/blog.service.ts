import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  BlogDto,
  DBL_SERVICE,
  IBlogService,
  IParser,
  JSON_PARSER,
} from 'src/core';
import { Blog, DBLService } from 'src/dbl';

@Injectable()
export class BlogServise implements IBlogService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    const dtos: BlogDto[] = this.parser.getObject(
      `${this.parser.defaultPath}/blogs.json`,
    );
    dtos.forEach((dto) => this.save(dto));
  }

  getAll(): Promise<BlogDto[]> {
    return this.dbl.blogRepository.find();
  }

  getByCategory(category: string): Promise<BlogDto[]> {
    return this.dbl.blogRepository.find({ where: { category } });
  }
  getByCategoryAndId(category: string, id: string): Promise<BlogDto> {
    return this.dbl.blogRepository.findOne({ where: { category, id } });
  }

  save(blogDto: BlogDto): Promise<Blog> {
    const entity: Blog = this.dbl.blogRepository.create({ ...blogDto });
    return this.dbl.blogRepository.save(entity);
  }
}
