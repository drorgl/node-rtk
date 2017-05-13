import {Stream} from "./Stream";

interface IStreamServer {        /* stream server type */
     state : number;          /* server state (0:stop,1:running) */
     cycle : number;          /* server cycle (ms) */
     buffsize : number;       /* input/monitor buffer size (bytes) */
     nmeacycle : number;      /* NMEA request cycle (ms) (0:no) */
     relayback : number;      /* relay back of output streams (0:no) */
     nstr : number;           /* number of streams (1 input + (nstr-1) outputs */
     npb : number;            /* data length in peek buffer (bytes) */
    //char cmds_periodic[16][MAXRCVCMD]; /* periodic commands */
     nmeapos : number[];  /* NMEA request position (ecef) (m) */
    buff : Buffer; /* input buffers */
    pbuf : Buffer; /* peek buffer */
     tick : number;  /* start tick */
    stream_t stream[16]; /* input/output streams */
    strconv_t *conv[16]; /* stream converter */
    thread_t thread;    /* server thread */
    lock_t lock;        /* lock flag */
} strsvr_t;