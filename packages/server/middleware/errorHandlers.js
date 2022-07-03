module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const errorStatus = err?.status ?? 500;
  res.status(errorStatus).send({
    errors: [
      {
        status: errorStatus,
        title: err?.message ?? 'Internal Server Error',
      },
    ],
  });
};
