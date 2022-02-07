import { InjectionToken } from '@angular/core';
import { IconsCategory } from '../interfaces/icons-category';

export const ICONS_LIST_TOKEN = new InjectionToken<IconsCategory[]>('EVO_ICONS_LIST_TOKEN');
