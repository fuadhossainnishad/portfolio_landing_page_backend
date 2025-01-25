import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Response } from 'express';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(
    @Res() res: Response,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    try {
      const createProjects = await this.projectService.create(createProjectDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'Projects created successfully',
        createProjects,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error creating projects',
        error: err instanceof Error ? err.message : 'error creating project',
      });
    }
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('id:', id);
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    console.log('update id:', id);
    console.log(updateProjectDto);
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('id:', id);
    return this.projectService.remove(id);
  }
}
