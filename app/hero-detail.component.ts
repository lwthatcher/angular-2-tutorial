
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
	hero: Hero;

	constructor(
	private heroService: HeroService,
	private route: ActivatedRoute) { }

	ngOnInit() {
		console.log('route', this.route);
		console.log('route url', this.route.url);
		this.route.url.forEach(u => {
			console.log('url', u);
			let x = '';
			u.forEach(tu => {
				console.log('url part', tu);
				console.log('url path', tu.path);
				x += tu.path + '/';
			});
			console.log('full path', x);
		});
		// delivers array of of route parameters
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}

	goBack() {
		window.history.back();
	}


}
