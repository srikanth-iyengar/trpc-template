import { router, publicProcedure } from "./trpc";

export const exampleRouter = router({
  example: publicProcedure.query(({ ctx, input }) => {
    console.log("hi");
    return {"msg": "helloworld"};
  }),
});
