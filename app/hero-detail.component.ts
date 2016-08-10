
import { Component,OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy{
	hero: Hero;
	sub: any;

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
		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	goBack() {
		window.history.back();
	}

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute) { }
}
