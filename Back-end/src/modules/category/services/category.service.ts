import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CategoryDto, DBL_SERVICE, IParser, JSON_PARSER } from 'src/core';
import { ICategoryService } from 'src/core';
import { Category, ChildrenCategory, DBLService } from 'src/dbl';

@Injectable()
export class CategoryService implements ICategoryService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    const dtos: CategoryDto[] = this.parser.getObject(
      `${this.parser.defaultPath}/categories.json`,
    );
    dtos.forEach((dto) => this.save(dto));
  }

  async getAll(): Promise<CategoryDto[]> {
    const entity: Category[] = await this.dbl.categoryRepository.find();

    const dto: CategoryDto[] = [];

    if (entity.length === 0) {
      return null;
    }

    for (const categoryEntity of entity) {
      const childrenCategoryEntities: ChildrenCategory[] = await this.dbl.childrenCategoryRepository.find(
        { where: { categoryId: categoryEntity.id } },
      );

      dto.push({
        ...categoryEntity,
        children: childrenCategoryEntities,
      });
    }

    return dto;
  }

  async getById(id: string): Promise<CategoryDto> {
    const dto: Category = await this.dbl.categoryRepository.findOne(id);
    if (!dto) {
      return null;
    }

    const childrenCategories: ChildrenCategory[] = await this.dbl.childrenCategoryRepository.find(
      {
        where: { categoryId: id },
      },
    );

    return { ...dto, children: childrenCategories };
  }

  async save(categoryDto: CategoryDto): Promise<Category> {
    const entity: Category = this.dbl.categoryRepository.create({
      ...categoryDto,
    });

    const savedCategory = await this.dbl.categoryRepository.save(entity);

    this.dbl.childrenCategoryRepository.save(
      entity.children.map((children) => ({
        ...children,
        categoryId: savedCategory.id,
      })),
    );

    return savedCategory;
  }
}
