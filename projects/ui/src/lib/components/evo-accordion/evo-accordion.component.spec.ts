import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EvoAccordionContentComponent} from './evo-accordion-content/evo-accordion-content.component';
import {EvoAccordionPanelComponent} from './evo-accordion-panel/evo-accordion-panel.component';
import {EvoAccordionTitleComponent} from './evo-accordion-title/evo-accordion-title.component';
import {EvoAccordionComponent} from './evo-accordion.component';
import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {By} from '@angular/platform-browser';
import {EvoUiModule} from '../../evo-ui.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvoIconModule} from '../evo-icon';
import {navigationIcons} from '@evo/icons';

@Component({
    template: `
        <evo-accordion>
            <evo-accordion-panel #testPanel1>
                <evo-accordion-title label="Panel 1"></evo-accordion-title>
                <evo-accordion-content>Panel 1 content</evo-accordion-content>
            </evo-accordion-panel>
            <evo-accordion-panel #testPanel2>
                <evo-accordion-title label="Panel 2"></evo-accordion-title>
                <evo-accordion-content *evoIsExpanded="testIsExpanded">Panel 2 content</evo-accordion-content>
            </evo-accordion-panel>
        </evo-accordion>
    `
})
export class TestHostComponent {
    @ViewChild('testPanel1') testPanel1: EvoAccordionPanelComponent | undefined;
    @ViewChild('testPanel2') testPanel2: EvoAccordionPanelComponent | undefined;
    testIsExpanded = false;
}

describe('EvoAccordionComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoAccordionComponent,
                EvoAccordionTitleComponent,
                EvoAccordionPanelComponent,
                EvoAccordionContentComponent,
                TestHostComponent
            ],
            imports: [
                CommonModule,
                BrowserAnimationsModule,
                EvoUiModule,
                EvoIconModule.forRoot([
                    navigationIcons
                ])
            ]
        }).compileComponents();
    }));

    beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        tick(300);
        fixture.detectChanges();
    }));

    it('should accordion create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide content default, without evoIsExpanded directive', () => {
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles['height'] === '0px').toBeTruthy();
    });

    it('should show content after panel title click, without evoIsExpanded directive', fakeAsync(() => {
        const titleElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-title'));
        titleElement.triggerEventHandler('click', {});
        tick(300);
        fixture.detectChanges();
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles['height'] === '0px').toBeFalsy();
    }));

    it('should show content after panel toggle, without evoIsExpanded directive', fakeAsync(() => {
        component.testPanel1?.toggle();
        tick(300);
        fixture.detectChanges();
        const contentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(1) evo-accordion-content'));
        expect(contentElement.styles['height'] === '0px').toBeFalsy();
    }));

    it('should hide content with expanded = false', () => {
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).toBeFalsy();
    });

    it('should show content with expanded = true', () => {
        component.testIsExpanded = true;
        fixture.detectChanges();
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).toBeTruthy();
    });

    it('should show content after toggle panel', () => {
        component.testPanel2?.toggle();
        const evoAccordionContentElement = fixture.debugElement.query(By.css('evo-accordion-panel:nth-child(2) evo-accordion-content'));
        expect(evoAccordionContentElement).toBeTruthy();
    });
});
