export interface StreamConverter {        /* stream converter type */
     itype : number;otype : number;    /* input and output stream type */
     nmsg : number;           /* number of output messages */
     msgs : number[];       /* output message types */
     tint : number[];    /* output message intervals (s) */
     tick : number[]; /* cycle tick of output message */
     ephsat : number[];     /* satellites of output ephemeris */
     stasel : number;         /* station info selection (0:remote,1:local) */
    rtcm_t rtcm;        /* rtcm input data buffer */
    raw_t raw;          /* raw  input data buffer */
    rtcm_t out;         /* rtcm output data buffer */
} strconv_t;