
/* constants -----------------------------------------------------------------*/

const VER_RTKLIB =  "2.4.3";             /* library version */

const PATCH_LEVEL =  "b26";               /* patch level */

const COPYRIGHT_RTKLIB = "Copyright (C) 2007-2016 T.Takasu\nAll rights reserved."

export const PI       =   3.1415926535897932 ; /* pi */
export const D2R      =   (PI/180.0)         ; /* deg to rad */
export const R2D      =   (180.0/PI)         ; /* rad to deg */
export const CLIGHT   =   299792458.0        ; /* speed of light (m/s) */
export const SC2RAD   =   3.1415926535898    ; /* semi-circle to radian (IS-GPS) */
export const AU       =   149597870691.0     ; /* 1 AU (m) */
export const AS2R     =   (D2R/3600.0)       ; /* arc sec to radian */

const OMGE  =      7.2921151467E-5;     /* earth angular velocity (IS-GPS) (rad/s) */

const RE_WGS84  =  6378137.0          ; /* earth semimajor axis (WGS84) (m) */
const FE_WGS84  =  (1.0/298.257223563); /* earth flattening (WGS84) */

const HION      =  350000.0 ;           /* ionosphere height (m) */

const MAXFREQ   =  7;                   /* max NFREQ */

const FREQ1      = 1.57542E9     ;      /* L1/E1  frequency (Hz) */
const FREQ2      = 1.22760E9     ;      /* L2     frequency (Hz) */
const FREQ5      = 1.17645E9     ;      /* L5/E5a frequency (Hz) */
const FREQ6      = 1.27875E9     ;      /* E6/LEX frequency (Hz) */
const FREQ7      = 1.20714E9     ;      /* E5b    frequency (Hz) */
const FREQ8      = 1.191795E9    ;      /* E5a+b  frequency (Hz) */
const FREQ9      = 2.492028E9    ;      /* S      frequency (Hz) */
const FREQ1_GLO  = 1.60200E9     ;      /* GLONASS G1 base frequency (Hz) */
const DFRQ1_GLO  = 0.56250E6     ;      /* GLONASS G1 bias frequency (Hz/n) */
const FREQ2_GLO  = 1.24600E9     ;      /* GLONASS G2 base frequency (Hz) */
const DFRQ2_GLO  = 0.43750E6     ;      /* GLONASS G2 bias frequency (Hz/n) */
const FREQ3_GLO  = 1.202025E9    ;      /* GLONASS G3 frequency (Hz) */
const FREQ1_CMP  = 1.561098E9    ;      /* BeiDou B1 frequency (Hz) */
const FREQ2_CMP  = 1.20714E9     ;      /* BeiDou B2 frequency (Hz) */
const FREQ3_CMP  = 1.26852E9     ;      /* BeiDou B3 frequency (Hz) */

const EFACT_GPS =  1.0 ;                /* error factor: GPS */
const EFACT_GLO =  1.5 ;                /* error factor: GLONASS */
const EFACT_GAL =  1.0 ;                /* error factor: Galileo */
const EFACT_QZS =  1.0 ;                /* error factor: QZSS */
const EFACT_CMP =  1.0 ;                /* error factor: BeiDou */
const EFACT_IRN =  1.5 ;                /* error factor: IRNSS */
const EFACT_SBS =  3.0 ;                /* error factor: SBAS */

const SYS_NONE  =  0x00;                /* navigation system: none */
const SYS_GPS   =  0x01;                /* navigation system: GPS */
const SYS_SBS   =  0x02;                /* navigation system: SBAS */
const SYS_GLO   =  0x04;                /* navigation system: GLONASS */
const SYS_GAL   =  0x08;                /* navigation system: Galileo */
const SYS_QZS   =  0x10;                /* navigation system: QZSS */
const SYS_CMP   =  0x20;                /* navigation system: BeiDou */
const SYS_IRN   =  0x40;                /* navigation system: IRNS */
const SYS_LEO   =  0x80;                /* navigation system: LEO */
const SYS_ALL   =  0xFF;                /* navigation system: all */

const TSYS_GPS   = 0 ;                  /* time system: GPS time */
const TSYS_UTC   = 1 ;                  /* time system: UTC */
const TSYS_GLO   = 2 ;                  /* time system: GLONASS time */
const TSYS_GAL   = 3 ;                  /* time system: Galileo time */
const TSYS_QZS   = 4 ;                  /* time system: QZSS time */
const TSYS_CMP   = 5 ;                  /* time system: BeiDou time */
const TSYS_IRN   = 6 ;                  /* time system: IRNSS time */

//#ifndef NFREQ
const NFREQ    =   3 ;                  /* number of carrier frequencies */
//#endif
const NFREQGLO  =   2 ;                  /* number of carrier frequencies of GLONASS */

//#ifndef NEXOBS
const NEXOBS   =   0;                   /* number of extended obs codes */
//#endif

const MINPRNGPS =  1                  ; /* min satellite PRN number of GPS */
const MAXPRNGPS =  32                 ; /* max satellite PRN number of GPS */
const NSATGPS   =  (MAXPRNGPS-MINPRNGPS+1); /* number of GPS satellites */
const NSYSGPS   =  1;

//#ifdef ENAGLO
const MINPRNGLO   = 1           ;        /* min satellite slot number of GLONASS */
const MAXPRNGLO   = 27          ;        /* max satellite slot number of GLONASS */
const NSATGLO     = (MAXPRNGLO-MINPRNGLO+1) ;/* number of GLONASS satellites */
const NSYSGLO     = 1;
//#else
// const MINPRNGLO  = 0;
// const MAXPRNGLO  = 0;
// const NSATGLO    = 0;
// const NSYSGLO    = 0;
//#endif
//#ifdef ENAGAL
const MINPRNGAL =  1 ;                  /* min satellite PRN number of Galileo */
const MAXPRNGAL =  30 ;                 /* max satellite PRN number of Galileo */
const NSATGAL   = (MAXPRNGAL-MINPRNGAL+1) ;/* number of Galileo satellites */
const NSYSGAL   =  1;
//#else
// const MINPRNGAL   =0;
// const MAXPRNGAL   =0;
// const NSATGAL     =0;
// const NSYSGAL     =0;
//#endif
//#ifdef ENAQZS
const MINPRNQZS   =193;                 /* min satellite PRN number of QZSS */
const MAXPRNQZS   =199;                 /* max satellite PRN number of QZSS */
const MINPRNQZS_S =183;                 /* min satellite PRN number of QZSS SAIF */
const MAXPRNQZS_S =189;                 /* max satellite PRN number of QZSS SAIF */
const NSATQZS     =(MAXPRNQZS-MINPRNQZS+1); /* number of QZSS satellites */
const NSYSQZS     =1;
//#else
// const MINPRNQZS   = 0;
// const MAXPRNQZS   = 0;
// const MINPRNQZS_S = 0;
// const MAXPRNQZS_S = 0;
// const NSATQZS     = 0;
// const NSYSQZS     = 0;
//#endif
//#ifdef ENACMP
const  MINPRNCMP =  1;                   /* min satellite sat number of BeiDou */
const  MAXPRNCMP =  35;                  /* max satellite sat number of BeiDou */
const  NSATCMP   =  (MAXPRNCMP-MINPRNCMP+1); /* number of BeiDou satellites */
const  NSYSCMP   =  1;
//#else
// const MINPRNCMP   =0;
// const MAXPRNCMP   =0;
// const NSATCMP     =0;
// const NSYSCMP     =0;
//#endif
//#ifdef ENAIRN
const  MINPRNIRN  = 1;                   /* min satellite sat number of IRNSS */
const  MAXPRNIRN  = 7 ;                  /* max satellite sat number of IRNSS */
const  NSATIRN    = (MAXPRNIRN-MINPRNIRN+1) ;/* number of IRNSS satellites */
const  NSYSIRN    = 1;
//#else
// const  MINPRNIRN  = 0;
// const  MAXPRNIRN  = 0;
// const  NSATIRN    = 0;
// const  NSYSIRN    = 0;
//#endif
//#ifdef ENALEO
const MINPRNLEO  = 1  ;                 /* min satellite sat number of LEO */
const MAXPRNLEO  = 10 ;                 /* max satellite sat number of LEO */
const NSATLEO    = (MAXPRNLEO-MINPRNLEO+1); /* number of LEO satellites */
const NSYSLEO    = 1;
//#else
// const MINPRNLEO  = 0;
// const MAXPRNLEO  = 0;
// const NSATLEO    = 0;
// const NSYSLEO    = 0;
//#endif
const NSYS    =    (NSYSGPS+NSYSGLO+NSYSGAL+NSYSQZS+NSYSCMP+NSYSIRN+NSYSLEO); /* number of systems */

const MINPRNSBS  = 120;                 /* min satellite PRN number of SBAS */
const MAXPRNSBS  = 142;                 /* max satellite PRN number of SBAS */
const NSATSBS    = (MAXPRNSBS-MINPRNSBS+1) ;/* number of SBAS satellites */

const MAXSAT    =  (NSATGPS+NSATGLO+NSATGAL+NSATQZS+NSATCMP+NSATIRN+NSATSBS+NSATLEO);
                                        /* max satellite number (1 to MAXSAT) */
const MAXSTA    =  255;

//#ifndef MAXOBS
const MAXOBS   =   64;                  /* max number of obs in an epoch */
//#endif
const MAXRCV     = 64        ;          /* max receiver number (1 to MAXRCV) */
const MAXOBSTYPE = 64        ;          /* max number of obs type in RINEX */
const DTTOL      = 0.005     ;          /* tolerance of time difference (s) */
const MAXDTOE    = 7200.0    ;          /* max time difference to GPS Toe (s) */
const MAXDTOE_QZS= 7200.0    ;          /* max time difference to QZSS Toe (s) */
const MAXDTOE_GAL= 10800.0   ;          /* max time difference to Galileo Toe (s) */
const MAXDTOE_CMP= 21600.0   ;          /* max time difference to BeiDou Toe (s) */
const MAXDTOE_GLO= 1800.0    ;          /* max time difference to GLONASS Toe (s) */
const MAXDTOE_SBS= 360.0     ;          /* max time difference to SBAS Toe (s) */
const MAXDTOE_S  = 86400.0   ;          /* max time difference to ephem toe (s) for other */
const MAXGDOP    = 300.0     ;          /* max GDOP */

const INT_SWAP_TRAC =86400.0    ;       /* swap interval of trace file (s) */
const INT_SWAP_STAT =86400.0    ;       /* swap interval of solution status file (s) */

const MAXEXFILE   =1024       ;         /* max number of expanded files */
const MAXSBSAGEF  =30.0       ;         /* max age of SBAS fast correction (s) */
const MAXSBSAGEL  =1800.0     ;         /* max age of SBAS long term corr (s) */
const MAXSBSURA   =8          ;         /* max URA of SBAS satellite */
const MAXBAND     =10         ;         /* max SBAS band of IGP */
const MAXNIGP     =201        ;         /* max number of IGP in SBAS band */
const MAXNGEO     =4          ;         /* max number of GEO satellites */
const MAXCOMMENT  =10         ;         /* max number of RINEX comments */
const MAXSTRPATH  =1024       ;         /* max length of stream path */
const MAXSTRMSG   =1024       ;         /* max length of stream message */
const MAXSTRRTK   =8          ;         /* max number of stream in RTK server */
const MAXSBSMSG   =32         ;         /* max number of SBAS msg in RTK server */
const MAXSOLMSG   =8191       ;         /* max length of solution message */
const MAXRAWLEN   =4096       ;         /* max length of receiver raw message */
const MAXERRMSG   =4096       ;         /* max length of error/warning message */
const MAXANT      =64         ;         /* max length of station name/antenna type */
const MAXSOLBUF   =256        ;         /* max number of solution buffer */
const MAXOBSBUF   =128        ;         /* max number of observation data buffer */
const MAXNRPOS    =16         ;         /* max number of reference positions */
const MAXLEAPS    =64         ;         /* max number of leap seconds table */
const MAXGISLAYER =32         ;         /* max number of GIS data layers */
const MAXRCVCMD   =4096       ;         /* max length of receiver commands */

const RNX2VER   =  2.10   ;             /* RINEX ver.2 default output version */
const RNX3VER   =  3.00   ;             /* RINEX ver.3 default output version */

const OBSTYPE_PR = 0x01;                /* observation type: pseudorange */
const OBSTYPE_CP = 0x02;                /* observation type: carrier-phase */
const OBSTYPE_DOP= 0x04;                /* observation type: doppler-freq */
const OBSTYPE_SNR= 0x08;                /* observation type: SNR */
const OBSTYPE_ALL= 0xFF;                /* observation type: all */

const FREQTYPE_L1 =0x01         ;       /* frequency type: L1/E1 */
const FREQTYPE_L2 =0x02         ;       /* frequency type: L2/B1 */
const FREQTYPE_L5 =0x04             ;   /* frequency type: L5/E5a/L3 */
const FREQTYPE_L6 =0x08             ;   /* frequency type: E6/LEX/B3 */
const FREQTYPE_L7 =0x10          ;      /* frequency type: E5b/B2 */
const FREQTYPE_L8 =0x20           ;     /* frequency type: E5(a+b) */
const FREQTYPE_L9 =0x40     ;           /* frequency type: S */
const FREQTYPE_ALL= 0xFF      ;         /* frequency type: all */

const CODE_NONE  = 0  ;                 /* obs code: none or unknown */
const CODE_L1C   = 1  ;                 /* obs code: L1C/A,G1C/A,E1C (GPS,GLO,GAL,QZS,SBS) */
const CODE_L1P   = 2  ;                 /* obs code: L1P,G1P    (GPS,GLO) */
const CODE_L1W   = 3  ;                 /* obs code: L1 Z-track (GPS) */
const CODE_L1Y   = 4  ;                 /* obs code: L1Y        (GPS) */
const CODE_L1M   = 5  ;                 /* obs code: L1M        (GPS) */
const CODE_L1N   = 6  ;                 /* obs code: L1codeless (GPS) */
const CODE_L1S   = 7  ;                 /* obs code: L1C(D)     (GPS,QZS) */
const CODE_L1L   = 8  ;                 /* obs code: L1C(P)     (GPS,QZS) */
const CODE_L1E   = 9  ;                 /* (not used) */
const CODE_L1A   = 10 ;                 /* obs code: E1A        (GAL) */
const CODE_L1B   = 11 ;                 /* obs code: E1B        (GAL) */
const CODE_L1X   = 12 ;                 /* obs code: E1B+C,L1C(D+P) (GAL,QZS) */
const CODE_L1Z   = 13 ;                 /* obs code: E1A+B+C,L1SAIF (GAL,QZS) */
const CODE_L2C   = 14 ;                 /* obs code: L2C/A,G1C/A (GPS,GLO) */
const CODE_L2D   = 15 ;                 /* obs code: L2 L1C/A-(P2-P1) (GPS) */
const CODE_L2S   = 16 ;                 /* obs code: L2C(M)     (GPS,QZS) */
const CODE_L2L   = 17 ;                 /* obs code: L2C(L)     (GPS,QZS) */
const CODE_L2X   = 18 ;                 /* obs code: L2C(M+L),B1I+Q (GPS,QZS,CMP) */
const CODE_L2P   = 19 ;                 /* obs code: L2P,G2P    (GPS,GLO) */
const CODE_L2W   = 20 ;                 /* obs code: L2 Z-track (GPS) */
const CODE_L2Y   = 21 ;                 /* obs code: L2Y        (GPS) */
const CODE_L2M   = 22 ;                 /* obs code: L2M        (GPS) */
const CODE_L2N   = 23 ;                 /* obs code: L2codeless (GPS) */
const CODE_L5I   = 24 ;                 /* obs code: L5/E5aI    (GPS,GAL,QZS,SBS) */
const CODE_L5Q   = 25 ;                 /* obs code: L5/E5aQ    (GPS,GAL,QZS,SBS) */
const CODE_L5X   = 26 ;                 /* obs code: L5/E5aI+Q/L5B+C (GPS,GAL,QZS,IRN,SBS) */
const CODE_L7I   = 27 ;                 /* obs code: E5bI,B2I   (GAL,CMP) */
const CODE_L7Q   = 28 ;                 /* obs code: E5bQ,B2Q   (GAL,CMP) */
const CODE_L7X   = 29 ;                 /* obs code: E5bI+Q,B2I+Q (GAL,CMP) */
const CODE_L6A   = 30 ;                 /* obs code: E6A        (GAL) */
const CODE_L6B   = 31 ;                 /* obs code: E6B        (GAL) */
const CODE_L6C   = 32 ;                 /* obs code: E6C        (GAL) */
const CODE_L6X   = 33 ;                 /* obs code: E6B+C,LEXS+L,B3I+Q (GAL,QZS,CMP) */
const CODE_L6Z   = 34 ;                 /* obs code: E6A+B+C    (GAL) */
const CODE_L6S   = 35 ;                 /* obs code: LEXS       (QZS) */
const CODE_L6L   = 36 ;                 /* obs code: LEXL       (QZS) */
const CODE_L8I   = 37 ;                 /* obs code: E5(a+b)I   (GAL) */
const CODE_L8Q   = 38 ;                 /* obs code: E5(a+b)Q   (GAL) */
const CODE_L8X   = 39 ;                 /* obs code: E5(a+b)I+Q (GAL) */
const CODE_L2I   = 40 ;                 /* obs code: B1I        (BDS) */
const CODE_L2Q   = 41 ;                 /* obs code: B1Q        (BDS) */
const CODE_L6I   = 42 ;                 /* obs code: B3I        (BDS) */
const CODE_L6Q   = 43 ;                 /* obs code: B3Q        (BDS) */
const CODE_L3I   = 44 ;                 /* obs code: G3I        (GLO) */
const CODE_L3Q   = 45 ;                 /* obs code: G3Q        (GLO) */
const CODE_L3X   = 46 ;                 /* obs code: G3I+Q      (GLO) */
const CODE_L1I   = 47 ;                 /* obs code: B1I        (BDS) */
const CODE_L1Q   = 48 ;                 /* obs code: B1Q        (BDS) */
const CODE_L5A   = 49 ;                 /* obs code: L5A SPS    (IRN) */
const CODE_L5B   = 50 ;                 /* obs code: L5B RS(D)  (IRN) */
const CODE_L5C   = 51 ;                 /* obs code: L5C RS(P)  (IRN) */
const CODE_L9A   = 52 ;                 /* obs code: SA SPS     (IRN) */
const CODE_L9B   = 53 ;                 /* obs code: SB RS(D)   (IRN) */
const CODE_L9C   = 54 ;                 /* obs code: SC RS(P)   (IRN) */
const CODE_L9X   = 55 ;                 /* obs code: SB+C       (IRN) */
const MAXCODE    = 55 ;                 /* max number of obs code */

const PMODE_SINGLE =0 ;                 /* positioning mode: single */
const PMODE_DGPS   =1 ;                 /* positioning mode: DGPS/DGNSS */
const PMODE_KINEMA =2 ;                 /* positioning mode: kinematic */
const PMODE_STATIC =3 ;                 /* positioning mode: static */
const PMODE_MOVEB  =4 ;                 /* positioning mode: moving-base */
const PMODE_FIXED  =5 ;                 /* positioning mode: fixed */
const PMODE_PPP_KINEMA =6;              /* positioning mode: PPP-kinemaric */
const PMODE_PPP_STATIC =7;              /* positioning mode: PPP-static */
const PMODE_PPP_FIXED  =8;               /* positioning mode: PPP-fixed */

const SOLF_LLH   = 0;                   /* solution format: lat/lon/height */
const SOLF_XYZ   = 1;                   /* solution format: x/y/z-ecef */
const SOLF_ENU   = 2;                   /* solution format: e/n/u-baseline */
const SOLF_NMEA  = 3;                   /* solution format: NMEA-183 */
const SOLF_STAT  = 4;                   /* solution format: solution status */
const SOLF_GSIF  = 5;                   /* solution format: GSI F1/F2 */

const SOLQ_NONE   =0;                   /* solution status: no solution */
const SOLQ_FIX    =1;                   /* solution status: fix */
const SOLQ_FLOAT  =2;                   /* solution status: float */
const SOLQ_SBAS   =3;                   /* solution status: SBAS */
const SOLQ_DGPS   =4;                   /* solution status: DGPS/DGNSS */
const SOLQ_SINGLE =5;                   /* solution status: single */
const SOLQ_PPP    =6;                   /* solution status: PPP */
const SOLQ_DR     =7;                   /* solution status: dead reconing */
const MAXSOLQ     =7;                   /* max number of solution status */

const TIMES_GPST = 0;                   /* time system: gps time */
const TIMES_UTC  = 1;                   /* time system: utc */
const TIMES_JST  = 2;                   /* time system: jst */

const IONOOPT_OFF =0;                   /* ionosphere option: correction off */
const IONOOPT_BRDC =1;                  /* ionosphere option: broadcast model */
const IONOOPT_SBAS =2;                  /* ionosphere option: SBAS model */
const IONOOPT_IFLC =3;                  /* ionosphere option: L1/L2 or L1/L5 iono-free LC */
const IONOOPT_EST =4;                   /* ionosphere option: estimation */
const IONOOPT_TEC =5;                   /* ionosphere option: IONEX TEC model */
const IONOOPT_QZS =6;                   /* ionosphere option: QZSS broadcast model */
const IONOOPT_LEX =7;                   /* ionosphere option: QZSS LEX ionospehre */
const IONOOPT_STEC =8;                  /* ionosphere option: SLANT TEC model */

const TROPOPT_OFF  =0;                   /* troposphere option: correction off */
const TROPOPT_SAAS =1;                  /* troposphere option: Saastamoinen model */
const TROPOPT_SBAS =2;                  /* troposphere option: SBAS model */
const TROPOPT_EST  =3;                   /* troposphere option: ZTD estimation */
const TROPOPT_ESTG =4;                  /* troposphere option: ZTD+grad estimation */
const TROPOPT_ZTD  =5;                   /* troposphere option: ZTD correction */

const EPHOPT_BRDC  = 0;                   /* ephemeris option: broadcast ephemeris */
const EPHOPT_PREC  = 1;                   /* ephemeris option: precise ephemeris */
const EPHOPT_SBAS  = 2;                   /* ephemeris option: broadcast + SBAS */
const EPHOPT_SSRAPC= 3;                 /* ephemeris option: broadcast + SSR_APC */
const EPHOPT_SSRCOM= 4;                 /* ephemeris option: broadcast + SSR_COM */
const EPHOPT_LEX   = 5;                   /* ephemeris option: QZSS LEX ephemeris */

const ARMODE_OFF     =0;                   /* AR mode: off */
const ARMODE_CONT    =1;                   /* AR mode: continuous */
const ARMODE_INST    =2;                   /* AR mode: instantaneous */
const ARMODE_FIXHOLD =3;                /* AR mode: fix and hold */
const ARMODE_WLNL    =4;                   /* AR mode: wide lane/narrow lane */
const ARMODE_TCAR    =5;                   /* AR mode: triple carrier ar */

const SBSOPT_LCORR =1;                  /* SBAS option: long term correction */
const SBSOPT_FCORR =2;                  /* SBAS option: fast correction */
const SBSOPT_ICORR =4;                  /* SBAS option: ionosphere correction */
const SBSOPT_RANGE =8;                  /* SBAS option: ranging */

const POSOPT_POS    =0;                  /* pos option: LLH/XYZ */
const POSOPT_SINGLE =1;                 /* pos option: average of single pos */
const POSOPT_FILE   =2;                  /* pos option: read from pos file */
const POSOPT_RINEX  =3;                  /* pos option: rinex header pos */
const POSOPT_RTCM   =4;                  /* pos option: rtcm station pos */
const POSOPT_RAW    =5;                  /* pos option: raw station pos */

const STR_NONE     =0  ;                /* stream type: none */
const STR_SERIAL   =1  ;                /* stream type: serial */
const STR_FILE     =2  ;                /* stream type: file */
const STR_TCPSVR   =3  ;                /* stream type: TCP server */
const STR_TCPCLI   =4  ;                /* stream type: TCP client */
const STR_NTRIPSVR =6  ;                /* stream type: NTRIP server */
const STR_NTRIPCLI =7  ;                /* stream type: NTRIP client */
const STR_FTP      =8  ;                /* stream type: ftp */
const STR_HTTP     =9  ;                /* stream type: http */
const STR_NTRIPC_S =10 ;                /* stream type: NTRIP caster server */
const STR_NTRIPC_C =11 ;                /* stream type: NTRIP caster client */
const STR_UDPSVR   =12 ;                /* stream type: UDP server */
const STR_UDPCLI   =13 ;                /* stream type: UDP server */
const STR_MEMBUF   =14 ;                /* stream type: memory buffer */

export const STRFMT_RTCM2  =0  ;                /* stream format: RTCM 2 */
export const STRFMT_RTCM3  =1  ;                /* stream format: RTCM 3 */
export const STRFMT_OEM4   =2  ;                /* stream format: NovAtel OEMV/4 */
export const STRFMT_OEM3   =3  ;                /* stream format: NovAtel OEM3 */
export const STRFMT_UBX    =4  ;                /* stream format: u-blox LEA-*T */
export const STRFMT_SS2    =5  ;                /* stream format: NovAtel Superstar II */
export const STRFMT_CRES   =6  ;                /* stream format: Hemisphere */
export const STRFMT_STQ    =7  ;                /* stream format: SkyTraq S1315F */
export const STRFMT_GW10   =8  ;                /* stream format: Furuno GW10 */
export const STRFMT_JAVAD  =9  ;                /* stream format: JAVAD GRIL/GREIS */
export const STRFMT_NVS    =10 ;                /* stream format: NVS NVC08C */
export const STRFMT_BINEX  =11 ;                /* stream format: BINEX */
export const STRFMT_RT17   =12 ;                /* stream format: Trimble RT17 */
export const STRFMT_SEPT   =13 ;                /* stream format: Septentrio */
export const STRFMT_CMR    =14 ;                /* stream format: CMR/CMR+ */
export const STRFMT_LEXR   =15 ;                /* stream format: Furuno LPY-10000 */
export const STRFMT_RINEX  =16 ;                /* stream format: RINEX */
export const STRFMT_SP3    =17 ;                /* stream format: SP3 */
export const STRFMT_RNXCLK =18 ;               /* stream format: RINEX CLK */
export const STRFMT_SBAS   =19 ;                /* stream format: SBAS messages */
export const STRFMT_NMEA   =20 ;                /* stream format: NMEA 0183 */
//#ifndef EXTLEX
//const MAXRCVFMT   = 14;                 /* max number of receiver format */
//#else
const MAXRCVFMT   = 15;
//#endif

const STR_MODE_R  =0x1;                 /* stream mode: read */
const STR_MODE_W  =0x2;                 /* stream mode: write */
const STR_MODE_RW =0x3;                 /* stream mode: read/write */

export const GEOID_EMBEDDED    =0;             /* geoid model: embedded geoid */
export const GEOID_EGM96_M150  =1;             /* geoid model: EGM96 15x15" */
export const GEOID_EGM2008_M25 =2;             /* geoid model: EGM2008 2.5x2.5" */
export const GEOID_EGM2008_M10 =3;             /* geoid model: EGM2008 1.0x1.0" */
export const GEOID_GSI2000_M15 =4;             /* geoid model: GSI geoid 2000 1.0x1.5" */
export const GEOID_RAF09       =5;             /* geoid model: IGN RAF09 for France 1.5"x2" */

const COMMENTH    ="%";                 /* comment line indicator for solution */
const MSG_DISCONN= "$_DISCONNECT\r\n";  /* disconnect message */

const DLOPT_FORCE   =0x01;              /* download option: force download existing */
const DLOPT_KEEPCMP =0x02;              /* download option: keep compressed file */
const DLOPT_HOLDERR =0x04;              /* download option: hold on error file */
const DLOPT_HOLDLST =0x08;              /* download option: hold on listing file */

const P2_5        =0.03125             ;/* 2^-5 */
const P2_6        =0.015625            ;/* 2^-6 */
const P2_11       =4.882812500000000E-04; /* 2^-11 */
const P2_15       =3.051757812500000E-05; /* 2^-15 */
const P2_17       =7.629394531250000E-06; /* 2^-17 */
const P2_19       =1.907348632812500E-06; /* 2^-19 */
const P2_20       =9.536743164062500E-07; /* 2^-20 */
const P2_21       =4.768371582031250E-07; /* 2^-21 */
const P2_23       =1.192092895507810E-07; /* 2^-23 */
const P2_24       =5.960464477539063E-08; /* 2^-24 */
const P2_27       =7.450580596923828E-09; /* 2^-27 */
const P2_29       =1.862645149230957E-09; /* 2^-29 */
const P2_30       =9.313225746154785E-10; /* 2^-30 */
const P2_31       =4.656612873077393E-10; /* 2^-31 */
const P2_32       =2.328306436538696E-10; /* 2^-32 */
const P2_33       =1.164153218269348E-10; /* 2^-33 */
const P2_35       =2.910383045673370E-11; /* 2^-35 */
const P2_38       =3.637978807091710E-12; /* 2^-38 */
const P2_39       =1.818989403545856E-12; /* 2^-39 */
const P2_40       =9.094947017729280E-13; /* 2^-40 */
const P2_43       =1.136868377216160E-13; /* 2^-43 */
const P2_48       =3.552713678800501E-15; /* 2^-48 */
const P2_50       =8.881784197001252E-16; /* 2^-50 */
const P2_55       =2.775557561562891E-17; /* 2^-55 */

/* type definitions ----------------------------------------------------------*/


export interface obsd_t{        /* observation data record */
     time : Date;       /* receiver sampling time (GPST) */
     sat : number,rcv : number; /* satellite/receiver number */
     SNR :number[/*NFREQ+NEXOBS*/]; /* signal strength (0.25 dBHz) */
     LLI :number[/*NFREQ+NEXOBS*/]; /* loss of lock indicator */
     code:number[/*NFREQ+NEXOBS*/]; /* code indicator (CODE_???) */
    L:number[/*NFREQ+NEXOBS*/]; /* observation data carrier-phase (cycle) */
    P:number[/*NFREQ+NEXOBS*/]; /* observation data pseudorange (m) */
    D:number[/*NFREQ+NEXOBS*/]; /* observation data doppler frequency (Hz) */
} ;

export interface obs_t{        /* observation data */
     n : number,nmax : number;         /* number of obervation data/allocated */
    data : obsd_t[];       /* observation data records */
};

