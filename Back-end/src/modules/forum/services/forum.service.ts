import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  DBL_SERVICE,
  ForumDto,
  IForumService,
  IParser,
  JSON_PARSER,
} from 'src/core';
import { DBLService, Forum } from 'src/dbl';

@Injectable()
export class ForumService implements IForumService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    try {
      const dtos: ForumDto[] = this.parser.getObject(
        `${this.parser.defaultPath}/forums.json`,
      );
      dtos.forEach((dto) => this.save(dto));
    } catch (exc) {
      console.log(exc.message);
    }
  }

  getAll(): Promise<ForumDto[]> {
    return this.dbl.forumRepository.find();
  }

  getByCategory(category: string): Promise<ForumDto[]> {
    return this.dbl.forumRepository.find({ where: { category } });
  }

  getByCategoryAndId(category: string, id: string): Promise<ForumDto> {
    return this.dbl.forumRepository.findOne({ where: { id, category } });
  }

  save(forumDto: ForumDto): Promise<Forum> {
    const entity: Forum = this.dbl.blogRepository.create({ ...forumDto });
    return this.dbl.forumRepository.save(entity);
  }
}
