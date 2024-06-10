export default class ClientProt {
    static all: ClientProt[] = [];
    static byId: ClientProt[] = [];

    static readonly REBUILD_GETMAPS = new ClientProt(4, 150, -1);

    static readonly IDLE_TIMER = new ClientProt(30, 70, 0);

    static readonly NO_TIMEOUT = new ClientProt(6, 108, 0); // NXT naming

    static readonly EVENT_TRACKING = new ClientProt(34, 81, -2);
    static readonly EVENT_CAMERA_POSITION = new ClientProt(35, 189, 6); // NXT naming

    // autogenerated as part of obfuscation process
    static readonly ANTICHEAT_OPLOGIC1 = new ClientProt(60, 7, 4);
    static readonly ANTICHEAT_OPLOGIC2 = new ClientProt(61, 88, 4);
    static readonly ANTICHEAT_OPLOGIC3 = new ClientProt(62, 30, 3);
    static readonly ANTICHEAT_OPLOGIC4 = new ClientProt(63, 176, 2);
    static readonly ANTICHEAT_OPLOGIC5 = new ClientProt(64, 220, 0);
    static readonly ANTICHEAT_OPLOGIC6 = new ClientProt(65, 66, 4);
    static readonly ANTICHEAT_OPLOGIC7 = new ClientProt(66, 17, 4);
    static readonly ANTICHEAT_OPLOGIC8 = new ClientProt(67, 2, 2);
    static readonly ANTICHEAT_OPLOGIC9 = new ClientProt(68, 238, 1);

    // autogenerated as part of obfuscation process
    static readonly ANTICHEAT_CYCLELOGIC1 = new ClientProt(70, 233, 1);
    static readonly ANTICHEAT_CYCLELOGIC2 = new ClientProt(71, 146, -1);
    static readonly ANTICHEAT_CYCLELOGIC3 = new ClientProt(74, 215, 3);
    static readonly ANTICHEAT_CYCLELOGIC4 = new ClientProt(72, 236, 4);
    static readonly ANTICHEAT_CYCLELOGIC5 = new ClientProt(75, 85, 0);
    static readonly ANTICHEAT_CYCLELOGIC6 = new ClientProt(73, 219, -1);

    static readonly OPOBJ1 = new ClientProt(80, 140, 6); // NXT naming
    static readonly OPOBJ2 = new ClientProt(81, 40, 6); // NXT naming
    static readonly OPOBJ3 = new ClientProt(82, 200, 6); // NXT naming
    static readonly OPOBJ4 = new ClientProt(83, 178, 6); // NXT naming
    static readonly OPOBJ5 = new ClientProt(84, 247, 6); // NXT naming
    static readonly OPOBJT = new ClientProt(88, 138, 8); // NXT naming
    static readonly OPOBJU = new ClientProt(89, 239, 12); // NXT naming

    static readonly OPNPC1 = new ClientProt(100, 194, 2); // NXT naming
    static readonly OPNPC2 = new ClientProt(101, 8, 2); // NXT naming
    static readonly OPNPC3 = new ClientProt(102, 27, 2); // NXT naming
    static readonly OPNPC4 = new ClientProt(103, 113, 2); // NXT naming
    static readonly OPNPC5 = new ClientProt(104, 100, 2); // NXT naming
    static readonly OPNPCT = new ClientProt(108, 134, 4); // NXT naming
    static readonly OPNPCU = new ClientProt(109, 202, 8); // NXT naming

    static readonly OPLOC1 = new ClientProt(120, 245, 6); // NXT naming
    static readonly OPLOC2 = new ClientProt(121, 172, 6); // NXT naming
    static readonly OPLOC3 = new ClientProt(122, 96, 6); // NXT naming
    static readonly OPLOC4 = new ClientProt(123, 97, 6); // NXT naming
    static readonly OPLOC5 = new ClientProt(124, 116, 6); // NXT naming
    static readonly OPLOCT = new ClientProt(128, 9, 8); // NXT naming
    static readonly OPLOCU = new ClientProt(129, 75, 12); // NXT naming

    static readonly OPPLAYER1 = new ClientProt(140, 164, 2); // NXT naming
    static readonly OPPLAYER2 = new ClientProt(141, 53, 2); // NXT naming
    static readonly OPPLAYER3 = new ClientProt(142, 185, 2); // NXT naming
    static readonly OPPLAYER4 = new ClientProt(143, 206, 2); // NXT naming
    static readonly OPPLAYERT = new ClientProt(148, 177, 4); // NXT naming
    static readonly OPPLAYERU = new ClientProt(149, 248, 8); // NXT naming

    static readonly OPHELD1 = new ClientProt(160, 195, 6); // name based on runescript trigger
    static readonly OPHELD2 = new ClientProt(161, 71, 6); // name based on runescript trigger
    static readonly OPHELD3 = new ClientProt(162, 133, 6); // name based on runescript trigger
    static readonly OPHELD4 = new ClientProt(163, 157, 6); // name based on runescript trigger
    static readonly OPHELD5 = new ClientProt(164, 211, 6); // name based on runescript trigger
    static readonly OPHELDT = new ClientProt(168, 48, 8); // name based on runescript trigger
    static readonly OPHELDU = new ClientProt(169, 130, 12); // name based on runescript trigger

    static readonly INV_BUTTON1 = new ClientProt(190, 31, 6); // NXT has "IF_BUTTON1" but for our interface system, this makes more sense
    static readonly INV_BUTTON2 = new ClientProt(191, 59, 6); // NXT has "IF_BUTTON2" but for our interface system, this makes more sense
    static readonly INV_BUTTON3 = new ClientProt(192, 212, 6); // NXT has "IF_BUTTON3" but for our interface system, this makes more sense
    static readonly INV_BUTTON4 = new ClientProt(193, 38, 6); // NXT has "IF_BUTTON4" but for our interface system, this makes more sense
    static readonly INV_BUTTON5 = new ClientProt(194, 6, 6); // NXT has "IF_BUTTON5" but for our interface system, this makes more sense
    static readonly IF_BUTTON = new ClientProt(200, 155, 2); // NXT naming

    static readonly RESUME_PAUSEBUTTON = new ClientProt(201, 235, 2); // NXT naming
    static readonly CLOSE_MODAL = new ClientProt(202, 231, 0); // NXT naming
    static readonly RESUME_P_COUNTDIALOG = new ClientProt(203, 237, 4); // NXT naming
    static readonly TUTORIAL_CLICKSIDE = new ClientProt(204, 175, 1);

    static readonly MOVE_OPCLICK = new ClientProt(242, 93, -1); // comes with OP packets, name based on other MOVE packets
    static readonly BUG_REPORT = new ClientProt(243, 190, 10); // NXT naming
    static readonly MOVE_MINIMAPCLICK = new ClientProt(244, 165, -1); // NXT naming
    static readonly INV_BUTTOND = new ClientProt(245, 159, 6); // NXT has "IF_BUTTOND" but for our interface system, this makes more sense
    static readonly IGNORELIST_DEL = new ClientProt(246, 171, 8); // NXT naming
    static readonly IGNORELIST_ADD = new ClientProt(247, 79, 8); // NXT naming
    static readonly IF_PLAYERDESIGN = new ClientProt(248, 52, 13);
    static readonly CHAT_SETMODE = new ClientProt(249, 244, 3); // NXT naming
    static readonly MESSAGE_PRIVATE = new ClientProt(250, 148, -1); // NXT naming
    static readonly FRIENDLIST_DEL = new ClientProt(251, 11, 8); // NXT naming
    static readonly FRIENDLIST_ADD = new ClientProt(252, 118, 8); // NXT naming
    static readonly CLIENT_CHEAT = new ClientProt(253, 4, -1); // NXT naming
    static readonly MESSAGE_PUBLIC = new ClientProt(254, 158, -1); // NXT naming
    static readonly MOVE_GAMECLICK = new ClientProt(255, 181, -1); // NXT naming

    // in these old revisions we can actually get the packet index from a leftover array in the client source
    constructor(readonly index: number, readonly id: number, readonly length: number) {
        ClientProt.all[index] = this;
        ClientProt.byId[id] = this;
    }
}
