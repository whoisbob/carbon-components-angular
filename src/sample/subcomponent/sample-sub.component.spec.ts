import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";

import { SampleSub } from "./sample-sub.component";
import { SampleInterface } from "./../sample.interface";

@Component({
	template: `<n-sample-sub></n-sample-sub>`
})
class TestComponent {}

describe("Sample Subcomponent", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				SampleSub,
				TestComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(SampleSub);
		expect(fixture.componentInstance instanceof SampleSub).toBe(true);
	});

	// add additional tests for functionality
	// use the test component to handle events and data binding
	// and use the it blocks to poke into the component
});
