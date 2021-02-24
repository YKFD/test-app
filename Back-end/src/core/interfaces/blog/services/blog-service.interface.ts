import { BlogDto } from 'src/core/dtos';
import { Blog } from 'src/dbl';

export interface IBlogService {
  getAll(): Promise<BlogDto[]>;
  getByCategory(category: string): Promise<BlogDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<BlogDto>;
  save(blogDto: BlogDto): Promise<Blog>;
}
