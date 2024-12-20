import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err instanceof Error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const statusCode = (err as any)?.statusCode || 500;
    const message = err?.message || 'Something went wrong!';

    res.status(statusCode).json({
      success: false,
      message,
      error: err,
    });
    next(err);
  }
};

export default globalErrorHandler;
