import Packet from '#jagex2/io/Packet.js';
import BZip2 from '#jagex2/io/BZip2.js';

function genHash(name) {
    let hash = 0;
    name = name.toUpperCase();
    for (let i = 0; i < name.length; i++) {
        hash = ((hash * 61 + name.charCodeAt(i)) - 32) | 0;
    }
    return hash;
}

export default class Jagfile {
    data = null;
    fileCount = 0;
    fileHash = [];
    fileName = [];
    fileUnpackedSize = [];
    filePackedSize = [];
    filePos = [];
    unpacked = false;

    fileQueue = [];
    fileWrite = [];

    static load(path) {
        return new Jagfile(Packet.load(path));
    }

    constructor(src) {
        if (!src) {
            return;
        }

        let unpackedSize = src.g3();
        let packedSize = src.g3();

        if (unpackedSize === packedSize) {
            this.data = new Uint8Array(src.data);
            this.unpacked = false;
        } else {
            let temp = new Uint8Array(src.gdata(packedSize));
            this.data = BZip2.decompress(temp);
            src = new Packet(this.data);
            this.unpacked = true;
        }

        this.fileCount = src.g2();

        let pos = src.pos + this.fileCount * 10;
        for (let i = 0; i < this.fileCount; i++) {
            this.fileHash[i] = src.g4s();
            let hashMatch = KNOWN_HASHES.findIndex(x => x === this.fileHash[i]);
            if (hashMatch !== -1) {
                this.fileName[i] = KNOWN_NAMES[hashMatch];
            }
            this.fileUnpackedSize[i] = src.g3();
            this.filePackedSize[i] = src.g3();

            this.filePos[i] = pos;
            pos += this.filePackedSize[i];
        }
    }

    read(name) {
        let hash = genHash(name);

        for (let i = 0; i < this.fileCount; i++) {
            if (this.fileHash[i] !== hash) {
                continue;
            }

            if (this.unpacked) {
                return new Packet(this.data.subarray(this.filePos[i], this.filePos[i] + this.filePackedSize[i]));
            } else {
                let temp = this.data.subarray(this.filePos[i], this.filePos[i] + this.filePackedSize[i]);
                return new Packet(BZip2.decompress(temp, false));
            }
        }

        return null;
    }

    write(name, data) {
        let hash = genHash(name);

        this.fileQueue.push({ hash, name, write: true, data });
    }

    delete(name) {
        let hash = genHash(name);

        this.fileQueue.push({ hash, name, delete: true });
    }

    rename(oldName, newName) {
        let oldHash = genHash(oldName);
        let newHash = genHash(newName);

        this.fileQueue.push({ hash: oldHash, name: oldName, rename: true, newName, newHash });
    }

    save(path, doNotCompressWhole = false) {
        let buf = new Packet();

        for (let i = 0; i < this.fileQueue.length; i++) {
            let queued = this.fileQueue[i];
            let index = this.fileHash.findIndex(x => x === queued.hash);

            if (queued.write) {
                if (index === -1) {
                    index = this.fileCount++;
                    this.fileHash[index] = queued.hash;
                    this.fileName[index] = queued.name;
                }

                this.fileUnpackedSize[index] = queued.data.length;
                this.filePackedSize[index] = queued.data.length;
                this.filePos[index] = -1;
                this.fileWrite[index] = queued.data;
            }

            if (queued.delete && index !== -1) {
                this.fileHash.splice(index, 1);
                this.fileName.splice(index, 1);
                this.fileUnpackedSize.splice(index, 1);
                this.filePackedSize.splice(index, 1);
                this.filePos.splice(index, 1);
                this.fileCount--;
            }

            if (queued.rename && index !== -1) {
                this.fileHash[index] = queued.newHash;
                this.fileName[index] = queued.newName;
            }

            this.fileQueue.splice(i, 1);
            i--;
        }

        let compressWhole = this.fileCount === 1;
        if (doNotCompressWhole && compressWhole) {
            compressWhole = false;
        }

        // write header
        buf.p2(this.fileCount);
        for (let i = 0; i < this.fileCount; i++) {
            buf.p4(this.fileHash[i]);
            buf.p3(this.fileUnpackedSize[i]);

            if (this.fileWrite[i] && !compressWhole) {
                this.fileWrite[i] = BZip2.compress(this.fileWrite[i]).subarray(4);
                this.filePackedSize[i] = this.fileWrite[i].length;
            }

            buf.p3(this.filePackedSize[i]);
        }

        // write files
        for (let i = 0; i < this.fileCount; i++) {
            buf.pdata(this.fileWrite[i]);
        }

        let jag = new Packet();
        jag.p3(buf.length);
        if (compressWhole) {
            buf = BZip2.compress(buf).subarray(4);
        }
        jag.p3(buf.length);
        jag.pdata(buf);

        jag.save(path);
        return jag;
    }
}

