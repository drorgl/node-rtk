
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




/* satellites, systems, codes functions --------------------------------------*/

/* satellite system+prn/slot number to satellite number ------------------------
* convert satellite system+prn/slot number to satellite number
* args   : int    sys       I   satellite system (SYS_GPS,SYS_GLO,...)
*          int    prn       I   satellite prn/slot number
* return : satellite number (0:error)
*-----------------------------------------------------------------------------*/
  function satno   ( sys : number,  prn : number) : number{

  }


/* satellite number to satellite system ----------------------------------------
* convert satellite number to satellite system
* args   : int    sat       I   satellite number (1-MAXSAT)
*          int    *prn      IO  satellite prn/slot number (NULL: no output)
* return : satellite system (SYS_GPS,SYS_GLO,...)
*-----------------------------------------------------------------------------*/  
function   satsys  ( sat : number, prn : number[]) : number{

}


/* satellite id to satellite number --------------------------------------------
* convert satellite id to satellite number
* args   : char   *id       I   satellite id (nn,Gnn,Rnn,Enn,Jnn,Cnn or Snn)
* return : satellite number (0: error)
* notes  : 120-138 and 193-195 are also recognized as sbas and qzss
*-----------------------------------------------------------------------------*/
function   satid2no(id : string) : number{

}

/* satellite number to satellite id --------------------------------------------
* convert satellite number to satellite id
* args   : int    sat       I   satellite number
*          char   *id       O   satellite id (Gnn,Rnn,Enn,Jnn,Cnn or nnn)
* return : none
*-----------------------------------------------------------------------------*/
function  satno2id( sat : number, id : string): void{

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

}


/* test excluded satellite -----------------------------------------------------
* test excluded satellite
* args   : int    sat       I   satellite number
*          int    svh       I   sv health flag
*          prcopt_t *opt    I   processing options (NULL: not used)
* return : status (1:excluded,0:not excluded)
*-----------------------------------------------------------------------------*/
function  satexclude( sat : number,  svh : number, opt : prcopt_t ) : number{

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

}

/* get code priority -----------------------------------------------------------
* get code priority for multiple codes in a frequency
* args   : int    sys     I     system (SYS_???)
*          unsigned char code I obs code (CODE_???)
*          char   *opt    I     code options (NULL:no option)
* return : priority (15:highest-1:lowest,0:error)
*-----------------------------------------------------------------------------*/
function  getcodepri( sys : number,  code : number, opt : string) : number{

}

/* matrix and vector functions -----------------------------------------------*/

/* new matrix ------------------------------------------------------------------
* allocate memory of matrix 
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function mat  ( n:number,  m : number):number{}

/* new integer matrix ----------------------------------------------------------
* allocate memory of integer matrix 
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function imat ( n : number,  m : number):number[]{}

/* zero matrix -----------------------------------------------------------------
* generate new zero matrix
* args   : int    n,m       I   number of rows and columns of matrix
* return : matrix pointer (if n<=0 or m<=0, return NULL)
*-----------------------------------------------------------------------------*/
function zeros( n : number,  m : number):number[]{}

/* identity matrix -------------------------------------------------------------
* generate new identity matrix
* args   : int    n         I   number of rows and columns of matrix
* return : matrix pointer (if n<=0, return NULL)
*-----------------------------------------------------------------------------*/
function eye  ( n : number) : number[]{}

/* inner product ---------------------------------------------------------------
* inner product of vectors
* args   : double *a,*b     I   vector a,b (n x 1)
*          int    n         I   size of vector a,b
* return : a'*b
*-----------------------------------------------------------------------------*/
function  dot (a : number[], b : number[],  n : number):number{}

/* euclid norm -----------------------------------------------------------------
* euclid norm of vector
* args   : double *a        I   vector a (n x 1)
*          int    n         I   size of vector a
* return : || a ||
*-----------------------------------------------------------------------------*/
function norm(a : number[],  n : number) : number{}

/* outer product of 3d vectors -------------------------------------------------
* outer product of 3d vectors 
* args   : double *a,*b     I   vector a,b (3 x 1)
*          double *c        O   outer product (a x b) (3 x 1)
* return : none
*-----------------------------------------------------------------------------*/
function  cross3(a : number[], b : number[], c : number[]) : void{}

/* normalize 3d vector ---------------------------------------------------------
* normalize 3d vector
* args   : double *a        I   vector a (3 x 1)
*          double *b        O   normlized vector (3 x 1) || b || = 1
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function   normv3(a : number[], b : number) : number{}

/* copy matrix -----------------------------------------------------------------
* copy matrix
* args   : double *A        O   destination matrix A (n x m)
*          double *B        I   source matrix B (n x m)
*          int    n,m       I   number of rows and columns of matrix
* return : none
*-----------------------------------------------------------------------------*/
function matcpy(A : number[], B : number[],  n : number,  m : number) : void{}

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
function matmul(tr : string,  n : number,  k : numbe,  m : number,  alpha : number,
                   A : number[], B : number[],  beta : number, C : number[]) : void{}

/* inverse of matrix -----------------------------------------------------------
* inverse of matrix (A=A^-1)
* args   : double *A        IO  matrix (n x n)
*          int    n         I   size of matrix A
* return : status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function  matinv(A : number[],  n : number) : number{}

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
                    m : number, X : number[]) : number{}

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
                   Q : number[]): number {}


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
                   R : number[],  n : number, m : number) : number{}



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
                     Qb : number[], n : number, xs : number[], Qs : number[]) : number{}


/* print matrix ----------------------------------------------------------------
* print matrix to stdout
* args   : double *A        I   matrix A (n x m)
*          int    n,m       I   number of rows and columns of A
*          int    p,q       I   total columns, columns under decimal point
*         (FILE  *fp        I   output file pointer)
* return : none
* notes  : matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/
function matprint (A:number[],  n : number,  m:number,  p : number,  q : number) : void{}
function matfprint(A:number[],  n : number,  m:number,  p : number,  q : number, fp : FILE) : void{}



//function void add_fatal(fatalfunc_t *func);

/* time and string functions -------------------------------------------------*/


