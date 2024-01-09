// import { CronJob } from 'cron'; ya no se necesita porque esta en cron-service.ts
import { CronService } from './cron/cron-service';

export class Server {

    public static start() {
        console.log('Server started...')

        // CronService.createJob();
        CronService.createJob(  // need argument
            '*/5 * * * * *',
            () => {
                const date = new Date();
                console.log('5 seconds', date)
            }
        ); 
    }
}


