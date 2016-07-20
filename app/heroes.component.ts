import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service'

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.css',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {

	constructor(private heroService: HeroService) {}
	
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;


	ngOnInit() {
		this.getHeroes()
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero
	}

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}