/* string to number ------------------------------------------------------------
* convert substring in string to number
* args   : char   *s        I   string ("... nnn.nnn ...")
*          int    i,n       I   substring position and width
* return : converted number (0.0:error)
*-----------------------------------------------------------------------------*/
function   str2num( s : string,  i : number,  n : number):number{}


/* string to time --------------------------------------------------------------
* convert substring in string to gtime_t struct
* args   : char   *s        I   string ("... yyyy mm dd hh mm ss ...")
*          int    i,n       I   substring position and width
*          gtime_t *t       O   gtime_t struct
* return : status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function      str2time(s : string,  i : number,  n : number, t : Date):number{}


/* time to string --------------------------------------------------------------
* convert gtime_t struct to string
* args   : gtime_t t        I   gtime_t struct
*          char   *s        O   string ("yyyy/mm/dd hh:mm:ss.ssss")
*          int    n         I   number of decimals
* return : none
*-----------------------------------------------------------------------------*/
export function  time2str(t : Date, str : string,  n : number) : string{}


/* convert calendar day/time to time -------------------------------------------
* convert calendar day/time to gtime_t struct
* args   : double *ep       I   day/time {year,month,day,hour,min,sec}
* return : gtime_t struct
* notes  : proper in 1970-2037 or 1970-2099 (64bit time_t)
*-----------------------------------------------------------------------------*/
export function  epoch2time(ep : number[]) : Date{}

/* time to calendar day/time ---------------------------------------------------
* convert gtime_t struct to calendar day/time
* args   : gtime_t t        I   gtime_t struct
*          double *ep       O   day/time {year,month,day,hour,min,sec}
* return : none
* notes  : proper in 1970-2037 or 1970-2099 (64bit time_t)
*-----------------------------------------------------------------------------*/
function     time2epoch( t : Date, ep : number[]) : void{}

/* gps time to time ------------------------------------------------------------
* convert week and tow in gps time to gtime_t struct
* args   : int    week      I   week number in gps time
*          double sec       I   time of week in gps time (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function  gpst2time( week : number,  sec : number) : Date{}

/* time to gps time ------------------------------------------------------------
* convert gtime_t struct to week and tow in gps time
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in gps time (NULL: no output)
* return : time of week in gps time (s)
*-----------------------------------------------------------------------------*/
function  time2gpst(t : Date, week : number) : number {}

/* galileo system time to time -------------------------------------------------
* convert week and tow in galileo system time (gst) to gtime_t struct
* args   : int    week      I   week number in gst
*          double sec       I   time of week in gst (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function gst2time(week : number,  sec : number) : Date{}

/* time to galileo system time -------------------------------------------------
* convert gtime_t struct to week and tow in galileo system time (gst)
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in gst (NULL: no output)
* return : time of week in gst (s)
*-----------------------------------------------------------------------------*/
function time2gst(t : Date, week : number) : number{}

/* beidou time (bdt) to time ---------------------------------------------------
* convert week and tow in beidou time (bdt) to gtime_t struct
* args   : int    week      I   week number in bdt
*          double sec       I   time of week in bdt (s)
* return : gtime_t struct
*-----------------------------------------------------------------------------*/
function bdt2time(week : number, sec : number) : Date{}

/* time to beidouo time (bdt) --------------------------------------------------
* convert gtime_t struct to week and tow in beidou time (bdt)
* args   : gtime_t t        I   gtime_t struct
*          int    *week     IO  week number in bdt (NULL: no output)
* return : time of week in bdt (s)
*-----------------------------------------------------------------------------*/
function time2bdt(t : Date, week : number) : number{}

/* get time string -------------------------------------------------------------
* get time string
* args   : gtime_t t        I   gtime_t struct
*          int    n         I   number of decimals
* return : time string
* notes  : not reentrant, do not use multiple in a function
*-----------------------------------------------------------------------------*/
function time_str(t : Date, n : number) : string{}

/* add time --------------------------------------------------------------------
* add time to gtime_t struct
* args   : gtime_t t        I   gtime_t struct
*          double sec       I   time to add (s)
* return : gtime_t struct (t+sec)
*-----------------------------------------------------------------------------*/
function timeadd  (t : Date, sec : number) : Date{}

/* time difference -------------------------------------------------------------
* difference between gtime_t structs
* args   : gtime_t t1,t2    I   gtime_t structs
* return : time difference (t1-t2) (s)
*-----------------------------------------------------------------------------*/
function timediff (t1 : Date, t2 : Date) : number{}

/* gpstime to utc --------------------------------------------------------------
* convert gpstime to utc considering leap seconds
* args   : gtime_t t        I   time expressed in gpstime
* return : time expressed in utc
* notes  : ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function gpst2utc (t : Date) : Date{}


/* utc to gpstime --------------------------------------------------------------
* convert utc to gpstime considering leap seconds
* args   : gtime_t t        I   time expressed in utc
* return : time expressed in gpstime
* notes  : ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function utc2gpst (t : Date) : Date{}

/* gpstime to bdt --------------------------------------------------------------
* convert gpstime to bdt (beidou navigation satellite system time)
* args   : gtime_t t        I   time expressed in gpstime
* return : time expressed in bdt
* notes  : ref [8] 3.3, 2006/1/1 00:00 BDT = 2006/1/1 00:00 UTC
*          no leap seconds in BDT
*          ignore slight time offset under 100 ns
*-----------------------------------------------------------------------------*/
function gpst2bdt (t : Date) : Date{}


