
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
	@Input() hero: Hero;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false;	//true if navigated here

	constructor(
	private heroService: HeroService,
	private route: ActivatedRoute) { }

	ngOnInit() {
		// delivers array of of route parameters
		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				let id = +params['id'];
				this.navigated = true;
				this.heroService.getHero(id)
					.then(hero => this.hero = hero);
			}
			else {
				this.navigated = false;
				this.hero = new Hero();
			}
		});
	}

	save() {
		this.heroService
			.save(this.hero)
			.then(hero => {
				this.hero = hero;
				this.goBack(hero);
			})
	}

	goBack(savedHero: Hero = null) {
		this.close.emit(savedHero);
		if (this.navigated) {
			window.history.back();
		}
	}
}
