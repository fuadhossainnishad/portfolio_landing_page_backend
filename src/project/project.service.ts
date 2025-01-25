import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { ProjectInterface } from 'src/interface/project.interface';
import { Project } from '../schema/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name, 'projects')
    private projectModel: Model<ProjectInterface>,
  ) {}
  async create(createProjectDto: CreateProjectDto): Promise<ProjectInterface> {
    const createProject = new this.projectModel(createProjectDto);
    return createProject.save();
  }

  async findAll(): Promise<ProjectInterface[]> {
    const allProjects = await this.projectModel.find().exec();
    if (!allProjects) {
      throw new NotFoundException('Any project has not been found');
    }
    return allProjects;
  }

  async findOne(id: string): Promise<ProjectInterface> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid project ID');
    }
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException('Project has not been found');
    }
    return project;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectInterface> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid project ID');
    }
    const updateProject = await this.projectModel.findById(id).exec();
    if (!updateProject) {
      throw new NotFoundException('Project not found');
    }
    Object.assign(updateProject, updateProjectDto);
    return updateProject.save();
  }

  async remove(id: string): Promise<ProjectInterface> {
    console.log(id);
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid project ID');
    }
    const removeProject = await this.projectModel
      .findByIdAndDelete(id, { new: true, returnDocument: 'after' })
      .exec();
    if (!removeProject) {
      throw new NotFoundException('Project not found');
    }
    return removeProject;
  }
}
