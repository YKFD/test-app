import { ForumDto } from 'src/core';
import { NewsDto } from 'src/core/dtos';
import { News } from 'src/dbl';

export interface INewsService {
  getAll(): Promise<NewsDto[]>;
  getByCategory(category: string): Promise<NewsDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<NewsDto>;
  save(forumDto: ForumDto): Promise<News>;
}
