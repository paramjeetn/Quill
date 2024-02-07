import { publicProcedure, router } from './trpc';

export const appRouter = router({
  data: publicProcedure.query(()=>{
    return 13;
  }),
});


export type AppRouter = typeof appRouter;