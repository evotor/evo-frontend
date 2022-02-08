import {ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EvoIconsLibrary} from './classes/evo-icons-library';
import {EvoIconShape} from '@evo/icons';

@Component({
    selector: 'evo-icon',
    templateUrl: './evo-icon.component.html',
    styleUrls: ['./evo-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconComponent implements OnInit, OnChanges {

    @Input() shape!: EvoIconShape;

    @Input() svgWidth = 24;

    @Input() svgHeight = 24;

    @Input() svgViewBox: string | undefined;

    @HostBinding('class.evo-icon') hostClass = true;

    content = '';

    constructor(
        private readonly iconsService: EvoIconsLibrary,
    ) {
    }

    get viewBox(): string {
        if (this.svgViewBox) {
            return this.svgViewBox;
        }
        return `0 0 ${this.svgWidth} ${this.svgHeight}`;
    }

    get classes(): string[] {
        const classes = ['evo-icon'];
        if (this.shape) {
            classes.push('evo-icon_' + this.shape);
        }
        return classes;
    }

    ngOnInit(): void {
        this.updateContentByShape();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['shape'] && changes['shape'].previousValue !== changes['shape'].currentValue) {
            this.updateContentByShape();
        }
    }

    private updateContentByShape(): void {
        const shapes = this.iconsService.shapes;
        if (!shapes[this.shape]) {
            throw new Error(`No icon with name "${this.shape}" was found. Please check UI Kit and import certain category to Icon Module`);
        }
        this.content = shapes[this.shape];
    }

}
