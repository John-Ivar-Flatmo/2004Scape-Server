const ScriptOpcodes = {
    // Language required opcodes
    PUSH_CONSTANT_INT: 0,
    PUSH_CONSTANT_STRING: 3,
    BRANCH: 6,
    BRANCH_NOT: 7,
    BRANCH_EQUALS: 8,
    BRANCH_LESS_THAN: 9,
    BRANCH_GREATER_THAN: 10,
    RETURN: 21,
    BRANCH_LESS_THAN_OR_EQUALS: 31,
    BRANCH_GREATER_THAN_OR_EQUALS: 32,
    PUSH_INT_LOCAL: 33,
    POP_INT_LOCAL: 34,
    PUSH_STRING_LOCAL: 35,
    POP_STRING_LOCAL: 36,
    JOIN_STRING: 37,
    POP_INT_DISCARD: 38,
    POP_STRING_DISCARD: 39,
    GOSUB_WITH_PARAMS: 40,
    DEFINE_ARRAY: 44,
    PUSH_ARRAY_INT: 45,
    POP_ARRAY_INT: 46,
    SWITCH: 60,
    GOSUB: 90,
    JUMP: 91,
    JUMP_WITH_PARAMS: 92,

    STRONGQUEUE: 1000,
    WEAKQUEUE: 1001,

    // Server opcodes
    ANIM: 2000,
    COORD: 2006,
    INV_ADD: 2019,
    INV_DEL: 2021,
    INV_TOTAL: 2028,
    LAST_COMSUBID: 2030,
    MAP_CLOCK: 2050,
    MES: 2053,
    NPC_ANIM: 2057,
    NPC_FINDHERO: 2065,
    NPC_QUEUE: 2067,
    NPC_RANGE: 2068,
    P_APRANGE: 2085,
    P_DELAY: 2088,
    P_PAUSEBUTTON: 2092,

    IF_CHATSELECT: 2500,
    CHATNPC: 2501,
    ERROR: 2502,
    CHATPLAYER: 2503,
    OBJBOX: 2504,
    GIVEXP: 2505,
    NPC_DAMAGE: 2506,
    DAMAGE: 2507,

    // Math opcodes
    ADD: 4000,
    SUB: 4001,
    MULTIPLY: 4002,
    DIVIDE: 4003,
    RANDOM: 4004,
    RANDOMINC: 4005,
    INTERPOLATE: 4006,
    ADDPERCENT: 4007,
    SETBIT: 4008,
    CLEARBIT: 4009,
    TESTBIT: 4010,
    MODULO: 4011,
    POW: 4012,
    INVPOW: 4013,
    AND: 4014,
    OR: 4015,
    SCALE: 4018,
    BITCOUNT: 4025,
    TOGGLEBIT: 4026,
    SETBIT_RANGE: 4027,
    CLEARBIT_RANGE: 4028,
    GETBIT_RANGE: 4029,
    SETBIT_RANGE_TOINT: 4030,
    SIN_DEG: 4032,
    COS_DEG: 4033,
    ABS: 4035,
    TOSTRING: 4106,
};

// generate reverse lookup
for (let key in ScriptOpcodes) {
    ScriptOpcodes[ScriptOpcodes[key]] = key;
}

export default ScriptOpcodes;
