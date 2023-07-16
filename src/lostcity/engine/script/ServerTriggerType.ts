enum ServerTriggerType {
    PROC = 0,
    LABEL = 1,
    DEBUGPROC = 2,
    
    APNPC1 = 3,
    APNPC2 = 4,
    APNPC3 = 5,
    APNPC4 = 6,
    APNPC5 = 7,
    APNPCU = 8,
    APNPCT = 9,
    OPNPC1 = 10,
    OPNPC2 = 11,
    OPNPC3 = 12,
    OPNPC4 = 13,
    OPNPC5 = 14,
    OPNPCU = 15,
    OPNPCT = 16,
    AI_APNPC1 = 17,
    AI_APNPC2 = 18,
    AI_APNPC3 = 19,
    AI_APNPC4 = 20,
    AI_APNPC5 = 21,
    AI_APNPCU = 22,
    AI_APNPCT = 23,
    AI_OPNPC1 = 24,
    AI_OPNPC2 = 25,
    AI_OPNPC3 = 26,
    AI_OPNPC4 = 27,
    AI_OPNPC5 = 28,
    AI_OPNPCU = 29,
    AI_OPNPCT = 30,
    
    APOBJ1 = 31,
    APOBJ2 = 32,
    APOBJ3 = 33,
    APOBJ4 = 34,
    APOBJ5 = 35,
    APOBJU = 36,
    APOBJT = 37,
    OPOBJ1 = 38,
    OPOBJ2 = 39,
    OPOBJ3 = 40,
    OPOBJ4 = 41,
    OPOBJ5 = 42,
    OPOBJU = 43,
    OPOBJT = 44,
    AI_APOBJ1 = 45,
    AI_APOBJ2 = 46,
    AI_APOBJ3 = 47,
    AI_APOBJ4 = 48,
    AI_APOBJ5 = 49,
    AI_APOBJU = 50,
    AI_APOBJT = 51,
    AI_OPOBJ1 = 52,
    AI_OPOBJ2 = 53,
    AI_OPOBJ3 = 54,
    AI_OPOBJ4 = 55,
    AI_OPOBJ5 = 56,
    AI_OPOBJU = 57,
    AI_OPOBJT = 58,
    
    APLOC1 = 59,
    APLOC2 = 60,
    APLOC3 = 61,
    APLOC4 = 62,
    APLOC5 = 63,
    APLOCU = 64,
    APLOCT = 65,
    OPLOC1 = 66,
    OPLOC2 = 67,
    OPLOC3 = 68,
    OPLOC4 = 69,
    OPLOC5 = 70,
    OPLOCU = 71,
    OPLOCT = 72,
    AI_APLOC1 = 73,
    AI_APLOC2 = 74,
    AI_APLOC3 = 75,
    AI_APLOC4 = 76,
    AI_APLOC5 = 77,
    AI_APLOCU = 78,
    AI_APLOCT = 79,
    AI_OPLOC1 = 80,
    AI_OPLOC2 = 81,
    AI_OPLOC3 = 82,
    AI_OPLOC4 = 83,
    AI_OPLOC5 = 84,
    AI_OPLOCU = 85,
    AI_OPLOCT = 86,
    
    APPLAYER1 = 87,
    APPLAYER2 = 88,
    APPLAYER3 = 89,
    APPLAYER4 = 90,
    APPLAYER5 = 91,
    APPLAYERU = 92,
    APPLAYERT = 93,
    OPPLAYER1 = 94,
    OPPLAYER2 = 95,
    OPPLAYER3 = 96,
    OPPLAYER4 = 97,
    OPPLAYER5 = 98,
    OPPLAYERU = 99,
    OPPLAYERT = 100,
    AI_APPLAYER1 = 101,
    AI_APPLAYER2 = 102,
    AI_APPLAYER3 = 103,
    AI_APPLAYER4 = 104,
    AI_APPLAYER5 = 105,
    AI_APPLAYERU = 106,
    AI_APPLAYERT = 107,
    AI_OPPLAYER1 = 108,
    AI_OPPLAYER2 = 109,
    AI_OPPLAYER3 = 110,
    AI_OPPLAYER4 = 111,
    AI_OPPLAYER5 = 112,
    AI_OPPLAYERU = 113,
    AI_OPPLAYERT = 114,
    
    WEAKQUEUE = 115,
    QUEUE = 116,
    AI_QUEUE1 = 117,
    AI_QUEUE2 = 118,
    AI_QUEUE3 = 119,
    AI_QUEUE4 = 120,
    AI_QUEUE5 = 121,
    AI_QUEUE6 = 122,
    AI_QUEUE7 = 123,
    AI_QUEUE8 = 124,
    AI_QUEUE9 = 125,
    AI_QUEUE10 = 126,
    AI_QUEUE11 = 127,
    AI_QUEUE12 = 128,
    AI_QUEUE13 = 129,
    AI_QUEUE14 = 130,
    AI_QUEUE15 = 131,
    AI_QUEUE16 = 132,
    AI_QUEUE17 = 133,
    AI_QUEUE18 = 134,
    AI_QUEUE19 = 135,
    AI_QUEUE20 = 136,
    
    SOFTTIMER = 137,
    TIMER = 138,
    AI_TIMER = 139,
    
    OPHELD1 = 140,
    OPHELD2 = 141,
    OPHELD3 = 142,
    OPHELD4 = 143,
    OPHELD5 = 144,
    OPHELDU = 145,
    OPHELDT = 146,
    
    IF_BUTTON = 147,
    IF_BUTTON1 = 148,
    IF_BUTTON2 = 149,
    IF_BUTTON3 = 150,
    IF_BUTTON4 = 151,
    IF_BUTTON5 = 152,
    IF_BUTTOND = 153,
    IF_CLOSE = 154,
    
    LOGIN = 155,
    LOGOUT = 156,
    MAPENTER = 157,
    IF_FLASHING_TAB = 158,
}

namespace ServerTriggerType {
    export function toString(trigger: ServerTriggerType) {
        return ServerTriggerType[trigger].toLowerCase()
    }
}

export default ServerTriggerType;