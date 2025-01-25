import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Project.name, schema: ProjectSchema }],
      'projects',
    ),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