/* bdt to gpstime --------------------------------------------------------------
* convert bdt (beidou navigation satellite system time) to gpstime
* args   : gtime_t t        I   time expressed in bdt
* return : time expressed in gpstime
* notes  : see gpst2bdt()
*-----------------------------------------------------------------------------*/
function bdt2gpst (t : Date) : Date{}

/* get current time in utc -----------------------------------------------------
* get current time in utc
* args   : none
* return : current time in utc
*-----------------------------------------------------------------------------*/
function timeget  () : Date{}

/* set current time in utc -----------------------------------------------------
* set current time in utc
* args   : gtime_t          I   current time in utc
* return : none
* notes  : just set time offset between cpu time and current time
*          the time offset is reflected to only timeget()
*          not reentrant
*-----------------------------------------------------------------------------*/
function timeset  (t : Date) : void{}

/* time to day of year ---------------------------------------------------------
* convert time to day of year
* args   : gtime_t t        I   gtime_t struct
* return : day of year (days)
*-----------------------------------------------------------------------------*/
function time2doy (t : Date) : number{}

/* utc to gmst -----------------------------------------------------------------
* convert utc to gmst (Greenwich mean sidereal time)
* args   : gtime_t t        I   time expressed in utc
*          double ut1_utc   I   UT1-UTC (s)
* return : gmst (rad)
*-----------------------------------------------------------------------------*/
function utc2gmst (t : Date, ut1_utc : number) : number{}

/* read leap seconds table -----------------------------------------------------
* read leap seconds table
* args   : char    *file    I   leap seconds table file
* return : status (1:ok,0:error)
* notes  : (1) The records in the table file cosist of the following fields:
*              year month day hour min sec UTC-GPST(s)
*          (2) The date and time indicate the start UTC time for the UTC-GPST
*          (3) The date and time should be descending order.
*-----------------------------------------------------------------------------*/
function read_leaps(file : string) : number{}

/* adjust gps week number ------------------------------------------------------
* adjust gps week number using cpu time
* args   : int   week       I   not-adjusted gps week number
* return : adjusted gps week number
*-----------------------------------------------------------------------------*/
function adjgpsweek(week : number) : number{}

/* get tick time ---------------------------------------------------------------
* get current tick in ms
* args   : none
* return : current tick in ms
*-----------------------------------------------------------------------------*/
function tickget() : number{}

/* sleep ms --------------------------------------------------------------------
* sleep ms
* args   : int   ms         I   miliseconds to sleep (<0:no sleep)
* return : none
*-----------------------------------------------------------------------------*/
function sleepms(ms : number) : void;

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
                   base : string) : number{}


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
                    te : Date, rov : string, base : string) : number{}



/* coordinates transformation ------------------------------------------------*/

/* transform ecef to geodetic postion ------------------------------------------
* transform ecef position to geodetic position
* args   : double *r        I   ecef position {x,y,z} (m)
*          double *pos      O   geodetic position {lat,lon,h} (rad,m)
* return : none
* notes  : WGS84, ellipsoidal height
*-----------------------------------------------------------------------------*/
export function ecef2pos(r  :number[], pos : number[]):void{}


/* transform geodetic to ecef position -----------------------------------------
* transform geodetic position to ecef position
* args   : double *pos      I   geodetic position {lat,lon,h} (rad,m)
*          double *r        O   ecef position {x,y,z} (m)
* return : none
* notes  : WGS84, ellipsoidal height
*-----------------------------------------------------------------------------*/
export function pos2ecef(pos:number[], r : number[]):void{}

/* transform ecef vector to local tangental coordinate -------------------------
* transform ecef vector to local tangental coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *r        I   vector in ecef coordinate {x,y,z}
*          double *e        O   vector in local tangental coordinate {e,n,u}
* return : none
*-----------------------------------------------------------------------------*/
export function ecef2enu(pos:number[], r:number[], e: number[]):void{}

/* transform local vector to ecef coordinate -----------------------------------
* transform local tangental coordinate vector to ecef
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *e        I   vector in local tangental coordinate {e,n,u}
*          double *r        O   vector in ecef coordinate {x,y,z}
* return : none
*-----------------------------------------------------------------------------*/
export function enu2ecef(pos:number[], e:number[], r: number[]):void{}


/* transform covariance to local tangental coordinate --------------------------
* transform ecef covariance to local tangental coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *P        I   covariance in ecef coordinate
*          double *Q        O   covariance in local tangental coordinate
* return : none
*-----------------------------------------------------------------------------*/
export function covenu  (pos:number[], P:number[], Q: number[]):void{}

/* transform local enu coordinate covariance to xyz-ecef -----------------------
* transform local enu covariance to xyz-ecef coordinate
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *Q        I   covariance in local enu coordinate
*          double *P        O   covariance in xyz-ecef coordinate
* return : none
*-----------------------------------------------------------------------------*/
export function covecef (pos:number[], Q:number[], P: number[]):void{}


/* ecef to local coordinate transfromation matrix ------------------------------
* compute ecef to local coordinate transfromation matrix
* args   : double *pos      I   geodetic position {lat,lon} (rad)
*          double *E        O   ecef to local coord transformation matrix (3x3)
* return : none
* notes  : matirix stored by column-major order (fortran convention)
*-----------------------------------------------------------------------------*/
export function xyz2enu (pos:number[], E : number[]):void{}

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
export function eci2ecef( tutc : Date, erpv : number[], U : number[], gmst : number[]):void{}

/* convert degree to deg-min-sec -----------------------------------------------
* convert degree to degree-minute-second
* args   : double deg       I   degree
*          double *dms      O   degree-minute-second {deg,min,sec}
* return : none
*-----------------------------------------------------------------------------*/
export function deg2dms ( deg : number, dms : number[],  ndec : number):void{}

