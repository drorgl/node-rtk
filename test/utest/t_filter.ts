//#include <stdout.h>
import {ecef2pos, PI, R2D} from "../../binding/rtk";

function printmat(A : number[],  n : number,  m : number):void{
	//int i,j;
	for (let i=0;i<n;i++) {
		for (let j=0;j<m;j++) printf("%14.10f ",A[i+j*n]);
		printf("\n");
	}
}
function dbout1(x:number[], y : number[], P : number[], H : number[], R : number[],  n : number,  m : number)
{
	printf("x=[\n"); printmat(x,n,1); printf("];\n");
	printf("y=[\n"); printmat(y,m,1); printf("];\n");
	printf("P=[\n"); printmat(P,n,n); printf("];\n");
	printf("H=[\n"); printmat(H,m,n); printf("];\n");
	printf("R=[\n"); printmat(R,m,m); printf("];\n");
}
function dbout2(x : number[], P : number[],  n : number):void{
	printf("xu=[\n"); printmat(x,n,1); printf("];\n");
	printf("Pu=[\n"); printmat(P,n,n); printf("];\n");
	printf("K=P*H'/(H*P*H'+R);\n");
	
	printf("xd=x+K*y;\n");
	printf("Pd=P-K*H*P\n");
	printf("xu-xd,Pu-Pd\n");
}
