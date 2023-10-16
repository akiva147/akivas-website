import { z } from "nestjs-zod/z";

export const ObjectIdSchema = z.string().transform((value) => {
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;
  if (!objectIdRegex.test(value)) {
    throw new Error("Invalid ObjectID");
  }
  return value;
});

export const DateStringSchema = z.preprocess(
  (arg) => (typeof arg == "string" ? new Date(arg) : undefined),
  z.date()
);
