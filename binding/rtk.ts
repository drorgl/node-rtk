
/* constants -----------------------------------------------------------------*/

const VER_RTKLIB =  "2.4.3";             /* library version */

const PATCH_LEVEL =  "b26";               /* patch level */

const COPYRIGHT_RTKLIB = "Copyright (C) 2007-2016 T.Takasu\nAll rights reserved."

const PI       =   3.1415926535897932 ; /* pi */
const D2R      =   (PI/180.0)         ; /* deg to rad */
const R2D      =   (180.0/PI)         ; /* rad to deg */
const CLIGHT   =   299792458.0        ; /* speed of light (m/s) */
const SC2RAD   =   3.1415926535898    ; /* semi-circle to radian (IS-GPS) */
const AU       =   149597870691.0     ; /* 1 AU (m) */
const AS2R     =   (D2R/3600.0)       ; /* arc sec to radian */

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

const STRFMT_RTCM2  =0  ;                /* stream format: RTCM 2 */
const STRFMT_RTCM3  =1  ;                /* stream format: RTCM 3 */
const STRFMT_OEM4   =2  ;                /* stream format: NovAtel OEMV/4 */
const STRFMT_OEM3   =3  ;                /* stream format: NovAtel OEM3 */
const STRFMT_UBX    =4  ;                /* stream format: u-blox LEA-*T */
const STRFMT_SS2    =5  ;                /* stream format: NovAtel Superstar II */
const STRFMT_CRES   =6  ;                /* stream format: Hemisphere */
const STRFMT_STQ    =7  ;                /* stream format: SkyTraq S1315F */
const STRFMT_GW10   =8  ;                /* stream format: Furuno GW10 */
const STRFMT_JAVAD  =9  ;                /* stream format: JAVAD GRIL/GREIS */
const STRFMT_NVS    =10 ;                /* stream format: NVS NVC08C */
const STRFMT_BINEX  =11 ;                /* stream format: BINEX */
const STRFMT_RT17   =12 ;                /* stream format: Trimble RT17 */
const STRFMT_SEPT   =13 ;                /* stream format: Septentrio */
const STRFMT_CMR    =14 ;                /* stream format: CMR/CMR+ */
const STRFMT_LEXR   =15 ;                /* stream format: Furuno LPY-10000 */
const STRFMT_RINEX  =16 ;                /* stream format: RINEX */
const STRFMT_SP3    =17 ;                /* stream format: SP3 */
const STRFMT_RNXCLK =18 ;               /* stream format: RINEX CLK */
const STRFMT_SBAS   =19 ;                /* stream format: SBAS messages */
const STRFMT_NMEA   =20 ;                /* stream format: NMEA 0183 */
//#ifndef EXTLEX
//const MAXRCVFMT   = 14;                 /* max number of receiver format */
//#else
const MAXRCVFMT   = 15;
//#endif

const STR_MODE_R  =0x1;                 /* stream mode: read */
const STR_MODE_W  =0x2;                 /* stream mode: write */
const STR_MODE_RW =0x3;                 /* stream mode: read/write */

const GEOID_EMBEDDED    =0;             /* geoid model: embedded geoid */
const GEOID_EGM96_M150  =1;             /* geoid model: EGM96 15x15" */
const GEOID_EGM2008_M25 =2;             /* geoid model: EGM2008 2.5x2.5" */
const GEOID_EGM2008_M10 =3;             /* geoid model: EGM2008 1.0x1.0" */
const GEOID_GSI2000_M15 =4;             /* geoid model: GSI geoid 2000 1.0x1.5" */
const GEOID_RAF09       =5;             /* geoid model: IGN RAF09 for France 1.5"x2" */

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
