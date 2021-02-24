import { ForumDto } from 'src/core';
import { Forum } from 'src/dbl';

export interface IForumService {
  getAll(): Promise<ForumDto[]>;
  save(forumDto: ForumDto): Promise<Forum>;
  getByCategory(category: string): Promise<ForumDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<ForumDto>;
}
