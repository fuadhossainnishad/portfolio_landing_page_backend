import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSkillDto: CreateSkillDto) {
    return this.prisma.skill.create({ data: createSkillDto });
  }

  async findAll() {
    return this.prisma.skill.findMany();
  }

  async findOne(id: number) {
    return this.prisma.skill.findUnique({ where: { id } });
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.prisma.skill.update({ where: { id }, data: updateSkillDto });
  }

  remove(id: number) {
    return this.prisma.skill.delete({ where: { id } });
  }
}
