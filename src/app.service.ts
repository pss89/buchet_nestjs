import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from './entities/person.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getPerson(): Promise<PersonEntity[]> {
    const personList = await this.personRepository.find();
    return personList;
  }
}
