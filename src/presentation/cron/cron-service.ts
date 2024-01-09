import { CronJob } from 'cron';

type CronTime = string | Date;   // esto es todo lo que voy a recibir
type OnTick = () => void;

export class CronService {
    
    static createJob( cronTime: CronTime, onTick: OnTick ): CronJob  {   // agregamos :Cronjob para que este visualmente
        
        const job = new CronJob(
            cronTime,
            onTick,
        );
        job.start();
        
        return job; 

    }
}

