import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  fetch("https://learningmgt.onrender.com/swagger-ui/index.html").then(res=> console.log(res))
});