export const KNOWN_NAMES = [
    // title
    'index.dat',
    'logo.dat',
    'p11.dat',
    'p12.dat',
    'b12.dat',
    'q8.dat',
    'runes.dat',
    'title.dat',
    'titlebox.dat',
    'titlebutton.dat',
    // seen in 274
    'p11_full.dat',
    'p12_full.dat',
    'b12_full.dat',
    'q8_full.dat',

    // config
    'flo.dat',
    'flo.idx',
    'idk.dat',
    'idk.idx',
    'loc.dat',
    'loc.idx',
    'npc.dat',
    'npc.idx',
    'obj.dat',
    'obj.idx',
    'seq.dat',
    'seq.idx',
    'spotanim.dat',
    'spotanim.idx',
    'varp.dat',
    'varp.idx',
    // seen in 254
    'varbit.dat',
    'varbit.idx',
    // seen in 274
    'mesanim.dat',
    'mesanim.idx',
    'mes.dat',
    'mes.idx',
    'param.dat',
    'param.idx',
    'hunt.dat',
    'hunt.idx',

    // interface
    'data',

    // media
    'backbase1.dat',
    'backbase2.dat',
    'backhmid1.dat',
    'backhmid2.dat',
    'backleft1.dat',
    'backleft2.dat',
    'backright1.dat',
    'backright2.dat',
    'backtop1.dat',
    'backtop2.dat',
    'backvmid1.dat',
    'backvmid2.dat',
    'backvmid3.dat',
    'chatback.dat',
    'combatboxes.dat',
    'combaticons.dat',
    'combaticons2.dat',
    'combaticons3.dat',
    'compass.dat',
    'cross.dat',
    'gnomeball_buttons.dat',
    'headicons.dat',
    'hitmarks.dat',
    // index.dat
    'invback.dat',
    'leftarrow.dat',
    'magicoff.dat',
    'magicoff2.dat',
    'magicon.dat',
    'magicon2.dat',
    'mapback.dat',
    'mapdots.dat',
    'mapflag.dat',
    'mapfunction.dat',
    'mapscene.dat',
    'miscgraphics.dat',
    'miscgraphics2.dat',
    'miscgraphics3.dat',
    'prayerglow.dat',
    'prayeroff.dat',
    'prayeron.dat',
    'redstone1.dat',
    'redstone2.dat',
    'redstone3.dat',
    'rightarrow.dat',
    'scrollbar.dat',
    'sideicons.dat',
    'staticons.dat',
    'staticons2.dat',
    'steelborder.dat',
    'steelborder2.dat',
    'sworddecor.dat',
    'tradebacking.dat',
    'wornicons.dat',
    // seen in 254
    'mapmarker.dat',
    'mod_icons.dat',
    'mapedge.dat',
    // seen in 336
    'blackmark.dat',
    'button_brown.dat',
    'button_brown_big.dat',
    'button_red.dat',
    'chest.dat',
    'coins.dat',
    'headicons_hint.dat',
    'headicons_pk.dat',
    'headicons_prayer.dat',
    'key.dat',
    'keys.dat',
    'leftarrow_small.dat',
    'letter.dat',
    'number_button.dat',
    'overlay_duel.dat',
    'overlay_multiway.dat',
    'pen.dat',
    'rightarrow_small.dat',
    'startgame.dat',
    'tex_brown.dat',
    'tex_red.dat',
    'titlescroll.dat',

    // models (225 and before)
    'base_head.dat',
    'base_label.dat',
    'base_type.dat',
    'frame_del.dat',
    'frame_head.dat',
    'frame_tran1.dat',
    'frame_tran2.dat',
    'ob_axis.dat',
    'ob_face1.dat',
    'ob_face2.dat',
    'ob_face3.dat',
    'ob_face4.dat',
    'ob_face5.dat',
    'ob_head.dat',
    'ob_point1.dat',
    'ob_point2.dat',
    'ob_point3.dat',
    'ob_point4.dat',
    'ob_point5.dat',
    'ob_vertex1.dat',
    'ob_vertex2.dat',

    // versionlist (introduced in 234)
    'anim_crc',
    'anim_index',
    'anim_version',
    'map_crc',
    'map_index',
    'map_version',
    'midi_crc',
    'midi_index',
    'midi_version',
    'model_crc',
    'model_index',
    'model_version',

    // textures
    // index.dat
    '0.dat',
    '1.dat',
    '2.dat',
    '3.dat',
    '4.dat',
    '5.dat',
    '6.dat',
    '7.dat',
    '8.dat',
    '9.dat',
    '10.dat',
    '11.dat',
    '12.dat',
    '13.dat',
    '14.dat',
    '15.dat',
    '16.dat',
    '17.dat',
    '18.dat',
    '19.dat',
    '20.dat',
    '21.dat',
    '22.dat',
    '23.dat',
    '24.dat',
    '25.dat',
    '26.dat',
    '27.dat',
    '28.dat',
    '29.dat',
    '30.dat',
    '31.dat',
    '32.dat',
    '33.dat',
    '34.dat',
    '35.dat',
    '36.dat',
    '37.dat',
    '38.dat',
    '39.dat',
    '40.dat',
    '41.dat',
    '42.dat',
    '43.dat',
    '44.dat',
    '45.dat',
    '46.dat',
    '47.dat',
    '48.dat',
    '49.dat',

    // wordenc
    'badenc.txt',
    'domainenc.txt',
    'fragmentsenc.txt',
    'tldlist.txt',

    // sounds
    'sounds.dat'
];

export const KNOWN_HASHES = [];

for (let i = 0; i < KNOWN_NAMES.length; i++) {
    let hash = 0;
    let str = KNOWN_NAMES[i];

    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        hash = ((hash * 61 + str.charCodeAt(i)) - 32) | 0;
    }

    KNOWN_HASHES[i] = hash;
}