/* convert deg-min-sec to degree -----------------------------------------------
* convert degree-minute-second to degree
* args   : double *dms      I   degree-minute-second {deg,min,sec}
* return : degree
*-----------------------------------------------------------------------------*/
export function  dms2deg(dms : number[]) : number{}



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
function  readpos(file : string, rcv : string, pos : number[]) : void{}


/* sort and unique observation data --------------------------------------------
* sort and unique observation data by time, rcv, sat
* args   : obs_t *obs    IO     observation data
* return : number of epochs
*-----------------------------------------------------------------------------*/
function sortobs(obs : obs_t) : number{}


/* unique ephemerides ----------------------------------------------------------
* unique ephemerides in navigation data and update carrier wave length
* args   : nav_t *nav    IO     navigation data
* return : number of epochs
*-----------------------------------------------------------------------------*/
function uniqnav(nav : nav_t) : void{}


/* screen by time --------------------------------------------------------------
* screening by time start, time end, and time interval
* args   : gtime_t time  I      time
*          gtime_t ts    I      time start (ts.time==0:no screening by ts)
*          gtime_t te    I      time end   (te.time==0:no screening by te)
*          double  tint  I      time interval (s) (0.0:no screen by tint)
* return : 1:on condition, 0:not on condition
*-----------------------------------------------------------------------------*/
function screent(time : Date, ts : Date, te : Date, tint : number) : number{}


/* read/save navigation data ---------------------------------------------------
* save or load navigation data
* args   : char    file  I      file path
*          nav_t   nav   O/I    navigation data
* return : status (1:ok,0:no file)
*-----------------------------------------------------------------------------*/
function readnav(file : string, nav : nav_t) : number{}


 /* save navigation data savenav(NAVIFILE,&svr.nav) */
function  savenav(file : string, nav : nav_t ) : number{}


/* free observation data -------------------------------------------------------
* free memory for observation data
* args   : obs_t *obs    IO     observation data
* return : none
*-----------------------------------------------------------------------------*/
function freeobs(obs : obs_t) : void{}


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
function freenav(nav : nav_t, opt : number) : void{}


/* read blq ocean tide loading parameters --------------------------------------
* read blq ocean tide loading parameters
* args   : char   *file       I   BLQ ocean tide loading parameter file
*          char   *sta        I   station name
*          double *odisp      O   ocean tide loading parameters
* return : status (1:ok,0:file open error)
*-----------------------------------------------------------------------------*/
function readblq(file : string, sta : string, odisp : number) : number{}

/* read earth rotation parameters ----------------------------------------------
* read earth rotation parameters
* args   : char   *file       I   IGS ERP file (IGS ERP ver.2)
*          erp_t  *erp        O   earth rotation parameters
* return : status (1:ok,0:file open error)
*-----------------------------------------------------------------------------*/
function readerp(file : string, erp : erp_t) : number{}


/* get earth rotation parameter values -----------------------------------------
* get earth rotation parameter values
* args   : erp_t  *erp        I   earth rotation parameters
*          gtime_t time       I   time (gpst)
*          double *erpv       O   erp values {xp,yp,ut1_utc,lod} (rad,rad,s,s/d)
* return : status (1:ok,0:error)
*-----------------------------------------------------------------------------*/
function geterp (erp : erp_t, time : Date, val : number[]) : number{}



/* debug trace functions -----------------------------------------------------*/
function  traceopen(file : string) : void{}
function  traceclose() : void{}
function  tracelevel( level:number) : void{}
function  trace     ( level:number, format : string, ...args:any[]) : void{}
function  tracet    ( level:number, format : string, ...args:any[]) : void{}
function  tracemat  ( level:number, A : number[], n : number, m : number, p : number, q : number) : void{}
function  traceobs  ( level:number,  obs : obsd_t ,  n : number) : void{}
function  tracenav  ( level:number, nav :  nav_t): void{}
function  tracegnav ( level:number,  nav : nav_t): void{}
function  tracehnav ( level:number,  nav : nav_t): void{}
function  tracepeph ( level:number,  nav : nav_t): void{}
function  tracepclk ( level:number,  nav : nav_t): void{}
function  traceb    ( level:number,  p : Buffer, n : number) : void{}



/* platform dependent functions ----------------------------------------------*/

/* execute command -------------------------------------------------------------
* execute command line by operating system shell
* args   : char   *cmd      I   command line
* return : execution status (0:ok,0>:error)
*-----------------------------------------------------------------------------*/
function execcmd(cmd : string) : number{}

/* expand file path ------------------------------------------------------------
* expand file path with wild-card (*) in file
* args   : char   *path     I   file path to expand (captal insensitive)
*          char   *paths    O   expanded file paths
*          int    nmax      I   max number of expanded file paths
* return : number of expanded file paths
* notes  : the order of expanded files is alphabetical order
*-----------------------------------------------------------------------------*/
function expath (path : string, paths : string[], nmax : number) : number{}

/* create directory ------------------------------------------------------------
* create directory if not exist
* args   : char   *path     I   file path to be saved
* return : none
* notes  : not recursive. only one level
*-----------------------------------------------------------------------------*/
function createdir(path : string) : void{}



/* positioning models --------------------------------------------------------*/


/* satellite carrier wave length -----------------------------------------------
* get satellite carrier wave lengths
* args   : int    sat       I   satellite number
*          int    frq       I   frequency index (0:L1,1:L2,2:L5/3,...)
*          nav_t  *nav      I   navigation messages
* return : carrier wave length (m) (0.0: error)
*-----------------------------------------------------------------------------*/
function satwavelen(sat : number, frq : number, nav :  nav_t) : number{}

