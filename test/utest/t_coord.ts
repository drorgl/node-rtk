/*------------------------------------------------------------------------------
* rtklib unit test driver : coordinates functions
*-----------------------------------------------------------------------------*/
// #include <stdio.h>
// #include <math.h>
// #include <assert.h>
// #include "../../src/rtklib.h"


import {ecef2pos,pos2ecef, PI, R2D,D2R,ecef2enu,enu2ecef} from "../../binding/rtk";

function assert(val : boolean){
    if (!val){
        console.log("error");
    }
}


/* ecef2pos() */
function utest1(){
    let r1 = [       0.0,       0.0,      0.0];
    let r2 = [10000000.0,       0.0,      0.0];
    let r3 = [       0.0,10000000.0,      0.0];
    let r4 = [       0.0,     0.0, 10000000.0];
    let r5 = [       0.0,     0.0,-10000000.0];
    let r6 = [-3.5173197701E+06,4.1316679161E+06, 3.3412651227E+06];
    let r7 = [-3.5173197701E+06,4.1316679161E+06,-3.3412651227E+06];
    let pos : number[/*3*/] = [];
    ecef2pos(r1,pos);
        assert(pos[2]<0.0);
    ecef2pos(r2,pos);
        assert(pos[0]==0&&pos[1]==0&&pos[2]>0.0);
    ecef2pos(r3,pos);
        assert(pos[0]==0&&Math.abs(pos[1]-PI/2)<1E-6&&pos[2]>0.0);
    ecef2pos(r4,pos);
        assert(Math.abs(pos[0]-PI/2)<1E-6&&pos[2]>0.0);
    ecef2pos(r5,pos);
        assert(Math.abs(pos[0]+PI/2)<1E-6&&pos[2]>0.0);
    ecef2pos(r6,pos);
        assert(Math.abs(pos[0]*R2D-3.1796021375E+01)<1E-7&&
               Math.abs(pos[1]*R2D-1.3040799917E+02)<1E-7&&
               Math.abs(pos[2]-6.8863206206E+01)<1E-4);
    ecef2pos(r7,pos);
        assert(Math.abs(pos[0]*R2D+3.1796021375E+01)<1E-7&&
               Math.abs(pos[1]*R2D-1.3040799917E+02)<1E-7&&
               Math.abs(pos[2]-6.8863206206E+01)<1E-4);
    
    //printf("%s utset1 : OK\n",__FILE__);
    console.log(__filename,"utset1 : OK" );
}
/* pos2ecef() */
function utest2()
{
    //double lat,lon,h,pos[3],posi[3];
    let pos : number[] = [];
    let posi : number[] = [];
    //double r[3];
    let r : number[] = [];
    for (let lat=-90.0;lat<=90.0;lat+=5.0) {
        for (let lon=-180.0;lon<180.0;lon+=5.0) {
            for (let h=-10.0;h<10000.0;h+=100.0) {
                pos[0]=lat*D2R; pos[1]=lon*D2R; pos[2]=h;
                pos2ecef(pos,r);
                ecef2pos(r,posi);
                assert(Math.abs(lat-posi[0]*R2D)<1E-7&&
                       (lat==-90.0||lat==90.0?1:Math.abs(lon-posi[1]*R2D)<1E-7)&&
                       Math.abs(h-posi[2])<1E-4);
            }
        }
    }
    
    console.log(__filename, "utset2 : OK");
    //printf("%s utset2 : OK\n",__FILE__);
}
/* ecef2enu(), enu2ecef() */
function utest3()
{
    let pos1 = [ 0.000*D2R,  0.000*D2R,0.0];
    let pos2 = [35.000*D2R,140.000*D2R,0.0];
    let r1 = [1.0,0.0,0.0];
    let r2 = [0.0,1.0,0.0];
    let r3 = [0.0,0.0,1.0];
    let r4 = [0.3,0.4,0.5];
    //let e[3],r[3];

    let r : number[] = [];
    let e : number[] = [];

    ecef2enu(pos1,r1,e);
        assert(e[0]==0.0&&e[1]==0.0&&e[2]==1.0);
    ecef2enu(pos1,r2,e);
        assert(e[0]==1.0&&e[1]==0.0&&e[2]==0.0);
    ecef2enu(pos1,r3,e);
        assert(e[0]==0.0&&e[1]==1.0&&e[2]==0.0);
    ecef2enu(pos2,r4,e);
        assert(Math.abs(e[0]+0.499254)<1E-6&&
               Math.abs(e[1]-0.393916)<1E-6&&
               Math.abs(e[2]-0.309152)<1E-6);
    enu2ecef(pos2,e,r);
        assert(Math.abs(r[0]-r4[0])<1E-6&&
               Math.abs(r[1]-r4[1])<1E-6&&
               Math.abs(r[2]-r4[2])<1E-6);

    console.log(__filename, "utset3 : OK");
}

//int main(void)
{
    utest1();
    utest2();
    utest3();
//    return 0;
}
