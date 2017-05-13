/*------------------------------------------------------------------------------
* str2str.c : console version of stream server
*
*          Copyright (C) 2007-2015 by T.TAKASU, All rights reserved.
*
* version : $Revision: 1.1 $ $Date: 2008/07/17 21:54:53 $
* history : 2009/06/17  1.0  new
*           2011/05/29  1.1  add -f, -l and -x option
*           2011/11/29  1.2  fix bug on recognize ntrips:// (rtklib_2.4.1_p4)
*           2012/12/25  1.3  add format conversion functions
*                            add -msg, -opt and -sta options
*                            modify -p option
*           2013/01/25  1.4  fix bug on showing message
*           2014/02/21  1.5  ignore SIG_HUP
*           2014/08/10  1.5  fix bug on showing message
*           2014/08/26  1.6  support input format gw10, binex and rt17
*           2014/10/14  1.7  use stdin or stdout if option -in or -out omitted
*           2014/11/08  1.8  add option -a, -i and -o
*           2015/03/23  1.9  fix bug on parsing of command line options
*-----------------------------------------------------------------------------*/
// #include <signal.h>
// #include <unistd.h>
// #include "rtklib.h"
import * as rtklib from "../../binding/rtk";


 const  rcsid ="$Id:$";

const PRGNAME    = "str2str"      ;    /* program name */
const MAXSTR     = 5              ;    /* max number of streams */
const MAXRCVCMD  = 4096           ;    /* max length of receiver command */
const TRFILE     = "str2str.trace";    /* trace file */

/* global variables ----------------------------------------------------------*/
let  strsvr : rtklib.strsvr_t;                /* stream server */
let intrflg=0;         /* interrupt flag */