export interface erpd_t {        /* earth rotation parameter data type */
     mjd : number;         /* mjd (days) */
     xp : number;yp : number;       /* pole offset (rad) */
     xpr : number;ypr : number;     /* pole offset rate (rad/day) */
     ut1_utc : number;     /* ut1-utc (s) */
     lod : number;         /* length of day (s/day) */
} ;

export interface erp_t {        /* earth rotation parameter type */
     n : number;nmax : number;         /* number and max number of data */
    data : erpd_t[];       /* earth rotation parameter data */
} ;

export interface pcv_t {        /* antenna parameter type */
     sat : number;            /* satellite number (0:receiver) */
     type: number[/*MAXANT*/];  /* antenna type */
     code: number[/*MAXANT*/];  /* serial number or satellite code */
     ts : Date,te : Date;      /* valid time start and end */
     off : number[/*NFREQ*/][/* 3*/]; /* phase center offset e/n/u or x/y/z (m) */
     var : number[/*NFREQ*/][/*19*/]; /* phase center variation (m) */
                        /* el=90,85,...,0 or nadir=0,1,2,3,... (deg) */
} ;

export interface pcvs_t {        /* antenna parameters type */
     n : number,nmax : number;         /* number of data/allocated */
    pcv : pcv_t[];         /* antenna parameters data */
} ;

export interface alm_t {        /* almanac type */
     sat : number;            /* satellite number */
     svh : number;            /* sv health (0:ok) */
     svconf : number;         /* as and sv config */
     week : number;           /* GPS/QZS: gps week, GAL: galileo week */
     toa : Date;        /* Toa */
                        /* SV orbit parameters */
     A : number,e : number,i0 : number,OMG0 : number,omg : number,M0 : number,OMGd : number;
     toas : number;        /* Toa (s) in week */
     f0 : number,f1 : number;       /* SV clock parameters (af0,af1) */
} ;

export interface eph_t {        /* GPS/QZS/GAL broadcast ephemeris type */
     sat : number;            /* satellite number */
     iode:number;iodc : number;      /* IODE,IODC */
     sva : number;            /* SV accuracy (URA index) */
     svh : number;            /* SV health (0:ok) */
     week:number;           /* GPS/QZS: gps week, GAL: galileo week */
     code:number;           /* GPS/QZS: code on L2, GAL/CMP: data sources */
     flag:number;           /* GPS/QZS: L2 P data flag, CMP: nav type */
     toe : Date,toc : Date,ttr : Date; /* Toe,Toc,T_trans */
                        /* SV orbit parameters */
     A : number;e : number;i0 : number;OMG0 : number;omg : number;M0 : number;deln:number;OMGd:number;idot : number;
     crc : number;crs : number;cuc : number;cus : number;cic : number;cis : number;
     toes : number;        /* Toe (s) in week */
     fit : number;         /* fit interval (h) */
     f0 : number;f1 : number;f2 : number;    /* SV clock parameters (af0,af1,af2) */
     tgd : number[/*4*/];      /* group delay parameters */
                        /* GPS/QZS:tgd[0]=TGD */
                        /* GAL    :tgd[0]=BGD E5a/E1,tgd[1]=BGD E5b/E1 */
                        /* CMP    :tgd[0]=BGD1,tgd[1]=BGD2 */
     Adot:number;ndot : number;   /* Adot,ndot for CNAV */
} ;

export interface geph_t {        /* GLONASS broadcast ephemeris type */
     sat : number;            /* satellite number */
     iode : number;           /* IODE (0-6 bit of tb field) */
     frq : number;            /* satellite frequency number */
     svh:number;sva : number;age : number;    /* satellite health, accuracy, age of operation */
     toe : Date;        /* epoch of epherides (gpst) */
     tof : Date;        /* message frame time (gpst) */
     pos: number[/*3*/];      /* satellite position (ecef) (m) */
     vel: number[/*3*/];      /* satellite velocity (ecef) (m/s) */
     acc: number[/*3*/];      /* satellite acceleration (ecef) (m/s^2) */
     taun : number,gamn : number;   /* SV clock bias (s)/relative freq bias */
     dtaun : number;       /* delay between L1 and L2 (s) */
} ;

export interface peph_t {        /* precise ephemeris type */
     time : Date;       /* time (GPST) */
     index : number;          /* ephemeris index for multiple files */
     pos:number[/*MAXSAT*/][/*4*/]; /* satellite position/clock (ecef) (m|s) */
     std:number[/*MAXSAT*/][/*4*/]; /* satellite position/clock std (m|s) */
     vel:number[/*MAXSAT*/][/*4*/]; /* satellite velocity/clk-rate (m/s|s/s) */
     vst:number[/*MAXSAT*/][/*4*/]; /* satellite velocity/clk-rate std (m/s|s/s) */
     cov:number[/*MAXSAT*/][/*3*/]; /* satellite position covariance (m^2) */
     vco:number[/*MAXSAT*/][/*3*/]; /* satellite velocity covariance (m^2) */
} ;

export interface pclk_t {        /* precise clock type */
  time : Date;       /* time (GPST) */
     index : number;          /* clock index for multiple files */
     clk: number[/*MAXSAT*/][/*1*/]; /* satellite clock (s) */
     std: number[/*MAXSAT*/][/*1*/]; /* satellite clock std (s) */
} ;

export interface seph_t {        /* SBAS ephemeris type */
     sat : number;            /* satellite number */
     t0 : Date;         /* reference epoch time (GPST) */
     tof : Date;        /* time of message frame (GPST) */
     sva : number;            /* SV accuracy (URA index) */
     svh : number;            /* SV health (0:ok) */
     pos: number[/*3*/];      /* satellite position (m) (ecef) */
     vel: number[/*3*/];      /* satellite velocity (m/s) (ecef) */
     acc: number[/*3*/];      /* satellite acceleration (m/s^2) (ecef) */
     af0:number;af1:number;     /* satellite clock-offset/drift (s,s/s) */
};

export interface tled_t {        /* norad two line element data type */
     name : string;     /* common name */
     alias : string;     /* alias name */
     satno : string;     /* satellilte catalog number */
     satclass : string;      /* classification */
     desig : string;     /* international designator */
     epoch : Date;      /* element set epoch (UTC) */
     ndot : number;        /* 1st derivative of mean motion */
     nddot : number;       /* 2st derivative of mean motion */
     bstar : number;       /* B* drag term */
     etype : number;          /* element set type */
     eleno : number;          /* element number */
     inc:number;         /* orbit inclination (deg) */
     OMG:number;         /* right ascension of ascending node (deg) */
     ecc:number;         /* eccentricity */
     omg:number;         /* argument of perigee (deg) */
     M:number;           /* mean anomaly (deg) */
     n:number;           /* mean motion (rev/day) */
     rev : number;            /* revolution number at epoch */
} ;

export interface tle_t {        /* norad two line element type */
     n : number;nmax : number;         /* number/max number of two line element data */
    data : tled_t[];       /* norad two line element data */
} ;

export interface tec_t {        /* TEC grid type */
     time : Date;       /* epoch time (GPST) */
     ndata : number[/*3*/];       /* TEC grid data size {nlat,nlon,nhgt} */
     rb : number;          /* earth radius (km) */
     lats : number[/*3*/];     /* latitude start/interval (deg) */
     lons : number[/*3*/];     /* longitude start/interval (deg) */
     hgts : number[/*3*/];     /* heights start/interval (km) */
    data : number[];       /* TEC grid data (tecu) */
    rms : number[];         /* RMS values (tecu) */
} ;

export interface fcbd_t {        /* satellite fcb data type */
     ts : Date;te : Date;      /* start/end time (GPST) */
     bias:number[/*MAXSAT*/][/*3*/]; /* fcb value   (cyc) */
     std :number[/*MAXSAT*/][/*3*/]; /* fcb std-dev (cyc) */
} ;

export interface sbsmsg_t {        /* SBAS message type */
     week:number;tow:number;       /* receiption time */
     prn : number;            /* SBAS satellite PRN number */
     msg : Buffer; /* SBAS message (226bit) padded by 0 */
} ;

export interface sbs_t {        /* SBAS messages type */
     n : number;nmax : number;         /* number of SBAS messages/allocated */
    msgs : sbsmsg_t[];     /* SBAS messages */
} ;

export interface sbsfcorr_t {        /* SBAS fast correction type */
     t0 : Date;         /* time of applicability (TOF) */
     prc : number;         /* pseudorange correction (PRC) (m) */
     rrc : number;         /* range-rate correction (RRC) (m/s) */
     dt : number;          /* range-rate correction delta-time (s) */
     iodf : number;           /* IODF (issue of date fast corr) */
     udre : number;         /* UDRE+1 */
     ai : number;           /* degradation factor indicator */
} ;

export interface sbslcorr_t {        /* SBAS long term satellite error correction type */
     t0 : Date;         /* correction time */
     iode : number;           /* IODE (issue of date ephemeris) */
     dpos : number[/*3*/];     /* delta position (m) (ecef) */
     dvel : number[/*3*/];     /* delta velocity (m/s) (ecef) */
     daf0 : number;daf1 : number;   /* delta clock-offset/drift (s,s/s) */
} ;

export interface sbssatp_t {        /* SBAS satellite correction type */
     sat : number;            /* satellite number */
     fcorr: sbsfcorr_t;   /* fast correction */
     lcorr : sbslcorr_t;   /* long term correction */
} ;

export interface sbssat_t {        /* SBAS satellite corrections type */
     iodp : number;           /* IODP (issue of date mask) */
     nsat : number;           /* number of satellites */
     tlat : number;           /* system latency (s) */
     sat : sbssatp_t[/*MAXSAT*/]; /* satellite correction */
} ;

export interface sbsigp_t {        /* SBAS ionospheric correction type */
     t0 : Date;         /* correction time */
     lat:number;lon : number;      /* latitude/longitude (deg) */
     give : number;         /* GIVI+1 */
     delay : number;        /* vertical delay estimate (m) */
} ;

export interface sbsigpband_t {        /* IGP band type */
     x : number;            /* longitude/latitude (deg) */
    y : number[];     /* latitudes/longitudes (deg) */
     bits : number; /* IGP mask start bit */
     bite : number; /* IGP mask end bit */
} ;

export interface sbsion_t {        /* SBAS ionospheric corrections type */
     iodi : number;           /* IODI (issue of date ionos corr) */
     nigp : number;           /* number of igps */
     igp : sbsigp_t[/*MAXNIGP*/]; /* ionospheric correction */
} ;
export interface dgps_t {        /* DGPS/GNSS correction type */
     t0 : Date;         /* correction time */
     prc : number;         /* pseudorange correction (PRC) (m) */
     rrc : number;         /* range rate correction (RRC) (m/s) */
     iod : number;            /* issue of data (IOD) */
     udre : number;        /* UDRE */
} ;

export interface ssr_t {        /* SSR correction type */
     t0 : Date[/*6*/];      /* epoch time (GPST) {eph,clk,hrclk,ura,bias,pbias} */
     udi : number[/*6*/];      /* SSR update interval (s) */
     iod : number[/*6*/];         /* iod ssr {eph,clk,hrclk,ura,bias,pbias} */
     iode : number;           /* issue of data */
     iodcrc : number;         /* issue of data crc for beidou/sbas */
     ura : number;            /* URA indicator */
     refd : number;           /* sat ref datum (0:ITRF,1:regional) */
     deph : number[/*3*/];    /* delta orbit {radial,along,cross} (m) */
     ddeph: number[/*3*/];    /* dot delta orbit {radial,along,cross} (m/s) */
     dclk : number[/*3*/];    /* delta clock {c0,c1,c2} (m,m/s,m/s^2) */
     hrclk: number;       /* high-rate clock corection (m) */
    cbias : number[/*MAXCODE*/]; /* code biases (m) */
    pbias : number[/*MAXCODE*/]; /* phase biases (m) */
    stdpb : number[/*MAXCODE*/]; /* std-dev of phase biases (m) */
     yaw_ang : number;yaw_rate : number; /* yaw angle and yaw rate (deg,deg/s) */
     update : number; /* update flag (0:no update,1:update) */
} ;

export interface lexmsg_t {        /* QZSS LEX message type */
     prn:number;            /* satellite PRN number */
     type : number;           /* message type */
     alert : number;          /* alert flag */
     stat : number; /* signal tracking status */
     snr : number;  /* signal C/N0 (0.25 dBHz) */
    ttt : number;   /* tracking time (ms) */
     msg : Buffer; /* LEX message data part 1695 bits */
} ;

export interface lex_t {        /* QZSS LEX messages type */
     n : number;nmax : number;         /* number of LEX messages and allocated */
    msgs : lexmsg_t[];     /* LEX messages */
} ;

export interface lexeph_t {        /* QZSS LEX ephemeris type */
     toe : Date;        /* epoch time (GPST) */
     tof : Date;        /* message frame time (GPST) */
     sat : number;            /* satellite number */
     health : number; /* signal health (L1,L2,L1C,L5,LEX) */
     ura : number;  /* URA index */
     pos: number[/*3*/];      /* satellite position (m) */
     vel: number[/*3*/];      /* satellite velocity (m/s) */
     acc: number[/*3*/];      /* satellite acceleration (m/s2) */
     jerk : number[/*3*/];     /* satellite jerk (m/s3) */
     af0:number;af1 : number;     /* satellite clock bias and drift (s,s/s) */
     tgd : number;         /* TGD */
     isc : number[/*8*/];      /* ISC */
} ;

export interface lexion_t {        /* QZSS LEX ionosphere correction type */
     t0 : Date;         /* epoch time (GPST) */
     tspan : number;       /* valid time span (s) */
     pos0:number[/*2*/];     /* reference position {lat,lon} (rad) */
     coef:number[/*3*/][/*2*/];  /* coefficients lat x lon (3 x 2) */
}

export interface stec_t {        /* stec data type */
     time : Date;       /* time (GPST) */
     sat : number;  /* satellite number */
     ion : number;         /* slant ionos delay (m) */
     std : number;          /* std-dev (m) */
     azel : number[/*2*/];      /* azimuth/elevation (rad) */
     flag : number; /* fix flag */
} ;

export interface trop_t {        /* trop data type */
     time : Date;       /* time (GPST) */
     trp : number[/*3*/];      /* zenith tropos delay/gradient (m) */
     std : number[/*3*/];       /* std-dev (m) */
} ;

export interface pppcorr_t {        /* ppp corrections type */
     nsta : number;           /* number of stations */
     stas : string[/*MAXSTA*/];//[8]; /* station names */
     rr : number[/*MAXSTA*/][/*3*/]; /* station ecef positions (m) */
     ns : number[/*MAXSTA*/];nsmax:number[/*MAXSTA*/]; /* number of stec data */
     nt : number[/*MAXSTA*/];ntmax:number[/*MAXSTA*/]; /* number of trop data */
    stec : stec_t [/*MAXSTA*/]; /* stec data */
    trop : trop_t [/*MAXSTA*/]; /* trop data */
} ;

export interface nav_t {        /* navigation data type */
     n :number;nmax :number;         /* number of broadcast ephemeris */
     ng:number;ngmax:number;       /* number of glonass ephemeris */
     ns:number;nsmax:number;       /* number of sbas ephemeris */
     ne:number;nemax:number;       /* number of precise ephemeris */
     nc:number;ncmax:number;       /* number of precise clock */
     na:number;namax:number;       /* number of almanac data */
     nt:number;ntmax:number;       /* number of tec grid data */
     nf:number;nfmax:number;       /* number of satellite fcb data */
    eph : eph_t[];         /* GPS/QZS/GAL ephemeris */
    geph : geph_t [];       /* GLONASS ephemeris */
    seph : seph_t [];       /* SBAS ephemeris */
    peph : peph_t [];       /* precise ephemeris */
    pclk : pclk_t [];       /* precise clock */
    alm : alm_t[];         /* almanac data */
    tec : tec_t[];         /* tec grid data */
    fcb : fcbd_t [];        /* satellite fcb data */
    erp : erp_t  ;         /* earth rotation parameters */
    utc_gps:number[/*4*/];  /* GPS delta-UTC parameters {A0,A1,T,W} */
    utc_glo:number[/*4*/];  /* GLONASS UTC GPS time parameters */
    utc_gal:number[/*4*/];  /* Galileo UTC GPS time parameters */
    utc_qzs:number[/*4*/];  /* QZS UTC GPS time parameters */
    utc_cmp:number[/*4*/];  /* BeiDou UTC parameters */
    utc_irn:number[/*4*/];  /* IRNSS UTC parameters */
    utc_sbs:number[/*4*/];  /* SBAS UTC parameters */
    ion_gps:number[/*8*/];  /* GPS iono model parameters {a0,a1,a2,a3,b0,b1,b2,b3} */
    ion_gal:number[/*4*/];  /* Galileo iono model parameters {ai0,ai1,ai2,0} */
    ion_qzs:number[/*8*/];  /* QZSS iono model parameters {a0,a1,a2,a3,b0,b1,b2,b3} */
    ion_cmp:number[/*8*/];  /* BeiDou iono model parameters {a0,a1,a2,a3,b0,b1,b2,b3} */
    ion_irn:number[/*8*/];  /* IRNSS iono model parameters {a0,a1,a2,a3,b0,b1,b2,b3} */
     leaps : number;          /* leap seconds (s) */
     lam : number[/*MAXSAT*/][/*NFREQ*/]; /* carrier wave lengths (m) */
     cbias:number[/*MAXSAT*/][/*3*/]; /* satellite dcb (0:p1-p2,1:p1-c1,2:p2-c2) (m) */
     rbias:number[/*MAXRCV*/][/*2*/][/*3*/]; /* receiver dcb (0:p1-p2,1:p1-c1,2:p2-c2) (m) */
     wlbias : number[/*MAXSAT*/];   /* wide-lane bias (cycle) */
     glo_cpbias : number[/*4*/];    /* glonass code-phase bias {1C,1P,2C,2P} (m) */
     glo_fcn : number[/*MAXPRNGLO+1*/]; /* glonass frequency channel number + 8 */
     pcvs : pcv_t[/*MAXSAT*/]; /* satellite antenna pcv */
     sbssat : sbssat_t;    /* SBAS satellite corrections */
     sbsion : sbsion_t[/*MAXBAND+1*/]; /* SBAS ionosphere corrections */
     dgps : dgps_t[/*MAXSAT*/]; /* DGPS corrections */
     ssr : ssr_t[/*MAXSAT*/];  /* SSR corrections */
     lexeph : lexeph_t[/*MAXSAT*/]; /* LEX ephemeris */
     lexion : lexion_t;    /* LEX ionosphere correction */
     pppcorr : pppcorr_t;  /* ppp corrections */
} ;

export interface sta_t {        /* station parameter type */
     name   :string;/*[MAXANT]; *//* marker name */
     marker :string;/*[MAXANT]; *//* marker number */
     antdes :string;/*[MAXANT]; *//* antenna descriptor */
     antsno :string;/*[MAXANT]; *//* antenna serial number */
     rectype:string;/*[MAXANT]; *//* receiver type descriptor */
     recver :string;/*[MAXANT]; *//* receiver firmware version */
     recsno :string;/*[MAXANT]; *//* receiver serial number */
     antsetup : number;       /* antenna setup id */
     itrf : number;           /* ITRF realization year */
     deltype : number;        /* antenna delta type (0:enu,1:xyz) */
     pos:number[/*3*/];      /* station position (ecef) (m) */
     del:number[/*3*/];      /* antenna position delta (e/n/u or x/y/z) (m) */
     hgt:number;         /* antenna height (m) */
} ;

export interface sol_t {        /* solution type */
     time : Date;       /* time (GPST) */
     rr : number[/*6*/];       /* position/velocity (m|m/s) */
                        /* {x,y,z,vx,vy,vz} or {e,n,u,ve,vn,vu} */
      qr  : number[/*6*/];       /* position variance/covariance (m^2) */
                        /* {c_xx,c_yy,c_zz,c_xy,c_yz,c_zx} or */
                        /* {c_ee,c_nn,c_uu,c_en,c_nu,c_ue} */
     dtr : number[/*6*/];      /* receiver clock bias to time systems (s) */
     type : number; /* type (0:xyz-ecef,1:enu-baseline) */
     stat : number; /* solution status (SOLQ_???) */
     ns : number;   /* number of valid satellites */
     age:number;          /* age of differential (s) */
     ratio : number;        /* AR ratio factor for valiation */
     thres : number;        /* AR ratio threshold for valiation */
} ;

export interface solbuf_t {        /* solution buffer type */
     n : number;nmax : number;         /* number of solution/max number of buffer */
     cyclic : number;         /* cyclic buffer flag */
     start:number;end : number;      /* start/end index */
     time : Date;       /* current solution time */
    data : sol_t [];        /* solution data */
     rb : number[/*3*/];       /* reference position {x,y,z} (ecef) (m) */
     buff : Buffer;/*[MAXSOLMSG+1];*/ /* message buffer */
     nb : number;             /* number of byte in message buffer */
} ;

export interface solstat_t {        /* solution status type */
     time : Date;       /* time (GPST) */
     sat:number;  /* satellite number */
     frq:number;  /* frequency (1:L1,2:L2,...) */
     az:number;el:number;        /* azimuth/elevation angle (rad) */
     resp:number;         /* pseudorange residual (m) */
     resc:number;         /* carrier-phase residual (m) */
    flag:number; /* flags: (vsat<<5)+(slip<<3)+fix */
    snr : number;  /* signal strength (0.25 dBHz) */
     lock:number;  /* lock counter */
     outc : number;  /* outage counter */
     slipc : number; /* slip counter */
     rejc : number;  /* reject counter */
} ;

export interface solstatbuf_t {        /* solution status buffer type */
     n : number;nmax:number;         /* number of solution/max number of buffer */
    data : solstat_t[];    /* solution status data */
} ;

