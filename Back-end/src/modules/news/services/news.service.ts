import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  DBL_SERVICE,
  INewsService,
  IParser,
  JSON_PARSER,
  NewsDto,
} from 'src/core';
import { DBLService, News } from 'src/dbl';

@Injectable()
export class NewsService implements INewsService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    try {
      const dtos: NewsDto[] = this.parser.getObject(
        `${this.parser.defaultPath}/news.json`,
      );
      dtos.forEach((dto) => this.save(dto));
    } catch (exc) {
      console.log(exc.message);
    }
  }

  getAll(): Promise<NewsDto[]> {
    return this.dbl.newsRepository.find();
  }

  getByCategory(category: string): Promise<NewsDto[]> {
    return this.dbl.newsRepository.find({ where: { category } });
  }

  getByCategoryAndId(category: string, id: string): Promise<NewsDto> {
    return this.dbl.newsRepository.findOne({ where: { category, id } });
  }

  save(newsDto: NewsDto): Promise<News> {
    const entity: News = this.dbl.newsRepository.create({ ...newsDto });
    return this.dbl.newsRepository.save(entity);
  }
}
