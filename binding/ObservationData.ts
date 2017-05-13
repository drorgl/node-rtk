export interface IObservationDataRecord{
     time : number;       /* receiver sampling time (GPST) */
     sat : number,rcv : number; /* satellite/receiver number */
     SNR : number []; /* signal strength (0.25 dBHz) */
     LLI : number []; /* loss of lock indicator */
     code : number[]; /* code indicator (CODE_???) */
     L : number[]; /* observation data carrier-phase (cycle) */
     P : number[]; /* observation data pseudorange (m) */
     D : number[]; /* observation data doppler frequency (Hz) */
}

export interface IObservationData {        /* observation data */
     n : number;nmax : number;         /* number of obervation data/allocated */
    data : IObservationDataRecord[];       /* observation data records */
}