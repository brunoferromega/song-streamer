import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongController {
  @Post()
  create(@Body() songDto: SongDto): string {
    return `Creating a song with those infomation: ${songDto.name}`;
  }

  @Get()
  findAll(): string {
    return 'Here is all songs';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `Finded song with id: ${id}`;
  }

  @Get(':id')
  update(@Param('id') id: string): string {
    return `Updated song with id: ${id}`;
  }

  @Get(':id')
  delete(@Param('id') id: string): string {
    return `Deleted song with id: ${id}`;
  }
}

