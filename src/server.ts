import { buildApp } from './app';
import { Environments } from './config';

const startServer = async () => {
  const app = await buildApp();
  
  try {
    const { PORT } = Environments;
  
    await app.listen({ port: PORT });

    console.log(`Server started at: http://localhost:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
