export interface Stream {        /* stream type */
     type : number;           /* type (STR_???) */
     mode : number;           /* mode (STR_MODE_?) */
     state : number;          /* state (-1:error,0:close,1:open) */
    inb : number;inr : number;   /* input bytes/rate */
    outb : number,outr : number; /* output bytes/rate */
    tick_i : number; /* input tick tick */
     tick_o : number; /* output tick */
     tact : number;  /* active tick */
    inbt : number,outbt : number; /* input/output bytes at tick */
    //lock_t lock;        /* lock flag */
    //void *port;         /* type dependent port control struct */
     path : string; /* stream path */
     msg : string;  /* stream message */
}