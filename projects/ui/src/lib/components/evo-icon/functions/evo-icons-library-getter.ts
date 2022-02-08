import {IconsCategory} from '../interfaces/icons-category';
import {EvoIconsLibrary} from '../classes/evo-icons-library';

export const evoIconsLibraryGetter = (iconsList: IconsCategory[][]) => new EvoIconsLibrary(iconsList);
