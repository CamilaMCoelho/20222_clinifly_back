import app from './config/app';
import env from './config/env';
import patientRoutes from './routes/patientRoutes'

app.use(patientRoutes)

app.listen(env.port || 3333, () => {
  console.log('🔥 Server started')
})
