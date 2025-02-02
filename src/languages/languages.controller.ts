import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { Language } from './language.entity';

@Controller('languages')
export class LanguagesController {
    constructor(private readonly languagesService: LanguagesService) {}

  @Get()
  findAll(): Promise<Language[]> {
    return this.languagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Language | null> {
    return this.languagesService.findOne(id);
  }

  @Post()
  create(@Body() languageData: Partial<Language>): Promise<Language> {
    return this.languagesService.create(languageData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() languageData: Partial<Language>): Promise<Language | null> {
    return this.languagesService.update(id, languageData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.languagesService.remove(id);
  }
}
