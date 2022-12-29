import {CompilerInfo} from '../../types/compiler.interfaces';
import {BaseCompiler} from '../base-compiler';

export class CbbleCompiler extends BaseCompiler {
    static get key() {
        return 'cbble';
    }

    override optionsForFilter(filters, outputFilename, userOptions) {
        return ['-o', this.filename(outputFilename)];
    }
}
