import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from './language.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(Language)
        private readonly languageRepository: Repository<Language>,
    ) { }

    findAll(): Promise<Language[]> {
        return this.languageRepository.find();
    }

    async findOne(id: number): Promise<Language> {
        const language = await this.languageRepository.findOneBy({ id });
        if (!language) {
            throw new NotFoundException(`Language with ID ${id} not found`);
        }
        return language;
    }

    async create(languageData: Partial<Language>): Promise<Language> {
        const newLanguage = this.languageRepository.create(languageData);
        return this.languageRepository.save(newLanguage);
    }

    async update(id: number, languageData: Partial<Language>): Promise<Language | null> {
        await this.languageRepository.update(id, languageData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const language = await this.languageRepository.findOneBy({ id });
        if (!language) {
            throw new NotFoundException(`Language with ID ${id} not found`);
        }
        await this.languageRepository.softDelete(id);
    }
}
