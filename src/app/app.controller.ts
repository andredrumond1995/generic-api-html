import { Controller, Get, Render } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller(`/`)
@ApiTags(`root`)
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get(`/`)
	@Render('index')
	getHello() {
		return {};
	}

	@Get(`/test`)
	@Render('test')
	testTest() {
		return {};
	}
}