/* satellite azimuth/elevation angle -------------------------------------------
* compute satellite azimuth/elevation angle
* args   : double *pos      I   geodetic position {lat,lon,h} (rad,m)
*          double *e        I   receiver-to-satellilte unit vevtor (ecef)
*          double *azel     IO  azimuth/elevation {az,el} (rad) (NULL: no output)
*                               (0.0<=azel[0]<2*pi,-pi/2<=azel[1]<=pi/2)
* return : elevation angle (rad)
*-----------------------------------------------------------------------------*/
function satazel(pos : number[], e : number[], azel : number[]) : number{}

/* geometric distance ----------------------------------------------------------
* compute geometric distance and receiver-to-satellite unit vector
* args   : double *rs       I   satellilte position (ecef at transmission) (m)
*          double *rr       I   receiver position (ecef at reception) (m)
*          double *e        O   line-of-sight vector (ecef)
* return : geometric distance (m) (0>:error/no satellite position)
* notes  : distance includes sagnac effect correction
*-----------------------------------------------------------------------------*/
function geodist(rs : number[], rr : number[], e : number[]) : number{}

/* compute dops ----------------------------------------------------------------
* compute DOP (dilution of precision)
* args   : int    ns        I   number of satellites
*          double *azel     I   satellite azimuth/elevation angle (rad)
*          double elmin     I   elevation cutoff angle (rad)
*          double *dop      O   DOPs {GDOP,PDOP,HDOP,VDOP}
* return : none
* notes  : dop[0]-[3] return 0 in case of dop computation error
*-----------------------------------------------------------------------------*/
function dops(ns : number, azel : number[], elmin : number, dop : number) : void{}

/* carrier smoothing -----------------------------------------------------------
* carrier smoothing by Hatch filter
* args   : obs_t  *obs      IO  raw observation data/smoothed observation data
*          int    ns        I   smoothing window size (epochs)
* return : none
*-----------------------------------------------------------------------------*/
function csmooth(obs : obs_t,  ns : number) : void{}

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
                       azel : number[]):double{}

/* ionosphere mapping function -------------------------------------------------
* compute ionospheric delay mapping function by single layer model
* args   : double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
* return : ionospheric mapping function
*-----------------------------------------------------------------------------*/                 
function ionmapf(pos : number[], azel : number[]) : number{}


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
                     hion : number, pppos : number[]) : number{}

/* troposphere model -----------------------------------------------------------
* compute tropospheric delay by standard atmosphere and saastamoinen model
* args   : gtime_t time     I   time
*          double *pos      I   receiver position {lat,lon,h} (rad,m)
*          double *azel     I   azimuth/elevation angle {az,el} (rad)
*          double humi      I   relative humidity
* return : tropospheric delay (m)
*-----------------------------------------------------------------------------*/
export function tropmodel( time : Date, pos : number[], azel : number[],
                         humi : number) : number{}




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
                       mapfw : number): ITropmapfReturn{}


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
function iontec(gtime_t time, const nav_t *nav, const double *pos,
                  const double *azel, int opt, double *delay, double *var) : number{}


function void readtec(const char *file, nav_t *nav, int opt);


function int ionocorr(gtime_t time, const nav_t *nav, int sat, const double *pos,
                    const double *azel, int ionoopt, double *ion, double *var);

                    
function int tropcorr(gtime_t time, const nav_t *nav, const double *pos,
                    const double *azel, int tropopt, double *trp, double *var);

/* antenna models ------------------------------------------------------------*/
function readpcv(file:string, pcvs:pcvs_t ) : number{}
function searchpcv(sat:number, type:string,  time:Date,
                        pcvs: pcvs_t):pcv_t {}
function void antmodel(pcv : pcv_t , del:number[], azel : number[],
                     int opt, double *dant);
function void antmodel_s(const pcv_t *pcv, double nadir, double *dant);

/* earth tide models ---------------------------------------------------------*/
function void sunmoonpos(gtime_t tutc, const double *erpv, double *rsun,
                       double *rmoon, double *gmst);
function void tidedisp(gtime_t tutc, const double *rr, int opt, const erp_t *erp,
                     const double *odisp, double *dr);

/* geiod models --------------------------------------------------------------*/
export function opengeoid( model : number, file : string) : number{}
export function  closegeoid() : void{}
export function  geoidh(pos : number[]) : number{}

/* datum transformation ------------------------------------------------------*/
function int loaddatump(const char *file);
function int tokyo2jgd(double *pos);
function int jgd2tokyo(double *pos);

/* rinex functions -----------------------------------------------------------*/
export function  readrnx (file : string,  rcv : number, opt : string, obs : obs_t,
                    nav : nav_t, sta : sta_t) : number{

                    }
function int readrnxt(const char *file, int rcv, gtime_t ts, gtime_t te,
                    double tint, const char *opt, obs_t *obs, nav_t *nav,
                    sta_t *sta);
function int readrnxc(const char *file, nav_t *nav);
function int outrnxobsh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxobsb(FILE *fp, const rnxopt_t *opt, const obsd_t *obs, int n,
                      int epflag);