export interface rtcm_t {        /* RTCM control struct type */
     staid : number;          /* station id */
     stah : number;           /* station health */
     seqno : number;          /* sequence number for rtcm 2 or iods msm */
     outtype : number;        /* output message type */
     time : Date;       /* message time */
     time_s : Date;     /* message start time */
     obs : obs_t;          /* observation data (uncorrected) */
     nav : nav_t;          /* satellite ephemerides */
     sta : sta_t;          /* station parameters */
    dgps : dgps_t[];       /* output of dgps corrections */
     ssr : ssr_t[/*MAXSAT*/];  /* output of ssr corrections */
     msg : Buffer;/*[128];*/      /* special message */
     msgtype : Buffer;/*[256];*/  /* last message type */
     msmtype: Buffer;/*[6][128];*/ /* msm signal types */
     obsflag : number;        /* obs data complete flag (1:ok,0:not complete) */
     ephsat : number;         /* update satellite of ephemeris */
     cp : number[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* carrier-phase measurement */
     lock : number[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* lock time */
     loss : number[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* loss of lock count */
     lltime : Date[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* last lock time */
     nbyte:number;          /* number of bytes in message buffer */ 
     nbit:number;           /* number of bits in word buffer */ 
     len:number;            /* message length (bytes) */
     buff : Buffer;/*[1200];*/ /* message buffer */
     word : number;  /* word buffer for rtcm 2 */
     nmsg2 : number[/*100*/]; /* message count of RTCM 2 (1-99:1-99,0:other) */
     nmsg3 : number[/*400*/]; /* message count of RTCM 3 (1-299:1001-1299,300-399:2000-2099,0:ohter) */
     opt: number[/*256*/];      /* RTCM dependent options */
} ;

export interface rnxctr_t {        /* rinex control struct type */
     time : Date;       /* message time */
     ver : number;         /* rinex version */
       type : string;        /* rinex file type ('O','N',...) */
        sys : number;         /* navigation system */
        tsys : number;        /* time system */
       tobs : number[/*7*/][/*MAXOBSTYPE*/][/*4*/]; /* rinex obs types */
      obs : obs_t;         /* observation data */
      nav : nav_t;         /* navigation data */
      sta : sta_t;         /* station info */
        ephsat : number;      /* ephemeris satellite number */
       opt : Buffer;/*[256];*/    /* rinex dependent options */
} ;

export interface url_t {        /* download url type */
     type : string;/*[32];*/      /* data type */
     path : string;/*[1024];*/    /* url path */
     dir : string;/* [1024];*/    /* local directory */
     tint : number;        /* time interval (s) */
} ;

export interface opt_t {        /* option type */
    name : string;   /* option name */
     format : number;         /* option format (0:int,1:double,2:string,3:enum) */
    var : any;          /* pointer to option variable */
    comment : string; /* option comment/enum labels/unit */
} ;

export interface exterr_t {        /* extended receiver error model */
     ena : number[/*4*/];         /* model enabled */
     cerr:number[/*4*/][/*NFREQ*2*/]; /* code errors (m) */
     perr:number[/*4*/][/*NFREQ*2*/]; /* carrier-phase errors (m) */
     gpsglob:number[/*NFREQ*/]; /* gps-glonass h/w bias (m) */
     gloicb :number[/*NFREQ*/]; /* glonass interchannel bias (m/fn) */
} ;

export interface snrmask_t {        /* SNR mask type */
     ena : number[/*2*/];         /* enable flag {rover,base} */
     mask : number[/*NFREQ*/][/*9*/]; /* mask (dBHz) at 5,10,...85 deg */
} ;

export interface prcopt_t {        /* processing options type */
     mode : number;           /* positioning mode (PMODE_???) */
     soltype : number;        /* solution type (0:forward,1:backward,2:combined) */
     nf : number;             /* number of frequencies (1:L1,2:L1+L2,3:L1+L2+L5) */
     navsys : number;         /* navigation system */
     elmin : number;       /* elevation mask angle (rad) */
     snrmask : snrmask_t;  /* SNR mask */
     sateph : number;         /* satellite ephemeris/clock (EPHOPT_???) */
     modear : number;         /* AR mode (0:off,1:continuous,2:instantaneous,3:fix and hold,4:ppp-ar) */
     glomodear:number;      /* GLONASS AR mode (0:off,1:on,2:auto cal,3:ext cal) */
     bdsmodear : number;      /* BeiDou AR mode (0:off,1:on) */
     maxout : number;         /* obs outage count to reset bias */
     minlock: number;        /* min lock count to fix ambiguity */
     minfix : number;         /* min fix count to hold ambiguity */
     armaxiter:number;      /* max iteration to resolve ambiguity */
     ionoopt:number;        /* ionosphere option (IONOOPT_???) */
     tropopt:number;        /* troposphere option (TROPOPT_???) */
     dynamics:number;       /* dynamics model (0:none,1:velociy,2:accel) */
     tidecorr:number;       /* earth tide correction (0:off,1:solid,2:solid+otl+pole) */
     niter:number;          /* number of filter iteration */
     codesmooth:number;     /* code smoothing window size (0:none) */
     intpref:number;        /* interpolate reference obs (for post mission) */
     sbascorr:number;       /* SBAS correction options */
     sbassatsel:number;     /* SBAS satellite selection (0:all) */
     rovpos:number;         /* rover position for fixed mode */
     refpos:number;         /* base position for relative mode */
                        /* (0:pos in prcopt,  1:average of single pos, */
                        /*  2:read from file, 3:rinex header, 4:rtcm pos) */
     eratio : number[/*NFREQ*/]; /* code/phase error ratio */
     err : number[/*5*/];      /* measurement error factor */
                        /* [0]:reserved */
                        /* [1-3]:error factor a/b/c of phase (m) */
                        /* [4]:doppler frequency (hz) */
     std:number[/*3*/];      /* initial-state std [0]bias,[1]iono [2]trop */
     prn:number[/*6*/];      /* process-noise std [0]bias,[1]iono [2]trop [3]acch [4]accv [5] pos */
     sclkstab:number;    /* satellite clock stability (sec/sec) */
     thresar:number[/*8*/];  /* AR validation threshold */
     elmaskar:number;    /* elevation mask of AR for rising satellite (deg) */
     elmaskhold:number;  /* elevation mask to hold ambiguity (deg) */
     thresslip:number;   /* slip threshold of geometry-free phase (m) */
     maxtdiff:number;    /* max difference of time (sec) */
     maxinno:number;     /* reject threshold of innovation (m) */
     maxgdop:number;     /* reject threshold of gdop */
     baseline:number[/*2*/]; /* baseline length constraint {const,sigma} (m) */
     ru:number[/*3*/];       /* rover position for fixed mode {x,y,z} (ecef) (m) */
     rb:number[/*3*/];       /* base position for relative mode {x,y,z} (ecef) (m) */
     anttype : number[/*2*/][/*MAXANT*/]; /* antenna types {rover,base} */
     antdel : number[/*2*/][/*3*/]; /* antenna delta {{rov_e,rov_n,rov_u},{ref_e,ref_n,ref_u}} */
     pcvr : pcv_t[/*2*/];      /* receiver antenna parameters {rov,base} */
     exsats : number[/*MAXSAT*/]; /* excluded satellites (1:excluded,2:included) */
      maxaveep : number;      /* max averaging epoches */
      initrst : number;       /* initialize by restart */
      outsingle : number;     /* output single by dgps/float/fix/ppp outage */
     rnxopt : number[/*2*][/*256*/]; /* rinex options {rover,base} */
      posopt : number[/*6*/];     /* positioning options */
      syncsol : number;       /* solution sync mode (0:off,1:on) */
     odisp : number[/*2*][/*6*11*/]; /* ocean tide loading parameters {rov,base} */
     exterr : exterr_t;    /* extended receiver error model */
     freqopt : number;        /* disable L2-AR */
     pppopt : string;//[256];   /* ppp option */
} ;

export interface solopt_t {        /* solution options type */
     posf:number;           /* solution format (SOLF_???) */
     times:number;          /* time system (TIMES_???) */
     timef:number;          /* time format (0:sssss.s,1:yyyy/mm/dd hh:mm:ss.s) */
     timeu:number;          /* time digits under decimal point */
     degf:number;           /* latitude/longitude format (0:ddd.ddd,1:ddd mm ss) */
     outhead:number;        /* output header (0:no,1:yes) */
     outopt:number;         /* output processing options (0:no,1:yes) */
     datum : number;          /* datum (0:WGS84,1:Tokyo) */
     height:number;         /* height (0:ellipsoidal,1:geodetic) */
     geoid:number;          /* geoid model (0:EGM96,1:JGD2000) */
     solstatic:number;      /* solution of static mode (0:all,1:single) */
     sstat:number;          /* solution statistics level (0:off,1:states,2:residuals) */
     trace:number;          /* debug trace level (0:off,1-5:debug) */
     nmeaintv : number[/*2*/]; /* nmea output interval (s) (<0:no,0:all) */
                        /* nmeaintv[0]:gprmc,gpgga,nmeaintv[1]:gpgsv */
     sep : string;/*[64];*/       /* field separator */
     prog : string;/*[64];*/      /* program name */
     maxsolstd : number;   /* max std-dev for solution output (m) (0:all) */
} ;

export interface filopt_t {        /* file options type */
     satantp:string;/*[MAXSTRPATH];*/ /* satellite antenna parameters file */
     rcvantp:string;/*[MAXSTRPATH];*/ /* receiver antenna parameters file */
     stapos :string;/*[MAXSTRPATH];*/ /* station positions file */
     geoid  :string;/*[MAXSTRPATH];*/ /* external geoid data file */
     iono   :string;/*[MAXSTRPATH];*/ /* ionosphere data file */
     dcb    :string;/*[MAXSTRPATH];*/ /* dcb data file */
     eop    :string;/*[MAXSTRPATH];*/ /* eop data file */
     blq    :string;/*[MAXSTRPATH];*/ /* ocean tide loading blq file */
     tempdir:string;/*[MAXSTRPATH];*/ /* ftp/http temporaly directory */
     geexe  :string;/*[MAXSTRPATH];*/ /* google earth exec file */
     solstat:string;/*[MAXSTRPATH];*/ /* solution statistics file */
     trace  :string;/*[MAXSTRPATH];*/ /* debug trace file */
} ;

export interface rnxopt_t {        /* RINEX options type */
     ts:Date;te:Date;      /* time start/end */
     tint : number;        /* time interval (s) */
     tunit : number;       /* time unit for multiple-session (s) */
     rnxver : number;      /* RINEX version */
     navsys:number;         /* navigation system */
     obstype:number;        /* observation type */
     freqtype:number;       /* frequency type */
     mask : number[/*7*/][/*64*/];   /* code mask {GPS,GLO,GAL,QZS,SBS,CMP,IRN} */
     staid :string;//[32];    /* station id for rinex file name */
     prog  :string;//[32];    /* program */
     runby :string;//[32];    /* run-by */
     marker:string;//[64];    /* marker name */
     markerno : string;//[32];  /* marker number */
     markertype:string;//[32]; /* marker type (ver.3) */
     name:number[/*2*/][/*32*/];   /* observer/agency */
     rec :number[/*3*/][/*32*/];   /* receiver #/type/vers */
     ant :number[/*3*/][/*32*/];   /* antenna #/type */
     apppos : number[/*3*/];   /* approx position x/y/z */
     antdel : number[/*3*/];   /* antenna delta h/e/n */
     comment : string;//[MAXCOMMENT][64]; /* comments */
     rcvopt : string;//[256];   /* receiver dependent options */
     exsats : number[/*MAXSAT*/]; /* excluded satellites */
     scanobs : number;        /* scan obs types */
     outiono :number;        /* output iono correction */
     outtime :number;        /* output time system correction */
     outleaps:number;       /* output leap seconds */
     autopos :number;        /* auto approx position */
     halfcyc :number;        /* half cycle correction */
     tstart : Date;     /* first obs time */
     tend : Date;       /* last obs time */
     trtcm : Date;      /* approx log start time for rtcm */
     tobs:number[/*7*/][/*MAXOBSTYPE*/][/*4*/]; /* obs types {GPS,GLO,GAL,QZS,SBS,CMP,IRN} */
     nobs : number[/*7*/];        /* number of obs types {GPS,GLO,GAL,QZS,SBS,CMP,IRN} */
} ;

export interface ssat_t {        /* satellite status type */
     sys : number;  /* navigation system */
    vs : number;   /* valid satellite flag single */
     azel:number[/*2*/];     /* azimuth/elevation angles {az,el} (rad) */
     resp:number[/*NFREQ*/]; /* residuals of pseudorange (m) */
     resc:number[/*NFREQ*/]; /* residuals of carrier-phase (m) */
     vsat:number[/*NFREQ*/]; /* valid satellite flag */
     snr :number[/*NFREQ*/]; /* signal strength (0.25 dBHz) */
     fix :number[/*NFREQ*/]; /* ambiguity fix flag (1:fix,2:float,3:hold) */
     slip:number[/*NFREQ*/]; /* cycle-slip flag */
     half:number[/*NFREQ*/]; /* half-cycle valid flag */
     lock : number [/*NFREQ*/];   /* lock counter of phase */
     outc :number[/*NFREQ*/]; /* obs outage counter of phase */
     slipc:number[/*NFREQ*/]; /* cycle-slip counter */
     rejc :number[/*NFREQ*/]; /* reject counter */
    gf :number;         /* geometry-free phase L1-L2 (m) */
    gf2:number;        /* geometry-free phase L1-L5 (m) */
    mw :number;         /* MW-LC (m) */
    phw:number;        /* phase windup (cycle) */
     pt:Date[/*2*/][/*NFREQ*/]; /* previous carrier-phase time */
      ph:number[/*2*/][/*NFREQ*/]; /* previous carrier-phase observable (cycle) */
} ;

export interface ambc_t {        /* ambiguity control type */
     epoch : Date[/*4*/];   /* last epoch */
     n : number[/*4*/];           /* number of epochs */
     LC : number [/*4*/];      /* linear combination average */
     LCv:number[/*4*/];      /* linear combination variance */
     fixcnt : number;         /* fix count */
     flags : number[/*MAXSAT*/]; /* fix flags */
} ;

export interface rtk_t {        /* RTK control/result type */
      sol : sol_t;         /* RTK solution */
     rb : number[/*6*/];       /* base position/velocity (ecef) (m|m/s) */
     nx:number;na:number;          /* number of float states/fixed states */
     tt :number;          /* time difference between current and previous (s) */
    x:number[]; P:number[];      /* float states and their covariance */
    xa:number;Pa:number[];     /* fixed states and their covariance */
     nfix:number;           /* number of continuous fixes of ambiguity */
     ambc : ambc_t[/*MAXSAT*/]; /* ambibuity control */
     ssat : ssat_t[/*MAXSAT*/]; /* satellite status */
     neb : number;            /* bytes in error message buffer */
     errbuf : string;//[MAXERRMSG]; /* error message buffer */
     opt : prcopt_t;       /* processing options */
} ;

export interface  half_cyc_tag {  /* half-cycle correction list type */
     sat : number;  /* satellite number */
     freq : number; /* frequency number (0:L1,1:L2,2:L5) */
     valid : number; /* half-cycle valid flag */
     corr : number;          /* half-cycle corrected (x 0.5 cyc) */
     ts:Date;te:Date;      /* time start, time end */
    next :  half_cyc_tag; /* pointer to next correction */
} ;
export interface half_cyc_t extends half_cyc_tag{};


export interface raw_t {        /* receiver raw data control type */
     time:Date;       /* message time */
     tobs:Date;       /* observation data time */
     obs : obs_t;          /* observation data */
     obuf : obs_t;         /* observation data buffer */
     nav : nav_t;          /* satellite ephemerides */
     sta : sta_t;          /* station parameters */
     ephsat : number;         /* sat number of update ephemeris (0:no satellite) */
     sbsmsg : sbsmsg_t;    /* SBAS message */
     msgtype : string;//[256];  /* last message type */
     subfrm : number[/*MAXSAT*/][/*380*/];  /* subframe buffer */
     lexmsg : lexmsg_t;    /* LEX message */
     lockt: number[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* lock time (s) */
     icpp : number[/*MAXSAT*/];off:number [/*MAXSAT*/];icpc : number; /* carrier params for ss2 */
     prCA : number[/*MAXSAT*/];dpCA:number[/*MAXSAT*/]; /* L1/CA pseudrange/doppler for javad */
     halfc : number[/*MAXSAT*/][/*NFREQ+NEXOBS*/]; /* half-cycle add flag */
     freqn : number[/*MAXOBS*/]; /* frequency number for javad */
     nbyte: number;          /* number of bytes in message buffer */ 
     len:number;            /* message length (bytes) */
     iod:number;            /* issue of data */
     tod:number;            /* time of day (ms) */
     tbase:number;          /* time base (0:gpst,1:utc(usno),2:glonass,3:utc(su) */
     flag:number;           /* general purpose flag */
     outtype:number;        /* output message type */
     buff : Buffer;//[MAXRAWLEN]; /* message buffer */
     opt : Buffer;//[256];      /* receiver dependent options */
    half_cyc : half_cyc_t []; /* half-cycle correction list */
    
     format : number;         /* receiver stream format */
    rcv_data : any;     /* receiver dependent data */
} ;

export interface stream_t {        /* stream type */
     type:number;           /* type (STR_???) */
     mode:number;           /* mode (STR_MODE_?) */
     state:number;          /* state (-1:error,0:close,1:open) */
    inb:number;inr:number;   /* input bytes/rate */
    outb:number;outr:number; /* output bytes/rate */
    tick_i:number; /* input tick tick */
    tick_o:number; /* output tick */
    tact:number;  /* active tick */
    inbt:number;outbt:number; /* input/output bytes at tick */
     //lock : lock_t;        /* lock flag */
    port : any;         /* type dependent port control struct */
     path:string;//[MAXSTRPATH]; /* stream path */
     msg :string;//[MAXSTRMSG];  /* stream message */
} ;

export interface strconv_t {        /* stream converter type */
     itype:number;otype:number;    /* input and output stream type */
     nmsg:number;           /* number of output messages */
     msgs:number[/*32*/];       /* output message types */
     tint : number[/*32*/];    /* output message intervals (s) */
     tick : number[/*32*/]; /* cycle tick of output message */
     ephsat : number[/*32*/];     /* satellites of output ephemeris */
     stasel : number;         /* station info selection (0:remote,1:local) */
     rtcm : rtcm_t;        /* rtcm input data buffer */
     raw : raw_t;          /* raw  input data buffer */
     out : rtcm_t;         /* rtcm output data buffer */
} ;

export interface strsvr_t{        /* stream server type */
     state:number;          /* server state (0:stop,1:running) */
     cycle:number;          /* server cycle (ms) */
     buffsize :number;       /* input/monitor buffer size (bytes) */
     nmeacycle:number;      /* NMEA request cycle (ms) (0:no) */
     relayback:number;      /* relay back of output streams (0:no) */
     nstr:number;           /* number of streams (1 input + (nstr-1) outputs */
     npb:number;            /* data length in peek buffer (bytes) */
     cmds_periodic : number[/*16*/][/*MAXRCVCMD*/]; /* periodic commands */
     nmeapos : number[/*3*/];  /* NMEA request position (ecef) (m) */
    buff:Buffer; /* input buffers */
    pbuf:Buffer; /* peek buffer */
     tick : number;  /* start tick */
     stream : stream_t[/*16*/]; /* input/output streams */
    conv : strconv_t [/*16*/]; /* stream converter */
     //thread : thread_t;    /* server thread */
     //lock : lock_t;        /* lock flag */
} ;

export interface rtksvr_t {        /* RTK server type */
     state : number;          /* server state (0:stop,1:running) */
     cycle : number;          /* processing cycle (ms) */
     nmeacycle : number;      /* NMEA request cycle (ms) (0:no req) */
     nmeareq : number;        /* NMEA request (0:no,1:nmeapos,2:single sol) */
     nmeapos : number[/*3*/];  /* NMEA request position (ecef) (m) */
     buffsize : number;       /* input buffer size (bytes) */
     format : number[/*3*/];      /* input format {rov,base,corr} */
     solopt : solopt_t[/*2*/]; /* output solution options {sol1,sol2} */
     navsel : number;         /* ephemeris select (0:all,1:rover,2:base,3:corr) */
     nsbs:number;           /* number of sbas message */
     nsol:number;           /* number of solution buffer */
     rtk : rtk_t;          /* RTK control/result struct */
     nb :number[/*3*/];         /* bytes in input buffers {rov,base} */
     nsb:number[/*2*/];         /* bytes in soulution buffers */
     npb:number[/*3*/];         /* bytes in input peek buffers */
    buff:Buffer[/*3*/]; /* input buffers {rov,base,corr} */
    sbuf:Buffer[/*2*/]; /* output buffers {sol1,sol2} */
    pbuf:Buffer[/*3*/]; /* peek buffers {rov,base,corr} */
     solbuf : sol_t[/*MAXSOLBUF*/]; /* solution buffer */
     nmsg : number[/*3*/][/*10*/]; /* input message counts */
      raw : raw_t [/*3*/];     /* receiver raw control {rov,base,corr} */
     rtcm : rtcm_t[/*3*/];     /* RTCM control {rov,base,corr} */
     ftime : Date[/*3*/];   /* download time {rov,base,corr} */
     files : string[/*3*/];//[MAXSTRPATH]; /* download paths {rov,base,corr} */
     obs : obs_t[/*3*/];//[MAXOBSBUF]; /* observation data {rov,base,corr} */
     nav : nav_t;          /* navigation data */
     sbsmsg : sbsmsg_t[/*MAXSBSMSG*/]; /* SBAS message buffer */
     stream : stream_t[/*8*/]; /* streams {rov,base,corr,sol1,sol2,logr,logb,logc} */
    moni : stream_t [];     /* monitor stream */
     tick : number;  /* start tick */
     //thread : thread_t;    /* server thread */
     cputime : number;        /* CPU time (ms) for a processing cycle */
     prcout : number;         /* missing observation data count */
     nave : number;           /* number of averaging base pos */
     rb_ave : number[/*3*/];   /* averaging base pos */
     cmds_periodic : string[/*3*/];//[MAXRCVCMD]; /* periodic commands */
     //lock : lock_t;        /* lock flag */
} ;

export interface gis_pnt_t {        /* gis data point type */
     pos : number[/*3*/];      /* point data {lat,lon,height} (rad,m) */
} ;

export interface gis_poly_t {        /* gis data polyline type */
     npnt : number;           /* number of points */
     bound : number[/*4*/];    /* boundary {lat0,lat1,lon0,lon1} */
    pos : number[];        /* position data (3 x npnt) */
} ;

export interface gis_polygon_t {        /* gis data polygon type */
     npnt : number;           /* number of points */
     bound : number[/*4*/];    /* boundary {lat0,lat1,lon0,lon1} */
    pos : number[];        /* position data (3 x npnt) */
} ;

export interface  gisd_tag { /* gis data list type */
     type : number;           /* data type (1:point,2:polyline,3:polygon) */
    data : Buffer;         /* data body */
    next :  gisd_tag; /* pointer to next */
} ;
export interface gisd_t extends gisd_tag{}

export interface gis_t {        /* gis type */
     name : number[/*MAXGISLAYER*/][/*256*/]; /* name */
     flag : number[/*MAXGISLAYER*/];     /* flag */
    data : gisd_t[/*MAXGISLAYER*/]; /* gis data list */
     bound : number[/*4*/];    /* boundary {lat0,lat1,lon0,lon1} */
} ;

type FILE = number;


/* satellites, systems, codes functions --------------------------------------*/

/* satellite system+prn/slot number to satellite number ------------------------
* convert satellite system+prn/slot number to satellite number
* args   : int    sys       I   satellite system (SYS_GPS,SYS_GLO,...)
*          int    prn       I   satellite prn/slot number
* return : satellite number (0:error)
*-----------------------------------------------------------------------------*/
  function satno   ( sys : number,  prn : number) : number{
    throw new Error("not implemented");
  }


/* satellite number to satellite system ----------------------------------------
* convert satellite number to satellite system
* args   : int    sat       I   satellite number (1-MAXSAT)
*          int    *prn      IO  satellite prn/slot number (NULL: no output)
* return : satellite system (SYS_GPS,SYS_GLO,...)
*-----------------------------------------------------------------------------*/  
function   satsys  ( sat : number, prn : number[]) : number{
throw new Error("not implemented");
}


/* satellite id to satellite number --------------------------------------------
* convert satellite id to satellite number
* args   : char   *id       I   satellite id (nn,Gnn,Rnn,Enn,Jnn,Cnn or Snn)
* return : satellite number (0: error)
* notes  : 120-138 and 193-195 are also recognized as sbas and qzss
*-----------------------------------------------------------------------------*/
function   satid2no(id : string) : number{
throw new Error("not implemented");
}

/* satellite number to satellite id --------------------------------------------
* convert satellite number to satellite id
* args   : int    sat       I   satellite number
*          char   *id       O   satellite id (Gnn,Rnn,Enn,Jnn,Cnn or nnn)
* return : none
*-----------------------------------------------------------------------------*/
function  satno2id( sat : number, id : string): void{
throw new Error("not implemented");
}

/* obs type string to obs code -------------------------------------------------
* convert obs code type string to obs code
* args   : char   *str   I      obs code string ("1C","1P","1Y",...)
*          int    *freq  IO     frequency (1:L1,2:L2,3:L5,4:L6,5:L7,6:L8,0:err)
*                               (NULL: no output)
* return : obs code (CODE_???)
* notes  : obs codes are based on reference [6] and qzss extension
*-----------------------------------------------------------------------------*/
function  obs2code(obs : string, freq : number) : number{
throw new Error("not implemented");
}


/* obs code to obs code string -------------------------------------------------
* convert obs code to obs code string
* args   : unsigned char code I obs code (CODE_???)
*          int    *freq  IO     frequency (1:L1,2:L2,3:L5,4:L6,5:L7,6:L8,0:err)
*                               (NULL: no output)
* return : obs code string ("1C","1P","1P",...)
* notes  : obs codes are based on reference [6] and qzss extension
*-----------------------------------------------------------------------------*/

function code2obs(code : number, freq : number) : string{
throw new Error("not implemented");
}


/* test excluded satellite -----------------------------------------------------
* test excluded satellite
* args   : int    sat       I   satellite number
*          int    svh       I   sv health flag
*          prcopt_t *opt    I   processing options (NULL: not used)
* return : status (1:excluded,0:not excluded)
*-----------------------------------------------------------------------------*/
function  satexclude( sat : number,  svh : number, opt : prcopt_t ) : number{
throw new Error("not implemented");
}



/* test SNR mask ---------------------------------------------------------------
* test SNR mask
* args   : int    base      I   rover or base-station (0:rover,1:base station)
*          int    freq      I   frequency (0:L1,1:L2,2:L3,...)
*          double el        I   elevation angle (rad)
*          double snr       I   C/N0 (dBHz)
*          snrmask_t *mask  I   SNR mask
* return : status (1:masked,0:unmasked)
*-----------------------------------------------------------------------------*/
function   testsnr( base : number,  freq : number,  el : number,  snr : number,
                    mask : snrmask_t) : number{
throw new Error("not implemented");
                    }


/* set code priority -----------------------------------------------------------
* set code priority for multiple codes in a frequency
* args   : int    sys     I     system (or of SYS_???)
*          int    freq    I     frequency (1:L1,2:L2,3:L5,4:L6,5:L7,6:L8)
*          char   *pri    I     priority of codes (series of code characters)
*                               (higher priority precedes lower)
* return : none
*-----------------------------------------------------------------------------*/                
function setcodepri( sys : number,  freq : number, pri : string) : void{
throw new Error("not implemented");
}

/* get code priority -----------------------------------------------------------
* get code priority for multiple codes in a frequency
* args   : int    sys     I     system (SYS_???)
*          unsigned char code I obs code (CODE_???)
*          char   *opt    I     code options (NULL:no option)
* return : priority (15:highest-1:lowest,0:error)
*-----------------------------------------------------------------------------*/
function  getcodepri( sys : number,  code : number, opt : string) : number{
throw new Error("not implemented");
}

/* matrix and vector functions -----------------------------------------------*/

/* new matrix ------------------------------------------------------------------
* allocate memory of matrix 
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function mat  ( n:number,  m : number):number{
    throw new Error("not implemented");
}

/* new integer matrix ----------------------------------------------------------
* allocate memory of integer matrix 
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function imat ( n : number,  m : number):number[]{
    throw new Error("not implemented");
}

/* zero matrix -----------------------------------------------------------------
* generate new zero matrix
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function zeros( n : number,  m : number):number[]{
throw new Error("not implemented");
}

/* identity matrix -------------------------------------------------------------
* generate new identity matrix
* args   : int    n         I   number of rows and columns of matrix
* return : matrix pointer (if n<=0, return NULL)
*-----------------------------------------------------------------------------*/
function eye  ( n : number) : number[]{
   throw new Error("not implemented"); 
}

/* inner product ---------------------------------------------------------------
* inner product of vectors
* args   : double *a,*b     I   vector a,b (n x 1)
*          int    n         I   size of vector a,b
* return : a'*b
*-----------------------------------------------------------------------------*/
function  dot (a : number[], b : number[],  n : number):number{
    throw new Error("not implemented");
}

/* euclid norm -----------------------------------------------------------------
* euclid norm of vector
* args   : double *a        I   vector a (n x 1)
*          int    n         I   size of vector a
* return : || a ||
*-----------------------------------------------------------------------------*/
function norm(a : number[],  n : number) : number{throw new Error("not implemented");}

/* outer product of 3d vectors -------------------------------------------------
* outer product of 3d vectors 
* args   : double *a,*b     I   vector a,b (3 x 1)
*          double *c        O   outer product (a x b) (3 x 1)
* return : none
*-----------------------------------------------------------------------------*/
function  cross3(a : number[], b : number[], c : number[]) : void{throw new Error("not implemented");}

/* normalize 3d vector ---------------------------------------------------------
* normalize 3d vector
* args   : double *a        I   vector a (3 x 1)
*          double *b        O   normlized vector (3 x 1) || b || = 1
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function   normv3(a : number[], b : number) : number{throw new Error("not implemented");}

/* copy matrix -----------------------------------------------------------------
* copy matrix
* args   : double *A        O   destination matrix A (n x m)
*          double *B        I   source matrix B (n x m)
*          int    n,m       I   number of rows and columns of matrix
* return : none
*-----------------------------------------------------------------------------*/
function matcpy(A : number[], B : number[],  n : number,  m : number) : void{throw new Error("not implemented");}

/* multiply matrix (wrapper of blas dgemm) -------------------------------------
* multiply matrix by matrix (C=alpha*A*B+beta*C)
* args   : char   *tr       I  transpose flags ("N":normal,"T":transpose)
*          int    n,k,m     I  size of (transposed) matrix A,B
*          double alpha     I  alpha
*          double *A,*B     I  (transposed) matrix A (n x m), B (m x k)
*          double beta      I  beta
*          double *C        IO matrix C (n x k)
* return : none
*-----------------------------------------------------------------------------*/
function matmul(tr : string,  n : number,  k : number,  m : number,  alpha : number,
                   A : number[], B : number[],  beta : number, C : number[]) : void{throw new Error("not implemented");}

/* inverse of matrix -----------------------------------------------------------
* inverse of matrix (A=A^-1)
* args   : double *A        IO  matrix (n x n)
*          int    n         I   size of matrix A
* return : status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function  matinv(A : number[],  n : number) : number{throw new Error("not implemented");}

/* solve linear equation -------------------------------------------------------
* solve linear equation (X=A\Y or X=A'\Y)
* args   : char   *tr       I   transpose flag ("N":normal,"T":transpose)
*          double *A        I   input matrix A (n x n)
*          double *Y        I   input matrix Y (n x m)
*          int    n,m       I   size of matrix A,Y
*          double *X        O   X=A\Y or X=A'\Y (n x m)
* return : status (0:ok,0>:error)
* notes  : matirix stored by column-major order (fortran convention)
*          X can be same as Y
*-----------------------------------------------------------------------------*/
function   solve (tr : string, A : number[], Y : number[],  n : number,
                    m : number, X : number[]) : number{throw new Error("not implemented");}

/* least square estimation -----------------------------------------------------
* least square estimation by solving normal equation (x=(A*A')^-1*A*y)
* args   : double *A        I   transpose of (weighted) design matrix (n x m)
*          double *y        I   (weighted) measurements (m x 1)
*          int    n,m       I   number of parameters and measurements (n<=m)
*          double *x        O   estmated parameters (n x 1)
*          double *Q        O   esimated parameters covariance matrix (n x n)
* return : status (0:ok,0>:error)
* notes  : for weighted least square, replace A and y by A*w and w*y (w=W^(1/2))
*          matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/
function  lsq   (A : number[], y : number[],  n : number,  m : number, x : number[],
                   Q : number[]): number {throw new Error("not implemented");}


/* kalman filter ---------------------------------------------------------------
* kalman filter state update as follows:
*
*   K=P*H*(H'*P*H+R)^-1, xp=x+K*v, Pp=(I-K*H')*P
*
* args   : double *x        I   states vector (n x 1)
*          double *P        I   covariance matrix of states (n x n)
*          double *H        I   transpose of design matrix (n x m)
*          double *v        I   innovation (measurement - model) (m x 1)
*          double *R        I   covariance matrix of measurement error (m x m)
*          int    n,m       I   number of states and measurements
*          double *xp       O   states vector after update (n x 1)
*          double *Pp       O   covariance matrix of states after update (n x n)
* return : status (0:ok,<0:error)
* notes  : matirix stored by column-major order (fortran convention)
*          if state x[i]==0.0, not updates state x[i]/P[i+i*n]
*-----------------------------------------------------------------------------*/
function   filter( x : number[], P : number[], H : number[], v : number,
                   R : number[],  n : number, m : number) : number{throw new Error("not implemented");}



/* smoother --------------------------------------------------------------------
* combine forward and backward filters by fixed-interval smoother as follows:
*
*   xs=Qs*(Qf^-1*xf+Qb^-1*xb), Qs=(Qf^-1+Qb^-1)^-1)
*
* args   : double *xf       I   forward solutions (n x 1)
* args   : double *Qf       I   forward solutions covariance matrix (n x n)
*          double *xb       I   backward solutions (n x 1)
*          double *Qb       I   backward solutions covariance matrix (n x n)
*          int    n         I   number of solutions
*          double *xs       O   smoothed solutions (n x 1)
*          double *Qs       O   smoothed solutions covariance matrix (n x n)
* return : status (0:ok,0>:error)
* notes  : see reference [4] 5.2
*          matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/

function   smoother(xf : number[], Qf : number[], xb : number[],
                     Qb : number[], n : number, xs : number[], Qs : number[]) : number{throw new Error("not implemented");}


/* print matrix ----------------------------------------------------------------
* print matrix to stdout
* args   : double *A        I   matrix A (n x m)
*          int    n,m       I   number of rows and columns of A
*          int    p,q       I   total columns, columns under decimal point
*         (FILE  *fp        I   output file pointer)
* return : none
* notes  : matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/
function matprint (A:number[],  n : number,  m:number,  p : number,  q : number) : void{throw new Error("not implemented");}
function matfprint(A:number[],  n : number,  m:number,  p : number,  q : number, fp : FILE) : void{throw new Error("not implemented");}


/* add fatal callback function -------------------------------------------------
* add fatal callback function for mat(),zeros(),imat()
* args   : fatalfunc_t *func I  callback function
* return : none
* notes  : if malloc() failed in return : none
*-----------------------------------------------------------------------------*/
function add_fatal(func : Function/*fatalfunc_t*/) : void{throw new Error("not implemented");}

/* time and string functions -------------------------------------------------*/


/* string to number ------------------------------------------------------------
* convert substring in string to number
* args   : char   *s        I   string ("... nnn.nnn ...")
*          int    i,n       I   substring position and width
* return : converted number (0.0:error)
*-----------------------------------------------------------------------------*/
function   str2num( s : string,  i : number,  n : number):number{throw new Error("not implemented");}


/* string to time --------------------------------------------------------------
* convert substring in string to gtime_t struct
* args   : char   *s        I   string ("... yyyy mm dd hh mm ss ...")
*          int    i,n       I   substring position and width
*          gtime_t *t       O   gtime_t struct
* return : status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function      str2time(s : string,  i : number,  n : number, t : Date):number{throw new Error("not implemented");}


/* time to string --------------------------------------------------------------
* convert gtime_t struct to string
* args   : gtime_t t        I   gtime_t struct
*          char   *s        O   string ("yyyy/mm/dd hh:mm:ss.ssss")
*          int    n         I   number of decimals
* return : none
*-----------------------------------------------------------------------------*/
export function  time2str(t : Date, str : string,  n : number) : string{throw new Error("not implemented");}


/* convert calendar day/time to time -------------------------------------------
* convert calendar day/time to gtime_t struct
* args   : double *ep       I   day/time {year,month,day,hour,min,sec}
* return : gtime_t struct
* notes  : proper in 1970-2037 or 1970-2099 (64bit time_t)
*-----------------------------------------------------------------------------*/
export function  epoch2time(ep : number[]) : Date{throw new Error("not implemented");}

/* time to calendar day/time ---------------------------------------------------
* convert gtime_t struct to calendar day/time
* args   : gtime_t t        I   gtime_t struct
*          double *ep       O   day/time {year,month,day,hour,min,sec}
* return : none
* notes  : proper in 1970-2037 or 1970-2099 (64bit time_t)
*-----------------------------------------------------------------------------*/
function     time2epoch( t : Date, ep : number[]) : void{throw new Error("not implemented");}

/* gps time to time ------------------------------------------------------------
* convert week and tow in gps time to gtime_t struct
* args   : int    week      I   week number in gps time
*          double sec       I   time of week in gps time (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function  gpst2time( week : number,  sec : number) : Date{throw new Error("not implemented");}

/* time to gps time ------------------------------------------------------------
* convert gtime_t struct to week and tow in gps time
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in gps time (NULL: no output)
* return : time of week in gps time (s)
*-----------------------------------------------------------------------------*/
function  time2gpst(t : Date, week : number) : number {throw new Error("not implemented");}

/* galileo system time to time -------------------------------------------------
* convert week and tow in galileo system time (gst) to gtime_t struct
* args   : int    week      I   week number in gst
*          double sec       I   time of week in gst (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function gst2time(week : number,  sec : number) : Date{throw new Error("not implemented");}

/* time to galileo system time -------------------------------------------------
* convert gtime_t struct to week and tow in galileo system time (gst)
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in gst (NULL: no output)
* return : time of week in gst (s)
*-----------------------------------------------------------------------------*/
function time2gst(t : Date, week : number) : number{throw new Error("not implemented");}

/* beidou time (bdt) to time ---------------------------------------------------
* convert week and tow in beidou time (bdt) to gtime_t struct
* args   : int    week      I   week number in bdt
*          double sec       I   time of week in bdt (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function bdt2time(week : number, sec : number) : Date{throw new Error("not implemented");}

/* time to beidouo time (bdt) --------------------------------------------------
* convert gtime_t struct to week and tow in beidou time (bdt)
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in bdt (NULL: no output)
* return : time of week in bdt (s)
*-----------------------------------------------------------------------------*/
function time2bdt(t : Date, week : number) : number{throw new Error("not implemented");}

/* get time string -------------------------------------------------------------
* get time string
* args   : gtime_t t        I   gtime_t struct
*          int    n         I   number of decimals
* return : time string
* notes  : not reentrant, do not use multiple in a function
*-----------------------------------------------------------------------------*/
function time_str(t : Date, n : number) : string{throw new Error("not implemented");}

/* add time --------------------------------------------------------------------
* add time to gtime_t struct
* args   : gtime_t t        I   gtime_t struct
*          double sec       I   time to add (s)
* return : gtime_t struct (t+sec)
*-----------------------------------------------------------------------------*/
function timeadd  (t : Date, sec : number) : Date{throw new Error("not implemented");}

/* time difference -------------------------------------------------------------
* difference between gtime_t structs
* args   : gtime_t t1,t2    I   gtime_t structs
* return : time difference (t1-t2) (s)
*-----------------------------------------------------------------------------*/
function timediff (t1 : Date, t2 : Date) : number{throw new Error("not implemented");}

/* gpstime to utc --------------------------------------------------------------
* convert gpstime to utc considering leap seconds
* args   : gtime_t t        I   time expressed in gpstime
* return : time expressed in utc
* notes  : ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function gpst2utc (t : Date) : Date{throw new Error("not implemented");}


/* utc to gpstime --------------------------------------------------------------
* convert utc to gpstime considering leap seconds
* args   : gtime_t t        I   time expressed in utc
* return : time expressed in gpstime
* notes  : ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function utc2gpst (t : Date) : Date{throw new Error("not implemented");}

/* gpstime to bdt --------------------------------------------------------------
* convert gpstime to bdt (beidou navigation satellite system time)
* args   : gtime_t t        I   time expressed in gpstime
* return : time expressed in bdt
* notes  : ref [8] 3.3, 2006/1/1 00:00 BDT = 2006/1/1 00:00 UTC
*          no leap seconds in BDT
*          ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function gpst2bdt (t : Date) : Date{throw new Error("not implemented");}


/* bdt to gpstime --------------------------------------------------------------
* convert bdt (beidou navigation satellite system time) to gpstime
* args   : gtime_t t        I   time expressed in bdt
* return : time expressed in gpstime
* notes  : see gpst2bdt()
*-----------------------------------------------------------------------------*/
function bdt2gpst (t : Date) : Date{throw new Error("not implemented");}

/* get current time in utc -----------------------------------------------------
* get current time in utc
* args   : none
* return : current time in utc
*-----------------------------------------------------------------------------*/
function timeget  () : Date{throw new Error("not implemented");}

/* set current time in utc -----------------------------------------------------
* set current time in utc
* args   : gtime_t          I   current time in utc
* return : none
* notes  : just set time offset between cpu time and current time
*          the time offset is reflected to only timeget()
*          not reentrant
*-----------------------------------------------------------------------------*/
function timeset  (t : Date) : void{throw new Error("not implemented");}

/* time to day of year ---------------------------------------------------------
* convert time to day of year
* args   : gtime_t t        I   gtime_t struct
* return : day of year (days)
*-----------------------------------------------------------------------------*/
function time2doy (t : Date) : number{throw new Error("not implemented");}

/* utc to gmst -----------------------------------------------------------------
* convert utc to gmst (Greenwich mean sidereal time)
* args   : gtime_t t        I   time expressed in utc
*          double ut1_utc   I   UT1-UTC (s)
* return : gmst (rad)
*-----------------------------------------------------------------------------*/
function utc2gmst (t : Date, ut1_utc : number) : number{throw new Error("not implemented");}

/* read leap seconds table -----------------------------------------------------
* read leap seconds table
* args   : char    *file    I   leap seconds table file
* return : status (1:ok,0:error)
* notes  : (1) The records in the table file cosist of the following fields:
*              year month day hour min sec UTC-GPST(s)
*          (2) The date and time indicate the start UTC time for the UTC-GPST
*          (3) The date and time should be descending order.
*-----------------------------------------------------------------------------*/
function read_leaps(file : string) : number{throw new Error("not implemented");}

/* adjust gps week number ------------------------------------------------------
* adjust gps week number using cpu time
* args   : int   week       I   not-adjusted gps week number
* return : adjusted gps week number
*-----------------------------------------------------------------------------*/
function adjgpsweek(week : number) : number{throw new Error("not implemented");}

/* get tick time ---------------------------------------------------------------
* get current tick in ms
* args   : none
* return : current tick in ms
*-----------------------------------------------------------------------------*/
function tickget() : number{throw new Error("not implemented");}

/* sleep ms --------------------------------------------------------------------
* sleep ms
* args   : int   ms         I   miliseconds to sleep (<0:no sleep)
* return : none
*-----------------------------------------------------------------------------*/
function sleepms(ms : number) : void{
    throw new Error("not implemented");
}

/* replace keywords in file path -----------------------------------------------
* replace keywords in file path with date, time, rover and base station id
* args   : char   *path     I   file path (see below)
*          char   *rpath    O   file path in which keywords replaced (see below)
*          gtime_t time     I   time (gpst)  (time.time==0: not replaced)
*          char   *rov      I   rover id string        ("": not replaced)
*          char   *base     I   base station id string ("": not replaced)
* return : status (1:keywords replaced, 0:no valid keyword in the path,
*                  -1:no valid time)
* notes  : the following keywords in path are replaced by date, time and name
*              %Y -> yyyy : year (4 digits) (1900-2099)
*              %y -> yy   : year (2 digits) (00-99)
*              %m -> mm   : month           (01-12)
*              %d -> dd   : day of month    (01-31)
*              %h -> hh   : hours           (00-23)
*              %M -> mm   : minutes         (00-59)
*              %S -> ss   : seconds         (00-59)
*              %n -> ddd  : day of year     (001-366)
*              %W -> wwww : gps week        (0001-9999)
*              %D -> d    : day of gps week (0-6)
*              %H -> h    : hour code       (a=0,b=1,c=2,...,x=23)
*              %ha-> hh   : 3 hours         (00,03,06,...,21)
*              %hb-> hh   : 6 hours         (00,06,12,18)
*              %hc-> hh   : 12 hours        (00,12)
*              %t -> mm   : 15 minutes      (00,15,30,45)
*              %r -> rrrr : rover id
*              %b -> bbbb : base station id
*-----------------------------------------------------------------------------*/
function reppath(path : string, rpath : string, time : Date, rov : string,
                   base : string) : number{throw new Error("not implemented");}


/* replace keywords in file path and generate multiple paths -------------------
* replace keywords in file path with date, time, rover and base station id
* generate multiple keywords-replaced paths
* args   : char   *path     I   file path (see below)
*          char   *rpath[]  O   file paths in which keywords replaced
*          int    nmax      I   max number of output file paths
*          gtime_t ts       I   time start (gpst)
*          gtime_t te       I   time end   (gpst)
*          char   *rov      I   rover id string        ("": not replaced)
*          char   *base     I   base station id string ("": not replaced)
* return : number of replaced file paths
* notes  : see reppath() for replacements of keywords.
*          minimum interval of time replaced is 900s.
*-----------------------------------------------------------------------------*/
function reppaths(path : string, rpaths : string[],  nmax : number, ts : Date,
                    te : Date, rov : string, base : string) : number{throw new Error("not implemented");}



/* coordinates transformation ------------------------------------------------*/

/* transform ecef to geodetic postion ------------------------------------------
* transform ecef position to geodetic position
* args   : double *r        I   ecef position {x,y,z} (m)
*          double *pos      O   geodetic position {lat,lon,h} (rad,m)
* return : none
* notes  : WGS84, ellipsoidal height
*-----------------------------------------------------------------------------*/
export function ecef2pos(r  :number[], pos : number[]):void{throw new Error("not implemented");}


/* transform geodetic to ecef position -----------------------------------------
* transform geodetic position to ecef position
* args   : double *pos      I   geodetic position {lat,lon,h} (rad,m)
*          double *r        O   ecef position {x,y,z} (m)
* return : none
* notes  : WGS84, ellipsoidal height
*-----------------------------------------------------------------------------*/
export function pos2ecef(pos:number[], r : number[]):void{throw new Error("not implemented");}

/* transform ecef vector to local tangental coordinate -------------------------
* transform ecef vector to local tangental coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *r        I   vector in ecef coordinate {x,y,z}
*          double *e        O   vector in local tangental coordinate {e,n,u}
* return : none
*-----------------------------------------------------------------------------*/
export function ecef2enu(pos:number[], r:number[], e: number[]):void{throw new Error("not implemented");}

/* transform local vector to ecef coordinate -----------------------------------
* transform local tangental coordinate vector to ecef
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *e        I   vector in local tangental coordinate {e,n,u}
*          double *r        O   vector in ecef coordinate {x,y,z}
* return : none
*-----------------------------------------------------------------------------*/
export function enu2ecef(pos:number[], e:number[], r: number[]):void{throw new Error("not implemented");}


/* transform covariance to local tangental coordinate --------------------------
* transform ecef covariance to local tangental coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *P        I   covariance in ecef coordinate
*          double *Q        O   covariance in local tangental coordinate
* return : none
*-----------------------------------------------------------------------------*/
export function covenu  (pos:number[], P:number[], Q: number[]):void{throw new Error("not implemented");}

/* transform local enu coordinate covariance to xyz-ecef -----------------------
* transform local enu covariance to xyz-ecef coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *Q        I   covariance in local enu coordinate
*          double *P        O   covariance in xyz-ecef coordinate
* return : none
*-----------------------------------------------------------------------------*/
export function covecef (pos:number[], Q:number[], P: number[]):void{throw new Error("not implemented");}


/* ecef to local coordinate transfromation matrix ------------------------------
* compute ecef to local coordinate transfromation matrix
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *E        O   ecef to local coord transformation matrix (3x3)
* return : none
* notes  : matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/
export function xyz2enu (pos:number[], E : number[]):void{throw new Error("not implemented");}

/* eci to ecef transformation matrix -------------------------------------------
* compute eci to ecef transformation matrix
* args   : gtime_t tutc     I   time in utc
*          double *erpv     I   erp values {xp,yp,ut1_utc,lod} (rad,rad,s,s/d)
*          double *U        O   eci to ecef transformation matrix (3 x 3)
*          double *gmst     IO  greenwich mean sidereal time (rad)
*                               (NULL: no output)
* return : none
* note   : see ref [3] chap 5
*          not thread-safe
*-----------------------------------------------------------------------------*/
export function eci2ecef( tutc : Date, erpv : number[], U : number[], gmst : number[]):void{throw new Error("not implemented");}

/* convert degree to deg-min-sec -----------------------------------------------
* convert degree to degree-minute-second
* args   : double deg       I   degree
*          double *dms      O   degree-minute-second {deg,min,sec}
* return : none
*-----------------------------------------------------------------------------*/
export function deg2dms ( deg : number, dms : number[],  ndec : number):void{throw new Error("not implemented");}

/* convert deg-min-sec to degree -----------------------------------------------
* convert degree-minute-second to degree
* args   : double *dms      I   degree-minute-second {deg,min,sec}
* return : degree
*-----------------------------------------------------------------------------*/
export function  dms2deg(dms : number[]) : number{throw new Error("not implemented");}



/* input and output functions ------------------------------------------------*/

/* read station positions ------------------------------------------------------
* read positions from station position file
* args   : char  *file      I   station position file containing
*                               lat(deg) lon(deg) height(m) name in a line
*          char  *rcvs      I   station name
*          double *pos      O   station position {lat,lon,h} (rad/m)
*                               (all 0 if search error)
* return : none
*-----------------------------------------------------------------------------*/
function  readpos(file : string, rcv : string, pos : number[]) : void{throw new Error("not implemented");}


/* sort and unique observation data --------------------------------------------
* sort and unique observation data by time, rcv, sat
* args   : obs_t *obs    IO     observation data
* return : number of epochs
*-----------------------------------------------------------------------------*/
function sortobs(obs : obs_t) : number{throw new Error("not implemented");}


/* unique ephemerides ----------------------------------------------------------
* unique ephemerides in navigation data and update carrier wave length
* args   : nav_t *nav    IO     navigation data
* return : number of epochs
*-----------------------------------------------------------------------------*/
function uniqnav(nav : nav_t) : void{throw new Error("not implemented");}


/* screen by time --------------------------------------------------------------
* screening by time start, time end, and time interval
* args   : gtime_t time  I      time
*          gtime_t ts    I      time start (ts.time==0:no screening by ts)
*          gtime_t te    I      time end   (te.time==0:no screening by te)
*          double  tint  I      time interval (s) (0.0:no screen by tint)
* return : 1:on condition, 0:not on condition
*-----------------------------------------------------------------------------*/
function screent(time : Date, ts : Date, te : Date, tint : number) : number{throw new Error("not implemented");}


/* read/save navigation data ---------------------------------------------------
* save or load navigation data
* args   : char    file  I      file path
*          nav_t   nav   O/I    navigation data
* return : status (1:ok,0:no file)
*-----------------------------------------------------------------------------*/
function readnav(file : string, nav : nav_t) : number{throw new Error("not implemented");}


 /* save navigation data savenav(NAVIFILE,&svr.nav) */
function  savenav(file : string, nav : nav_t ) : number{throw new Error("not implemented");}


/* free observation data -------------------------------------------------------
* free memory for observation data
* args   : obs_t *obs    IO     observation data
* return : none
*-----------------------------------------------------------------------------*/
function freeobs(obs : obs_t) : void{throw new Error("not implemented");}


/* free navigation data ---------------------------------------------------------
* free memory for navigation data
* args   : nav_t *nav    IO     navigation data
*          int   opt     I      option (or of followings)
*                               (0x01: gps/qzs ephmeris, 0x02: glonass ephemeris,
*                                0x04: sbas ephemeris,   0x08: precise ephemeris,
*                                0x10: precise clock     0x20: almanac,
*                                0x40: tec data)
* return : none
*-----------------------------------------------------------------------------*/
function freenav(nav : nav_t, opt : number) : void{throw new Error("not implemented");}


/* read blq ocean tide loading parameters --------------------------------------
* read blq ocean tide loading parameters
* args   : char   *file       I   BLQ ocean tide loading parameter file
*          char   *sta        I   station name
*          double *odisp      O   ocean tide loading parameters
* return : status (1:ok,0:file open error)
*-----------------------------------------------------------------------------*/
function readblq(file : string, sta : string, odisp : number) : number{throw new Error("not implemented");}

/* read earth rotation parameters ----------------------------------------------
* read earth rotation parameters
* args   : char   *file       I   IGS ERP file (IGS ERP ver.2)
*          erp_t  *erp        O   earth rotation parameters
* return : status (1:ok,0:file open error)
*-----------------------------------------------------------------------------*/
function readerp(file : string, erp : erp_t) : number{throw new Error("not implemented");}


/* get earth rotation parameter values -----------------------------------------
* get earth rotation parameter values
* args   : erp_t  *erp        I   earth rotation parameters
*          gtime_t time       I   time (gpst)
*          double *erpv       O   erp values {xp,yp,ut1_utc,lod} (rad,rad,s,s/d)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function geterp (erp : erp_t, time : Date, val : number[]) : number{throw new Error("not implemented");}



/* debug trace functions -----------------------------------------------------*/
function  traceopen(file : string) : void{throw new Error("not implemented");}
function  traceclose() : void{throw new Error("not implemented");}
function  tracelevel( level:number) : void{throw new Error("not implemented");}
function  trace     ( level:number, format : string, ...args:any[]) : void{throw new Error("not implemented");}
function  tracet    ( level:number, format : string, ...args:any[]) : void{throw new Error("not implemented");}
function  tracemat  ( level:number, A : number[], n : number, m : number, p : number, q : number) : void{throw new Error("not implemented");}
function  traceobs  ( level:number,  obs : obsd_t ,  n : number) : void{throw new Error("not implemented");}
function  tracenav  ( level:number, nav :  nav_t): void{throw new Error("not implemented");}
function  tracegnav ( level:number,  nav : nav_t): void{throw new Error("not implemented");}
function  tracehnav ( level:number,  nav : nav_t): void{throw new Error("not implemented");}
function  tracepeph ( level:number,  nav : nav_t): void{throw new Error("not implemented");}
function  tracepclk ( level:number,  nav : nav_t): void{throw new Error("not implemented");}
function  traceb    ( level:number,  p : Buffer, n : number) : void{throw new Error("not implemented");}



/* platform dependent functions ----------------------------------------------*/

/* execute command -------------------------------------------------------------
* execute command line by operating system shell
* args   : char   *cmd      I   command line
* return : execution status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function execcmd(cmd : string) : number{throw new Error("not implemented");}

/* expand file path ------------------------------------------------------------
* expand file path with wild-card (*) in file
* args   : char   *path     I   file path to expand (captal insensitive)
*          char   *paths    O   expanded file paths
*          int    nmax      I   max number of expanded file paths
* return : number of expanded file paths
* notes  : the order of expanded files is alphabetical order
*-----------------------------------------------------------------------------*/
function expath (path : string, paths : string[], nmax : number) : number{throw new Error("not implemented");}

/* create directory ------------------------------------------------------------
* create directory if not exist
* args   : char   *path     I   file path to be saved
* return : none
* notes  : not recursive. only one level
*-----------------------------------------------------------------------------*/
function createdir(path : string) : void{throw new Error("not implemented");}



/* positioning models --------------------------------------------------------*/


/* satellite carrier wave length -----------------------------------------------
* get satellite carrier wave lengths
* args   : int    sat       I   satellite number
*          int    frq       I   frequency index (0:L1,1:L2,2:L5/3,...)
*          nav_t  *nav      I   navigation messages
* return : carrier wave length (m) (0.0: error)
*-----------------------------------------------------------------------------*/
function satwavelen(sat : number, frq : number, nav :  nav_t) : number{throw new Error("not implemented");}

/* satellite azimuth/elevation angle -------------------------------------------
* compute satellite azimuth/elevation angle
* args   : double *pos      I   geodetic position {lat,lon,h} (rad,m)
*          double *e        I   receiver-to-satellilte unit vevtor (ecef)
*          double *azel     IO  azimuth/elevation {az,el} (rad) (NULL: no output)
*                               (0.0<=azel[0]<2*pi,-pi/2<=azel[1]<=pi/2)
* return : elevation angle (rad)
*-----------------------------------------------------------------------------*/
function satazel(pos : number[], e : number[], azel : number[]) : number{throw new Error("not implemented");}

/* geometric distance ----------------------------------------------------------
* compute geometric distance and receiver-to-satellite unit vector
* args   : double *rs       I   satellilte position (ecef at transmission) (m)
*          double *rr       I   receiver position (ecef at reception) (m)
*          double *e        O   line-of-sight vector (ecef)
* return : geometric distance (m) (0>:error/no satellite position)
* notes  : distance includes sagnac effect correction
*-----------------------------------------------------------------------------*/
function geodist(rs : number[], rr : number[], e : number[]) : number{throw new Error("not implemented");}

/* compute dops ----------------------------------------------------------------
* compute DOP (dilution of precision)
* args   : int    ns        I   number of satellites
*          double *azel     I   satellite azimuth/elevation angle (rad)
*          double elmin     I   elevation cutoff angle (rad)
*          double *dop      O   DOPs {GDOP,PDOP,HDOP,VDOP}
* return : none
* notes  : dop[0]-[3] return 0 in case of dop computation error
*-----------------------------------------------------------------------------*/
function dops(ns : number, azel : number[], elmin : number, dop : number) : void{throw new Error("not implemented");}

/* carrier smoothing -----------------------------------------------------------
* carrier smoothing by Hatch filter
* args   : obs_t  *obs      IO  raw observation data/smoothed observation data
*          int    ns        I   smoothing window size (epochs)
* return : none
*-----------------------------------------------------------------------------*/
function csmooth(obs : obs_t,  ns : number) : void{throw new Error("not implemented");}

/* atmosphere models ---------------------------------------------------------*/

/* ionosphere model ------------------------------------------------------------
* compute ionospheric delay by broadcast ionosphere model (klobuchar model)
* args   : gtime_t t        I   time (gpst)
*          double *ion      I   iono model parameters {a0,a1,a2,a3,b0,b1,b2,b3}
*          double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
* return : ionospheric delay (L1) (m)
*-----------------------------------------------------------------------------*/
export function ionmodel( t : Date, ion : number[], pos : number[],
                       azel : number[]):number{throw new Error("not implemented");}

/* ionosphere mapping function -------------------------------------------------
* compute ionospheric delay mapping function by single layer model
* args   : double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
* return : ionospheric mapping function
*-----------------------------------------------------------------------------*/                 
function ionmapf(pos : number[], azel : number[]) : number{throw new Error("not implemented");}


/* ionospheric pierce point position -------------------------------------------
* compute ionospheric pierce point (ipp) position and slant factor
* args   : double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          double re        I   earth radius (km)
*          double hion      I   altitude of ionosphere (km)
*          double *posp     O   pierce point position {lat,lon,h} (rad,m)
* return : slant factor
* notes  : see ref [2], only valid on the earth surface
*          fixing bug on ref [2] A.4.4.10.1 A-22,23
*-----------------------------------------------------------------------------*/
function ionppp(pos : number[], azel : number[], re : number,
                     hion : number, pppos : number[]) : number{throw new Error("not implemented");}

/* troposphere model -----------------------------------------------------------
* compute tropospheric delay by standard atmosphere and saastamoinen model
* args   : gtime_t time     I   time
*          double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          double humi      I   relative humidity
* return : tropospheric delay (m)
*-----------------------------------------------------------------------------*/
export function tropmodel( time : Date, pos : number[], azel : number[],
                         humi : number) : number{throw new Error("not implemented");}




/* troposphere mapping function ------------------------------------------------
* compute tropospheric mapping function by NMF
* args   : gtime_t t        I   time
*          double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          double *mapfw    IO  wet mapping function (NULL: not output)
* return : dry mapping function
* note   : see ref [5] (NMF) and [9] (GMF)
*          original JGR paper of [5] has bugs in eq.(4) and (5). the corrected
*          paper is obtained from:
*          ftp://web.haystack.edu/pub/aen/nmf/NMF_JGR.pdf
*-----------------------------------------------------------------------------*/

interface IPosition{
    lat:number;
    lon:number;
    h:number;
}

interface IAzimuthElevation{
    az : number;
    el : number;
}

interface ITropmapfReturn{
    mapfw : number;
    mapfd : number;
}

export function tropmapf( time : Date, pos : IPosition | number[], azel : IAzimuthElevation | number[],
                       mapfw : number): ITropmapfReturn{throw new Error("not implemented");}


/* ionosphere model by tec grid data -------------------------------------------
* compute ionospheric delay by tec grid data
* args   : gtime_t time     I   time (gpst)
*          nav_t  *nav      I   navigation data
*          double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          int    opt       I   model option
*                                bit0: 0:earth-fixed,1:sun-fixed
*                                bit1: 0:single-layer,1:modified single-layer
*          double *delay    O   ionospheric delay (L1) (m)
*          double *var      O   ionospheric dealy (L1) variance (m^2)
* return : status (1:ok,0:error)
* notes  : before calling the function, read tec grid data by calling readtec()
*          return ok with delay=0 and var=VAR_NOTEC if el<MIN_EL or h<MIN_HGT
*-----------------------------------------------------------------------------*/
function iontec(time : Date, nav :  nav_t, pos : number[],
                  azel : number[],  opt : number, delay : number, variance : number) : number{throw new Error("not implemented");}


/* read ionex tec grid file ----------------------------------------------------
* read ionex ionospheric tec grid file
* args   : char   *file       I   ionex tec grid file
*                                 (wind-card * is expanded)
*          nav_t  *nav        IO  navigation data
*                                 nav->nt, nav->ntmax and nav->tec are modified
*          int    opt         I   read option (1: no clear of tec data,0:clear)
* return : none
* notes  : see ref [1]
*-----------------------------------------------------------------------------*/
function readtec(file : string, nav : nav_t,  opt : number) : void{throw new Error("not implemented");}


/* ionospheric correction ------------------------------------------------------
* compute ionospheric correction
* args   : gtime_t time     I   time
*          nav_t  *nav      I   navigation data
*          int    sat       I   satellite number
*          double *pos      I   receiver position {lat,lon,h} (rad|m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          int    ionoopt   I   ionospheric correction option (IONOOPT_???)
*          double *ion      O   ionospheric delay (L1) (m)
*          double *var      O   ionospheric delay (L1) variance (m^2)
* return : status(1:ok,0:error)
*-----------------------------------------------------------------------------*/
function ionocorr(time : Date, nav : nav_t,  sat : number, pos : number[],
                    azel : number[], ionoopt : number, ion : number, variance : number) : number{throw new Error("not implemented");}


/* tropospheric correction -----------------------------------------------------
* compute tropospheric correction
* args   : gtime_t time     I   time
*          nav_t  *nav      I   navigation data
*          double *pos      I   receiver position {lat,lon,h} (rad|m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          int    tropopt   I   tropospheric correction option (TROPOPT_???)
*          double *trp      O   tropospheric delay (m)
*          double *var      O   tropospheric delay variance (m^2)
* return : status(1:ok,0:error)
*-----------------------------------------------------------------------------*/
function tropcorr(time : Date, nav :  nav_t, pos : number[],
                    azel : number[],  tropopt : number, trp : number, variance : number) : number{throw new Error("not implemented");}



/* antenna models ------------------------------------------------------------*/

/* read antenna parameters ------------------------------------------------------
* read antenna parameters
* args   : char   *file       I   antenna parameter file (antex)
*          pcvs_t *pcvs       IO  antenna parameters
* return : status (1:ok,0:file open error)
* notes  : file with the externsion .atx or .ATX is recognized as antex
*          file except for antex is recognized ngs antenna parameters
*          see reference [3]
*          only support non-azimuth-depedent parameters
*-----------------------------------------------------------------------------*/
function readpcv(file:string, pcvs:pcvs_t ) : number{throw new Error("not implemented");}


/* search antenna parameter ----------------------------------------------------
* read satellite antenna phase center position
* args   : int    sat         I   satellite number (0: receiver antenna)
*          char   *type       I   antenna type for receiver antenna
*          gtime_t time       I   time to search parameters
*          pcvs_t *pcvs       IO  antenna parameters
* return : antenna parameter (NULL: no antenna)
*-----------------------------------------------------------------------------*/
function searchpcv(sat:number, type:string,  time:Date,
                        pcvs: pcvs_t):pcv_t {throw new Error("not implemented");}


/* receiver antenna model ------------------------------------------------------
* compute antenna offset by antenna phase center parameters
* args   : pcv_t *pcv       I   antenna phase center parameters
*          double *azel     I   azimuth/elevation for receiver {az,el} (rad)
*          int     opt      I   option (0:only offset,1:offset+pcv)
*          double *dant     O   range offsets for each frequency (m)
* return : none
* notes  : current version does not support azimuth dependent terms
*-----------------------------------------------------------------------------*/
function antmodel(pcv : pcv_t , del:number[], azel : number[],
                     opt : number, dant : number[]) : void{throw new Error("not implemented");}


/* satellite antenna model ------------------------------------------------------
* compute satellite antenna phase center parameters
* args   : pcv_t *pcv       I   antenna phase center parameters
*          double nadir     I   nadir angle for satellite (rad)
*          double *dant     O   range offsets for each frequency (m)
* return : none
*-----------------------------------------------------------------------------*/
function antmodel_s(pcv : pcv_t, nadir : number, dant : number[]) : void{throw new Error("not implemented");}



/* earth tide models ---------------------------------------------------------*/

/* sun and moon position -------------------------------------------------------
* get sun and moon position in ecef
* args   : gtime_t tut      I   time in ut1
*          double *erpv     I   erp value {xp,yp,ut1_utc,lod} (rad,rad,s,s/d)
*          double *rsun     IO  sun position in ecef  (m) (NULL: not output)
*          double *rmoon    IO  moon position in ecef (m) (NULL: not output)
*          double *gmst     O   gmst (rad)
* return : none
*-----------------------------------------------------------------------------*/
function sunmoonpos(tutc : Date, erpv : number[], rsun : number,
                       rmoon : number, gmst : number) : void{throw new Error("not implemented");}

/* tidal displacement ----------------------------------------------------------
* displacements by earth tides
* args   : gtime_t tutc     I   time in utc
*          double *rr       I   site position (ecef) (m)
*          int    opt       I   options (or of the followings)
*                                 1: solid earth tide
*                                 2: ocean tide loading
*                                 4: pole tide
*                                 8: elimate permanent deformation
*          double *erp      I   earth rotation parameters (NULL: not used)
*          double *odisp    I   ocean loading parameters  (NULL: not used)
*                                 odisp[0+i*6]: consituent i amplitude radial(m)
*                                 odisp[1+i*6]: consituent i amplitude west  (m)
*                                 odisp[2+i*6]: consituent i amplitude south (m)
*                                 odisp[3+i*6]: consituent i phase radial  (deg)
*                                 odisp[4+i*6]: consituent i phase west    (deg)
*                                 odisp[5+i*6]: consituent i phase south   (deg)
*                                (i=0:M2,1:S2,2:N2,3:K2,4:K1,5:O1,6:P1,7:Q1,
*                                   8:Mf,9:Mm,10:Ssa)
*          double *dr       O   displacement by earth tides (ecef) (m)
* return : none
* notes  : see ref [1], [2] chap 7
*          see ref [4] 5.2.1, 5.2.2, 5.2.3
*          ver.2.4.0 does not use ocean loading and pole tide corrections
*-----------------------------------------------------------------------------*/
function tidedisp(tutc : Date, rr : number, opt : number, erp : erp_t,
                     odisp:number[], dr : number) : void{throw new Error("not implemented");}

/* geiod models --------------------------------------------------------------*/

/* open geoid model file -------------------------------------------------------
* open geoid model file
* args   : int    model     I   geoid model type
*                               GEOID_EMBEDDED   : embedded model(1x1deg)
*                               GEOID_EGM96_M150 : EGM96 15x15"
*                               GEOID_EGM2008_M25: EGM2008 2.5x2.5"
*                               GEOID_EGM2008_M10: EGM2008 1.0x1.0"
*                               GEOID_GSI2000_M15: GSI geoid 2000 1.0x1.5"
*          char   *file     I   geoid model file path
* return : status (1:ok,0:error)
* notes  : the following geoid models can be used
*          WW15MGH.DAC   : EGM96 15x15" binary grid height
*          Und_min2.5x2.5_egm2008_isw=82_WGS84_TideFree_SE: EGM2008 2.5x2.5"
*          Und_min1x1_egm2008_isw=82_WGS84_TideFree_SE    : EGM2008 1.0x1.0"
*          gsigeome_ver4 : GSI geoid 2000 1.0x1.5" (japanese area)
*          (byte-order of binary files must be compatible to cpu)
*-----------------------------------------------------------------------------*/
export function opengeoid( model : number, file : string) : number{throw new Error("not implemented");}

/* close geoid model file ------------------------------------------------------
* close geoid model file
* args   : none
* return : none
*-----------------------------------------------------------------------------*/
export function  closegeoid() : void{throw new Error("not implemented");}

/* geoid height ----------------------------------------------------------------
* get geoid height from geoid model
* args   : double *pos      I   geodetic position {lat,lon} (rad)
* return : geoid height (m) (0.0:error)
* notes  : to use external geoid model, call function opengeoid() to open
*          geoid model before calling the function. If the external geoid model
*          is not open, the function uses embedded geoid model.
*-----------------------------------------------------------------------------*/
export function  geoidh(pos : number[]) : number{throw new Error("not implemented");}

/* datum transformation ------------------------------------------------------*/

/* load datum transformation parameter -----------------------------------------
* load datum transformation parameter
* args   : char  *file      I   datum trans parameter file path
* return : status (0:ok,0>:error)
* notes  : parameters file shall comply with GSI TKY2JGD.par
*-----------------------------------------------------------------------------*/
function loaddatump(file : string) : number{throw new Error("not implemented");}

/* tokyo datum to JGD2000 datum ------------------------------------------------
* transform position in Tokyo datum to JGD2000 datum
* args   : double *pos      I   position in Tokyo datum   {lat,lon,h} (rad,m)
*                           O   position in JGD2000 datum {lat,lon,h} (rad,m)
* return : status (0:ok,0>:error,out of range)
* notes  : before calling, call loaddatump() to set parameter table
*-----------------------------------------------------------------------------*/
function tokyo2jgd(pos : number[]) : number{throw new Error("not implemented");}

/* JGD2000 datum to Tokyo datum ------------------------------------------------
* transform position in JGD2000 datum to Tokyo datum
* args   : double *pos      I   position in JGD2000 datum {lat,lon,h} (rad,m)
*                           O   position in Tokyo datum   {lat,lon,h} (rad,m)
* return : status (0:ok,0>:error,out of range)
* notes  : before calling, call loaddatump() to set parameter table
*-----------------------------------------------------------------------------*/
function jgd2tokyo(pos : number[]) : number{throw new Error("not implemented");}



/* rinex functions -----------------------------------------------------------*/
export function  readrnx (file : string,  rcv : number, opt : string, obs : obs_t,
                    nav : nav_t, sta : sta_t) : number{throw new Error("not implemented");}


/* read rinex obs and nav files ------------------------------------------------
* read rinex obs and nav files
* args   : char *file    I      file (wild-card * expanded) ("": stdin)
*          int   rcv     I      receiver number for obs data
*         (gtime_t ts)   I      observation time start (ts.time==0: no limit)
*         (gtime_t te)   I      observation time end   (te.time==0: no limit)
*         (double tint)  I      observation time interval (s) (0:all)
*          char  *opt    I      rinex options (see below,"": no option)
*          obs_t *obs    IO     observation data   (NULL: no input)
*          nav_t *nav    IO     navigation data    (NULL: no input)
*          sta_t *sta    IO     station parameters (NULL: no input)
* return : status (1:ok,0:no data,-1:error)
* notes  : read data are appended to obs and nav struct
*          before calling the function, obs and nav should be initialized.
*          observation data and navigation data are not sorted.
*          navigation data may be duplicated.
*          call sortobs() or uniqnav() to sort data or delete duplicated eph.
*
*          read rinex options (separated by spaces) :
*
*            -GLss[=shift]: select GPS signal ss (ss: RINEX 3 code, "1C","2W"...)
*            -RLss[=shift]: select GLO signal ss
*            -ELss[=shift]: select GAL signal ss
*            -JLss[=shift]: select QZS signal ss
*            -CLss[=shift]: select BDS signal ss
*            -SLss[=shift]: select SBS signal ss
*
*                 shift: carrier phase shift to be added (cycle)
*            
*            -SYS=sys[,sys...]: select navi systems
*                               (sys=G:GPS,R:GLO,E:GAL,J:QZS,C:BDS,S:SBS)
*
*-----------------------------------------------------------------------------*/
function readrnxt(file : string, rcv : number, ts : Date, te : Date,
                    tint : number, opt : string, obs : obs_t, nav : nav_t,
                    sta : sta_t) : number{throw new Error("not implemented");}


/* read rinex clock files ------------------------------------------------------
* read rinex clock files
* args   : char *file    I      file (wild-card * expanded)
*          nav_t *nav    IO     navigation data    (NULL: no input)
* return : number of precise clock
*-----------------------------------------------------------------------------*/
function readrnxc(file : string, nav : nav_t) : number{throw new Error("not implemented");}


/* output rinex obs header -----------------------------------------------------
* output rinex obd file header
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  *nav      I   navigation data
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxobsh(fp : FILE, opt : rnxopt_t, nav :  nav_t) : number{throw new Error("not implemented");}


/* output rinex obs body -------------------------------------------------------
* output rinex obs body
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          obsd_t *obs      I   observation data
*          int    n         I   number of observation data
*          int    flag      I   epoch flag (0:ok,1:power failure,>1:event flag)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxobsb(fp : FILE, opt :  rnxopt_t, obs :  obsd_t,  n : number,
                       epflag : number) : number{throw new Error("not implemented");}

/* output rinex nav header -----------------------------------------------------
* output rinex nav file header
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxnavh (fp : FILE, opt :  rnxopt_t, nav :  nav_t) : number{throw new Error("not implemented");}

/* output rinex gnav header ----------------------------------------------------
* output rinex gnav (glonass navigation) file header
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxgnavh(fp : FILE, opt :  rnxopt_t, nav :  nav_t) : number{throw new Error("not implemented");}

/* output rinex geo nav header -------------------------------------------------
* output rinex geo nav file header
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxhnavh(fp : FILE, opt :  rnxopt_t, nav :  nav_t) : number{throw new Error("not implemented");}

/* output rinex galileo nav header ---------------------------------------------
* output rinex galileo nav file header (2.12)
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxlnavh(fp : FILE, opt :  rnxopt_t, nav :  nav_t) : number{throw new Error("not implemented");}

/* output rinex qzss nav header ------------------------------------------------
* output rinex qzss nav file header (2.12 extention and 3.02)
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxqnavh(fp : FILE, opt :  rnxopt_t, nav : nav_t) : number{throw new Error("not implemented");}

/* output rinex beidou nav header ----------------------------------------------
* output rinex beidou nav file header (2.12 extention and 3.02)
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          nav_t  nav       I   navigation data (NULL: no input)
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxcnavh(fp : FILE, opt :  rnxopt_t , nav :  nav_t) : number{throw new Error("not implemented");}

/* output rinex nav body -------------------------------------------------------
* output rinex nav file body record
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          eph_t  *eph      I   ephemeris
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxnavb (fp : FILE, opt :  rnxopt_t, eph :  eph_t) : number{throw new Error("not implemented");}

/* output rinex gnav body ------------------------------------------------------
* output rinex gnav (glonass navigation) file body record
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          geph_t  *geph    I   glonass ephemeris
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxgnavb(fp : FILE, opt :  rnxopt_t, geph :  geph_t) : number{throw new Error("not implemented");}

/* output rinex geo nav body ---------------------------------------------------
* output rinex geo nav file body record
* args   : FILE   *fp       I   output file pointer
*          rnxopt_t *opt    I   rinex options
*          seph_t  *seph    I   sbas ephemeris
* return : status (1:ok, 0:output error)
*-----------------------------------------------------------------------------*/
function outrnxhnavb(fp : FILE, opt :  rnxopt_t, seph :  seph_t) : number{throw new Error("not implemented");}


/* uncompress file -------------------------------------------------------------
* uncompress (uncompress/unzip/uncompact hatanaka-compression/tar) file
* args   : char   *file     I   input file
*          char   *uncfile  O   uncompressed file
* return : status (-1:error,0:not compressed file,1:uncompress completed)
* note   : creates uncompressed file in tempolary directory
*          gzip and crx2rnx commands have to be installed in commands path
*-----------------------------------------------------------------------------*/
function rtk_uncompress(file : string, uncfile : string) : number{throw new Error("not implemented");}

/* rinex converter -------------------------------------------------------------
* convert receiver log file to rinex obs/nav, sbas log files
* args   : int    format I      receiver raw format (STRFMT_???)
*          rnxopt_t *opt IO     rinex options (see below)
*          char   *file  I      rtcm, receiver raw or rinex file
*                               (wild-cards (*) are expanded)
*          char   **ofile IO    output files
*                               ofile[0] rinex obs file   ("": no output)
*                               ofile[1] rinex nav file   ("": no output)
*                               ofile[2] rinex gnav file  ("": no output)
*                               ofile[3] rinex hnav file  ("": no output)
*                               ofile[4] rinex qnav file  ("": no output)
*                               ofile[5] rinex lnav file  ("": no output)
*                               ofile[6] sbas/lex log file("": no output)
* return : status (1:ok,0:error,-1:abort)
* notes  : the following members of opt are replaced by information in last
*          converted rinex: opt->tstart, opt->tend, opt->obstype, opt->nobs
*          keywords in ofile[] are replaced by first obs date/time and station
*          id (%r)
*          the order of wild-card expanded files must be in-order by time
*-----------------------------------------------------------------------------*/
function convrnx(format : number, opt : rnxopt_t, file : string, ofile : string[]) : number{throw new Error("not implemented");}

/* initialize rinex control ----------------------------------------------------
* initialize rinex control struct and reallocate memory for observation and
* ephemeris buffer in rinex control struct
* args   : rnxctr_t *rnx IO     rinex control struct
* return : status (1:ok,0:memory allocation error)
*-----------------------------------------------------------------------------*/
function init_rnxctr (rnx : rnxctr_t) : number{throw new Error("not implemented");}

/* free rinex control ----------------------------------------------------------
* free observation and ephemris buffer in rinex control struct
* args   : rnxctr_t *rnx IO  rinex control struct
* return : none
*-----------------------------------------------------------------------------*/
function free_rnxctr (rnx : rnxctr_t) : void{throw new Error("not implemented");}

/* open rinex data -------------------------------------------------------------
* fetch next rinex message and input a messsage from file
* args   : rnxctr_t *rnx IO  rinex control struct
*          FILE  *fp    I    file pointer
* return : status (-2: end of file, 0: no message, 1: input observation data,
*                   2: input navigation data)
*-----------------------------------------------------------------------------*/
function open_rnxctr (rnx : rnxctr_t, fp : FILE) : number{throw new Error("not implemented");}

/* input rinex control ---------------------------------------------------------
* fetch next rinex message and input a messsage from file
* args   : rnxctr_t *rnx IO  rinex control struct
*          FILE  *fp    I    file pointer
* return : status (-2: end of file, 0: no message, 1: input observation data,
*                   2: input navigation data)
*-----------------------------------------------------------------------------*/
function input_rnxctr(rnx : rnxctr_t, fp : FILE) : number{throw new Error("not implemented");}


/* ephemeris and clock functions ---------------------------------------------*/

/* broadcast ephemeris to satellite clock bias ---------------------------------
* compute satellite clock bias with broadcast ephemeris (gps, galileo, qzss)
* args   : gtime_t time     I   time by satellite clock (gpst)
*          eph_t *eph       I   broadcast ephemeris
* return : satellite clock bias (s) without relativeity correction
* notes  : see ref [1],[7],[8]
*          satellite clock does not include relativity correction and tdg
*-----------------------------------------------------------------------------*/
function eph2clk (time : Date, eph :  eph_t) : number{throw new Error("not implemented");}

/* glonass ephemeris to satellite clock bias -----------------------------------
* compute satellite clock bias with glonass ephemeris
* args   : gtime_t time     I   time by satellite clock (gpst)
*          geph_t *geph     I   glonass ephemeris
* return : satellite clock bias (s)
* notes  : see ref [2]
*-----------------------------------------------------------------------------*/
function geph2clk(time : Date, geph :  geph_t) : number{throw new Error("not implemented");}

/* sbas ephemeris to satellite clock bias --------------------------------------
* compute satellite clock bias with sbas ephemeris
* args   : gtime_t time     I   time by satellite clock (gpst)
*          seph_t *seph     I   sbas ephemeris
* return : satellite clock bias (s)
* notes  : see ref [3]
*-----------------------------------------------------------------------------*/
function seph2clk(time : Date, seph :  seph_t) : number{throw new Error("not implemented");}

/* broadcast ephemeris to satellite position and clock bias --------------------
* compute satellite position and clock bias with broadcast ephemeris (gps,
* galileo, qzss)
* args   : gtime_t time     I   time (gpst)
*          eph_t *eph       I   broadcast ephemeris
*          double *rs       O   satellite position (ecef) {x,y,z} (m)
*          double *dts      O   satellite clock bias (s)
*          double *var      O   satellite position and clock variance (m^2)
* return : none
* notes  : see ref [1],[7],[8]
*          satellite clock includes relativity correction without code bias
*          (tgd or bgd)
*-----------------------------------------------------------------------------*/
function eph2pos ( time : Date, eph :  eph_t , rs : number[], dts : number,
                     variance : number) : void{throw new Error("not implemented");}

/* glonass ephemeris to satellite position and clock bias ----------------------
* compute satellite position and clock bias with glonass ephemeris
* args   : gtime_t time     I   time (gpst)
*          geph_t *geph     I   glonass ephemeris
*          double *rs       O   satellite position {x,y,z} (ecef) (m)
*          double *dts      O   satellite clock bias (s)
*          double *var      O   satellite position and clock variance (m^2)
* return : none
* notes  : see ref [2]
*-----------------------------------------------------------------------------*/
function geph2pos(time : Date, geph :  geph_t, rs : number[], dts : number,
                     variance : number):void{throw new Error("not implemented");}

/* sbas ephemeris to satellite position and clock bias -------------------------
* compute satellite position and clock bias with sbas ephemeris
* args   : gtime_t time     I   time (gpst)
*          seph_t  *seph    I   sbas ephemeris
*          double  *rs      O   satellite position {x,y,z} (ecef) (m)
*          double  *dts     O   satellite clock bias (s)
*          double  *var     O   satellite position and clock variance (m^2)
* return : none
* notes  : see ref [3]
*-----------------------------------------------------------------------------*/
function seph2pos(time : Date, seph :  seph_t, rs : number[], dts : number,
                     variance : number) : void{throw new Error("not implemented");}


/* satellite position/clock by precise ephemeris/clock -------------------------
* compute satellite position/clock with precise ephemeris/clock
* args   : gtime_t time       I   time (gpst)
*          int    sat         I   satellite number
*          nav_t  *nav        I   navigation data
*          int    opt         I   sat postion option
*                                 (0: center of mass, 1: antenna phase center)
*          double *rs         O   sat position and velocity (ecef)
*                                 {x,y,z,vx,vy,vz} (m|m/s)
*          double *dts        O   sat clock {bias,drift} (s|s/s)
*          double *var        IO  sat position and clock error variance (m)
*                                 (NULL: no output)
* return : status (1:ok,0:error or data outage)
* notes  : clock includes relativistic correction but does not contain code bias
*          before calling the function, nav->peph, nav->ne, nav->pclk and
*          nav->nc must be set by calling readsp3(), readrnx() or readrnxt()
*          if precise clocks are not set, clocks in sp3 are used instead
*-----------------------------------------------------------------------------*/
function peph2pos(time : Date,  sat : number, nav :  nav_t,  opt : number,
                     rs : number[], dts : number, variance:number) : number{throw new Error("not implemented");}

/* satellite antenna phase center offset ---------------------------------------
* compute satellite antenna phase center offset in ecef
* args   : gtime_t time       I   time (gpst)
*          double *rs         I   satellite position and velocity (ecef)
*                                 {x,y,z,vx,vy,vz} (m|m/s)
*          int    sat         I   satellite number
*          nav_t  *nav        I   navigation data
*          double *dant       I   satellite antenna phase center offset (ecef)
*                                 {dx,dy,dz} (m) (iono-free LC value)
* return : none
*-----------------------------------------------------------------------------*/
function satantoff(time : Date, rs : number[],  sat : number, nav :  nav_t,
                      dant : number[]) : void{throw new Error("not implemented");}


/* satellite position and clock ------------------------------------------------
* compute satellite position, velocity and clock
* args   : gtime_t time     I   time (gpst)
*          gtime_t teph     I   time to select ephemeris (gpst)
*          int    sat       I   satellite number
*          nav_t  *nav      I   navigation data
*          int    ephopt    I   ephemeris option (EPHOPT_???)
*          double *rs       O   sat position and velocity (ecef)
*                               {x,y,z,vx,vy,vz} (m|m/s)
*          double *dts      O   sat clock {bias,drift} (s|s/s)
*          double *var      O   sat position and clock error variance (m^2)
*          int    *svh      O   sat health flag (-1:correction not available)
* return : status (1:ok,0:error)
* notes  : satellite position is referenced to antenna phase center
*          satellite clock does not include code bias correction (tgd or bgd)
*-----------------------------------------------------------------------------*/
function satpos(time : Date, teph : Date,  sat : number,  ephopt : number,
                   nav :  nav_t, rs : number[], dts : number[], variance:number,
                   svh : number) : number{throw new Error("not implemented");}


/* satellite positions and clocks ----------------------------------------------
* compute satellite positions, velocities and clocks
* args   : gtime_t teph     I   time to select ephemeris (gpst)
*          obsd_t *obs      I   observation data
*          int    n         I   number of observation data
*          nav_t  *nav      I   navigation data
*          int    ephopt    I   ephemeris option (EPHOPT_???)
*          double *rs       O   satellite positions and velocities (ecef)
*          double *dts      O   satellite clocks
*          double *var      O   sat position and clock error variances (m^2)
*          int    *svh      O   sat health flag (-1:correction not available)
* return : none
* notes  : rs [(0:2)+i*6]= obs[i] sat position {x,y,z} (m)
*          rs [(3:5)+i*6]= obs[i] sat velocity {vx,vy,vz} (m/s)
*          dts[(0:1)+i*2]= obs[i] sat clock {bias,drift} (s|s/s)
*          var[i]        = obs[i] sat position and clock error variance (m^2)
*          svh[i]        = obs[i] sat health flag
*          if no navigation data, set 0 to rs[], dts[], var[] and svh[]
*          satellite position and clock are values at signal transmission time
*          satellite position is referenced to antenna phase center
*          satellite clock does not include code bias correction (tgd or bgd)
*          any pseudorange and broadcast ephemeris are always needed to get
*          signal transmission time
*-----------------------------------------------------------------------------*/
function satposs(time : Date, obs : obsd_t, n : number, nav :  nav_t,
                     sateph : number, rs : number[], dts : number[], variance : number, svh : number) : void{throw new Error("not implemented");}


/* read sp3 precise ephemeris file ---------------------------------------------
* read sp3 precise ephemeris/clock files and set them to navigation data
* args   : char   *file       I   sp3-c precise ephemeris file
*                                 (wind-card * is expanded)
*          nav_t  *nav        IO  navigation data
*          int    opt         I   options (1: only observed + 2: only predicted +
*                                 4: not combined)
* return : none
* notes  : see ref [1]
*          precise ephemeris is appended and combined
*          nav->peph and nav->ne must by properly initialized before calling the
*          function
*          only files with extensions of .sp3, .SP3, .eph* and .EPH* are read
*-----------------------------------------------------------------------------*/
function readsp3(file : string, nav : nav_t,  opt : number) : void{throw new Error("not implemented");}

/* read satellite antenna parameters -------------------------------------------
* read satellite antenna parameters
* args   : char   *file       I   antenna parameter file
*          gtime_t time       I   time
*          nav_t  *nav        IO  navigation data
* return : status (1:ok,0:error)
* notes  : only support antex format for the antenna parameter file
*-----------------------------------------------------------------------------*/
function readsap(file : string, time : Date, nav : nav_t) : number{throw new Error("not implemented");}

/* read dcb parameters ---------------------------------------------------------
* read differential code bias (dcb) parameters
* args   : char   *file       I   dcb parameters file (wild-card * expanded)
*          nav_t  *nav        IO  navigation data
* return : status (1:ok,0:error)
* notes  : currently only p1-c1 bias of code *.dcb file
*-----------------------------------------------------------------------------*/
function readdcb(file : string, nav : nav_t, sta :  sta_t) : number{throw new Error("not implemented");}

/* read satellite fcb data -----------------------------------------------------
* read satellite fractional cycle bias (dcb) parameters
* args   : char   *file       I   fcb parameters file (wild-card * expanded)
*          nav_t  *nav        IO  navigation data
* return : status (1:ok,0:error)
* notes  : fcb data appended to navigation data
*-----------------------------------------------------------------------------*/
function readfcb(file : string, nav : nav_t) : number{throw new Error("not implemented");}

/* almanac to satellite position and clock bias --------------------------------
* compute satellite position and clock bias with almanac (gps, galileo, qzss)
* args   : gtime_t time     I   time (gpst)
*          alm_t *alm       I   almanac
*          double *rs       O   satellite position (ecef) {x,y,z} (m)
*          double *dts      O   satellite clock bias (s)
* return : none
* notes  : see ref [1],[7],[8]
*-----------------------------------------------------------------------------*/
function alm2pos(time : Date, alm :  alm_t, rs : number[], dts : number) : void{throw new Error("not implemented");}


/* read TLE file ---------------------------------------------------------------
* read NORAD TLE (two line element) data file (ref [2],[3])
* args   : char   *file     I   NORAD TLE data file
*          tle_t  *tle      O   TLE data
* return : status (1:ok,0:error)
* notes  : before calling the function, the TLE data should be initialized.
*          the file should be in a two line (only TLE) or three line (satellite
*          name + TLE) format.
*          the characters after # in a line are treated as comments.
*-----------------------------------------------------------------------------*/
function tle_read(file : string, tle : tle_t) : number{throw new Error("not implemented");}

/* read TLE satellite name file ------------------------------------------------
* read TLE satellite name file
* args   : char   *file     I   TLE satellite name file
*          tle_t  *tle      IO  TLE data
* return : status (1:ok,0:error)
* notes  : before calling the function, call tle_read() to read tle table
*          the TLE satellite name file contains the following record as a text
*          line. strings after # are treated as comments.
*
*          name satno [desig [# comment]]
*
*            name : satellite name
*            satno: satellite catalog number
*            desig: international designator (optional)
*-----------------------------------------------------------------------------*/
function tle_name_read(file : string, tle : tle_t) : number{throw new Error("not implemented");}

/* satellite position and velocity with TLE data -------------------------------
* compute satellite position and velocity in ECEF with TLE data
* args   : gtime_t time     I   time (GPST)
*          char   *name     I   satellite name           ("": not specified)
*          char   *satno    I   satellite catalog number ("": not specified)
*          char   *desig    I   international designaor  ("": not specified)
*          tle_t  *tle      I   TLE data
*          erp_t  *erp      I   EOP data (NULL: not used)
*          double *rs       O   sat position/velocity {x,y,z,vx,vy,vz} (m,m/s)
* return : status (1:ok,0:error)
* notes  : the coordinates of the position and velocity are ECEF (ITRF)
*          if erp == NULL, polar motion and ut1-utc are neglected
*-----------------------------------------------------------------------------*/
function tle_pos(time : Date, name : string, satno : string,
                   desig : string, tle :  tle_t, erp : erp_t,
                   rs : number[]) : number{throw new Error("not implemented");}


/* receiver raw data functions -----------------------------------------------*/

/* extract unsigned/signed bits ------------------------------------------------
* extract unsigned/signed bits from byte data
* args   : unsigned char *buff I byte data
*          int    pos    I      bit position from start of data (bits)
*          int    len    I      bit length (bits) (len<=32)
* return : extracted unsigned/signed bits
*-----------------------------------------------------------------------------*/
function getbitu(buff : Buffer,  pos : number, len : number) : number{throw new Error("not implemented");}

/* extract unsigned/signed bits ------------------------------------------------
* extract unsigned/signed bits from byte data
* args   : unsigned char *buff I byte data
*          int    pos    I      bit position from start of data (bits)
*          int    len    I      bit length (bits) (len<=32)
* return : extracted unsigned/signed bits
*-----------------------------------------------------------------------------*/
function getbits(buff : Buffer, pos : number, len : number) : number{throw new Error("not implemented");}

/* set unsigned/signed bits ----------------------------------------------------
* set unsigned/signed bits to byte data
* args   : unsigned char *buff IO byte data
*          int    pos    I      bit position from start of data (bits)
*          int    len    I      bit length (bits) (len<=32)
*         (unsigned) int I      unsigned/signed data
* return : none
*-----------------------------------------------------------------------------*/
function setbitu(buff : Buffer, pos : number, len : number, data : number) : void{throw new Error("not implemented");}

/* set unsigned/signed bits ----------------------------------------------------
* set unsigned/signed bits to byte data
* args   : unsigned char *buff IO byte data
*          int    pos    I      bit position from start of data (bits)
*          int    len    I      bit length (bits) (len<=32)
*         (unsigned) int I      unsigned/signed data
* return : none
*-----------------------------------------------------------------------------*/
function setbits(buff : Buffer, pos : number, len : number, data : number) : void{throw new Error("not implemented");}

/* crc-32 parity ---------------------------------------------------------------
* compute crc-32 parity for novatel raw
* args   : unsigned char *buff I data
*          int    len    I      data length (bytes)
* return : crc-32 parity
* notes  : see NovAtel OEMV firmware manual 1.7 32-bit CRC
*-----------------------------------------------------------------------------*/
function rtk_crc32  (buff : Buffer, len : number) : number{throw new Error("not implemented");}

/* crc-24q parity --------------------------------------------------------------
* compute crc-24q parity for sbas, rtcm3
* args   : unsigned char *buff I data
*          int    len    I      data length (bytes)
* return : crc-24Q parity
* notes  : see reference [2] A.4.3.3 Parity
*-----------------------------------------------------------------------------*/
function rtk_crc24q (buff : Buffer, len : number) : number{throw new Error("not implemented");}

/* crc-16 parity ---------------------------------------------------------------
* compute crc-16 parity for binex, nvs
* args   : unsigned char *buff I data
*          int    len    I      data length (bytes)
* return : crc-16 parity
* notes  : see reference [10] A.3.
*-----------------------------------------------------------------------------*/
function rtk_crc16(buff : Buffer, len : number) : number{throw new Error("not implemented");}


/* decode navigation data word -------------------------------------------------
* check party and decode navigation data word
* args   : unsigned int word I navigation data word (2+30bit)
*                              (previous word D29*-30* + current word D1-30)
*          unsigned char *data O decoded navigation data without parity
*                              (8bitx3)
* return : status (1:ok,0:parity error)
* notes  : see reference [1] 20.3.5.2 user parity algorithm
*-----------------------------------------------------------------------------*/
function decode_word (word : number, data : Buffer) : number{throw new Error("not implemented");}


/* decode gps/qzss navigation data frame ---------------------------------------
* decode navigation data frame and extract ephemeris and ion/utc parameters
* args   : unsigned char *buff I gps navigation data frame (without parity)
*                                  buff[0-29]: 24 bits x 10 words
*          eph_t *eph    IO     ephemeris message      (NULL: no input)
*          alm_t *alm    IO     almanac                (NULL: no input)
*          double *ion   IO     ionospheric parameters (NULL: no input)
*          double *utc   IO     delta-utc parameters   (NULL: no input)
*          int   *leaps  IO     leap seconds (s)       (NULL: no input)
* return : status (0:no valid, 1-5:subframe id)
* notes  : use cpu time to resolve modulo 1024 ambiguity of the week number
*          see ref [1]
*          utc[3] reference week for utc parameter is truncated in 8 bits
*          ion and utc parameters by qzss indicate local iono and qzst-utc
*          parameters.
*-----------------------------------------------------------------------------*/
function decode_frame(buff : Buffer, eph : eph_t, alm : alm_t,
                        ion : number, utc : number, leaps : number) : number{throw new Error("not implemented");}



/* test hamming code of glonass ephemeris string -------------------------------
* test hamming code of glonass ephemeris string (ref [2] 4.7)
* args   : unsigned char *buff I glonass navigation data string bits in frame
*                                with hamming
*                                  buff[ 0]: string bit 85-78
*                                  buff[ 1]: string bit 77-70
*                                  ...
*                                  buff[10]: string bit  5- 1 (0 padded)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function test_glostr(buff : Buffer) : number{throw new Error("not implemented");}


/* decode glonass ephemeris strings --------------------------------------------
* decode glonass ephemeris string (ref [2])
* args   : unsigned char *buff I glonass navigation data string bits in frames
*                                (without hamming and time mark)
*                                  buff[ 0- 9]: string #1 (77 bits)
*                                  buff[10-19]: string #2
*                                  buff[20-29]: string #3
*                                  buff[30-39]: string #4
*          geph_t *geph  IO     glonass ephemeris message
* return : status (1:ok,0:error)
* notes  : geph->tof should be set to frame time witin 1/2 day before calling
*          geph->frq is set to 0
*-----------------------------------------------------------------------------*/
function decode_glostr(buff : Buffer, geph : geph_t) : number{throw new Error("not implemented");}

/* decode BeiDou D1 ephemeris --------------------------------------------------
* decode BeiDou D1 ephemeris (IGSO/MEO satellites) (ref [3] 5.2)
* args   : unsigned char *buff I beidou D1 subframe bits
*                                  buff[ 0- 37]: subframe 1 (300 bits)
*                                  buff[38- 75]: subframe 2
*                                  buff[76-113]: subframe 3
*          eph_t    *eph    IO  ephemeris structure
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function decode_bds_d1(buff : Buffer, eph : eph_t) : number{throw new Error("not implemented");}

/* decode BeiDou D2 ephemeris --------------------------------------------------
* decode BeiDou D2 ephemeris (GEO satellites) (ref [3] 5.3)
* args   : unsigned char *buff I beidou D2 subframe 1 page bits
*                                  buff[  0- 37]: page 1 (300 bits)
*                                  buff[ 38- 75]: page 2
*                                  ...
*                                  buff[342-379]: page 10
*          eph_t    *eph    IO  ephemeris structure
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function decode_bds_d2(buff : Buffer, eph : eph_t) : number{throw new Error("not implemented");}


/* decode Galileo I/NAV ephemeris ----------------------------------------------
* decode Galileo I/NAV (ref [5] 4.3)
* args   : unsigned char *buff I Galileo I/NAV subframe bits
*                                  buff[ 0-15]: I/NAV word type 0 (128 bit)
*                                  buff[16-31]: I/NAV word type 1
*                                  buff[32-47]: I/NAV word type 2
*                                  buff[48-63]: I/NAV word type 3
*                                  buff[64-79]: I/NAV word type 4
*                                  buff[80-95]: I/NAV word type 5
*          eph_t    *eph    IO  ephemeris structure
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function decode_gal_inav(buff : Buffer, eph : eph_t) : number{throw new Error("not implemented");}

/* initialize receiver raw data control ----------------------------------------
* initialize receiver raw data control struct and reallocate obsevation and
* epheris buffer
* args   : raw_t  *raw   IO     receiver raw data control struct
*          int    format I      stream format (STRFMT_???)
* return : status (1:ok,0:memory allocation error)
*-----------------------------------------------------------------------------*/
function init_raw   (raw : raw_t,  format : number) : number{throw new Error("not implemented");}

/* free receiver raw data control ----------------------------------------------
* free observation and ephemeris buffer in receiver raw data control struct
* args   : raw_t  *raw   IO     receiver raw data control struct
* return : none
*-----------------------------------------------------------------------------*/
function free_raw  (raw : raw_t) : void{throw new Error("not implemented");}


/* input receiver raw data from stream -----------------------------------------
* fetch next receiver raw data and input a message from stream
* args   : raw_t  *raw   IO     receiver raw data control struct
*          int    format I      receiver raw data format (STRFMT_???)
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter, 31: input lex message)
*-----------------------------------------------------------------------------*/
function input_raw  (raw : raw_t,  format : number, data : Buffer) : number{throw new Error("not implemented");}


/* input receiver raw data from file -------------------------------------------
* fetch next receiver raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          int    format I      receiver raw data format (STRFMT_???)
*          FILE   *fp    I      file pointer
* return : status(-2: end of file/format error, -1...31: same as above)
*-----------------------------------------------------------------------------*/
function input_rawf (raw : raw_t,  format : number, fp : FILE) : number{throw new Error("not implemented");}

/* init_rt17 = Initialize RT17 dependent private storage */
function init_rt17  (raw : raw_t) : number{throw new Error("not implemented");}

/* init_cmr = Initialize CMR dependent private storage */
function init_cmr   (raw : raw_t) : number{throw new Error("not implemented");}

/* free_rt17 - Free up RT17 dependent private storage */
function free_rt17 (raw : raw_t) : void{throw new Error("not implemented");}

/* free_cmr - Free up CMR dependent private storage */
function free_cmr  (raw : raw_t) : void{throw new Error("not implemented");}

/*
| update_cmr - Update the CMR rover observations table
|
| Returns:
|
| -1: error
|  0: no error
|
| Call this function in the RTK SERVER immediately
| after any rover observations have been received.
*/
function update_cmr (raw : raw_t, svr : rtksvr_t, obs : obs_t) : number{throw new Error("not implemented");}


/* input oem4/oem3 raw data from stream ----------------------------------------
* fetch next novatel oem4/oem3 raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options for oem4, set raw->opt to the following
*          option strings separated by spaces.
*
*          -EPHALL : input all ephemerides
*          -GL1P   : select 1P for GPS L1 (default 1C)
*          -GL2X   : select 2X for GPS L2 (default 2W)
*          -RL2C   : select 2C for GLO L2 (default 2P)
*          -EL2C   : select 2C for GAL L2 (default 2C)
*          -GALINAV: use I/NAV for GAL ephemeris
*          -GALFNAV: use F/NAV for GAL ephemeris
*
*-----------------------------------------------------------------------------*/
function input_oem4  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input oem4/oem3 raw data from stream ----------------------------------------
* fetch next novatel oem4/oem3 raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options for oem4, set raw->opt to the following
*          option strings separated by spaces.
*
*          -EPHALL : input all ephemerides
*          -GL1P   : select 1P for GPS L1 (default 1C)
*          -GL2X   : select 2X for GPS L2 (default 2W)
*          -RL2C   : select 2C for GLO L2 (default 2P)
*          -EL2C   : select 2C for GAL L2 (default 2C)
*          -GALINAV: use I/NAV for GAL ephemeris
*          -GALFNAV: use F/NAV for GAL ephemeris
*
*-----------------------------------------------------------------------------*/
function input_oem3  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input ublox raw message from stream -----------------------------------------
* fetch next ublox raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL    : input all ephemerides
*          -INVCP     : invert polarity of carrier-phase
*          -TADJ=tint : adjust time tags to multiples of tint (sec)
*          -STD_SLIP=std: slip by std-dev of carrier phase under std
*
*          The supported messages are as follows.
*
*          UBX-RXM-RAW  : raw measurement data
*          UBX-RXM-RAWX : multi-gnss measurement data
*          UBX-RXM-SFRB : subframe buffer
*          UBX-RXM-SFRBX: subframe buffer extension
*
*          UBX-TRK-MEAS and UBX-TRK-SFRBX are based on NEO-M8N (F/W 2.01).
*          UBX-TRK-D5 is based on NEO-7N (F/W 1.00). They are not formally
*          documented and not supported by u-blox.
*          Users can use these messages by their own risk.
*-----------------------------------------------------------------------------*/
function input_ubx   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input superstar 2 raw message from stream -----------------------------------
* input next superstar 2 raw message from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
* notes  : needs #20 or #21 message to get proper week number of #23 raw
*          observation data
*-----------------------------------------------------------------------------*/
function input_ss2   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input cresent raw message ---------------------------------------------------
* input next crescent raw message from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL      : input all ephemerides
*          -TTCORR      : time-tag offset correction
*          -ENAGLO      : enable glonass messages
*
*-----------------------------------------------------------------------------*/
function input_cres  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input skytraq raw message from stream ---------------------------------------
* fetch next skytraq raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -INVCP     : inverse polarity of carrier-phase
*
*-----------------------------------------------------------------------------*/
function input_stq   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input gw10 raw message ------------------------------------------------------
* input next gw10 raw message from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL    : input all ephemerides
*
*-----------------------------------------------------------------------------*/
function input_gw10  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input javad raw message from stream -----------------------------------------
* fetch next javad raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL : input all ephemerides
*          -GL1W   : select 1W for GPS L1 (default 1C)
*          -GL1X   : select 1X for GPS L1 (default 1C)
*          -GL2X   : select 2X for GPS L2 (default 2W)
*          -RL1C   : select 1C for GLO L1 (default 1P)
*          -RL2C   : select 2C for GLO L2 (default 2P)
*          -JL1Z   : select 1Z for QZS L1 (default 1C)
*          -JL1X   : select 1X for QZS L1 (default 1C)
*          -NOET   : discard epoch time message ET (::)
*
*-----------------------------------------------------------------------------*/
function input_javad (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input NVS raw message from stream -------------------------------------------
* fetch next NVS raw data and input a message from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*
* notes  : to specify input options, set raw->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL    : input all ephemerides
*          -TADJ=tint : adjust time tags to multiples of tint (sec)
*
*-----------------------------------------------------------------------------*/
function input_nvs   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input binex message from stream ---------------------------------------------
* fetch next binex data and input a message from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris)
* notes  : support only the following message (ref [1])
*
*          - big-endian, regular CRC, forward record (sync=0xE2)
*          - record-subrecord:
*            0x01-01: decoded gps ephemeris
*            0x01-02: decoded glonass ephemeris
*            0x01-03: decoded sbas ephemeris
*            0x01-04: decoded galileo ephemeris
*            0x01-05: decoded beidou-2/compass ephemeris
*            0x01-06: decoded qzss ephemeris
*            0x7f-05: gnss data prototyping - trimble netr8
*
*          to specify input options, set rtcm->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL  : input all ephemerides
*          -GLss    : select signal ss for GPS (ss=1C,1P,...)
*          -RLss    : select signal ss for GLO (ss=1C,1P,...)
*          -ELss    : select signal ss for GAL (ss=1C,1B,...)
*          -JLss    : select signal ss for QZS (ss=1C,2C,...)
*          -CLss    : select signal ss for BDS (ss=2I,2X,...)
*
*-----------------------------------------------------------------------------*/
function input_bnx   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/*
| input_rt17 - Read an RT-17 mesasge from a raw data stream 
|
| Returns:
|
| -1: error message
|  0: no message (tells caller to please read more data from the stream)
|  1: input observation data
|  2: input ephemeris
|  9: input ion/utc parameter
|
| Each message begins with a 4-byte header, followed by the bytes of data in the packet,
| and the packet ends with a 2-byte trailer. Byte 3 is set to 0 (00h) when the packet
| contains no data.
*/
function input_rt17  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input sbf raw data from stream ----------------------------------------------
* get to the next sbf raw block from stream
* args   : raw_t  *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 3: input sbas message,
*                  9: input ion/utc parameter)
*-----------------------------------------------------------------------------*/
function input_sbf   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/*
| input_cmr - Read a CMR data stream 
|
| Returns:
|
| -1: error message
|  0: no message (tells caller to please read more data from the stream)
|  1: input observation data
|  5: input station pos/ant parameters
|
| Supported CMR messages: 0, 1, 2, 3, 4; CMR+ messages 1, 2, 3.
*/
function input_cmr   (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input lex receiver raw message from stream ----------------------------------
* fetch next lex receiver raw data and input a mesasge from stream
* args   : raw_t *raw   IO     receiver raw data control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  31: input lex message)
*-----------------------------------------------------------------------------*/
function input_lexr  (raw:raw_t,  data:number):number{throw new Error("not implemented");}


/* input oem4/oem3 raw data from file ------------------------------------------
* fetch next novatel oem4/oem3 raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          int    format I      receiver raw data format (STRFMT_???)
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_oem4f (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input oem4/oem3 raw data from file ------------------------------------------
* fetch next novatel oem4/oem3 raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          int    format I      receiver raw data format (STRFMT_???)
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_oem3f (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input ublox raw message from file -------------------------------------------
* fetch next ublox raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_ubxf  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input superstar 2 raw message from file -------------------------------------
* input next superstar 2 raw message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_ss2f  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input crescent raw message from file ----------------------------------------
* input next crescent raw message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_cresf (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input skytraq raw message from file -----------------------------------------
* fetch next skytraq raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_stqf  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input gw10 raw message from file --------------------------------------------
* input next gw10 raw message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_gw10f (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input javad raw message from file -------------------------------------------
* fetch next javad raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_javadf(raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input NVS raw message from file ---------------------------------------------
* fetch next NVS raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_nvsf  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input binex message from file -----------------------------------------------
* fetch next binex data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_bnxf  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/*
| input_rt17f - Read an RT-17 mesasge from a file 
|
| Returns:
|
| -2: End of file (EOF)
| -1: error message
|  0: no message
|  1: input observation data
|  2: input ephemeris
|  9: input ion/utc parameter
*/
function input_rt17f (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* sbf raw block finder --------------------------------------------------------
* get to the next sbf raw block from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_sbff  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/*
| input_cmrf - Read a CMR mesasge from a file 
|
| Returns:
|
| -1: error message
|  0: no message (tells caller to please read more data from the stream)
|  1: input observation data
|  5: input station pos/ant parameters
|
| Supported CMR messages: 0, 1, 2, 3, 4; CMR+ messages 1, 2, 3.
*/
function input_cmrf  (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* input lex receiver raw message from file ------------------------------------
* fetch next lex receiver raw data and input a message from file
* args   : raw_t  *raw   IO     receiver raw data control struct
*          FILE   *fp    I      file pointer
* return : status(-2: end of file, -1...9: same as above)
*-----------------------------------------------------------------------------*/
function input_lexrf (raw:raw_t, fp: FILE):number{throw new Error("not implemented");}


/* generate ublox binary message -----------------------------------------------
* generate ublox binary message from message string
* args   : char  *msg   IO     message string 
*            "CFG-PRT   portid res0 res1 mode baudrate inmask outmask flags"
*            "CFG-USB   vendid prodid res1 res2 power flags vstr pstr serino"
*            "CFG-MSG   msgid rate0 rate1 rate2 rate3 rate4 rate5 rate6"
*            "CFG-NMEA  filter version numsv flags"
*            "CFG-RATE  meas nav time"
*            "CFG-CFG   clear_mask save_mask load_mask [dev_mask]"
*            "CFG-TP    interval length status time_ref res adelay rdelay udelay"
*            "CFG-NAV2  ..."
*            "CFG-DAT   maja flat dx dy dz rotx roty rotz scale"
*            "CFG-INF   protocolid res0 res1 res2 mask0 mask1 mask2 ... mask5"
*            "CFG-RST   navbbr reset res"
*            "CFG-RXM   gpsmode lpmode"
*            "CFG-ANT   flags pins"
*            "CFG-FXN   flags treacq tacq treacqoff tacqoff ton toff res basetow"
*            "CFG-SBAS  mode usage maxsbas res scanmode"
*            "CFG-LIC   key0 key1 key2 key3 key4 key5"
*            "CFG-TM    intid rate flags"
*            "CFG-TM2   ch res0 res1 rate flags"
*            "CFG-TMODE tmode posx posy posz posvar svinmindur svinvarlimit"
*            "CFG-EKF   ..."
*            "CFG-GNSS  ..."
*            "CFG-ITFM  conf conf2"
*            "CFG-LOGFILTER ver flag min_int time_thr speed_thr pos_thr"
*            "CFG-NAV5  ..."
*            "CFG-NAVX5 ..."
*            "CFG-ODO   ..."
*            "CFG-PM2   ..."
*            "CFG-PWR   ver rsv1 rsv2 rsv3 state"
*            "CFG-RINV  flag data ..."
*            "CFG-SMGR  ..."
*            "CFG-TMODE2 ..."
*            "CFG-TMODE3 ..."
*            "CFG-TPS   ..."
*            "CFG-TXSLOT ..."
*          unsigned char *buff O binary message
* return : length of binary message (0: error)
* note   : see reference [1][3] for details.
*          the following messages are not supported:
*             CFG-DOSC,CFG-ESRC
*-----------------------------------------------------------------------------*/
function  gen_ubx (msg:string, buff : Buffer):number{throw new Error("not implemented");}


/* generate skytraq binary message ---------------------------------------------
* generate skytraq binary message from message string
* args   : char  *msg   I      message string 
*            "RESTART  [arg...]" system restart
*            "CFG-SERI [arg...]" configure serial port propperty
*            "CFG-FMT  [arg...]" configure output message format
*            "CFG-RATE [arg...]" configure binary measurement output rates
*            "CFG-BIN  [arg...]" configure general binary
*            "GET-GLOEPH [slot]" get glonass ephemeris for freq channel number
*          unsigned char *buff O binary message
* return : length of binary message (0: error)
* note   : see reference [1][2][3][4] for details.
*-----------------------------------------------------------------------------*/
function  gen_stq (msg:string, buff : Buffer):number{throw new Error("not implemented");}


/* generate NVS binary message -------------------------------------------------
* generate NVS binary message from message string
* args   : char  *msg   I      message string
*            "RESTART  [arg...]" system reset
*            "CFG-SERI [arg...]" configure serial port property
*            "CFG-FMT  [arg...]" configure output message format
*            "CFG-RATE [arg...]" configure binary measurement output rates
*          unsigned char *buff O binary message
* return : length of binary message (0: error)
* note   : see reference [1][2] for details.
*-----------------------------------------------------------------------------*/
function  gen_nvs (msg:string, buff : Buffer):number{throw new Error("not implemented");}


/* generate lex receiver raw message -------------------------------------------
* generate lex receiver raw message from message string
* args   : char  *msg   IO     message string 
*            "CMD-RST [clear]"       : restart command
*            "CMD-REQ [msgid]"       : request message
*            "CMD-REQC"              : request of reference clock status
*            "CMD-CH sat1 sat2 sat3" : sv-channel assignment
*            "CMD-TIME [date time]"  : time input (default current time)
*                                      (date=YYYY/dd/mm, time=HH:MM:SS.SS)
*            "CMD-POS lat lon hgt"   : antenna position input
*            "CMD-BIT {on|off}"      : output-control of predecoding bit stream
*          unsigned char *buff O binary message
* return : length of binary message (0: error)
* note   : see ref [1] for details.
*-----------------------------------------------------------------------------*/
function  gen_lexr(msg:string, buff : Buffer):number{throw new Error("not implemented");}


/* rtcm functions ------------------------------------------------------------*/

/* initialize rtcm control -----------------------------------------------------
* initialize rtcm control struct and reallocate memory for observation and
* ephemeris buffer in rtcm control struct
* args   : rtcm_t *raw   IO     rtcm control struct
* return : status (1:ok,0:memory allocation error)
*-----------------------------------------------------------------------------*/
function   init_rtcm   (rtcm : rtcm_t) : number{throw new Error("not implemented");}

/* free rtcm control ----------------------------------------------------------
* free observation and ephemris buffer in rtcm control struct
* args   : rtcm_t *raw   IO     rtcm control struct
* return : none
*-----------------------------------------------------------------------------*/
function  free_rtcm  (rtcm : rtcm_t) : void{throw new Error("not implemented");}

/* input rtcm 2 message from stream --------------------------------------------
* fetch next rtcm 2 message and input a message from byte stream
* args   : rtcm_t *rtcm IO   rtcm control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 5: input station pos/ant parameters,
*                  6: input time parameter, 7: input dgps corrections,
*                  9: input special message)
* notes  : before firstly calling the function, time in rtcm control struct has
*          to be set to the approximate time within 1/2 hour in order to resolve
*          ambiguity of time in rtcm messages.
*          supported msgs RTCM ver.2: 1,3,9,14,16,17,18,19,22
*          refer [1] for RTCM ver.2
*-----------------------------------------------------------------------------*/
function   input_rtcm2 (rtcm:rtcm_t ,  data:number):number{throw new Error("not implemented");}

/* input rtcm 3 message from stream --------------------------------------------
* fetch next rtcm 3 message and input a message from byte stream
* args   : rtcm_t *rtcm IO   rtcm control struct
*          unsigned char data I stream data (1 byte)
* return : status (-1: error message, 0: no message, 1: input observation data,
*                  2: input ephemeris, 5: input station pos/ant parameters,
*                  10: input ssr messages)
* notes  : before firstly calling the function, time in rtcm control struct has
*          to be set to the approximate time within 1/2 week in order to resolve
*          ambiguity of time in rtcm messages.
*          
*          to specify input options, set rtcm->opt to the following option
*          strings separated by spaces.
*
*          -EPHALL  : input all ephemerides
*          -STA=nnn : input only message with STAID=nnn
*          -GLss    : select signal ss for GPS MSM (ss=1C,1P,...)
*          -RLss    : select signal ss for GLO MSM (ss=1C,1P,...)
*          -ELss    : select signal ss for GAL MSM (ss=1C,1B,...)
*          -JLss    : select signal ss for QZS MSM (ss=1C,2C,...)
*          -CLss    : select signal ss for BDS MSM (ss=2I,7I,...)
*
*          supported RTCM 3 messages
*                  (ref [2][3][4][5][6][7][8][9][10][11][12][13][14][15])
*
*            TYPE       GPS     GLOASS    GALILEO    QZSS     BEIDOU     SBAS
*         ----------------------------------------------------------------------
*          OBS C-L1  : 1001~     1009~       -         -         -         -
*              F-L1  : 1002      1010        -         -         -         -
*              C-L12 : 1003~     1011~       -         -         -         -
*              F-L12 : 1004      1012        -         -         -         -
*
*          NAV       : 1019      1020      1045*     1044*     1047*       -
*                        -         -       1046*       -         -         -
*
*          MSM 1     : 1071~     1081~     1091~     1111*~    1121*~    1101*~
*              2     : 1072~     1082~     1092~     1112*~    1122*~    1102*~
*              3     : 1073~     1083~     1093~     1113*~    1123*~    1103*~
*              4     : 1074      1084      1094      1114*     1124*     1104*
*              5     : 1075      1085      1095      1115*     1125*     1105*
*              6     : 1076      1086      1096      1116*     1126*     1106*
*              7     : 1077      1087      1097      1117*     1127*     1107*
*
*          SSR OBT   : 1057      1063      1240*     1246*     1258*       -
*              CLK   : 1058      1064      1241*     1247*     1259*       -
*              BIAS  : 1059      1065      1242*     1248*     1260*       -
*              OBTCLK: 1060      1066      1243*     1249*     1261*       -
*              URA   : 1061      1067      1244*     1250*     1262*       -
*              HRCLK : 1062      1068      1245*     1251*     1263*       -
*
*          ANT INFO  : 1005 1006 1007 1008 1033
*         ----------------------------------------------------------------------
*                                                    (* draft, ~ only encode)
*
*          for MSM observation data with multiple signals for a frequency,
*          a signal is selected according to internal priority. to select
*          a specified signal, use the input options.
*
*          rtcm3 message format:
*            +----------+--------+-----------+--------------------+----------+
*            | preamble | 000000 |  length   |    data message    |  parity  |
*            +----------+--------+-----------+--------------------+----------+
*            |<-- 8 --->|<- 6 -->|<-- 10 --->|<--- length x 8 --->|<-- 24 -->|
*            
*-----------------------------------------------------------------------------*/
function   input_rtcm3 (rtcm:rtcm_t ,  data:number):number{throw new Error("not implemented");}

/* input rtcm 2 message from file ----------------------------------------------
* fetch next rtcm 2 message and input a messsage from file
* args   : rtcm_t *rtcm IO   rtcm control struct
*          FILE  *fp    I    file pointer
* return : status (-2: end of file, -1...10: same as above)
* notes  : same as above
*-----------------------------------------------------------------------------*/
function   input_rtcm2f(rtcm:rtcm_t , fp:FILE):number{throw new Error("not implemented");}


/* input rtcm 3 message from file ----------------------------------------------
* fetch next rtcm 3 message and input a messsage from file
* args   : rtcm_t *rtcm IO   rtcm control struct
*          FILE  *fp    I    file pointer
* return : status (-2: end of file, -1...10: same as above)
* notes  : same as above
*-----------------------------------------------------------------------------*/
function   input_rtcm3f(rtcm:rtcm_t , fp:FILE):number{throw new Error("not implemented");}

/* generate rtcm 2 message -----------------------------------------------------
* generate rtcm 2 message
* args   : rtcm_t *rtcm   IO rtcm control struct
*          int    type    I  message type
*          int    sync    I  sync flag (1:another message follows)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function   gen_rtcm2   (rtcm:rtcm_t ,  type:number,  sync: number):number{throw new Error("not implemented");}

/* generate rtcm 3 message -----------------------------------------------------
* generate rtcm 3 message
* args   : rtcm_t *rtcm   IO rtcm control struct
*          int    type    I  message type
*          int    sync    I  sync flag (1:another message follows)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function   gen_rtcm3   (rtcm:rtcm_t ,  type:number,  sync: number):number{throw new Error("not implemented");}



/* solution functions --------------------------------------------------------*/

/* initialize solution buffer --------------------------------------------------
* initialize position solutions
* args   : solbuf_t *solbuf I  solution buffer
*          int    cyclic    I  solution data buffer type (0:linear,1:cyclic)
*          int    nmax      I  initial number of solution data
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function initsolbuf(solbuf : solbuf_t,  cyclic : number,  nmax : number) : void{throw new Error("not implemented");}

/* free solution ---------------------------------------------------------------
* free memory for solution buffer
* args   : solbuf_t *solbuf I  solution buffer
* return : none
*-----------------------------------------------------------------------------*/
function freesolbuf(solbuf : solbuf_t) : void{throw new Error("not implemented");}


function freesolstatbuf(solstatbuf : solstatbuf_t) : void{throw new Error("not implemented");}


/* get solution data from solution buffer --------------------------------------
* get solution data by index from solution buffer
* args   : solbuf_t *solbuf I  solution buffer
*          int    index     I  index of solution (0...)
* return : solution data pointer (NULL: no solution, out of range)
*-----------------------------------------------------------------------------*/
function getsol(solbuf : solbuf_t,  index : number) : sol_t {throw new Error("not implemented");}

/* add solution data to solution buffer ----------------------------------------
* add solution data to solution buffer
* args   : solbuf_t *solbuf IO solution buffer
*          sol_t  *sol      I  solution data
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function addsol(solbuf : solbuf_t, sol : sol_t) : number{throw new Error("not implemented");}


/* read solutions data from solution files -------------------------------------
* read solution data from soluiton files
* args   : char   *files[]  I  solution files
*          int    nfile     I  number of files
*         (gtime_t ts)      I  start time (ts.time==0: from start)
*         (gtime_t te)      I  end time   (te.time==0: to end)
*         (double tint)     I  time interval (0: all)
*         (int    qflag)    I  quality flag  (0: all)
*          solbuf_t *solbuf O  solution buffer
* return : status (1:ok,0:no data or error)
*-----------------------------------------------------------------------------*/
function readsol (files : string[],  nfile : number, sol : solbuf_t) : number{throw new Error("not implemented");}

/* read solutions data from solution files -------------------------------------
* read solution data from soluiton files
* args   : char   *files[]  I  solution files
*          int    nfile     I  number of files
*         (gtime_t ts)      I  start time (ts.time==0: from start)
*         (gtime_t te)      I  end time   (te.time==0: to end)
*         (double tint)     I  time interval (0: all)
*         (int    qflag)    I  quality flag  (0: all)
*          solbuf_t *solbuf O  solution buffer
* return : status (1:ok,0:no data or error)
*-----------------------------------------------------------------------------*/
function readsolt(files : string[],  nfile : number,  ts : Date,  te : Date,
                     tint : number,  qflag : number, sol : solbuf_t) : number{throw new Error("not implemented");}


/* read solution status --------------------------------------------------------
* read solution status from solution status files
* args   : char   *files[]  I  solution status files
*          int    nfile     I  number of files
*         (gtime_t ts)      I  start time (ts.time==0: from start)
*         (gtime_t te)      I  end time   (te.time==0: to end)
*         (double tint)     I  time interval (0: all)
*          solstatbuf_t *statbuf O  solution status buffer
* return : status (1:ok,0:no data or error)
*-----------------------------------------------------------------------------*/
function readsolstat(files : string[],  nfile : number, statbuf : solstatbuf_t) : number{throw new Error("not implemented");}


/* read solution status --------------------------------------------------------
* read solution status from solution status files
* args   : char   *files[]  I  solution status files
*          int    nfile     I  number of files
*         (gtime_t ts)      I  start time (ts.time==0: from start)
*         (gtime_t te)      I  end time   (te.time==0: to end)
*         (double tint)     I  time interval (0: all)
*          solstatbuf_t *statbuf O  solution status buffer
* return : status (1:ok,0:no data or error)
*-----------------------------------------------------------------------------*/
function readsolstatt(files : string[],  nfile : number,  ts : Date,  te : Date,
                         tint : number, statbuf : solstatbuf_t) : number{throw new Error("not implemented");};


/* input solution data from stream ---------------------------------------------
* input solution data from stream
* args   : unsigned char data I stream data
*          gtime_t ts       I  start time (ts.time==0: from start)
*          gtime_t te       I  end time   (te.time==0: to end)
*          double tint      I  time interval (0: all)
*          int    qflag     I  quality flag  (0: all)
*          solbuf_t *solbuf IO solution buffer
* return : status (1:solution received,0:no solution,-1:disconnect received)
*-----------------------------------------------------------------------------*/
function inputsol(data : Buffer,  ts : Date,  te : Date,  tint : number,
                     qflag : number, opt :  solopt_t, solbuf : solbuf_t) : number{throw new Error("not implemented");}


/* output processing options ---------------------------------------------------
* output processing options to buffer
* args   : unsigned char *buff IO output buffer
*          prcopt_t *opt    I   processign options
* return : number of output bytes
*-----------------------------------------------------------------------------*/
function outprcopts(buff : Buffer, opt :  prcopt_t) : number{throw new Error("not implemented");}

/* output solution header ------------------------------------------------------
* output solution header to buffer
* args   : unsigned char *buff IO output buffer
*          solopt_t *opt    I   solution options
* return : number of output bytes
*-----------------------------------------------------------------------------*/
function outsolheads(buff : Buffer, opt : solopt_t) : number{throw new Error("not implemented");}


/* output solution body --------------------------------------------------------
* output solution body to buffer
* args   : unsigned char *buff IO output buffer
*          sol_t  *sol      I   solution
*          double *rb       I   base station position {x,y,z} (ecef) (m)
*          solopt_t *opt    I   solution options
* return : number of output bytes
*-----------------------------------------------------------------------------*/
function outsols  (buff : Buffer, sol :  sol_t, rb : number,
                     opt : solopt_t) : number{throw new Error("not implemented");}


/* output solution extended ----------------------------------------------------
* output solution exteneded infomation
* args   : unsigned char *buff IO output buffer
*          sol_t  *sol      I   solution
*          ssat_t *ssat     I   satellite status
*          solopt_t *opt    I   solution options
* return : number of output bytes
* notes  : only support nmea
*-----------------------------------------------------------------------------*/
function outsolexs(buff : Buffer, sol : sol_t, ssat :  ssat_t,
                     opt :  solopt_t) : number{throw new Error("not implemented");}

/* output processing option ----------------------------------------------------
* output processing option to file
* args   : FILE   *fp       I   output file pointer
*          prcopt_t *opt    I   processing options
* return : none
*-----------------------------------------------------------------------------*/
function  outprcopt(fp : FILE, opt :  prcopt_t) : void{throw new Error("not implemented");}


/* output solution header ------------------------------------------------------
* output solution heade to file
* args   : FILE   *fp       I   output file pointer
*          solopt_t *opt    I   solution options
* return : none
*-----------------------------------------------------------------------------*/
function outsolhead(fp : FILE, opt :  solopt_t) : void{throw new Error("not implemented");}


/* output solution body --------------------------------------------------------
* output solution body to file
* args   : FILE   *fp       I   output file pointer
*          sol_t  *sol      I   solution
*          double *rb       I   base station position {x,y,z} (ecef) (m)
*          solopt_t *opt    I   solution options
* return : none
*-----------------------------------------------------------------------------*/
function outsol  (fp : FILE, sol :  sol_t, rb : number[],
                     opt :  solopt_t) : void{throw new Error("not implemented");}

/* output solution extended ----------------------------------------------------
* output solution exteneded infomation to file
* args   : FILE   *fp       I   output file pointer
*          sol_t  *sol      I   solution
*          ssat_t *ssat     I   satellite status
*          solopt_t *opt    I   solution options
* return : output size (bytes)
* notes  : only support nmea
*-----------------------------------------------------------------------------*/
function outsolex(fp : FILE, sol :  sol_t, ssat :  ssat_t,
                     opt :  solopt_t): void{throw new Error("not implemented");}

/* output solution in the form of nmea RMC sentence --------------------------*/
function outnmea_rmc(buff : Buffer, sol : sol_t) : number{throw new Error("not implemented");}

/* output solution in the form of nmea GGA sentence --------------------------*/
function outnmea_gga(buff : Buffer, sol : sol_t) : number{throw new Error("not implemented");}

/* output solution in the form of nmea GSA sentences -------------------------*/
function outnmea_gsa(buff : Buffer, sol :  sol_t,
                       ssat :  ssat_t) : number{throw new Error("not implemented");}

/* output solution in the form of nmea GSV sentence --------------------------*/
function outnmea_gsv(buff : Buffer, sol :  sol_t,
                       ssat :  ssat_t) : number{throw new Error("not implemented");}

/* google earth kml converter ------------------------------------------------*/

/* convert to google earth kml file --------------------------------------------
* convert solutions to google earth kml file
* args   : char   *infile   I   input solutions file
*          char   *outfile  I   output google earth kml file ("":<infile>.kml)
*          gtime_t ts,te    I   start/end time (gpst)
*          int    tint      I   time interval (s) (0.0:all)
*          int    qflg      I   quality flag (0:all)
*          double *offset   I   add offset {east,north,up} (m)
*          int    tcolor    I   track color
*                               (0:none,1:white,2:green,3:orange,4:red,5:yellow)
*          int    pcolor    I   point color
*                               (0:none,1:white,2:green,3:orange,4:red,5:by qflag)
*          int    outalt    I   output altitude (0:off,1:elipsoidal,2:geodetic)
*          int    outtime   I   output time (0:off,1:gpst,2:utc,3:jst)
* return : status (0:ok,-1:file read,-2:file format,-3:no data,-4:file write)
* notes  : see ref [1] for google earth kml file format
*-----------------------------------------------------------------------------*/
function convkml(infile : string, outfile : string, ts : Date,
                   te : Date, tint : number, qflg : number, offset : number[],
                    tcolor : number,  pcolor : number, outalt : number, outtime : number) : number{throw new Error("not implemented");}

/* gpx converter -------------------------------------------------------------*/

/* convert to GPX file ---------------------------------------------------------
* convert solutions to GPX file [1]
* args   : char   *infile   I   input solutions file
*          char   *outfile  I   output google earth kml file ("":<infile>.kml)
*          gtime_t ts,te    I   start/end time (gpst)
*          int    tint      I   time interval (s) (0.0:all)
*          int    qflg      I   quality flag (0:all)
*          double *offset   I   add offset {east,north,up} (m)
*          int    outtrk    I   output track    (0:off,1:on)
*          int    outpnt    I   output waypoint (0:off,1:on)
*          int    outalt    I   output altitude (0:off,1:elipsoidal,2:geodetic)
*          int    outtime   I   output time (0:off,1:gpst,2:utc,3:jst)
* return : status (0:ok,-1:file read,-2:file format,-3:no data,-4:file write)
*-----------------------------------------------------------------------------*/
function convgpx(infile : string, outfile : string, ts : Date,
                   te : Date,  tint : number,  qflg : number, offset : number[],
                    outtrk : number,  outpnt : number,  outalt : number,  outtime : number) : number{throw new Error("not implemented");}

/* sbas functions ------------------------------------------------------------*/

/* read sbas message file ------------------------------------------------------
* read sbas message file
* args   : char     *file   I   sbas message file (wind-card * is expanded)
*          int      sel     I   sbas satellite prn number selection (0:all)
*         (gtime_t  ts      I   start time)
*         (gtime_t  te      I   end time  )
*          sbs_t    *sbs    IO  sbas messages
* return : number of sbas messages
* notes  : sbas message are appended and sorted. before calling the funciton, 
*          sbs->n, sbs->nmax and sbs->msgs must be set properly. (initially
*          sbs->n=sbs->nmax=0, sbs->msgs=NULL)
*          only the following file extentions after wild card expanded are valid
*          to read. others are skipped
*          .sbs, .SBS, .ems, .EMS
*-----------------------------------------------------------------------------*/
function sbsreadmsg (file : string,  sel : number, sbs : sbs_t) : number{throw new Error("not implemented");}

/* read sbas message file ------------------------------------------------------
* read sbas message file
* args   : char     *file   I   sbas message file (wind-card * is expanded)
*          int      sel     I   sbas satellite prn number selection (0:all)
*         (gtime_t  ts      I   start time)
*         (gtime_t  te      I   end time  )
*          sbs_t    *sbs    IO  sbas messages
* return : number of sbas messages
* notes  : sbas message are appended and sorted. before calling the funciton, 
*          sbs->n, sbs->nmax and sbs->msgs must be set properly. (initially
*          sbs->n=sbs->nmax=0, sbs->msgs=NULL)
*          only the following file extentions after wild card expanded are valid
*          to read. others are skipped
*          .sbs, .SBS, .ems, .EMS
*-----------------------------------------------------------------------------*/
function sbsreadmsgt(file : string,  sel : number,  ts : Date,  te : Date,
                        sbs : sbs_t ) : number{throw new Error("not implemented");}

/* output sbas messages --------------------------------------------------------
* output sbas message record to output file in rtklib sbas log format
* args   : FILE   *fp       I   output file pointer
*          sbsmsg_t *sbsmsg I   sbas messages
* return : none
*-----------------------------------------------------------------------------*/
function  sbsoutmsg(fp : FILE, sbsmsg : sbsmsg_t) : void{throw new Error("not implemented");}

/* decode sbas message ---------------------------------------------------------
* decode sbas message frame words and check crc
* args   : gtime_t time     I   reception time
*          int    prn       I   sbas satellite prn number
*          unsigned int *word I message frame words (24bit x 10)
*          sbsmsg_t *sbsmsg O   sbas message
* return : status (1:ok,0:crc error)
*-----------------------------------------------------------------------------*/
function sbsdecodemsg(time : Date,  prn : number, words : number[],
                         sbsmsg : sbsmsg_t) : number{throw new Error("not implemented");}

/* update sbas corrections -----------------------------------------------------
* update sbas correction parameters in navigation data with a sbas message
* args   : sbsmg_t  *msg    I   sbas message
*          nav_t    *nav    IO  navigation data
* return : message type (-1: error or not supported type)
* notes  : nav->seph must point to seph[NSATSBS*2] (array of seph_t)
*               seph[prn-MINPRNSBS+1]          : sat prn current epehmeris 
*               seph[prn-MINPRNSBS+1+MAXPRNSBS]: sat prn previous epehmeris 
*-----------------------------------------------------------------------------*/
function sbsupdatecorr(msg :  sbsmsg_t, nav : nav_t) : number{throw new Error("not implemented");}


/* sbas satellite ephemeris and clock correction -------------------------------
* correct satellite position and clock bias with sbas satellite corrections
* args   : gtime_t time     I   reception time
*          int    sat       I   satellite
*          nav_t  *nav      I   navigation data
*          double *rs       IO  sat position and corrected {x,y,z} (ecef) (m)
*          double *dts      IO  sat clock bias and corrected (s)
*          double *var      O   sat position and clock variance (m^2)
* return : status (1:ok,0:no correction)
* notes  : before calling the function, sbas satellite correction parameters 
*          in navigation data (nav->sbssat) must be set by callig
*          sbsupdatecorr().
*          satellite clock correction include long-term correction and fast
*          correction.
*          sbas clock correction is usually based on L1C/A code. TGD or DCB has
*          to be considered for other codes
*-----------------------------------------------------------------------------*/
function sbssatcorr( time : Date,  sat : number, nav : nav_t, rs: number[],
                      dts : number, variance: number) : number{throw new Error("not implemented");}

/* sbas ionospheric delay correction -------------------------------------------
* compute sbas ionosphric delay correction
* args   : gtime_t  time    I   time
*          nav_t    *nav    I   navigation data
*          double   *pos    I   receiver position {lat,lon,height} (rad/m)
*          double   *azel   I   satellite azimuth/elavation angle (rad)
*          double   *delay  O   slant ionospheric delay (L1) (m)
*          double   *var    O   variance of ionospheric delay (m^2)
* return : status (1:ok, 0:no correction)
* notes  : before calling the function, sbas ionosphere correction parameters
*          in navigation data (nav->sbsion) must be set by callig 
*          sbsupdatecorr()
*-----------------------------------------------------------------------------*/
function sbsioncorr( time : Date, nav :  nav_t, pos : number[],
                      azel : number[], delay : number, variance : number) : number{throw new Error("not implemented");}

/* tropospheric delay correction -----------------------------------------------
* compute sbas tropospheric delay correction (mops model)
* args   : gtime_t time     I   time
*          double   *pos    I   receiver position {lat,lon,height} (rad/m)
*          double   *azel   I   satellite azimuth/elavation (rad)
*          double   *var    O   variance of troposphric error (m^2)
* return : slant tropospheric delay (m)
*-----------------------------------------------------------------------------*/
function sbstropcorr(time : Date, pos : number[], azel : number[],
                          variance: number) : number{throw new Error("not implemented");}


/* options functions ---------------------------------------------------------*/

/* search option ---------------------------------------------------------------
* search option record
* args   : char   *name     I  option name
*          opt_t  *opts     I  options table
*                              (terminated with table[i].name="")
* return : option record (NULL: not found)
*-----------------------------------------------------------------------------*/
function searchopt(name : string, opts :  opt_t[]) : opt_t {throw new Error("not implemented");}

/* string to option value ------------------------------------------------------
* convert string to option value
* args   : opt_t  *opt      O  option
*          char   *str      I  option value string
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function str2opt(opt : opt_t, str : string) : number{throw new Error("not implemented");}

/* option value to string ------------------------------------------------------
* convert option value to string
* args   : opt_t  *opt      I  option
*          char   *str      O  option value string
* return : length of output string
*-----------------------------------------------------------------------------*/
function opt2str(opt : opt_t, str : string) : number{throw new Error("not implemented");}


/* option to string -------------------------------------------------------------
* convert option to string (keyword=value # comment)
* args   : opt_t  *opt      I  option
*          char   *buff     O  option string
* return : length of output string
*-----------------------------------------------------------------------------*/
function opt2buf(opt : opt_t, buff : Buffer) : number{throw new Error("not implemented");}

/* load options ----------------------------------------------------------------
* load options from file
* args   : char   *file     I  options file
*          opt_t  *opts     IO options table
*                              (terminated with table[i].name="")
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function loadopts(file : string, opts : opt_t) : number{throw new Error("not implemented");}


/* save options to file --------------------------------------------------------
* save options to file
* args   : char   *file     I  options file
*          char   *mode     I  write mode ("w":overwrite,"a":append);
*          char   *comment  I  header comment (NULL: no comment)
*          opt_t  *opts     I  options table
*                              (terminated with table[i].name="")
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function saveopts(file : string, mode : string, comment : string,
                    opts :  opt_t[]) : number{throw new Error("not implemented");}

/* reset system options to default ---------------------------------------------
* reset system options to default
* args   : none
* return : none
*-----------------------------------------------------------------------------*/
function resetsysopts(){throw new Error("not implemented");}

/* get system options ----------------------------------------------------------
* get system options
* args   : prcopt_t *popt   IO processing options (NULL: no output)
*          solopt_t *sopt   IO solution options   (NULL: no output)
*          folopt_t *fopt   IO file options       (NULL: no output)
* return : none
* notes  : to load system options, use loadopts() before calling the function
*-----------------------------------------------------------------------------*/
function getsysopts(popt : prcopt_t, sopt : solopt_t, fopt : filopt_t) : void{throw new Error("not implemented");}

/* set system options ----------------------------------------------------------
* set system options
* args   : prcopt_t *prcopt I  processing options (NULL: default)
*          solopt_t *solopt I  solution options   (NULL: default)
*          filopt_t *filopt I  file options       (NULL: default)
* return : none
* notes  : to save system options, use saveopts() after calling the function
*-----------------------------------------------------------------------------*/
function setsysopts(popt : prcopt_t, sopt :  solopt_t,
                       fopt :  filopt_t) : void{throw new Error("not implemented");}

/* stream data input and output functions ------------------------------------*/

/* initialize stream environment -----------------------------------------------
* initialize stream environment
* args   : none
* return : none
*-----------------------------------------------------------------------------*/
function strinitcom() : void{throw new Error("not implemented");}


/* initialize stream -----------------------------------------------------------
* initialize stream struct
* args   : stream_t *stream IO  stream
* return : none
*-----------------------------------------------------------------------------*/
function strinit  (stream : stream_t) : void{throw new Error("not implemented");}

/* lock/unlock stream ----------------------------------------------------------
* lock/unlock stream
* args   : stream_t *stream I  stream
* return : none
*-----------------------------------------------------------------------------*/
function strlock  (stream : stream_t) : void{throw new Error("not implemented");}

/* lock/unlock stream ----------------------------------------------------------
* lock/unlock stream
* args   : stream_t *stream I  stream
* return : none
*-----------------------------------------------------------------------------*/
function strunlock(stream : stream_t) : void{throw new Error("not implemented");}

/* open stream -----------------------------------------------------------------
*
* open stream to read or write data from or to virtual devices.
*
* args   : stream_t *stream IO  stream
*          int type         I   stream type
*                                 STR_SERIAL   = serial device
*                                 STR_FILE     = file (record and playback)
*                                 STR_TCPSVR   = TCP server
*                                 STR_TCPCLI   = TCP client
*                                 STR_NTRIPSVR = NTRIP server
*                                 STR_NTRIPCLI = NTRIP client
*                                 STR_NTRIPC_S = NTRIP caster server
*                                 STR_NTRIPC_C = NTRIP caster client
*                                 STR_UDPSVR   = UDP server (read only)
*                                 STR_UDPCLI   = UDP client (write only)
*                                 STR_MEMBUF   = memory buffer (FIFO)
*                                 STR_FTP      = download by FTP (raed only)
*                                 STR_HTTP     = download by HTTP (raed only)
*          int mode         I   stream mode (STR_MODE_???)
*                                 STR_MODE_R   = read only
*                                 STR_MODE_W   = write only
*                                 STR_MODE_RW  = read and write
*          char *path       I   stream path (see below)
*
* return : status (0:error,1:ok)
*
* notes  : see reference [1] for NTRIP
*          STR_FTP/HTTP needs "wget" in command search paths
*
* stream path ([] options):
*
*   STR_SERIAL   port[:brate[:bsize[:parity[:stopb[:fctr[#port]]]]]]
*                    port  = COM??  (windows)
*                            tty??? (linuex, omit /dev/)
*                    brate = bit rate     (bps)
*                    bsize = bit size     (7|8)
*                    parity= parity       (n|o|e)
*                    stopb = stop bits    (1|2)
*                    fctr  = flow control (off|rts)
*                    port  = tcp server port to output received stream
*
*   STR_FILE     path[::T][::+start][::xseppd][::S=swap][::P={4|8}]
*                    path  = file path
*                            (can include keywords defined by )
*                    ::T   = enable time tag
*                    start = replay start offset (s)
*                    speed = replay speed factor
*                    swap  = output swap interval (hr) (0: no swap)
*                    ::P={4|8} = file pointer size (4:32bit,8:64bit)
*
*   STR_TCPSVR   :port
*                    port  = TCP server port to accept
*
*   STR_TCPCLI   addr:port
*                    addr  = TCP server address to connect
*                    port  = TCP server port to connect
*
*   STR_NTRIPSVR [:passwd@]addr[:port]/mponit[:string]
*                    addr  = NTRIP caster address to connect
*                    port  = NTRIP caster server port to connect
*                    passwd= NTRIP caster server password to connect
*                    mpoint= NTRIP mountpoint
*                    string= NTRIP server string
*
*   STR_NTRIPCLI [user[:passwd]@]addr[:port]/mpoint
*                    addr  = NTRIP caster address to connect
*                    port  = NTRIP caster client port to connect
*                    user  = NTRIP caster client user to connect
*                    passwd= NTRIP caster client password to connect
*                    mpoint= NTRIP mountpoint
*
*   STR_NTRIPC_S [:passwd@][:port]/mpoint
*                    port  = NTRIP caster server port to accept
*                    passwd= NTRIP caster server password to accept
*                    mpoint= NTRIP mountpoint
*
*   STR_NTRIPC_C [user[:passwd]@][:port]/mpoint
*                    port  = NTRIP caster client port to accept
*                    user  = NTRIP caster client user to accept
*                    passwd= NTRIP caster client password to accept
*                    mpoint= NTRIP mountpoint
*
*   STR_UDPSVR   :port
*                    port  = UDP server port to receive
*
*   STR_UDPCLI   addr:port
*                    addr  = UDP server or broadcast address to send
*                    port  = UDP server or broadcast port to send
*
*   STR_MEMBUF   [size]
*                    size  = FIFO size (bytes) ("":4096)
*
*   STR_FTP      [user[:passwd]@]addr/path[::T=poff[,tint[,toff,tret]]]]
*                    user  = FTP server user
*                    passwd= FTP server password
*                    addr  = FTP server address
*                    path  = FTP server file path
*                    poff  = time offset for path extension (s)
*                    tint  = download interval (s)
*                    toff  = download time offset (s)
*                    tret  = download retry interval (s) (0:no retry)
*
*   STR_HTTP     addr/path[::T=poff[,tint[,toff,tret]]]]
*                    addr  = HTTP server address
*                    path  = HTTP server file path
*                    poff  = time offset for path extension (s)
*                    tint  = download interval (s)
*                    toff  = download time offset (s)
*                    tret  = download retry interval (s) (0:no retry)
*
*-----------------------------------------------------------------------------*/
function stropen  (stream : stream_t,  type : number,  mode : number, path : string) : number{throw new Error("not implemented");}


/* close stream ----------------------------------------------------------------
* close stream
* args   : stream_t *stream IO  stream
* return : none
*-----------------------------------------------------------------------------*/
function strclose (stream : stream_t) :  void{throw new Error("not implemented");}

/* read stream -----------------------------------------------------------------
* read data from stream (unblocked)
* args   : stream_t *stream I  stream
*          unsinged char *buff O data buffer
*          int    n         I  maximum data length
* return : read data length
* notes  : if no data, return immediately with no data
*-----------------------------------------------------------------------------*/
function  strread  (stream : stream_t, buff : Buffer,  n : number) : number{throw new Error("not implemented");}

/* write stream ----------------------------------------------------------------
* write data to stream (unblocked)
* args   : stream_t *stream I   stream
*          unsinged char *buff I data buffer
*          int    n         I   data length
* return : status (0:error,1:ok)
* notes  : write data to buffer and return immediately
*-----------------------------------------------------------------------------*/
function  strwrite (stream : stream_t, buff : Buffer,  n : number) : number{throw new Error("not implemented");}

/* sync streams ----------------------------------------------------------------
* sync time for streams
* args   : stream_t *stream1 IO stream 1
*          stream_t *stream2 IO stream 2
* return : none
* notes  : for replay files with time tags
*-----------------------------------------------------------------------------*/
function strsync  (stream : stream_t, stream2 : stream_t) :  void{throw new Error("not implemented");}

/* get stream status -----------------------------------------------------------
* get stream status
* args   : stream_t *stream I   stream
*          char   *msg      IO  status message (NULL: no output)
* return : status (-1:error,0:close,1:wait,2:connect,3:active)
*-----------------------------------------------------------------------------*/
function strstat  (stream : stream_t, msg : string) : number{throw new Error("not implemented");}

/* get extended stream status ---------------------------------------------------
* get extended stream status
* args   : stream_t *stream I   stream
*          char   *msg      IO  extended status message
* return : status (-1:error,0:close,1:wait,2:connect,3:active)
*-----------------------------------------------------------------------------*/
function  strstatx (stream : stream_t, msg : string) : number{throw new Error("not implemented");}

/* get stream statistics summary -----------------------------------------------
* get stream statistics summary
* args   : stream_t *stream I   stream
*          int    *inb      IO   bytes of input  (NULL: no output)
*          int    *inr      IO   bps of input    (NULL: no output)
*          int    *outb     IO   bytes of output (NULL: no output)
*          int    *outr     IO   bps of output   (NULL: no output)
* return : none
*-----------------------------------------------------------------------------*/
function strsum   (stream : stream_t, inb : number, inr : number, outb : number, outr : number) : void{throw new Error("not implemented");}

/* get stream selection --------------------------------------------------------
* get stream selection for ntrip-caster
* args   : stream_t *stream I   stream
*          char   *sel      O   selected mountpoint of ntrip-caster
* return : status (0:error,1:ok)
*-----------------------------------------------------------------------------*/
function strgetsel(stream : stream_t, sel : string) : number{throw new Error("not implemented");}

/* set stream selection --------------------------------------------------------
* set stream selection for ntrip-caster
* args   : stream_t *stream I   stream
*          char   *sel      I   selected mountpoint of ntrip-caster ("":all)
* return : status (0:error,1:ok)
*-----------------------------------------------------------------------------*/
function strsetsel(stream : stream_t, sel : string) : number{throw new Error("not implemented");}

/* set ntrip source table to ntrip-caster stream -------------------------------
* set ntrip source table to ntrip-caster stream
* args   : stream_t *stream I   stream
*          char   *file     I   source table file
* return : status (0:error,1:ok)
*-----------------------------------------------------------------------------*/
function strsetsrctbl(stream : stream_t, file : string) : number{throw new Error("not implemented");}

/* set global stream options ---------------------------------------------------
* set global stream options
* args   : int    *opt      I   options
*              opt[0]= inactive timeout (ms) (0: no timeout)
*              opt[1]= interval to reconnect (ms)
*              opt[2]= averaging time of data rate (ms)
*              opt[3]= receive/send buffer size (bytes);
*              opt[4]= file swap margin (s)
*              opt[5]= reserved
*              opt[6]= reserved
*              opt[7]= reserved
* return : none
*-----------------------------------------------------------------------------*/
function strsetopt(opt : number[]) : void{throw new Error("not implemented");}

/* get stream time -------------------------------------------------------------
* get stream time
* args   : stream_t *stream I   stream
* return : current time or replay time for playback file
*-----------------------------------------------------------------------------*/
function strgettime(stream : stream_t) : Date{throw new Error("not implemented");}

/* send nmea request -----------------------------------------------------------
* send nmea gpgga message to stream
* args   : stream_t *stream I   stream
*          sol_t *sol       I   solution
* return : none
*-----------------------------------------------------------------------------*/
function strsendnmea(stream : stream_t, sol : sol_t) : void{throw new Error("not implemented");}


/* send receiver command -------------------------------------------------------
* send receiver commands to stream
* args   : stream_t *stream I   stream
*          char   *cmd      I   receiver command strings
* return : none
*-----------------------------------------------------------------------------*/
function strsendcmd(stream : stream_t, cmd : string) : void{throw new Error("not implemented");}

/* set timeout time ------------------------------------------------------------
* set timeout time
* args   : stream_t *stream I   stream (STR_TCPCLI,STR_NTRIPCLI,STR_NTRIPSVR)
*          int     toinact  I   inactive timeout (ms) (0: no timeout)
*          int     tirecon  I   reconnect interval (ms) (0: no reconnect)
* return : none
*-----------------------------------------------------------------------------*/
function strsettimeout(stream : stream_t,  toinact : number,  tirecon : number) :  void{throw new Error("not implemented");}

/* set local directory ---------------------------------------------------------
* set local directory path for ftp/http download
* args   : char   *dir      I   directory for download files
* return : none
*-----------------------------------------------------------------------------*/
function strsetdir(dir : string) : void{throw new Error("not implemented");}

/* set http/ntrip proxy address ------------------------------------------------
* set http/ntrip proxy address
* args   : char   *addr     I   http/ntrip proxy address <address>:<port>
* return : none
*-----------------------------------------------------------------------------*/
function strsetproxy(addr : string) : void{throw new Error("not implemented");}


/* integer ambiguity resolution ----------------------------------------------*/



/* lambda/mlambda integer least-square estimation ------------------------------
* integer least-square estimation. reduction is performed by lambda (ref.[1]),
* and search by mlambda (ref.[2]).
* args   : int    n      I  number of float parameters
*          int    m      I  number of fixed solutions
*          double *a     I  float parameters (n x 1)
*          double *Q     I  covariance matrix of float parameters (n x n)
*          double *F     O  fixed solutions (n x m)
*          double *s     O  sum of squared residulas of fixed solutions (1 x m)
* return : status (0:ok,other:error)
* notes  : matrix stored by column-major order (fortran convension)
*-----------------------------------------------------------------------------*/
function lambda( n : number,  m : number, a : number[], Q : number[], F : number[],
                  s : number[]) : number{throw new Error("not implemented");}

/* lambda reduction ------------------------------------------------------------
* reduction by lambda (ref [1]) for integer least square
* args   : int    n      I  number of float parameters
*          double *Q     I  covariance matrix of float parameters (n x n)
*          double *Z     O  lambda reduction matrix (n x n)
* return : status (0:ok,other:error)
*-----------------------------------------------------------------------------*/
function lambda_reduction( n : number, Q : number[], Z : number[]) : number{throw new Error("not implemented");}

/* mlambda search --------------------------------------------------------------
* search by  mlambda (ref [2]) for integer least square
* args   : int    n      I  number of float parameters
*          int    m      I  number of fixed solutions
*          double *a     I  float parameters (n x 1)
*          double *Q     I  covariance matrix of float parameters (n x n)
*          double *F     O  fixed solutions (n x m)
*          double *s     O  sum of squared residulas of fixed solutions (1 x m)
* return : status (0:ok,other:error)
*-----------------------------------------------------------------------------*/
function lambda_search( n : number,  m : number, a : number[], Q : number[],
                         F : number[], s : number[]) : number{throw new Error("not implemented");}

/* standard positioning ------------------------------------------------------*/

/* single-point positioning ----------------------------------------------------
* compute receiver position, velocity, clock bias by single-point positioning
* with pseudorange and doppler observables
* args   : obsd_t *obs      I   observation data
*          int    n         I   number of observation data
*          nav_t  *nav      I   navigation data
*          prcopt_t *opt    I   processing options
*          sol_t  *sol      IO  solution
*          double *azel     IO  azimuth/elevation angle (rad) (NULL: no output)
*          ssat_t *ssat     IO  satellite status              (NULL: no output)
*          char   *msg      O   error message for error exit
* return : status(1:ok,0:error)
* notes  : assuming sbas-gps, galileo-gps, qzss-gps, compass-gps time offset and
*          receiver bias are negligible (only involving glonass-gps time offset
*          and receiver bias)
*-----------------------------------------------------------------------------*/
function pntpos(obs : obsd_t ,  n : number, nav :  nav_t ,
                  opt :  prcopt_t, sol : sol_t, azel : number[],
                  ssat : ssat_t, msg : string) : number{throw new Error("not implemented");}


/* precise positioning -------------------------------------------------------*/


/* initialize rtk control ------------------------------------------------------
* initialize rtk control struct
* args   : rtk_t    *rtk    IO  rtk control/result struct
*          prcopt_t *opt    I   positioning options (see rtklib.h)
* return : none
*-----------------------------------------------------------------------------*/
function rtkinit(rtk : rtk_t, opt :  prcopt_t) : void{throw new Error("not implemented");}

/* free rtk control ------------------------------------------------------------
* free memory for rtk control struct
* args   : rtk_t    *rtk    IO  rtk control/result struct
* return : none
*-----------------------------------------------------------------------------*/
function rtkfree(rtk : rtk_t ) : void{throw new Error("not implemented");}

/* precise positioning ---------------------------------------------------------
* input observation data and navigation message, compute rover position by 
* precise positioning
* args   : rtk_t *rtk       IO  rtk control/result struct
*            rtk->sol       IO  solution
*                .time      O   solution time
*                .rr[]      IO  rover position/velocity
*                               (I:fixed mode,O:single mode)
*                .dtr[0]    O   receiver clock bias (s)
*                .dtr[1]    O   receiver glonass-gps time offset (s)
*                .Qr[]      O   rover position covarinace
*                .stat      O   solution status (SOLQ_???)
*                .ns        O   number of valid satellites
*                .age       O   age of differential (s)
*                .ratio     O   ratio factor for ambiguity validation
*            rtk->rb[]      IO  base station position/velocity
*                               (I:relative mode,O:moving-base mode)
*            rtk->nx        I   number of all states
*            rtk->na        I   number of integer states
*            rtk->ns        O   number of valid satellite
*            rtk->tt        O   time difference between current and previous (s)
*            rtk->x[]       IO  float states pre-filter and post-filter
*            rtk->P[]       IO  float covariance pre-filter and post-filter
*            rtk->xa[]      O   fixed states after AR
*            rtk->Pa[]      O   fixed covariance after AR
*            rtk->ssat[s]   IO  sat(s+1) status
*                .sys       O   system (SYS_???)
*                .az   [r]  O   azimuth angle   (rad) (r=0:rover,1:base)
*                .el   [r]  O   elevation angle (rad) (r=0:rover,1:base)
*                .vs   [r]  O   data valid single     (r=0:rover,1:base)
*                .resp [f]  O   freq(f+1) pseudorange residual (m)
*                .resc [f]  O   freq(f+1) carrier-phase residual (m)
*                .vsat [f]  O   freq(f+1) data vaild (0:invalid,1:valid)
*                .fix  [f]  O   freq(f+1) ambiguity flag
*                               (0:nodata,1:float,2:fix,3:hold)
*                .slip [f]  O   freq(f+1) slip flag
*                               (bit8-7:rcv1 LLI, bit6-5:rcv2 LLI,
*                                bit2:parity unknown, bit1:slip)
*                .lock [f]  IO  freq(f+1) carrier lock count
*                .outc [f]  IO  freq(f+1) carrier outage count
*                .slipc[f]  IO  freq(f+1) cycle slip count
*                .rejc [f]  IO  freq(f+1) data reject count
*                .gf        IO  geometry-free phase (L1-L2) (m)
*                .gf2       IO  geometry-free phase (L1-L5) (m)
*            rtk->nfix      IO  number of continuous fixes of ambiguity
*            rtk->neb       IO  bytes of error message buffer
*            rtk->errbuf    IO  error message buffer
*            rtk->tstr      O   time string for debug
*            rtk->opt       I   processing options
*          obsd_t *obs      I   observation data for an epoch
*                               obs[i].rcv=1:rover,2:reference
*                               sorted by receiver and satellte
*          int    n         I   number of observation data
*          nav_t  *nav      I   navigation messages
* return : status (0:no solution,1:valid solution)
* notes  : before calling function, base station position rtk->sol.rb[] should
*          be properly set for relative mode except for moving-baseline
*-----------------------------------------------------------------------------*/
function rtkpos (rtk : rtk_t, obs :  obsd_t,  nobs : number, nav :  nav_t) : number{throw new Error("not implemented");}

/* open solution status file ---------------------------------------------------
* open solution status file and set output level
* args   : char     *file   I   rtk status file
*          int      level   I   rtk status level (0: off)
* return : status (1:ok,0:error)
* notes  : file can constain time keywords (%Y,%y,%m...) defined in reppath().
*          The time to replace keywords is based on UTC of CPU time.
* output : solution status file record format
*
*   $POS,week,tow,stat,posx,posy,posz,posxf,posyf,poszf
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          posx/posy/posz    : position x/y/z ecef (m) float
*          posxf/posyf/poszf : position x/y/z ecef (m) fixed
*
*   $VELACC,week,tow,stat,vele,veln,velu,acce,accn,accu,velef,velnf,veluf,accef,accnf,accuf
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          vele/veln/velu    : velocity e/n/u (m/s) float
*          acce/accn/accu    : acceleration e/n/u (m/s^2) float
*          velef/velnf/veluf : velocity e/n/u (m/s) fixed
*          accef/accnf/accuf : acceleration e/n/u (m/s^2) fixed
*
*   $CLK,week,tow,stat,clk1,clk2,clk3,clk4
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          clk1     : receiver clock bias GPS (ns)
*          clk2     : receiver clock bias GLO-GPS (ns)
*          clk3     : receiver clock bias GAL-GPS (ns)
*          clk4     : receiver clock bias BDS-GPS (ns)
*
*   $ION,week,tow,stat,sat,az,el,ion,ion-fixed
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          sat      : satellite id
*          az/el    : azimuth/elevation angle(deg)
*          ion      : vertical ionospheric delay L1 (m) float
*          ion-fixed: vertical ionospheric delay L1 (m) fixed
*
*   $TROP,week,tow,stat,rcv,ztd,ztdf
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          rcv      : receiver (1:rover,2:base station)
*          ztd      : zenith total delay (m) float
*          ztdf     : zenith total delay (m) fixed
*
*   $HWBIAS,week,tow,stat,frq,bias,biasf
*          week/tow : gps week no/time of week (s)
*          stat     : solution status
*          frq      : frequency (1:L1,2:L2,...)
*          bias     : h/w bias coefficient (m/MHz) float
*          biasf    : h/w bias coefficient (m/MHz) fixed
*
*   $SAT,week,tow,sat,frq,az,el,resp,resc,vsat,snr,fix,slip,lock,outc,slipc,rejc
*          week/tow : gps week no/time of week (s)
*          sat/frq  : satellite id/frequency (1:L1,2:L2,...)
*          az/el    : azimuth/elevation angle (deg)
*          resp     : pseudorange residual (m)
*          resc     : carrier-phase residual (m)
*          vsat     : valid data flag (0:invalid,1:valid)
*          snr      : signal strength (dbHz)
*          fix      : ambiguity flag  (0:no data,1:float,2:fixed,3:hold,4:ppp)
*          slip     : cycle-slip flag (bit1:slip,bit2:parity unknown)
*          lock     : carrier-lock count
*          outc     : data outage count
*          slipc    : cycle-slip count
*          rejc     : data reject (outlier) count
*
*-----------------------------------------------------------------------------*/
function rtkopenstat(file : string,  level : number) : number{throw new Error("not implemented");}


/* close solution status file --------------------------------------------------
* close solution status file
* args   : none
* return : none
*-----------------------------------------------------------------------------*/
function rtkclosestat() : void{throw new Error("not implemented");}

/* write solution status to buffer -------------------------------------------*/
function rtkoutstat(rtk : rtk_t, buff : Buffer) : number{throw new Error("not implemented");}



/* precise point positioning -------------------------------------------------*/

/* precise point positioning -------------------------------------------------*/
function pppos(rtk : rtk_t, obs :  obsd_t,  n : number, nav :  nav_t) : void{throw new Error("not implemented");}

/* number of estimated states ------------------------------------------------*/
function pppnx(opt :  prcopt_t) : number{throw new Error("not implemented");}

/* write solution status for PPP ---------------------------------------------*/
function pppoutstat(rtk : rtk_t, buff : Buffer) : number{throw new Error("not implemented");}

/* ambiguity resolution in ppp -----------------------------------------------*/
function ppp_ar(rtk : rtk_t , obs :  obsd_t,  n : number, exc : number[],
                  nav :  nav_t, azel : number[], x : number, P : number) : number{throw new Error("not implemented");}

/* read ppp corrections --------------------------------------------------------
* read ppp correction data from external file
* args   : pppcorr_t *corr  IO  ppp correction data
*          char   *file     I   file
* return : status (1:ok,0:error)
* notes  : file types are recognized by file extenstions as follows.
*            .stat,.STAT : solution status file by rtklib
*            .stec,.STEC : stec parameters file by mgest
*            others      : sinex troposphere file
*          read data are added to ppp correction data.
*          To clear data, call pppcorr_free()
*-----------------------------------------------------------------------------*/
function pppcorr_read(corr : pppcorr_t, file : string) : number{throw new Error("not implemented");}

/* free ppp corrections --------------------------------------------------------
* free and clear ppp correction data
* args   : pppcorr_t *corr  IO  ppp correction data
* return : none
*-----------------------------------------------------------------------------*/
function pppcorr_free(corr : pppcorr_t) : void{throw new Error("not implemented");}

/* get tropospheric correction -------------------------------------------------
* get tropospheric correction from ppp correcion data
* args   : pppcorr_t *corr  I   ppp correction data
*          gtime_t time     I   time (GPST)
*          double *pos      I   receiver position {lat,lon,heght} (rad,m)
*          double *trp      O   tropos parameters {ztd,grade,gradn} (m)
*          double *std      O   standard deviation (m)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function pppcorr_trop(corr : pppcorr_t,  time : Date, pos : number[],
                        ztd : number[], std : number[]) : number{throw new Error("not implemented");}

/* get ionospherec correction --------------------------------------------------
* get ionospheric correction from ppp correction data
* args   : pppcorr_t *corr  I   ppp correction data
*          gtime_t time     I   time (GPST)
*          double *pos      I   receiver ecef position {x,y,z} (m)
*          double *ion      O   L1 slant ionos delay for each sat (MAXSAT x 1)
*                               (ion[i]==0: no correction data)
*          double *std      O   standard deviation (m)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function pppcorr_stec(corr :  pppcorr_t ,  time : Date, pos : number[],
                        ion : number[], std : number) : number{throw new Error("not implemented");}

/* post-processing positioning -----------------------------------------------*/


/* post-processing positioning -------------------------------------------------
* post-processing positioning
* args   : gtime_t ts       I   processing start time (ts.time==0: no limit)
*        : gtime_t te       I   processing end time   (te.time==0: no limit)
*          double ti        I   processing interval  (s) (0:all)
*          double tu        I   processing unit time (s) (0:all)
*          prcopt_t *popt   I   processing options
*          solopt_t *sopt   I   solution options
*          filopt_t *fopt   I   file options
*          char   **infile  I   input files (see below)
*          int    n         I   number of input files
*          char   *outfile  I   output file ("":stdout, see below)
*          char   *rov      I   rover id list        (separated by " ")
*          char   *base     I   base station id list (separated by " ")
* return : status (0:ok,0>:error,1:aborted)
* notes  : input files should contain observation data, navigation data, precise 
*          ephemeris/clock (optional), sbas log file (optional), ssr message
*          log file (optional) and tec grid file (optional). only the first 
*          observation data file in the input files is recognized as the rover
*          data.
*
*          the type of an input file is recognized by the file extention as ]
*          follows:
*              .sp3,.SP3,.eph*,.EPH*: precise ephemeris (sp3c)
*              .sbs,.SBS,.ems,.EMS  : sbas message log files (rtklib or ems)
*              .lex,.LEX            : qzss lex message log files
*              .rtcm3,.RTCM3        : ssr message log files (rtcm3)
*              .*i,.*I              : tec grid files (ionex)
*              .fcb,.FCB            : satellite fcb
*              others               : rinex obs, nav, gnav, hnav, qnav or clock
*
*          inputs files can include wild-cards (*). if an file includes
*          wild-cards, the wild-card expanded multiple files are used.
*
*          inputs files can include keywords. if an file includes keywords,
*          the keywords are replaced by date, time, rover id and base station
*          id and multiple session analyses run. refer reppath() for the
*          keywords.
*
*          the output file can also include keywords. if the output file does
*          not include keywords. the results of all multiple session analyses
*          are output to a single output file.
*
*          ssr corrections are valid only for forward estimation.
*-----------------------------------------------------------------------------*/
function postpos(ts : Date, te : Date,  ti : number,  tu : number,
                   popt :  prcopt_t, sopt :  solopt_t,
                   fopt : filopt_t, infile : string[],  n : number, outfile : string, 
                   rov : string, base : string) : number{throw new Error("not implemented");}

/* stream server functions ---------------------------------------------------*/


/* initialize stream server ----------------------------------------------------
* initialize stream server
* args   : strsvr_t *svr    IO  stream sever struct
*          int    nout      I   number of output streams
* return : none
*-----------------------------------------------------------------------------*/
function strsvrinit (svr : strsvr_t,  nout : number) : void{throw new Error("not implemented");}

/* start stream server ---------------------------------------------------------
* start stream server
* args   : strsvr_t *svr    IO  stream sever struct
*          int    *opts     I   stream options
*              opts[0]= inactive timeout (ms)
*              opts[1]= interval to reconnect (ms)
*              opts[2]= averaging time of data rate (ms)
*              opts[3]= receive/send buffer size (bytes);
*              opts[4]= server cycle (ms)
*              opts[5]= nmea request cycle (ms) (0:no)
*              opts[6]= file swap margin (s)
*              opts[7]= relay back of output stream (0:no)
*          int    *strs     I   stream types (STR_???)
*              strs[0]= input stream
*              strs[1]= output stream 1
*              strs[2]= output stream 2
*              strs[3]= output stream 3
*          char   **paths   I   stream paths
*              paths[0]= input stream
*              paths[1]= output stream 1
*              paths[2]= output stream 2
*              paths[3]= output stream 3
*          strcnv **conv    I   stream converter
*              conv[0]= output stream 1 converter
*              conv[1]= output stream 2 converter
*              conv[2]= output stream 3 converter
*          char   **cmds    I   start commands (NULL: no cmd)
*              cmds[0]= input stream command
*              cmds[1]= output stream 1 command
*              cmds[2]= output stream 2 command
*              cmds[3]= output stream 3 command
*          char   **cmds_periodic I periodic commands (NULL: no cmd)
*              cmds[0]= input stream command
*              cmds[1]= output stream 1 command
*              cmds[2]= output stream 2 command
*              cmds[3]= output stream 3 command
*          double *nmeapos  I   nmea request position (ecef) (m) (NULL: no)
* return : status (0:error,1:ok)
*-----------------------------------------------------------------------------*/
function strsvrstart(svr : strsvr_t, opts : number[], strs : number[], paths : string[],
                        conv : strconv_t[], cmds : string[], cmds_priodic : string[],
                        nmeapos : number) : number{throw new Error("not implemented");}

/* stop stream server ----------------------------------------------------------
* start stream server
* args   : strsvr_t *svr    IO  stream server struct
*          char  **cmds     I   stop commands (NULL: no cmd)
*              cmds[0]= input stream command
*              cmds[1]= output stream 1 command
*              cmds[2]= output stream 2 command
*              cmds[3]= output stream 3 command
* return : none
*-----------------------------------------------------------------------------*/             
function strsvrstop (svr : strsvr_t , cmds : string[]) : void{throw new Error("not implemented");}

/* get stream server status ----------------------------------------------------
* get status of stream server
* args   : strsvr_t *svr    IO  stream sever struct
*          int    *stat     O   stream status
*          int    *byte     O   bytes received/sent
*          int    *bps      O   bitrate received/sent
*          char   *msg      O   messages
* return : none
*-----------------------------------------------------------------------------*/
function strsvrstat (svr : strsvr_t, stat : number, byte : number, bps : number, msg : string) :  void{throw new Error("not implemented");}

/* new stream converter --------------------------------------------------------
* generate new stream converter
* args   : int    itype     I   input stream type  (STRFMT_???)
*          int    otype     I   output stream type (STRFMT_???)
*          char   *msgs     I   output message type and interval (, separated)
*          int    staid     I   station id
*          int    stasel    I   station info selection (0:remote,1:local)
*          char   *opt      I   rtcm or receiver raw options
* return : stream generator (NULL:error)
*-----------------------------------------------------------------------------*/
function strconvnew( itype : number, otype : number, msgs : string, staid : number,
                              stasel : number, opt : Buffer) : strconv_t {throw new Error("not implemented");}

/* free stream converter -------------------------------------------------------
* free stream converter
* args   : strconv_t *conv  IO  stream converter
* return : none
*-----------------------------------------------------------------------------*/
function strconvfree(conv : strconv_t) :  void{throw new Error("not implemented");}

/* set ntrip source table for stream server ------------------------------------
* set ntrip source table for stream server
* args   : strsvr_t *svr    IO  stream server struct
*          char  *file      I   source table file
* return : none
*-----------------------------------------------------------------------------*/
function strsvrsetsrctbl(svr : strsvr_t, file : string) :  void{throw new Error("not implemented");}

/* rtk server functions ------------------------------------------------------*/

/* initialize rtk server -------------------------------------------------------
* initialize rtk server
* args   : rtksvr_t *svr    IO rtk server
* return : status (0:error,1:ok)
*-----------------------------------------------------------------------------*/
function rtksvrinit  (svr : rtksvr_t) : number{throw new Error("not implemented");}

/* free rtk server -------------------------------------------------------------
* free rtk server
* args   : rtksvr_t *svr    IO rtk server
* return : none
*-----------------------------------------------------------------------------*/
function rtksvrfree  (svr : rtksvr_t) : void{throw new Error("not implemented");}

/* start rtk server ------------------------------------------------------------
* start rtk server thread
* args   : rtksvr_t *svr    IO rtk server
*          int     cycle    I  server cycle (ms)
*          int     buffsize I  input buffer size (bytes)
*          int     *strs    I  stream types (STR_???)
*                              types[0]=input stream rover
*                              types[1]=input stream base station
*                              types[2]=input stream correction
*                              types[3]=output stream solution 1
*                              types[4]=output stream solution 2
*                              types[5]=log stream rover
*                              types[6]=log stream base station
*                              types[7]=log stream correction
*          char    *paths   I  input stream paths
*          int     *format  I  input stream formats (STRFMT_???)
*                              format[0]=input stream rover
*                              format[1]=input stream base station
*                              format[2]=input stream correction
*          int     navsel   I  navigation message select
*                              (0:rover,1:base,2:ephem,3:all)
*          char    **cmds   I  input stream start commands
*                              cmds[0]=input stream rover (NULL: no command)
*                              cmds[1]=input stream base (NULL: no command)
*                              cmds[2]=input stream corr (NULL: no command)
*          char    **cmds_periodic I input stream periodic commands
*                              cmds[0]=input stream rover (NULL: no command)
*                              cmds[1]=input stream base (NULL: no command)
*                              cmds[2]=input stream corr (NULL: no command)
*          char    **rcvopts I receiver options
*                              rcvopt[0]=receiver option rover
*                              rcvopt[1]=receiver option base
*                              rcvopt[2]=receiver option corr
*          int     nmeacycle I nmea request cycle (ms) (0:no request)
*          int     nmeareq  I  nmea request type
*                              (0:no,1:base pos,2:single sol,3:reset and single)
*          double *nmeapos  I  transmitted nmea position (ecef) (m)
*          prcopt_t *prcopt I  rtk processing options
*          solopt_t *solopt I  solution options
*                              solopt[0]=solution 1 options
*                              solopt[1]=solution 2 options
*          stream_t *moni   I  monitor stream (NULL: not used)
*          char   *errmsg   O  error message
* return : status (1:ok 0:error)
*-----------------------------------------------------------------------------*/
function rtksvrstart (svr : rtksvr_t,  cycle : number,  buffsize : number, strs : number[],
                         paths : string[], formats : number[],  navsel : number, cmds : string[],
                         cmds_periodic : string[], rcvopts : string[],  nmeacycle : number,
                          nmeareq : number, nmeapos : number, prcopt : prcopt_t,
                         solopt : solopt_t, moni : stream_t, errmsg : string):number{throw new Error("not implemented");}


/* stop rtk server -------------------------------------------------------------
* start rtk server thread
* args   : rtksvr_t *svr    IO rtk server
*          char    **cmds   I  input stream stop commands
*                              cmds[0]=input stream rover (NULL: no command)
*                              cmds[1]=input stream base  (NULL: no command)
*                              cmds[2]=input stream ephem (NULL: no command)
* return : none
*-----------------------------------------------------------------------------*/
function rtksvrstop  (svr : rtksvr_t, cmds : string[]) : void{throw new Error("not implemented");}


/* open output/log stream ------------------------------------------------------
* open output/log stream
* args   : rtksvr_t *svr    IO rtk server
*          int     index    I  output/log stream index
*                              (3:solution 1,4:solution 2,5:log rover,
*                               6:log base station,7:log correction)
*          int     str      I  output/log stream types (STR_???)
*          char    *path    I  output/log stream path
*          solopt_t *solopt I  solution options
* return : status (1:ok 0:error)
*-----------------------------------------------------------------------------*/
function rtksvropenstr(svr : rtksvr_t,  index : number,  str : number,path : string,
                          solopt :  solopt_t) : number{throw new Error("not implemented");}

/* close output/log stream -----------------------------------------------------
* close output/log stream
* args   : rtksvr_t *svr    IO rtk server
*          int     index    I  output/log stream index
*                              (3:solution 1,4:solution 2,5:log rover,
*                               6:log base station,7:log correction)
* return : none
*-----------------------------------------------------------------------------*/
function rtksvrclosestr(svr : rtksvr_t,  index : number) : void{throw new Error("not implemented");}

/* lock/unlock rtk server ------------------------------------------------------
* lock/unlock rtk server
* args   : rtksvr_t *svr    IO rtk server
* return : status (1:ok 0:error)
*-----------------------------------------------------------------------------*/
function rtksvrlock  (svr : rtksvr_t) : void{throw new Error("not implemented");}

/* lock/unlock rtk server ------------------------------------------------------
* lock/unlock rtk server
* args   : rtksvr_t *svr    IO rtk server
* return : status (1:ok 0:error)
*-----------------------------------------------------------------------------*/
function rtksvrunlock(svr : rtksvr_t) : void{throw new Error("not implemented");}


/* get observation data status -------------------------------------------------
* get current observation data status
* args   : rtksvr_t *svr    I  rtk server
*          int     rcv      I  receiver (0:rover,1:base,2:ephem)
*          gtime_t *time    O  time of observation data
*          int     *sat     O  satellite prn numbers
*          double  *az      O  satellite azimuth angles (rad)
*          double  *el      O  satellite elevation angles (rad)
*          int     **snr    O  satellite snr for each freq (dBHz)
*                              snr[i][j] = sat i freq j snr
*          int     *vsat    O  valid satellite flag
* return : number of satellites
*-----------------------------------------------------------------------------*/
function rtksvrostat (svr : rtksvr_t,  type : number, time : Date, sat : number,
                         az : number, el : number, snr : number[][], vsat : number) : number{throw new Error("not implemented");}


/* get stream status -----------------------------------------------------------
* get current stream status
* args   : rtksvr_t *svr    I  rtk server
*          int     *sstat   O  status of streams
*          char    *msg     O  status messages
* return : none
*-----------------------------------------------------------------------------*/
function rtksvrsstat (svr : rtksvr_t, sstat : number, msg : string) : void{throw new Error("not implemented");}


/* mark current position -------------------------------------------------------
* open output/log stream
* args   : rtksvr_t *svr    IO rtk server
*          char    *name    I  marker name
*          char    *comment I  comment string
* return : status (1:ok 0:error)
*-----------------------------------------------------------------------------*/
function rtksvrmark(svr : rtksvr_t, name : string, comment : string) : number{throw new Error("not implemented");}


/* downloader functions ------------------------------------------------------*/


/* read url address list file of gnss data -------------------------------------
* read url address list file of gnss data
* args   : char   *file     I   gnss data url file
*          char   **types   I   selected types ("*":wildcard)
*          int    ntype     I   number of selected types
*          urls_t *urls     O   urls
*          int    nmax      I   max number of urls
* return : number of urls (0:error)
* notes  :
*    (1) url list file contains records containing the following fields
*        separated by spaces. if a field contains spaces, enclose it within "".
*
*        data_type  url_address       default_local_directory
*
*    (2) strings after # in a line are treated as comments
*    (3) url_address should be:
*
*        ftp://host_address/file_path or
*        http://host_address/file_path
*
*    (4) the field url_address or default_local_directory can include the
*        follwing keywords replaced by date, time, station names and environment
*        variables.
*
*        %Y -> yyyy    : year (4 digits) (2000-2099)
*        %y -> yy      : year (2 digits) (00-99)
*        %m -> mm      : month           (01-12)
*        %d -> dd      : day of month    (01-31)
*        %h -> hh      : hours           (00-23)
*        %H -> a       : hour code       (a-x)
*        %M -> mm      : minutes         (00-59)
*        %n -> ddd     : day of year     (001-366)
*        %W -> wwww    : gps week        (0001-9999)
*        %D -> d       : day of gps week (0-6)
*        %N -> nnn     : general number
*        %s -> ssss    : station name    (lower-case)
*        %S -> SSSS    : station name    (upper-case)
*        %r -> rrrr    : station name
*        %{env} -> env : environment variable
*-----------------------------------------------------------------------------*/
function dl_readurls(file : string, types : string[], ntype : number, urls : url_t,
                        nmax : number) : number{throw new Error("not implemented");}


/* read station list file ------------------------------------------------------
* read station list file
* args   : char   *file     I   station list file
*          char   **stas    O   stations
*          int    nmax      I   max number of stations
* return : number of stations (0:error)
* notes  :
*    (1) station list file contains station names separated by spaces.
*    (2) strings after # in a line are treated as comments
*-----------------------------------------------------------------------------*/
function dl_readstas(file : string, stas : string[],  nmax : number) : number{throw new Error("not implemented");}


/* execute download ------------------------------------------------------------
* execute download
* args   : gtime_t ts,te    I   time start and end
*          double tint      I   time interval (s)
*          int    seqnos    I   sequence number start
*          int    seqnoe    I   sequence number end
*          url_t  *urls     I   url address list
*          int    nurl      I   number of urls
*          char   **stas    I   station list
*          int    nsta      I   number of stations
*          char   *dir      I   local directory
*          char   *remote_p I   previous remote file path
*          char   *usr      I   login user for ftp
*          char   *pwd      I   login password for ftp
*          char   *proxy    I   proxy server address
*          int    opts      I   download options (or of the followings)
*                                 DLOPT_FORCE = force download existing file
*                                 DLOPT_KEEPCMP=keep compressed file
*                                 DLOPT_HOLDERR=hold on error file
*                                 DLOPT_HOLDLST=hold on listing file
*          char   *msg      O   output messages
*          FILE   *fp       IO  log file pointer (NULL: no output log)
* return : status (1:ok,0:error,-1:aborted)
* notes  : urls should be read by using dl_readurl()
*-----------------------------------------------------------------------------*/
function dl_exec(ts : Date, te : Date,  ti : number, seqnos : number,  seqnoe : number,
                    urls : url_t,  nurl : number, stas : string[],  nsta : number,
                   dir : string, usr : string, pwd : string,
                   proxy : string,  opts : number, msg : string, fp : FILE) : number{throw new Error("not implemented");}


/* execute local file test -----------------------------------------------------
* execute local file test
* args   : gtime_t ts,te    I   time start and end
*          double tint      I   time interval (s)
*          url_t  *urls     I   download urls
*          int    nurl      I   number of urls
*          char   **stas    I   stations
*          int    nsta      I   number of stations
*          char   *dir      I   local directory
*          int    ncol      I   number of column
*          int    datefmt   I   date format (0:year-dow,1:year-dd/mm,2:week)
*          FILE   *fp       IO  log test result file pointer
* return : status (1:ok,0:error,-1:aborted)
*-----------------------------------------------------------------------------*/
function dl_test(ts : Date, te : Date,  ti : number, urls :  url_t,
                     nurl : number, stas : string[],  nsta : number, dir : string,
                     ncol : number,  datefmt : number, fp : FILE) : void{throw new Error("not implemented");}



/* gis data functions --------------------------------------------------------*/

/* read gis data from shapefile ------------------------------------------------
* read gis data from shapefile (ref [1])
* args   : char   *file     I   shapefile
*          gis_t  *gis      IO  GIS data
* return : status (0:error)
* notes  : only support point, multipoint, polyline and polygon.
*          only support lat-lon for map projection.
*-----------------------------------------------------------------------------*/
function  gis_read(file : string, gis : gis_t,  layer : number) : number{throw new Error("not implemented");}

/* free gis-data ---------------------------------------------------------------
* free and initialize gis data
* args   : gis_t  *gis      IO  gis data
* return : none
*-----------------------------------------------------------------------------*/
function gis_free(gis : gis_t) : void{throw new Error("not implemented");}

/* qzss lex functions --------------------------------------------------------*/

/* update lex corrections ------------------------------------------------------
* update lex correction parameters in navigation data with a lex message
* args   : lexmsg_t *msg    I   lex message
*          nav_t    *nav    IO  navigation data
*          gtime_t  *tof    O   time of frame
* return : status (1:ok,0:error or not supported type)
*-----------------------------------------------------------------------------*/
function  lexupdatecorr(msg : lexmsg_t, nav : nav_t, tof : Date ) : number{throw new Error("not implemented");}

/* read qzss lex message log file ----------------------------------------------
* read sbas message file
* args   : char     *file   I   qzss lex message file
*          int      sel     I   qzss lex satellite prn number selection (0:all)
*          qzslex_t *lex    IO  qzss lex messages
* return : status (1:ok,0:error)
* notes  : only input file with extension .lex or .LEX.
*-----------------------------------------------------------------------------*/
function  lexreadmsg(file : string,  sel : number, lex : lex_t) : number{throw new Error("not implemented");}

/* output lex messages ---------------------------------------------------------
* output lex message record to output file in rtklib lex log format
* args   : FILE   *fp       I   output file pointer
*          lexmsg_t *lexmsg I   lex messages
* return : none
* notes  : see ref [1] 5.7.2.1
*-----------------------------------------------------------------------------*/
function  lexoutmsg(fp : FILE , msg : lexmsg_t) : void{throw new Error("not implemented");}

/* convert lex binary file to lex message log ----------------------------------
* convert lex binary file to lex message log
* args   : int    type      I   output type (0:all)
*          int    format    I   lex binary format (0:no-headr,1:with-header)
*          char   *infile   I   input file
*          char   *outfile  I   output file
* return : status (1:ok,0:no correction)
* notes  : see ref [1] 5.7.2.1
*-----------------------------------------------------------------------------*/
function  lexconvbin(type : number,  format : number, infile : string,
                      outfile : string) : number{throw new Error("not implemented");}

/* lex satellite ephemeris and clock correction -------------------------------
* satellite position by lex ephemeris
* args   : gtime_t time     I   time (gpst)
*          int    sat       I   satellite
*          nav_t  *nav      I   navigation data
*          double *rs       O   satellite position and velocity
*                               {x,y,z,vx,vy,vz} (ecef) (m|m/s)
*          double *dts      O   satellite clock {bias,drift} (s|s/s)
*          double *var      O   satellite position and clock variance (m^2)
* return : status (1:ok,0:no correction)
* notes  : see ref [1] 5.7.2.2.1.2
*          before calling the function, call lexupdatecorr() to set lex 
*          corrections to navigation data
*          dts includes relativistic effect correction
*          dts does not include code bias correction
*-----------------------------------------------------------------------------*/
function  lexeph2pos(time : Date,  sat : number, nav : nav_t, rs : number[],
                      dts : number[], variance : number) : number{throw new Error("not implemented");}

/* lex ionosphere correction --------------------------------------------------
* ionosphere correction by lex correction
* args   : gtime_t  time    I   time
*          nav_t    *nav    I   navigation data
*          double   *pos    I   receiver position {lat,lon,height} (rad/m)
*          double   *azel   I   satellite azimuth/elavation angle (rad)
*          double   *delay  O   slant ionospheric delay (L1) (m)
*          double   *var    O   variance of ionospheric delay (m^2)
* return : status (1:ok, 0:no correction)
* notes  : see ref [1] 5.7.2.2.1.3
*          before calling the function, call lexupdatecorr() to set lex 
*          corrections to navigation data
*-----------------------------------------------------------------------------*/
function  lexioncorr(time : Date, nav :  nav_t, pos : number[],
                      azel : number[], delay : number, variance : number) : number{throw new Error("not implemented");}

/* application defined functions ---------------------------------------------*/
// function int showmsg(char *format,...);
// function void settspan(gtime_t ts, gtime_t te);
// function void settime(gtime_t time);
