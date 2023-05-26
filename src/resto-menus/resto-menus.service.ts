import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { RestoMenus } from '../../output/entities/RestoMenus';

@Injectable()
export class RestoMenusService {
  constructor(
    @InjectRepository(RestoMenus)
    private readonly restoMenusRepository: Repository<RestoMenus>,
  ) {}

  async findAll(): Promise<RestoMenus[]> {
    return this.restoMenusRepository.find();
  }

  async findOne(id: string) {
    const findOneOptions: FindOneOptions<RestoMenus> = {
      where: { remeId: Number(id) },
    };
    return this.restoMenusRepository.findOne(findOneOptions);
  }

  async create(restoMenu: RestoMenus): Promise<RestoMenus> {
    return this.restoMenusRepository.save(restoMenu);
  }

  async update(id: string, restoMenu: any) {
    return await this.restoMenusRepository.update(id, {
      remeName: restoMenu.remeName,
      remeDescription: restoMenu.remeDescription,
      remePrice: restoMenu.remePrice,
      remeStatus: restoMenu.remeStatus,
      remeModifiedDate: new Date(),
    });
  }
}