function int outrnxnavh (FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxgnavh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxhnavh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxlnavh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxqnavh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxcnavh(FILE *fp, const rnxopt_t *opt, const nav_t *nav);
function int outrnxnavb (FILE *fp, const rnxopt_t *opt, const eph_t *eph);
function int outrnxgnavb(FILE *fp, const rnxopt_t *opt, const geph_t *geph);
function int outrnxhnavb(FILE *fp, const rnxopt_t *opt, const seph_t *seph);
function int rtk_uncompress(const char *file, char *uncfile);
function int convrnx(int format, rnxopt_t *opt, const char *file, char **ofile);
function int  init_rnxctr (rnxctr_t *rnx);
function void free_rnxctr (rnxctr_t *rnx);
function int  open_rnxctr (rnxctr_t *rnx, FILE *fp);
function int  input_rnxctr(rnxctr_t *rnx, FILE *fp);

/* ephemeris and clock functions ---------------------------------------------*/
function double eph2clk (gtime_t time, const eph_t  *eph);
function double geph2clk(gtime_t time, const geph_t *geph);
function double seph2clk(gtime_t time, const seph_t *seph);
function void eph2pos (gtime_t time, const eph_t  *eph,  double *rs, double *dts,
                     double *var);
function void geph2pos(gtime_t time, const geph_t *geph, double *rs, double *dts,
                     double *var);
function void seph2pos(gtime_t time, const seph_t *seph, double *rs, double *dts,
                     double *var);
function int  peph2pos(gtime_t time, int sat, const nav_t *nav, int opt,
                     double *rs, double *dts, double *var);
function void satantoff(gtime_t time, const double *rs, int sat, const nav_t *nav,
                      double *dant);
function int  satpos(gtime_t time, gtime_t teph, int sat, int ephopt,
                   const nav_t *nav, double *rs, double *dts, double *var,
                   int *svh);
function void satposs(gtime_t time, const obsd_t *obs, int n, const nav_t *nav,
                    int sateph, double *rs, double *dts, double *var, int *svh);
function void readsp3(const char *file, nav_t *nav, int opt);
function int  readsap(const char *file, gtime_t time, nav_t *nav);
function int  readdcb(const char *file, nav_t *nav, const sta_t *sta);
function int  readfcb(const char *file, nav_t *nav);
function void alm2pos(gtime_t time, const alm_t *alm, double *rs, double *dts);

function int tle_read(const char *file, tle_t *tle);
function int tle_name_read(const char *file, tle_t *tle);
function int tle_pos(gtime_t time, const char *name, const char *satno,
                   const char *desig, const tle_t *tle, const erp_t *erp,
                   double *rs);

/* receiver raw data functions -----------------------------------------------*/
function unsigned int getbitu(const unsigned char *buff, int pos, int len);
function int          getbits(const unsigned char *buff, int pos, int len);
function void setbitu(unsigned char *buff, int pos, int len, unsigned int data);
function void setbits(unsigned char *buff, int pos, int len, int data);
function unsigned int rtk_crc32  (const unsigned char *buff, int len);
function unsigned int rtk_crc24q (const unsigned char *buff, int len);
function unsigned short rtk_crc16(const unsigned char *buff, int len);
function int decode_word (unsigned int word, unsigned char *data);
function int decode_frame(const unsigned char *buff, eph_t *eph, alm_t *alm,
                        double *ion, double *utc, int *leaps);
function int test_glostr(const unsigned char *buff);
function int decode_glostr(const unsigned char *buff, geph_t *geph);
function int decode_bds_d1(const unsigned char *buff, eph_t *eph);
function int decode_bds_d2(const unsigned char *buff, eph_t *eph);
function int decode_gal_inav(const unsigned char *buff, eph_t *eph);

function int init_raw   (raw_t *raw, int format);
function void free_raw  (raw_t *raw);
function int input_raw  (raw_t *raw, int format, unsigned char data);
function int input_rawf (raw_t *raw, int format, FILE *fp);

function int init_rt17  (raw_t *raw);
function int init_cmr   (raw_t *raw);
function void free_rt17 (raw_t *raw);
function void free_cmr  (raw_t *raw);
function int update_cmr (raw_t *raw, rtksvr_t *svr, obs_t *obs);

function input_oem4  (raw:raw_t,  data:number):number{}
function input_oem3  (raw:raw_t,  data:number):number{}
function input_ubx   (raw:raw_t,  data:number):number{}
function input_ss2   (raw:raw_t,  data:number):number{}
function input_cres  (raw:raw_t,  data:number):number{}
function input_stq   (raw:raw_t,  data:number):number{}
function input_gw10  (raw:raw_t,  data:number):number{}
function input_javad (raw:raw_t,  data:number):number{}
function input_nvs   (raw:raw_t,  data:number):number{}
function input_bnx   (raw:raw_t,  data:number):number{}
function input_rt17  (raw:raw_t,  data:number):number{}
function input_sbf   (raw:raw_t,  data:number):number{}
function input_cmr   (raw:raw_t,  data:number):number{}
function input_lexr  (raw:raw_t,  data:number):number{}
function input_oem4f (raw:raw_t, fp: FILE):number{}
function input_oem3f (raw:raw_t, fp: FILE):number{}
function input_ubxf  (raw:raw_t, fp: FILE):number{}
function input_ss2f  (raw:raw_t, fp: FILE):number{}
function input_cresf (raw:raw_t, fp: FILE):number{}
function input_stqf  (raw:raw_t, fp: FILE):number{}
function input_gw10f (raw:raw_t, fp: FILE):number{}
function input_javadf(raw:raw_t, fp: FILE):number{}
function input_nvsf  (raw:raw_t, fp: FILE):number{}
function input_bnxf  (raw:raw_t, fp: FILE):number{}
function input_rt17f (raw:raw_t, fp: FILE):number{}
function input_sbff  (raw:raw_t, fp: FILE):number{}
function input_cmrf  (raw:raw_t, fp: FILE):number{}
function input_lexrf (raw:raw_t, fp: FILE):number{}

function  gen_ubx (msg:string, buff : Buffer):number{}
function  gen_stq (msg:string, buff : Buffer):number{}
function  gen_nvs (msg:string, buff : Buffer):number{}
function  gen_lexr(msg:string, buff : Buffer):number{}

/* rtcm functions ------------------------------------------------------------*/
function   init_rtcm   (rtcm : rtcm_t) : number{}
function  free_rtcm  (rtcm : rtcm_t) : void{}
function   input_rtcm2 (rtcm:rtcm_t ,  data:number):number{}
function   input_rtcm3 (rtcm:rtcm_t ,  data:number):number{}
function   input_rtcm2f(rtcm:rtcm_t , fp:FILE):number{}
function   input_rtcm3f(rtcm:rtcm_t , fp:FILE):number{}
function   gen_rtcm2   (rtcm:rtcm_t ,  type:number,  sync: number):number{}
function   gen_rtcm3   (rtcm:rtcm_t ,  type:number,  sync: number):number{}

/* solution functions --------------------------------------------------------*/
function void initsolbuf(solbuf_t *solbuf, int cyclic, int nmax);
function void freesolbuf(solbuf_t *solbuf);
function void freesolstatbuf(solstatbuf_t *solstatbuf);
function sol_t *getsol(solbuf_t *solbuf, int index);
function int addsol(solbuf_t *solbuf, const sol_t *sol);
function int readsol (char *files[], int nfile, solbuf_t *sol);
function int readsolt(char *files[], int nfile, gtime_t ts, gtime_t te,
                    double tint, int qflag, solbuf_t *sol);
function int readsolstat(char *files[], int nfile, solstatbuf_t *statbuf);
function int readsolstatt(char *files[], int nfile, gtime_t ts, gtime_t te,
                        double tint, solstatbuf_t *statbuf);
function int inputsol(unsigned char data, gtime_t ts, gtime_t te, double tint,
                    int qflag, const solopt_t *opt, solbuf_t *solbuf);

function int outprcopts(unsigned char *buff, const prcopt_t *opt);
function int outsolheads(unsigned char *buff, const solopt_t *opt);
function int outsols  (unsigned char *buff, const sol_t *sol, const double *rb,
                     const solopt_t *opt);
function int outsolexs(unsigned char *buff, const sol_t *sol, const ssat_t *ssat,
                     const solopt_t *opt);
function void outprcopt(FILE *fp, const prcopt_t *opt);
function void outsolhead(FILE *fp, const solopt_t *opt);
function void outsol  (FILE *fp, const sol_t *sol, const double *rb,
                     const solopt_t *opt);
function void outsolex(FILE *fp, const sol_t *sol, const ssat_t *ssat,
                     const solopt_t *opt);
function int outnmea_rmc(unsigned char *buff, const sol_t *sol);
function int outnmea_gga(unsigned char *buff, const sol_t *sol);
function int outnmea_gsa(unsigned char *buff, const sol_t *sol,
                       const ssat_t *ssat);
function int outnmea_gsv(unsigned char *buff, const sol_t *sol,
                       const ssat_t *ssat);

/* google earth kml converter ------------------------------------------------*/
function int convkml(const char *infile, const char *outfile, gtime_t ts,
                   gtime_t te, double tint, int qflg, double *offset,
                   int tcolor, int pcolor, int outalt, int outtime);

/* gpx converter -------------------------------------------------------------*/
function int convgpx(const char *infile, const char *outfile, gtime_t ts,
                   gtime_t te, double tint, int qflg, double *offset,
                   int outtrk, int outpnt, int outalt, int outtime);

/* sbas functions ------------------------------------------------------------*/
function int  sbsreadmsg (const char *file, int sel, sbs_t *sbs);
function int  sbsreadmsgt(const char *file, int sel, gtime_t ts, gtime_t te,
                        sbs_t *sbs);
function void sbsoutmsg(FILE *fp, sbsmsg_t *sbsmsg);
function int  sbsdecodemsg(gtime_t time, int prn, const unsigned int *words,
                         sbsmsg_t *sbsmsg);
function int sbsupdatecorr(const sbsmsg_t *msg, nav_t *nav);
function int sbssatcorr(gtime_t time, int sat, const nav_t *nav, double *rs,
                      double *dts, double *var);
function int sbsioncorr(gtime_t time, const nav_t *nav, const double *pos,
                      const double *azel, double *delay, double *var);
function double sbstropcorr(gtime_t time, const double *pos, const double *azel,
                          double *var);

/* options functions ---------------------------------------------------------*/
function opt_t *searchopt(const char *name, const opt_t *opts);
function int str2opt(opt_t *opt, const char *str);
function int opt2str(const opt_t *opt, char *str);
function int opt2buf(const opt_t *opt, char *buff);
function int loadopts(const char *file, opt_t *opts);
function int saveopts(const char *file, const char *mode, const char *comment,
                    const opt_t *opts);
function void resetsysopts(void);
function void getsysopts(prcopt_t *popt, solopt_t *sopt, filopt_t *fopt);
function void setsysopts(const prcopt_t *popt, const solopt_t *sopt,
                       const filopt_t *fopt);

/* stream data input and output functions ------------------------------------*/
function void strinitcom(void);
function void strinit  (stream_t *stream);
function void strlock  (stream_t *stream);
function void strunlock(stream_t *stream);
function int  stropen  (stream_t *stream, int type, int mode, const char *path);
function void strclose (stream_t *stream);
function int  strread  (stream_t *stream, unsigned char *buff, int n);
function int  strwrite (stream_t *stream, unsigned char *buff, int n);
function void strsync  (stream_t *stream1, stream_t *stream2);
function int  strstat  (stream_t *stream, char *msg);
function int  strstatx (stream_t *stream, char *msg);
function void strsum   (stream_t *stream, int *inb, int *inr, int *outb, int *outr);
function int  strgetsel(stream_t *stream, char *sel);
function int  strsetsel(stream_t *stream, const char *sel);
function int  strsetsrctbl(stream_t *stream, const char *file);
function void strsetopt(const int *opt);
function gtime_t strgettime(stream_t *stream);
function void strsendnmea(stream_t *stream, const sol_t *sol);
function void strsendcmd(stream_t *stream, const char *cmd);
function void strsettimeout(stream_t *stream, int toinact, int tirecon);
function void strsetdir(const char *dir);
function void strsetproxy(const char *addr);

/* integer ambiguity resolution ----------------------------------------------*/
function int lambda(int n, int m, const double *a, const double *Q, double *F,
                  double *s);
function int lambda_reduction(int n, const double *Q, double *Z);
function int lambda_search(int n, int m, const double *a, const double *Q,
                         double *F, double *s);

/* standard positioning ------------------------------------------------------*/
function int pntpos(const obsd_t *obs, int n, const nav_t *nav,
                  const prcopt_t *opt, sol_t *sol, double *azel,
                  ssat_t *ssat, char *msg);

/* precise positioning -------------------------------------------------------*/
function void rtkinit(rtk_t *rtk, const prcopt_t *opt);
function void rtkfree(rtk_t *rtk);
function int  rtkpos (rtk_t *rtk, const obsd_t *obs, int nobs, const nav_t *nav);
function int  rtkopenstat(const char *file, int level);
function void rtkclosestat(void);
function int  rtkoutstat(rtk_t *rtk, char *buff);

/* precise point positioning -------------------------------------------------*/
function void pppos(rtk_t *rtk, const obsd_t *obs, int n, const nav_t *nav);
function int pppnx(const prcopt_t *opt);
function int pppoutstat(rtk_t *rtk, char *buff);

function int ppp_ar(rtk_t *rtk, const obsd_t *obs, int n, int *exc,
                  const nav_t *nav, const double *azel, double *x, double *P);

function int pppcorr_read(pppcorr_t *corr, const char *file);
function void pppcorr_free(pppcorr_t *corr);
function int pppcorr_trop(const pppcorr_t *corr, gtime_t time, const double *pos,
                        double *ztd, double *std);
function int pppcorr_stec(const pppcorr_t *corr, gtime_t time, const double *pos,
                        double *ion, double *std);

/* post-processing positioning -----------------------------------------------*/
function int postpos(gtime_t ts, gtime_t te, double ti, double tu,
                   const prcopt_t *popt, const solopt_t *sopt,
                   const filopt_t *fopt, char **infile, int n, char *outfile,
                   const char *rov, const char *base);

/* stream server functions ---------------------------------------------------*/
function void strsvrinit (strsvr_t *svr, int nout);
function int  strsvrstart(strsvr_t *svr, int *opts, int *strs, char **paths,
                        strconv_t **conv, char **cmds, char **cmds_priodic,
                        const double *nmeapos);
function void strsvrstop (strsvr_t *svr, char **cmds);
function void strsvrstat (strsvr_t *svr, int *stat, int *byte, int *bps, char *msg);
function strconv_t *strconvnew(int itype, int otype, const char *msgs, int staid,
                             int stasel, const char *opt);
function void strconvfree(strconv_t *conv);
function void strsvrsetsrctbl(strsvr_t *svr, const char *file);

/* rtk server functions ------------------------------------------------------*/
function int  rtksvrinit  (rtksvr_t *svr);
function void rtksvrfree  (rtksvr_t *svr);
function int  rtksvrstart (rtksvr_t *svr, int cycle, int buffsize, int *strs,
                         char **paths, int *formats, int navsel, char **cmds,
                         char **cmds_periodic, char **rcvopts, int nmeacycle,
                         int nmeareq, const double *nmeapos, prcopt_t *prcopt,
                         solopt_t *solopt, stream_t *moni, char *errmsg);
function void rtksvrstop  (rtksvr_t *svr, char **cmds);
function int  rtksvropenstr(rtksvr_t *svr, int index, int str, const char *path,
                          const solopt_t *solopt);
function void rtksvrclosestr(rtksvr_t *svr, int index);
function void rtksvrlock  (rtksvr_t *svr);
function void rtksvrunlock(rtksvr_t *svr);
function int  rtksvrostat (rtksvr_t *svr, int type, gtime_t *time, int *sat,
                         double *az, double *el, int **snr, int *vsat);
function void rtksvrsstat (rtksvr_t *svr, int *sstat, char *msg);
function int  rtksvrmark(rtksvr_t *svr, const char *name, const char *comment);

/* downloader functions ------------------------------------------------------*/
function int dl_readurls(const char *file, char **types, int ntype, url_t *urls,
                       int nmax);
function int dl_readstas(const char *file, char **stas, int nmax);
function int dl_exec(gtime_t ts, gtime_t te, double ti, int seqnos, int seqnoe,
                   const url_t *urls, int nurl, char **stas, int nsta,
                   const char *dir, const char *usr, const char *pwd,
                   const char *proxy, int opts, char *msg, FILE *fp);
function void dl_test(gtime_t ts, gtime_t te, double ti, const url_t *urls,
                    int nurl, char **stas, int nsta, const char *dir,
                    int ncol, int datefmt, FILE *fp);

/* gis data functions --------------------------------------------------------*/
function  gis_read(file : string, gis : gis_t,  layer : number) : number{}
function gis_free(gis : gis_t) : void{}

/* qzss lex functions --------------------------------------------------------*/
function  lexupdatecorr(msg : lexmsg_t, nav : nav_t, tof : Date ) : number{}
function  lexreadmsg(file : string,  sel : number, lex : lex_t) : number{}
function  lexoutmsg(fp : FILE , msg : lexmsg_t) : void{}
function  lexconvbin(int type, int format, const char *infile,
                      const char *outfile) : number{}
function  lexeph2pos(gtime_t time, int sat, const nav_t *nav, double *rs,
                      double *dts, double *var) : number{}
function  lexioncorr(gtime_t time, const nav_t *nav, const double *pos,
                      const double *azel, double *delay, double *var) : number{}

/* application defined functions ---------------------------------------------*/
// function int showmsg(char *format,...);
// function void settspan(gtime_t ts, gtime_t te);
// function void settime(gtime_t time);