import * as fs from 'fs';
import { Readable } from 'stream';
import { injectable } from "inversify";
import "reflect-metadata";

import AudioSource from 'media_providers/AudioSource';

@injectable()
export default class DiskSource implements AudioSource {

    public getAudio(file_path : string): Promise<Readable> {
        return new Promise((resolve, reject) => {
            if(fs.existsSync(file_path)) {
                resolve(fs.createReadStream(file_path));
            } else {
                reject(Error('unable to find file: ' + file_path  + ' on disk'));
            }
        })
    }

}
