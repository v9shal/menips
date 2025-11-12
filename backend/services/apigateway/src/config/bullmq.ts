import {Queue} from 'bullmq';
import 'dotenv/config';

const redisurl=process.env.redis_url;

if(!redisurl){
    console.error("redis_url not defined in env file");
    process.exit(1);

}
const redisconnection={
    host:process.env.redis_url||'localhost',
    port:parseInt(process.env.redis_port||'6379')
}

export const pingQueue=new Queue('ping-queue',{connection:redisconnection});
console.log('[API Gateway] BullMQ connection configured for ping-queue.');