/* help text -----------------------------------------------------------------*/
const help = [
"",
" usage: str2str [-in stream] [-out stream [-out stream...]] [options]",
"",
" Input data from a stream and divide and output them to multiple streams",
" The input stream can be serial, tcp client, tcp server, ntrip client, or",
" file. The output stream can be serial, tcp client, tcp server, ntrip server,",
" or file. str2str is a resident type application. To stop it, type ctr-c in",
" console if run foreground or send signal SIGINT for background process.",
" if run foreground or send signal SIGINT for background process.",
" if both of the input stream and the output stream follow #format, the",
" format of input messages are converted to output. To specify the output",
" messages, use -msg option. If the option -in or -out omitted, stdin for",
" input or stdout for output is used.",
" Command options are as follows.",
"",
" -in  stream[#format] input  stream path and format",
" -out stream[#format] output stream path and format",
"",
"  stream path",
"    serial       : serial://port[:brate[:bsize[:parity[:stopb[:fctr]]]]]",
"    tcp server   : tcpsvr://:port",
"    tcp client   : tcpcli://addr[:port]",
"    ntrip client : ntrip://[user[:passwd]@]addr[:port][/mntpnt]",
"    ntrip server : ntrips://[:passwd@]addr[:port][/mntpnt[:str]] (only out)",
"    file         : [file://]path[::T][::+start][::xseppd][::S=swap]",
"",
"  format",
"    rtcm2        : RTCM 2 (only in)",
"    rtcm3        : RTCM 3",
"    nov          : NovAtel OEMV/4/6,OEMStar (only in)",
"    oem3         : NovAtel OEM3 (only in)",
"    ubx          : ublox LEA-4T/5T/6T (only in)",
"    ss2          : NovAtel Superstar II (only in)",
"    hemis        : Hemisphere Eclipse/Crescent (only in)",
"    stq          : SkyTraq S1315F (only in)",
"    gw10         : Furuno GW10 (only in)",
"    javad        : Javad (only in)",
"    nvs          : NVS BINR (only in)",
"    binex        : BINEX (only in)",
"    rt17         : Trimble RT17 (only in)",
"",
" -msg \"type[(tint)][,type[(tint)]...]\"",
"                   rtcm message types and output intervals (s)",
" -sta sta          station id",
" -opt opt          receiver dependent options",
" -s  msec          timeout time (ms) [10000]",
" -r  msec          reconnect interval (ms) [10000]",
" -n  msec          nmea request cycle (m) [0]",
" -f  sec           file swap margin (s) [30]",
" -c  file          receiver commands file [no]",
" -p  lat lon hgt   station position (latitude/longitude/height) (deg,m)",
" -a  antinfo       antenna info (separated by ,)",
" -i  rcvinfo       receiver info (separated by ,)",
" -o  e n u         antenna offst (e,n,u) (m)",
" -l  local_dir     ftp/http local directory []",
" -x  proxy_addr    http/ntrip proxy address [no]",
" -t  level         trace level [0]",
" -h                print help",
];
/* print help ----------------------------------------------------------------*/
function printhelp()
{
    for (let i=0;i<help.length;i++) {
        console.log(help[i]);
    }
    process.exit(0);
}
/* signal handler ------------------------------------------------------------*/
function  sigfunc( sig: number) : void{
    intrflg=1;
}
/* decode format -------------------------------------------------------------*/
function decodefmt(path : string) : number{
    //char *p;
    
    let fmt=-1;
    
    let p = path.indexOf("#");

    if (p != -1){
        if      (path.substr(p) == "#rtcm2") fmt=rtklib.STRFMT_RTCM2;
        else if (path.substr(p) == "#rtcm3") fmt=rtklib.STRFMT_RTCM3;
        else if (path.substr(p) == "#nov"  ) fmt=rtklib.STRFMT_OEM4;
        else if (path.substr(p) == "#oem3" ) fmt=rtklib.STRFMT_OEM3;
        else if (path.substr(p) == "#ubx"  ) fmt=rtklib.STRFMT_UBX;
        else if (path.substr(p) == "#ss2"  ) fmt=rtklib.STRFMT_SS2;
        else if (path.substr(p) == "#hemis") fmt=rtklib.STRFMT_CRES;
        else if (path.substr(p) == "#stq"  ) fmt=rtklib.STRFMT_STQ;
        else if (path.substr(p) == "#gw10" ) fmt=rtklib.STRFMT_GW10;
        else if (path.substr(p) == "#javad") fmt=rtklib.STRFMT_JAVAD;
        else if (path.substr(p) == "#nvs"  ) fmt=rtklib.STRFMT_NVS;
        else if (path.substr(p) == "#binex") fmt=rtklib.STRFMT_BINEX;
        else if (path.substr(p) == "#rt17" ) fmt=rtklib.STRFMT_RT17;
        else return;
        //*p='\0';
    }
    return fmt;
}
/* decode stream path --------------------------------------------------------*/
function decodepath(path : string, type : number, strpath : string, fmt : number):number{
    //char buff[1024],*p;
    
    //strcpy(buff,path);
    
    /* decode format */
    decodefmt(buff,fmt);
    
    /* decode type */
    if (!(p=strstr(buff,"://"))) {
        strcpy(strpath,buff);
        *type=STR_FILE;
        return 1;
    }
    if      (!strncmp(path,"serial",6)) *type=STR_SERIAL;
    else if (!strncmp(path,"tcpsvr",6)) *type=STR_TCPSVR;
    else if (!strncmp(path,"tcpcli",6)) *type=STR_TCPCLI;
    else if (!strncmp(path,"ntrips",6)) *type=STR_NTRIPSVR;
    else if (!strncmp(path,"ntrip", 5)) *type=STR_NTRIPCLI;
    else if (!strncmp(path,"file",  4)) *type=STR_FILE;
    else {
        fprintf(stderr,"stream path error: %s\n",buff);
        return 0;
    }
    strcpy(strpath,p+3);
    return 1;
}
/* read receiver commands ----------------------------------------------------*/
function readcmd(file : string, cmd : string,  type : number) : void{
    FILE *fp;
    char buff[MAXSTR],*p=cmd;
    int i=0;
    
    *p='\0';
    
    if (!(fp=fopen(file,"r"))) return;
    
    while (fgets(buff,sizeof(buff),fp)) {
        if (*buff=='@') i=1;
        else if (i==type&&p+strlen(buff)+1<cmd+MAXRCVCMD) {
            p+=sprintf(p,"%s",buff);
        }
    }
    fclose(fp);
}
/* str2str -------------------------------------------------------------------*/
//int main(int argc, char **argv)
{
    let argc = process.argv.length;
    let argv = process.argv;

    
    let cmd = "";
    const  ss=['E','-','W','C','C'];
    //strconv_t *conv[MAXSTR]={NULL};
    // double pos[3],stapos[3]={0},off[3]={0};
    // char *paths[MAXSTR],s[MAXSTR][MAXSTRPATH]={{0}},*cmdfile="";
    // char *local="",*proxy="",*msg="1004,1019",*opt="",buff[256],*p;
    // char strmsg[MAXSTRMSG]="",*antinfo="",*rcvinfo="";
    // char *ant[]={"","",""},*rcv[]={"","",""};
    // int i,j,n=0,dispint=5000,trlevel=0,opts[]={10000,10000,2000,32768,10,0,30};
    // int types[MAXSTR]={STR_FILE,STR_FILE},stat[MAXSTR]={0},byte[MAXSTR]={0};
    // int bps[MAXSTR]={0},fmts[MAXSTR]={0},sta=0;
    
    for (let i=0;i<MAXSTR;i++){ 
        paths[i]=s[i];
    }
    
    for (let i=1;i<argc;i++) {
        if (!strcmp(argv[i],"-in")&&i+1<argc) {
            if (!decodepath(argv[++i],types,paths[0],fmts)) return -1;
        }
        else if (!strcmp(argv[i],"-out")&&i+1<argc&&n<MAXSTR-1) {
            if (!decodepath(argv[++i],types+n+1,paths[n+1],fmts+n+1)) return -1;
            n++;
        }
        else if (!strcmp(argv[i],"-p")&&i+3<argc) {
            pos[0]=atof(argv[++i])*D2R;
            pos[1]=atof(argv[++i])*D2R;
            pos[2]=atof(argv[++i]);
            pos2ecef(pos,stapos);
        }
        else if (!strcmp(argv[i],"-o")&&i+3<argc) {
            off[0]=atof(argv[++i]);
            off[1]=atof(argv[++i]);
            off[2]=atof(argv[++i]);
        }
        else if (!strcmp(argv[i],"-msg")&&i+1<argc) msg=argv[++i];
        else if (!strcmp(argv[i],"-opt")&&i+1<argc) opt=argv[++i];
        else if (!strcmp(argv[i],"-sta")&&i+1<argc) sta=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-d"  )&&i+1<argc) dispint=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-s"  )&&i+1<argc) opts[0]=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-r"  )&&i+1<argc) opts[1]=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-n"  )&&i+1<argc) opts[5]=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-f"  )&&i+1<argc) opts[6]=atoi(argv[++i]);
        else if (!strcmp(argv[i],"-c"  )&&i+1<argc) cmdfile=argv[++i];
        else if (!strcmp(argv[i],"-a"  )&&i+1<argc) antinfo=argv[++i];
        else if (!strcmp(argv[i],"-i"  )&&i+1<argc) rcvinfo=argv[++i];
        else if (!strcmp(argv[i],"-l"  )&&i+1<argc) local=argv[++i];
        else if (!strcmp(argv[i],"-x"  )&&i+1<argc) proxy=argv[++i];
        else if (!strcmp(argv[i],"-t"  )&&i+1<argc) trlevel=atoi(argv[++i]);
        else if (*argv[i]=='-') printhelp();
    }
    if (n<=0) n=1; /* stdout */
    
    for (let i=0;i<n;i++) {
        if (fmts[i+1]<=0) continue;
        if (fmts[i+1]!=STRFMT_RTCM3) {
            fprintf(stderr,"unsupported output format\n");
            return -1;
        }
        if (fmts[0]<0) {
            fprintf(stderr,"specify input format\n");
            return -1;
        }
        if (!(conv[i]=strconvnew(fmts[0],fmts[i+1],msg,sta,sta!=0,opt))) {
            fprintf(stderr,"stream conversion error\n");
            return -1;
        }
        strcpy(buff,antinfo);
        for (p=strtok(buff,","),j=0;p&&j<3;p=strtok(NULL,",")) ant[j++]=p;
        strcpy(conv[i]->out.sta.antdes,ant[0]);
        strcpy(conv[i]->out.sta.antsno,ant[1]);
        conv[i]->out.sta.antsetup=atoi(ant[2]);
        strcpy(buff,rcvinfo);
        for (p=strtok(buff,","),j=0;p&&j<3;p=strtok(NULL,",")) rcv[j++]=p;
        strcpy(conv[i]->out.sta.rectype,rcv[0]);
        strcpy(conv[i]->out.sta.recver ,rcv[1]);
        strcpy(conv[i]->out.sta.recsno ,rcv[2]);
        matcpy(conv[i]->out.sta.pos,pos,3,1);
        matcpy(conv[i]->out.sta.del,off,3,1);
    }
    signal(SIGTERM,sigfunc);
    signal(SIGINT ,sigfunc);
    signal(SIGHUP ,SIG_IGN);
    signal(SIGPIPE,SIG_IGN);
    
    strsvrinit(&strsvr,n+1);
    
    if (trlevel>0) {
        traceopen(TRFILE);
        tracelevel(trlevel);
    }
    fprintf(stderr,"stream server start\n");
    
    strsetdir(local);
    strsetproxy(proxy);
    
    if (*cmdfile) readcmd(cmdfile,cmd,0);
    
    /* start stream server */
    if (!strsvrstart(&strsvr,opts,types,paths,conv,*cmd?cmd:NULL,stapos)) {
        fprintf(stderr,"stream server start error\n");
        return -1;
    }
    for (intrflg=0;!intrflg;) {
        
        /* get stream server status */
        strsvrstat(&strsvr,stat,byte,bps,strmsg);
        
        /* show stream server status */
        for (i=0,p=buff;i<MAXSTR;i++) p+=sprintf(p,"%c",ss[stat[i]+1]);
        
        fprintf(stderr,"%s [%s] %10d B %7d bps %s\n",
                time_str(utc2gpst(timeget()),0),buff,byte[0],bps[0],strmsg);
        
        sleepms(dispint);
    }
    if (*cmdfile) readcmd(cmdfile,cmd,1);
    
    /* stop stream server */
    strsvrstop(&strsvr,*cmd?cmd:NULL);
    
    for (i=0;i<n;i++) {
        strconvfree(conv[i]);
    }
    if (trlevel>0) {
        traceclose();
    }
    fprintf(stderr,"stream server stop\n");
    return 0;
}
